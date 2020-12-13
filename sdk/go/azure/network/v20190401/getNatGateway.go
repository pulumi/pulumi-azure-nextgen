// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190401

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupNatGateway(ctx *pulumi.Context, args *LookupNatGatewayArgs, opts ...pulumi.InvokeOption) (*LookupNatGatewayResult, error) {
	var rv LookupNatGatewayResult
	err := ctx.Invoke("azure-nextgen:network/v20190401:getNatGateway", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupNatGatewayArgs struct {
	// Expands referenced resources.
	Expand *string `pulumi:"expand"`
	// The name of the nat gateway.
	NatGatewayName string `pulumi:"natGatewayName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Nat Gateway resource.
type LookupNatGatewayResult struct {
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// The idle timeout of the nat gateway.
	IdleTimeoutInMinutes *int `pulumi:"idleTimeoutInMinutes"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name string `pulumi:"name"`
	// The provisioning state of the NatGateway resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState *string `pulumi:"provisioningState"`
	// An array of public ip addresses associated with the nat gateway resource.
	PublicIpAddresses []SubResourceResponse `pulumi:"publicIpAddresses"`
	// An array of public ip prefixes associated with the nat gateway resource.
	PublicIpPrefixes []SubResourceResponse `pulumi:"publicIpPrefixes"`
	// The resource GUID property of the nat gateway resource.
	ResourceGuid *string `pulumi:"resourceGuid"`
	// The nat gateway SKU.
	Sku *NatGatewaySkuResponse `pulumi:"sku"`
	// An array of references to the subnets using this nat gateway resource.
	Subnets []SubResourceResponse `pulumi:"subnets"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type string `pulumi:"type"`
	// A list of availability zones denoting the zone in which Nat Gateway should be deployed.
	Zones []string `pulumi:"zones"`
}
