// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Api Version Set Contract details.
type ApiVersionSet struct {
	pulumi.CustomResourceState

	// Description of API Version Set.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// Name of API Version Set
	DisplayName pulumi.StringOutput `pulumi:"displayName"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Resource type for API Management resource.
	Type pulumi.StringOutput `pulumi:"type"`
	// Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
	VersionHeaderName pulumi.StringPtrOutput `pulumi:"versionHeaderName"`
	// Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
	VersionQueryName pulumi.StringPtrOutput `pulumi:"versionQueryName"`
	// An value that determines where the API Version identifer will be located in a HTTP request.
	VersioningScheme pulumi.StringOutput `pulumi:"versioningScheme"`
}

// NewApiVersionSet registers a new resource with the given unique name, arguments, and options.
func NewApiVersionSet(ctx *pulumi.Context,
	name string, args *ApiVersionSetArgs, opts ...pulumi.ResourceOption) (*ApiVersionSet, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.DisplayName == nil {
		return nil, errors.New("invalid value for required argument 'DisplayName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ServiceName == nil {
		return nil, errors.New("invalid value for required argument 'ServiceName'")
	}
	if args.VersionSetId == nil {
		return nil, errors.New("invalid value for required argument 'VersionSetId'")
	}
	if args.VersioningScheme == nil {
		return nil, errors.New("invalid value for required argument 'VersioningScheme'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20170301:ApiVersionSet"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180101:ApiVersionSet"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180601preview:ApiVersionSet"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20190101:ApiVersionSet"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201:ApiVersionSet"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201preview:ApiVersionSet"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20200601preview:ApiVersionSet"),
		},
	})
	opts = append(opts, aliases)
	var resource ApiVersionSet
	err := ctx.RegisterResource("azure-nextgen:apimanagement/latest:ApiVersionSet", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetApiVersionSet gets an existing ApiVersionSet resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetApiVersionSet(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ApiVersionSetState, opts ...pulumi.ResourceOption) (*ApiVersionSet, error) {
	var resource ApiVersionSet
	err := ctx.ReadResource("azure-nextgen:apimanagement/latest:ApiVersionSet", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ApiVersionSet resources.
type apiVersionSetState struct {
	// Description of API Version Set.
	Description *string `pulumi:"description"`
	// Name of API Version Set
	DisplayName *string `pulumi:"displayName"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Resource type for API Management resource.
	Type *string `pulumi:"type"`
	// Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
	VersionHeaderName *string `pulumi:"versionHeaderName"`
	// Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
	VersionQueryName *string `pulumi:"versionQueryName"`
	// An value that determines where the API Version identifer will be located in a HTTP request.
	VersioningScheme *string `pulumi:"versioningScheme"`
}

type ApiVersionSetState struct {
	// Description of API Version Set.
	Description pulumi.StringPtrInput
	// Name of API Version Set
	DisplayName pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Resource type for API Management resource.
	Type pulumi.StringPtrInput
	// Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
	VersionHeaderName pulumi.StringPtrInput
	// Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
	VersionQueryName pulumi.StringPtrInput
	// An value that determines where the API Version identifer will be located in a HTTP request.
	VersioningScheme pulumi.StringPtrInput
}

func (ApiVersionSetState) ElementType() reflect.Type {
	return reflect.TypeOf((*apiVersionSetState)(nil)).Elem()
}

type apiVersionSetArgs struct {
	// Description of API Version Set.
	Description *string `pulumi:"description"`
	// Name of API Version Set
	DisplayName string `pulumi:"displayName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the API Management service.
	ServiceName string `pulumi:"serviceName"`
	// Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
	VersionHeaderName *string `pulumi:"versionHeaderName"`
	// Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
	VersionQueryName *string `pulumi:"versionQueryName"`
	// Api Version Set identifier. Must be unique in the current API Management service instance.
	VersionSetId string `pulumi:"versionSetId"`
	// An value that determines where the API Version identifer will be located in a HTTP request.
	VersioningScheme string `pulumi:"versioningScheme"`
}

// The set of arguments for constructing a ApiVersionSet resource.
type ApiVersionSetArgs struct {
	// Description of API Version Set.
	Description pulumi.StringPtrInput
	// Name of API Version Set
	DisplayName pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The name of the API Management service.
	ServiceName pulumi.StringInput
	// Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
	VersionHeaderName pulumi.StringPtrInput
	// Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
	VersionQueryName pulumi.StringPtrInput
	// Api Version Set identifier. Must be unique in the current API Management service instance.
	VersionSetId pulumi.StringInput
	// An value that determines where the API Version identifer will be located in a HTTP request.
	VersioningScheme pulumi.StringInput
}

func (ApiVersionSetArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*apiVersionSetArgs)(nil)).Elem()
}

type ApiVersionSetInput interface {
	pulumi.Input

	ToApiVersionSetOutput() ApiVersionSetOutput
	ToApiVersionSetOutputWithContext(ctx context.Context) ApiVersionSetOutput
}

func (ApiVersionSet) ElementType() reflect.Type {
	return reflect.TypeOf((*ApiVersionSet)(nil)).Elem()
}

func (i ApiVersionSet) ToApiVersionSetOutput() ApiVersionSetOutput {
	return i.ToApiVersionSetOutputWithContext(context.Background())
}

func (i ApiVersionSet) ToApiVersionSetOutputWithContext(ctx context.Context) ApiVersionSetOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ApiVersionSetOutput)
}

type ApiVersionSetOutput struct {
	*pulumi.OutputState
}

func (ApiVersionSetOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ApiVersionSetOutput)(nil)).Elem()
}

func (o ApiVersionSetOutput) ToApiVersionSetOutput() ApiVersionSetOutput {
	return o
}

func (o ApiVersionSetOutput) ToApiVersionSetOutputWithContext(ctx context.Context) ApiVersionSetOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ApiVersionSetOutput{})
}
