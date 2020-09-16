import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Description of Rule Resource.
 */
export declare class Rule extends pulumi.CustomResource {
    /**
     * Get an existing Rule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Rule;
    /**
     * Returns true if the given object is an instance of Rule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Rule;
    /**
     * Represents the filter actions which are allowed for the transformation of a message that have been matched by a filter expression.
     */
    readonly action: pulumi.Output<outputs.servicebus.v20170401.ActionResponse | undefined>;
    /**
     * Properties of correlationFilter
     */
    readonly correlationFilter: pulumi.Output<outputs.servicebus.v20170401.CorrelationFilterResponse | undefined>;
    /**
     * Filter type that is evaluated against a BrokeredMessage.
     */
    readonly filterType: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Properties of sqlFilter
     */
    readonly sqlFilter: pulumi.Output<outputs.servicebus.v20170401.SqlFilterResponse | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Rule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RuleArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Rule resource.
 */
export interface RuleArgs {
    /**
     * Represents the filter actions which are allowed for the transformation of a message that have been matched by a filter expression.
     */
    readonly action?: pulumi.Input<inputs.servicebus.v20170401.Action>;
    /**
     * Properties of correlationFilter
     */
    readonly correlationFilter?: pulumi.Input<inputs.servicebus.v20170401.CorrelationFilter>;
    /**
     * Filter type that is evaluated against a BrokeredMessage.
     */
    readonly filterType?: pulumi.Input<string>;
    /**
     * The namespace name
     */
    readonly namespaceName: pulumi.Input<string>;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The rule name.
     */
    readonly ruleName: pulumi.Input<string>;
    /**
     * Properties of sqlFilter
     */
    readonly sqlFilter?: pulumi.Input<inputs.servicebus.v20170401.SqlFilter>;
    /**
     * The subscription name.
     */
    readonly subscriptionName: pulumi.Input<string>;
    /**
     * The topic name.
     */
    readonly topicName: pulumi.Input<string>;
}
