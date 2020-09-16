import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Route Filter Resource.
 */
export declare class RouteFilter extends pulumi.CustomResource {
    /**
     * Get an existing RouteFilter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RouteFilter;
    /**
     * Returns true if the given object is an instance of RouteFilter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RouteFilter;
    /**
     * Gets a unique read-only string that changes whenever the resource is updated.
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
     * A collection of references to express route circuit peerings.
     */
    readonly peerings: pulumi.Output<outputs.network.v20171001.ExpressRouteCircuitPeeringResponse[] | undefined>;
    /**
     * The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', 'Succeeded' and 'Failed'.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Collection of RouteFilterRules contained within a route filter.
     */
    readonly rules: pulumi.Output<outputs.network.v20171001.RouteFilterRuleResponse[] | undefined>;
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
     * Create a RouteFilter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RouteFilterArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a RouteFilter resource.
 */
export interface RouteFilterArgs {
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Input<string>;
    /**
     * A collection of references to express route circuit peerings.
     */
    readonly peerings?: pulumi.Input<pulumi.Input<inputs.network.v20171001.ExpressRouteCircuitPeering>[]>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the route filter.
     */
    readonly routeFilterName: pulumi.Input<string>;
    /**
     * Collection of RouteFilterRules contained within a route filter.
     */
    readonly rules?: pulumi.Input<pulumi.Input<inputs.network.v20171001.RouteFilterRule>[]>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
