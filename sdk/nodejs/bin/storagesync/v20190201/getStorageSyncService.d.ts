import * as pulumi from "@pulumi/pulumi";
export declare function getStorageSyncService(args: GetStorageSyncServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetStorageSyncServiceResult>;
export interface GetStorageSyncServiceArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * Name of Storage Sync Service resource.
     */
    readonly storageSyncServiceName: string;
}
/**
 * Storage Sync Service object.
 */
export interface GetStorageSyncServiceResult {
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Storage Sync service status.
     */
    readonly storageSyncServiceStatus: number;
    /**
     * Storage Sync service Uid
     */
    readonly storageSyncServiceUid: string;
    /**
     * Resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
