// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20160601

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The gateway definition
type ConnectionGateway struct {
	pulumi.CustomResourceState

	// Resource ETag
	Etag pulumi.StringPtrOutput `pulumi:"etag"`
	// Resource location
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Resource name
	Name       pulumi.StringOutput                                 `pulumi:"name"`
	Properties ConnectionGatewayDefinitionResponsePropertiesOutput `pulumi:"properties"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewConnectionGateway registers a new resource with the given unique name, arguments, and options.
func NewConnectionGateway(ctx *pulumi.Context,
	name string, args *ConnectionGatewayArgs, opts ...pulumi.ResourceOption) (*ConnectionGateway, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ConnectionGatewayName == nil {
		return nil, errors.New("invalid value for required argument 'ConnectionGatewayName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:web/latest:ConnectionGateway"),
		},
	})
	opts = append(opts, aliases)
	var resource ConnectionGateway
	err := ctx.RegisterResource("azure-nextgen:web/v20160601:ConnectionGateway", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetConnectionGateway gets an existing ConnectionGateway resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetConnectionGateway(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ConnectionGatewayState, opts ...pulumi.ResourceOption) (*ConnectionGateway, error) {
	var resource ConnectionGateway
	err := ctx.ReadResource("azure-nextgen:web/v20160601:ConnectionGateway", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ConnectionGateway resources.
type connectionGatewayState struct {
	// Resource ETag
	Etag *string `pulumi:"etag"`
	// Resource location
	Location *string `pulumi:"location"`
	// Resource name
	Name       *string                                        `pulumi:"name"`
	Properties *ConnectionGatewayDefinitionResponseProperties `pulumi:"properties"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type *string `pulumi:"type"`
}

type ConnectionGatewayState struct {
	// Resource ETag
	Etag pulumi.StringPtrInput
	// Resource location
	Location pulumi.StringPtrInput
	// Resource name
	Name       pulumi.StringPtrInput
	Properties ConnectionGatewayDefinitionResponsePropertiesPtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Resource type
	Type pulumi.StringPtrInput
}

func (ConnectionGatewayState) ElementType() reflect.Type {
	return reflect.TypeOf((*connectionGatewayState)(nil)).Elem()
}

type connectionGatewayArgs struct {
	// The connection gateway name
	ConnectionGatewayName string `pulumi:"connectionGatewayName"`
	// Resource ETag
	Etag *string `pulumi:"etag"`
	// Resource location
	Location   *string                                `pulumi:"location"`
	Properties *ConnectionGatewayDefinitionProperties `pulumi:"properties"`
	// The resource group
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a ConnectionGateway resource.
type ConnectionGatewayArgs struct {
	// The connection gateway name
	ConnectionGatewayName pulumi.StringInput
	// Resource ETag
	Etag pulumi.StringPtrInput
	// Resource location
	Location   pulumi.StringPtrInput
	Properties ConnectionGatewayDefinitionPropertiesPtrInput
	// The resource group
	ResourceGroupName pulumi.StringInput
	// Resource tags
	Tags pulumi.StringMapInput
}

func (ConnectionGatewayArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*connectionGatewayArgs)(nil)).Elem()
}

type ConnectionGatewayInput interface {
	pulumi.Input

	ToConnectionGatewayOutput() ConnectionGatewayOutput
	ToConnectionGatewayOutputWithContext(ctx context.Context) ConnectionGatewayOutput
}

func (*ConnectionGateway) ElementType() reflect.Type {
	return reflect.TypeOf((*ConnectionGateway)(nil))
}

func (i *ConnectionGateway) ToConnectionGatewayOutput() ConnectionGatewayOutput {
	return i.ToConnectionGatewayOutputWithContext(context.Background())
}

func (i *ConnectionGateway) ToConnectionGatewayOutputWithContext(ctx context.Context) ConnectionGatewayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ConnectionGatewayOutput)
}

type ConnectionGatewayOutput struct {
	*pulumi.OutputState
}

func (ConnectionGatewayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ConnectionGateway)(nil))
}

func (o ConnectionGatewayOutput) ToConnectionGatewayOutput() ConnectionGatewayOutput {
	return o
}

func (o ConnectionGatewayOutput) ToConnectionGatewayOutputWithContext(ctx context.Context) ConnectionGatewayOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ConnectionGatewayOutput{})
}
