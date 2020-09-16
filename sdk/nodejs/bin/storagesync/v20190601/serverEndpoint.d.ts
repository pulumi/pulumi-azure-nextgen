import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
/**
 * Server Endpoint object.
 */
export declare class ServerEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing ServerEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServerEndpoint;
    /**
     * Returns true if the given object is an instance of ServerEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ServerEndpoint;
    /**
     * Cloud Tiering.
     */
    readonly cloudTiering: pulumi.Output<string | undefined>;
    /**
     * Cloud tiering status. Only populated if cloud tiering is enabled.
     */
    readonly cloudTieringStatus: pulumi.Output<outputs.storagesync.v20190601.ServerEndpointCloudTieringStatusResponse>;
    /**
     * Friendly Name
     */
    readonly friendlyName: pulumi.Output<string | undefined>;
    /**
     * Resource Last Operation Name
     */
    readonly lastOperationName: pulumi.Output<string>;
    /**
     * ServerEndpoint lastWorkflowId
     */
    readonly lastWorkflowId: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * Offline data transfer
     */
    readonly offlineDataTransfer: pulumi.Output<string | undefined>;
    /**
     * Offline data transfer share name
     */
    readonly offlineDataTransferShareName: pulumi.Output<string | undefined>;
    /**
     * Offline data transfer storage account resource ID
     */
    readonly offlineDataTransferStorageAccountResourceId: pulumi.Output<string>;
    /**
     * Offline data transfer storage account tenant ID
     */
    readonly offlineDataTransferStorageAccountTenantId: pulumi.Output<string>;
    /**
     * ServerEndpoint Provisioning State
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Recall status. Only populated if cloud tiering is enabled.
     */
    readonly recallStatus: pulumi.Output<outputs.storagesync.v20190601.ServerEndpointRecallStatusResponse>;
    /**
     * Server Local path.
     */
    readonly serverLocalPath: pulumi.Output<string | undefined>;
    /**
     * Server Resource Id.
     */
    readonly serverResourceId: pulumi.Output<string | undefined>;
    /**
     * Server Endpoint sync status
     */
    readonly syncStatus: pulumi.Output<outputs.storagesync.v20190601.ServerEndpointSyncStatusResponse>;
    /**
     * Tier files older than days.
     */
    readonly tierFilesOlderThanDays: pulumi.Output<number | undefined>;
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Level of free space to be maintained by Cloud Tiering if it is enabled.
     */
    readonly volumeFreeSpacePercent: pulumi.Output<number | undefined>;
    /**
     * Create a ServerEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerEndpointArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ServerEndpoint resource.
 */
export interface ServerEndpointArgs {
    /**
     * Cloud Tiering.
     */
    readonly cloudTiering?: pulumi.Input<string>;
    /**
     * Friendly Name
     */
    readonly friendlyName?: pulumi.Input<string>;
    /**
     * Offline data transfer
     */
    readonly offlineDataTransfer?: pulumi.Input<string>;
    /**
     * Offline data transfer share name
     */
    readonly offlineDataTransferShareName?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Name of Server Endpoint object.
     */
    readonly serverEndpointName: pulumi.Input<string>;
    /**
     * Server Local path.
     */
    readonly serverLocalPath?: pulumi.Input<string>;
    /**
     * Server Resource Id.
     */
    readonly serverResourceId?: pulumi.Input<string>;
    /**
     * Name of Storage Sync Service resource.
     */
    readonly storageSyncServiceName: pulumi.Input<string>;
    /**
     * Name of Sync Group resource.
     */
    readonly syncGroupName: pulumi.Input<string>;
    /**
     * Tier files older than days.
     */
    readonly tierFilesOlderThanDays?: pulumi.Input<number>;
    /**
     * Level of free space to be maintained by Cloud Tiering if it is enabled.
     */
    readonly volumeFreeSpacePercent?: pulumi.Input<number>;
}
