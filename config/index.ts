import { Options } from '../types';

export const options: Options = {
    repoString: 'mygithub/', // GitHub owner/repository
    connectionArn: 'arn:aws:codestar-connections:ap-southeast-1:444444444444:connection/xxxxxxxxxxxxxxxxxx', // CodeStar GitHub connection ARN
    version: '1', // Increment to trigger a pipeline deployment
    defaultRegion: 'us-east-1',
    toolsAccount: '900126642232', // Account where Pipelines are deployed
    appPipelines: [
        {
            name: 'dev', // Dev environment
            account: '984906628668',
            region: 'us-west-1'
            branch: 'dev',
            preApproval: false, // Require approval before Create Change Set
        },
        {
            name: 'prod', // Production environment
            account: '581994098444',
            region: 'us-west-2',
            branch: 'main',
            preApproval: true,
        },
    ],
};
