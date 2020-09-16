import * as pulumi from "@pulumi/pulumi";
/**
 * Data Lake Analytics compute policy information.
 */
export declare class ComputePolicy extends pulumi.CustomResource {
    /**
     * Get an existing ComputePolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ComputePolicy;
    /**
     * Returns true if the given object is an instance of ComputePolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ComputePolicy;
    /**
     * The maximum degree of parallelism per job this user can use to submit jobs.
     */
    readonly maxDegreeOfParallelismPerJob: pulumi.Output<number>;
    /**
     * The minimum priority per job this user can use to submit jobs.
     */
    readonly minPriorityPerJob: pulumi.Output<number>;
    /**
     * The resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The AAD object identifier for the entity to create a policy for.
     */
    readonly objectId: pulumi.Output<string>;
    /**
     * The type of AAD object the object identifier refers to.
     */
    readonly objectType: pulumi.Output<string>;
    /**
     * The resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a ComputePolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComputePolicyArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ComputePolicy resource.
 */
export interface ComputePolicyArgs {
    /**
     * The name of the Data Lake Analytics account.
     */
    readonly accountName: pulumi.Input<string>;
    /**
     * The name of the compute policy to create or update.
     */
    readonly computePolicyName: pulumi.Input<string>;
    /**
     * The maximum degree of parallelism per job this user can use to submit jobs. This property, the min priority per job property, or both must be passed.
     */
    readonly maxDegreeOfParallelismPerJob?: pulumi.Input<number>;
    /**
     * The minimum priority per job this user can use to submit jobs. This property, the max degree of parallelism per job property, or both must be passed.
     */
    readonly minPriorityPerJob?: pulumi.Input<number>;
    /**
     * The AAD object identifier for the entity to create a policy for.
     */
    readonly objectId: pulumi.Input<string>;
    /**
     * The type of AAD object the object identifier refers to.
     */
    readonly objectType: pulumi.Input<string>;
    /**
     * The name of the Azure resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
}
