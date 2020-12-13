// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200501

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupVirtualHubIpConfiguration(ctx *pulumi.Context, args *LookupVirtualHubIpConfigurationArgs, opts ...pulumi.InvokeOption) (*LookupVirtualHubIpConfigurationResult, error) {
	var rv LookupVirtualHubIpConfigurationResult
	err := ctx.Invoke("azure-nextgen:network/v20200501:getVirtualHubIpConfiguration", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupVirtualHubIpConfigurationArgs struct {
	// The name of the ipconfig.
	IpConfigName string `pulumi:"ipConfigName"`
	// The resource group name of the VirtualHub.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the VirtualHub.
	VirtualHubName string `pulumi:"virtualHubName"`
}

// IpConfigurations.
type LookupVirtualHubIpConfigurationResult struct {
	// A unique read-only string that changes whenever the resource is updated.
	Etag string `pulumi:"etag"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Name of the Ip Configuration.
	Name *string `pulumi:"name"`
	// The private IP address of the IP configuration.
	PrivateIPAddress *string `pulumi:"privateIPAddress"`
	// The private IP address allocation method.
	PrivateIPAllocationMethod *string `pulumi:"privateIPAllocationMethod"`
	// The provisioning state of the IP configuration resource.
	ProvisioningState string `pulumi:"provisioningState"`
	// The reference to the public IP resource.
	PublicIPAddress *PublicIPAddressResponse `pulumi:"publicIPAddress"`
	// The reference to the subnet resource.
	Subnet *SubnetResponse `pulumi:"subnet"`
	// Ipconfiguration type.
	Type string `pulumi:"type"`
}
