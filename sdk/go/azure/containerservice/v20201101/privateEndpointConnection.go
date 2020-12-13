// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20201101

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A private endpoint connection
type PrivateEndpointConnection struct {
	pulumi.CustomResourceState

	// The name of the private endpoint connection.
	Name pulumi.StringOutput `pulumi:"name"`
	// The resource of private endpoint.
	PrivateEndpoint PrivateEndpointResponsePtrOutput `pulumi:"privateEndpoint"`
	// A collection of information about the state of the connection between service consumer and provider.
	PrivateLinkServiceConnectionState PrivateLinkServiceConnectionStateResponseOutput `pulumi:"privateLinkServiceConnectionState"`
	// The current provisioning state.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewPrivateEndpointConnection registers a new resource with the given unique name, arguments, and options.
func NewPrivateEndpointConnection(ctx *pulumi.Context,
	name string, args *PrivateEndpointConnectionArgs, opts ...pulumi.ResourceOption) (*PrivateEndpointConnection, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.PrivateEndpointConnectionName == nil {
		return nil, errors.New("invalid value for required argument 'PrivateEndpointConnectionName'")
	}
	if args.PrivateLinkServiceConnectionState == nil {
		return nil, errors.New("invalid value for required argument 'PrivateLinkServiceConnectionState'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ResourceName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:containerservice/latest:PrivateEndpointConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerservice/v20200601:PrivateEndpointConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerservice/v20200701:PrivateEndpointConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerservice/v20200901:PrivateEndpointConnection"),
		},
	})
	opts = append(opts, aliases)
	var resource PrivateEndpointConnection
	err := ctx.RegisterResource("azure-nextgen:containerservice/v20201101:PrivateEndpointConnection", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetPrivateEndpointConnection gets an existing PrivateEndpointConnection resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPrivateEndpointConnection(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *PrivateEndpointConnectionState, opts ...pulumi.ResourceOption) (*PrivateEndpointConnection, error) {
	var resource PrivateEndpointConnection
	err := ctx.ReadResource("azure-nextgen:containerservice/v20201101:PrivateEndpointConnection", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering PrivateEndpointConnection resources.
type privateEndpointConnectionState struct {
	// The name of the private endpoint connection.
	Name *string `pulumi:"name"`
	// The resource of private endpoint.
	PrivateEndpoint *PrivateEndpointResponse `pulumi:"privateEndpoint"`
	// A collection of information about the state of the connection between service consumer and provider.
	PrivateLinkServiceConnectionState *PrivateLinkServiceConnectionStateResponse `pulumi:"privateLinkServiceConnectionState"`
	// The current provisioning state.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The resource type.
	Type *string `pulumi:"type"`
}

type PrivateEndpointConnectionState struct {
	// The name of the private endpoint connection.
	Name pulumi.StringPtrInput
	// The resource of private endpoint.
	PrivateEndpoint PrivateEndpointResponsePtrInput
	// A collection of information about the state of the connection between service consumer and provider.
	PrivateLinkServiceConnectionState PrivateLinkServiceConnectionStateResponsePtrInput
	// The current provisioning state.
	ProvisioningState pulumi.StringPtrInput
	// The resource type.
	Type pulumi.StringPtrInput
}

func (PrivateEndpointConnectionState) ElementType() reflect.Type {
	return reflect.TypeOf((*privateEndpointConnectionState)(nil)).Elem()
}

type privateEndpointConnectionArgs struct {
	// The resource of private endpoint.
	PrivateEndpoint *PrivateEndpoint `pulumi:"privateEndpoint"`
	// The name of the private endpoint connection.
	PrivateEndpointConnectionName string `pulumi:"privateEndpointConnectionName"`
	// A collection of information about the state of the connection between service consumer and provider.
	PrivateLinkServiceConnectionState PrivateLinkServiceConnectionState `pulumi:"privateLinkServiceConnectionState"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the managed cluster resource.
	ResourceName string `pulumi:"resourceName"`
}

// The set of arguments for constructing a PrivateEndpointConnection resource.
type PrivateEndpointConnectionArgs struct {
	// The resource of private endpoint.
	PrivateEndpoint PrivateEndpointPtrInput
	// The name of the private endpoint connection.
	PrivateEndpointConnectionName pulumi.StringInput
	// A collection of information about the state of the connection between service consumer and provider.
	PrivateLinkServiceConnectionState PrivateLinkServiceConnectionStateInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The name of the managed cluster resource.
	ResourceName pulumi.StringInput
}

func (PrivateEndpointConnectionArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*privateEndpointConnectionArgs)(nil)).Elem()
}

type PrivateEndpointConnectionInput interface {
	pulumi.Input

	ToPrivateEndpointConnectionOutput() PrivateEndpointConnectionOutput
	ToPrivateEndpointConnectionOutputWithContext(ctx context.Context) PrivateEndpointConnectionOutput
}

func (PrivateEndpointConnection) ElementType() reflect.Type {
	return reflect.TypeOf((*PrivateEndpointConnection)(nil)).Elem()
}

func (i PrivateEndpointConnection) ToPrivateEndpointConnectionOutput() PrivateEndpointConnectionOutput {
	return i.ToPrivateEndpointConnectionOutputWithContext(context.Background())
}

func (i PrivateEndpointConnection) ToPrivateEndpointConnectionOutputWithContext(ctx context.Context) PrivateEndpointConnectionOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PrivateEndpointConnectionOutput)
}

type PrivateEndpointConnectionOutput struct {
	*pulumi.OutputState
}

func (PrivateEndpointConnectionOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*PrivateEndpointConnectionOutput)(nil)).Elem()
}

func (o PrivateEndpointConnectionOutput) ToPrivateEndpointConnectionOutput() PrivateEndpointConnectionOutput {
	return o
}

func (o PrivateEndpointConnectionOutput) ToPrivateEndpointConnectionOutputWithContext(ctx context.Context) PrivateEndpointConnectionOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(PrivateEndpointConnectionOutput{})
}
