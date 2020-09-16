import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getRule(args: GetRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetRuleResult>;
export interface GetRuleArgs {
    /**
     * The namespace name
     */
    readonly namespaceName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
    /**
     * The rule name.
     */
    readonly ruleName: string;
    /**
     * The subscription name.
     */
    readonly subscriptionName: string;
    /**
     * The topic name.
     */
    readonly topicName: string;
}
/**
 * Description of Rule Resource.
 */
export interface GetRuleResult {
    /**
     * Represents the filter actions which are allowed for the transformation of a message that have been matched by a filter expression.
     */
    readonly action?: outputs.servicebus.v20170401.ActionResponse;
    /**
     * Properties of correlationFilter
     */
    readonly correlationFilter?: outputs.servicebus.v20170401.CorrelationFilterResponse;
    /**
     * Filter type that is evaluated against a BrokeredMessage.
     */
    readonly filterType?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Properties of sqlFilter
     */
    readonly sqlFilter?: outputs.servicebus.v20170401.SqlFilterResponse;
    /**
     * Resource type
     */
    readonly type: string;
}
