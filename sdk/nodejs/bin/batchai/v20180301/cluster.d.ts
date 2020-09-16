import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Contains information about a Cluster.
 */
export declare class Cluster extends pulumi.CustomResource {
    /**
     * Get an existing Cluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Cluster;
    /**
     * Returns true if the given object is an instance of Cluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Cluster;
    /**
     * Possible values are: steady and resizing. steady state indicates that the cluster is not resizing. There are no changes to the number of compute nodes in the cluster in progress. A cluster enters this state when it is created and when no operations are being performed on the cluster to change the number of compute nodes. resizing state indicates that the cluster is resizing; that is, compute nodes are being added to or removed from the cluster.
     */
    readonly allocationState: pulumi.Output<string>;
    readonly allocationStateTransitionTime: pulumi.Output<string>;
    readonly creationTime: pulumi.Output<string>;
    readonly currentNodeCount: pulumi.Output<number>;
    /**
     * This element contains all the errors encountered by various compute nodes during node setup.
     */
    readonly errors: pulumi.Output<outputs.batchai.v20180301.BatchAIErrorResponse[] | undefined>;
    /**
     * The location of the resource
     */
    readonly location: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    readonly name: pulumi.Output<string>;
    /**
     * Use this to prepare the VM. NOTE: The volumes specified in mountVolumes are mounted first and then the setupTask is run. Therefore the setup task can use local mountPaths in its execution.
     */
    readonly nodeSetup: pulumi.Output<outputs.batchai.v20180301.NodeSetupResponse | undefined>;
    /**
     * Counts of various compute node states on the cluster.
     */
    readonly nodeStateCounts: pulumi.Output<outputs.batchai.v20180301.NodeStateCountsResponse>;
    /**
     * Possible value are: creating - Specifies that the cluster is being created. succeeded - Specifies that the cluster has been created successfully. failed - Specifies that the cluster creation has failed. deleting - Specifies that the cluster is being deleted.
     */
    readonly provisioningState: pulumi.Output<string>;
    readonly provisioningStateTransitionTime: pulumi.Output<string>;
    /**
     * At least one of manual or autoScale settings must be specified. Only one of manual or autoScale settings can be specified. If autoScale settings are specified, the system automatically scales the cluster up and down (within the supplied limits) based on the pending jobs on the cluster.
     */
    readonly scaleSettings: pulumi.Output<outputs.batchai.v20180301.ScaleSettingsResponse | undefined>;
    /**
     * Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
     */
    readonly subnet: pulumi.Output<outputs.batchai.v20180301.ResourceIdResponse | undefined>;
    /**
     * The tags of the resource
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    }>;
    /**
     * The type of the resource
     */
    readonly type: pulumi.Output<string>;
    /**
     * Settings for user account that gets created on each on the nodes of a cluster.
     */
    readonly userAccountSettings: pulumi.Output<outputs.batchai.v20180301.UserAccountSettingsResponse | undefined>;
    /**
     * Settings for OS image.
     */
    readonly virtualMachineConfiguration: pulumi.Output<outputs.batchai.v20180301.VirtualMachineConfigurationResponse | undefined>;
    /**
     * The default value is dedicated. The node can get preempted while the task is running if lowpriority is chosen. This is best suited if the workload is checkpointing and can be restarted.
     */
    readonly vmPriority: pulumi.Output<string | undefined>;
    /**
     * All virtual machines in a cluster are the same size. For information about available VM sizes for clusters using images from the Virtual Machines Marketplace (see Sizes for Virtual Machines (Linux) or Sizes for Virtual Machines (Windows). Batch AI service supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
     */
    readonly vmSize: pulumi.Output<string | undefined>;
    /**
     * Create a Cluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Cluster resource.
 */
export interface ClusterArgs {
    /**
     * The name of the cluster within the specified resource group. Cluster names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
     */
    readonly clusterName: pulumi.Input<string>;
    /**
     * The region in which to create the cluster.
     */
    readonly location: pulumi.Input<string>;
    /**
     * Use this to prepare the VM. NOTE: The volumes specified in mountVolumes are mounted first and then the setupTask is run. Therefore the setup task can use local mountPaths in its execution.
     */
    readonly nodeSetup?: pulumi.Input<inputs.batchai.v20180301.NodeSetup>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * At least one of manual or autoScale settings must be specified. Only one of manual or autoScale settings can be specified. If autoScale settings are specified, the system automatically scales the cluster up and down (within the supplied limits) based on the pending jobs on the cluster.
     */
    readonly scaleSettings?: pulumi.Input<inputs.batchai.v20180301.ScaleSettings>;
    /**
     * Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
     */
    readonly subnet?: pulumi.Input<inputs.batchai.v20180301.ResourceId>;
    /**
     * The user specified tags associated with the Cluster.
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Settings for user account that gets created on each on the nodes of a cluster.
     */
    readonly userAccountSettings: pulumi.Input<inputs.batchai.v20180301.UserAccountSettings>;
    /**
     * Settings for OS image.
     */
    readonly virtualMachineConfiguration?: pulumi.Input<inputs.batchai.v20180301.VirtualMachineConfiguration>;
    /**
     * Default is dedicated.
     */
    readonly vmPriority?: pulumi.Input<string>;
    /**
     * All virtual machines in a cluster are the same size. For information about available VM sizes for clusters using images from the Virtual Machines Marketplace (see Sizes for Virtual Machines (Linux) or Sizes for Virtual Machines (Windows). Batch AI service supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
     */
    readonly vmSize: pulumi.Input<string>;
}
