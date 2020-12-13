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
type ApiPolicy struct {
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

// NewApiPolicy registers a new resource with the given unique name, arguments, and options.
func NewApiPolicy(ctx *pulumi.Context,
	name string, args *ApiPolicyArgs, opts ...pulumi.ResourceOption) (*ApiPolicy, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ApiId == nil {
		return nil, errors.New("invalid value for required argument 'ApiId'")
	}
	if args.PolicyId == nil {
		return nil, errors.New("invalid value for required argument 'PolicyId'")
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
			Type: pulumi.String("azure-nextgen:apimanagement/latest:ApiPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20170301:ApiPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180101:ApiPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180601preview:ApiPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201:ApiPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201preview:ApiPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20200601preview:ApiPolicy"),
		},
	})
	opts = append(opts, aliases)
	var resource ApiPolicy
	err := ctx.RegisterResource("azure-nextgen:apimanagement/v20190101:ApiPolicy", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetApiPolicy gets an existing ApiPolicy resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetApiPolicy(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ApiPolicyState, opts ...pulumi.ResourceOption) (*ApiPolicy, error) {
	var resource ApiPolicy
	err := ctx.ReadResource("azure-nextgen:apimanagement/v20190101:ApiPolicy", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ApiPolicy resources.
type apiPolicyState struct {
	// Format of the policyContent.
	Format *string `pulumi:"format"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Resource type for API Management resource.
	Type *string `pulumi:"type"`
	// Contents of the Policy as defined by the format.
	Value *string `pulumi:"value"`
}

type ApiPolicyState struct {
	// Format of the policyContent.
	Format pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Resource type for API Management resource.
	Type pulumi.StringPtrInput
	// Contents of the Policy as defined by the format.
	Value pulumi.StringPtrInput
}

func (ApiPolicyState) ElementType() reflect.Type {
	return reflect.TypeOf((*apiPolicyState)(nil)).Elem()
}

type apiPolicyArgs struct {
	// API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
	ApiId string `pulumi:"apiId"`
	// Format of the policyContent.
	Format *string `pulumi:"format"`
	// The identifier of the Policy.
	PolicyId string `pulumi:"policyId"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the API Management service.
	ServiceName string `pulumi:"serviceName"`
	// Contents of the Policy as defined by the format.
	Value string `pulumi:"value"`
}

// The set of arguments for constructing a ApiPolicy resource.
type ApiPolicyArgs struct {
	// API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
	ApiId pulumi.StringInput
	// Format of the policyContent.
	Format pulumi.StringPtrInput
	// The identifier of the Policy.
	PolicyId pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The name of the API Management service.
	ServiceName pulumi.StringInput
	// Contents of the Policy as defined by the format.
	Value pulumi.StringInput
}

func (ApiPolicyArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*apiPolicyArgs)(nil)).Elem()
}

type ApiPolicyInput interface {
	pulumi.Input

	ToApiPolicyOutput() ApiPolicyOutput
	ToApiPolicyOutputWithContext(ctx context.Context) ApiPolicyOutput
}

func (ApiPolicy) ElementType() reflect.Type {
	return reflect.TypeOf((*ApiPolicy)(nil)).Elem()
}

func (i ApiPolicy) ToApiPolicyOutput() ApiPolicyOutput {
	return i.ToApiPolicyOutputWithContext(context.Background())
}

func (i ApiPolicy) ToApiPolicyOutputWithContext(ctx context.Context) ApiPolicyOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ApiPolicyOutput)
}

type ApiPolicyOutput struct {
	*pulumi.OutputState
}

func (ApiPolicyOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ApiPolicyOutput)(nil)).Elem()
}

func (o ApiPolicyOutput) ToApiPolicyOutput() ApiPolicyOutput {
	return o
}

func (o ApiPolicyOutput) ToApiPolicyOutputWithContext(ctx context.Context) ApiPolicyOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ApiPolicyOutput{})
}
