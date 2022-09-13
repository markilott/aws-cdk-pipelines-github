import { Options } from '../types';

export const options: Options = {
    repoString: 'manuelqg/aws-cdk-pipelines', // GitHub owner/repository
    connectionArn: 'arn:aws:codestar-connections:us-east-1:900126642232:connection/171ba7d9-5a14-4e6a-bfba-b1ddcccc1ca0', // CodeStar GitHub connection ARN
    version: '1', // Increment to trigger a pipeline deployment
    defaultRegion: 'us-east-1',
    toolsAccount: '900126642232', // Account where Pipelines are deployed
    appPipelines: [
        {
            name: 'dev', // Dev environment
            account: '984906628668',
            branch: 'dev',
            preApproval: false // Require approval before Create Change Set
        },
        {
            name: 'prod', // Production environment
            account: '581994098444',
            branch: 'main',
            preApproval: true
        },
        {
            name: 'prod', // Production environment
            account: '581994098444',
            region: 'us-west-1',
            branch: 'main',
            preApproval: true
        }
    ]
};
