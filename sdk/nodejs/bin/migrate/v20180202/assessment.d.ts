import * as pulumi from "@pulumi/pulumi";
/**
 * An assessment created for a group in the Migration project.
 */
export declare class Assessment extends pulumi.CustomResource {
    /**
     * Get an existing Assessment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Assessment;
    /**
     * Returns true if the given object is an instance of Assessment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Assessment;
    /**
     * AHUB discount on windows virtual machines.
     */
    readonly azureHybridUseBenefit: pulumi.Output<string>;
    /**
     * Target Azure location for which the machines should be assessed. These enums are the same as used by Compute API.
     */
    readonly azureLocation: pulumi.Output<string>;
    /**
     * Offer code according to which cost estimation is done.
     */
    readonly azureOfferCode: pulumi.Output<string>;
    /**
     * Pricing tier for Size evaluation.
     */
    readonly azurePricingTier: pulumi.Output<string>;
    /**
     * Storage Redundancy type offered by Azure.
     */
    readonly azureStorageRedundancy: pulumi.Output<string>;
    /**
     * Confidence rating percentage for assessment. Can be in the range [0, 100].
     */
    readonly confidenceRatingInPercentage: pulumi.Output<number>;
    /**
     * Time when this project was created. Date-Time represented in ISO-8601 format.
     */
    readonly createdTimestamp: pulumi.Output<string>;
    /**
     * Currency to report prices in.
     */
    readonly currency: pulumi.Output<string>;
    /**
     * Custom discount percentage to be applied on final costs. Can be in the range [0, 100].
     */
    readonly discountPercentage: pulumi.Output<number>;
    /**
     * For optimistic concurrency control.
     */
    readonly eTag: pulumi.Output<string | undefined>;
    /**
     * Monthly network cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
     */
    readonly monthlyBandwidthCost: pulumi.Output<number>;
    /**
     * Monthly compute cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
     */
    readonly monthlyComputeCost: pulumi.Output<number>;
    /**
     * Monthly storage cost estimate for the machines that are part of this assessment as a group, for a 31-day month.
     */
    readonly monthlyStorageCost: pulumi.Output<number>;
    /**
     * Unique name of an assessment.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Number of assessed machines part of this assessment.
     */
    readonly numberOfMachines: pulumi.Output<number>;
    /**
     * Percentile of performance data used to recommend Azure size.
     */
    readonly percentile: pulumi.Output<string>;
    /**
     * Time when the Azure Prices were queried. Date-Time represented in ISO-8601 format.
     */
    readonly pricesTimestamp: pulumi.Output<string>;
    /**
     * Scaling factor used over utilization data to add a performance buffer for new machines to be created in Azure. Min Value = 1.0, Max value = 1.9, Default = 1.3.
     */
    readonly scalingFactor: pulumi.Output<number>;
    /**
     * Assessment sizing criterion.
     */
    readonly sizingCriterion: pulumi.Output<string>;
    /**
     * User configurable setting that describes the status of the assessment.
     */
    readonly stage: pulumi.Output<string>;
    /**
     * Whether the assessment has been created and is valid.
     */
    readonly status: pulumi.Output<string>;
    /**
     * Time range of performance data used to recommend a size.
     */
    readonly timeRange: pulumi.Output<string>;
    /**
     * Type of the object = [Microsoft.Migrate/projects/groups/assessments].
     */
    readonly type: pulumi.Output<string>;
    /**
     * Time when this project was last updated. Date-Time represented in ISO-8601 format.
     */
    readonly updatedTimestamp: pulumi.Output<string>;
    /**
     * Create a Assessment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AssessmentArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Assessment resource.
 */
export interface AssessmentArgs {
    /**
     * Unique name of an assessment within a project.
     */
    readonly assessmentName: pulumi.Input<string>;
    /**
     * AHUB discount on windows virtual machines.
     */
    readonly azureHybridUseBenefit: pulumi.Input<string>;
    /**
     * Target Azure location for which the machines should be assessed. These enums are the same as used by Compute API.
     */
    readonly azureLocation: pulumi.Input<string>;
    /**
     * Offer code according to which cost estimation is done.
     */
    readonly azureOfferCode: pulumi.Input<string>;
    /**
     * Pricing tier for Size evaluation.
     */
    readonly azurePricingTier: pulumi.Input<string>;
    /**
     * Storage Redundancy type offered by Azure.
     */
    readonly azureStorageRedundancy: pulumi.Input<string>;
    /**
     * Currency to report prices in.
     */
    readonly currency: pulumi.Input<string>;
    /**
     * Custom discount percentage to be applied on final costs. Can be in the range [0, 100].
     */
    readonly discountPercentage: pulumi.Input<number>;
    /**
     * For optimistic concurrency control.
     */
    readonly eTag?: pulumi.Input<string>;
    /**
     * Unique name of a group within a project.
     */
    readonly groupName: pulumi.Input<string>;
    /**
     * Percentile of performance data used to recommend Azure size.
     */
    readonly percentile: pulumi.Input<string>;
    /**
     * Name of the Azure Migrate project.
     */
    readonly projectName: pulumi.Input<string>;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Scaling factor used over utilization data to add a performance buffer for new machines to be created in Azure. Min Value = 1.0, Max value = 1.9, Default = 1.3.
     */
    readonly scalingFactor: pulumi.Input<number>;
    /**
     * Assessment sizing criterion.
     */
    readonly sizingCriterion: pulumi.Input<string>;
    /**
     * User configurable setting that describes the status of the assessment.
     */
    readonly stage: pulumi.Input<string>;
    /**
     * Time range of performance data used to recommend a size.
     */
    readonly timeRange: pulumi.Input<string>;
}
