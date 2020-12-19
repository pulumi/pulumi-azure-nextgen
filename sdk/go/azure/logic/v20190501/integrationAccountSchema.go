// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190501

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The integration account schema.
type IntegrationAccountSchema struct {
	pulumi.CustomResourceState

	// The changed time.
	ChangedTime pulumi.StringOutput `pulumi:"changedTime"`
	// The content.
	Content pulumi.StringPtrOutput `pulumi:"content"`
	// The content link.
	ContentLink ContentLinkResponseOutput `pulumi:"contentLink"`
	// The content type.
	ContentType pulumi.StringPtrOutput `pulumi:"contentType"`
	// The created time.
	CreatedTime pulumi.StringOutput `pulumi:"createdTime"`
	// The document name.
	DocumentName pulumi.StringPtrOutput `pulumi:"documentName"`
	// The file name.
	FileName pulumi.StringPtrOutput `pulumi:"fileName"`
	// The resource location.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// The metadata.
	Metadata pulumi.AnyOutput `pulumi:"metadata"`
	// Gets the resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The schema type.
	SchemaType pulumi.StringOutput `pulumi:"schemaType"`
	// The resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The target namespace of the schema.
	TargetNamespace pulumi.StringPtrOutput `pulumi:"targetNamespace"`
	// Gets the resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewIntegrationAccountSchema registers a new resource with the given unique name, arguments, and options.
func NewIntegrationAccountSchema(ctx *pulumi.Context,
	name string, args *IntegrationAccountSchemaArgs, opts ...pulumi.ResourceOption) (*IntegrationAccountSchema, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.IntegrationAccountName == nil {
		return nil, errors.New("invalid value for required argument 'IntegrationAccountName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.SchemaName == nil {
		return nil, errors.New("invalid value for required argument 'SchemaName'")
	}
	if args.SchemaType == nil {
		return nil, errors.New("invalid value for required argument 'SchemaType'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:logic/latest:IntegrationAccountSchema"),
		},
		{
			Type: pulumi.String("azure-nextgen:logic/v20150801preview:IntegrationAccountSchema"),
		},
		{
			Type: pulumi.String("azure-nextgen:logic/v20160601:IntegrationAccountSchema"),
		},
		{
			Type: pulumi.String("azure-nextgen:logic/v20180701preview:IntegrationAccountSchema"),
		},
	})
	opts = append(opts, aliases)
	var resource IntegrationAccountSchema
	err := ctx.RegisterResource("azure-nextgen:logic/v20190501:IntegrationAccountSchema", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetIntegrationAccountSchema gets an existing IntegrationAccountSchema resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetIntegrationAccountSchema(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *IntegrationAccountSchemaState, opts ...pulumi.ResourceOption) (*IntegrationAccountSchema, error) {
	var resource IntegrationAccountSchema
	err := ctx.ReadResource("azure-nextgen:logic/v20190501:IntegrationAccountSchema", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering IntegrationAccountSchema resources.
type integrationAccountSchemaState struct {
	// The changed time.
	ChangedTime *string `pulumi:"changedTime"`
	// The content.
	Content *string `pulumi:"content"`
	// The content link.
	ContentLink *ContentLinkResponse `pulumi:"contentLink"`
	// The content type.
	ContentType *string `pulumi:"contentType"`
	// The created time.
	CreatedTime *string `pulumi:"createdTime"`
	// The document name.
	DocumentName *string `pulumi:"documentName"`
	// The file name.
	FileName *string `pulumi:"fileName"`
	// The resource location.
	Location *string `pulumi:"location"`
	// The metadata.
	Metadata interface{} `pulumi:"metadata"`
	// Gets the resource name.
	Name *string `pulumi:"name"`
	// The schema type.
	SchemaType *string `pulumi:"schemaType"`
	// The resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The target namespace of the schema.
	TargetNamespace *string `pulumi:"targetNamespace"`
	// Gets the resource type.
	Type *string `pulumi:"type"`
}

type IntegrationAccountSchemaState struct {
	// The changed time.
	ChangedTime pulumi.StringPtrInput
	// The content.
	Content pulumi.StringPtrInput
	// The content link.
	ContentLink ContentLinkResponsePtrInput
	// The content type.
	ContentType pulumi.StringPtrInput
	// The created time.
	CreatedTime pulumi.StringPtrInput
	// The document name.
	DocumentName pulumi.StringPtrInput
	// The file name.
	FileName pulumi.StringPtrInput
	// The resource location.
	Location pulumi.StringPtrInput
	// The metadata.
	Metadata pulumi.Input
	// Gets the resource name.
	Name pulumi.StringPtrInput
	// The schema type.
	SchemaType pulumi.StringPtrInput
	// The resource tags.
	Tags pulumi.StringMapInput
	// The target namespace of the schema.
	TargetNamespace pulumi.StringPtrInput
	// Gets the resource type.
	Type pulumi.StringPtrInput
}

func (IntegrationAccountSchemaState) ElementType() reflect.Type {
	return reflect.TypeOf((*integrationAccountSchemaState)(nil)).Elem()
}

type integrationAccountSchemaArgs struct {
	// The content.
	Content *string `pulumi:"content"`
	// The content type.
	ContentType *string `pulumi:"contentType"`
	// The document name.
	DocumentName *string `pulumi:"documentName"`
	// The file name.
	FileName *string `pulumi:"fileName"`
	// The integration account name.
	IntegrationAccountName string `pulumi:"integrationAccountName"`
	// The resource location.
	Location *string `pulumi:"location"`
	// The metadata.
	Metadata interface{} `pulumi:"metadata"`
	// The resource group name.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The integration account schema name.
	SchemaName string `pulumi:"schemaName"`
	// The schema type.
	SchemaType string `pulumi:"schemaType"`
	// The resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The target namespace of the schema.
	TargetNamespace *string `pulumi:"targetNamespace"`
}

// The set of arguments for constructing a IntegrationAccountSchema resource.
type IntegrationAccountSchemaArgs struct {
	// The content.
	Content pulumi.StringPtrInput
	// The content type.
	ContentType pulumi.StringPtrInput
	// The document name.
	DocumentName pulumi.StringPtrInput
	// The file name.
	FileName pulumi.StringPtrInput
	// The integration account name.
	IntegrationAccountName pulumi.StringInput
	// The resource location.
	Location pulumi.StringPtrInput
	// The metadata.
	Metadata pulumi.Input
	// The resource group name.
	ResourceGroupName pulumi.StringInput
	// The integration account schema name.
	SchemaName pulumi.StringInput
	// The schema type.
	SchemaType pulumi.StringInput
	// The resource tags.
	Tags pulumi.StringMapInput
	// The target namespace of the schema.
	TargetNamespace pulumi.StringPtrInput
}

func (IntegrationAccountSchemaArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*integrationAccountSchemaArgs)(nil)).Elem()
}

type IntegrationAccountSchemaInput interface {
	pulumi.Input

	ToIntegrationAccountSchemaOutput() IntegrationAccountSchemaOutput
	ToIntegrationAccountSchemaOutputWithContext(ctx context.Context) IntegrationAccountSchemaOutput
}

func (*IntegrationAccountSchema) ElementType() reflect.Type {
	return reflect.TypeOf((*IntegrationAccountSchema)(nil))
}

func (i *IntegrationAccountSchema) ToIntegrationAccountSchemaOutput() IntegrationAccountSchemaOutput {
	return i.ToIntegrationAccountSchemaOutputWithContext(context.Background())
}

func (i *IntegrationAccountSchema) ToIntegrationAccountSchemaOutputWithContext(ctx context.Context) IntegrationAccountSchemaOutput {
	return pulumi.ToOutputWithContext(ctx, i).(IntegrationAccountSchemaOutput)
}

type IntegrationAccountSchemaOutput struct {
	*pulumi.OutputState
}

func (IntegrationAccountSchemaOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*IntegrationAccountSchema)(nil))
}

func (o IntegrationAccountSchemaOutput) ToIntegrationAccountSchemaOutput() IntegrationAccountSchemaOutput {
	return o
}

func (o IntegrationAccountSchemaOutput) ToIntegrationAccountSchemaOutputWithContext(ctx context.Context) IntegrationAccountSchemaOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(IntegrationAccountSchemaOutput{})
}
