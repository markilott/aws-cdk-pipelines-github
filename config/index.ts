import { Options } from '../types';

export const options: Options = {
    repoString: 'mygithub/myrepo', // GitHub owner/repository
    connectionArn: 'arn:aws:codestar-connections:ap-southeast-1:444444444444:connection/xxxxxxxxxxxxxxxxxx', // CodeStar GitHub connection ARN
    version: '1', // Increment to trigger a pipeline deployment
    defaultRegion: 'ap-southeast-1',
    toolsAccount: '444444444444', // Account where Pipelines are deployed
    appPipelines: [
        {
            name: 'dev', // Dev environment
            account: '111111111111',
            branch: 'dev',
            preApproval: false, // Require approval before Create Change Set
        },
        {
            name: 'uat', // UAT/QA environment
            account: '222222222222',
            branch: 'uat',
            preApproval: false,
        },
        {
            name: 'prod', // Production environment
            account: '333333333333',
            branch: 'main',
            preApproval: true,
        },
        {
            name: 'prod', // Production environment
            account: '333333333333',
            region: 'ap-southeast-2',
            branch: 'main',
            preApproval: true,
        },
    ],
};
