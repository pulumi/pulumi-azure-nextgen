// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20181001

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupVirtualNetworkGateway(ctx *pulumi.Context, args *LookupVirtualNetworkGatewayArgs, opts ...pulumi.InvokeOption) (*LookupVirtualNetworkGatewayResult, error) {
	var rv LookupVirtualNetworkGatewayResult
	err := ctx.Invoke("azure-nextgen:network/v20181001:getVirtualNetworkGateway", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupVirtualNetworkGatewayArgs struct {
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the virtual network gateway.
	VirtualNetworkGatewayName string `pulumi:"virtualNetworkGatewayName"`
}

// A common class for general resource information
type LookupVirtualNetworkGatewayResult struct {
	// ActiveActive flag
	ActiveActive *bool `pulumi:"activeActive"`
	// Virtual network gateway's BGP speaker settings.
	BgpSettings *BgpSettingsResponse `pulumi:"bgpSettings"`
	// Whether BGP is enabled for this virtual network gateway or not.
	EnableBgp *bool `pulumi:"enableBgp"`
	// Gets a unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// The reference of the LocalNetworkGateway resource which represents local network site having default routes. Assign Null value in case of removing existing default site setting.
	GatewayDefaultSite *SubResourceResponse `pulumi:"gatewayDefaultSite"`
	// The type of this virtual network gateway. Possible values are: 'Vpn' and 'ExpressRoute'.
	GatewayType *string `pulumi:"gatewayType"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// IP configurations for virtual network gateway.
	IpConfigurations []VirtualNetworkGatewayIPConfigurationResponse `pulumi:"ipConfigurations"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name string `pulumi:"name"`
	// The provisioning state of the VirtualNetworkGateway resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState string `pulumi:"provisioningState"`
	// The resource GUID property of the VirtualNetworkGateway resource.
	ResourceGuid *string `pulumi:"resourceGuid"`
	// The reference of the VirtualNetworkGatewaySku resource which represents the SKU selected for Virtual network gateway.
	Sku *VirtualNetworkGatewaySkuResponse `pulumi:"sku"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type string `pulumi:"type"`
	// The reference of the VpnClientConfiguration resource which represents the P2S VpnClient configurations.
	VpnClientConfiguration *VpnClientConfigurationResponse `pulumi:"vpnClientConfiguration"`
	// The type of this virtual network gateway. Possible values are: 'PolicyBased' and 'RouteBased'.
	VpnType *string `pulumi:"vpnType"`
}
