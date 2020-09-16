import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Express Route Circuit Connection in an ExpressRouteCircuitPeering resource.
 */
export declare class ExpressRouteCircuitConnection extends pulumi.CustomResource {
    /**
     * Get an existing ExpressRouteCircuitConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ExpressRouteCircuitConnection;
    /**
     * Returns true if the given object is an instance of ExpressRouteCircuitConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ExpressRouteCircuitConnection;
    /**
     * /29 IP address space to carve out Customer addresses for tunnels.
     */
    readonly addressPrefix: pulumi.Output<string | undefined>;
    /**
     * The authorization key.
     */
    readonly authorizationKey: pulumi.Output<string | undefined>;
    /**
     * Express Route Circuit connection state.
     */
    readonly circuitConnectionStatus: pulumi.Output<string | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * Reference to Express Route Circuit Private Peering Resource of the circuit initiating connection.
     */
    readonly expressRouteCircuitPeering: pulumi.Output<outputs.network.v20190701.SubResourceResponse | undefined>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * Reference to Express Route Circuit Private Peering Resource of the peered circuit.
     */
    readonly peerExpressRouteCircuitPeering: pulumi.Output<outputs.network.v20190701.SubResourceResponse | undefined>;
    /**
     * The provisioning state of the express route circuit connection resource.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Type of the resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a ExpressRouteCircuitConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExpressRouteCircuitConnectionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ExpressRouteCircuitConnection resource.
 */
export interface ExpressRouteCircuitConnectionArgs {
    /**
     * /29 IP address space to carve out Customer addresses for tunnels.
     */
    readonly addressPrefix?: pulumi.Input<string>;
    /**
     * The authorization key.
     */
    readonly authorizationKey?: pulumi.Input<string>;
    /**
     * Express Route Circuit connection state.
     */
    readonly circuitConnectionStatus?: pulumi.Input<string>;
    /**
     * The name of the express route circuit.
     */
    readonly circuitName: pulumi.Input<string>;
    /**
     * The name of the express route circuit connection.
     */
    readonly connectionName: pulumi.Input<string>;
    /**
     * Reference to Express Route Circuit Private Peering Resource of the circuit initiating connection.
     */
    readonly expressRouteCircuitPeering?: pulumi.Input<inputs.network.v20190701.SubResource>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Reference to Express Route Circuit Private Peering Resource of the peered circuit.
     */
    readonly peerExpressRouteCircuitPeering?: pulumi.Input<inputs.network.v20190701.SubResource>;
    /**
     * The name of the peering.
     */
    readonly peeringName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
