import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A common class for general resource information.
 */
export declare class VirtualNetworkGatewayConnection extends pulumi.CustomResource {
    /**
     * Get an existing VirtualNetworkGatewayConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualNetworkGatewayConnection;
    /**
     * Returns true if the given object is an instance of VirtualNetworkGatewayConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VirtualNetworkGatewayConnection;
    /**
     * The authorizationKey.
     */
    readonly authorizationKey: pulumi.Output<string | undefined>;
    /**
     * Connection protocol used for this connection.
     */
    readonly connectionProtocol: pulumi.Output<string | undefined>;
    /**
     * Virtual Network Gateway connection status.
     */
    readonly connectionStatus: pulumi.Output<string>;
    /**
     * Gateway connection type.
     */
    readonly connectionType: pulumi.Output<string>;
    /**
     * The egress bytes transferred in this connection.
     */
    readonly egressBytesTransferred: pulumi.Output<number>;
    /**
     * EnableBgp flag.
     */
    readonly enableBgp: pulumi.Output<boolean | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * Bypass ExpressRoute Gateway for data forwarding.
     */
    readonly expressRouteGatewayBypass: pulumi.Output<boolean | undefined>;
    /**
     * The ingress bytes transferred in this connection.
     */
    readonly ingressBytesTransferred: pulumi.Output<number>;
    /**
     * The IPSec Policies to be considered by this connection.
     */
    readonly ipsecPolicies: pulumi.Output<outputs.network.v20191201.IpsecPolicyResponse[] | undefined>;
    /**
     * The reference to local network gateway resource.
     */
    readonly localNetworkGateway2: pulumi.Output<outputs.network.v20191201.LocalNetworkGatewayResponse | undefined>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The reference to peerings resource.
     */
    readonly peer: pulumi.Output<outputs.network.v20191201.SubResourceResponse | undefined>;
    /**
     * The provisioning state of the virtual network gateway connection resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The resource GUID property of the virtual network gateway connection resource.
     */
    readonly resourceGuid: pulumi.Output<string>;
    /**
     * The routing weight.
     */
    readonly routingWeight: pulumi.Output<number | undefined>;
    /**
     * The IPSec shared key.
     */
    readonly sharedKey: pulumi.Output<string | undefined>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The Traffic Selector Policies to be considered by this connection.
     */
    readonly trafficSelectorPolicies: pulumi.Output<outputs.network.v20191201.TrafficSelectorPolicyResponse[] | undefined>;
    /**
     * Collection of all tunnels' connection health status.
     */
    readonly tunnelConnectionStatus: pulumi.Output<outputs.network.v20191201.TunnelConnectionHealthResponse[]>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Use private local Azure IP for the connection.
     */
    readonly useLocalAzureIpAddress: pulumi.Output<boolean | undefined>;
    /**
     * Enable policy-based traffic selectors.
     */
    readonly usePolicyBasedTrafficSelectors: pulumi.Output<boolean | undefined>;
    /**
     * The reference to virtual network gateway resource.
     */
    readonly virtualNetworkGateway1: pulumi.Output<outputs.network.v20191201.VirtualNetworkGatewayResponse>;
    /**
     * The reference to virtual network gateway resource.
     */
    readonly virtualNetworkGateway2: pulumi.Output<outputs.network.v20191201.VirtualNetworkGatewayResponse | undefined>;
    /**
     * Create a VirtualNetworkGatewayConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualNetworkGatewayConnectionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a VirtualNetworkGatewayConnection resource.
 */
export interface VirtualNetworkGatewayConnectionArgs {
    /**
     * The authorizationKey.
     */
    readonly authorizationKey?: pulumi.Input<string>;
    /**
     * Connection protocol used for this connection.
     */
    readonly connectionProtocol?: pulumi.Input<string>;
    /**
     * Gateway connection type.
     */
    readonly connectionType: pulumi.Input<string>;
    /**
     * EnableBgp flag.
     */
    readonly enableBgp?: pulumi.Input<boolean>;
    /**
     * Bypass ExpressRoute Gateway for data forwarding.
     */
    readonly expressRouteGatewayBypass?: pulumi.Input<boolean>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The IPSec Policies to be considered by this connection.
     */
    readonly ipsecPolicies?: pulumi.Input<pulumi.Input<inputs.network.v20191201.IpsecPolicy>[]>;
    /**
     * The reference to local network gateway resource.
     */
    readonly localNetworkGateway2?: pulumi.Input<inputs.network.v20191201.LocalNetworkGateway>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The reference to peerings resource.
     */
    readonly peer?: pulumi.Input<inputs.network.v20191201.SubResource>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The routing weight.
     */
    readonly routingWeight?: pulumi.Input<number>;
    /**
     * The IPSec shared key.
     */
    readonly sharedKey?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The Traffic Selector Policies to be considered by this connection.
     */
    readonly trafficSelectorPolicies?: pulumi.Input<pulumi.Input<inputs.network.v20191201.TrafficSelectorPolicy>[]>;
    /**
     * Use private local Azure IP for the connection.
     */
    readonly useLocalAzureIpAddress?: pulumi.Input<boolean>;
    /**
     * Enable policy-based traffic selectors.
     */
    readonly usePolicyBasedTrafficSelectors?: pulumi.Input<boolean>;
    /**
     * The reference to virtual network gateway resource.
     */
    readonly virtualNetworkGateway1: pulumi.Input<inputs.network.v20191201.VirtualNetworkGateway>;
    /**
     * The reference to virtual network gateway resource.
     */
    readonly virtualNetworkGateway2?: pulumi.Input<inputs.network.v20191201.VirtualNetworkGateway>;
    /**
     * The name of the virtual network gateway connection.
     */
    readonly virtualNetworkGatewayConnectionName: pulumi.Input<string>;
}
