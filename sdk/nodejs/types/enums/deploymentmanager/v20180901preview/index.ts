// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const DeploymentMode = {
    Incremental: "Incremental",
    Complete: "Complete",
} as const;

/**
 * Describes the type of ARM deployment to be performed on the resource.
 */
export type DeploymentMode = (typeof DeploymentMode)[keyof typeof DeploymentMode];