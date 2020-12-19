// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190101

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Policy Contract details.
type ProductPolicy struct {
	pulumi.CustomResourceState

	// Format of the policyContent.
	Format pulumi.StringPtrOutput `pulumi:"format"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Resource type for API Management resource.
	Type pulumi.StringOutput `pulumi:"type"`
	// Contents of the Policy as defined by the format.
	Value pulumi.StringOutput `pulumi:"value"`
}

// NewProductPolicy registers a new resource with the given unique name, arguments, and options.
func NewProductPolicy(ctx *pulumi.Context,
	name string, args *ProductPolicyArgs, opts ...pulumi.ResourceOption) (*ProductPolicy, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.PolicyId == nil {
		return nil, errors.New("invalid value for required argument 'PolicyId'")
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
	if args.Value == nil {
		return nil, errors.New("invalid value for required argument 'Value'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:apimanagement/latest:ProductPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20170301:ProductPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180101:ProductPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180601preview:ProductPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201:ProductPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201preview:ProductPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20200601preview:ProductPolicy"),
		},
	})
	opts = append(opts, aliases)
	var resource ProductPolicy
	err := ctx.RegisterResource("azure-nextgen:apimanagement/v20190101:ProductPolicy", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetProductPolicy gets an existing ProductPolicy resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetProductPolicy(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ProductPolicyState, opts ...pulumi.ResourceOption) (*ProductPolicy, error) {
	var resource ProductPolicy
	err := ctx.ReadResource("azure-nextgen:apimanagement/v20190101:ProductPolicy", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ProductPolicy resources.
type productPolicyState struct {
	// Format of the policyContent.
	Format *string `pulumi:"format"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Resource type for API Management resource.
	Type *string `pulumi:"type"`
	// Contents of the Policy as defined by the format.
	Value *string `pulumi:"value"`
}

type ProductPolicyState struct {
	// Format of the policyContent.
	Format pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Resource type for API Management resource.
	Type pulumi.StringPtrInput
	// Contents of the Policy as defined by the format.
	Value pulumi.StringPtrInput
}

func (ProductPolicyState) ElementType() reflect.Type {
	return reflect.TypeOf((*productPolicyState)(nil)).Elem()
}

type productPolicyArgs struct {
	// Format of the policyContent.
	Format *string `pulumi:"format"`
	// The identifier of the Policy.
	PolicyId string `pulumi:"policyId"`
	// Product identifier. Must be unique in the current API Management service instance.
	ProductId string `pulumi:"productId"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the API Management service.
	ServiceName string `pulumi:"serviceName"`
	// Contents of the Policy as defined by the format.
	Value string `pulumi:"value"`
}

// The set of arguments for constructing a ProductPolicy resource.
type ProductPolicyArgs struct {
	// Format of the policyContent.
	Format pulumi.StringPtrInput
	// The identifier of the Policy.
	PolicyId pulumi.StringInput
	// Product identifier. Must be unique in the current API Management service instance.
	ProductId pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The name of the API Management service.
	ServiceName pulumi.StringInput
	// Contents of the Policy as defined by the format.
	Value pulumi.StringInput
}

func (ProductPolicyArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*productPolicyArgs)(nil)).Elem()
}

type ProductPolicyInput interface {
	pulumi.Input

	ToProductPolicyOutput() ProductPolicyOutput
	ToProductPolicyOutputWithContext(ctx context.Context) ProductPolicyOutput
}

func (*ProductPolicy) ElementType() reflect.Type {
	return reflect.TypeOf((*ProductPolicy)(nil))
}

func (i *ProductPolicy) ToProductPolicyOutput() ProductPolicyOutput {
	return i.ToProductPolicyOutputWithContext(context.Background())
}

func (i *ProductPolicy) ToProductPolicyOutputWithContext(ctx context.Context) ProductPolicyOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ProductPolicyOutput)
}

type ProductPolicyOutput struct {
	*pulumi.OutputState
}

func (ProductPolicyOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ProductPolicy)(nil))
}

func (o ProductPolicyOutput) ToProductPolicyOutput() ProductPolicyOutput {
	return o
}

func (o ProductPolicyOutput) ToProductPolicyOutputWithContext(ctx context.Context) ProductPolicyOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ProductPolicyOutput{})
}
