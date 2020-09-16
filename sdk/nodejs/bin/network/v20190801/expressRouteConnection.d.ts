import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * ExpressRouteConnection resource.
 */
export declare class ExpressRouteConnection extends pulumi.CustomResource {
    /**
     * Get an existing ExpressRouteConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ExpressRouteConnection;
    /**
     * Returns true if the given object is an instance of ExpressRouteConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ExpressRouteConnection;
    /**
     * Authorization key to establish the connection.
     */
    readonly authorizationKey: pulumi.Output<string | undefined>;
    /**
     * The ExpressRoute circuit peering.
     */
    readonly expressRouteCircuitPeering: pulumi.Output<outputs.network.v20190801.ExpressRouteCircuitPeeringIdResponse>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The provisioning state of the express route connection resource.
     */
    readonly provisioningState: pulumi.Output<string | undefined>;
    /**
     * The routing weight associated to the connection.
     */
    readonly routingWeight: pulumi.Output<number | undefined>;
    /**
     * Create a ExpressRouteConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ExpressRouteConnectionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ExpressRouteConnection resource.
 */
export interface ExpressRouteConnectionArgs {
    /**
     * Authorization key to establish the connection.
     */
    readonly authorizationKey?: pulumi.Input<string>;
    /**
     * The name of the connection subresource.
     */
    readonly connectionName: pulumi.Input<string>;
    /**
     * The ExpressRoute circuit peering.
     */
    readonly expressRouteCircuitPeering: pulumi.Input<inputs.network.v20190801.ExpressRouteCircuitPeeringId>;
    /**
     * The name of the ExpressRoute gateway.
     */
    readonly expressRouteGatewayName: pulumi.Input<string>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Input<string>;
    /**
     * The provisioning state of the express route connection resource.
     */
    readonly provisioningState?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The routing weight associated to the connection.
     */
    readonly routingWeight?: pulumi.Input<number>;
}
