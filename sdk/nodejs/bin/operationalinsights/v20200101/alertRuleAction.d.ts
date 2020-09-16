import * as pulumi from "@pulumi/pulumi";
/**
 * Action for alert rule.
 */
export declare class AlertRuleAction extends pulumi.CustomResource {
    /**
     * Get an existing AlertRuleAction resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AlertRuleAction;
    /**
     * Returns true if the given object is an instance of AlertRuleAction.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AlertRuleAction;
    /**
     * Etag of the action.
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * Logic App Resource Id, /subscriptions/{my-subscription}/resourceGroups/{my-resource-group}/providers/Microsoft.Logic/workflows/{my-workflow-id}.
     */
    readonly logicAppResourceId: pulumi.Output<string>;
    /**
     * Azure resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Azure resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * The name of the logic app's workflow.
     */
    readonly workflowId: pulumi.Output<string | undefined>;
    /**
     * Create a AlertRuleAction resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlertRuleActionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a AlertRuleAction resource.
 */
export interface AlertRuleActionArgs {
    /**
     * Action ID
     */
    readonly actionId: pulumi.Input<string>;
    /**
     * Etag of the azure resource
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * Logic App Resource Id, /subscriptions/{my-subscription}/resourceGroups/{my-resource-group}/providers/Microsoft.Logic/workflows/{my-workflow-id}.
     */
    readonly logicAppResourceId: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Alert rule ID
     */
    readonly ruleId: pulumi.Input<string>;
    /**
     * Logic App Callback URL for this specific workflow.
     */
    readonly triggerUri?: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    readonly workspaceName: pulumi.Input<string>;
}
