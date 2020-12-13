// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200801preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A private endpoint connection
type ManagedInstancePrivateEndpointConnection struct {
	pulumi.CustomResourceState

	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Private endpoint which the connection belongs to.
	PrivateEndpoint ManagedInstancePrivateEndpointPropertyResponsePtrOutput `pulumi:"privateEndpoint"`
	// Connection State of the Private Endpoint Connection.
	PrivateLinkServiceConnectionState ManagedInstancePrivateLinkServiceConnectionStatePropertyResponsePtrOutput `pulumi:"privateLinkServiceConnectionState"`
	// State of the Private Endpoint Connection.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewManagedInstancePrivateEndpointConnection registers a new resource with the given unique name, arguments, and options.
func NewManagedInstancePrivateEndpointConnection(ctx *pulumi.Context,
	name string, args *ManagedInstancePrivateEndpointConnectionArgs, opts ...pulumi.ResourceOption) (*ManagedInstancePrivateEndpointConnection, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ManagedInstanceName == nil {
		return nil, errors.New("invalid value for required argument 'ManagedInstanceName'")
	}
	if args.PrivateEndpointConnectionName == nil {
		return nil, errors.New("invalid value for required argument 'PrivateEndpointConnectionName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	var resource ManagedInstancePrivateEndpointConnection
	err := ctx.RegisterResource("azure-nextgen:sql/v20200801preview:ManagedInstancePrivateEndpointConnection", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetManagedInstancePrivateEndpointConnection gets an existing ManagedInstancePrivateEndpointConnection resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetManagedInstancePrivateEndpointConnection(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ManagedInstancePrivateEndpointConnectionState, opts ...pulumi.ResourceOption) (*ManagedInstancePrivateEndpointConnection, error) {
	var resource ManagedInstancePrivateEndpointConnection
	err := ctx.ReadResource("azure-nextgen:sql/v20200801preview:ManagedInstancePrivateEndpointConnection", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ManagedInstancePrivateEndpointConnection resources.
type managedInstancePrivateEndpointConnectionState struct {
	// Resource name.
	Name *string `pulumi:"name"`
	// Private endpoint which the connection belongs to.
	PrivateEndpoint *ManagedInstancePrivateEndpointPropertyResponse `pulumi:"privateEndpoint"`
	// Connection State of the Private Endpoint Connection.
	PrivateLinkServiceConnectionState *ManagedInstancePrivateLinkServiceConnectionStatePropertyResponse `pulumi:"privateLinkServiceConnectionState"`
	// State of the Private Endpoint Connection.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type ManagedInstancePrivateEndpointConnectionState struct {
	// Resource name.
	Name pulumi.StringPtrInput
	// Private endpoint which the connection belongs to.
	PrivateEndpoint ManagedInstancePrivateEndpointPropertyResponsePtrInput
	// Connection State of the Private Endpoint Connection.
	PrivateLinkServiceConnectionState ManagedInstancePrivateLinkServiceConnectionStatePropertyResponsePtrInput
	// State of the Private Endpoint Connection.
	ProvisioningState pulumi.StringPtrInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (ManagedInstancePrivateEndpointConnectionState) ElementType() reflect.Type {
	return reflect.TypeOf((*managedInstancePrivateEndpointConnectionState)(nil)).Elem()
}

type managedInstancePrivateEndpointConnectionArgs struct {
	// The name of the managed instance.
	ManagedInstanceName string `pulumi:"managedInstanceName"`
	// Private endpoint which the connection belongs to.
	PrivateEndpoint               *ManagedInstancePrivateEndpointProperty `pulumi:"privateEndpoint"`
	PrivateEndpointConnectionName string                                  `pulumi:"privateEndpointConnectionName"`
	// Connection State of the Private Endpoint Connection.
	PrivateLinkServiceConnectionState *ManagedInstancePrivateLinkServiceConnectionStateProperty `pulumi:"privateLinkServiceConnectionState"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The set of arguments for constructing a ManagedInstancePrivateEndpointConnection resource.
type ManagedInstancePrivateEndpointConnectionArgs struct {
	// The name of the managed instance.
	ManagedInstanceName pulumi.StringInput
	// Private endpoint which the connection belongs to.
	PrivateEndpoint               ManagedInstancePrivateEndpointPropertyPtrInput
	PrivateEndpointConnectionName pulumi.StringInput
	// Connection State of the Private Endpoint Connection.
	PrivateLinkServiceConnectionState ManagedInstancePrivateLinkServiceConnectionStatePropertyPtrInput
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName pulumi.StringInput
}

func (ManagedInstancePrivateEndpointConnectionArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*managedInstancePrivateEndpointConnectionArgs)(nil)).Elem()
}

type ManagedInstancePrivateEndpointConnectionInput interface {
	pulumi.Input

	ToManagedInstancePrivateEndpointConnectionOutput() ManagedInstancePrivateEndpointConnectionOutput
	ToManagedInstancePrivateEndpointConnectionOutputWithContext(ctx context.Context) ManagedInstancePrivateEndpointConnectionOutput
}

func (ManagedInstancePrivateEndpointConnection) ElementType() reflect.Type {
	return reflect.TypeOf((*ManagedInstancePrivateEndpointConnection)(nil)).Elem()
}

func (i ManagedInstancePrivateEndpointConnection) ToManagedInstancePrivateEndpointConnectionOutput() ManagedInstancePrivateEndpointConnectionOutput {
	return i.ToManagedInstancePrivateEndpointConnectionOutputWithContext(context.Background())
}

func (i ManagedInstancePrivateEndpointConnection) ToManagedInstancePrivateEndpointConnectionOutputWithContext(ctx context.Context) ManagedInstancePrivateEndpointConnectionOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ManagedInstancePrivateEndpointConnectionOutput)
}

type ManagedInstancePrivateEndpointConnectionOutput struct {
	*pulumi.OutputState
}

func (ManagedInstancePrivateEndpointConnectionOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ManagedInstancePrivateEndpointConnectionOutput)(nil)).Elem()
}

func (o ManagedInstancePrivateEndpointConnectionOutput) ToManagedInstancePrivateEndpointConnectionOutput() ManagedInstancePrivateEndpointConnectionOutput {
	return o
}

func (o ManagedInstancePrivateEndpointConnectionOutput) ToManagedInstancePrivateEndpointConnectionOutputWithContext(ctx context.Context) ManagedInstancePrivateEndpointConnectionOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ManagedInstancePrivateEndpointConnectionOutput{})
}
