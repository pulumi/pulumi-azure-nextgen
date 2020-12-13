// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200320

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupPrivateCloud(ctx *pulumi.Context, args *LookupPrivateCloudArgs, opts ...pulumi.InvokeOption) (*LookupPrivateCloudResult, error) {
	var rv LookupPrivateCloudResult
	err := ctx.Invoke("azure-nextgen:avs/v20200320:getPrivateCloud", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupPrivateCloudArgs struct {
	// Name of the private cloud
	PrivateCloudName string `pulumi:"privateCloudName"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// A private cloud resource
type LookupPrivateCloudResult struct {
	// An ExpressRoute Circuit
	Circuit *CircuitResponse `pulumi:"circuit"`
	// The endpoints
	Endpoints EndpointsResponse `pulumi:"endpoints"`
	// Resource ID.
	Id string `pulumi:"id"`
	// vCenter Single Sign On Identity Sources
	IdentitySources []IdentitySourceResponse `pulumi:"identitySources"`
	// Connectivity to internet is enabled or disabled
	Internet *string `pulumi:"internet"`
	// Resource location
	Location string `pulumi:"location"`
	// The default cluster used for management
	ManagementCluster ManagementClusterResponse `pulumi:"managementCluster"`
	// Network used to access vCenter Server and NSX-T Manager
	ManagementNetwork string `pulumi:"managementNetwork"`
	// Resource name.
	Name string `pulumi:"name"`
	// The block of addresses should be unique across VNet in your subscription as well as on-premise. Make sure the CIDR format is conformed to (A.B.C.D/X) where A,B,C,D are between 0 and 255, and X is between 0 and 22
	NetworkBlock string `pulumi:"networkBlock"`
	// Thumbprint of the NSX-T Manager SSL certificate
	NsxtCertificateThumbprint string `pulumi:"nsxtCertificateThumbprint"`
	// Optionally, set the NSX-T Manager password when the private cloud is created
	NsxtPassword *string `pulumi:"nsxtPassword"`
	// Used for virtual machine cold migration, cloning, and snapshot migration
	ProvisioningNetwork string `pulumi:"provisioningNetwork"`
	// The provisioning state
	ProvisioningState string `pulumi:"provisioningState"`
	// The private cloud SKU
	Sku SkuResponse `pulumi:"sku"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type string `pulumi:"type"`
	// Thumbprint of the vCenter Server SSL certificate
	VcenterCertificateThumbprint string `pulumi:"vcenterCertificateThumbprint"`
	// Optionally, set the vCenter admin password when the private cloud is created
	VcenterPassword *string `pulumi:"vcenterPassword"`
	// Used for live migration of virtual machines
	VmotionNetwork string `pulumi:"vmotionNetwork"`
}
