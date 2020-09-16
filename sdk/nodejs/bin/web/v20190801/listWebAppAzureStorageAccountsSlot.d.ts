import * as pulumi from "@pulumi/pulumi";
export declare function listWebAppAzureStorageAccountsSlot(args: ListWebAppAzureStorageAccountsSlotArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppAzureStorageAccountsSlotResult>;
export interface ListWebAppAzureStorageAccountsSlotArgs {
    /**
     * Name of the app.
     */
    readonly name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will update the Azure storage account configurations for the production slot.
     */
    readonly slot: string;
}
/**
 * AzureStorageInfo dictionary resource.
 */
export interface ListWebAppAzureStorageAccountsSlotResult {
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
