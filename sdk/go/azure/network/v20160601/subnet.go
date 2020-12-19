// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20160601

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Subnet in a VirtualNetwork resource
type Subnet struct {
	pulumi.CustomResourceState

	// Gets or sets Address prefix for the subnet.
	AddressPrefix pulumi.StringPtrOutput `pulumi:"addressPrefix"`
	// A unique read-only string that changes whenever the resource is updated
	Etag pulumi.StringPtrOutput `pulumi:"etag"`
	// Gets array of references to the network interface IP configurations using subnet
	IpConfigurations IPConfigurationResponseArrayOutput `pulumi:"ipConfigurations"`
	// Gets or sets the name of the resource that is unique within a resource group. This name can be used to access the resource
	Name pulumi.StringPtrOutput `pulumi:"name"`
	// Gets or sets the reference of the NetworkSecurityGroup resource
	NetworkSecurityGroup NetworkSecurityGroupResponsePtrOutput `pulumi:"networkSecurityGroup"`
	// Gets provisioning state of the resource
	ProvisioningState pulumi.StringPtrOutput `pulumi:"provisioningState"`
	// Gets array of references to the external resources using subnet
	ResourceNavigationLinks ResourceNavigationLinkResponseArrayOutput `pulumi:"resourceNavigationLinks"`
	// Gets or sets the reference of the RouteTable resource
	RouteTable RouteTableResponsePtrOutput `pulumi:"routeTable"`
}

// NewSubnet registers a new resource with the given unique name, arguments, and options.
func NewSubnet(ctx *pulumi.Context,
	name string, args *SubnetArgs, opts ...pulumi.ResourceOption) (*Subnet, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.SubnetName == nil {
		return nil, errors.New("invalid value for required argument 'SubnetName'")
	}
	if args.VirtualNetworkName == nil {
		return nil, errors.New("invalid value for required argument 'VirtualNetworkName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/latest:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20150501preview:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20150615:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160330:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160901:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20161201:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170301:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170601:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170801:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170901:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20171001:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20171101:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180101:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180201:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180401:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180601:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180701:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180801:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181001:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181101:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181201:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190201:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190401:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190601:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190701:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190801:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190901:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191101:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191201:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200301:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200401:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200501:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200601:Subnet"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200701:Subnet"),
		},
	})
	opts = append(opts, aliases)
	var resource Subnet
	err := ctx.RegisterResource("azure-nextgen:network/v20160601:Subnet", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetSubnet gets an existing Subnet resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSubnet(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *SubnetState, opts ...pulumi.ResourceOption) (*Subnet, error) {
	var resource Subnet
	err := ctx.ReadResource("azure-nextgen:network/v20160601:Subnet", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Subnet resources.
type subnetState struct {
	// Gets or sets Address prefix for the subnet.
	AddressPrefix *string `pulumi:"addressPrefix"`
	// A unique read-only string that changes whenever the resource is updated
	Etag *string `pulumi:"etag"`
	// Gets array of references to the network interface IP configurations using subnet
	IpConfigurations []IPConfigurationResponse `pulumi:"ipConfigurations"`
	// Gets or sets the name of the resource that is unique within a resource group. This name can be used to access the resource
	Name *string `pulumi:"name"`
	// Gets or sets the reference of the NetworkSecurityGroup resource
	NetworkSecurityGroup *NetworkSecurityGroupResponse `pulumi:"networkSecurityGroup"`
	// Gets provisioning state of the resource
	ProvisioningState *string `pulumi:"provisioningState"`
	// Gets array of references to the external resources using subnet
	ResourceNavigationLinks []ResourceNavigationLinkResponse `pulumi:"resourceNavigationLinks"`
	// Gets or sets the reference of the RouteTable resource
	RouteTable *RouteTableResponse `pulumi:"routeTable"`
}

type SubnetState struct {
	// Gets or sets Address prefix for the subnet.
	AddressPrefix pulumi.StringPtrInput
	// A unique read-only string that changes whenever the resource is updated
	Etag pulumi.StringPtrInput
	// Gets array of references to the network interface IP configurations using subnet
	IpConfigurations IPConfigurationResponseArrayInput
	// Gets or sets the name of the resource that is unique within a resource group. This name can be used to access the resource
	Name pulumi.StringPtrInput
	// Gets or sets the reference of the NetworkSecurityGroup resource
	NetworkSecurityGroup NetworkSecurityGroupResponsePtrInput
	// Gets provisioning state of the resource
	ProvisioningState pulumi.StringPtrInput
	// Gets array of references to the external resources using subnet
	ResourceNavigationLinks ResourceNavigationLinkResponseArrayInput
	// Gets or sets the reference of the RouteTable resource
	RouteTable RouteTableResponsePtrInput
}

func (SubnetState) ElementType() reflect.Type {
	return reflect.TypeOf((*subnetState)(nil)).Elem()
}

type subnetArgs struct {
	// Gets or sets Address prefix for the subnet.
	AddressPrefix *string `pulumi:"addressPrefix"`
	// A unique read-only string that changes whenever the resource is updated
	Etag *string `pulumi:"etag"`
	// Resource Id
	Id *string `pulumi:"id"`
	// Gets or sets the name of the resource that is unique within a resource group. This name can be used to access the resource
	Name *string `pulumi:"name"`
	// Gets or sets the reference of the NetworkSecurityGroup resource
	NetworkSecurityGroup *NetworkSecurityGroupType `pulumi:"networkSecurityGroup"`
	// Gets provisioning state of the resource
	ProvisioningState *string `pulumi:"provisioningState"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Gets array of references to the external resources using subnet
	ResourceNavigationLinks []ResourceNavigationLink `pulumi:"resourceNavigationLinks"`
	// Gets or sets the reference of the RouteTable resource
	RouteTable *RouteTableType `pulumi:"routeTable"`
	// The name of the subnet.
	SubnetName string `pulumi:"subnetName"`
	// The name of the virtual network.
	VirtualNetworkName string `pulumi:"virtualNetworkName"`
}

// The set of arguments for constructing a Subnet resource.
type SubnetArgs struct {
	// Gets or sets Address prefix for the subnet.
	AddressPrefix pulumi.StringPtrInput
	// A unique read-only string that changes whenever the resource is updated
	Etag pulumi.StringPtrInput
	// Resource Id
	Id pulumi.StringPtrInput
	// Gets or sets the name of the resource that is unique within a resource group. This name can be used to access the resource
	Name pulumi.StringPtrInput
	// Gets or sets the reference of the NetworkSecurityGroup resource
	NetworkSecurityGroup NetworkSecurityGroupTypePtrInput
	// Gets provisioning state of the resource
	ProvisioningState pulumi.StringPtrInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// Gets array of references to the external resources using subnet
	ResourceNavigationLinks ResourceNavigationLinkArrayInput
	// Gets or sets the reference of the RouteTable resource
	RouteTable RouteTableTypePtrInput
	// The name of the subnet.
	SubnetName pulumi.StringInput
	// The name of the virtual network.
	VirtualNetworkName pulumi.StringInput
}

func (SubnetArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*subnetArgs)(nil)).Elem()
}

type SubnetInput interface {
	pulumi.Input

	ToSubnetOutput() SubnetOutput
	ToSubnetOutputWithContext(ctx context.Context) SubnetOutput
}

func (*Subnet) ElementType() reflect.Type {
	return reflect.TypeOf((*Subnet)(nil))
}

func (i *Subnet) ToSubnetOutput() SubnetOutput {
	return i.ToSubnetOutputWithContext(context.Background())
}

func (i *Subnet) ToSubnetOutputWithContext(ctx context.Context) SubnetOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SubnetOutput)
}

type SubnetOutput struct {
	*pulumi.OutputState
}

func (SubnetOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Subnet)(nil))
}

func (o SubnetOutput) ToSubnetOutput() SubnetOutput {
	return o
}

func (o SubnetOutput) ToSubnetOutputWithContext(ctx context.Context) SubnetOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(SubnetOutput{})
}
