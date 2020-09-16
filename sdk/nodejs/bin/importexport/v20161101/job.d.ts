import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Contains the job information.
 */
export declare class Job extends pulumi.CustomResource {
    /**
     * Get an existing Job resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Job;
    /**
     * Returns true if the given object is an instance of Job.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Job;
    /**
     * Specifies the Azure location where the job is created.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the job.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Specifies the job properties
     */
    readonly properties: pulumi.Output<outputs.importexport.v20161101.JobDetailsResponse>;
    /**
     * Specifies the tags that are assigned to the job.
     */
    readonly tags: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * Specifies the type of the job resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Job resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JobArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Job resource.
 */
export interface JobArgs {
    /**
     * The name of the import/export job.
     */
    readonly jobName: pulumi.Input<string>;
    /**
     * Specifies the supported Azure location where the job should be created
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Specifies the job properties
     */
    readonly properties?: pulumi.Input<inputs.importexport.v20161101.JobDetails>;
    /**
     * The resource group name uniquely identifies the resource group within the user subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Specifies the tags that will be assigned to the job.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: any;
    }>;
}
