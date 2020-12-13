// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20181101

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupExpressRouteCircuitConnection(ctx *pulumi.Context, args *LookupExpressRouteCircuitConnectionArgs, opts ...pulumi.InvokeOption) (*LookupExpressRouteCircuitConnectionResult, error) {
	var rv LookupExpressRouteCircuitConnectionResult
	err := ctx.Invoke("azure-nextgen:network/v20181101:getExpressRouteCircuitConnection", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupExpressRouteCircuitConnectionArgs struct {
	// The name of the express route circuit.
	CircuitName string `pulumi:"circuitName"`
	// The name of the express route circuit connection.
	ConnectionName string `pulumi:"connectionName"`
	// The name of the peering.
	PeeringName string `pulumi:"peeringName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Express Route Circuit Connection in an ExpressRouteCircuitPeering resource.
type LookupExpressRouteCircuitConnectionResult struct {
	// /29 IP address space to carve out Customer addresses for tunnels.
	AddressPrefix *string `pulumi:"addressPrefix"`
	// The authorization key.
	AuthorizationKey *string `pulumi:"authorizationKey"`
	// Express Route Circuit Connection State. Possible values are: 'Connected' and 'Disconnected'.
	CircuitConnectionStatus string `pulumi:"circuitConnectionStatus"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag string `pulumi:"etag"`
	// Reference to Express Route Circuit Private Peering Resource of the circuit initiating connection.
	ExpressRouteCircuitPeering *SubResourceResponse `pulumi:"expressRouteCircuitPeering"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name *string `pulumi:"name"`
	// Reference to Express Route Circuit Private Peering Resource of the peered circuit.
	PeerExpressRouteCircuitPeering *SubResourceResponse `pulumi:"peerExpressRouteCircuitPeering"`
	// Provisioning state of the circuit connection resource. Possible values are: 'Succeeded', 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState string `pulumi:"provisioningState"`
}
