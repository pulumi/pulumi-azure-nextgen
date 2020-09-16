import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getNotificationHubAuthorizationRule(args: GetNotificationHubAuthorizationRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetNotificationHubAuthorizationRuleResult>;
export interface GetNotificationHubAuthorizationRuleArgs {
    /**
     * authorization rule name.
     */
    readonly authorizationRuleName: string;
    /**
     * The namespace name
     */
    readonly namespaceName: string;
    /**
     * The notification hub name.
     */
    readonly notificationHubName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Description of a Namespace AuthorizationRules.
 */
export interface GetNotificationHubAuthorizationRuleResult {
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * The rights associated with the rule.
     */
    readonly rights?: string[];
    /**
     * The sku of the created namespace
     */
    readonly sku?: outputs.notificationhubs.v20160301.SkuResponse;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type: string;
}
