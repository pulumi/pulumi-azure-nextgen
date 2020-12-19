// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170901preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Contains information about a Cluster.
type Cluster struct {
	pulumi.CustomResourceState

	// Possible values are: steady and resizing. steady state indicates that the cluster is not resizing. There are no changes to the number of compute nodes in the cluster in progress. A cluster enters this state when it is created and when no operations are being performed on the cluster to change the number of compute nodes. resizing state indicates that the cluster is resizing; that is, compute nodes are being added to or removed from the cluster.
	AllocationState               pulumi.StringOutput `pulumi:"allocationState"`
	AllocationStateTransitionTime pulumi.StringOutput `pulumi:"allocationStateTransitionTime"`
	CreationTime                  pulumi.StringOutput `pulumi:"creationTime"`
	CurrentNodeCount              pulumi.IntOutput    `pulumi:"currentNodeCount"`
	// This element contains all the errors encountered by various compute nodes during node setup.
	Errors BatchAIErrorResponseArrayOutput `pulumi:"errors"`
	// The location of the resource
	Location pulumi.StringOutput `pulumi:"location"`
	// The name of the resource
	Name pulumi.StringOutput `pulumi:"name"`
	// Use this to prepare the VM. NOTE: The volumes specified in mountVolumes are mounted first and then the setupTask is run. Therefore the setup task can use local mountPaths in its execution.
	NodeSetup NodeSetupResponsePtrOutput `pulumi:"nodeSetup"`
	// Counts of various compute node states on the cluster.
	NodeStateCounts NodeStateCountsResponseOutput `pulumi:"nodeStateCounts"`
	// Possible value are: creating - Specifies that the cluster is being created. succeeded - Specifies that the cluster has been created successfully. failed - Specifies that the cluster creation has failed. deleting - Specifies that the cluster is being deleted.
	ProvisioningState               pulumi.StringOutput `pulumi:"provisioningState"`
	ProvisioningStateTransitionTime pulumi.StringOutput `pulumi:"provisioningStateTransitionTime"`
	// At least one of manual or autoScale settings must be specified. Only one of manual or autoScale settings can be specified. If autoScale settings are specified, the system automatically scales the cluster up and down (within the supplied limits) based on the pending jobs on the cluster.
	ScaleSettings ScaleSettingsResponsePtrOutput `pulumi:"scaleSettings"`
	// Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
	Subnet ResourceIdResponsePtrOutput `pulumi:"subnet"`
	// The tags of the resource
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The type of the resource
	Type pulumi.StringOutput `pulumi:"type"`
	// Settings for user account that gets created on each on the nodes of a cluster.
	UserAccountSettings UserAccountSettingsResponsePtrOutput `pulumi:"userAccountSettings"`
	// Settings for OS image.
	VirtualMachineConfiguration VirtualMachineConfigurationResponsePtrOutput `pulumi:"virtualMachineConfiguration"`
	// The default value is dedicated. The node can get preempted while the task is running if lowpriority is chosen. This is best suited if the workload is checkpointing and can be restarted.
	VmPriority pulumi.StringPtrOutput `pulumi:"vmPriority"`
	// All virtual machines in a cluster are the same size. For information about available VM sizes for clusters using images from the Virtual Machines Marketplace (see Sizes for Virtual Machines (Linux) or Sizes for Virtual Machines (Windows). Batch AI service supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
	VmSize pulumi.StringPtrOutput `pulumi:"vmSize"`
}

// NewCluster registers a new resource with the given unique name, arguments, and options.
func NewCluster(ctx *pulumi.Context,
	name string, args *ClusterArgs, opts ...pulumi.ResourceOption) (*Cluster, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ClusterName == nil {
		return nil, errors.New("invalid value for required argument 'ClusterName'")
	}
	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.UserAccountSettings == nil {
		return nil, errors.New("invalid value for required argument 'UserAccountSettings'")
	}
	if args.VmSize == nil {
		return nil, errors.New("invalid value for required argument 'VmSize'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:batchai/v20180301:Cluster"),
		},
	})
	opts = append(opts, aliases)
	var resource Cluster
	err := ctx.RegisterResource("azure-nextgen:batchai/v20170901preview:Cluster", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetCluster gets an existing Cluster resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetCluster(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ClusterState, opts ...pulumi.ResourceOption) (*Cluster, error) {
	var resource Cluster
	err := ctx.ReadResource("azure-nextgen:batchai/v20170901preview:Cluster", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Cluster resources.
type clusterState struct {
	// Possible values are: steady and resizing. steady state indicates that the cluster is not resizing. There are no changes to the number of compute nodes in the cluster in progress. A cluster enters this state when it is created and when no operations are being performed on the cluster to change the number of compute nodes. resizing state indicates that the cluster is resizing; that is, compute nodes are being added to or removed from the cluster.
	AllocationState               *string `pulumi:"allocationState"`
	AllocationStateTransitionTime *string `pulumi:"allocationStateTransitionTime"`
	CreationTime                  *string `pulumi:"creationTime"`
	CurrentNodeCount              *int    `pulumi:"currentNodeCount"`
	// This element contains all the errors encountered by various compute nodes during node setup.
	Errors []BatchAIErrorResponse `pulumi:"errors"`
	// The location of the resource
	Location *string `pulumi:"location"`
	// The name of the resource
	Name *string `pulumi:"name"`
	// Use this to prepare the VM. NOTE: The volumes specified in mountVolumes are mounted first and then the setupTask is run. Therefore the setup task can use local mountPaths in its execution.
	NodeSetup *NodeSetupResponse `pulumi:"nodeSetup"`
	// Counts of various compute node states on the cluster.
	NodeStateCounts *NodeStateCountsResponse `pulumi:"nodeStateCounts"`
	// Possible value are: creating - Specifies that the cluster is being created. succeeded - Specifies that the cluster has been created successfully. failed - Specifies that the cluster creation has failed. deleting - Specifies that the cluster is being deleted.
	ProvisioningState               *string `pulumi:"provisioningState"`
	ProvisioningStateTransitionTime *string `pulumi:"provisioningStateTransitionTime"`
	// At least one of manual or autoScale settings must be specified. Only one of manual or autoScale settings can be specified. If autoScale settings are specified, the system automatically scales the cluster up and down (within the supplied limits) based on the pending jobs on the cluster.
	ScaleSettings *ScaleSettingsResponse `pulumi:"scaleSettings"`
	// Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
	Subnet *ResourceIdResponse `pulumi:"subnet"`
	// The tags of the resource
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource
	Type *string `pulumi:"type"`
	// Settings for user account that gets created on each on the nodes of a cluster.
	UserAccountSettings *UserAccountSettingsResponse `pulumi:"userAccountSettings"`
	// Settings for OS image.
	VirtualMachineConfiguration *VirtualMachineConfigurationResponse `pulumi:"virtualMachineConfiguration"`
	// The default value is dedicated. The node can get preempted while the task is running if lowpriority is chosen. This is best suited if the workload is checkpointing and can be restarted.
	VmPriority *string `pulumi:"vmPriority"`
	// All virtual machines in a cluster are the same size. For information about available VM sizes for clusters using images from the Virtual Machines Marketplace (see Sizes for Virtual Machines (Linux) or Sizes for Virtual Machines (Windows). Batch AI service supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
	VmSize *string `pulumi:"vmSize"`
}

type ClusterState struct {
	// Possible values are: steady and resizing. steady state indicates that the cluster is not resizing. There are no changes to the number of compute nodes in the cluster in progress. A cluster enters this state when it is created and when no operations are being performed on the cluster to change the number of compute nodes. resizing state indicates that the cluster is resizing; that is, compute nodes are being added to or removed from the cluster.
	AllocationState               pulumi.StringPtrInput
	AllocationStateTransitionTime pulumi.StringPtrInput
	CreationTime                  pulumi.StringPtrInput
	CurrentNodeCount              pulumi.IntPtrInput
	// This element contains all the errors encountered by various compute nodes during node setup.
	Errors BatchAIErrorResponseArrayInput
	// The location of the resource
	Location pulumi.StringPtrInput
	// The name of the resource
	Name pulumi.StringPtrInput
	// Use this to prepare the VM. NOTE: The volumes specified in mountVolumes are mounted first and then the setupTask is run. Therefore the setup task can use local mountPaths in its execution.
	NodeSetup NodeSetupResponsePtrInput
	// Counts of various compute node states on the cluster.
	NodeStateCounts NodeStateCountsResponsePtrInput
	// Possible value are: creating - Specifies that the cluster is being created. succeeded - Specifies that the cluster has been created successfully. failed - Specifies that the cluster creation has failed. deleting - Specifies that the cluster is being deleted.
	ProvisioningState               pulumi.StringPtrInput
	ProvisioningStateTransitionTime pulumi.StringPtrInput
	// At least one of manual or autoScale settings must be specified. Only one of manual or autoScale settings can be specified. If autoScale settings are specified, the system automatically scales the cluster up and down (within the supplied limits) based on the pending jobs on the cluster.
	ScaleSettings ScaleSettingsResponsePtrInput
	// Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
	Subnet ResourceIdResponsePtrInput
	// The tags of the resource
	Tags pulumi.StringMapInput
	// The type of the resource
	Type pulumi.StringPtrInput
	// Settings for user account that gets created on each on the nodes of a cluster.
	UserAccountSettings UserAccountSettingsResponsePtrInput
	// Settings for OS image.
	VirtualMachineConfiguration VirtualMachineConfigurationResponsePtrInput
	// The default value is dedicated. The node can get preempted while the task is running if lowpriority is chosen. This is best suited if the workload is checkpointing and can be restarted.
	VmPriority pulumi.StringPtrInput
	// All virtual machines in a cluster are the same size. For information about available VM sizes for clusters using images from the Virtual Machines Marketplace (see Sizes for Virtual Machines (Linux) or Sizes for Virtual Machines (Windows). Batch AI service supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
	VmSize pulumi.StringPtrInput
}

func (ClusterState) ElementType() reflect.Type {
	return reflect.TypeOf((*clusterState)(nil)).Elem()
}

type clusterArgs struct {
	// The name of the cluster within the specified resource group. Cluster names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
	ClusterName string `pulumi:"clusterName"`
	// The region in which to create the cluster.
	Location string `pulumi:"location"`
	// Use this to prepare the VM. NOTE: The volumes specified in mountVolumes are mounted first and then the setupTask is run. Therefore the setup task can use local mountPaths in its execution.
	NodeSetup *NodeSetup `pulumi:"nodeSetup"`
	// Name of the resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// At least one of manual or autoScale settings must be specified. Only one of manual or autoScale settings can be specified. If autoScale settings are specified, the system automatically scales the cluster up and down (within the supplied limits) based on the pending jobs on the cluster.
	ScaleSettings *ScaleSettings `pulumi:"scaleSettings"`
	// Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
	Subnet *ResourceId `pulumi:"subnet"`
	// The user specified tags associated with the Cluster.
	Tags map[string]string `pulumi:"tags"`
	// Settings for user account that gets created on each on the nodes of a cluster.
	UserAccountSettings UserAccountSettings `pulumi:"userAccountSettings"`
	// Settings for OS image.
	VirtualMachineConfiguration *VirtualMachineConfiguration `pulumi:"virtualMachineConfiguration"`
	// Default is dedicated.
	VmPriority *string `pulumi:"vmPriority"`
	// All virtual machines in a cluster are the same size. For information about available VM sizes for clusters using images from the Virtual Machines Marketplace (see Sizes for Virtual Machines (Linux) or Sizes for Virtual Machines (Windows). Batch AI service supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
	VmSize string `pulumi:"vmSize"`
}

// The set of arguments for constructing a Cluster resource.
type ClusterArgs struct {
	// The name of the cluster within the specified resource group. Cluster names can only contain a combination of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1 through 64 characters long.
	ClusterName pulumi.StringInput
	// The region in which to create the cluster.
	Location pulumi.StringInput
	// Use this to prepare the VM. NOTE: The volumes specified in mountVolumes are mounted first and then the setupTask is run. Therefore the setup task can use local mountPaths in its execution.
	NodeSetup NodeSetupPtrInput
	// Name of the resource group to which the resource belongs.
	ResourceGroupName pulumi.StringInput
	// At least one of manual or autoScale settings must be specified. Only one of manual or autoScale settings can be specified. If autoScale settings are specified, the system automatically scales the cluster up and down (within the supplied limits) based on the pending jobs on the cluster.
	ScaleSettings ScaleSettingsPtrInput
	// Represents a resource ID. For example, for a subnet, it is the resource URL for the subnet.
	Subnet ResourceIdPtrInput
	// The user specified tags associated with the Cluster.
	Tags pulumi.StringMapInput
	// Settings for user account that gets created on each on the nodes of a cluster.
	UserAccountSettings UserAccountSettingsInput
	// Settings for OS image.
	VirtualMachineConfiguration VirtualMachineConfigurationPtrInput
	// Default is dedicated.
	VmPriority VmPriority
	// All virtual machines in a cluster are the same size. For information about available VM sizes for clusters using images from the Virtual Machines Marketplace (see Sizes for Virtual Machines (Linux) or Sizes for Virtual Machines (Windows). Batch AI service supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series).
	VmSize pulumi.StringInput
}

func (ClusterArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*clusterArgs)(nil)).Elem()
}

type ClusterInput interface {
	pulumi.Input

	ToClusterOutput() ClusterOutput
	ToClusterOutputWithContext(ctx context.Context) ClusterOutput
}

func (*Cluster) ElementType() reflect.Type {
	return reflect.TypeOf((*Cluster)(nil))
}

func (i *Cluster) ToClusterOutput() ClusterOutput {
	return i.ToClusterOutputWithContext(context.Background())
}

func (i *Cluster) ToClusterOutputWithContext(ctx context.Context) ClusterOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ClusterOutput)
}

type ClusterOutput struct {
	*pulumi.OutputState
}

func (ClusterOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Cluster)(nil))
}

func (o ClusterOutput) ToClusterOutput() ClusterOutput {
	return o
}

func (o ClusterOutput) ToClusterOutputWithContext(ctx context.Context) ClusterOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ClusterOutput{})
}
