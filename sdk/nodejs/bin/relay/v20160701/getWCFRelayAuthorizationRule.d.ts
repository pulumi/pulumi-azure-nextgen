import * as pulumi from "@pulumi/pulumi";
export declare function getWCFRelayAuthorizationRule(args: GetWCFRelayAuthorizationRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetWCFRelayAuthorizationRuleResult>;
export interface GetWCFRelayAuthorizationRuleArgs {
    /**
     * The authorizationRule name.
     */
    readonly authorizationRuleName: string;
    /**
     * The Namespace Name
     */
    readonly namespaceName: string;
    /**
     * The relay name
     */
    readonly relayName: string;
    /**
     * Name of the Resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * Description of a Namespace AuthorizationRules.
 */
export interface GetWCFRelayAuthorizationRuleResult {
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
