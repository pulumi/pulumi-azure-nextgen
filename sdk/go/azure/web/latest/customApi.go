// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A custom API
type CustomApi struct {
	pulumi.CustomResourceState

	// Resource ETag
	Etag pulumi.StringPtrOutput `pulumi:"etag"`
	// Resource location
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// Custom API properties
	Properties CustomApiPropertiesDefinitionResponseOutput `pulumi:"properties"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewCustomApi registers a new resource with the given unique name, arguments, and options.
func NewCustomApi(ctx *pulumi.Context,
	name string, args *CustomApiArgs, opts ...pulumi.ResourceOption) (*CustomApi, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ApiName == nil {
		return nil, errors.New("invalid value for required argument 'ApiName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:web/v20160601:CustomApi"),
		},
	})
	opts = append(opts, aliases)
	var resource CustomApi
	err := ctx.RegisterResource("azure-nextgen:web/latest:CustomApi", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetCustomApi gets an existing CustomApi resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetCustomApi(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *CustomApiState, opts ...pulumi.ResourceOption) (*CustomApi, error) {
	var resource CustomApi
	err := ctx.ReadResource("azure-nextgen:web/latest:CustomApi", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering CustomApi resources.
type customApiState struct {
	// Resource ETag
	Etag *string `pulumi:"etag"`
	// Resource location
	Location *string `pulumi:"location"`
	// Resource name
	Name *string `pulumi:"name"`
	// Custom API properties
	Properties *CustomApiPropertiesDefinitionResponse `pulumi:"properties"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type *string `pulumi:"type"`
}

type CustomApiState struct {
	// Resource ETag
	Etag pulumi.StringPtrInput
	// Resource location
	Location pulumi.StringPtrInput
	// Resource name
	Name pulumi.StringPtrInput
	// Custom API properties
	Properties CustomApiPropertiesDefinitionResponsePtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Resource type
	Type pulumi.StringPtrInput
}

func (CustomApiState) ElementType() reflect.Type {
	return reflect.TypeOf((*customApiState)(nil)).Elem()
}

type customApiArgs struct {
	// API name
	ApiName string `pulumi:"apiName"`
	// Resource ETag
	Etag *string `pulumi:"etag"`
	// Resource location
	Location *string `pulumi:"location"`
	// Custom API properties
	Properties *CustomApiPropertiesDefinition `pulumi:"properties"`
	// The resource group
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a CustomApi resource.
type CustomApiArgs struct {
	// API name
	ApiName pulumi.StringInput
	// Resource ETag
	Etag pulumi.StringPtrInput
	// Resource location
	Location pulumi.StringPtrInput
	// Custom API properties
	Properties CustomApiPropertiesDefinitionPtrInput
	// The resource group
	ResourceGroupName pulumi.StringInput
	// Resource tags
	Tags pulumi.StringMapInput
}

func (CustomApiArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*customApiArgs)(nil)).Elem()
}

type CustomApiInput interface {
	pulumi.Input

	ToCustomApiOutput() CustomApiOutput
	ToCustomApiOutputWithContext(ctx context.Context) CustomApiOutput
}

func (CustomApi) ElementType() reflect.Type {
	return reflect.TypeOf((*CustomApi)(nil)).Elem()
}

func (i CustomApi) ToCustomApiOutput() CustomApiOutput {
	return i.ToCustomApiOutputWithContext(context.Background())
}

func (i CustomApi) ToCustomApiOutputWithContext(ctx context.Context) CustomApiOutput {
	return pulumi.ToOutputWithContext(ctx, i).(CustomApiOutput)
}

type CustomApiOutput struct {
	*pulumi.OutputState
}

func (CustomApiOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*CustomApiOutput)(nil)).Elem()
}

func (o CustomApiOutput) ToCustomApiOutput() CustomApiOutput {
	return o
}

func (o CustomApiOutput) ToCustomApiOutputWithContext(ctx context.Context) CustomApiOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(CustomApiOutput{})
}
