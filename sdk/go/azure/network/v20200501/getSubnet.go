// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200501

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupSubnet(ctx *pulumi.Context, args *LookupSubnetArgs, opts ...pulumi.InvokeOption) (*LookupSubnetResult, error) {
	var rv LookupSubnetResult
	err := ctx.Invoke("azure-nextgen:network/v20200501:getSubnet", args, &rv, opts...)
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
	// List of address prefixes for the subnet.
	AddressPrefixes []string `pulumi:"addressPrefixes"`
	// An array of references to the delegations on the subnet.
	Delegations []DelegationResponse `pulumi:"delegations"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag string `pulumi:"etag"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Array of IpAllocation which reference this subnet.
	IpAllocations []SubResourceResponse `pulumi:"ipAllocations"`
	// Array of IP configuration profiles which reference this subnet.
	IpConfigurationProfiles []IPConfigurationProfileResponse `pulumi:"ipConfigurationProfiles"`
	// An array of references to the network interface IP configurations using subnet.
	IpConfigurations []IPConfigurationResponse `pulumi:"ipConfigurations"`
	// The name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name *string `pulumi:"name"`
	// Nat gateway associated with this subnet.
	NatGateway *SubResourceResponse `pulumi:"natGateway"`
	// The reference to the NetworkSecurityGroup resource.
	NetworkSecurityGroup *NetworkSecurityGroupResponse `pulumi:"networkSecurityGroup"`
	// Enable or Disable apply network policies on private end point in the subnet.
	PrivateEndpointNetworkPolicies *string `pulumi:"privateEndpointNetworkPolicies"`
	// An array of references to private endpoints.
	PrivateEndpoints []PrivateEndpointResponse `pulumi:"privateEndpoints"`
	// Enable or Disable apply network policies on private link service in the subnet.
	PrivateLinkServiceNetworkPolicies *string `pulumi:"privateLinkServiceNetworkPolicies"`
	// The provisioning state of the subnet resource.
	ProvisioningState string `pulumi:"provisioningState"`
	// A read-only string identifying the intention of use for this subnet based on delegations and other user-defined properties.
	Purpose string `pulumi:"purpose"`
	// An array of references to the external resources using subnet.
	ResourceNavigationLinks []ResourceNavigationLinkResponse `pulumi:"resourceNavigationLinks"`
	// The reference to the RouteTable resource.
	RouteTable *RouteTableResponse `pulumi:"routeTable"`
	// An array of references to services injecting into this subnet.
	ServiceAssociationLinks []ServiceAssociationLinkResponse `pulumi:"serviceAssociationLinks"`
	// An array of service endpoint policies.
	ServiceEndpointPolicies []ServiceEndpointPolicyResponse `pulumi:"serviceEndpointPolicies"`
	// An array of service endpoints.
	ServiceEndpoints []ServiceEndpointPropertiesFormatResponse `pulumi:"serviceEndpoints"`
}
