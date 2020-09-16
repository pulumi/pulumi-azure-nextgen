import * as pulumi from "@pulumi/pulumi";
export declare function getTopicAuthorizationRule(args: GetTopicAuthorizationRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetTopicAuthorizationRuleResult>;
export interface GetTopicAuthorizationRuleArgs {
    /**
     * The authorization rule name.
     */
    readonly authorizationRuleName: string;
    /**
     * The namespace name
     */
    readonly namespaceName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
    /**
     * The topic name.
     */
    readonly topicName: string;
}
/**
 * Description of a namespace authorization rule.
 */
export interface GetTopicAuthorizationRuleResult {
    /**
     * Resource location.
     */
    readonly location?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The rights associated with the rule.
     */
    readonly rights: string[];
    /**
     * Resource type
     */
    readonly type: string;
}
