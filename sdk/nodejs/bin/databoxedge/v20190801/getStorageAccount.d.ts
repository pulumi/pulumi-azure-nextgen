import * as pulumi from "@pulumi/pulumi";
export declare function getStorageAccount(args: GetStorageAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageAccountResult>;
export interface GetStorageAccountArgs {
    /**
     * The device name.
     */
    readonly deviceName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
    /**
     * The storage account name.
     */
    readonly storageAccountName: string;
}
/**
 * Represents a Storage Account on the  Data Box Edge/Gateway device.
 */
export interface GetStorageAccountResult {
    /**
     * BlobEndpoint of Storage Account
     */
    readonly blobEndpoint: string;
    /**
     * The Container Count. Present only for Storage Accounts with DataPolicy set to Cloud.
     */
    readonly containerCount: number;
    /**
     * Data policy of the storage Account.
     */
    readonly dataPolicy?: string;
    /**
     * Description for the storage Account.
     */
    readonly description?: string;
    /**
     * The object name.
     */
    readonly name: string;
    /**
     * Storage Account Credential Id
     */
    readonly storageAccountCredentialId?: string;
    /**
     * Current status of the storage account
     */
    readonly storageAccountStatus?: string;
    /**
     * The hierarchical type of the object.
     */
    readonly type: string;
}
