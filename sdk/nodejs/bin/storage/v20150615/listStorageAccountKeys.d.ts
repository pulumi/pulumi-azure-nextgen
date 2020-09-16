import * as pulumi from "@pulumi/pulumi";
export declare function listStorageAccountKeys(args: ListStorageAccountKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListStorageAccountKeysResult>;
export interface ListStorageAccountKeysArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    readonly accountName: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    readonly resourceGroupName: string;
}
/**
 * The access keys for the storage account.
 */
export interface ListStorageAccountKeysResult {
    /**
     * The value of key 1.
     */
    readonly key1?: string;
    /**
     * The value of key 2.
     */
    readonly key2?: string;
}
