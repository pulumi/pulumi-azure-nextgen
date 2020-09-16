import * as pulumi from "@pulumi/pulumi";
export declare function getAlertRuleAction(args: GetAlertRuleActionArgs, opts?: pulumi.InvokeOptions): Promise<GetAlertRuleActionResult>;
export interface GetAlertRuleActionArgs {
    /**
     * Action ID
     */
    readonly actionId: string;
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
 * Action for alert rule.
 */
export interface GetAlertRuleActionResult {
    /**
     * Etag of the action.
     */
    readonly etag?: string;
    /**
     * Logic App Resource Id, /subscriptions/{my-subscription}/resourceGroups/{my-resource-group}/providers/Microsoft.Logic/workflows/{my-workflow-id}.
     */
    readonly logicAppResourceId: string;
    /**
     * Azure resource name
     */
    readonly name: string;
    /**
     * Azure resource type
     */
    readonly type: string;
    /**
     * The name of the logic app's workflow.
     */
    readonly workflowId?: string;
}
