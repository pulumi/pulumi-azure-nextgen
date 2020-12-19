// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190801

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Private Endpoint Connection ARM resource.
type WebAppPrivateEndpointConnection struct {
	pulumi.CustomResourceState

	// Kind of resource.
	Kind pulumi.StringPtrOutput `pulumi:"kind"`
	// Resource Name.
	Name pulumi.StringOutput `pulumi:"name"`
	// PrivateEndpoint of a remote private endpoint connection
	PrivateEndpoint ArmIdWrapperResponsePtrOutput `pulumi:"privateEndpoint"`
	// The state of a private link connection
	PrivateLinkServiceConnectionState PrivateLinkConnectionStateResponsePtrOutput `pulumi:"privateLinkServiceConnectionState"`
	ProvisioningState                 pulumi.StringOutput                         `pulumi:"provisioningState"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewWebAppPrivateEndpointConnection registers a new resource with the given unique name, arguments, and options.
func NewWebAppPrivateEndpointConnection(ctx *pulumi.Context,
	name string, args *WebAppPrivateEndpointConnectionArgs, opts ...pulumi.ResourceOption) (*WebAppPrivateEndpointConnection, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Name == nil {
		return nil, errors.New("invalid value for required argument 'Name'")
	}
	if args.PrivateEndpointConnectionName == nil {
		return nil, errors.New("invalid value for required argument 'PrivateEndpointConnectionName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:web/latest:WebAppPrivateEndpointConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20200601:WebAppPrivateEndpointConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:web/v20200901:WebAppPrivateEndpointConnection"),
		},
	})
	opts = append(opts, aliases)
	var resource WebAppPrivateEndpointConnection
	err := ctx.RegisterResource("azure-nextgen:web/v20190801:WebAppPrivateEndpointConnection", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetWebAppPrivateEndpointConnection gets an existing WebAppPrivateEndpointConnection resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetWebAppPrivateEndpointConnection(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *WebAppPrivateEndpointConnectionState, opts ...pulumi.ResourceOption) (*WebAppPrivateEndpointConnection, error) {
	var resource WebAppPrivateEndpointConnection
	err := ctx.ReadResource("azure-nextgen:web/v20190801:WebAppPrivateEndpointConnection", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering WebAppPrivateEndpointConnection resources.
type webAppPrivateEndpointConnectionState struct {
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Resource Name.
	Name *string `pulumi:"name"`
	// PrivateEndpoint of a remote private endpoint connection
	PrivateEndpoint *ArmIdWrapperResponse `pulumi:"privateEndpoint"`
	// The state of a private link connection
	PrivateLinkServiceConnectionState *PrivateLinkConnectionStateResponse `pulumi:"privateLinkServiceConnectionState"`
	ProvisioningState                 *string                             `pulumi:"provisioningState"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type WebAppPrivateEndpointConnectionState struct {
	// Kind of resource.
	Kind pulumi.StringPtrInput
	// Resource Name.
	Name pulumi.StringPtrInput
	// PrivateEndpoint of a remote private endpoint connection
	PrivateEndpoint ArmIdWrapperResponsePtrInput
	// The state of a private link connection
	PrivateLinkServiceConnectionState PrivateLinkConnectionStateResponsePtrInput
	ProvisioningState                 pulumi.StringPtrInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (WebAppPrivateEndpointConnectionState) ElementType() reflect.Type {
	return reflect.TypeOf((*webAppPrivateEndpointConnectionState)(nil)).Elem()
}

type webAppPrivateEndpointConnectionArgs struct {
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Name of the site.
	Name                          string `pulumi:"name"`
	PrivateEndpointConnectionName string `pulumi:"privateEndpointConnectionName"`
	// The state of a private link connection
	PrivateLinkServiceConnectionState *PrivateLinkConnectionState `pulumi:"privateLinkServiceConnectionState"`
	// Name of the resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The set of arguments for constructing a WebAppPrivateEndpointConnection resource.
type WebAppPrivateEndpointConnectionArgs struct {
	// Kind of resource.
	Kind pulumi.StringPtrInput
	// Name of the site.
	Name                          pulumi.StringInput
	PrivateEndpointConnectionName pulumi.StringInput
	// The state of a private link connection
	PrivateLinkServiceConnectionState PrivateLinkConnectionStatePtrInput
	// Name of the resource group to which the resource belongs.
	ResourceGroupName pulumi.StringInput
}

func (WebAppPrivateEndpointConnectionArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*webAppPrivateEndpointConnectionArgs)(nil)).Elem()
}

type WebAppPrivateEndpointConnectionInput interface {
	pulumi.Input

	ToWebAppPrivateEndpointConnectionOutput() WebAppPrivateEndpointConnectionOutput
	ToWebAppPrivateEndpointConnectionOutputWithContext(ctx context.Context) WebAppPrivateEndpointConnectionOutput
}

func (*WebAppPrivateEndpointConnection) ElementType() reflect.Type {
	return reflect.TypeOf((*WebAppPrivateEndpointConnection)(nil))
}

func (i *WebAppPrivateEndpointConnection) ToWebAppPrivateEndpointConnectionOutput() WebAppPrivateEndpointConnectionOutput {
	return i.ToWebAppPrivateEndpointConnectionOutputWithContext(context.Background())
}

func (i *WebAppPrivateEndpointConnection) ToWebAppPrivateEndpointConnectionOutputWithContext(ctx context.Context) WebAppPrivateEndpointConnectionOutput {
	return pulumi.ToOutputWithContext(ctx, i).(WebAppPrivateEndpointConnectionOutput)
}

type WebAppPrivateEndpointConnectionOutput struct {
	*pulumi.OutputState
}

func (WebAppPrivateEndpointConnectionOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*WebAppPrivateEndpointConnection)(nil))
}

func (o WebAppPrivateEndpointConnectionOutput) ToWebAppPrivateEndpointConnectionOutput() WebAppPrivateEndpointConnectionOutput {
	return o
}

func (o WebAppPrivateEndpointConnectionOutput) ToWebAppPrivateEndpointConnectionOutputWithContext(ctx context.Context) WebAppPrivateEndpointConnectionOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(WebAppPrivateEndpointConnectionOutput{})
}
