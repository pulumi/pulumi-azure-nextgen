// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupNetworkVirtualAppliance(ctx *pulumi.Context, args *LookupNetworkVirtualApplianceArgs, opts ...pulumi.InvokeOption) (*LookupNetworkVirtualApplianceResult, error) {
	var rv LookupNetworkVirtualApplianceResult
	err := ctx.Invoke("azure-nextgen:network/latest:getNetworkVirtualAppliance", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupNetworkVirtualApplianceArgs struct {
	// Expands referenced resources.
	Expand *string `pulumi:"expand"`
	// The name of Network Virtual Appliance.
	NetworkVirtualApplianceName string `pulumi:"networkVirtualApplianceName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// NetworkVirtualAppliance Resource.
type LookupNetworkVirtualApplianceResult struct {
	// Address Prefix.
	AddressPrefix string `pulumi:"addressPrefix"`
	// BootStrapConfigurationBlobs storage URLs.
	BootStrapConfigurationBlobs []string `pulumi:"bootStrapConfigurationBlobs"`
	// CloudInitConfiguration string in plain text.
	CloudInitConfiguration *string `pulumi:"cloudInitConfiguration"`
	// CloudInitConfigurationBlob storage URLs.
	CloudInitConfigurationBlobs []string `pulumi:"cloudInitConfigurationBlobs"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag string `pulumi:"etag"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// The service principal that has read access to cloud-init and config blob.
	Identity *ManagedServiceIdentityResponse `pulumi:"identity"`
	// List of references to InboundSecurityRules.
	InboundSecurityRules []SubResourceResponse `pulumi:"inboundSecurityRules"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name string `pulumi:"name"`
	// Network Virtual Appliance SKU.
	NvaSku *VirtualApplianceSkuPropertiesResponse `pulumi:"nvaSku"`
	// The provisioning state of the resource.
	ProvisioningState string `pulumi:"provisioningState"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type string `pulumi:"type"`
	// VirtualAppliance ASN.
	VirtualApplianceAsn *int `pulumi:"virtualApplianceAsn"`
	// List of Virtual Appliance Network Interfaces.
	VirtualApplianceNics []VirtualApplianceNicPropertiesResponse `pulumi:"virtualApplianceNics"`
	// List of references to VirtualApplianceSite.
	VirtualApplianceSites []SubResourceResponse `pulumi:"virtualApplianceSites"`
	// The Virtual Hub where Network Virtual Appliance is being deployed.
	VirtualHub *SubResourceResponse `pulumi:"virtualHub"`
}
