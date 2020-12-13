// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170601

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupExpressRouteCircuit(ctx *pulumi.Context, args *LookupExpressRouteCircuitArgs, opts ...pulumi.InvokeOption) (*LookupExpressRouteCircuitResult, error) {
	var rv LookupExpressRouteCircuitResult
	err := ctx.Invoke("azure-nextgen:network/v20170601:getExpressRouteCircuit", args, &rv, opts...)
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

// ExpressRouteCircuit resource
type LookupExpressRouteCircuitResult struct {
	// Allow classic operations
	AllowClassicOperations *bool `pulumi:"allowClassicOperations"`
	// The list of authorizations.
	Authorizations []ExpressRouteCircuitAuthorizationResponse `pulumi:"authorizations"`
	// The CircuitProvisioningState state of the resource.
	CircuitProvisioningState *string `pulumi:"circuitProvisioningState"`
	// Gets a unique read-only string that changes whenever the resource is updated.
	Etag string `pulumi:"etag"`
	// The GatewayManager Etag.
	GatewayManagerEtag *string `pulumi:"gatewayManagerEtag"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name string `pulumi:"name"`
	// The list of peerings.
	Peerings []ExpressRouteCircuitPeeringResponse `pulumi:"peerings"`
	// Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The ServiceKey.
	ServiceKey *string `pulumi:"serviceKey"`
	// The ServiceProviderNotes.
	ServiceProviderNotes *string `pulumi:"serviceProviderNotes"`
	// The ServiceProviderProperties.
	ServiceProviderProperties *ExpressRouteCircuitServiceProviderPropertiesResponse `pulumi:"serviceProviderProperties"`
	// The ServiceProviderProvisioningState state of the resource. Possible values are 'NotProvisioned', 'Provisioning', 'Provisioned', and 'Deprovisioning'.
	ServiceProviderProvisioningState *string `pulumi:"serviceProviderProvisioningState"`
	// The SKU.
	Sku *ExpressRouteCircuitSkuResponse `pulumi:"sku"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type string `pulumi:"type"`
}
