import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The Log Search Rule resource.
 */
export declare class ScheduledQueryRule extends pulumi.CustomResource {
    /**
     * Get an existing ScheduledQueryRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ScheduledQueryRule;
    /**
     * Returns true if the given object is an instance of ScheduledQueryRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ScheduledQueryRule;
    /**
     * Action needs to be taken on rule execution.
     */
    readonly action: pulumi.Output<outputs.insights.v20180416.ActionResponse>;
    /**
     * The description of the Log Search rule.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The flag which indicates whether the Log Search rule is enabled. Value should be true or false
     */
    readonly enabled: pulumi.Output<string | undefined>;
    /**
     * Last time the rule was updated in IS08601 format.
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
     * Provisioning state of the scheduled query rule
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Schedule (Frequency, Time Window) for rule. Required for action type - AlertingAction
     */
    readonly schedule: pulumi.Output<outputs.insights.v20180416.ScheduleResponse | undefined>;
    /**
     * Data Source against which rule will Query Data
     */
    readonly source: pulumi.Output<outputs.insights.v20180416.SourceResponse>;
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
     * Create a ScheduledQueryRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScheduledQueryRuleArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ScheduledQueryRule resource.
 */
export interface ScheduledQueryRuleArgs {
    /**
     * Action needs to be taken on rule execution.
     */
    readonly action: pulumi.Input<inputs.insights.v20180416.Action>;
    /**
     * The description of the Log Search rule.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The flag which indicates whether the Log Search rule is enabled. Value should be true or false
     */
    readonly enabled?: pulumi.Input<string>;
    /**
     * Resource location
     */
    readonly location: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the rule.
     */
    readonly ruleName: pulumi.Input<string>;
    /**
     * Schedule (Frequency, Time Window) for rule. Required for action type - AlertingAction
     */
    readonly schedule?: pulumi.Input<inputs.insights.v20180416.Schedule>;
    /**
     * Data Source against which rule will Query Data
     */
    readonly source: pulumi.Input<inputs.insights.v20180416.Source>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
