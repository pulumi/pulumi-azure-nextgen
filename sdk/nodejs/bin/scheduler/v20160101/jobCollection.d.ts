import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
export declare class JobCollection extends pulumi.CustomResource {
    /**
     * Get an existing JobCollection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): JobCollection;
    /**
     * Returns true if the given object is an instance of JobCollection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is JobCollection;
    /**
     * Gets or sets the storage account location.
     */
    readonly location: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the job collection resource name.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * Gets or sets the job collection properties.
     */
    readonly properties: pulumi.Output<outputs.scheduler.v20160101.JobCollectionPropertiesResponse>;
    /**
     * Gets or sets the tags.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Gets the job collection resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a JobCollection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JobCollectionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a JobCollection resource.
 */
export interface JobCollectionArgs {
    /**
     * The job collection name.
     */
    readonly jobCollectionName: pulumi.Input<string>;
    /**
     * Gets or sets the storage account location.
     */
    readonly location?: pulumi.Input<string>;
    /**
     * Gets or sets the job collection resource name.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Gets or sets the job collection properties.
     */
    readonly properties?: pulumi.Input<inputs.scheduler.v20160101.JobCollectionProperties>;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the tags.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
