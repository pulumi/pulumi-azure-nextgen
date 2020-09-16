import * as pulumi from "@pulumi/pulumi";
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
     * Friendly Name
     */
    readonly friendlyName?: string;
    /**
     * Resource Last Operation Name
     */
    readonly lastOperationName?: string;
    /**
     * ServerEndpoint lastWorkflowId
     */
    readonly lastWorkflowId?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * ServerEndpoint Provisioning State
     */
    readonly provisioningState?: string;
    /**
     * Server Local path.
     */
    readonly serverLocalPath?: string;
    /**
     * Server Resource Id.
     */
    readonly serverResourceId?: string;
    /**
     * Sync Health Status
     */
    readonly syncStatus?: {
        [key: string]: any;
    };
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
    /**
     * Level of free space to be maintained by Cloud Tiering if it is enabled.
     */
    readonly volumeFreeSpacePercent?: number;
}
