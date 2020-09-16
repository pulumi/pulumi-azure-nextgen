import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The metric alert resource.
 */
export declare class MetricAlert extends pulumi.CustomResource {
    /**
     * Get an existing MetricAlert resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): MetricAlert;
    /**
     * Returns true if the given object is an instance of MetricAlert.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is MetricAlert;
    /**
     * the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
     */
    readonly actions: pulumi.Output<outputs.insights.v20180301.MetricAlertActionResponse[] | undefined>;
    /**
     * the flag that indicates whether the alert should be auto resolved or not. The default is true.
     */
    readonly autoMitigate: pulumi.Output<boolean | undefined>;
    /**
     * defines the specific alert criteria information.
     */
    readonly criteria: pulumi.Output<outputs.insights.v20180301.MetricAlertCriteriaResponse>;
    /**
     * the description of the metric alert that will be included in the alert email.
     */
    readonly description: pulumi.Output<string>;
    /**
     * the flag that indicates whether the metric alert is enabled.
     */
    readonly enabled: pulumi.Output<boolean>;
    /**
     * how often the metric alert is evaluated represented in ISO 8601 duration format.
     */
    readonly evaluationFrequency: pulumi.Output<string>;
    /**
     * Last time the rule was updated in ISO8601 format.
     */
    readonly lastUpdatedTime: pulumi.Output<string>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string>;
    /**
     * Azure resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * the list of resource id's that this metric alert is scoped to.
     */
    readonly scopes: pulumi.Output<string[] | undefined>;
    /**
     * Alert severity {0, 1, 2, 3, 4}
     */
    readonly severity: pulumi.Output<number>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * the region of the target resource(s) on which the alert is created/updated. Mandatory for MultipleResourceMultipleMetricCriteria.
     */
    readonly targetResourceRegion: pulumi.Output<string | undefined>;
    /**
     * the resource type of the target resource(s) on which the alert is created/updated. Mandatory for MultipleResourceMultipleMetricCriteria.
     */
    readonly targetResourceType: pulumi.Output<string | undefined>;
    /**
     * Azure resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold.
     */
    readonly windowSize: pulumi.Output<string>;
    /**
     * Create a MetricAlert resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MetricAlertArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a MetricAlert resource.
 */
export interface MetricAlertArgs {
    /**
     * the array of actions that are performed when the alert rule becomes active, and when an alert condition is resolved.
     */
    readonly actions?: pulumi.Input<pulumi.Input<inputs.insights.v20180301.MetricAlertAction>[]>;
    /**
     * the flag that indicates whether the alert should be auto resolved or not. The default is true.
     */
    readonly autoMitigate?: pulumi.Input<boolean>;
    /**
     * defines the specific alert criteria information.
     */
    readonly criteria: pulumi.Input<inputs.insights.v20180301.MetricAlertCriteria>;
    /**
     * the description of the metric alert that will be included in the alert email.
     */
    readonly description: pulumi.Input<string>;
    /**
     * the flag that indicates whether the metric alert is enabled.
     */
    readonly enabled: pulumi.Input<boolean>;
    /**
     * how often the metric alert is evaluated represented in ISO 8601 duration format.
     */
    readonly evaluationFrequency: pulumi.Input<string>;
    /**
     * Resource location
     */
    readonly location: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the rule.
     */
    readonly ruleName: pulumi.Input<string>;
    /**
     * the list of resource id's that this metric alert is scoped to.
     */
    readonly scopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Alert severity {0, 1, 2, 3, 4}
     */
    readonly severity: pulumi.Input<number>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * the region of the target resource(s) on which the alert is created/updated. Mandatory for MultipleResourceMultipleMetricCriteria.
     */
    readonly targetResourceRegion?: pulumi.Input<string>;
    /**
     * the resource type of the target resource(s) on which the alert is created/updated. Mandatory for MultipleResourceMultipleMetricCriteria.
     */
    readonly targetResourceType?: pulumi.Input<string>;
    /**
     * the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold.
     */
    readonly windowSize: pulumi.Input<string>;
}
