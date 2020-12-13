// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200301

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupVirtualRouterPeering(ctx *pulumi.Context, args *LookupVirtualRouterPeeringArgs, opts ...pulumi.InvokeOption) (*LookupVirtualRouterPeeringResult, error) {
	var rv LookupVirtualRouterPeeringResult
	err := ctx.Invoke("azure-nextgen:network/v20200301:getVirtualRouterPeering", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupVirtualRouterPeeringArgs struct {
	// The name of the Virtual Router Peering.
	PeeringName string `pulumi:"peeringName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the Virtual Router.
	VirtualRouterName string `pulumi:"virtualRouterName"`
}

// Virtual Router Peering resource.
type LookupVirtualRouterPeeringResult struct {
	// A unique read-only string that changes whenever the resource is updated.
	Etag string `pulumi:"etag"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Name of the virtual router peering that is unique within a virtual router.
	Name *string `pulumi:"name"`
	// Peer ASN.
	PeerAsn *int `pulumi:"peerAsn"`
	// Peer IP.
	PeerIp *string `pulumi:"peerIp"`
	// The provisioning state of the resource.
	ProvisioningState string `pulumi:"provisioningState"`
	// Peering type.
	Type string `pulumi:"type"`
}
