import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The alert rule resource.
 */
export declare class AlertRule extends pulumi.CustomResource {
    /**
     * Get an existing AlertRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AlertRule;
    /**
     * Returns true if the given object is an instance of AlertRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AlertRule;
    /**
     * the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
     */
    readonly actions: pulumi.Output<outputs.insights.v20160301.RuleActionResponse[] | undefined>;
    /**
     * the condition that results in the alert rule being activated.
     */
    readonly condition: pulumi.Output<outputs.insights.v20160301.RuleConditionResponse>;
    /**
     * the description of the alert rule that will be included in the alert email.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * the flag that indicates whether the alert rule is enabled.
     */
    readonly isEnabled: pulumi.Output<boolean>;
    /**
     * Last time the rule was updated in ISO8601 format.
     */
    readonly lastUpdatedTime: pulumi.Output<string>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string>;
    /**
     * Azure resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Azure resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a AlertRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlertRuleArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a AlertRule resource.
 */
export interface AlertRuleArgs {
    /**
     * the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
     */
    readonly actions?: pulumi.Input<pulumi.Input<inputs.insights.v20160301.RuleAction>[]>;
    /**
     * the condition that results in the alert rule being activated.
     */
    readonly condition: pulumi.Input<inputs.insights.v20160301.RuleCondition>;
    /**
     * the description of the alert rule that will be included in the alert email.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * the flag that indicates whether the alert rule is enabled.
     */
    readonly isEnabled: pulumi.Input<boolean>;
    /**
     * Resource location
     */
    readonly location: pulumi.Input<string>;
    /**
     * the name of the alert rule.
     */
    readonly name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the rule.
     */
    readonly ruleName: pulumi.Input<string>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
