import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
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
     * Incoming Traffic Policy
     */
    readonly incomingTrafficPolicy?: string;
    /**
     * Resource Last Operation Name
     */
    readonly lastOperationName: string;
    /**
     * StorageSyncService lastWorkflowId
     */
    readonly lastWorkflowId: string;
    /**
     * The geo-location where the resource lives
     */
    readonly location: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * List of private endpoint connection associated with the specified storage sync service
     */
    readonly privateEndpointConnections: outputs.storagesync.v20200301.PrivateEndpointConnectionResponse[];
    /**
     * StorageSyncService Provisioning State
     */
    readonly provisioningState: string;
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
