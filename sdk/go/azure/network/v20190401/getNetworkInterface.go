// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190401

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupNetworkInterface(ctx *pulumi.Context, args *LookupNetworkInterfaceArgs, opts ...pulumi.InvokeOption) (*LookupNetworkInterfaceResult, error) {
	var rv LookupNetworkInterfaceResult
	err := ctx.Invoke("azure-nextgen:network/v20190401:getNetworkInterface", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupNetworkInterfaceArgs struct {
	// Expands referenced resources.
	Expand *string `pulumi:"expand"`
	// The name of the network interface.
	NetworkInterfaceName string `pulumi:"networkInterfaceName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// A network interface in a resource group.
type LookupNetworkInterfaceResult struct {
	// The DNS settings in network interface.
	DnsSettings *NetworkInterfaceDnsSettingsResponse `pulumi:"dnsSettings"`
	// If the network interface is accelerated networking enabled.
	EnableAcceleratedNetworking *bool `pulumi:"enableAcceleratedNetworking"`
	// Indicates whether IP forwarding is enabled on this network interface.
	EnableIPForwarding *bool `pulumi:"enableIPForwarding"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// A list of references to linked BareMetal resources.
	HostedWorkloads []string `pulumi:"hostedWorkloads"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// A list of IPConfigurations of the network interface.
	IpConfigurations []NetworkInterfaceIPConfigurationResponse `pulumi:"ipConfigurations"`
	// Resource location.
	Location *string `pulumi:"location"`
	// The MAC address of the network interface.
	MacAddress *string `pulumi:"macAddress"`
	// Resource name.
	Name string `pulumi:"name"`
	// The reference of the NetworkSecurityGroup resource.
	NetworkSecurityGroup *NetworkSecurityGroupResponse `pulumi:"networkSecurityGroup"`
	// Gets whether this is a primary network interface on a virtual machine.
	Primary *bool `pulumi:"primary"`
	// A reference to the private endpoint to which the network interface is linked.
	PrivateEndpoint PrivateEndpointResponse `pulumi:"privateEndpoint"`
	// The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The resource GUID property of the network interface resource.
	ResourceGuid *string `pulumi:"resourceGuid"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// A list of TapConfigurations of the network interface.
	TapConfigurations []NetworkInterfaceTapConfigurationResponse `pulumi:"tapConfigurations"`
	// Resource type.
	Type string `pulumi:"type"`
	// The reference of a virtual machine.
	VirtualMachine SubResourceResponse `pulumi:"virtualMachine"`
}
