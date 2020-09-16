import * as pulumi from "@pulumi/pulumi";
export declare function listRunLogSasUrl(args: ListRunLogSasUrlArgs, opts?: pulumi.InvokeOptions): Promise<ListRunLogSasUrlResult>;
export interface ListRunLogSasUrlArgs {
    /**
     * The name of the container registry.
     */
    readonly registryName: string;
    /**
     * The name of the resource group to which the container registry belongs.
     */
    readonly resourceGroupName: string;
    /**
     * The run ID.
     */
    readonly runId: string;
}
/**
 * The result of get log link operation.
 */
export interface ListRunLogSasUrlResult {
    /**
     * The link to logs for a run on a azure container registry.
     */
    readonly logLink?: string;
}
