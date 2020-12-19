// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// vCenter definition.
// Latest API Version: 2018-07-10.
type ReplicationvCenter struct {
	pulumi.CustomResourceState

	// Resource Location
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Resource Name
	Name pulumi.StringOutput `pulumi:"name"`
	// VCenter related data.
	Properties VCenterPropertiesResponseOutput `pulumi:"properties"`
	// Resource Type
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewReplicationvCenter registers a new resource with the given unique name, arguments, and options.
func NewReplicationvCenter(ctx *pulumi.Context,
	name string, args *ReplicationvCenterArgs, opts ...pulumi.ResourceOption) (*ReplicationvCenter, error) {
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
	if args.VCenterName == nil {
		return nil, errors.New("invalid value for required argument 'VCenterName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:recoveryservices/v20160810:ReplicationvCenter"),
		},
		{
			Type: pulumi.String("azure-nextgen:recoveryservices/v20180110:ReplicationvCenter"),
		},
		{
			Type: pulumi.String("azure-nextgen:recoveryservices/v20180710:ReplicationvCenter"),
		},
	})
	opts = append(opts, aliases)
	var resource ReplicationvCenter
	err := ctx.RegisterResource("azure-nextgen:recoveryservices/latest:ReplicationvCenter", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetReplicationvCenter gets an existing ReplicationvCenter resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetReplicationvCenter(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ReplicationvCenterState, opts ...pulumi.ResourceOption) (*ReplicationvCenter, error) {
	var resource ReplicationvCenter
	err := ctx.ReadResource("azure-nextgen:recoveryservices/latest:ReplicationvCenter", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ReplicationvCenter resources.
type replicationvCenterState struct {
	// Resource Location
	Location *string `pulumi:"location"`
	// Resource Name
	Name *string `pulumi:"name"`
	// VCenter related data.
	Properties *VCenterPropertiesResponse `pulumi:"properties"`
	// Resource Type
	Type *string `pulumi:"type"`
}

type ReplicationvCenterState struct {
	// Resource Location
	Location pulumi.StringPtrInput
	// Resource Name
	Name pulumi.StringPtrInput
	// VCenter related data.
	Properties VCenterPropertiesResponsePtrInput
	// Resource Type
	Type pulumi.StringPtrInput
}

func (ReplicationvCenterState) ElementType() reflect.Type {
	return reflect.TypeOf((*replicationvCenterState)(nil)).Elem()
}

type replicationvCenterArgs struct {
	// Fabric name.
	FabricName string `pulumi:"fabricName"`
	// The properties of an add vCenter request.
	Properties *AddVCenterRequestProperties `pulumi:"properties"`
	// The name of the resource group where the recovery services vault is present.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the recovery services vault.
	ResourceName string `pulumi:"resourceName"`
	// vCenter name.
	VCenterName string `pulumi:"vCenterName"`
}

// The set of arguments for constructing a ReplicationvCenter resource.
type ReplicationvCenterArgs struct {
	// Fabric name.
	FabricName pulumi.StringInput
	// The properties of an add vCenter request.
	Properties AddVCenterRequestPropertiesPtrInput
	// The name of the resource group where the recovery services vault is present.
	ResourceGroupName pulumi.StringInput
	// The name of the recovery services vault.
	ResourceName pulumi.StringInput
	// vCenter name.
	VCenterName pulumi.StringInput
}

func (ReplicationvCenterArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*replicationvCenterArgs)(nil)).Elem()
}

type ReplicationvCenterInput interface {
	pulumi.Input

	ToReplicationvCenterOutput() ReplicationvCenterOutput
	ToReplicationvCenterOutputWithContext(ctx context.Context) ReplicationvCenterOutput
}

func (*ReplicationvCenter) ElementType() reflect.Type {
	return reflect.TypeOf((*ReplicationvCenter)(nil))
}

func (i *ReplicationvCenter) ToReplicationvCenterOutput() ReplicationvCenterOutput {
	return i.ToReplicationvCenterOutputWithContext(context.Background())
}

func (i *ReplicationvCenter) ToReplicationvCenterOutputWithContext(ctx context.Context) ReplicationvCenterOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ReplicationvCenterOutput)
}

type ReplicationvCenterOutput struct {
	*pulumi.OutputState
}

func (ReplicationvCenterOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ReplicationvCenter)(nil))
}

func (o ReplicationvCenterOutput) ToReplicationvCenterOutput() ReplicationvCenterOutput {
	return o
}

func (o ReplicationvCenterOutput) ToReplicationvCenterOutputWithContext(ctx context.Context) ReplicationvCenterOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ReplicationvCenterOutput{})
}
