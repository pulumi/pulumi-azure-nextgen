import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listStorageAccountKeys(args: ListStorageAccountKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListStorageAccountKeysResult>;
export interface ListStorageAccountKeysArgs {
    /**
     * The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
     */
    readonly accountName: string;
    /**
     * Specifies type of the key to be listed. Possible value is kerb.
     */
    readonly expand?: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    readonly resourceGroupName: string;
}
/**
 * The response from the ListKeys operation.
 */
export interface ListStorageAccountKeysResult {
    /**
     * Gets the list of storage account keys and their properties for the specified storage account.
     */
    readonly keys: outputs.storage.v20190401.StorageAccountKeyResponse[];
}
