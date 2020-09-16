import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * A Job resource type. The progress and state can be obtained by polling a Job or subscribing to events using EventGrid.
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
     * Customer provided key, value pairs that will be returned in Job and JobOutput state events.
     */
    readonly correlationData: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The UTC date and time when the Job was created, in 'YYYY-MM-DDThh:mm:ssZ' format.
     */
    readonly created: pulumi.Output<string>;
    /**
     * Optional customer supplied description of the Job.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The UTC date and time at which this Job finished processing.
     */
    readonly endTime: pulumi.Output<string>;
    /**
     * The inputs for the Job.
     */
    readonly input: pulumi.Output<outputs.media.v20180701.JobInputResponse>;
    /**
     * The UTC date and time when the Job was last updated, in 'YYYY-MM-DDThh:mm:ssZ' format.
     */
    readonly lastModified: pulumi.Output<string>;
    /**
     * The name of the resource.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The outputs for the Job.
     */
    readonly outputs: pulumi.Output<outputs.media.v20180701.JobOutputResponse[]>;
    /**
     * Priority with which the job should be processed. Higher priority jobs are processed before lower priority jobs. If not set, the default is normal.
     */
    readonly priority: pulumi.Output<string | undefined>;
    /**
     * The UTC date and time at which this Job began processing.
     */
    readonly startTime: pulumi.Output<string>;
    /**
     * The current state of the job.
     */
    readonly state: pulumi.Output<string>;
    /**
     * The type of the resource.
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
     * The Media Services account name.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * Customer provided key, value pairs that will be returned in Job and JobOutput state events.
     */
    readonly correlationData?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Optional customer supplied description of the Job.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The inputs for the Job.
     */
    readonly input: pulumi.Input<inputs.media.v20180701.JobInput>;
    /**
     * The Job name.
     */
    readonly jobName: pulumi.Input<string>;
    /**
     * The outputs for the Job.
     */
    readonly outputs: pulumi.Input<pulumi.Input<inputs.media.v20180701.JobOutput>[]>;
    /**
     * Priority with which the job should be processed. Higher priority jobs are processed before lower priority jobs. If not set, the default is normal.
     */
    readonly priority?: pulumi.Input<string>;
    /**
     * The name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The Transform name.
     */
    readonly transformName: pulumi.Input<string>;
}
