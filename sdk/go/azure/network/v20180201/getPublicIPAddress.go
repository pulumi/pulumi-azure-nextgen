// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180201

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupPublicIPAddress(ctx *pulumi.Context, args *LookupPublicIPAddressArgs, opts ...pulumi.InvokeOption) (*LookupPublicIPAddressResult, error) {
	var rv LookupPublicIPAddressResult
	err := ctx.Invoke("azure-nextgen:network/v20180201:getPublicIPAddress", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupPublicIPAddressArgs struct {
	// Expands referenced resources.
	Expand *string `pulumi:"expand"`
	// The name of the subnet.
	PublicIpAddressName string `pulumi:"publicIpAddressName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Public IP address resource.
type LookupPublicIPAddressResult struct {
	// The FQDN of the DNS record associated with the public IP address.
	DnsSettings *PublicIPAddressDnsSettingsResponse `pulumi:"dnsSettings"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// The idle timeout of the public IP address.
	IdleTimeoutInMinutes *int `pulumi:"idleTimeoutInMinutes"`
	// The IP address associated with the public IP address resource.
	IpAddress *string `pulumi:"ipAddress"`
	// The IP configuration associated with the public IP address.
	IpConfiguration IPConfigurationResponse `pulumi:"ipConfiguration"`
	// The list of tags associated with the public IP address.
	IpTags []IpTagResponse `pulumi:"ipTags"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name string `pulumi:"name"`
	// The provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The public IP address version. Possible values are: 'IPv4' and 'IPv6'.
	PublicIPAddressVersion *string `pulumi:"publicIPAddressVersion"`
	// The public IP allocation method. Possible values are: 'Static' and 'Dynamic'.
	PublicIPAllocationMethod *string `pulumi:"publicIPAllocationMethod"`
	// The resource GUID property of the public IP resource.
	ResourceGuid *string `pulumi:"resourceGuid"`
	// The public IP address SKU.
	Sku *PublicIPAddressSkuResponse `pulumi:"sku"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type string `pulumi:"type"`
	// A list of availability zones denoting the IP allocated for the resource needs to come from.
	Zones []string `pulumi:"zones"`
}
