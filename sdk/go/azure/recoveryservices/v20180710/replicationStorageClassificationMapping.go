// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180710

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Storage mapping object.
type ReplicationStorageClassificationMapping struct {
	pulumi.CustomResourceState

	// Resource Location
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Resource Name
	Name pulumi.StringOutput `pulumi:"name"`
	// Properties of the storage mapping object.
	Properties StorageClassificationMappingPropertiesResponseOutput `pulumi:"properties"`
	// Resource Type
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewReplicationStorageClassificationMapping registers a new resource with the given unique name, arguments, and options.
func NewReplicationStorageClassificationMapping(ctx *pulumi.Context,
	name string, args *ReplicationStorageClassificationMappingArgs, opts ...pulumi.ResourceOption) (*ReplicationStorageClassificationMapping, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.FabricName == nil {
		return nil, errors.New("invalid value for required argument 'FabricName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ResourceName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceName'")
	}
	if args.StorageClassificationMappingName == nil {
		return nil, errors.New("invalid value for required argument 'StorageClassificationMappingName'")
	}
	if args.StorageClassificationName == nil {
		return nil, errors.New("invalid value for required argument 'StorageClassificationName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:recoveryservices/latest:ReplicationStorageClassificationMapping"),
		},
		{
			Type: pulumi.String("azure-nextgen:recoveryservices/v20160810:ReplicationStorageClassificationMapping"),
		},
		{
			Type: pulumi.String("azure-nextgen:recoveryservices/v20180110:ReplicationStorageClassificationMapping"),
		},
	})
	opts = append(opts, aliases)
	var resource ReplicationStorageClassificationMapping
	err := ctx.RegisterResource("azure-nextgen:recoveryservices/v20180710:ReplicationStorageClassificationMapping", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetReplicationStorageClassificationMapping gets an existing ReplicationStorageClassificationMapping resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetReplicationStorageClassificationMapping(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ReplicationStorageClassificationMappingState, opts ...pulumi.ResourceOption) (*ReplicationStorageClassificationMapping, error) {
	var resource ReplicationStorageClassificationMapping
	err := ctx.ReadResource("azure-nextgen:recoveryservices/v20180710:ReplicationStorageClassificationMapping", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ReplicationStorageClassificationMapping resources.
type replicationStorageClassificationMappingState struct {
	// Resource Location
	Location *string `pulumi:"location"`
	// Resource Name
	Name *string `pulumi:"name"`
	// Properties of the storage mapping object.
	Properties *StorageClassificationMappingPropertiesResponse `pulumi:"properties"`
	// Resource Type
	Type *string `pulumi:"type"`
}

type ReplicationStorageClassificationMappingState struct {
	// Resource Location
	Location pulumi.StringPtrInput
	// Resource Name
	Name pulumi.StringPtrInput
	// Properties of the storage mapping object.
	Properties StorageClassificationMappingPropertiesResponsePtrInput
	// Resource Type
	Type pulumi.StringPtrInput
}

func (ReplicationStorageClassificationMappingState) ElementType() reflect.Type {
	return reflect.TypeOf((*replicationStorageClassificationMappingState)(nil)).Elem()
}

type replicationStorageClassificationMappingArgs struct {
	// Fabric name.
	FabricName string `pulumi:"fabricName"`
	// Storage mapping input properties.
	Properties *StorageMappingInputProperties `pulumi:"properties"`
	// The name of the resource group where the recovery services vault is present.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the recovery services vault.
	ResourceName string `pulumi:"resourceName"`
	// Storage classification mapping name.
	StorageClassificationMappingName string `pulumi:"storageClassificationMappingName"`
	// Storage classification name.
	StorageClassificationName string `pulumi:"storageClassificationName"`
}

// The set of arguments for constructing a ReplicationStorageClassificationMapping resource.
type ReplicationStorageClassificationMappingArgs struct {
	// Fabric name.
	FabricName pulumi.StringInput
	// Storage mapping input properties.
	Properties StorageMappingInputPropertiesPtrInput
	// The name of the resource group where the recovery services vault is present.
	ResourceGroupName pulumi.StringInput
	// The name of the recovery services vault.
	ResourceName pulumi.StringInput
	// Storage classification mapping name.
	StorageClassificationMappingName pulumi.StringInput
	// Storage classification name.
	StorageClassificationName pulumi.StringInput
}

func (ReplicationStorageClassificationMappingArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*replicationStorageClassificationMappingArgs)(nil)).Elem()
}

type ReplicationStorageClassificationMappingInput interface {
	pulumi.Input

	ToReplicationStorageClassificationMappingOutput() ReplicationStorageClassificationMappingOutput
	ToReplicationStorageClassificationMappingOutputWithContext(ctx context.Context) ReplicationStorageClassificationMappingOutput
}

func (*ReplicationStorageClassificationMapping) ElementType() reflect.Type {
	return reflect.TypeOf((*ReplicationStorageClassificationMapping)(nil))
}

func (i *ReplicationStorageClassificationMapping) ToReplicationStorageClassificationMappingOutput() ReplicationStorageClassificationMappingOutput {
	return i.ToReplicationStorageClassificationMappingOutputWithContext(context.Background())
}

func (i *ReplicationStorageClassificationMapping) ToReplicationStorageClassificationMappingOutputWithContext(ctx context.Context) ReplicationStorageClassificationMappingOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ReplicationStorageClassificationMappingOutput)
}

type ReplicationStorageClassificationMappingOutput struct {
	*pulumi.OutputState
}

func (ReplicationStorageClassificationMappingOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ReplicationStorageClassificationMapping)(nil))
}

func (o ReplicationStorageClassificationMappingOutput) ToReplicationStorageClassificationMappingOutput() ReplicationStorageClassificationMappingOutput {
	return o
}

func (o ReplicationStorageClassificationMappingOutput) ToReplicationStorageClassificationMappingOutputWithContext(ctx context.Context) ReplicationStorageClassificationMappingOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ReplicationStorageClassificationMappingOutput{})
}
