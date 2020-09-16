import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Security assessment on a resource
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
     * Additional data regarding the assessment
     */
    readonly additionalData: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * User friendly display name of the assessment
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * Links relevant to the assessment
     */
    readonly links: pulumi.Output<outputs.security.v20200101.AssessmentLinksResponse | undefined>;
    /**
     * Describes properties of an assessment metadata.
     */
    readonly metadata: pulumi.Output<outputs.security.v20200101.SecurityAssessmentMetadataPropertiesResponse | undefined>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Data regarding 3rd party partner integration
     */
    readonly partnersData: pulumi.Output<outputs.security.v20200101.SecurityAssessmentPartnerDataResponse | undefined>;
    /**
     * Details of the resource that was assessed
     */
    readonly resourceDetails: pulumi.Output<outputs.security.v20200101.ResourceDetailsResponse>;
    /**
     * The result of the assessment
     */
    readonly status: pulumi.Output<outputs.security.v20200101.AssessmentStatusResponse>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
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
     * Additional data regarding the assessment
     */
    readonly additionalData?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The Assessment Key - Unique key for the assessment type
     */
    readonly assessmentName: pulumi.Input<string>;
    /**
     * Describes properties of an assessment metadata.
     */
    readonly metadata?: pulumi.Input<inputs.security.v20200101.SecurityAssessmentMetadataProperties>;
    /**
     * Data regarding 3rd party partner integration
     */
    readonly partnersData?: pulumi.Input<inputs.security.v20200101.SecurityAssessmentPartnerData>;
    /**
     * Details of the resource that was assessed
     */
    readonly resourceDetails: pulumi.Input<inputs.security.v20200101.ResourceDetails>;
    /**
     * The identifier of the resource.
     */
    readonly resourceId: pulumi.Input<string>;
    /**
     * The result of the assessment
     */
    readonly status: pulumi.Input<inputs.security.v20200101.AssessmentStatus>;
}
