// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200401

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupExpressRouteCircuit(ctx *pulumi.Context, args *LookupExpressRouteCircuitArgs, opts ...pulumi.InvokeOption) (*LookupExpressRouteCircuitResult, error) {
	var rv LookupExpressRouteCircuitResult
	err := ctx.Invoke("azure-nextgen:network/v20200401:getExpressRouteCircuit", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupExpressRouteCircuitArgs struct {
	// The name of express route circuit.
	CircuitName string `pulumi:"circuitName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// ExpressRouteCircuit resource.
type LookupExpressRouteCircuitResult struct {
	// Allow classic operations.
	AllowClassicOperations *bool `pulumi:"allowClassicOperations"`
	// The list of authorizations.
	Authorizations []ExpressRouteCircuitAuthorizationResponse `pulumi:"authorizations"`
	// The bandwidth of the circuit when the circuit is provisioned on an ExpressRoutePort resource.
	BandwidthInGbps *float64 `pulumi:"bandwidthInGbps"`
	// The CircuitProvisioningState state of the resource.
	CircuitProvisioningState *string `pulumi:"circuitProvisioningState"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag string `pulumi:"etag"`
	// The reference to the ExpressRoutePort resource when the circuit is provisioned on an ExpressRoutePort resource.
	ExpressRoutePort *SubResourceResponse `pulumi:"expressRoutePort"`
	// The GatewayManager Etag.
	GatewayManagerEtag *string `pulumi:"gatewayManagerEtag"`
	// Flag denoting global reach status.
	GlobalReachEnabled *bool `pulumi:"globalReachEnabled"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name string `pulumi:"name"`
	// The list of peerings.
	Peerings []ExpressRouteCircuitPeeringResponse `pulumi:"peerings"`
	// The provisioning state of the express route circuit resource.
	ProvisioningState string `pulumi:"provisioningState"`
	// The ServiceKey.
	ServiceKey *string `pulumi:"serviceKey"`
	// The ServiceProviderNotes.
	ServiceProviderNotes *string `pulumi:"serviceProviderNotes"`
	// The ServiceProviderProperties.
	ServiceProviderProperties *ExpressRouteCircuitServiceProviderPropertiesResponse `pulumi:"serviceProviderProperties"`
	// The ServiceProviderProvisioningState state of the resource.
	ServiceProviderProvisioningState *string `pulumi:"serviceProviderProvisioningState"`
	// The SKU.
	Sku *ExpressRouteCircuitSkuResponse `pulumi:"sku"`
	// The identifier of the circuit traffic. Outer tag for QinQ encapsulation.
	Stag int `pulumi:"stag"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type string `pulumi:"type"`
}
