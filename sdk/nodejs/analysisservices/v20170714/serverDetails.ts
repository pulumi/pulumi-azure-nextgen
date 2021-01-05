// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * Represents an instance of an Analysis Services resource.
 */
export class ServerDetails extends pulumi.CustomResource {
    /**
     * Get an existing ServerDetails resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServerDetails {
        return new ServerDetails(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:analysisservices/v20170714:ServerDetails';

    /**
     * Returns true if the given object is an instance of ServerDetails.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServerDetails {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServerDetails.__pulumiType;
    }

    /**
     * A collection of AS server administrators
     */
    public readonly asAdministrators!: pulumi.Output<outputs.analysisservices.v20170714.ServerAdministratorsResponse | undefined>;
    /**
     * The SAS container URI to the backup container.
     */
    public readonly backupBlobContainerUri!: pulumi.Output<string | undefined>;
    /**
     * The gateway details configured for the AS server.
     */
    public readonly gatewayDetails!: pulumi.Output<outputs.analysisservices.v20170714.GatewayDetailsResponse | undefined>;
    /**
     * Location of the Analysis Services resource.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The managed mode of the server (0 = not managed, 1 = managed).
     */
    public readonly managedMode!: pulumi.Output<number | undefined>;
    /**
     * The name of the Analysis Services resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The current deployment state of Analysis Services resource. The provisioningState is to indicate states for resource provisioning.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The full name of the Analysis Services resource.
     */
    public /*out*/ readonly serverFullName!: pulumi.Output<string>;
    /**
     * The server monitor mode for AS server
     */
    public readonly serverMonitorMode!: pulumi.Output<number | undefined>;
    /**
     * The SKU of the Analysis Services resource.
     */
    public readonly sku!: pulumi.Output<outputs.analysisservices.v20170714.ResourceSkuResponse>;
    /**
     * The current state of Analysis Services resource. The state is to indicate more states outside of resource provisioning.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Key-value pairs of additional resource provisioning properties.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the Analysis Services resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ServerDetails resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerDetailsArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.location === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'serverName'");
            }
            if ((!args || args.sku === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'sku'");
            }
            inputs["asAdministrators"] = args ? args.asAdministrators : undefined;
            inputs["backupBlobContainerUri"] = args ? args.backupBlobContainerUri : undefined;
            inputs["gatewayDetails"] = args ? args.gatewayDetails : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["managedMode"] = args ? args.managedMode : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["serverMonitorMode"] = args ? args.serverMonitorMode : undefined;
            inputs["serverName"] = args ? args.serverName : undefined;
            inputs["sku"] = args ? args.sku : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["serverFullName"] = undefined /*out*/;
            inputs["state"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["asAdministrators"] = undefined /*out*/;
            inputs["backupBlobContainerUri"] = undefined /*out*/;
            inputs["gatewayDetails"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["managedMode"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["serverFullName"] = undefined /*out*/;
            inputs["serverMonitorMode"] = undefined /*out*/;
            inputs["sku"] = undefined /*out*/;
            inputs["state"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:analysisservices/latest:ServerDetails" }, { type: "azure-nextgen:analysisservices/v20160516:ServerDetails" }, { type: "azure-nextgen:analysisservices/v20170801:ServerDetails" }, { type: "azure-nextgen:analysisservices/v20170801beta:ServerDetails" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(ServerDetails.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a ServerDetails resource.
 */
export interface ServerDetailsArgs {
    /**
     * A collection of AS server administrators
     */
    readonly asAdministrators?: pulumi.Input<inputs.analysisservices.v20170714.ServerAdministrators>;
    /**
     * The SAS container URI to the backup container.
     */
    readonly backupBlobContainerUri?: pulumi.Input<string>;
    /**
     * The gateway details configured for the AS server.
     */
    readonly gatewayDetails?: pulumi.Input<inputs.analysisservices.v20170714.GatewayDetails>;
    /**
     * Location of the Analysis Services resource.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The managed mode of the server (0 = not managed, 1 = managed).
     */
    readonly managedMode?: pulumi.Input<enums.analysisservices.v20170714.ManagedMode>;
    /**
     * The name of the Azure Resource group of which a given Analysis Services server is part. This name must be at least 1 character in length, and no more than 90.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The server monitor mode for AS server
     */
    readonly serverMonitorMode?: pulumi.Input<enums.analysisservices.v20170714.ServerMonitorMode>;
    /**
     * The name of the Analysis Services server. It must be a minimum of 3 characters, and a maximum of 63.
     */
    readonly serverName: pulumi.Input<string>;
    /**
     * The SKU of the Analysis Services resource.
     */
    readonly sku: pulumi.Input<inputs.analysisservices.v20170714.ResourceSku>;
    /**
     * Key-value pairs of additional resource provisioning properties.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
