import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Peering in an ExpressRouteCircuit resource.
 */
export declare class ExpressRouteCircuitPeering extends pulumi.CustomResource {
    /**
     * Get an existing ExpressRouteCircuitPeering resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ExpressRouteCircuitPeering;
    /**
     * Returns true if the given object is an instance of ExpressRouteCircuitPeering.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ExpressRouteCircuitPeering;
    /**
     * The Azure ASN.
     */
    readonly azureASN: pulumi.Output<number | undefined>;
    /**
     * The list of circuit connections associated with Azure Private Peering for this circuit.
     */
    readonly connections: pulumi.Output<outputs.network.v20200401.ExpressRouteCircuitConnectionResponse[] | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * The ExpressRoute connection.
     */
    readonly expressRouteConnection: pulumi.Output<outputs.network.v20200401.ExpressRouteConnectionIdResponse | undefined>;
    /**
     * The GatewayManager Etag.
     */
    readonly gatewayManagerEtag: pulumi.Output<string | undefined>;
    /**
     * The IPv6 peering configuration.
     */
    readonly ipv6PeeringConfig: pulumi.Output<outputs.network.v20200401.Ipv6ExpressRouteCircuitPeeringConfigResponse | undefined>;
    /**
     * Who was the last to modify the peering.
     */
    readonly lastModifiedBy: pulumi.Output<string>;
    /**
     * The Microsoft peering configuration.
     */
    readonly microsoftPeeringConfig: pulumi.Output<outputs.network.v20200401.ExpressRouteCircuitPeeringConfigResponse | undefined>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * The peer ASN.
     */
    readonly peerASN: pulumi.Output<number | undefined>;
    /**
     * The list of peered circuit connections associated with Azure Private Peering for this circuit.
     */
    readonly peeredConnections: pulumi.Output<outputs.network.v20200401.PeerExpressRouteCircuitConnectionResponse[]>;
    /**
     * The peering type.
     */
    readonly peeringType: pulumi.Output<string | undefined>;
    /**
     * The primary port.
     */
    readonly primaryAzurePort: pulumi.Output<string | undefined>;
    /**
     * The primary address prefix.
     */
    readonly primaryPeerAddressPrefix: pulumi.Output<string | undefined>;
    /**
     * The provisioning state of the express route circuit peering resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The reference to the RouteFilter resource.
     */
    readonly routeFilter: pulumi.Output<outputs.network.v20200401.SubResourceResponse | undefined>;
    /**
     * The secondary port.
     */
    readonly secondaryAzurePort: pulumi.Output<string | undefined>;
    /**
     * The secondary address prefix.
     */
    readonly secondaryPeerAddressPrefix: pulumi.Output<string | undefined>;
    /**
     * The shared key.
     */
    readonly sharedKey: pulumi.Output<string | undefined>;
    /**
     * The peering state.
     */
    readonly state: pulumi.Output<string | undefined>;
    /**
     * The peering stats of express route circuit.
     */
    readonly stats: pulumi.Output<outputs.network.v20200401.ExpressRouteCircuitStatsResponse | undefined>;
    /**
     * Type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The VLAN ID.
     */
    readonly vlanId: pulumi.Output<number | undefined>;
    /**
     * Create a ExpressRouteCircuitPeering resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExpressRouteCircuitPeeringArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ExpressRouteCircuitPeering resource.
 */
export interface ExpressRouteCircuitPeeringArgs {
    /**
     * The Azure ASN.
     */
    readonly azureASN?: pulumi.Input<number>;
    /**
     * The name of the express route circuit.
     */
    readonly circuitName: pulumi.Input<string>;
    /**
     * The list of circuit connections associated with Azure Private Peering for this circuit.
     */
    readonly connections?: pulumi.Input<pulumi.Input<inputs.network.v20200401.ExpressRouteCircuitConnection>[]>;
    /**
     * The GatewayManager Etag.
     */
    readonly gatewayManagerEtag?: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The IPv6 peering configuration.
     */
    readonly ipv6PeeringConfig?: pulumi.Input<inputs.network.v20200401.Ipv6ExpressRouteCircuitPeeringConfig>;
    /**
     * The Microsoft peering configuration.
     */
    readonly microsoftPeeringConfig?: pulumi.Input<inputs.network.v20200401.ExpressRouteCircuitPeeringConfig>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The peer ASN.
     */
    readonly peerASN?: pulumi.Input<number>;
    /**
     * The name of the peering.
     */
    readonly peeringName: pulumi.Input<string>;
    /**
     * The peering type.
     */
    readonly peeringType?: pulumi.Input<string>;
    /**
     * The primary port.
     */
    readonly primaryAzurePort?: pulumi.Input<string>;
    /**
     * The primary address prefix.
     */
    readonly primaryPeerAddressPrefix?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The reference to the RouteFilter resource.
     */
    readonly routeFilter?: pulumi.Input<inputs.network.v20200401.SubResource>;
    /**
     * The secondary port.
     */
    readonly secondaryAzurePort?: pulumi.Input<string>;
    /**
     * The secondary address prefix.
     */
    readonly secondaryPeerAddressPrefix?: pulumi.Input<string>;
    /**
     * The shared key.
     */
    readonly sharedKey?: pulumi.Input<string>;
    /**
     * The peering state.
     */
    readonly state?: pulumi.Input<string>;
    /**
     * The peering stats of express route circuit.
     */
    readonly stats?: pulumi.Input<inputs.network.v20200401.ExpressRouteCircuitStats>;
    /**
     * The VLAN ID.
     */
    readonly vlanId?: pulumi.Input<number>;
}
