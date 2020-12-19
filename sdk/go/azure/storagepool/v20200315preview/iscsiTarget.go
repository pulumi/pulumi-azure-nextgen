// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200315preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Payload for iSCSI Target Create or Update requests.
type IscsiTarget struct {
	pulumi.CustomResourceState

	// The name of the resource
	Name pulumi.StringOutput `pulumi:"name"`
	// State of the operation on the resource
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Operational status of the Disk pool
	Status pulumi.StringOutput `pulumi:"status"`
	// iSCSI target iqn (iSCSI Qualified Name); example: iqn.2005-03.org.iscsi:server
	TargetIqn pulumi.StringOutput `pulumi:"targetIqn"`
	// list of iSCSI target portal groups
	Tpgs TargetPortalGroupResponseArrayOutput `pulumi:"tpgs"`
	// The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewIscsiTarget registers a new resource with the given unique name, arguments, and options.
func NewIscsiTarget(ctx *pulumi.Context,
	name string, args *IscsiTargetArgs, opts ...pulumi.ResourceOption) (*IscsiTarget, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.DiskPoolName == nil {
		return nil, errors.New("invalid value for required argument 'DiskPoolName'")
	}
	if args.IscsiTargetName == nil {
		return nil, errors.New("invalid value for required argument 'IscsiTargetName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.TargetIqn == nil {
		return nil, errors.New("invalid value for required argument 'TargetIqn'")
	}
	if args.Tpgs == nil {
		return nil, errors.New("invalid value for required argument 'Tpgs'")
	}
	var resource IscsiTarget
	err := ctx.RegisterResource("azure-nextgen:storagepool/v20200315preview:IscsiTarget", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetIscsiTarget gets an existing IscsiTarget resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetIscsiTarget(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *IscsiTargetState, opts ...pulumi.ResourceOption) (*IscsiTarget, error) {
	var resource IscsiTarget
	err := ctx.ReadResource("azure-nextgen:storagepool/v20200315preview:IscsiTarget", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering IscsiTarget resources.
type iscsiTargetState struct {
	// The name of the resource
	Name *string `pulumi:"name"`
	// State of the operation on the resource
	ProvisioningState *string `pulumi:"provisioningState"`
	// Operational status of the Disk pool
	Status *string `pulumi:"status"`
	// iSCSI target iqn (iSCSI Qualified Name); example: iqn.2005-03.org.iscsi:server
	TargetIqn *string `pulumi:"targetIqn"`
	// list of iSCSI target portal groups
	Tpgs []TargetPortalGroupResponse `pulumi:"tpgs"`
	// The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
	Type *string `pulumi:"type"`
}

type IscsiTargetState struct {
	// The name of the resource
	Name pulumi.StringPtrInput
	// State of the operation on the resource
	ProvisioningState pulumi.StringPtrInput
	// Operational status of the Disk pool
	Status pulumi.StringPtrInput
	// iSCSI target iqn (iSCSI Qualified Name); example: iqn.2005-03.org.iscsi:server
	TargetIqn pulumi.StringPtrInput
	// list of iSCSI target portal groups
	Tpgs TargetPortalGroupResponseArrayInput
	// The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
	Type pulumi.StringPtrInput
}

func (IscsiTargetState) ElementType() reflect.Type {
	return reflect.TypeOf((*iscsiTargetState)(nil)).Elem()
}

type iscsiTargetArgs struct {
	// The name of the Disk Pool.
	DiskPoolName string `pulumi:"diskPoolName"`
	// The name of the iSCSI target.
	IscsiTargetName string `pulumi:"iscsiTargetName"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// iSCSI target iqn (iSCSI Qualified Name); example: iqn.2005-03.org.iscsi:server
	TargetIqn string `pulumi:"targetIqn"`
	// list of iSCSI target portal groups
	Tpgs []TargetPortalGroup `pulumi:"tpgs"`
}

// The set of arguments for constructing a IscsiTarget resource.
type IscsiTargetArgs struct {
	// The name of the Disk Pool.
	DiskPoolName pulumi.StringInput
	// The name of the iSCSI target.
	IscsiTargetName pulumi.StringInput
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
	// iSCSI target iqn (iSCSI Qualified Name); example: iqn.2005-03.org.iscsi:server
	TargetIqn pulumi.StringInput
	// list of iSCSI target portal groups
	Tpgs TargetPortalGroupArrayInput
}

func (IscsiTargetArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*iscsiTargetArgs)(nil)).Elem()
}

type IscsiTargetInput interface {
	pulumi.Input

	ToIscsiTargetOutput() IscsiTargetOutput
	ToIscsiTargetOutputWithContext(ctx context.Context) IscsiTargetOutput
}

func (*IscsiTarget) ElementType() reflect.Type {
	return reflect.TypeOf((*IscsiTarget)(nil))
}

func (i *IscsiTarget) ToIscsiTargetOutput() IscsiTargetOutput {
	return i.ToIscsiTargetOutputWithContext(context.Background())
}

func (i *IscsiTarget) ToIscsiTargetOutputWithContext(ctx context.Context) IscsiTargetOutput {
	return pulumi.ToOutputWithContext(ctx, i).(IscsiTargetOutput)
}

type IscsiTargetOutput struct {
	*pulumi.OutputState
}

func (IscsiTargetOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*IscsiTarget)(nil))
}

func (o IscsiTargetOutput) ToIscsiTargetOutput() IscsiTargetOutput {
	return o
}

func (o IscsiTargetOutput) ToIscsiTargetOutputWithContext(ctx context.Context) IscsiTargetOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(IscsiTargetOutput{})
}
