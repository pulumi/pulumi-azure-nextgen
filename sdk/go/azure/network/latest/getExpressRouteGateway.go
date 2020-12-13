// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupExpressRouteGateway(ctx *pulumi.Context, args *LookupExpressRouteGatewayArgs, opts ...pulumi.InvokeOption) (*LookupExpressRouteGatewayResult, error) {
	var rv LookupExpressRouteGatewayResult
	err := ctx.Invoke("azure-nextgen:network/latest:getExpressRouteGateway", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupExpressRouteGatewayArgs struct {
	// The name of the ExpressRoute gateway.
	ExpressRouteGatewayName string `pulumi:"expressRouteGatewayName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// ExpressRoute gateway resource.
type LookupExpressRouteGatewayResult struct {
	// Configuration for auto scaling.
	AutoScaleConfiguration *ExpressRouteGatewayPropertiesResponseAutoScaleConfiguration `pulumi:"autoScaleConfiguration"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag string `pulumi:"etag"`
	// List of ExpressRoute connections to the ExpressRoute gateway.
	ExpressRouteConnections []ExpressRouteConnectionResponse `pulumi:"expressRouteConnections"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name string `pulumi:"name"`
	// The provisioning state of the express route gateway resource.
	ProvisioningState string `pulumi:"provisioningState"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type string `pulumi:"type"`
	// The Virtual Hub where the ExpressRoute gateway is or will be deployed.
	VirtualHub VirtualHubIdResponse `pulumi:"virtualHub"`
}
