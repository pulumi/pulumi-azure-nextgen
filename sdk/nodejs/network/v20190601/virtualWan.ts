// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

/**
 * VirtualWAN Resource.
 */
export class VirtualWan extends pulumi.CustomResource {
    /**
     * Get an existing VirtualWan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualWan {
        return new VirtualWan(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-nextgen:network/v20190601:VirtualWan';

    /**
     * Returns true if the given object is an instance of VirtualWan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualWan {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualWan.__pulumiType;
    }

    /**
     * True if branch to branch traffic is allowed.
     */
    public readonly allowBranchToBranchTraffic!: pulumi.Output<boolean | undefined>;
    /**
     * True if Vnet to Vnet traffic is allowed.
     */
    public readonly allowVnetToVnetTraffic!: pulumi.Output<boolean | undefined>;
    /**
     * Vpn encryption to be disabled or not.
     */
    public readonly disableVpnEncryption!: pulumi.Output<boolean | undefined>;
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
     * The office local breakout category.
     */
    public /*out*/ readonly office365LocalBreakoutCategory!: pulumi.Output<string>;
    /**
     * List of all P2SVpnServerConfigurations associated with the virtual wan.
     */
    public readonly p2SVpnServerConfigurations!: pulumi.Output<outputs.network.v20190601.P2SVpnServerConfigurationResponse[] | undefined>;
    /**
     * The provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The Security Provider name.
     */
    public readonly securityProviderName!: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * List of VirtualHubs in the VirtualWAN.
     */
    public /*out*/ readonly virtualHubs!: pulumi.Output<outputs.network.v20190601.SubResourceResponse[]>;
    /**
     * List of VpnSites in the VirtualWAN.
     */
    public /*out*/ readonly vpnSites!: pulumi.Output<outputs.network.v20190601.SubResourceResponse[]>;

    /**
     * Create a VirtualWan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualWanArgs, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (!(opts && opts.id)) {
            if ((!args || args.location === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualWANName === undefined) && !(opts && opts.urn)) {
                throw new Error("Missing required property 'virtualWANName'");
            }
            inputs["allowBranchToBranchTraffic"] = args ? args.allowBranchToBranchTraffic : undefined;
            inputs["allowVnetToVnetTraffic"] = args ? args.allowVnetToVnetTraffic : undefined;
            inputs["disableVpnEncryption"] = args ? args.disableVpnEncryption : undefined;
            inputs["id"] = args ? args.id : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["p2SVpnServerConfigurations"] = args ? args.p2SVpnServerConfigurations : undefined;
            inputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            inputs["securityProviderName"] = args ? args.securityProviderName : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["virtualWANName"] = args ? args.virtualWANName : undefined;
            inputs["etag"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["office365LocalBreakoutCategory"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["virtualHubs"] = undefined /*out*/;
            inputs["vpnSites"] = undefined /*out*/;
        } else {
            inputs["allowBranchToBranchTraffic"] = undefined /*out*/;
            inputs["allowVnetToVnetTraffic"] = undefined /*out*/;
            inputs["disableVpnEncryption"] = undefined /*out*/;
            inputs["etag"] = undefined /*out*/;
            inputs["location"] = undefined /*out*/;
            inputs["name"] = undefined /*out*/;
            inputs["office365LocalBreakoutCategory"] = undefined /*out*/;
            inputs["p2SVpnServerConfigurations"] = undefined /*out*/;
            inputs["provisioningState"] = undefined /*out*/;
            inputs["securityProviderName"] = undefined /*out*/;
            inputs["tags"] = undefined /*out*/;
            inputs["type"] = undefined /*out*/;
            inputs["virtualHubs"] = undefined /*out*/;
            inputs["vpnSites"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "azure-nextgen:network/latest:VirtualWan" }, { type: "azure-nextgen:network/v20180401:VirtualWan" }, { type: "azure-nextgen:network/v20180601:VirtualWan" }, { type: "azure-nextgen:network/v20180701:VirtualWan" }, { type: "azure-nextgen:network/v20180801:VirtualWan" }, { type: "azure-nextgen:network/v20181001:VirtualWan" }, { type: "azure-nextgen:network/v20181101:VirtualWan" }, { type: "azure-nextgen:network/v20181201:VirtualWan" }, { type: "azure-nextgen:network/v20190201:VirtualWan" }, { type: "azure-nextgen:network/v20190401:VirtualWan" }, { type: "azure-nextgen:network/v20190701:VirtualWan" }, { type: "azure-nextgen:network/v20190801:VirtualWan" }, { type: "azure-nextgen:network/v20190901:VirtualWan" }, { type: "azure-nextgen:network/v20191101:VirtualWan" }, { type: "azure-nextgen:network/v20191201:VirtualWan" }, { type: "azure-nextgen:network/v20200301:VirtualWan" }, { type: "azure-nextgen:network/v20200401:VirtualWan" }, { type: "azure-nextgen:network/v20200501:VirtualWan" }, { type: "azure-nextgen:network/v20200601:VirtualWan" }, { type: "azure-nextgen:network/v20200701:VirtualWan" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(VirtualWan.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a VirtualWan resource.
 */
export interface VirtualWanArgs {
    /**
     * True if branch to branch traffic is allowed.
     */
    readonly allowBranchToBranchTraffic?: pulumi.Input<boolean>;
    /**
     * True if Vnet to Vnet traffic is allowed.
     */
    readonly allowVnetToVnetTraffic?: pulumi.Input<boolean>;
    /**
     * Vpn encryption to be disabled or not.
     */
    readonly disableVpnEncryption?: pulumi.Input<boolean>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * List of all P2SVpnServerConfigurations associated with the virtual wan.
     */
    readonly p2SVpnServerConfigurations?: pulumi.Input<pulumi.Input<inputs.network.v20190601.P2SVpnServerConfiguration>[]>;
    /**
     * The resource group name of the VirtualWan.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The Security Provider name.
     */
    readonly securityProviderName?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the VirtualWAN being created or updated.
     */
    readonly virtualWANName: pulumi.Input<string>;
}
