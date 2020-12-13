// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20160810

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Protection container mapping object.
type ReplicationProtectionContainerMapping struct {
	pulumi.CustomResourceState

	// Resource Location
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Resource Name
	Name pulumi.StringOutput `pulumi:"name"`
	// The custom data.
	Properties ProtectionContainerMappingPropertiesResponseOutput `pulumi:"properties"`
	// Resource Type
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewReplicationProtectionContainerMapping registers a new resource with the given unique name, arguments, and options.
func NewReplicationProtectionContainerMapping(ctx *pulumi.Context,
	name string, args *ReplicationProtectionContainerMappingArgs, opts ...pulumi.ResourceOption) (*ReplicationProtectionContainerMapping, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.FabricName == nil {
		return nil, errors.New("invalid value for required argument 'FabricName'")
	}
	if args.MappingName == nil {
		return nil, errors.New("invalid value for required argument 'MappingName'")
	}
	if args.ProtectionContainerName == nil {
		return nil, errors.New("invalid value for required argument 'ProtectionContainerName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ResourceName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:recoveryservices/latest:ReplicationProtectionContainerMapping"),
		},
		{
			Type: pulumi.String("azure-nextgen:recoveryservices/v20180110:ReplicationProtectionContainerMapping"),
		},
		{
			Type: pulumi.String("azure-nextgen:recoveryservices/v20180710:ReplicationProtectionContainerMapping"),
		},
	})
	opts = append(opts, aliases)
	var resource ReplicationProtectionContainerMapping
	err := ctx.RegisterResource("azure-nextgen:recoveryservices/v20160810:ReplicationProtectionContainerMapping", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetReplicationProtectionContainerMapping gets an existing ReplicationProtectionContainerMapping resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetReplicationProtectionContainerMapping(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ReplicationProtectionContainerMappingState, opts ...pulumi.ResourceOption) (*ReplicationProtectionContainerMapping, error) {
	var resource ReplicationProtectionContainerMapping
	err := ctx.ReadResource("azure-nextgen:recoveryservices/v20160810:ReplicationProtectionContainerMapping", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ReplicationProtectionContainerMapping resources.
type replicationProtectionContainerMappingState struct {
	// Resource Location
	Location *string `pulumi:"location"`
	// Resource Name
	Name *string `pulumi:"name"`
	// The custom data.
	Properties *ProtectionContainerMappingPropertiesResponse `pulumi:"properties"`
	// Resource Type
	Type *string `pulumi:"type"`
}

type ReplicationProtectionContainerMappingState struct {
	// Resource Location
	Location pulumi.StringPtrInput
	// Resource Name
	Name pulumi.StringPtrInput
	// The custom data.
	Properties ProtectionContainerMappingPropertiesResponsePtrInput
	// Resource Type
	Type pulumi.StringPtrInput
}

func (ReplicationProtectionContainerMappingState) ElementType() reflect.Type {
	return reflect.TypeOf((*replicationProtectionContainerMappingState)(nil)).Elem()
}

type replicationProtectionContainerMappingArgs struct {
	// Fabric name.
	FabricName string `pulumi:"fabricName"`
	// Protection container mapping name.
	MappingName string `pulumi:"mappingName"`
	// Configure protection input properties.
	Properties *CreateProtectionContainerMappingInputProperties `pulumi:"properties"`
	// Protection container name.
	ProtectionContainerName string `pulumi:"protectionContainerName"`
	// The name of the resource group where the recovery services vault is present.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the recovery services vault.
	ResourceName string `pulumi:"resourceName"`
}

// The set of arguments for constructing a ReplicationProtectionContainerMapping resource.
type ReplicationProtectionContainerMappingArgs struct {
	// Fabric name.
	FabricName pulumi.StringInput
	// Protection container mapping name.
	MappingName pulumi.StringInput
	// Configure protection input properties.
	Properties CreateProtectionContainerMappingInputPropertiesPtrInput
	// Protection container name.
	ProtectionContainerName pulumi.StringInput
	// The name of the resource group where the recovery services vault is present.
	ResourceGroupName pulumi.StringInput
	// The name of the recovery services vault.
	ResourceName pulumi.StringInput
}

func (ReplicationProtectionContainerMappingArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*replicationProtectionContainerMappingArgs)(nil)).Elem()
}

type ReplicationProtectionContainerMappingInput interface {
	pulumi.Input

	ToReplicationProtectionContainerMappingOutput() ReplicationProtectionContainerMappingOutput
	ToReplicationProtectionContainerMappingOutputWithContext(ctx context.Context) ReplicationProtectionContainerMappingOutput
}

func (ReplicationProtectionContainerMapping) ElementType() reflect.Type {
	return reflect.TypeOf((*ReplicationProtectionContainerMapping)(nil)).Elem()
}

func (i ReplicationProtectionContainerMapping) ToReplicationProtectionContainerMappingOutput() ReplicationProtectionContainerMappingOutput {
	return i.ToReplicationProtectionContainerMappingOutputWithContext(context.Background())
}

func (i ReplicationProtectionContainerMapping) ToReplicationProtectionContainerMappingOutputWithContext(ctx context.Context) ReplicationProtectionContainerMappingOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ReplicationProtectionContainerMappingOutput)
}

type ReplicationProtectionContainerMappingOutput struct {
	*pulumi.OutputState
}

func (ReplicationProtectionContainerMappingOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ReplicationProtectionContainerMappingOutput)(nil)).Elem()
}

func (o ReplicationProtectionContainerMappingOutput) ToReplicationProtectionContainerMappingOutput() ReplicationProtectionContainerMappingOutput {
	return o
}

func (o ReplicationProtectionContainerMappingOutput) ToReplicationProtectionContainerMappingOutputWithContext(ctx context.Context) ReplicationProtectionContainerMappingOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ReplicationProtectionContainerMappingOutput{})
}
