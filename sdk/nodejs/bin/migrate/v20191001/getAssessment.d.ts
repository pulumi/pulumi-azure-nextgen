import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getAssessment(args: GetAssessmentArgs, opts?: pulumi.InvokeOptions): Promise<GetAssessmentResult>;
export interface GetAssessmentArgs {
    /**
     * Unique name of an assessment within a project.
     */
    readonly assessmentName: string;
    /**
     * Unique name of a group within a project.
     */
    readonly groupName: string;
    /**
     * Name of the Azure Migrate project.
     */
    readonly projectName: string;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    readonly resourceGroupName: string;
}
/**
 * An assessment created for a group in the Migration project.
 */
export interface GetAssessmentResult {
    /**
     * For optimistic concurrency control.
     */
    readonly eTag?: string;
    /**
     * Unique name of an assessment.
     */
    readonly name: string;
    /**
     * Properties of the assessment.
     */
    readonly properties: outputs.migrate.v20191001.AssessmentPropertiesResponse;
    /**
     * Type of the object = [Microsoft.Migrate/assessmentProjects/groups/assessments].
     */
    readonly type: string;
}
