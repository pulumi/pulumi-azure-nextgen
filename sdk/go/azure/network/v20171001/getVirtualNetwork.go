// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20171001

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupVirtualNetwork(ctx *pulumi.Context, args *LookupVirtualNetworkArgs, opts ...pulumi.InvokeOption) (*LookupVirtualNetworkResult, error) {
	var rv LookupVirtualNetworkResult
	err := ctx.Invoke("azure-nextgen:network/v20171001:getVirtualNetwork", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupVirtualNetworkArgs struct {
	// Expands referenced resources.
	Expand *string `pulumi:"expand"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the virtual network.
	VirtualNetworkName string `pulumi:"virtualNetworkName"`
}

// Virtual Network resource.
type LookupVirtualNetworkResult struct {
	// The AddressSpace that contains an array of IP address ranges that can be used by subnets.
	AddressSpace *AddressSpaceResponse `pulumi:"addressSpace"`
	// The dhcpOptions that contains an array of DNS servers available to VMs deployed in the virtual network.
	DhcpOptions *DhcpOptionsResponse `pulumi:"dhcpOptions"`
	// Indicates if DDoS protection is enabled for all the protected resources in a Virtual Network.
	EnableDdosProtection *bool `pulumi:"enableDdosProtection"`
	// Indicates if Vm protection is enabled for all the subnets in a Virtual Network.
	EnableVmProtection *bool `pulumi:"enableVmProtection"`
	// Gets a unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name string `pulumi:"name"`
	// The provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The resourceGuid property of the Virtual Network resource.
	ResourceGuid *string `pulumi:"resourceGuid"`
	// A list of subnets in a Virtual Network.
	Subnets []SubnetResponse `pulumi:"subnets"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type string `pulumi:"type"`
	// A list of peerings in a Virtual Network.
	VirtualNetworkPeerings []VirtualNetworkPeeringResponse `pulumi:"virtualNetworkPeerings"`
}
