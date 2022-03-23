export type Options = {
    repoString: string, // owner/repo
    connectionArn: string, // The CodeStar connection to GitHub (Arn)
    version: string,
    defaultRegion: string,
    toolsAccount: string,
    appPipelines: {
        name: string,
        account: string,
        region?: string, // Use the default region if not specified
        branch: string,
        preApproval?: boolean,
    }[],
};
