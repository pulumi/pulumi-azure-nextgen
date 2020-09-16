import * as pulumi from "@pulumi/pulumi";
export declare function listAdminKey(args: ListAdminKeyArgs, opts?: pulumi.InvokeOptions): Promise<ListAdminKeyResult>;
export interface ListAdminKeyArgs {
    /**
     * The name of the resource group within the current subscription.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the Search service for which to list admin keys.
     */
    readonly serviceName: string;
}
/**
 * Response containing the primary and secondary API keys for a given Azure Search service.
 */
export interface ListAdminKeyResult {
    /**
     * The primary API key of the Search service.
     */
    readonly primaryKey: string;
    /**
     * The secondary API key of the Search service.
     */
    readonly secondaryKey: string;
}
