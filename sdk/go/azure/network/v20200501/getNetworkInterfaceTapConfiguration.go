// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200501

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupNetworkInterfaceTapConfiguration(ctx *pulumi.Context, args *LookupNetworkInterfaceTapConfigurationArgs, opts ...pulumi.InvokeOption) (*LookupNetworkInterfaceTapConfigurationResult, error) {
	var rv LookupNetworkInterfaceTapConfigurationResult
	err := ctx.Invoke("azure-nextgen:network/v20200501:getNetworkInterfaceTapConfiguration", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupNetworkInterfaceTapConfigurationArgs struct {
	// The name of the network interface.
	NetworkInterfaceName string `pulumi:"networkInterfaceName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the tap configuration.
	TapConfigurationName string `pulumi:"tapConfigurationName"`
}

// Tap configuration in a Network Interface.
type LookupNetworkInterfaceTapConfigurationResult struct {
	// A unique read-only string that changes whenever the resource is updated.
	Etag string `pulumi:"etag"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// The name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name *string `pulumi:"name"`
	// The provisioning state of the network interface tap configuration resource.
	ProvisioningState string `pulumi:"provisioningState"`
	// Sub Resource type.
	Type string `pulumi:"type"`
	// The reference to the Virtual Network Tap resource.
	VirtualNetworkTap *VirtualNetworkTapResponse `pulumi:"virtualNetworkTap"`
}
