import * as pulumi from "@pulumi/pulumi";
export declare function listWebAppAzureStorageAccounts(args: ListWebAppAzureStorageAccountsArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppAzureStorageAccountsResult>;
export interface ListWebAppAzureStorageAccountsArgs {
    /**
     * Name of the app.
     */
    readonly name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
}
/**
 * AzureStorageInfo dictionary resource.
 */
export interface ListWebAppAzureStorageAccountsResult {
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
