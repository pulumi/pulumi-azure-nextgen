// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20150501preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupExpressRouteCircuitAuthorization(ctx *pulumi.Context, args *LookupExpressRouteCircuitAuthorizationArgs, opts ...pulumi.InvokeOption) (*LookupExpressRouteCircuitAuthorizationResult, error) {
	var rv LookupExpressRouteCircuitAuthorizationResult
	err := ctx.Invoke("azure-nextgen:network/v20150501preview:getExpressRouteCircuitAuthorization", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupExpressRouteCircuitAuthorizationArgs struct {
	// The name of the authorization.
	AuthorizationName string `pulumi:"authorizationName"`
	// The name of the express route circuit.
	CircuitName string `pulumi:"circuitName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Authorization in a ExpressRouteCircuit resource
type LookupExpressRouteCircuitAuthorizationResult struct {
	// Gets or sets the authorization key
	AuthorizationKey *string `pulumi:"authorizationKey"`
	// Gets or sets AuthorizationUseStatus
	AuthorizationUseStatus *string `pulumi:"authorizationUseStatus"`
	// A unique read-only string that changes whenever the resource is updated
	Etag *string `pulumi:"etag"`
	// Resource Id
	Id *string `pulumi:"id"`
	// Gets name of the resource that is unique within a resource group. This name can be used to access the resource
	Name *string `pulumi:"name"`
	// Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
	ProvisioningState *string `pulumi:"provisioningState"`
}
