import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The prediction resource format.
 */
export declare class Prediction extends pulumi.CustomResource {
    /**
     * Get an existing Prediction resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Prediction;
    /**
     * Returns true if the given object is an instance of Prediction.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Prediction;
    /**
     * Whether do auto analyze.
     */
    readonly autoAnalyze: pulumi.Output<boolean>;
    /**
     * Description of the prediction.
     */
    readonly description: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Display name of the prediction.
     */
    readonly displayName: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The prediction grades.
     */
    readonly grades: pulumi.Output<outputs.customerinsights.v20170426.PredictionResponseGrades[] | undefined>;
    /**
     * Interaction types involved in the prediction.
     */
    readonly involvedInteractionTypes: pulumi.Output<string[] | undefined>;
    /**
     * KPI types involved in the prediction.
     */
    readonly involvedKpiTypes: pulumi.Output<string[] | undefined>;
    /**
     * Relationships involved in the prediction.
     */
    readonly involvedRelationships: pulumi.Output<string[] | undefined>;
    /**
     * Definition of the link mapping of prediction.
     */
    readonly mappings: pulumi.Output<outputs.customerinsights.v20170426.PredictionResponseMappings>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Negative outcome expression.
     */
    readonly negativeOutcomeExpression: pulumi.Output<string>;
    /**
     * Positive outcome expression.
     */
    readonly positiveOutcomeExpression: pulumi.Output<string>;
    /**
     * Name of the prediction.
     */
    readonly predictionName: pulumi.Output<string | undefined>;
    /**
     * Primary profile type.
     */
    readonly primaryProfileType: pulumi.Output<string>;
    /**
     * Provisioning state.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * Scope expression.
     */
    readonly scopeExpression: pulumi.Output<string>;
    /**
     * Score label.
     */
    readonly scoreLabel: pulumi.Output<string>;
    /**
     * System generated entities.
     */
    readonly systemGeneratedEntities: pulumi.Output<outputs.customerinsights.v20170426.PredictionResponseSystemGeneratedEntities>;
    /**
     * The hub name.
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Prediction resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PredictionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Prediction resource.
 */
export interface PredictionArgs {
    /**
     * Whether do auto analyze.
     */
    readonly autoAnalyze: pulumi.Input<boolean>;
    /**
     * Description of the prediction.
     */
    readonly description?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Display name of the prediction.
     */
    readonly displayName?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The prediction grades.
     */
    readonly grades?: pulumi.Input<pulumi.Input<inputs.customerinsights.v20170426.PredictionGrades>[]>;
    /**
     * The name of the hub.
     */
    readonly hubName: pulumi.Input<string>;
    /**
     * Interaction types involved in the prediction.
     */
    readonly involvedInteractionTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * KPI types involved in the prediction.
     */
    readonly involvedKpiTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Relationships involved in the prediction.
     */
    readonly involvedRelationships?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Definition of the link mapping of prediction.
     */
    readonly mappings: pulumi.Input<inputs.customerinsights.v20170426.PredictionMappings>;
    /**
     * Negative outcome expression.
     */
    readonly negativeOutcomeExpression: pulumi.Input<string>;
    /**
     * Positive outcome expression.
     */
    readonly positiveOutcomeExpression: pulumi.Input<string>;
    /**
     * Name of the prediction.
     */
    readonly predictionName: pulumi.Input<string>;
    /**
     * Primary profile type.
     */
    readonly primaryProfileType: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Scope expression.
     */
    readonly scopeExpression: pulumi.Input<string>;
    /**
     * Score label.
     */
    readonly scoreLabel: pulumi.Input<string>;
}
