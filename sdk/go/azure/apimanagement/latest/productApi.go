// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Api details.
// Latest API Version: 2019-12-01.
type ProductApi struct {
	pulumi.CustomResourceState

	// Describes the Revision of the Api. If no value is provided, default revision 1 is created
	ApiRevision pulumi.StringPtrOutput `pulumi:"apiRevision"`
	// Description of the Api Revision.
	ApiRevisionDescription pulumi.StringPtrOutput `pulumi:"apiRevisionDescription"`
	// Type of API.
	ApiType pulumi.StringPtrOutput `pulumi:"apiType"`
	// Indicates the Version identifier of the API if the API is versioned
	ApiVersion pulumi.StringPtrOutput `pulumi:"apiVersion"`
	// Description of the Api Version.
	ApiVersionDescription pulumi.StringPtrOutput `pulumi:"apiVersionDescription"`
	// Version set details
	ApiVersionSet ApiVersionSetContractDetailsResponsePtrOutput `pulumi:"apiVersionSet"`
	// A resource identifier for the related ApiVersionSet.
	ApiVersionSetId pulumi.StringPtrOutput `pulumi:"apiVersionSetId"`
	// Collection of authentication settings included into this API.
	AuthenticationSettings AuthenticationSettingsContractResponsePtrOutput `pulumi:"authenticationSettings"`
	// Description of the API. May include HTML formatting tags.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// API name. Must be 1 to 300 characters long.
	DisplayName pulumi.StringPtrOutput `pulumi:"displayName"`
	// Indicates if API revision is current api revision.
	IsCurrent pulumi.BoolPtrOutput `pulumi:"isCurrent"`
	// Indicates if API revision is accessible via the gateway.
	IsOnline pulumi.BoolOutput `pulumi:"isOnline"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
	Path pulumi.StringOutput `pulumi:"path"`
	// Describes on which protocols the operations in this API can be invoked.
	Protocols pulumi.StringArrayOutput `pulumi:"protocols"`
	// Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long.
	ServiceUrl pulumi.StringPtrOutput `pulumi:"serviceUrl"`
	// API identifier of the source API.
	SourceApiId pulumi.StringPtrOutput `pulumi:"sourceApiId"`
	// Protocols over which API is made available.
	SubscriptionKeyParameterNames SubscriptionKeyParameterNamesContractResponsePtrOutput `pulumi:"subscriptionKeyParameterNames"`
	// Specifies whether an API or Product subscription is required for accessing the API.
	SubscriptionRequired pulumi.BoolPtrOutput `pulumi:"subscriptionRequired"`
	// Resource type for API Management resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewProductApi registers a new resource with the given unique name, arguments, and options.
func NewProductApi(ctx *pulumi.Context,
	name string, args *ProductApiArgs, opts ...pulumi.ResourceOption) (*ProductApi, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ApiId == nil {
		return nil, errors.New("invalid value for required argument 'ApiId'")
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
			Type: pulumi.String("azure-nextgen:apimanagement/v20170301:ProductApi"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180101:ProductApi"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180601preview:ProductApi"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20190101:ProductApi"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201:ProductApi"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201preview:ProductApi"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20200601preview:ProductApi"),
		},
	})
	opts = append(opts, aliases)
	var resource ProductApi
	err := ctx.RegisterResource("azure-nextgen:apimanagement/latest:ProductApi", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetProductApi gets an existing ProductApi resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetProductApi(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ProductApiState, opts ...pulumi.ResourceOption) (*ProductApi, error) {
	var resource ProductApi
	err := ctx.ReadResource("azure-nextgen:apimanagement/latest:ProductApi", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ProductApi resources.
type productApiState struct {
	// Describes the Revision of the Api. If no value is provided, default revision 1 is created
	ApiRevision *string `pulumi:"apiRevision"`
	// Description of the Api Revision.
	ApiRevisionDescription *string `pulumi:"apiRevisionDescription"`
	// Type of API.
	ApiType *string `pulumi:"apiType"`
	// Indicates the Version identifier of the API if the API is versioned
	ApiVersion *string `pulumi:"apiVersion"`
	// Description of the Api Version.
	ApiVersionDescription *string `pulumi:"apiVersionDescription"`
	// Version set details
	ApiVersionSet *ApiVersionSetContractDetailsResponse `pulumi:"apiVersionSet"`
	// A resource identifier for the related ApiVersionSet.
	ApiVersionSetId *string `pulumi:"apiVersionSetId"`
	// Collection of authentication settings included into this API.
	AuthenticationSettings *AuthenticationSettingsContractResponse `pulumi:"authenticationSettings"`
	// Description of the API. May include HTML formatting tags.
	Description *string `pulumi:"description"`
	// API name. Must be 1 to 300 characters long.
	DisplayName *string `pulumi:"displayName"`
	// Indicates if API revision is current api revision.
	IsCurrent *bool `pulumi:"isCurrent"`
	// Indicates if API revision is accessible via the gateway.
	IsOnline *bool `pulumi:"isOnline"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
	Path *string `pulumi:"path"`
	// Describes on which protocols the operations in this API can be invoked.
	Protocols []string `pulumi:"protocols"`
	// Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long.
	ServiceUrl *string `pulumi:"serviceUrl"`
	// API identifier of the source API.
	SourceApiId *string `pulumi:"sourceApiId"`
	// Protocols over which API is made available.
	SubscriptionKeyParameterNames *SubscriptionKeyParameterNamesContractResponse `pulumi:"subscriptionKeyParameterNames"`
	// Specifies whether an API or Product subscription is required for accessing the API.
	SubscriptionRequired *bool `pulumi:"subscriptionRequired"`
	// Resource type for API Management resource.
	Type *string `pulumi:"type"`
}

type ProductApiState struct {
	// Describes the Revision of the Api. If no value is provided, default revision 1 is created
	ApiRevision pulumi.StringPtrInput
	// Description of the Api Revision.
	ApiRevisionDescription pulumi.StringPtrInput
	// Type of API.
	ApiType pulumi.StringPtrInput
	// Indicates the Version identifier of the API if the API is versioned
	ApiVersion pulumi.StringPtrInput
	// Description of the Api Version.
	ApiVersionDescription pulumi.StringPtrInput
	// Version set details
	ApiVersionSet ApiVersionSetContractDetailsResponsePtrInput
	// A resource identifier for the related ApiVersionSet.
	ApiVersionSetId pulumi.StringPtrInput
	// Collection of authentication settings included into this API.
	AuthenticationSettings AuthenticationSettingsContractResponsePtrInput
	// Description of the API. May include HTML formatting tags.
	Description pulumi.StringPtrInput
	// API name. Must be 1 to 300 characters long.
	DisplayName pulumi.StringPtrInput
	// Indicates if API revision is current api revision.
	IsCurrent pulumi.BoolPtrInput
	// Indicates if API revision is accessible via the gateway.
	IsOnline pulumi.BoolPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
	Path pulumi.StringPtrInput
	// Describes on which protocols the operations in this API can be invoked.
	Protocols pulumi.StringArrayInput
	// Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long.
	ServiceUrl pulumi.StringPtrInput
	// API identifier of the source API.
	SourceApiId pulumi.StringPtrInput
	// Protocols over which API is made available.
	SubscriptionKeyParameterNames SubscriptionKeyParameterNamesContractResponsePtrInput
	// Specifies whether an API or Product subscription is required for accessing the API.
	SubscriptionRequired pulumi.BoolPtrInput
	// Resource type for API Management resource.
	Type pulumi.StringPtrInput
}

func (ProductApiState) ElementType() reflect.Type {
	return reflect.TypeOf((*productApiState)(nil)).Elem()
}

type productApiArgs struct {
	// API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
	ApiId string `pulumi:"apiId"`
	// Product identifier. Must be unique in the current API Management service instance.
	ProductId string `pulumi:"productId"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the API Management service.
	ServiceName string `pulumi:"serviceName"`
}

// The set of arguments for constructing a ProductApi resource.
type ProductApiArgs struct {
	// API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
	ApiId pulumi.StringInput
	// Product identifier. Must be unique in the current API Management service instance.
	ProductId pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The name of the API Management service.
	ServiceName pulumi.StringInput
}

func (ProductApiArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*productApiArgs)(nil)).Elem()
}

type ProductApiInput interface {
	pulumi.Input

	ToProductApiOutput() ProductApiOutput
	ToProductApiOutputWithContext(ctx context.Context) ProductApiOutput
}

func (*ProductApi) ElementType() reflect.Type {
	return reflect.TypeOf((*ProductApi)(nil))
}

func (i *ProductApi) ToProductApiOutput() ProductApiOutput {
	return i.ToProductApiOutputWithContext(context.Background())
}

func (i *ProductApi) ToProductApiOutputWithContext(ctx context.Context) ProductApiOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ProductApiOutput)
}

type ProductApiOutput struct {
	*pulumi.OutputState
}

func (ProductApiOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ProductApi)(nil))
}

func (o ProductApiOutput) ToProductApiOutput() ProductApiOutput {
	return o
}

func (o ProductApiOutput) ToProductApiOutputWithContext(ctx context.Context) ProductApiOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ProductApiOutput{})
}
