import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getServerEndpoint(args: GetServerEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetServerEndpointResult>;
export interface GetServerEndpointArgs {
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * Name of Server Endpoint object.
     */
    readonly serverEndpointName: string;
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
 * Server Endpoint object.
 */
export interface GetServerEndpointResult {
    /**
     * Cloud Tiering.
     */
    readonly cloudTiering?: string;
    /**
     * Cloud tiering status. Only populated if cloud tiering is enabled.
     */
    readonly cloudTieringStatus: outputs.storagesync.v20191001.ServerEndpointCloudTieringStatusResponse;
    /**
     * Friendly Name
     */
    readonly friendlyName?: string;
    /**
     * Resource Last Operation Name
     */
    readonly lastOperationName: string;
    /**
     * ServerEndpoint lastWorkflowId
     */
    readonly lastWorkflowId: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Offline data transfer
     */
    readonly offlineDataTransfer?: string;
    /**
     * Offline data transfer share name
     */
    readonly offlineDataTransferShareName?: string;
    /**
     * Offline data transfer storage account resource ID
     */
    readonly offlineDataTransferStorageAccountResourceId: string;
    /**
     * Offline data transfer storage account tenant ID
     */
    readonly offlineDataTransferStorageAccountTenantId: string;
    /**
     * ServerEndpoint Provisioning State
     */
    readonly provisioningState: string;
    /**
     * Recall status. Only populated if cloud tiering is enabled.
     */
    readonly recallStatus: outputs.storagesync.v20191001.ServerEndpointRecallStatusResponse;
    /**
     * Server Local path.
     */
    readonly serverLocalPath?: string;
    /**
     * Server Resource Id.
     */
    readonly serverResourceId?: string;
    /**
     * Server Endpoint sync status
     */
    readonly syncStatus: outputs.storagesync.v20191001.ServerEndpointSyncStatusResponse;
    /**
     * Tier files older than days.
     */
    readonly tierFilesOlderThanDays?: number;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
    /**
     * Level of free space to be maintained by Cloud Tiering if it is enabled.
     */
    readonly volumeFreeSpacePercent?: number;
}
