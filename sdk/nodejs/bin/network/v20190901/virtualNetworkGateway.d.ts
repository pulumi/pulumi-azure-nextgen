import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A common class for general resource information.
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
     * ActiveActive flag.
     */
    readonly activeActive: pulumi.Output<boolean | undefined>;
    /**
     * Virtual network gateway's BGP speaker settings.
     */
    readonly bgpSettings: pulumi.Output<outputs.network.v20190901.BgpSettingsResponse | undefined>;
    /**
     * The reference of the address space resource which represents the custom routes address space specified by the customer for virtual network gateway and VpnClient.
     */
    readonly customRoutes: pulumi.Output<outputs.network.v20190901.AddressSpaceResponse | undefined>;
    /**
     * Whether BGP is enabled for this virtual network gateway or not.
     */
    readonly enableBgp: pulumi.Output<boolean | undefined>;
    /**
     * Whether dns forwarding is enabled or not.
     */
    readonly enableDnsForwarding: pulumi.Output<boolean | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * The reference of the LocalNetworkGateway resource which represents local network site having default routes. Assign Null value in case of removing existing default site setting.
     */
    readonly gatewayDefaultSite: pulumi.Output<outputs.network.v20190901.SubResourceResponse | undefined>;
    /**
     * The type of this virtual network gateway.
     */
    readonly gatewayType: pulumi.Output<string | undefined>;
    /**
     * The IP address allocated by the gateway to which dns requests can be sent.
     */
    readonly inboundDnsForwardingEndpoint: pulumi.Output<string>;
    /**
     * IP configurations for virtual network gateway.
     */
    readonly ipConfigurations: pulumi.Output<outputs.network.v20190901.VirtualNetworkGatewayIPConfigurationResponse[] | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The provisioning state of the virtual network gateway resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The resource GUID property of the virtual network gateway resource.
     */
    readonly resourceGuid: pulumi.Output<string>;
    /**
     * The reference of the VirtualNetworkGatewaySku resource which represents the SKU selected for Virtual network gateway.
     */
    readonly sku: pulumi.Output<outputs.network.v20190901.VirtualNetworkGatewaySkuResponse | undefined>;
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
    readonly vpnClientConfiguration: pulumi.Output<outputs.network.v20190901.VpnClientConfigurationResponse | undefined>;
    /**
     * The generation for this VirtualNetworkGateway. Must be None if gatewayType is not VPN.
     */
    readonly vpnGatewayGeneration: pulumi.Output<string | undefined>;
    /**
     * The type of this virtual network gateway.
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
     * ActiveActive flag.
     */
    readonly activeActive?: pulumi.Input<boolean>;
    /**
     * Virtual network gateway's BGP speaker settings.
     */
    readonly bgpSettings?: pulumi.Input<inputs.network.v20190901.BgpSettings>;
    /**
     * The reference of the address space resource which represents the custom routes address space specified by the customer for virtual network gateway and VpnClient.
     */
    readonly customRoutes?: pulumi.Input<inputs.network.v20190901.AddressSpace>;
    /**
     * Whether BGP is enabled for this virtual network gateway or not.
     */
    readonly enableBgp?: pulumi.Input<boolean>;
    /**
     * Whether dns forwarding is enabled or not.
     */
    readonly enableDnsForwarding?: pulumi.Input<boolean>;
    /**
     * The reference of the LocalNetworkGateway resource which represents local network site having default routes. Assign Null value in case of removing existing default site setting.
     */
    readonly gatewayDefaultSite?: pulumi.Input<inputs.network.v20190901.SubResource>;
    /**
     * The type of this virtual network gateway.
     */
    readonly gatewayType?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * IP configurations for virtual network gateway.
     */
    readonly ipConfigurations?: pulumi.Input<pulumi.Input<inputs.network.v20190901.VirtualNetworkGatewayIPConfiguration>[]>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The reference of the VirtualNetworkGatewaySku resource which represents the SKU selected for Virtual network gateway.
     */
    readonly sku?: pulumi.Input<inputs.network.v20190901.VirtualNetworkGatewaySku>;
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
    readonly vpnClientConfiguration?: pulumi.Input<inputs.network.v20190901.VpnClientConfiguration>;
    /**
     * The generation for this VirtualNetworkGateway. Must be None if gatewayType is not VPN.
     */
    readonly vpnGatewayGeneration?: pulumi.Input<string>;
    /**
     * The type of this virtual network gateway.
     */
    readonly vpnType?: pulumi.Input<string>;
}
