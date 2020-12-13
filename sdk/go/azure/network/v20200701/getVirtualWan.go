// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200701

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupVirtualWan(ctx *pulumi.Context, args *LookupVirtualWanArgs, opts ...pulumi.InvokeOption) (*LookupVirtualWanResult, error) {
	var rv LookupVirtualWanResult
	err := ctx.Invoke("azure-nextgen:network/v20200701:getVirtualWan", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupVirtualWanArgs struct {
	// The resource group name of the VirtualWan.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the VirtualWAN being retrieved.
	VirtualWANName string `pulumi:"virtualWANName"`
}

// VirtualWAN Resource.
type LookupVirtualWanResult struct {
	// True if branch to branch traffic is allowed.
	AllowBranchToBranchTraffic *bool `pulumi:"allowBranchToBranchTraffic"`
	// True if Vnet to Vnet traffic is allowed.
	AllowVnetToVnetTraffic *bool `pulumi:"allowVnetToVnetTraffic"`
	// Vpn encryption to be disabled or not.
	DisableVpnEncryption *bool `pulumi:"disableVpnEncryption"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag string `pulumi:"etag"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Resource location.
	Location string `pulumi:"location"`
	// Resource name.
	Name string `pulumi:"name"`
	// The office local breakout category.
	Office365LocalBreakoutCategory string `pulumi:"office365LocalBreakoutCategory"`
	// The provisioning state of the virtual WAN resource.
	ProvisioningState string `pulumi:"provisioningState"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type string `pulumi:"type"`
	// List of VirtualHubs in the VirtualWAN.
	VirtualHubs []SubResourceResponse `pulumi:"virtualHubs"`
	// List of VpnSites in the VirtualWAN.
	VpnSites []SubResourceResponse `pulumi:"vpnSites"`
}
