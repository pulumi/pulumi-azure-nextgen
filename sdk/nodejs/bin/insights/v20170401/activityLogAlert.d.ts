import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * An activity log alert resource.
 */
export declare class ActivityLogAlert extends pulumi.CustomResource {
    /**
     * Get an existing ActivityLogAlert resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ActivityLogAlert;
    /**
     * Returns true if the given object is an instance of ActivityLogAlert.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ActivityLogAlert;
    /**
     * The actions that will activate when the condition is met.
     */
    readonly actions: pulumi.Output<outputs.insights.v20170401.ActivityLogAlertActionListResponse>;
    /**
     * The condition that will cause this alert to activate.
     */
    readonly condition: pulumi.Output<outputs.insights.v20170401.ActivityLogAlertAllOfConditionResponse>;
    /**
     * A description of this activity log alert.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Indicates whether this activity log alert is enabled. If an activity log alert is not enabled, then none of its actions will be activated.
     */
    readonly enabled: pulumi.Output<boolean | undefined>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string>;
    /**
     * Azure resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * A list of resourceIds that will be used as prefixes. The alert will only apply to activityLogs with resourceIds that fall under one of these prefixes. This list must include at least one item.
     */
    readonly scopes: pulumi.Output<string[]>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Azure resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a ActivityLogAlert resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ActivityLogAlertArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ActivityLogAlert resource.
 */
export interface ActivityLogAlertArgs {
    /**
     * The actions that will activate when the condition is met.
     */
    readonly actions: pulumi.Input<inputs.insights.v20170401.ActivityLogAlertActionList>;
    /**
     * The name of the activity log alert.
     */
    readonly activityLogAlertName: pulumi.Input<string>;
    /**
     * The condition that will cause this alert to activate.
     */
    readonly condition: pulumi.Input<inputs.insights.v20170401.ActivityLogAlertAllOfCondition>;
    /**
     * A description of this activity log alert.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Indicates whether this activity log alert is enabled. If an activity log alert is not enabled, then none of its actions will be activated.
     */
    readonly enabled?: pulumi.Input<boolean>;
    /**
     * Resource location
     */
    readonly location: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * A list of resourceIds that will be used as prefixes. The alert will only apply to activityLogs with resourceIds that fall under one of these prefixes. This list must include at least one item.
     */
    readonly scopes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
