// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180601

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupVpnSite(ctx *pulumi.Context, args *LookupVpnSiteArgs, opts ...pulumi.InvokeOption) (*LookupVpnSiteResult, error) {
	var rv LookupVpnSiteResult
	err := ctx.Invoke("azure-nextgen:network/v20180601:getVpnSite", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupVpnSiteArgs struct {
	// The resource group name of the VpnSite.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the VpnSite being retrieved.
	VpnSiteName string `pulumi:"vpnSiteName"`
}

// VpnSite Resource.
type LookupVpnSiteResult struct {
	// The AddressSpace that contains an array of IP address ranges.
	AddressSpace *AddressSpaceResponse `pulumi:"addressSpace"`
	// The set of bgp properties.
	BgpProperties *BgpSettingsResponse `pulumi:"bgpProperties"`
	// The device properties
	DeviceProperties *DevicePropertiesResponse `pulumi:"deviceProperties"`
	// Gets a unique read-only string that changes whenever the resource is updated.
	Etag string `pulumi:"etag"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// The ip-address for the vpn-site.
	IpAddress *string `pulumi:"ipAddress"`
	// Resource location.
	Location string `pulumi:"location"`
	// Resource name.
	Name string `pulumi:"name"`
	// The provisioning state of the resource.
	ProvisioningState string `pulumi:"provisioningState"`
	// The key for vpn-site that can be used for connections.
	SiteKey *string `pulumi:"siteKey"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type string `pulumi:"type"`
	// The VirtualWAN to which the vpnSite belongs
	VirtualWAN *SubResourceResponse `pulumi:"virtualWAN"`
}
