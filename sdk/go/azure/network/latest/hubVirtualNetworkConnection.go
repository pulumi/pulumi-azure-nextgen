// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// HubVirtualNetworkConnection Resource.
// Latest API Version: 2020-07-01.
type HubVirtualNetworkConnection struct {
	pulumi.CustomResourceState

	// Deprecated: VirtualHub to RemoteVnet transit to enabled or not.
	AllowHubToRemoteVnetTransit pulumi.BoolPtrOutput `pulumi:"allowHubToRemoteVnetTransit"`
	// Deprecated: Allow RemoteVnet to use Virtual Hub's gateways.
	AllowRemoteVnetToUseHubVnetGateways pulumi.BoolPtrOutput `pulumi:"allowRemoteVnetToUseHubVnetGateways"`
	// Enable internet security.
	EnableInternetSecurity pulumi.BoolPtrOutput `pulumi:"enableInternetSecurity"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// The name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name pulumi.StringPtrOutput `pulumi:"name"`
	// The provisioning state of the hub virtual network connection resource.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Reference to the remote virtual network.
	RemoteVirtualNetwork SubResourceResponsePtrOutput `pulumi:"remoteVirtualNetwork"`
	// The Routing Configuration indicating the associated and propagated route tables on this connection.
	RoutingConfiguration RoutingConfigurationResponsePtrOutput `pulumi:"routingConfiguration"`
}

// NewHubVirtualNetworkConnection registers a new resource with the given unique name, arguments, and options.
func NewHubVirtualNetworkConnection(ctx *pulumi.Context,
	name string, args *HubVirtualNetworkConnectionArgs, opts ...pulumi.ResourceOption) (*HubVirtualNetworkConnection, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ConnectionName == nil {
		return nil, errors.New("invalid value for required argument 'ConnectionName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.VirtualHubName == nil {
		return nil, errors.New("invalid value for required argument 'VirtualHubName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/v20200501:HubVirtualNetworkConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200601:HubVirtualNetworkConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200701:HubVirtualNetworkConnection"),
		},
	})
	opts = append(opts, aliases)
	var resource HubVirtualNetworkConnection
	err := ctx.RegisterResource("azure-nextgen:network/latest:HubVirtualNetworkConnection", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetHubVirtualNetworkConnection gets an existing HubVirtualNetworkConnection resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetHubVirtualNetworkConnection(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *HubVirtualNetworkConnectionState, opts ...pulumi.ResourceOption) (*HubVirtualNetworkConnection, error) {
	var resource HubVirtualNetworkConnection
	err := ctx.ReadResource("azure-nextgen:network/latest:HubVirtualNetworkConnection", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering HubVirtualNetworkConnection resources.
type hubVirtualNetworkConnectionState struct {
	// Deprecated: VirtualHub to RemoteVnet transit to enabled or not.
	AllowHubToRemoteVnetTransit *bool `pulumi:"allowHubToRemoteVnetTransit"`
	// Deprecated: Allow RemoteVnet to use Virtual Hub's gateways.
	AllowRemoteVnetToUseHubVnetGateways *bool `pulumi:"allowRemoteVnetToUseHubVnetGateways"`
	// Enable internet security.
	EnableInternetSecurity *bool `pulumi:"enableInternetSecurity"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// The name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name *string `pulumi:"name"`
	// The provisioning state of the hub virtual network connection resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Reference to the remote virtual network.
	RemoteVirtualNetwork *SubResourceResponse `pulumi:"remoteVirtualNetwork"`
	// The Routing Configuration indicating the associated and propagated route tables on this connection.
	RoutingConfiguration *RoutingConfigurationResponse `pulumi:"routingConfiguration"`
}

type HubVirtualNetworkConnectionState struct {
	// Deprecated: VirtualHub to RemoteVnet transit to enabled or not.
	AllowHubToRemoteVnetTransit pulumi.BoolPtrInput
	// Deprecated: Allow RemoteVnet to use Virtual Hub's gateways.
	AllowRemoteVnetToUseHubVnetGateways pulumi.BoolPtrInput
	// Enable internet security.
	EnableInternetSecurity pulumi.BoolPtrInput
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// The name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name pulumi.StringPtrInput
	// The provisioning state of the hub virtual network connection resource.
	ProvisioningState pulumi.StringPtrInput
	// Reference to the remote virtual network.
	RemoteVirtualNetwork SubResourceResponsePtrInput
	// The Routing Configuration indicating the associated and propagated route tables on this connection.
	RoutingConfiguration RoutingConfigurationResponsePtrInput
}

func (HubVirtualNetworkConnectionState) ElementType() reflect.Type {
	return reflect.TypeOf((*hubVirtualNetworkConnectionState)(nil)).Elem()
}

type hubVirtualNetworkConnectionArgs struct {
	// Deprecated: VirtualHub to RemoteVnet transit to enabled or not.
	AllowHubToRemoteVnetTransit *bool `pulumi:"allowHubToRemoteVnetTransit"`
	// Deprecated: Allow RemoteVnet to use Virtual Hub's gateways.
	AllowRemoteVnetToUseHubVnetGateways *bool `pulumi:"allowRemoteVnetToUseHubVnetGateways"`
	// The name of the HubVirtualNetworkConnection.
	ConnectionName string `pulumi:"connectionName"`
	// Enable internet security.
	EnableInternetSecurity *bool `pulumi:"enableInternetSecurity"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// The name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name *string `pulumi:"name"`
	// Reference to the remote virtual network.
	RemoteVirtualNetwork *SubResource `pulumi:"remoteVirtualNetwork"`
	// The resource group name of the HubVirtualNetworkConnection.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The Routing Configuration indicating the associated and propagated route tables on this connection.
	RoutingConfiguration *RoutingConfiguration `pulumi:"routingConfiguration"`
	// The name of the VirtualHub.
	VirtualHubName string `pulumi:"virtualHubName"`
}

// The set of arguments for constructing a HubVirtualNetworkConnection resource.
type HubVirtualNetworkConnectionArgs struct {
	// Deprecated: VirtualHub to RemoteVnet transit to enabled or not.
	AllowHubToRemoteVnetTransit pulumi.BoolPtrInput
	// Deprecated: Allow RemoteVnet to use Virtual Hub's gateways.
	AllowRemoteVnetToUseHubVnetGateways pulumi.BoolPtrInput
	// The name of the HubVirtualNetworkConnection.
	ConnectionName pulumi.StringInput
	// Enable internet security.
	EnableInternetSecurity pulumi.BoolPtrInput
	// Resource ID.
	Id pulumi.StringPtrInput
	// The name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name pulumi.StringPtrInput
	// Reference to the remote virtual network.
	RemoteVirtualNetwork SubResourcePtrInput
	// The resource group name of the HubVirtualNetworkConnection.
	ResourceGroupName pulumi.StringInput
	// The Routing Configuration indicating the associated and propagated route tables on this connection.
	RoutingConfiguration RoutingConfigurationPtrInput
	// The name of the VirtualHub.
	VirtualHubName pulumi.StringInput
}

func (HubVirtualNetworkConnectionArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*hubVirtualNetworkConnectionArgs)(nil)).Elem()
}

type HubVirtualNetworkConnectionInput interface {
	pulumi.Input

	ToHubVirtualNetworkConnectionOutput() HubVirtualNetworkConnectionOutput
	ToHubVirtualNetworkConnectionOutputWithContext(ctx context.Context) HubVirtualNetworkConnectionOutput
}

func (*HubVirtualNetworkConnection) ElementType() reflect.Type {
	return reflect.TypeOf((*HubVirtualNetworkConnection)(nil))
}

func (i *HubVirtualNetworkConnection) ToHubVirtualNetworkConnectionOutput() HubVirtualNetworkConnectionOutput {
	return i.ToHubVirtualNetworkConnectionOutputWithContext(context.Background())
}

func (i *HubVirtualNetworkConnection) ToHubVirtualNetworkConnectionOutputWithContext(ctx context.Context) HubVirtualNetworkConnectionOutput {
	return pulumi.ToOutputWithContext(ctx, i).(HubVirtualNetworkConnectionOutput)
}

type HubVirtualNetworkConnectionOutput struct {
	*pulumi.OutputState
}

func (HubVirtualNetworkConnectionOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*HubVirtualNetworkConnection)(nil))
}

func (o HubVirtualNetworkConnectionOutput) ToHubVirtualNetworkConnectionOutput() HubVirtualNetworkConnectionOutput {
	return o
}

func (o HubVirtualNetworkConnectionOutput) ToHubVirtualNetworkConnectionOutputWithContext(ctx context.Context) HubVirtualNetworkConnectionOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(HubVirtualNetworkConnectionOutput{})
}
