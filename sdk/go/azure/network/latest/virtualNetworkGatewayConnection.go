// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A common class for general resource information.
// Latest API Version: 2020-07-01.
type VirtualNetworkGatewayConnection struct {
	pulumi.CustomResourceState

	// The authorizationKey.
	AuthorizationKey pulumi.StringPtrOutput `pulumi:"authorizationKey"`
	// The connection mode for this connection.
	ConnectionMode pulumi.StringPtrOutput `pulumi:"connectionMode"`
	// Connection protocol used for this connection.
	ConnectionProtocol pulumi.StringPtrOutput `pulumi:"connectionProtocol"`
	// Virtual Network Gateway connection status.
	ConnectionStatus pulumi.StringOutput `pulumi:"connectionStatus"`
	// Gateway connection type.
	ConnectionType pulumi.StringOutput `pulumi:"connectionType"`
	// The dead peer detection timeout of this connection in seconds.
	DpdTimeoutSeconds pulumi.IntPtrOutput `pulumi:"dpdTimeoutSeconds"`
	// The egress bytes transferred in this connection.
	EgressBytesTransferred pulumi.IntOutput `pulumi:"egressBytesTransferred"`
	// EnableBgp flag.
	EnableBgp pulumi.BoolPtrOutput `pulumi:"enableBgp"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// Bypass ExpressRoute Gateway for data forwarding.
	ExpressRouteGatewayBypass pulumi.BoolPtrOutput `pulumi:"expressRouteGatewayBypass"`
	// The ingress bytes transferred in this connection.
	IngressBytesTransferred pulumi.IntOutput `pulumi:"ingressBytesTransferred"`
	// The IPSec Policies to be considered by this connection.
	IpsecPolicies IpsecPolicyResponseArrayOutput `pulumi:"ipsecPolicies"`
	// The reference to local network gateway resource.
	LocalNetworkGateway2 LocalNetworkGatewayResponsePtrOutput `pulumi:"localNetworkGateway2"`
	// Resource location.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The reference to peerings resource.
	Peer SubResourceResponsePtrOutput `pulumi:"peer"`
	// The provisioning state of the virtual network gateway connection resource.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The resource GUID property of the virtual network gateway connection resource.
	ResourceGuid pulumi.StringOutput `pulumi:"resourceGuid"`
	// The routing weight.
	RoutingWeight pulumi.IntPtrOutput `pulumi:"routingWeight"`
	// The IPSec shared key.
	SharedKey pulumi.StringPtrOutput `pulumi:"sharedKey"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The Traffic Selector Policies to be considered by this connection.
	TrafficSelectorPolicies TrafficSelectorPolicyResponseArrayOutput `pulumi:"trafficSelectorPolicies"`
	// Collection of all tunnels' connection health status.
	TunnelConnectionStatus TunnelConnectionHealthResponseArrayOutput `pulumi:"tunnelConnectionStatus"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// Use private local Azure IP for the connection.
	UseLocalAzureIpAddress pulumi.BoolPtrOutput `pulumi:"useLocalAzureIpAddress"`
	// Enable policy-based traffic selectors.
	UsePolicyBasedTrafficSelectors pulumi.BoolPtrOutput `pulumi:"usePolicyBasedTrafficSelectors"`
	// The reference to virtual network gateway resource.
	VirtualNetworkGateway1 VirtualNetworkGatewayResponseOutput `pulumi:"virtualNetworkGateway1"`
	// The reference to virtual network gateway resource.
	VirtualNetworkGateway2 VirtualNetworkGatewayResponsePtrOutput `pulumi:"virtualNetworkGateway2"`
}

// NewVirtualNetworkGatewayConnection registers a new resource with the given unique name, arguments, and options.
func NewVirtualNetworkGatewayConnection(ctx *pulumi.Context,
	name string, args *VirtualNetworkGatewayConnectionArgs, opts ...pulumi.ResourceOption) (*VirtualNetworkGatewayConnection, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ConnectionType == nil {
		return nil, errors.New("invalid value for required argument 'ConnectionType'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.VirtualNetworkGateway1 == nil {
		return nil, errors.New("invalid value for required argument 'VirtualNetworkGateway1'")
	}
	if args.VirtualNetworkGatewayConnectionName == nil {
		return nil, errors.New("invalid value for required argument 'VirtualNetworkGatewayConnectionName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/v20150615:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160330:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160601:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160901:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20161201:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170301:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170601:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170801:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170901:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20171001:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20171101:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180101:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180201:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180401:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180601:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180701:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180801:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181001:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181101:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181201:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190201:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190401:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190601:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190701:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190801:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190901:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191101:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191201:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200301:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200401:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200501:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200601:VirtualNetworkGatewayConnection"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200701:VirtualNetworkGatewayConnection"),
		},
	})
	opts = append(opts, aliases)
	var resource VirtualNetworkGatewayConnection
	err := ctx.RegisterResource("azure-nextgen:network/latest:VirtualNetworkGatewayConnection", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetVirtualNetworkGatewayConnection gets an existing VirtualNetworkGatewayConnection resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetVirtualNetworkGatewayConnection(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *VirtualNetworkGatewayConnectionState, opts ...pulumi.ResourceOption) (*VirtualNetworkGatewayConnection, error) {
	var resource VirtualNetworkGatewayConnection
	err := ctx.ReadResource("azure-nextgen:network/latest:VirtualNetworkGatewayConnection", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering VirtualNetworkGatewayConnection resources.
type virtualNetworkGatewayConnectionState struct {
	// The authorizationKey.
	AuthorizationKey *string `pulumi:"authorizationKey"`
	// The connection mode for this connection.
	ConnectionMode *string `pulumi:"connectionMode"`
	// Connection protocol used for this connection.
	ConnectionProtocol *string `pulumi:"connectionProtocol"`
	// Virtual Network Gateway connection status.
	ConnectionStatus *string `pulumi:"connectionStatus"`
	// Gateway connection type.
	ConnectionType *string `pulumi:"connectionType"`
	// The dead peer detection timeout of this connection in seconds.
	DpdTimeoutSeconds *int `pulumi:"dpdTimeoutSeconds"`
	// The egress bytes transferred in this connection.
	EgressBytesTransferred *int `pulumi:"egressBytesTransferred"`
	// EnableBgp flag.
	EnableBgp *bool `pulumi:"enableBgp"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// Bypass ExpressRoute Gateway for data forwarding.
	ExpressRouteGatewayBypass *bool `pulumi:"expressRouteGatewayBypass"`
	// The ingress bytes transferred in this connection.
	IngressBytesTransferred *int `pulumi:"ingressBytesTransferred"`
	// The IPSec Policies to be considered by this connection.
	IpsecPolicies []IpsecPolicyResponse `pulumi:"ipsecPolicies"`
	// The reference to local network gateway resource.
	LocalNetworkGateway2 *LocalNetworkGatewayResponse `pulumi:"localNetworkGateway2"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name *string `pulumi:"name"`
	// The reference to peerings resource.
	Peer *SubResourceResponse `pulumi:"peer"`
	// The provisioning state of the virtual network gateway connection resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The resource GUID property of the virtual network gateway connection resource.
	ResourceGuid *string `pulumi:"resourceGuid"`
	// The routing weight.
	RoutingWeight *int `pulumi:"routingWeight"`
	// The IPSec shared key.
	SharedKey *string `pulumi:"sharedKey"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The Traffic Selector Policies to be considered by this connection.
	TrafficSelectorPolicies []TrafficSelectorPolicyResponse `pulumi:"trafficSelectorPolicies"`
	// Collection of all tunnels' connection health status.
	TunnelConnectionStatus []TunnelConnectionHealthResponse `pulumi:"tunnelConnectionStatus"`
	// Resource type.
	Type *string `pulumi:"type"`
	// Use private local Azure IP for the connection.
	UseLocalAzureIpAddress *bool `pulumi:"useLocalAzureIpAddress"`
	// Enable policy-based traffic selectors.
	UsePolicyBasedTrafficSelectors *bool `pulumi:"usePolicyBasedTrafficSelectors"`
	// The reference to virtual network gateway resource.
	VirtualNetworkGateway1 *VirtualNetworkGatewayResponse `pulumi:"virtualNetworkGateway1"`
	// The reference to virtual network gateway resource.
	VirtualNetworkGateway2 *VirtualNetworkGatewayResponse `pulumi:"virtualNetworkGateway2"`
}

type VirtualNetworkGatewayConnectionState struct {
	// The authorizationKey.
	AuthorizationKey pulumi.StringPtrInput
	// The connection mode for this connection.
	ConnectionMode pulumi.StringPtrInput
	// Connection protocol used for this connection.
	ConnectionProtocol pulumi.StringPtrInput
	// Virtual Network Gateway connection status.
	ConnectionStatus pulumi.StringPtrInput
	// Gateway connection type.
	ConnectionType pulumi.StringPtrInput
	// The dead peer detection timeout of this connection in seconds.
	DpdTimeoutSeconds pulumi.IntPtrInput
	// The egress bytes transferred in this connection.
	EgressBytesTransferred pulumi.IntPtrInput
	// EnableBgp flag.
	EnableBgp pulumi.BoolPtrInput
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// Bypass ExpressRoute Gateway for data forwarding.
	ExpressRouteGatewayBypass pulumi.BoolPtrInput
	// The ingress bytes transferred in this connection.
	IngressBytesTransferred pulumi.IntPtrInput
	// The IPSec Policies to be considered by this connection.
	IpsecPolicies IpsecPolicyResponseArrayInput
	// The reference to local network gateway resource.
	LocalNetworkGateway2 LocalNetworkGatewayResponsePtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// The reference to peerings resource.
	Peer SubResourceResponsePtrInput
	// The provisioning state of the virtual network gateway connection resource.
	ProvisioningState pulumi.StringPtrInput
	// The resource GUID property of the virtual network gateway connection resource.
	ResourceGuid pulumi.StringPtrInput
	// The routing weight.
	RoutingWeight pulumi.IntPtrInput
	// The IPSec shared key.
	SharedKey pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The Traffic Selector Policies to be considered by this connection.
	TrafficSelectorPolicies TrafficSelectorPolicyResponseArrayInput
	// Collection of all tunnels' connection health status.
	TunnelConnectionStatus TunnelConnectionHealthResponseArrayInput
	// Resource type.
	Type pulumi.StringPtrInput
	// Use private local Azure IP for the connection.
	UseLocalAzureIpAddress pulumi.BoolPtrInput
	// Enable policy-based traffic selectors.
	UsePolicyBasedTrafficSelectors pulumi.BoolPtrInput
	// The reference to virtual network gateway resource.
	VirtualNetworkGateway1 VirtualNetworkGatewayResponsePtrInput
	// The reference to virtual network gateway resource.
	VirtualNetworkGateway2 VirtualNetworkGatewayResponsePtrInput
}

func (VirtualNetworkGatewayConnectionState) ElementType() reflect.Type {
	return reflect.TypeOf((*virtualNetworkGatewayConnectionState)(nil)).Elem()
}

type virtualNetworkGatewayConnectionArgs struct {
	// The authorizationKey.
	AuthorizationKey *string `pulumi:"authorizationKey"`
	// The connection mode for this connection.
	ConnectionMode *string `pulumi:"connectionMode"`
	// Connection protocol used for this connection.
	ConnectionProtocol *string `pulumi:"connectionProtocol"`
	// Gateway connection type.
	ConnectionType string `pulumi:"connectionType"`
	// The dead peer detection timeout of this connection in seconds.
	DpdTimeoutSeconds *int `pulumi:"dpdTimeoutSeconds"`
	// EnableBgp flag.
	EnableBgp *bool `pulumi:"enableBgp"`
	// Bypass ExpressRoute Gateway for data forwarding.
	ExpressRouteGatewayBypass *bool `pulumi:"expressRouteGatewayBypass"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// The IPSec Policies to be considered by this connection.
	IpsecPolicies []IpsecPolicy `pulumi:"ipsecPolicies"`
	// The reference to local network gateway resource.
	LocalNetworkGateway2 *LocalNetworkGatewayType `pulumi:"localNetworkGateway2"`
	// Resource location.
	Location *string `pulumi:"location"`
	// The reference to peerings resource.
	Peer *SubResource `pulumi:"peer"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The routing weight.
	RoutingWeight *int `pulumi:"routingWeight"`
	// The IPSec shared key.
	SharedKey *string `pulumi:"sharedKey"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The Traffic Selector Policies to be considered by this connection.
	TrafficSelectorPolicies []TrafficSelectorPolicy `pulumi:"trafficSelectorPolicies"`
	// Use private local Azure IP for the connection.
	UseLocalAzureIpAddress *bool `pulumi:"useLocalAzureIpAddress"`
	// Enable policy-based traffic selectors.
	UsePolicyBasedTrafficSelectors *bool `pulumi:"usePolicyBasedTrafficSelectors"`
	// The reference to virtual network gateway resource.
	VirtualNetworkGateway1 VirtualNetworkGatewayType `pulumi:"virtualNetworkGateway1"`
	// The reference to virtual network gateway resource.
	VirtualNetworkGateway2 *VirtualNetworkGatewayType `pulumi:"virtualNetworkGateway2"`
	// The name of the virtual network gateway connection.
	VirtualNetworkGatewayConnectionName string `pulumi:"virtualNetworkGatewayConnectionName"`
}

// The set of arguments for constructing a VirtualNetworkGatewayConnection resource.
type VirtualNetworkGatewayConnectionArgs struct {
	// The authorizationKey.
	AuthorizationKey pulumi.StringPtrInput
	// The connection mode for this connection.
	ConnectionMode pulumi.StringPtrInput
	// Connection protocol used for this connection.
	ConnectionProtocol pulumi.StringPtrInput
	// Gateway connection type.
	ConnectionType pulumi.StringInput
	// The dead peer detection timeout of this connection in seconds.
	DpdTimeoutSeconds pulumi.IntPtrInput
	// EnableBgp flag.
	EnableBgp pulumi.BoolPtrInput
	// Bypass ExpressRoute Gateway for data forwarding.
	ExpressRouteGatewayBypass pulumi.BoolPtrInput
	// Resource ID.
	Id pulumi.StringPtrInput
	// The IPSec Policies to be considered by this connection.
	IpsecPolicies IpsecPolicyArrayInput
	// The reference to local network gateway resource.
	LocalNetworkGateway2 LocalNetworkGatewayTypePtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// The reference to peerings resource.
	Peer SubResourcePtrInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The routing weight.
	RoutingWeight pulumi.IntPtrInput
	// The IPSec shared key.
	SharedKey pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The Traffic Selector Policies to be considered by this connection.
	TrafficSelectorPolicies TrafficSelectorPolicyArrayInput
	// Use private local Azure IP for the connection.
	UseLocalAzureIpAddress pulumi.BoolPtrInput
	// Enable policy-based traffic selectors.
	UsePolicyBasedTrafficSelectors pulumi.BoolPtrInput
	// The reference to virtual network gateway resource.
	VirtualNetworkGateway1 VirtualNetworkGatewayTypeInput
	// The reference to virtual network gateway resource.
	VirtualNetworkGateway2 VirtualNetworkGatewayTypePtrInput
	// The name of the virtual network gateway connection.
	VirtualNetworkGatewayConnectionName pulumi.StringInput
}

func (VirtualNetworkGatewayConnectionArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*virtualNetworkGatewayConnectionArgs)(nil)).Elem()
}

type VirtualNetworkGatewayConnectionInput interface {
	pulumi.Input

	ToVirtualNetworkGatewayConnectionOutput() VirtualNetworkGatewayConnectionOutput
	ToVirtualNetworkGatewayConnectionOutputWithContext(ctx context.Context) VirtualNetworkGatewayConnectionOutput
}

func (*VirtualNetworkGatewayConnection) ElementType() reflect.Type {
	return reflect.TypeOf((*VirtualNetworkGatewayConnection)(nil))
}

func (i *VirtualNetworkGatewayConnection) ToVirtualNetworkGatewayConnectionOutput() VirtualNetworkGatewayConnectionOutput {
	return i.ToVirtualNetworkGatewayConnectionOutputWithContext(context.Background())
}

func (i *VirtualNetworkGatewayConnection) ToVirtualNetworkGatewayConnectionOutputWithContext(ctx context.Context) VirtualNetworkGatewayConnectionOutput {
	return pulumi.ToOutputWithContext(ctx, i).(VirtualNetworkGatewayConnectionOutput)
}

type VirtualNetworkGatewayConnectionOutput struct {
	*pulumi.OutputState
}

func (VirtualNetworkGatewayConnectionOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*VirtualNetworkGatewayConnection)(nil))
}

func (o VirtualNetworkGatewayConnectionOutput) ToVirtualNetworkGatewayConnectionOutput() VirtualNetworkGatewayConnectionOutput {
	return o
}

func (o VirtualNetworkGatewayConnectionOutput) ToVirtualNetworkGatewayConnectionOutputWithContext(ctx context.Context) VirtualNetworkGatewayConnectionOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(VirtualNetworkGatewayConnectionOutput{})
}
