import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getAssessment(args: GetAssessmentArgs, opts?: pulumi.InvokeOptions): Promise<GetAssessmentResult>;
export interface GetAssessmentArgs {
    /**
     * The Assessment Key - Unique key for the assessment type
     */
    readonly assessmentName: string;
    /**
     * OData expand. Optional.
     */
    readonly expand?: string;
    /**
     * The identifier of the resource.
     */
    readonly resourceId: string;
}
/**
 * Security assessment on a resource
 */
export interface GetAssessmentResult {
    /**
     * Additional data regarding the assessment
     */
    readonly additionalData?: {
        [key: string]: string;
    };
    /**
     * User friendly display name of the assessment
     */
    readonly displayName: string;
    /**
     * Links relevant to the assessment
     */
    readonly links?: outputs.security.v20200101.AssessmentLinksResponse;
    /**
     * Describes properties of an assessment metadata.
     */
    readonly metadata?: outputs.security.v20200101.SecurityAssessmentMetadataPropertiesResponse;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Data regarding 3rd party partner integration
     */
    readonly partnersData?: outputs.security.v20200101.SecurityAssessmentPartnerDataResponse;
    /**
     * Details of the resource that was assessed
     */
    readonly resourceDetails: outputs.security.v20200101.ResourceDetailsResponse;
    /**
     * The result of the assessment
     */
    readonly status: outputs.security.v20200101.AssessmentStatusResponse;
    /**
     * Resource type
     */
    readonly type: string;
}
