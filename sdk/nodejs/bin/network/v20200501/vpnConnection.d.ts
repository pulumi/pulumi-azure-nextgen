import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * VpnConnection Resource.
 */
export declare class VpnConnection extends pulumi.CustomResource {
    /**
     * Get an existing VpnConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VpnConnection;
    /**
     * Returns true if the given object is an instance of VpnConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VpnConnection;
    /**
     * Expected bandwidth in MBPS.
     */
    readonly connectionBandwidth: pulumi.Output<number | undefined>;
    /**
     * The connection status.
     */
    readonly connectionStatus: pulumi.Output<string | undefined>;
    /**
     * The dead peer detection timeout for a vpn connection in seconds.
     */
    readonly dpdTimeoutSeconds: pulumi.Output<number | undefined>;
    /**
     * Egress bytes transferred.
     */
    readonly egressBytesTransferred: pulumi.Output<number>;
    /**
     * EnableBgp flag.
     */
    readonly enableBgp: pulumi.Output<boolean | undefined>;
    /**
     * Enable internet security.
     */
    readonly enableInternetSecurity: pulumi.Output<boolean | undefined>;
    /**
     * EnableBgp flag.
     */
    readonly enableRateLimiting: pulumi.Output<boolean | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * Ingress bytes transferred.
     */
    readonly ingressBytesTransferred: pulumi.Output<number>;
    /**
     * The IPSec Policies to be considered by this connection.
     */
    readonly ipsecPolicies: pulumi.Output<outputs.network.v20200501.IpsecPolicyResponse[] | undefined>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the VPN connection resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Id of the connected vpn site.
     */
    readonly remoteVpnSite: pulumi.Output<outputs.network.v20200501.SubResourceResponse | undefined>;
    /**
     * The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    readonly routingConfiguration: pulumi.Output<outputs.network.v20200501.RoutingConfigurationResponse | undefined>;
    /**
     * Routing weight for vpn connection.
     */
    readonly routingWeight: pulumi.Output<number | undefined>;
    /**
     * SharedKey for the vpn connection.
     */
    readonly sharedKey: pulumi.Output<string | undefined>;
    /**
     * Use local azure ip to initiate connection.
     */
    readonly useLocalAzureIpAddress: pulumi.Output<boolean | undefined>;
    /**
     * Enable policy-based traffic selectors.
     */
    readonly usePolicyBasedTrafficSelectors: pulumi.Output<boolean | undefined>;
    /**
     * Connection protocol used for this connection.
     */
    readonly vpnConnectionProtocolType: pulumi.Output<string | undefined>;
    /**
     * List of all vpn site link connections to the gateway.
     */
    readonly vpnLinkConnections: pulumi.Output<outputs.network.v20200501.VpnSiteLinkConnectionResponse[] | undefined>;
    /**
     * Create a VpnConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpnConnectionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a VpnConnection resource.
 */
export interface VpnConnectionArgs {
    /**
     * Expected bandwidth in MBPS.
     */
    readonly connectionBandwidth?: pulumi.Input<number>;
    /**
     * The name of the connection.
     */
    readonly connectionName: pulumi.Input<string>;
    /**
     * The connection status.
     */
    readonly connectionStatus?: pulumi.Input<string>;
    /**
     * The dead peer detection timeout for a vpn connection in seconds.
     */
    readonly dpdTimeoutSeconds?: pulumi.Input<number>;
    /**
     * EnableBgp flag.
     */
    readonly enableBgp?: pulumi.Input<boolean>;
    /**
     * Enable internet security.
     */
    readonly enableInternetSecurity?: pulumi.Input<boolean>;
    /**
     * EnableBgp flag.
     */
    readonly enableRateLimiting?: pulumi.Input<boolean>;
    /**
     * The name of the gateway.
     */
    readonly gatewayName: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The IPSec Policies to be considered by this connection.
     */
    readonly ipsecPolicies?: pulumi.Input<pulumi.Input<inputs.network.v20200501.IpsecPolicy>[]>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Id of the connected vpn site.
     */
    readonly remoteVpnSite?: pulumi.Input<inputs.network.v20200501.SubResource>;
    /**
     * The resource group name of the VpnGateway.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The Routing Configuration indicating the associated and propagated route tables on this connection.
     */
    readonly routingConfiguration?: pulumi.Input<inputs.network.v20200501.RoutingConfiguration>;
    /**
     * Routing weight for vpn connection.
     */
    readonly routingWeight?: pulumi.Input<number>;
    /**
     * SharedKey for the vpn connection.
     */
    readonly sharedKey?: pulumi.Input<string>;
    /**
     * Use local azure ip to initiate connection.
     */
    readonly useLocalAzureIpAddress?: pulumi.Input<boolean>;
    /**
     * Enable policy-based traffic selectors.
     */
    readonly usePolicyBasedTrafficSelectors?: pulumi.Input<boolean>;
    /**
     * Connection protocol used for this connection.
     */
    readonly vpnConnectionProtocolType?: pulumi.Input<string>;
    /**
     * List of all vpn site link connections to the gateway.
     */
    readonly vpnLinkConnections?: pulumi.Input<pulumi.Input<inputs.network.v20200501.VpnSiteLinkConnection>[]>;
}
