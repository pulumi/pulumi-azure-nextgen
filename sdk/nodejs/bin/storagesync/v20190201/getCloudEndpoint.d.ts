import * as pulumi from "@pulumi/pulumi";
export declare function getCloudEndpoint(args: GetCloudEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetCloudEndpointResult>;
export interface GetCloudEndpointArgs {
    /**
     * Name of Cloud Endpoint object.
     */
    readonly cloudEndpointName: string;
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
 * Cloud Endpoint object.
 */
export interface GetCloudEndpointResult {
    /**
     * Azure file share name
     */
    readonly azureFileShareName?: string;
    /**
     * Backup Enabled
     */
    readonly backupEnabled: string;
    /**
     * Friendly Name
     */
    readonly friendlyName?: string;
    /**
     * Resource Last Operation Name
     */
    readonly lastOperationName?: string;
    /**
     * CloudEndpoint lastWorkflowId
     */
    readonly lastWorkflowId?: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * Partnership Id
     */
    readonly partnershipId?: string;
    /**
     * CloudEndpoint Provisioning State
     */
    readonly provisioningState?: string;
    /**
     * Storage Account Resource Id
     */
    readonly storageAccountResourceId?: string;
    /**
     * Storage Account Tenant Id
     */
    readonly storageAccountTenantId?: string;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
