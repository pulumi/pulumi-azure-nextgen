// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170801

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupVirtualNetworkGatewayConnection(ctx *pulumi.Context, args *LookupVirtualNetworkGatewayConnectionArgs, opts ...pulumi.InvokeOption) (*LookupVirtualNetworkGatewayConnectionResult, error) {
	var rv LookupVirtualNetworkGatewayConnectionResult
	err := ctx.Invoke("azure-nextgen:network/v20170801:getVirtualNetworkGatewayConnection", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupVirtualNetworkGatewayConnectionArgs struct {
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the virtual network gateway connection.
	VirtualNetworkGatewayConnectionName string `pulumi:"virtualNetworkGatewayConnectionName"`
}

// A common class for general resource information
type LookupVirtualNetworkGatewayConnectionResult struct {
	// The authorizationKey.
	AuthorizationKey *string `pulumi:"authorizationKey"`
	// Virtual network Gateway connection status. Possible values are 'Unknown', 'Connecting', 'Connected' and 'NotConnected'.
	ConnectionStatus string `pulumi:"connectionStatus"`
	// Gateway connection type. Possible values are: 'IPsec','Vnet2Vnet','ExpressRoute', and 'VPNClient.
	ConnectionType string `pulumi:"connectionType"`
	// The egress bytes transferred in this connection.
	EgressBytesTransferred int `pulumi:"egressBytesTransferred"`
	// EnableBgp flag
	EnableBgp *bool `pulumi:"enableBgp"`
	// Gets a unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// The ingress bytes transferred in this connection.
	IngressBytesTransferred int `pulumi:"ingressBytesTransferred"`
	// The IPSec Policies to be considered by this connection.
	IpsecPolicies []IpsecPolicyResponse `pulumi:"ipsecPolicies"`
	// The reference to local network gateway resource.
	LocalNetworkGateway2 *LocalNetworkGatewayResponse `pulumi:"localNetworkGateway2"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name string `pulumi:"name"`
	// The reference to peerings resource.
	Peer *SubResourceResponse `pulumi:"peer"`
	// The provisioning state of the VirtualNetworkGatewayConnection resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState string `pulumi:"provisioningState"`
	// The resource GUID property of the VirtualNetworkGatewayConnection resource.
	ResourceGuid *string `pulumi:"resourceGuid"`
	// The routing weight.
	RoutingWeight *int `pulumi:"routingWeight"`
	// The IPSec shared key.
	SharedKey *string `pulumi:"sharedKey"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Collection of all tunnels' connection health status.
	TunnelConnectionStatus []TunnelConnectionHealthResponse `pulumi:"tunnelConnectionStatus"`
	// Resource type.
	Type string `pulumi:"type"`
	// Enable policy-based traffic selectors.
	UsePolicyBasedTrafficSelectors *bool `pulumi:"usePolicyBasedTrafficSelectors"`
	// The reference to virtual network gateway resource.
	VirtualNetworkGateway1 VirtualNetworkGatewayResponse `pulumi:"virtualNetworkGateway1"`
	// The reference to virtual network gateway resource.
	VirtualNetworkGateway2 *VirtualNetworkGatewayResponse `pulumi:"virtualNetworkGateway2"`
}
