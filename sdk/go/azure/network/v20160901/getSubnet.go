// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20160901

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupSubnet(ctx *pulumi.Context, args *LookupSubnetArgs, opts ...pulumi.InvokeOption) (*LookupSubnetResult, error) {
	var rv LookupSubnetResult
	err := ctx.Invoke("azure-nextgen:network/v20160901:getSubnet", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupSubnetArgs struct {
	// Expands referenced resources.
	Expand *string `pulumi:"expand"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the subnet.
	SubnetName string `pulumi:"subnetName"`
	// The name of the virtual network.
	VirtualNetworkName string `pulumi:"virtualNetworkName"`
}

// Subnet in a virtual network resource.
type LookupSubnetResult struct {
	// The address prefix for the subnet.
	AddressPrefix *string `pulumi:"addressPrefix"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Gets an array of references to the network interface IP configurations using subnet.
	IpConfigurations []IPConfigurationResponse `pulumi:"ipConfigurations"`
	// The name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name *string `pulumi:"name"`
	// The reference of the NetworkSecurityGroup resource.
	NetworkSecurityGroup *NetworkSecurityGroupResponse `pulumi:"networkSecurityGroup"`
	// The provisioning state of the resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Gets an array of references to the external resources using subnet.
	ResourceNavigationLinks []ResourceNavigationLinkResponse `pulumi:"resourceNavigationLinks"`
	// The reference of the RouteTable resource.
	RouteTable *RouteTableResponse `pulumi:"routeTable"`
}
