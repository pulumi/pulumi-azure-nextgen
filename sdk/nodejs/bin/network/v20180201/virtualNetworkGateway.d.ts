import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A common class for general resource information
 */
export declare class VirtualNetworkGateway extends pulumi.CustomResource {
    /**
     * Get an existing VirtualNetworkGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualNetworkGateway;
    /**
     * Returns true if the given object is an instance of VirtualNetworkGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VirtualNetworkGateway;
    /**
     * ActiveActive flag
     */
    readonly activeActive: pulumi.Output<boolean | undefined>;
    /**
     * Virtual network gateway's BGP speaker settings.
     */
    readonly bgpSettings: pulumi.Output<outputs.network.v20180201.BgpSettingsResponse | undefined>;
    /**
     * Whether BGP is enabled for this virtual network gateway or not.
     */
    readonly enableBgp: pulumi.Output<boolean | undefined>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * The reference of the LocalNetworkGateway resource which represents local network site having default routes. Assign Null value in case of removing existing default site setting.
     */
    readonly gatewayDefaultSite: pulumi.Output<outputs.network.v20180201.SubResourceResponse | undefined>;
    /**
     * The type of this virtual network gateway. Possible values are: 'Vpn' and 'ExpressRoute'.
     */
    readonly gatewayType: pulumi.Output<string | undefined>;
    /**
     * IP configurations for virtual network gateway.
     */
    readonly ipConfigurations: pulumi.Output<outputs.network.v20180201.VirtualNetworkGatewayIPConfigurationResponse[] | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The provisioning state of the VirtualNetworkGateway resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The resource GUID property of the VirtualNetworkGateway resource.
     */
    readonly resourceGuid: pulumi.Output<string | undefined>;
    /**
     * The reference of the VirtualNetworkGatewaySku resource which represents the SKU selected for Virtual network gateway.
     */
    readonly sku: pulumi.Output<outputs.network.v20180201.VirtualNetworkGatewaySkuResponse | undefined>;
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
     * The reference of the VpnClientConfiguration resource which represents the P2S VpnClient configurations.
     */
    readonly vpnClientConfiguration: pulumi.Output<outputs.network.v20180201.VpnClientConfigurationResponse | undefined>;
    /**
     * The type of this virtual network gateway. Possible values are: 'PolicyBased' and 'RouteBased'.
     */
    readonly vpnType: pulumi.Output<string | undefined>;
    /**
     * Create a VirtualNetworkGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualNetworkGatewayArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a VirtualNetworkGateway resource.
 */
export interface VirtualNetworkGatewayArgs {
    /**
     * ActiveActive flag
     */
    readonly activeActive?: pulumi.Input<boolean>;
    /**
     * Virtual network gateway's BGP speaker settings.
     */
    readonly bgpSettings?: pulumi.Input<inputs.network.v20180201.BgpSettings>;
    /**
     * Whether BGP is enabled for this virtual network gateway or not.
     */
    readonly enableBgp?: pulumi.Input<boolean>;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * The reference of the LocalNetworkGateway resource which represents local network site having default routes. Assign Null value in case of removing existing default site setting.
     */
    readonly gatewayDefaultSite?: pulumi.Input<inputs.network.v20180201.SubResource>;
    /**
     * The type of this virtual network gateway. Possible values are: 'Vpn' and 'ExpressRoute'.
     */
    readonly gatewayType?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * IP configurations for virtual network gateway.
     */
    readonly ipConfigurations?: pulumi.Input<pulumi.Input<inputs.network.v20180201.VirtualNetworkGatewayIPConfiguration>[]>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The resource GUID property of the VirtualNetworkGateway resource.
     */
    readonly resourceGuid?: pulumi.Input<string>;
    /**
     * The reference of the VirtualNetworkGatewaySku resource which represents the SKU selected for Virtual network gateway.
     */
    readonly sku?: pulumi.Input<inputs.network.v20180201.VirtualNetworkGatewaySku>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The name of the virtual network gateway.
     */
    readonly virtualNetworkGatewayName: pulumi.Input<string>;
    /**
     * The reference of the VpnClientConfiguration resource which represents the P2S VpnClient configurations.
     */
    readonly vpnClientConfiguration?: pulumi.Input<inputs.network.v20180201.VpnClientConfiguration>;
    /**
     * The type of this virtual network gateway. Possible values are: 'PolicyBased' and 'RouteBased'.
     */
    readonly vpnType?: pulumi.Input<string>;
}
