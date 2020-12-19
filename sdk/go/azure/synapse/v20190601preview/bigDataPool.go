// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190601preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A Big Data pool
type BigDataPool struct {
	pulumi.CustomResourceState

	// Auto-pausing properties
	AutoPause AutoPausePropertiesResponsePtrOutput `pulumi:"autoPause"`
	// Auto-scaling properties
	AutoScale AutoScalePropertiesResponsePtrOutput `pulumi:"autoScale"`
	// The time when the Big Data pool was created.
	CreationDate pulumi.StringPtrOutput `pulumi:"creationDate"`
	// The default folder where Spark logs will be written.
	DefaultSparkLogFolder pulumi.StringPtrOutput `pulumi:"defaultSparkLogFolder"`
	// Whether library requirements changed.
	HaveLibraryRequirementsChanged pulumi.BoolPtrOutput `pulumi:"haveLibraryRequirementsChanged"`
	// Whether compute isolation is required or not.
	IsComputeIsolationEnabled pulumi.BoolPtrOutput `pulumi:"isComputeIsolationEnabled"`
	// Library version requirements
	LibraryRequirements LibraryRequirementsResponsePtrOutput `pulumi:"libraryRequirements"`
	// The geo-location where the resource lives
	Location pulumi.StringOutput `pulumi:"location"`
	// The name of the resource
	Name pulumi.StringOutput `pulumi:"name"`
	// The number of nodes in the Big Data pool.
	NodeCount pulumi.IntPtrOutput `pulumi:"nodeCount"`
	// The level of compute power that each node in the Big Data pool has.
	NodeSize pulumi.StringPtrOutput `pulumi:"nodeSize"`
	// The kind of nodes that the Big Data pool provides.
	NodeSizeFamily pulumi.StringPtrOutput `pulumi:"nodeSizeFamily"`
	// The state of the Big Data pool.
	ProvisioningState pulumi.StringPtrOutput `pulumi:"provisioningState"`
	// Whether session level packages enabled.
	SessionLevelPackagesEnabled pulumi.BoolPtrOutput `pulumi:"sessionLevelPackagesEnabled"`
	// Spark configuration file to specify additional properties
	SparkConfigProperties LibraryRequirementsResponsePtrOutput `pulumi:"sparkConfigProperties"`
	// The Spark events folder
	SparkEventsFolder pulumi.StringPtrOutput `pulumi:"sparkEventsFolder"`
	// The Apache Spark version.
	SparkVersion pulumi.StringPtrOutput `pulumi:"sparkVersion"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewBigDataPool registers a new resource with the given unique name, arguments, and options.
func NewBigDataPool(ctx *pulumi.Context,
	name string, args *BigDataPoolArgs, opts ...pulumi.ResourceOption) (*BigDataPool, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.BigDataPoolName == nil {
		return nil, errors.New("invalid value for required argument 'BigDataPoolName'")
	}
	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.WorkspaceName == nil {
		return nil, errors.New("invalid value for required argument 'WorkspaceName'")
	}
	var resource BigDataPool
	err := ctx.RegisterResource("azure-nextgen:synapse/v20190601preview:BigDataPool", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetBigDataPool gets an existing BigDataPool resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetBigDataPool(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *BigDataPoolState, opts ...pulumi.ResourceOption) (*BigDataPool, error) {
	var resource BigDataPool
	err := ctx.ReadResource("azure-nextgen:synapse/v20190601preview:BigDataPool", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering BigDataPool resources.
type bigDataPoolState struct {
	// Auto-pausing properties
	AutoPause *AutoPausePropertiesResponse `pulumi:"autoPause"`
	// Auto-scaling properties
	AutoScale *AutoScalePropertiesResponse `pulumi:"autoScale"`
	// The time when the Big Data pool was created.
	CreationDate *string `pulumi:"creationDate"`
	// The default folder where Spark logs will be written.
	DefaultSparkLogFolder *string `pulumi:"defaultSparkLogFolder"`
	// Whether library requirements changed.
	HaveLibraryRequirementsChanged *bool `pulumi:"haveLibraryRequirementsChanged"`
	// Whether compute isolation is required or not.
	IsComputeIsolationEnabled *bool `pulumi:"isComputeIsolationEnabled"`
	// Library version requirements
	LibraryRequirements *LibraryRequirementsResponse `pulumi:"libraryRequirements"`
	// The geo-location where the resource lives
	Location *string `pulumi:"location"`
	// The name of the resource
	Name *string `pulumi:"name"`
	// The number of nodes in the Big Data pool.
	NodeCount *int `pulumi:"nodeCount"`
	// The level of compute power that each node in the Big Data pool has.
	NodeSize *string `pulumi:"nodeSize"`
	// The kind of nodes that the Big Data pool provides.
	NodeSizeFamily *string `pulumi:"nodeSizeFamily"`
	// The state of the Big Data pool.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Whether session level packages enabled.
	SessionLevelPackagesEnabled *bool `pulumi:"sessionLevelPackagesEnabled"`
	// Spark configuration file to specify additional properties
	SparkConfigProperties *LibraryRequirementsResponse `pulumi:"sparkConfigProperties"`
	// The Spark events folder
	SparkEventsFolder *string `pulumi:"sparkEventsFolder"`
	// The Apache Spark version.
	SparkVersion *string `pulumi:"sparkVersion"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type *string `pulumi:"type"`
}

type BigDataPoolState struct {
	// Auto-pausing properties
	AutoPause AutoPausePropertiesResponsePtrInput
	// Auto-scaling properties
	AutoScale AutoScalePropertiesResponsePtrInput
	// The time when the Big Data pool was created.
	CreationDate pulumi.StringPtrInput
	// The default folder where Spark logs will be written.
	DefaultSparkLogFolder pulumi.StringPtrInput
	// Whether library requirements changed.
	HaveLibraryRequirementsChanged pulumi.BoolPtrInput
	// Whether compute isolation is required or not.
	IsComputeIsolationEnabled pulumi.BoolPtrInput
	// Library version requirements
	LibraryRequirements LibraryRequirementsResponsePtrInput
	// The geo-location where the resource lives
	Location pulumi.StringPtrInput
	// The name of the resource
	Name pulumi.StringPtrInput
	// The number of nodes in the Big Data pool.
	NodeCount pulumi.IntPtrInput
	// The level of compute power that each node in the Big Data pool has.
	NodeSize pulumi.StringPtrInput
	// The kind of nodes that the Big Data pool provides.
	NodeSizeFamily pulumi.StringPtrInput
	// The state of the Big Data pool.
	ProvisioningState pulumi.StringPtrInput
	// Whether session level packages enabled.
	SessionLevelPackagesEnabled pulumi.BoolPtrInput
	// Spark configuration file to specify additional properties
	SparkConfigProperties LibraryRequirementsResponsePtrInput
	// The Spark events folder
	SparkEventsFolder pulumi.StringPtrInput
	// The Apache Spark version.
	SparkVersion pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringPtrInput
}

func (BigDataPoolState) ElementType() reflect.Type {
	return reflect.TypeOf((*bigDataPoolState)(nil)).Elem()
}

type bigDataPoolArgs struct {
	// Auto-pausing properties
	AutoPause *AutoPauseProperties `pulumi:"autoPause"`
	// Auto-scaling properties
	AutoScale *AutoScaleProperties `pulumi:"autoScale"`
	// Big Data pool name
	BigDataPoolName string `pulumi:"bigDataPoolName"`
	// The time when the Big Data pool was created.
	CreationDate *string `pulumi:"creationDate"`
	// The default folder where Spark logs will be written.
	DefaultSparkLogFolder *string `pulumi:"defaultSparkLogFolder"`
	// Whether to stop any running jobs in the Big Data pool
	Force *bool `pulumi:"force"`
	// Whether library requirements changed.
	HaveLibraryRequirementsChanged *bool `pulumi:"haveLibraryRequirementsChanged"`
	// Whether compute isolation is required or not.
	IsComputeIsolationEnabled *bool `pulumi:"isComputeIsolationEnabled"`
	// Library version requirements
	LibraryRequirements *LibraryRequirements `pulumi:"libraryRequirements"`
	// The geo-location where the resource lives
	Location string `pulumi:"location"`
	// The number of nodes in the Big Data pool.
	NodeCount *int `pulumi:"nodeCount"`
	// The level of compute power that each node in the Big Data pool has.
	NodeSize *string `pulumi:"nodeSize"`
	// The kind of nodes that the Big Data pool provides.
	NodeSizeFamily *string `pulumi:"nodeSizeFamily"`
	// The state of the Big Data pool.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Whether session level packages enabled.
	SessionLevelPackagesEnabled *bool `pulumi:"sessionLevelPackagesEnabled"`
	// Spark configuration file to specify additional properties
	SparkConfigProperties *LibraryRequirements `pulumi:"sparkConfigProperties"`
	// The Spark events folder
	SparkEventsFolder *string `pulumi:"sparkEventsFolder"`
	// The Apache Spark version.
	SparkVersion *string `pulumi:"sparkVersion"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The name of the workspace
	WorkspaceName string `pulumi:"workspaceName"`
}

// The set of arguments for constructing a BigDataPool resource.
type BigDataPoolArgs struct {
	// Auto-pausing properties
	AutoPause AutoPausePropertiesPtrInput
	// Auto-scaling properties
	AutoScale AutoScalePropertiesPtrInput
	// Big Data pool name
	BigDataPoolName pulumi.StringInput
	// The time when the Big Data pool was created.
	CreationDate pulumi.StringPtrInput
	// The default folder where Spark logs will be written.
	DefaultSparkLogFolder pulumi.StringPtrInput
	// Whether to stop any running jobs in the Big Data pool
	Force pulumi.BoolPtrInput
	// Whether library requirements changed.
	HaveLibraryRequirementsChanged pulumi.BoolPtrInput
	// Whether compute isolation is required or not.
	IsComputeIsolationEnabled pulumi.BoolPtrInput
	// Library version requirements
	LibraryRequirements LibraryRequirementsPtrInput
	// The geo-location where the resource lives
	Location pulumi.StringInput
	// The number of nodes in the Big Data pool.
	NodeCount pulumi.IntPtrInput
	// The level of compute power that each node in the Big Data pool has.
	NodeSize pulumi.StringPtrInput
	// The kind of nodes that the Big Data pool provides.
	NodeSizeFamily pulumi.StringPtrInput
	// The state of the Big Data pool.
	ProvisioningState pulumi.StringPtrInput
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
	// Whether session level packages enabled.
	SessionLevelPackagesEnabled pulumi.BoolPtrInput
	// Spark configuration file to specify additional properties
	SparkConfigProperties LibraryRequirementsPtrInput
	// The Spark events folder
	SparkEventsFolder pulumi.StringPtrInput
	// The Apache Spark version.
	SparkVersion pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The name of the workspace
	WorkspaceName pulumi.StringInput
}

func (BigDataPoolArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*bigDataPoolArgs)(nil)).Elem()
}

type BigDataPoolInput interface {
	pulumi.Input

	ToBigDataPoolOutput() BigDataPoolOutput
	ToBigDataPoolOutputWithContext(ctx context.Context) BigDataPoolOutput
}

func (*BigDataPool) ElementType() reflect.Type {
	return reflect.TypeOf((*BigDataPool)(nil))
}

func (i *BigDataPool) ToBigDataPoolOutput() BigDataPoolOutput {
	return i.ToBigDataPoolOutputWithContext(context.Background())
}

func (i *BigDataPool) ToBigDataPoolOutputWithContext(ctx context.Context) BigDataPoolOutput {
	return pulumi.ToOutputWithContext(ctx, i).(BigDataPoolOutput)
}

type BigDataPoolOutput struct {
	*pulumi.OutputState
}

func (BigDataPoolOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*BigDataPool)(nil))
}

func (o BigDataPoolOutput) ToBigDataPoolOutput() BigDataPoolOutput {
	return o
}

func (o BigDataPoolOutput) ToBigDataPoolOutputWithContext(ctx context.Context) BigDataPoolOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(BigDataPoolOutput{})
}
