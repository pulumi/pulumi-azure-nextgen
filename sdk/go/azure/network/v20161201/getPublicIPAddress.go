// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20161201

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupPublicIPAddress(ctx *pulumi.Context, args *LookupPublicIPAddressArgs, opts ...pulumi.InvokeOption) (*LookupPublicIPAddressResult, error) {
	var rv LookupPublicIPAddressResult
	err := ctx.Invoke("azure-nextgen:network/v20161201:getPublicIPAddress", args, &rv, opts...)
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
	IdleTimeoutInMinutes *int    `pulumi:"idleTimeoutInMinutes"`
	IpAddress            *string `pulumi:"ipAddress"`
	// IPConfiguration
	IpConfiguration IPConfigurationResponse `pulumi:"ipConfiguration"`
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
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type string `pulumi:"type"`
}
