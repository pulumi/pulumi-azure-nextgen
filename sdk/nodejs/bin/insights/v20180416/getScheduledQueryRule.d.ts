import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getScheduledQueryRule(args: GetScheduledQueryRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetScheduledQueryRuleResult>;
export interface GetScheduledQueryRuleArgs {
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
 * The Log Search Rule resource.
 */
export interface GetScheduledQueryRuleResult {
    /**
     * Action needs to be taken on rule execution.
     */
    readonly action: outputs.insights.v20180416.ActionResponse;
    /**
     * The description of the Log Search rule.
     */
    readonly description?: string;
    /**
     * The flag which indicates whether the Log Search rule is enabled. Value should be true or false
     */
    readonly enabled?: string;
    /**
     * Last time the rule was updated in IS08601 format.
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
     * Provisioning state of the scheduled query rule
     */
    readonly provisioningState: string;
    /**
     * Schedule (Frequency, Time Window) for rule. Required for action type - AlertingAction
     */
    readonly schedule?: outputs.insights.v20180416.ScheduleResponse;
    /**
     * Data Source against which rule will Query Data
     */
    readonly source: outputs.insights.v20180416.SourceResponse;
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
