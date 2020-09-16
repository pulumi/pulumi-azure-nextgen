import * as pulumi from "@pulumi/pulumi";
export declare function getEventHubAuthorizationRule(args: GetEventHubAuthorizationRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetEventHubAuthorizationRuleResult>;
export interface GetEventHubAuthorizationRuleArgs {
    /**
     * The authorization rule name.
     */
    readonly authorizationRuleName: string;
    /**
     * The Event Hub name
     */
    readonly eventHubName: string;
    /**
     * The Namespace name
     */
    readonly namespaceName: string;
    /**
     * Name of the resource group within the azure subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * Single item in a List or Get AuthorizationRule operation
 */
export interface GetEventHubAuthorizationRuleResult {
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
