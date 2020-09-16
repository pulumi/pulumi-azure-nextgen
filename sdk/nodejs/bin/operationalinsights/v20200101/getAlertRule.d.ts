import * as pulumi from "@pulumi/pulumi";
export declare function getAlertRule(args: GetAlertRuleArgs, opts?: pulumi.InvokeOptions): Promise<GetAlertRuleResult>;
export interface GetAlertRuleArgs {
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * Alert rule ID
     */
    readonly ruleId: string;
    /**
     * The name of the workspace.
     */
    readonly workspaceName: string;
}
/**
 * Alert rule.
 */
export interface GetAlertRuleResult {
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * The alert rule kind
     */
    readonly kind: string;
    /**
     * Azure resource name
     */
    readonly name: string;
    /**
     * Azure resource type
     */
    readonly type: string;
}
