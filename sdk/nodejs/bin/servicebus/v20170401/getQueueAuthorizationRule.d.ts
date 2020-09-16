import * as pulumi from "@pulumi/pulumi";
export declare function getQueueAuthorizationRule(args: GetQueueAuthorizationRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetQueueAuthorizationRuleResult>;
export interface GetQueueAuthorizationRuleArgs {
    /**
     * The authorization rule name.
     */
    readonly authorizationRuleName: string;
    /**
     * The namespace name
     */
    readonly namespaceName: string;
    /**
     * The queue name.
     */
    readonly queueName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * Description of a namespace authorization rule.
 */
export interface GetQueueAuthorizationRuleResult {
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
