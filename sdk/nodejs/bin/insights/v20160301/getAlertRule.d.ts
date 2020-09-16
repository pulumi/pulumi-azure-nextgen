import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getAlertRule(args: GetAlertRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetAlertRuleResult>;
export interface GetAlertRuleArgs {
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the rule.
     */
    readonly ruleName: string;
}
/**
 * The alert rule resource.
 */
export interface GetAlertRuleResult {
    /**
     * the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
     */
    readonly actions?: outputs.insights.v20160301.RuleActionResponse[];
    /**
     * the condition that results in the alert rule being activated.
     */
    readonly condition: outputs.insights.v20160301.RuleConditionResponse;
    /**
     * the description of the alert rule that will be included in the alert email.
     */
    readonly description?: string;
    /**
     * the flag that indicates whether the alert rule is enabled.
     */
    readonly isEnabled: boolean;
    /**
     * Last time the rule was updated in ISO8601 format.
     */
    readonly lastUpdatedTime: string;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Azure resource name
     */
    readonly name: string;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Azure resource type
     */
    readonly type: string;
}
