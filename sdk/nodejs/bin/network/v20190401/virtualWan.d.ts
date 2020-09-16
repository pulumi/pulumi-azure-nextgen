import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * VirtualWAN Resource.
 */
export declare class VirtualWan extends pulumi.CustomResource {
    /**
     * Get an existing VirtualWan resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualWan;
    /**
     * Returns true if the given object is an instance of VirtualWan.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VirtualWan;
    /**
     * True if branch to branch traffic is allowed.
     */
    readonly allowBranchToBranchTraffic: pulumi.Output<boolean | undefined>;
    /**
     * True if Vnet to Vnet traffic is allowed.
     */
    readonly allowVnetToVnetTraffic: pulumi.Output<boolean | undefined>;
    /**
     * Vpn encryption to be disabled or not.
     */
    readonly disableVpnEncryption: pulumi.Output<boolean | undefined>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The office local breakout category.
     */
    readonly office365LocalBreakoutCategory: pulumi.Output<string | undefined>;
    /**
     * List of all P2SVpnServerConfigurations associated with the virtual wan.
     */
    readonly p2SVpnServerConfigurations: pulumi.Output<outputs.network.v20190401.P2SVpnServerConfigurationResponse[] | undefined>;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * The Security Provider name.
     */
    readonly securityProviderName: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * List of VirtualHubs in the VirtualWAN.
     */
    readonly virtualHubs: pulumi.Output<outputs.network.v20190401.SubResourceResponse[]>;
    /**
     * List of VpnSites in the VirtualWAN.
     */
    readonly vpnSites: pulumi.Output<outputs.network.v20190401.SubResourceResponse[]>;
    /**
     * Create a VirtualWan resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualWanArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
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
     * The office local breakout category.
     */
    readonly office365LocalBreakoutCategory?: pulumi.Input<string>;
    /**
     * List of all P2SVpnServerConfigurations associated with the virtual wan.
     */
    readonly p2SVpnServerConfigurations?: pulumi.Input<pulumi.Input<inputs.network.v20190401.P2SVpnServerConfiguration>[]>;
    /**
     * The provisioning state of the resource.
     */
    readonly provisioningState?: pulumi.Input<string>;
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
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the VirtualWAN being created or updated.
     */
    readonly virtualWANName: pulumi.Input<string>;
}
