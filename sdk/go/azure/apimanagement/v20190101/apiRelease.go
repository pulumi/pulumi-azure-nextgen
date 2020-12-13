// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190101

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// ApiRelease details.
type ApiRelease struct {
	pulumi.CustomResourceState

	// Identifier of the API the release belongs to.
	ApiId pulumi.StringPtrOutput `pulumi:"apiId"`
	// The time the API was released. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
	CreatedDateTime pulumi.StringOutput `pulumi:"createdDateTime"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Release Notes
	Notes pulumi.StringPtrOutput `pulumi:"notes"`
	// Resource type for API Management resource.
	Type pulumi.StringOutput `pulumi:"type"`
	// The time the API release was updated.
	UpdatedDateTime pulumi.StringOutput `pulumi:"updatedDateTime"`
}

// NewApiRelease registers a new resource with the given unique name, arguments, and options.
func NewApiRelease(ctx *pulumi.Context,
	name string, args *ApiReleaseArgs, opts ...pulumi.ResourceOption) (*ApiRelease, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ApiId == nil {
		return nil, errors.New("invalid value for required argument 'ApiId'")
	}
	if args.ReleaseId == nil {
		return nil, errors.New("invalid value for required argument 'ReleaseId'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ServiceName == nil {
		return nil, errors.New("invalid value for required argument 'ServiceName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:apimanagement/latest:ApiRelease"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20170301:ApiRelease"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180101:ApiRelease"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180601preview:ApiRelease"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201:ApiRelease"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201preview:ApiRelease"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20200601preview:ApiRelease"),
		},
	})
	opts = append(opts, aliases)
	var resource ApiRelease
	err := ctx.RegisterResource("azure-nextgen:apimanagement/v20190101:ApiRelease", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetApiRelease gets an existing ApiRelease resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetApiRelease(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ApiReleaseState, opts ...pulumi.ResourceOption) (*ApiRelease, error) {
	var resource ApiRelease
	err := ctx.ReadResource("azure-nextgen:apimanagement/v20190101:ApiRelease", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ApiRelease resources.
type apiReleaseState struct {
	// Identifier of the API the release belongs to.
	ApiId *string `pulumi:"apiId"`
	// The time the API was released. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
	CreatedDateTime *string `pulumi:"createdDateTime"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Release Notes
	Notes *string `pulumi:"notes"`
	// Resource type for API Management resource.
	Type *string `pulumi:"type"`
	// The time the API release was updated.
	UpdatedDateTime *string `pulumi:"updatedDateTime"`
}

type ApiReleaseState struct {
	// Identifier of the API the release belongs to.
	ApiId pulumi.StringPtrInput
	// The time the API was released. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
	CreatedDateTime pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Release Notes
	Notes pulumi.StringPtrInput
	// Resource type for API Management resource.
	Type pulumi.StringPtrInput
	// The time the API release was updated.
	UpdatedDateTime pulumi.StringPtrInput
}

func (ApiReleaseState) ElementType() reflect.Type {
	return reflect.TypeOf((*apiReleaseState)(nil)).Elem()
}

type apiReleaseArgs struct {
	// Identifier of the API the release belongs to.
	ApiId string `pulumi:"apiId"`
	// Release Notes
	Notes *string `pulumi:"notes"`
	// Release identifier within an API. Must be unique in the current API Management service instance.
	ReleaseId string `pulumi:"releaseId"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the API Management service.
	ServiceName string `pulumi:"serviceName"`
}

// The set of arguments for constructing a ApiRelease resource.
type ApiReleaseArgs struct {
	// Identifier of the API the release belongs to.
	ApiId pulumi.StringInput
	// Release Notes
	Notes pulumi.StringPtrInput
	// Release identifier within an API. Must be unique in the current API Management service instance.
	ReleaseId pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The name of the API Management service.
	ServiceName pulumi.StringInput
}

func (ApiReleaseArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*apiReleaseArgs)(nil)).Elem()
}

type ApiReleaseInput interface {
	pulumi.Input

	ToApiReleaseOutput() ApiReleaseOutput
	ToApiReleaseOutputWithContext(ctx context.Context) ApiReleaseOutput
}

func (ApiRelease) ElementType() reflect.Type {
	return reflect.TypeOf((*ApiRelease)(nil)).Elem()
}

func (i ApiRelease) ToApiReleaseOutput() ApiReleaseOutput {
	return i.ToApiReleaseOutputWithContext(context.Background())
}

func (i ApiRelease) ToApiReleaseOutputWithContext(ctx context.Context) ApiReleaseOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ApiReleaseOutput)
}

type ApiReleaseOutput struct {
	*pulumi.OutputState
}

func (ApiReleaseOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ApiReleaseOutput)(nil)).Elem()
}

func (o ApiReleaseOutput) ToApiReleaseOutput() ApiReleaseOutput {
	return o
}

func (o ApiReleaseOutput) ToApiReleaseOutputWithContext(ctx context.Context) ApiReleaseOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ApiReleaseOutput{})
}
