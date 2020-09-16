import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Job Resource.
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
     * Reason for cancellation.
     */
    readonly cancellationReason: pulumi.Output<string>;
    /**
     * Details of a job run. This field will only be sent for expand details filter.
     */
    readonly details: pulumi.Output<outputs.databox.v20180101.JobDetailsResponse | undefined>;
    /**
     * Top level error for the job.
     */
    readonly error: pulumi.Output<outputs.databox.v20180101.ErrorResponse>;
    /**
     * Describes whether the job is cancellable or not.
     */
    readonly isCancellable: pulumi.Output<boolean>;
    /**
     * Describes whether the job is deletable or not.
     */
    readonly isDeletable: pulumi.Output<boolean>;
    /**
     * Describes whether the shipping address is editable or not.
     */
    readonly isShippingAddressEditable: pulumi.Output<boolean>;
    /**
     * The location of the resource. This will be one of the supported and registered Azure Regions (e.g. West US, East US, Southeast Asia, etc.). The region of a resource cannot be changed once it is created, but if an identical region is specified on update the request will succeed.
     */
    readonly location: pulumi.Output<string>;
    /**
     * Name of the object.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The sku type.
     */
    readonly sku: pulumi.Output<outputs.databox.v20180101.SkuResponse>;
    /**
     * Time at which the job was started in UTC ISO 8601 format.
     */
    readonly startTime: pulumi.Output<string>;
    /**
     * Name of the stage which is in progress.
     */
    readonly status: pulumi.Output<string>;
    /**
     * The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups).
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Type of the object.
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
     * Details of a job run. This field will only be sent for expand details filter.
     */
    readonly details?: pulumi.Input<inputs.databox.v20180101.JobDetails>;
    /**
     * The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
     */
    readonly jobName: pulumi.Input<string>;
    /**
     * The location of the resource. This will be one of the supported and registered Azure Regions (e.g. West US, East US, Southeast Asia, etc.). The region of a resource cannot be changed once it is created, but if an identical region is specified on update the request will succeed.
     */
    readonly location: pulumi.Input<string>;
    /**
     * The Resource Group Name
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The sku type.
     */
    readonly sku: pulumi.Input<inputs.databox.v20180101.Sku>;
    /**
     * The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups).
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
