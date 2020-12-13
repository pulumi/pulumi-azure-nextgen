// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20181001

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupExpressRouteConnection(ctx *pulumi.Context, args *LookupExpressRouteConnectionArgs, opts ...pulumi.InvokeOption) (*LookupExpressRouteConnectionResult, error) {
	var rv LookupExpressRouteConnectionResult
	err := ctx.Invoke("azure-nextgen:network/v20181001:getExpressRouteConnection", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupExpressRouteConnectionArgs struct {
	// The name of the ExpressRoute connection.
	ConnectionName string `pulumi:"connectionName"`
	// The name of the ExpressRoute gateway.
	ExpressRouteGatewayName string `pulumi:"expressRouteGatewayName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// ExpressRouteConnection resource.
type LookupExpressRouteConnectionResult struct {
	// Authorization key to establish the connection.
	AuthorizationKey *string `pulumi:"authorizationKey"`
	// The ExpressRoute circuit peering.
	ExpressRouteCircuitPeering ExpressRouteCircuitPeeringIdResponse `pulumi:"expressRouteCircuitPeering"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// The name of the resource.
	Name string `pulumi:"name"`
	// The provisioning state of the resource.
	ProvisioningState string `pulumi:"provisioningState"`
	// The routing weight associated to the connection.
	RoutingWeight *int `pulumi:"routingWeight"`
}
