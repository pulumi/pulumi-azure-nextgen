// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20160330

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A NetworkInterface in a resource group
type NetworkInterface struct {
	pulumi.CustomResourceState

	// Gets or sets DNS Settings in  NetworkInterface
	DnsSettings NetworkInterfaceDnsSettingsResponsePtrOutput `pulumi:"dnsSettings"`
	// Gets or sets whether IPForwarding is enabled on the NIC
	EnableIPForwarding pulumi.BoolPtrOutput `pulumi:"enableIPForwarding"`
	// Gets a unique read-only string that changes whenever the resource is updated
	Etag pulumi.StringPtrOutput `pulumi:"etag"`
	// Gets or sets list of IPConfigurations of the NetworkInterface
	IpConfigurations NetworkInterfaceIPConfigurationResponseArrayOutput `pulumi:"ipConfigurations"`
	// Resource location
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Gets the MAC Address of the network interface
	MacAddress pulumi.StringPtrOutput `pulumi:"macAddress"`
	// Resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// Gets or sets the reference of the NetworkSecurityGroup resource
	NetworkSecurityGroup NetworkSecurityGroupResponsePtrOutput `pulumi:"networkSecurityGroup"`
	// Gets whether this is a primary NIC on a virtual machine
	Primary pulumi.BoolPtrOutput `pulumi:"primary"`
	// Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
	ProvisioningState pulumi.StringPtrOutput `pulumi:"provisioningState"`
	// Gets or sets resource GUID property of the network interface resource
	ResourceGuid pulumi.StringPtrOutput `pulumi:"resourceGuid"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
	// Gets or sets the reference of a VirtualMachine
	VirtualMachine SubResourceResponsePtrOutput `pulumi:"virtualMachine"`
}

// NewNetworkInterface registers a new resource with the given unique name, arguments, and options.
func NewNetworkInterface(ctx *pulumi.Context,
	name string, args *NetworkInterfaceArgs, opts ...pulumi.ResourceOption) (*NetworkInterface, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.NetworkInterfaceName == nil {
		return nil, errors.New("invalid value for required argument 'NetworkInterfaceName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/latest:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20150501preview:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20150615:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160601:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160901:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20161201:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170301:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170601:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170801:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170901:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20171001:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20171101:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180101:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180201:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180401:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180601:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180701:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180801:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181001:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181101:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181201:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190201:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190401:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190601:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190701:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190801:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190901:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191101:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191201:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200301:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200401:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200501:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200601:NetworkInterface"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200701:NetworkInterface"),
		},
	})
	opts = append(opts, aliases)
	var resource NetworkInterface
	err := ctx.RegisterResource("azure-nextgen:network/v20160330:NetworkInterface", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetNetworkInterface gets an existing NetworkInterface resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetNetworkInterface(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *NetworkInterfaceState, opts ...pulumi.ResourceOption) (*NetworkInterface, error) {
	var resource NetworkInterface
	err := ctx.ReadResource("azure-nextgen:network/v20160330:NetworkInterface", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering NetworkInterface resources.
type networkInterfaceState struct {
	// Gets or sets DNS Settings in  NetworkInterface
	DnsSettings *NetworkInterfaceDnsSettingsResponse `pulumi:"dnsSettings"`
	// Gets or sets whether IPForwarding is enabled on the NIC
	EnableIPForwarding *bool `pulumi:"enableIPForwarding"`
	// Gets a unique read-only string that changes whenever the resource is updated
	Etag *string `pulumi:"etag"`
	// Gets or sets list of IPConfigurations of the NetworkInterface
	IpConfigurations []NetworkInterfaceIPConfigurationResponse `pulumi:"ipConfigurations"`
	// Resource location
	Location *string `pulumi:"location"`
	// Gets the MAC Address of the network interface
	MacAddress *string `pulumi:"macAddress"`
	// Resource name
	Name *string `pulumi:"name"`
	// Gets or sets the reference of the NetworkSecurityGroup resource
	NetworkSecurityGroup *NetworkSecurityGroupResponse `pulumi:"networkSecurityGroup"`
	// Gets whether this is a primary NIC on a virtual machine
	Primary *bool `pulumi:"primary"`
	// Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
	ProvisioningState *string `pulumi:"provisioningState"`
	// Gets or sets resource GUID property of the network interface resource
	ResourceGuid *string `pulumi:"resourceGuid"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type *string `pulumi:"type"`
	// Gets or sets the reference of a VirtualMachine
	VirtualMachine *SubResourceResponse `pulumi:"virtualMachine"`
}

type NetworkInterfaceState struct {
	// Gets or sets DNS Settings in  NetworkInterface
	DnsSettings NetworkInterfaceDnsSettingsResponsePtrInput
	// Gets or sets whether IPForwarding is enabled on the NIC
	EnableIPForwarding pulumi.BoolPtrInput
	// Gets a unique read-only string that changes whenever the resource is updated
	Etag pulumi.StringPtrInput
	// Gets or sets list of IPConfigurations of the NetworkInterface
	IpConfigurations NetworkInterfaceIPConfigurationResponseArrayInput
	// Resource location
	Location pulumi.StringPtrInput
	// Gets the MAC Address of the network interface
	MacAddress pulumi.StringPtrInput
	// Resource name
	Name pulumi.StringPtrInput
	// Gets or sets the reference of the NetworkSecurityGroup resource
	NetworkSecurityGroup NetworkSecurityGroupResponsePtrInput
	// Gets whether this is a primary NIC on a virtual machine
	Primary pulumi.BoolPtrInput
	// Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
	ProvisioningState pulumi.StringPtrInput
	// Gets or sets resource GUID property of the network interface resource
	ResourceGuid pulumi.StringPtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Resource type
	Type pulumi.StringPtrInput
	// Gets or sets the reference of a VirtualMachine
	VirtualMachine SubResourceResponsePtrInput
}

func (NetworkInterfaceState) ElementType() reflect.Type {
	return reflect.TypeOf((*networkInterfaceState)(nil)).Elem()
}

type networkInterfaceArgs struct {
	// Gets or sets DNS Settings in  NetworkInterface
	DnsSettings *NetworkInterfaceDnsSettings `pulumi:"dnsSettings"`
	// Gets or sets whether IPForwarding is enabled on the NIC
	EnableIPForwarding *bool `pulumi:"enableIPForwarding"`
	// Gets a unique read-only string that changes whenever the resource is updated
	Etag *string `pulumi:"etag"`
	// Resource Id
	Id *string `pulumi:"id"`
	// Gets or sets list of IPConfigurations of the NetworkInterface
	IpConfigurations []NetworkInterfaceIPConfiguration `pulumi:"ipConfigurations"`
	// Resource location
	Location *string `pulumi:"location"`
	// Gets the MAC Address of the network interface
	MacAddress *string `pulumi:"macAddress"`
	// The name of the network interface.
	NetworkInterfaceName string `pulumi:"networkInterfaceName"`
	// Gets or sets the reference of the NetworkSecurityGroup resource
	NetworkSecurityGroup *NetworkSecurityGroupType `pulumi:"networkSecurityGroup"`
	// Gets whether this is a primary NIC on a virtual machine
	Primary *bool `pulumi:"primary"`
	// Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
	ProvisioningState *string `pulumi:"provisioningState"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Gets or sets resource GUID property of the network interface resource
	ResourceGuid *string `pulumi:"resourceGuid"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Gets or sets the reference of a VirtualMachine
	VirtualMachine *SubResource `pulumi:"virtualMachine"`
}

// The set of arguments for constructing a NetworkInterface resource.
type NetworkInterfaceArgs struct {
	// Gets or sets DNS Settings in  NetworkInterface
	DnsSettings NetworkInterfaceDnsSettingsPtrInput
	// Gets or sets whether IPForwarding is enabled on the NIC
	EnableIPForwarding pulumi.BoolPtrInput
	// Gets a unique read-only string that changes whenever the resource is updated
	Etag pulumi.StringPtrInput
	// Resource Id
	Id pulumi.StringPtrInput
	// Gets or sets list of IPConfigurations of the NetworkInterface
	IpConfigurations NetworkInterfaceIPConfigurationArrayInput
	// Resource location
	Location pulumi.StringPtrInput
	// Gets the MAC Address of the network interface
	MacAddress pulumi.StringPtrInput
	// The name of the network interface.
	NetworkInterfaceName pulumi.StringInput
	// Gets or sets the reference of the NetworkSecurityGroup resource
	NetworkSecurityGroup NetworkSecurityGroupTypePtrInput
	// Gets whether this is a primary NIC on a virtual machine
	Primary pulumi.BoolPtrInput
	// Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
	ProvisioningState pulumi.StringPtrInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// Gets or sets resource GUID property of the network interface resource
	ResourceGuid pulumi.StringPtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Gets or sets the reference of a VirtualMachine
	VirtualMachine SubResourcePtrInput
}

func (NetworkInterfaceArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*networkInterfaceArgs)(nil)).Elem()
}

type NetworkInterfaceInput interface {
	pulumi.Input

	ToNetworkInterfaceOutput() NetworkInterfaceOutput
	ToNetworkInterfaceOutputWithContext(ctx context.Context) NetworkInterfaceOutput
}

func (*NetworkInterface) ElementType() reflect.Type {
	return reflect.TypeOf((*NetworkInterface)(nil))
}

func (i *NetworkInterface) ToNetworkInterfaceOutput() NetworkInterfaceOutput {
	return i.ToNetworkInterfaceOutputWithContext(context.Background())
}

func (i *NetworkInterface) ToNetworkInterfaceOutputWithContext(ctx context.Context) NetworkInterfaceOutput {
	return pulumi.ToOutputWithContext(ctx, i).(NetworkInterfaceOutput)
}

type NetworkInterfaceOutput struct {
	*pulumi.OutputState
}

func (NetworkInterfaceOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*NetworkInterface)(nil))
}

func (o NetworkInterfaceOutput) ToNetworkInterfaceOutput() NetworkInterfaceOutput {
	return o
}

func (o NetworkInterfaceOutput) ToNetworkInterfaceOutputWithContext(ctx context.Context) NetworkInterfaceOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(NetworkInterfaceOutput{})
}
