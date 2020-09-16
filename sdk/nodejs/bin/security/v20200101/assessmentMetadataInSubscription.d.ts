import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Security assessment metadata
 */
export declare class AssessmentMetadataInSubscription extends pulumi.CustomResource {
    /**
     * Get an existing AssessmentMetadataInSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AssessmentMetadataInSubscription;
    /**
     * Returns true if the given object is an instance of AssessmentMetadataInSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AssessmentMetadataInSubscription;
    /**
     * BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition
     */
    readonly assessmentType: pulumi.Output<string>;
    readonly category: pulumi.Output<string[] | undefined>;
    /**
     * Human readable description of the assessment
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * User friendly display name of the assessment
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * The implementation effort required to remediate this assessment
     */
    readonly implementationEffort: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Describes the partner that created the assessment
     */
    readonly partnerData: pulumi.Output<outputs.security.v20200101.SecurityAssessmentMetadataPartnerDataResponse | undefined>;
    /**
     * Azure resource ID of the policy definition that turns this assessment calculation on
     */
    readonly policyDefinitionId: pulumi.Output<string>;
    /**
     * True if this assessment is in preview release status
     */
    readonly preview: pulumi.Output<boolean | undefined>;
    /**
     * Human readable description of what you should do to mitigate this security issue
     */
    readonly remediationDescription: pulumi.Output<string | undefined>;
    /**
     * The severity level of the assessment
     */
    readonly severity: pulumi.Output<string>;
    readonly threats: pulumi.Output<string[] | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * The user impact of the assessment
     */
    readonly userImpact: pulumi.Output<string | undefined>;
    /**
     * Create a AssessmentMetadataInSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AssessmentMetadataInSubscriptionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a AssessmentMetadataInSubscription resource.
 */
export interface AssessmentMetadataInSubscriptionArgs {
    /**
     * The Assessment Key - Unique key for the assessment type
     */
    readonly assessmentMetadataName: pulumi.Input<string>;
    /**
     * BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition
     */
    readonly assessmentType: pulumi.Input<string>;
    readonly category?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Human readable description of the assessment
     */
    readonly description?: pulumi.Input<string>;
    /**
     * User friendly display name of the assessment
     */
    readonly displayName: pulumi.Input<string>;
    /**
     * The implementation effort required to remediate this assessment
     */
    readonly implementationEffort?: pulumi.Input<string>;
    /**
     * Describes the partner that created the assessment
     */
    readonly partnerData?: pulumi.Input<inputs.security.v20200101.SecurityAssessmentMetadataPartnerData>;
    /**
     * True if this assessment is in preview release status
     */
    readonly preview?: pulumi.Input<boolean>;
    /**
     * Human readable description of what you should do to mitigate this security issue
     */
    readonly remediationDescription?: pulumi.Input<string>;
    /**
     * The severity level of the assessment
     */
    readonly severity: pulumi.Input<string>;
    readonly threats?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The user impact of the assessment
     */
    readonly userImpact?: pulumi.Input<string>;
}
