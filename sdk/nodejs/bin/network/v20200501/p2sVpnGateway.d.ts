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
     * List of all customer specified DNS servers IP addresses.
     */
    readonly customDnsServers: pulumi.Output<string[] | undefined>;
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
     * List of all p2s connection configurations of the gateway.
     */
    readonly p2SConnectionConfigurations: pulumi.Output<outputs.network.v20200501.P2SConnectionConfigurationResponse[] | undefined>;
    /**
     * The provisioning state of the P2S VPN gateway resource.
     */
    readonly provisioningState: pulumi.Output<string>;
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
    readonly virtualHub: pulumi.Output<outputs.network.v20200501.SubResourceResponse | undefined>;
    /**
     * All P2S VPN clients' connection health status.
     */
    readonly vpnClientConnectionHealth: pulumi.Output<outputs.network.v20200501.VpnClientConnectionHealthResponse>;
    /**
     * The scale unit for this p2s vpn gateway.
     */
    readonly vpnGatewayScaleUnit: pulumi.Output<number | undefined>;
    /**
     * The VpnServerConfiguration to which the p2sVpnGateway is attached to.
     */
    readonly vpnServerConfiguration: pulumi.Output<outputs.network.v20200501.SubResourceResponse | undefined>;
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
     * List of all customer specified DNS servers IP addresses.
     */
    readonly customDnsServers?: pulumi.Input<pulumi.Input<string>[]>;
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
     * List of all p2s connection configurations of the gateway.
     */
    readonly p2SConnectionConfigurations?: pulumi.Input<pulumi.Input<inputs.network.v20200501.P2SConnectionConfiguration>[]>;
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
    readonly virtualHub?: pulumi.Input<inputs.network.v20200501.SubResource>;
    /**
     * The scale unit for this p2s vpn gateway.
     */
    readonly vpnGatewayScaleUnit?: pulumi.Input<number>;
    /**
     * The VpnServerConfiguration to which the p2sVpnGateway is attached to.
     */
    readonly vpnServerConfiguration?: pulumi.Input<inputs.network.v20200501.SubResource>;
}
