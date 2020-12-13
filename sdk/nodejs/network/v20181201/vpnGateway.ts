// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * VpnGateway Resource.
 */
export class VpnGateway extends pulumi.CustomResource {
    /**
     * Get an existing VpnGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VpnGateway {
        return new VpnGateway(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:network/v20181201:VpnGateway';

    /**
     * Returns true if the given object is an instance of VpnGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpnGateway {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpnGateway.__pulumiType;
    }

    /**
     * Local network gateway's BGP speaker settings.
     */
    public readonly bgpSettings!: pulumi.Output<outputs.network.v20181201.BgpSettingsResponse | undefined>;
    /**
     * List of all vpn connections to the gateway.
     */
    public readonly connections!: pulumi.Output<outputs.network.v20181201.VpnConnectionResponse[] | undefined>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The VirtualHub to which the gateway belongs
     */
    public readonly virtualHub!: pulumi.Output<outputs.network.v20181201.SubResourceResponse | undefined>;
    /**
     * The scale unit for this vpn gateway.
     */
    public readonly vpnGatewayScaleUnit!: pulumi.Output<number | undefined>;

    /**
     * Create a VpnGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpnGatewayArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.gatewayName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'gatewayName'");
            }
            if ((!args || args.location === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            inputs["bgpSettings"] = args ? args.bgpSettings : undefined;
            inputs["connections"] = args ? args.connections : undefined;
            inputs["gatewayName"] = args ? args.gatewayName : undefined;
            inputs["id"] = args ? args.id : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["virtualHub"] = args ? args.virtualHub : undefined;
            inputs["vpnGatewayScaleUnit"] = args ? args.vpnGatewayScaleUnit : undefined;
            inputs["etag"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
        } else {
            inputs["bgpSettings"] = undefined /*out*/;
            inputs["connections"] = undefined /*out*/;
            inputs["etag"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["virtualHub"] = undefined /*out*/;
            inputs["vpnGatewayScaleUnit"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:network/latest:VpnGateway" }, { type: "azure-nextgen:network/v20180401:VpnGateway" }, { type: "azure-nextgen:network/v20180601:VpnGateway" }, { type: "azure-nextgen:network/v20180701:VpnGateway" }, { type: "azure-nextgen:network/v20180801:VpnGateway" }, { type: "azure-nextgen:network/v20181001:VpnGateway" }, { type: "azure-nextgen:network/v20181101:VpnGateway" }, { type: "azure-nextgen:network/v20190201:VpnGateway" }, { type: "azure-nextgen:network/v20190401:VpnGateway" }, { type: "azure-nextgen:network/v20190601:VpnGateway" }, { type: "azure-nextgen:network/v20190701:VpnGateway" }, { type: "azure-nextgen:network/v20190801:VpnGateway" }, { type: "azure-nextgen:network/v20190901:VpnGateway" }, { type: "azure-nextgen:network/v20191101:VpnGateway" }, { type: "azure-nextgen:network/v20191201:VpnGateway" }, { type: "azure-nextgen:network/v20200301:VpnGateway" }, { type: "azure-nextgen:network/v20200401:VpnGateway" }, { type: "azure-nextgen:network/v20200501:VpnGateway" }, { type: "azure-nextgen:network/v20200601:VpnGateway" }, { type: "azure-nextgen:network/v20200701:VpnGateway" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(VpnGateway.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a VpnGateway resource.
 */
export interface VpnGatewayArgs {
    /**
     * Local network gateway's BGP speaker settings.
     */
    readonly bgpSettings?: pulumi.Input<inputs.network.v20181201.BgpSettings>;
    /**
     * List of all vpn connections to the gateway.
     */
    readonly connections?: pulumi.Input<pulumi.Input<inputs.network.v20181201.VpnConnection>[]>;
    /**
     * The name of the gateway.
     */
    readonly gatewayName: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The resource group name of the VpnGateway.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The VirtualHub to which the gateway belongs
     */
    readonly virtualHub?: pulumi.Input<inputs.network.v20181201.SubResource>;
    /**
     * The scale unit for this vpn gateway.
     */
    readonly vpnGatewayScaleUnit?: pulumi.Input<number>;
}
