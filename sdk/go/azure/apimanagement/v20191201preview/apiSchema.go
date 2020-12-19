// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191201preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Schema Contract details.
type ApiSchema struct {
	pulumi.CustomResourceState

	// Must be a valid a media type used in a Content-Type header as defined in the RFC 2616. Media type of the schema document (e.g. application/json, application/xml). </br> - `Swagger` Schema use `application/vnd.ms-azure-apim.swagger.definitions+json` </br> - `WSDL` Schema use `application/vnd.ms-azure-apim.xsd+xml` </br> - `OpenApi` Schema use `application/vnd.oai.openapi.components+json` </br> - `WADL Schema` use `application/vnd.ms-azure-apim.wadl.grammars+xml`.
	ContentType pulumi.StringOutput `pulumi:"contentType"`
	// Types definitions. Used for Swagger/OpenAPI schemas only, null otherwise.
	Definitions pulumi.AnyOutput `pulumi:"definitions"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Resource type for API Management resource.
	Type pulumi.StringOutput `pulumi:"type"`
	// Json escaped string defining the document representing the Schema. Used for schemas other than Swagger/OpenAPI.
	Value pulumi.StringPtrOutput `pulumi:"value"`
}

// NewApiSchema registers a new resource with the given unique name, arguments, and options.
func NewApiSchema(ctx *pulumi.Context,
	name string, args *ApiSchemaArgs, opts ...pulumi.ResourceOption) (*ApiSchema, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ApiId == nil {
		return nil, errors.New("invalid value for required argument 'ApiId'")
	}
	if args.ContentType == nil {
		return nil, errors.New("invalid value for required argument 'ContentType'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.SchemaId == nil {
		return nil, errors.New("invalid value for required argument 'SchemaId'")
	}
	if args.ServiceName == nil {
		return nil, errors.New("invalid value for required argument 'ServiceName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:apimanagement/latest:ApiSchema"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20170301:ApiSchema"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180101:ApiSchema"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20180601preview:ApiSchema"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20190101:ApiSchema"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20191201:ApiSchema"),
		},
		{
			Type: pulumi.String("azure-nextgen:apimanagement/v20200601preview:ApiSchema"),
		},
	})
	opts = append(opts, aliases)
	var resource ApiSchema
	err := ctx.RegisterResource("azure-nextgen:apimanagement/v20191201preview:ApiSchema", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetApiSchema gets an existing ApiSchema resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetApiSchema(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ApiSchemaState, opts ...pulumi.ResourceOption) (*ApiSchema, error) {
	var resource ApiSchema
	err := ctx.ReadResource("azure-nextgen:apimanagement/v20191201preview:ApiSchema", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ApiSchema resources.
type apiSchemaState struct {
	// Must be a valid a media type used in a Content-Type header as defined in the RFC 2616. Media type of the schema document (e.g. application/json, application/xml). </br> - `Swagger` Schema use `application/vnd.ms-azure-apim.swagger.definitions+json` </br> - `WSDL` Schema use `application/vnd.ms-azure-apim.xsd+xml` </br> - `OpenApi` Schema use `application/vnd.oai.openapi.components+json` </br> - `WADL Schema` use `application/vnd.ms-azure-apim.wadl.grammars+xml`.
	ContentType *string `pulumi:"contentType"`
	// Types definitions. Used for Swagger/OpenAPI schemas only, null otherwise.
	Definitions interface{} `pulumi:"definitions"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Resource type for API Management resource.
	Type *string `pulumi:"type"`
	// Json escaped string defining the document representing the Schema. Used for schemas other than Swagger/OpenAPI.
	Value *string `pulumi:"value"`
}

type ApiSchemaState struct {
	// Must be a valid a media type used in a Content-Type header as defined in the RFC 2616. Media type of the schema document (e.g. application/json, application/xml). </br> - `Swagger` Schema use `application/vnd.ms-azure-apim.swagger.definitions+json` </br> - `WSDL` Schema use `application/vnd.ms-azure-apim.xsd+xml` </br> - `OpenApi` Schema use `application/vnd.oai.openapi.components+json` </br> - `WADL Schema` use `application/vnd.ms-azure-apim.wadl.grammars+xml`.
	ContentType pulumi.StringPtrInput
	// Types definitions. Used for Swagger/OpenAPI schemas only, null otherwise.
	Definitions pulumi.Input
	// Resource name.
	Name pulumi.StringPtrInput
	// Resource type for API Management resource.
	Type pulumi.StringPtrInput
	// Json escaped string defining the document representing the Schema. Used for schemas other than Swagger/OpenAPI.
	Value pulumi.StringPtrInput
}

func (ApiSchemaState) ElementType() reflect.Type {
	return reflect.TypeOf((*apiSchemaState)(nil)).Elem()
}

type apiSchemaArgs struct {
	// API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
	ApiId string `pulumi:"apiId"`
	// Must be a valid a media type used in a Content-Type header as defined in the RFC 2616. Media type of the schema document (e.g. application/json, application/xml). </br> - `Swagger` Schema use `application/vnd.ms-azure-apim.swagger.definitions+json` </br> - `WSDL` Schema use `application/vnd.ms-azure-apim.xsd+xml` </br> - `OpenApi` Schema use `application/vnd.oai.openapi.components+json` </br> - `WADL Schema` use `application/vnd.ms-azure-apim.wadl.grammars+xml`.
	ContentType string `pulumi:"contentType"`
	// Types definitions. Used for Swagger/OpenAPI schemas only, null otherwise.
	Definitions interface{} `pulumi:"definitions"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Schema identifier within an API. Must be unique in the current API Management service instance.
	SchemaId string `pulumi:"schemaId"`
	// The name of the API Management service.
	ServiceName string `pulumi:"serviceName"`
	// Json escaped string defining the document representing the Schema. Used for schemas other than Swagger/OpenAPI.
	Value *string `pulumi:"value"`
}

// The set of arguments for constructing a ApiSchema resource.
type ApiSchemaArgs struct {
	// API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
	ApiId pulumi.StringInput
	// Must be a valid a media type used in a Content-Type header as defined in the RFC 2616. Media type of the schema document (e.g. application/json, application/xml). </br> - `Swagger` Schema use `application/vnd.ms-azure-apim.swagger.definitions+json` </br> - `WSDL` Schema use `application/vnd.ms-azure-apim.xsd+xml` </br> - `OpenApi` Schema use `application/vnd.oai.openapi.components+json` </br> - `WADL Schema` use `application/vnd.ms-azure-apim.wadl.grammars+xml`.
	ContentType pulumi.StringInput
	// Types definitions. Used for Swagger/OpenAPI schemas only, null otherwise.
	Definitions pulumi.Input
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// Schema identifier within an API. Must be unique in the current API Management service instance.
	SchemaId pulumi.StringInput
	// The name of the API Management service.
	ServiceName pulumi.StringInput
	// Json escaped string defining the document representing the Schema. Used for schemas other than Swagger/OpenAPI.
	Value pulumi.StringPtrInput
}

func (ApiSchemaArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*apiSchemaArgs)(nil)).Elem()
}

type ApiSchemaInput interface {
	pulumi.Input

	ToApiSchemaOutput() ApiSchemaOutput
	ToApiSchemaOutputWithContext(ctx context.Context) ApiSchemaOutput
}

func (*ApiSchema) ElementType() reflect.Type {
	return reflect.TypeOf((*ApiSchema)(nil))
}

func (i *ApiSchema) ToApiSchemaOutput() ApiSchemaOutput {
	return i.ToApiSchemaOutputWithContext(context.Background())
}

func (i *ApiSchema) ToApiSchemaOutputWithContext(ctx context.Context) ApiSchemaOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ApiSchemaOutput)
}

type ApiSchemaOutput struct {
	*pulumi.OutputState
}

func (ApiSchemaOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ApiSchema)(nil))
}

func (o ApiSchemaOutput) ToApiSchemaOutput() ApiSchemaOutput {
	return o
}

func (o ApiSchemaOutput) ToApiSchemaOutputWithContext(ctx context.Context) ApiSchemaOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ApiSchemaOutput{})
}
