import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * P2SVpnGateway Resource.
 */
export declare class P2sVpnGateway extends pulumi.CustomResource {
    /**
     * Get an existing P2sVpnGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): P2sVpnGateway;
    /**
     * Returns true if the given object is an instance of P2sVpnGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is P2sVpnGateway;
    /**
     * The reference of the address space resource which represents the custom routes specified by the customer for P2SVpnGateway and P2S VpnClient.
     */
    readonly customRoutes: pulumi.Output<outputs.network.v20190701.AddressSpaceResponse | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
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
     * The P2SVpnServerConfiguration to which the p2sVpnGateway is attached to.
     */
    readonly p2SVpnServerConfiguration: pulumi.Output<outputs.network.v20190701.SubResourceResponse | undefined>;
    /**
     * The provisioning state of the P2S VPN gateway resource.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
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
     * The VirtualHub to which the gateway belongs.
     */
    readonly virtualHub: pulumi.Output<outputs.network.v20190701.SubResourceResponse | undefined>;
    /**
     * The reference of the address space resource which represents Address space for P2S VpnClient.
     */
    readonly vpnClientAddressPool: pulumi.Output<outputs.network.v20190701.AddressSpaceResponse | undefined>;
    /**
     * All P2S VPN clients' connection health status.
     */
    readonly vpnClientConnectionHealth: pulumi.Output<outputs.network.v20190701.VpnClientConnectionHealthResponse>;
    /**
     * The scale unit for this p2s vpn gateway.
     */
    readonly vpnGatewayScaleUnit: pulumi.Output<number | undefined>;
    /**
     * Create a P2sVpnGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: P2sVpnGatewayArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a P2sVpnGateway resource.
 */
export interface P2sVpnGatewayArgs {
    /**
     * The reference of the address space resource which represents the custom routes specified by the customer for P2SVpnGateway and P2S VpnClient.
     */
    readonly customRoutes?: pulumi.Input<inputs.network.v20190701.AddressSpace>;
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
     * The P2SVpnServerConfiguration to which the p2sVpnGateway is attached to.
     */
    readonly p2SVpnServerConfiguration?: pulumi.Input<inputs.network.v20190701.SubResource>;
    /**
     * The provisioning state of the P2S VPN gateway resource.
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The resource group name of the P2SVpnGateway.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The VirtualHub to which the gateway belongs.
     */
    readonly virtualHub?: pulumi.Input<inputs.network.v20190701.SubResource>;
    /**
     * The reference of the address space resource which represents Address space for P2S VpnClient.
     */
    readonly vpnClientAddressPool?: pulumi.Input<inputs.network.v20190701.AddressSpace>;
    /**
     * The scale unit for this p2s vpn gateway.
     */
    readonly vpnGatewayScaleUnit?: pulumi.Input<number>;
}
