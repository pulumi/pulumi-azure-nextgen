import * as pulumi from "@pulumi/pulumi";
export declare function getNetworkExperimentProfile(args: GetNetworkExperimentProfileArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkExperimentProfileResult>;
export interface GetNetworkExperimentProfileArgs {
    /**
     * The Profile identifier associated with the Tenant and Partner
     */
    readonly profileName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * Defines an Network Experiment Profile and lists of Experiments
 */
export interface GetNetworkExperimentProfileResult {
    /**
     * The state of the Experiment
     */
    readonly enabledState?: string;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: string;
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Resource status.
     */
    readonly resourceState?: string;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type.
     */
    readonly type: string;
}
