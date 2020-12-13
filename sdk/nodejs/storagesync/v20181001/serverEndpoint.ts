// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Server Endpoint object.
 */
export class ServerEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing ServerEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServerEndpoint {
        return new ServerEndpoint(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:storagesync/v20181001:ServerEndpoint';

    /**
     * Returns true if the given object is an instance of ServerEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServerEndpoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServerEndpoint.__pulumiType;
    }

    /**
     * Cloud Tiering.
     */
    public readonly cloudTiering!: pulumi.Output<string | undefined>;
    /**
     * Friendly Name
     */
    public readonly friendlyName!: pulumi.Output<string | undefined>;
    /**
     * Resource Last Operation Name
     */
    public /*out*/ readonly lastOperationName!: pulumi.Output<string | undefined>;
    /**
     * ServerEndpoint lastWorkflowId
     */
    public /*out*/ readonly lastWorkflowId!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Offline data transfer
     */
    public readonly offlineDataTransfer!: pulumi.Output<string | undefined>;
    /**
     * Offline data transfer share name
     */
    public readonly offlineDataTransferShareName!: pulumi.Output<string | undefined>;
    /**
     * Offline data transfer storage account resource ID
     */
    public /*out*/ readonly offlineDataTransferStorageAccountResourceId!: pulumi.Output<string>;
    /**
     * Offline data transfer storage account tenant ID
     */
    public /*out*/ readonly offlineDataTransferStorageAccountTenantId!: pulumi.Output<string>;
    /**
     * ServerEndpoint Provisioning State
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Server Local path.
     */
    public readonly serverLocalPath!: pulumi.Output<string | undefined>;
    /**
     * Server Resource Id.
     */
    public readonly serverResourceId!: pulumi.Output<string | undefined>;
    /**
     * Server Endpoint properties.
     */
    public /*out*/ readonly syncStatus!: pulumi.Output<outputs.storagesync.v20181001.ServerEndpointHealthResponse | undefined>;
    /**
     * Tier files older than days.
     */
    public readonly tierFilesOlderThanDays!: pulumi.Output<number | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Level of free space to be maintained by Cloud Tiering if it is enabled.
     */
    public readonly volumeFreeSpacePercent!: pulumi.Output<number | undefined>;

    /**
     * Create a ServerEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerEndpointArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverEndpointName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'serverEndpointName'");
            }
            if ((!args || args.storageSyncServiceName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'storageSyncServiceName'");
            }
            if ((!args || args.syncGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'syncGroupName'");
            }
            inputs["cloudTiering"] = args ? args.cloudTiering : undefined;
            inputs["friendlyName"] = args ? args.friendlyName : undefined;
            inputs["offlineDataTransfer"] = args ? args.offlineDataTransfer : undefined;
            inputs["offlineDataTransferShareName"] = args ? args.offlineDataTransferShareName : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["serverEndpointName"] = args ? args.serverEndpointName : undefined;
            inputs["serverLocalPath"] = args ? args.serverLocalPath : undefined;
            inputs["serverResourceId"] = args ? args.serverResourceId : undefined;
            inputs["storageSyncServiceName"] = args ? args.storageSyncServiceName : undefined;
            inputs["syncGroupName"] = args ? args.syncGroupName : undefined;
            inputs["tierFilesOlderThanDays"] = args ? args.tierFilesOlderThanDays : undefined;
            inputs["volumeFreeSpacePercent"] = args ? args.volumeFreeSpacePercent : undefined;
            inputs["lastOperationName"] = undefined /*out*/;
            inputs["lastWorkflowId"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["offlineDataTransferStorageAccountResourceId"] = undefined /*out*/;
            inputs["offlineDataTransferStorageAccountTenantId"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["syncStatus"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["cloudTiering"] = undefined /*out*/;
            inputs["friendlyName"] = undefined /*out*/;
            inputs["lastOperationName"] = undefined /*out*/;
            inputs["lastWorkflowId"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["offlineDataTransfer"] = undefined /*out*/;
            inputs["offlineDataTransferShareName"] = undefined /*out*/;
            inputs["offlineDataTransferStorageAccountResourceId"] = undefined /*out*/;
            inputs["offlineDataTransferStorageAccountTenantId"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["serverLocalPath"] = undefined /*out*/;
            inputs["serverResourceId"] = undefined /*out*/;
            inputs["syncStatus"] = undefined /*out*/;
            inputs["tierFilesOlderThanDays"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["volumeFreeSpacePercent"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:storagesync/latest:ServerEndpoint" }, { type: "azure-nextgen:storagesync/v20170605preview:ServerEndpoint" }, { type: "azure-nextgen:storagesync/v20180402:ServerEndpoint" }, { type: "azure-nextgen:storagesync/v20180701:ServerEndpoint" }, { type: "azure-nextgen:storagesync/v20190201:ServerEndpoint" }, { type: "azure-nextgen:storagesync/v20190301:ServerEndpoint" }, { type: "azure-nextgen:storagesync/v20190601:ServerEndpoint" }, { type: "azure-nextgen:storagesync/v20191001:ServerEndpoint" }, { type: "azure-nextgen:storagesync/v20200301:ServerEndpoint" }, { type: "azure-nextgen:storagesync/v20200901:ServerEndpoint" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(ServerEndpoint.__pulumiType, name, inputs, opts);
    }
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
