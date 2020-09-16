import * as pulumi from "@pulumi/pulumi";
export declare function getSyncGroup(args: GetSyncGroupArgs, opts?: pulumi.InvokeOptions): Promise<GetSyncGroupResult>;
export interface GetSyncGroupArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * Name of Storage Sync Service resource.
     */
    readonly storageSyncServiceName: string;
    /**
     * Name of Sync Group resource.
     */
    readonly syncGroupName: string;
}
/**
 * Sync Group object.
 */
export interface GetSyncGroupResult {
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Sync group status
     */
    readonly syncGroupStatus: string;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
    /**
     * Unique Id
     */
    readonly uniqueId?: string;
}
