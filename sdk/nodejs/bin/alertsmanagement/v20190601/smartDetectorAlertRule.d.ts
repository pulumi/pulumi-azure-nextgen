import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The alert rule information
 */
export declare class SmartDetectorAlertRule extends pulumi.CustomResource {
    /**
     * Get an existing SmartDetectorAlertRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SmartDetectorAlertRule;
    /**
     * Returns true if the given object is an instance of SmartDetectorAlertRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SmartDetectorAlertRule;
    /**
     * The alert rule actions.
     */
    readonly actionGroups: pulumi.Output<outputs.alertsmanagement.v20190601.ActionGroupsInformationResponse>;
    /**
     * The alert rule description.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The alert rule's detector.
     */
    readonly detector: pulumi.Output<outputs.alertsmanagement.v20190601.DetectorResponse>;
    /**
     * The alert rule frequency in ISO8601 format. The time granularity must be in minutes and minimum value is 5 minutes.
     */
    readonly frequency: pulumi.Output<string>;
    /**
     * The resource location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * The resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The alert rule resources scope.
     */
    readonly scope: pulumi.Output<string[]>;
    /**
     * The alert rule severity.
     */
    readonly severity: pulumi.Output<string>;
    /**
     * The alert rule state.
     */
    readonly state: pulumi.Output<string>;
    /**
     * The resource tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * The alert rule throttling information.
     */
    readonly throttling: pulumi.Output<outputs.alertsmanagement.v20190601.ThrottlingInformationResponse | undefined>;
    /**
     * The resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a SmartDetectorAlertRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SmartDetectorAlertRuleArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a SmartDetectorAlertRule resource.
 */
export interface SmartDetectorAlertRuleArgs {
    /**
     * The alert rule actions.
     */
    readonly actionGroups: pulumi.Input<inputs.alertsmanagement.v20190601.ActionGroupsInformation>;
    /**
     * The name of the alert rule.
     */
    readonly alertRuleName: pulumi.Input<string>;
    /**
     * The alert rule description.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The alert rule's detector.
     */
    readonly detector: pulumi.Input<inputs.alertsmanagement.v20190601.Detector>;
    /**
     * The alert rule frequency in ISO8601 format. The time granularity must be in minutes and minimum value is 5 minutes.
     */
    readonly frequency: pulumi.Input<string>;
    /**
     * The resource location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The alert rule resources scope.
     */
    readonly scope: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The alert rule severity.
     */
    readonly severity: pulumi.Input<string>;
    /**
     * The alert rule state.
     */
    readonly state: pulumi.Input<string>;
    /**
     * The resource tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * The alert rule throttling information.
     */
    readonly throttling?: pulumi.Input<inputs.alertsmanagement.v20190601.ThrottlingInformation>;
}
