import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
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
     * For optimistic concurrency control.
     */
    readonly eTag: pulumi.Output<string | undefined>;
    /**
     * Unique name of an assessment.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Properties of the assessment.
     */
    readonly properties: pulumi.Output<outputs.migrate.v20191001.AssessmentPropertiesResponse>;
    /**
     * Type of the object = [Microsoft.Migrate/assessmentProjects/groups/assessments].
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
     * Unique name of an assessment within a project.
     */
    readonly assessmentName: pulumi.Input<string>;
    /**
     * For optimistic concurrency control.
     */
    readonly eTag?: pulumi.Input<string>;
    /**
     * Unique name of a group within a project.
     */
    readonly groupName: pulumi.Input<string>;
    /**
     * Name of the Azure Migrate project.
     */
    readonly projectName: pulumi.Input<string>;
    /**
     * Properties of the assessment.
     */
    readonly properties: pulumi.Input<inputs.migrate.v20191001.AssessmentProperties>;
    /**
     * Name of the Azure Resource Group that project is part of.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
