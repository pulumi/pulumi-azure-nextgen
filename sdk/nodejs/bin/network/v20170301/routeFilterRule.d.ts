import * as pulumi from "@pulumi/pulumi";
/**
 * Route Filter Rule Resource
 */
export declare class RouteFilterRule extends pulumi.CustomResource {
    /**
     * Get an existing RouteFilterRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RouteFilterRule;
    /**
     * Returns true if the given object is an instance of RouteFilterRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RouteFilterRule;
    /**
     * The access type of the rule. Valid values are: 'Allow', 'Deny'
     */
    readonly access: pulumi.Output<string>;
    /**
     * The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020']
     */
    readonly communities: pulumi.Output<string[]>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: pulumi.Output<string>;
    /**
     * Resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', 'Succeeded' and 'Failed'.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The rule type of the rule. Valid value is: 'Community'
     */
    readonly routeFilterRuleType: pulumi.Output<string>;
    /**
     * Resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Create a RouteFilterRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RouteFilterRuleArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a RouteFilterRule resource.
 */
export interface RouteFilterRuleArgs {
    /**
     * The access type of the rule. Valid values are: 'Allow', 'Deny'
     */
    readonly access: pulumi.Input<string>;
    /**
     * The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020']
     */
    readonly communities: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource ID.
     */
    readonly id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the route filter.
     */
    readonly routeFilterName: pulumi.Input<string>;
    /**
     * The rule type of the rule. Valid value is: 'Community'
     */
    readonly routeFilterRuleType: pulumi.Input<string>;
    /**
     * The name of the route filter rule.
     */
    readonly ruleName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
