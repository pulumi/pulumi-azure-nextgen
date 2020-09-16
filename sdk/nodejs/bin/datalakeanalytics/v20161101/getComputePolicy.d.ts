import * as pulumi from "@pulumi/pulumi";
export declare function getComputePolicy(args: GetComputePolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetComputePolicyResult>;
export interface GetComputePolicyArgs {
    /**
     * The name of the Data Lake Analytics account.
     */
    readonly accountName: string;
    /**
     * The name of the compute policy to retrieve.
     */
    readonly computePolicyName: string;
    /**
     * The name of the Azure resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * Data Lake Analytics compute policy information.
 */
export interface GetComputePolicyResult {
    /**
     * The maximum degree of parallelism per job this user can use to submit jobs.
     */
    readonly maxDegreeOfParallelismPerJob: number;
    /**
     * The minimum priority per job this user can use to submit jobs.
     */
    readonly minPriorityPerJob: number;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * The AAD object identifier for the entity to create a policy for.
     */
    readonly objectId: string;
    /**
     * The type of AAD object the object identifier refers to.
     */
    readonly objectType: string;
    /**
     * The resource type.
     */
    readonly type: string;
}
