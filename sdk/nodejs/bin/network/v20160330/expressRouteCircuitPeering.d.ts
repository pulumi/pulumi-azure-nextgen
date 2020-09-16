import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Peering in a ExpressRouteCircuit resource
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
     * Gets or sets the azure ASN
     */
    readonly azureASN: pulumi.Output<number | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the Microsoft peering config
     */
    readonly microsoftPeeringConfig: pulumi.Output<outputs.network.v20160330.ExpressRouteCircuitPeeringConfigResponse | undefined>;
    /**
     * Gets name of the resource that is unique within a resource group. This name can be used to access the resource
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the peer ASN
     */
    readonly peerASN: pulumi.Output<number | undefined>;
    /**
     * Gets or sets PeeringType
     */
    readonly peeringType: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the primary port
     */
    readonly primaryAzurePort: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the primary address prefix
     */
    readonly primaryPeerAddressPrefix: pulumi.Output<string | undefined>;
    /**
     * Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the secondary port
     */
    readonly secondaryAzurePort: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the secondary address prefix
     */
    readonly secondaryPeerAddressPrefix: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the shared key
     */
    readonly sharedKey: pulumi.Output<string | undefined>;
    /**
     * Gets or sets state of Peering
     */
    readonly state: pulumi.Output<string | undefined>;
    /**
     * Gets or peering stats
     */
    readonly stats: pulumi.Output<outputs.network.v20160330.ExpressRouteCircuitStatsResponse | undefined>;
    /**
     * Gets or sets the vlan id
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
     * Gets or sets the azure ASN
     */
    readonly azureASN?: pulumi.Input<number>;
    /**
     * The name of the express route circuit.
     */
    readonly circuitName: pulumi.Input<string>;
    /**
     * A unique read-only string that changes whenever the resource is updated
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Resource Id
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Gets or sets the Microsoft peering config
     */
    readonly microsoftPeeringConfig?: pulumi.Input<inputs.network.v20160330.ExpressRouteCircuitPeeringConfig>;
    /**
     * Gets name of the resource that is unique within a resource group. This name can be used to access the resource
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Gets or sets the peer ASN
     */
    readonly peerASN?: pulumi.Input<number>;
    /**
     * The name of the peering.
     */
    readonly peeringName: pulumi.Input<string>;
    /**
     * Gets or sets PeeringType
     */
    readonly peeringType?: pulumi.Input<string>;
    /**
     * Gets or sets the primary port
     */
    readonly primaryAzurePort?: pulumi.Input<string>;
    /**
     * Gets or sets the primary address prefix
     */
    readonly primaryPeerAddressPrefix?: pulumi.Input<string>;
    /**
     * Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the secondary port
     */
    readonly secondaryAzurePort?: pulumi.Input<string>;
    /**
     * Gets or sets the secondary address prefix
     */
    readonly secondaryPeerAddressPrefix?: pulumi.Input<string>;
    /**
     * Gets or sets the shared key
     */
    readonly sharedKey?: pulumi.Input<string>;
    /**
     * Gets or sets state of Peering
     */
    readonly state?: pulumi.Input<string>;
    /**
     * Gets or peering stats
     */
    readonly stats?: pulumi.Input<inputs.network.v20160330.ExpressRouteCircuitStats>;
    /**
     * Gets or sets the vlan id
     */
    readonly vlanId?: pulumi.Input<number>;
}
