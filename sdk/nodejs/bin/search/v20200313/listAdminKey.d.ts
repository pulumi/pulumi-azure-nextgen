import * as pulumi from "@pulumi/pulumi";
export declare function listAdminKey(args: ListAdminKeyArgs, opts?: pulumi.InvokeOptions): Promise<ListAdminKeyResult>;
export interface ListAdminKeyArgs {
    /**
     * The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the Azure Cognitive Search service associated with the specified resource group.
     */
    readonly searchServiceName: string;
}
/**
 * Response containing the primary and secondary admin API keys for a given Azure Cognitive Search service.
 */
export interface ListAdminKeyResult {
    /**
     * The primary admin API key of the Search service.
     */
    readonly primaryKey: string;
    /**
     * The secondary admin API key of the Search service.
     */
    readonly secondaryKey: string;
}
