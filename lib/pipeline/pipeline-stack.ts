/* eslint-disable no-new */
import { Construct } from 'constructs';
import {
    Stack, StackProps,
} from 'aws-cdk-lib';
import {
    CodePipeline, CodePipelineSource, ManualApprovalStep, ShellStep,
} from 'aws-cdk-lib/pipelines';
import { Options } from '../../types';
import { ApplicationStage } from '../application/application-stage';

interface PipelineStackProps extends StackProps {
    deployEnv: {
        region: string,
        account: string,
    },
    branch: string,
    preApproval?: boolean,
    envName: string,
    options: Options,
}

export class PipelineStack extends Stack {
    /**
     * Creates a deployment Pipeline.
     * Can be run for each environment to create separate
     * pipelines for each.
     *
     * @param {Construct} scope
     * @param {string} id
     * @param {StackProps=} props
     */
    constructor(scope: Construct, id: string, props: PipelineStackProps) {
        super(scope, id, props);

        // Environment props
        const {
            deployEnv, branch, preApproval, envName, options,
        } = props;

        // Common options
        const {
            repoString, connectionArn, version,
        } = options;

        // Complete the pipeline using CDK Pipelines
        const pipeline = new CodePipeline(this, 'DemoPipeline', {
            pipelineName: `DemoPipeline-${envName}-${deployEnv.region}`,
            crossAccountKeys: true,
            synth: new ShellStep('Synth', {
                input: CodePipelineSource.connection(repoString, branch, {
                    connectionArn,
                }),
                commands: [
                    'npm ci',
                    'npm run build',
                    'npx cdk synth',
                ],
            }),
        });

        const applicationStage = new ApplicationStage(this, 'DeployStage', {
            env: deployEnv,
            version,
        });
        pipeline.addStage(applicationStage, {
            pre: (preApproval) ? [
                new ManualApprovalStep('PreApproval'),
            ] : [],
        });
    }
}
