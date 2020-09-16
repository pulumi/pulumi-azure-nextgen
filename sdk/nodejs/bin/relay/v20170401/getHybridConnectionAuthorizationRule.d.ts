import * as pulumi from "@pulumi/pulumi";
export declare function getHybridConnectionAuthorizationRule(args: GetHybridConnectionAuthorizationRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetHybridConnectionAuthorizationRuleResult>;
export interface GetHybridConnectionAuthorizationRuleArgs {
    /**
     * The authorization rule name.
     */
    readonly authorizationRuleName: string;
    /**
     * The hybrid connection name.
     */
    readonly hybridConnectionName: string;
    /**
     * The namespace name
     */
    readonly namespaceName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * Description of a namespace authorization rule.
 */
export interface GetHybridConnectionAuthorizationRuleResult {
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The rights associated with the rule.
     */
    readonly rights: string[];
    /**
     * Resource type.
     */
    readonly type: string;
}
