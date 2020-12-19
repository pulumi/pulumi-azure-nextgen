// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170301

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// OpenId Connect Provider details.
type OpenIdConnectProvider struct {
	pulumi.CustomResourceState

	// Client ID of developer console which is the client application.
	ClientId pulumi.StringOutput `pulumi:"clientId"`
	// Client Secret of developer console which is the client application.
	ClientSecret pulumi.StringPtrOutput `pulumi:"clientSecret"`
	// User-friendly description of OpenID Connect Provider.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// User-friendly OpenID Connect Provider name.
	DisplayName pulumi.StringOutput `pulumi:"displayName"`
	// Metadata endpoint URI.
	MetadataEndpoint pulumi.StringOutput `pulumi:"metadataEndpoint"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Resource type for API Management resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewOpenIdConnectProvider registers a new resource with the given unique name, arguments, and options.
func NewOpenIdConnectProvider(ctx *pulumi.Context,
	name string, args *OpenIdConnectProviderArgs, opts ...pulumi.ResourceOption) (*OpenIdConnectProvider, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ClientId == nil {
		return nil, errors.New("invalid value for required argument 'ClientId'")
	}
	if args.DisplayName == nil {
		return nil, errors.New("invalid value for required argument 'DisplayName'")
	}
	if args.MetadataEndpoint == nil {
		return nil, errors.New("invalid value for required argument 'MetadataEndpoint'")
	}
	if args.Opid == nil {
		return nil, errors.New("invalid value for required argument 'Opid'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ServiceName == nil {
		return nil, errors.New("invalid value for required argument 'ServiceName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:apimanagement/latest:OpenIdConnectProvider"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20160707:OpenIdConnectProvider"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20161010:OpenIdConnectProvider"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180101:OpenIdConnectProvider"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180601preview:OpenIdConnectProvider"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20190101:OpenIdConnectProvider"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201:OpenIdConnectProvider"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201preview:OpenIdConnectProvider"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20200601preview:OpenIdConnectProvider"),
		},
	})
	opts = append(opts, aliases)
	var resource OpenIdConnectProvider
	err := ctx.RegisterResource("azure-nextgen:apimanagement/v20170301:OpenIdConnectProvider", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetOpenIdConnectProvider gets an existing OpenIdConnectProvider resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetOpenIdConnectProvider(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *OpenIdConnectProviderState, opts ...pulumi.ResourceOption) (*OpenIdConnectProvider, error) {
	var resource OpenIdConnectProvider
	err := ctx.ReadResource("azure-nextgen:apimanagement/v20170301:OpenIdConnectProvider", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering OpenIdConnectProvider resources.
type openIdConnectProviderState struct {
	// Client ID of developer console which is the client application.
	ClientId *string `pulumi:"clientId"`
	// Client Secret of developer console which is the client application.
	ClientSecret *string `pulumi:"clientSecret"`
	// User-friendly description of OpenID Connect Provider.
	Description *string `pulumi:"description"`
	// User-friendly OpenID Connect Provider name.
	DisplayName *string `pulumi:"displayName"`
	// Metadata endpoint URI.
	MetadataEndpoint *string `pulumi:"metadataEndpoint"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Resource type for API Management resource.
	Type *string `pulumi:"type"`
}

type OpenIdConnectProviderState struct {
	// Client ID of developer console which is the client application.
	ClientId pulumi.StringPtrInput
	// Client Secret of developer console which is the client application.
	ClientSecret pulumi.StringPtrInput
	// User-friendly description of OpenID Connect Provider.
	Description pulumi.StringPtrInput
	// User-friendly OpenID Connect Provider name.
	DisplayName pulumi.StringPtrInput
	// Metadata endpoint URI.
	MetadataEndpoint pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Resource type for API Management resource.
	Type pulumi.StringPtrInput
}

func (OpenIdConnectProviderState) ElementType() reflect.Type {
	return reflect.TypeOf((*openIdConnectProviderState)(nil)).Elem()
}

type openIdConnectProviderArgs struct {
	// Client ID of developer console which is the client application.
	ClientId string `pulumi:"clientId"`
	// Client Secret of developer console which is the client application.
	ClientSecret *string `pulumi:"clientSecret"`
	// User-friendly description of OpenID Connect Provider.
	Description *string `pulumi:"description"`
	// User-friendly OpenID Connect Provider name.
	DisplayName string `pulumi:"displayName"`
	// Metadata endpoint URI.
	MetadataEndpoint string `pulumi:"metadataEndpoint"`
	// Identifier of the OpenID Connect Provider.
	Opid string `pulumi:"opid"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the API Management service.
	ServiceName string `pulumi:"serviceName"`
}

// The set of arguments for constructing a OpenIdConnectProvider resource.
type OpenIdConnectProviderArgs struct {
	// Client ID of developer console which is the client application.
	ClientId pulumi.StringInput
	// Client Secret of developer console which is the client application.
	ClientSecret pulumi.StringPtrInput
	// User-friendly description of OpenID Connect Provider.
	Description pulumi.StringPtrInput
	// User-friendly OpenID Connect Provider name.
	DisplayName pulumi.StringInput
	// Metadata endpoint URI.
	MetadataEndpoint pulumi.StringInput
	// Identifier of the OpenID Connect Provider.
	Opid pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The name of the API Management service.
	ServiceName pulumi.StringInput
}

func (OpenIdConnectProviderArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*openIdConnectProviderArgs)(nil)).Elem()
}

type OpenIdConnectProviderInput interface {
	pulumi.Input

	ToOpenIdConnectProviderOutput() OpenIdConnectProviderOutput
	ToOpenIdConnectProviderOutputWithContext(ctx context.Context) OpenIdConnectProviderOutput
}

func (*OpenIdConnectProvider) ElementType() reflect.Type {
	return reflect.TypeOf((*OpenIdConnectProvider)(nil))
}

func (i *OpenIdConnectProvider) ToOpenIdConnectProviderOutput() OpenIdConnectProviderOutput {
	return i.ToOpenIdConnectProviderOutputWithContext(context.Background())
}

func (i *OpenIdConnectProvider) ToOpenIdConnectProviderOutputWithContext(ctx context.Context) OpenIdConnectProviderOutput {
	return pulumi.ToOutputWithContext(ctx, i).(OpenIdConnectProviderOutput)
}

type OpenIdConnectProviderOutput struct {
	*pulumi.OutputState
}

func (OpenIdConnectProviderOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*OpenIdConnectProvider)(nil))
}

func (o OpenIdConnectProviderOutput) ToOpenIdConnectProviderOutput() OpenIdConnectProviderOutput {
	return o
}

func (o OpenIdConnectProviderOutput) ToOpenIdConnectProviderOutputWithContext(ctx context.Context) OpenIdConnectProviderOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(OpenIdConnectProviderOutput{})
}
