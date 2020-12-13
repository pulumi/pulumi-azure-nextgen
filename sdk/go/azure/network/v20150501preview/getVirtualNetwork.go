// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20150501preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupVirtualNetwork(ctx *pulumi.Context, args *LookupVirtualNetworkArgs, opts ...pulumi.InvokeOption) (*LookupVirtualNetworkResult, error) {
	var rv LookupVirtualNetworkResult
	err := ctx.Invoke("azure-nextgen:network/v20150501preview:getVirtualNetwork", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupVirtualNetworkArgs struct {
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the virtual network.
	VirtualNetworkName string `pulumi:"virtualNetworkName"`
}

// Virtual Network resource
type LookupVirtualNetworkResult struct {
	// Gets or sets AddressSpace that contains an array of IP address ranges that can be used by subnets
	AddressSpace *AddressSpaceResponse `pulumi:"addressSpace"`
	// Gets or sets DHCPOptions that contains an array of DNS servers available to VMs deployed in the virtual network
	DhcpOptions *DhcpOptionsResponse `pulumi:"dhcpOptions"`
	// Gets a unique read-only string that changes whenever the resource is updated
	Etag *string `pulumi:"etag"`
	// Resource Id
	Id string `pulumi:"id"`
	// Resource location
	Location string `pulumi:"location"`
	// Resource name
	Name string `pulumi:"name"`
	// Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
	ProvisioningState *string `pulumi:"provisioningState"`
	// Gets or sets resource guid property of the VirtualNetwork resource
	ResourceGuid *string `pulumi:"resourceGuid"`
	// Gets or sets List of subnets in a VirtualNetwork
	Subnets []SubnetResponse `pulumi:"subnets"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type string `pulumi:"type"`
}
