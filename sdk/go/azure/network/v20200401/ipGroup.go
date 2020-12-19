// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200401

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The IpGroups resource information.
type IpGroup struct {
	pulumi.CustomResourceState

	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// List of references to Azure resources that this IpGroups is associated with.
	Firewalls SubResourceResponseArrayOutput `pulumi:"firewalls"`
	// IpAddresses/IpAddressPrefixes in the IpGroups resource.
	IpAddresses pulumi.StringArrayOutput `pulumi:"ipAddresses"`
	// Resource location.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The provisioning state of the IpGroups resource.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewIpGroup registers a new resource with the given unique name, arguments, and options.
func NewIpGroup(ctx *pulumi.Context,
	name string, args *IpGroupArgs, opts ...pulumi.ResourceOption) (*IpGroup, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.IpGroupsName == nil {
		return nil, errors.New("invalid value for required argument 'IpGroupsName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/latest:IpGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190901:IpGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191101:IpGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191201:IpGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200301:IpGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200501:IpGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200601:IpGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200701:IpGroup"),
		},
	})
	opts = append(opts, aliases)
	var resource IpGroup
	err := ctx.RegisterResource("azure-nextgen:network/v20200401:IpGroup", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetIpGroup gets an existing IpGroup resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetIpGroup(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *IpGroupState, opts ...pulumi.ResourceOption) (*IpGroup, error) {
	var resource IpGroup
	err := ctx.ReadResource("azure-nextgen:network/v20200401:IpGroup", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering IpGroup resources.
type ipGroupState struct {
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// List of references to Azure resources that this IpGroups is associated with.
	Firewalls []SubResourceResponse `pulumi:"firewalls"`
	// IpAddresses/IpAddressPrefixes in the IpGroups resource.
	IpAddresses []string `pulumi:"ipAddresses"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name *string `pulumi:"name"`
	// The provisioning state of the IpGroups resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type IpGroupState struct {
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// List of references to Azure resources that this IpGroups is associated with.
	Firewalls SubResourceResponseArrayInput
	// IpAddresses/IpAddressPrefixes in the IpGroups resource.
	IpAddresses pulumi.StringArrayInput
	// Resource location.
	Location pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// The provisioning state of the IpGroups resource.
	ProvisioningState pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (IpGroupState) ElementType() reflect.Type {
	return reflect.TypeOf((*ipGroupState)(nil)).Elem()
}

type ipGroupArgs struct {
	// Resource ID.
	Id *string `pulumi:"id"`
	// IpAddresses/IpAddressPrefixes in the IpGroups resource.
	IpAddresses []string `pulumi:"ipAddresses"`
	// The name of the ipGroups.
	IpGroupsName string `pulumi:"ipGroupsName"`
	// Resource location.
	Location *string `pulumi:"location"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a IpGroup resource.
type IpGroupArgs struct {
	// Resource ID.
	Id pulumi.StringPtrInput
	// IpAddresses/IpAddressPrefixes in the IpGroups resource.
	IpAddresses pulumi.StringArrayInput
	// The name of the ipGroups.
	IpGroupsName pulumi.StringInput
	// Resource location.
	Location pulumi.StringPtrInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// Resource tags.
	Tags pulumi.StringMapInput
}

func (IpGroupArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*ipGroupArgs)(nil)).Elem()
}

type IpGroupInput interface {
	pulumi.Input

	ToIpGroupOutput() IpGroupOutput
	ToIpGroupOutputWithContext(ctx context.Context) IpGroupOutput
}

func (*IpGroup) ElementType() reflect.Type {
	return reflect.TypeOf((*IpGroup)(nil))
}

func (i *IpGroup) ToIpGroupOutput() IpGroupOutput {
	return i.ToIpGroupOutputWithContext(context.Background())
}

func (i *IpGroup) ToIpGroupOutputWithContext(ctx context.Context) IpGroupOutput {
	return pulumi.ToOutputWithContext(ctx, i).(IpGroupOutput)
}

type IpGroupOutput struct {
	*pulumi.OutputState
}

func (IpGroupOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*IpGroup)(nil))
}

func (o IpGroupOutput) ToIpGroupOutput() IpGroupOutput {
	return o
}

func (o IpGroupOutput) ToIpGroupOutputWithContext(ctx context.Context) IpGroupOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(IpGroupOutput{})
}
