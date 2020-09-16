import * as pulumi from "@pulumi/pulumi";
export declare function listBatchAccountKeys(args: ListBatchAccountKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListBatchAccountKeysResult>;
export interface ListBatchAccountKeysArgs {
    /**
     * The name of the Batch account.
     */
    readonly accountName: string;
    /**
     * The name of the resource group that contains the Batch account.
     */
    readonly resourceGroupName: string;
}
/**
 * A set of Azure Batch account keys.
 */
export interface ListBatchAccountKeysResult {
    /**
     * The Batch account name.
     */
    readonly accountName: string;
    /**
     * The primary key associated with the account.
     */
    readonly primary: string;
    /**
     * The secondary key associated with the account.
     */
    readonly secondary: string;
}
