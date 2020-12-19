// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170301

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Contract details.
type ProductGroup struct {
	pulumi.CustomResourceState

	// true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false.
	BuiltIn pulumi.BoolOutput `pulumi:"builtIn"`
	// Group description. Can contain HTML formatting tags.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// Group name.
	DisplayName pulumi.StringOutput `pulumi:"displayName"`
	// For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory aad://<tenant>.onmicrosoft.com/groups/<group object id>; otherwise the value is null.
	ExternalId pulumi.StringPtrOutput `pulumi:"externalId"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Resource type for API Management resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewProductGroup registers a new resource with the given unique name, arguments, and options.
func NewProductGroup(ctx *pulumi.Context,
	name string, args *ProductGroupArgs, opts ...pulumi.ResourceOption) (*ProductGroup, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.GroupId == nil {
		return nil, errors.New("invalid value for required argument 'GroupId'")
	}
	if args.ProductId == nil {
		return nil, errors.New("invalid value for required argument 'ProductId'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ServiceName == nil {
		return nil, errors.New("invalid value for required argument 'ServiceName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:apimanagement/latest:ProductGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180101:ProductGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180601preview:ProductGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20190101:ProductGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201:ProductGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201preview:ProductGroup"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20200601preview:ProductGroup"),
		},
	})
	opts = append(opts, aliases)
	var resource ProductGroup
	err := ctx.RegisterResource("azure-nextgen:apimanagement/v20170301:ProductGroup", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetProductGroup gets an existing ProductGroup resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetProductGroup(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ProductGroupState, opts ...pulumi.ResourceOption) (*ProductGroup, error) {
	var resource ProductGroup
	err := ctx.ReadResource("azure-nextgen:apimanagement/v20170301:ProductGroup", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ProductGroup resources.
type productGroupState struct {
	// true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false.
	BuiltIn *bool `pulumi:"builtIn"`
	// Group description. Can contain HTML formatting tags.
	Description *string `pulumi:"description"`
	// Group name.
	DisplayName *string `pulumi:"displayName"`
	// For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory aad://<tenant>.onmicrosoft.com/groups/<group object id>; otherwise the value is null.
	ExternalId *string `pulumi:"externalId"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Resource type for API Management resource.
	Type *string `pulumi:"type"`
}

type ProductGroupState struct {
	// true if the group is one of the three system groups (Administrators, Developers, or Guests); otherwise false.
	BuiltIn pulumi.BoolPtrInput
	// Group description. Can contain HTML formatting tags.
	Description pulumi.StringPtrInput
	// Group name.
	DisplayName pulumi.StringPtrInput
	// For external groups, this property contains the id of the group from the external identity provider, e.g. for Azure Active Directory aad://<tenant>.onmicrosoft.com/groups/<group object id>; otherwise the value is null.
	ExternalId pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Resource type for API Management resource.
	Type pulumi.StringPtrInput
}

func (ProductGroupState) ElementType() reflect.Type {
	return reflect.TypeOf((*productGroupState)(nil)).Elem()
}

type productGroupArgs struct {
	// Group identifier. Must be unique in the current API Management service instance.
	GroupId string `pulumi:"groupId"`
	// Product identifier. Must be unique in the current API Management service instance.
	ProductId string `pulumi:"productId"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the API Management service.
	ServiceName string `pulumi:"serviceName"`
}

// The set of arguments for constructing a ProductGroup resource.
type ProductGroupArgs struct {
	// Group identifier. Must be unique in the current API Management service instance.
	GroupId pulumi.StringInput
	// Product identifier. Must be unique in the current API Management service instance.
	ProductId pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The name of the API Management service.
	ServiceName pulumi.StringInput
}

func (ProductGroupArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*productGroupArgs)(nil)).Elem()
}

type ProductGroupInput interface {
	pulumi.Input

	ToProductGroupOutput() ProductGroupOutput
	ToProductGroupOutputWithContext(ctx context.Context) ProductGroupOutput
}

func (*ProductGroup) ElementType() reflect.Type {
	return reflect.TypeOf((*ProductGroup)(nil))
}

func (i *ProductGroup) ToProductGroupOutput() ProductGroupOutput {
	return i.ToProductGroupOutputWithContext(context.Background())
}

func (i *ProductGroup) ToProductGroupOutputWithContext(ctx context.Context) ProductGroupOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ProductGroupOutput)
}

type ProductGroupOutput struct {
	*pulumi.OutputState
}

func (ProductGroupOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ProductGroup)(nil))
}

func (o ProductGroupOutput) ToProductGroupOutput() ProductGroupOutput {
	return o
}

func (o ProductGroupOutput) ToProductGroupOutputWithContext(ctx context.Context) ProductGroupOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ProductGroupOutput{})
}
