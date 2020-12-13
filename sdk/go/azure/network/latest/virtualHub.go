// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// VirtualHub Resource.
type VirtualHub struct {
	pulumi.CustomResourceState

	// Address-prefix for this VirtualHub.
	AddressPrefix pulumi.StringPtrOutput `pulumi:"addressPrefix"`
	// Flag to control transit for VirtualRouter hub.
	AllowBranchToBranchTraffic pulumi.BoolPtrOutput `pulumi:"allowBranchToBranchTraffic"`
	// The azureFirewall associated with this VirtualHub.
	AzureFirewall SubResourceResponsePtrOutput `pulumi:"azureFirewall"`
	// List of references to Bgp Connections.
	BgpConnections SubResourceResponseArrayOutput `pulumi:"bgpConnections"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// The expressRouteGateway associated with this VirtualHub.
	ExpressRouteGateway SubResourceResponsePtrOutput `pulumi:"expressRouteGateway"`
	// List of references to IpConfigurations.
	IpConfigurations SubResourceResponseArrayOutput `pulumi:"ipConfigurations"`
	// Resource location.
	Location pulumi.StringOutput `pulumi:"location"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The P2SVpnGateway associated with this VirtualHub.
	P2SVpnGateway SubResourceResponsePtrOutput `pulumi:"p2SVpnGateway"`
	// The provisioning state of the virtual hub resource.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The routeTable associated with this virtual hub.
	RouteTable VirtualHubRouteTableResponsePtrOutput `pulumi:"routeTable"`
	// The routing state.
	RoutingState pulumi.StringOutput `pulumi:"routingState"`
	// The securityPartnerProvider associated with this VirtualHub.
	SecurityPartnerProvider SubResourceResponsePtrOutput `pulumi:"securityPartnerProvider"`
	// The Security Provider name.
	SecurityProviderName pulumi.StringPtrOutput `pulumi:"securityProviderName"`
	// The sku of this VirtualHub.
	Sku pulumi.StringPtrOutput `pulumi:"sku"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// List of all virtual hub route table v2s associated with this VirtualHub.
	VirtualHubRouteTableV2s VirtualHubRouteTableV2ResponseArrayOutput `pulumi:"virtualHubRouteTableV2s"`
	// VirtualRouter ASN.
	VirtualRouterAsn pulumi.IntPtrOutput `pulumi:"virtualRouterAsn"`
	// VirtualRouter IPs.
	VirtualRouterIps pulumi.StringArrayOutput `pulumi:"virtualRouterIps"`
	// The VirtualWAN to which the VirtualHub belongs.
	VirtualWan SubResourceResponsePtrOutput `pulumi:"virtualWan"`
	// The VpnGateway associated with this VirtualHub.
	VpnGateway SubResourceResponsePtrOutput `pulumi:"vpnGateway"`
}

// NewVirtualHub registers a new resource with the given unique name, arguments, and options.
func NewVirtualHub(ctx *pulumi.Context,
	name string, args *VirtualHubArgs, opts ...pulumi.ResourceOption) (*VirtualHub, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.VirtualHubName == nil {
		return nil, errors.New("invalid value for required argument 'VirtualHubName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/v20180401:VirtualHub"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180601:VirtualHub"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180701:VirtualHub"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180801:VirtualHub"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181001:VirtualHub"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181101:VirtualHub"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181201:VirtualHub"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190201:VirtualHub"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190401:VirtualHub"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190601:VirtualHub"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190701:VirtualHub"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190801:VirtualHub"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190901:VirtualHub"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191101:VirtualHub"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191201:VirtualHub"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200301:VirtualHub"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200401:VirtualHub"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200501:VirtualHub"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200601:VirtualHub"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200701:VirtualHub"),
		},
	})
	opts = append(opts, aliases)
	var resource VirtualHub
	err := ctx.RegisterResource("azure-nextgen:network/latest:VirtualHub", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetVirtualHub gets an existing VirtualHub resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetVirtualHub(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *VirtualHubState, opts ...pulumi.ResourceOption) (*VirtualHub, error) {
	var resource VirtualHub
	err := ctx.ReadResource("azure-nextgen:network/latest:VirtualHub", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering VirtualHub resources.
type virtualHubState struct {
	// Address-prefix for this VirtualHub.
	AddressPrefix *string `pulumi:"addressPrefix"`
	// Flag to control transit for VirtualRouter hub.
	AllowBranchToBranchTraffic *bool `pulumi:"allowBranchToBranchTraffic"`
	// The azureFirewall associated with this VirtualHub.
	AzureFirewall *SubResourceResponse `pulumi:"azureFirewall"`
	// List of references to Bgp Connections.
	BgpConnections []SubResourceResponse `pulumi:"bgpConnections"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// The expressRouteGateway associated with this VirtualHub.
	ExpressRouteGateway *SubResourceResponse `pulumi:"expressRouteGateway"`
	// List of references to IpConfigurations.
	IpConfigurations []SubResourceResponse `pulumi:"ipConfigurations"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name *string `pulumi:"name"`
	// The P2SVpnGateway associated with this VirtualHub.
	P2SVpnGateway *SubResourceResponse `pulumi:"p2SVpnGateway"`
	// The provisioning state of the virtual hub resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The routeTable associated with this virtual hub.
	RouteTable *VirtualHubRouteTableResponse `pulumi:"routeTable"`
	// The routing state.
	RoutingState *string `pulumi:"routingState"`
	// The securityPartnerProvider associated with this VirtualHub.
	SecurityPartnerProvider *SubResourceResponse `pulumi:"securityPartnerProvider"`
	// The Security Provider name.
	SecurityProviderName *string `pulumi:"securityProviderName"`
	// The sku of this VirtualHub.
	Sku *string `pulumi:"sku"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type *string `pulumi:"type"`
	// List of all virtual hub route table v2s associated with this VirtualHub.
	VirtualHubRouteTableV2s []VirtualHubRouteTableV2Response `pulumi:"virtualHubRouteTableV2s"`
	// VirtualRouter ASN.
	VirtualRouterAsn *int `pulumi:"virtualRouterAsn"`
	// VirtualRouter IPs.
	VirtualRouterIps []string `pulumi:"virtualRouterIps"`
	// The VirtualWAN to which the VirtualHub belongs.
	VirtualWan *SubResourceResponse `pulumi:"virtualWan"`
	// The VpnGateway associated with this VirtualHub.
	VpnGateway *SubResourceResponse `pulumi:"vpnGateway"`
}

type VirtualHubState struct {
	// Address-prefix for this VirtualHub.
	AddressPrefix pulumi.StringPtrInput
	// Flag to control transit for VirtualRouter hub.
	AllowBranchToBranchTraffic pulumi.BoolPtrInput
	// The azureFirewall associated with this VirtualHub.
	AzureFirewall SubResourceResponsePtrInput
	// List of references to Bgp Connections.
	BgpConnections SubResourceResponseArrayInput
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// The expressRouteGateway associated with this VirtualHub.
	ExpressRouteGateway SubResourceResponsePtrInput
	// List of references to IpConfigurations.
	IpConfigurations SubResourceResponseArrayInput
	// Resource location.
	Location pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// The P2SVpnGateway associated with this VirtualHub.
	P2SVpnGateway SubResourceResponsePtrInput
	// The provisioning state of the virtual hub resource.
	ProvisioningState pulumi.StringPtrInput
	// The routeTable associated with this virtual hub.
	RouteTable VirtualHubRouteTableResponsePtrInput
	// The routing state.
	RoutingState pulumi.StringPtrInput
	// The securityPartnerProvider associated with this VirtualHub.
	SecurityPartnerProvider SubResourceResponsePtrInput
	// The Security Provider name.
	SecurityProviderName pulumi.StringPtrInput
	// The sku of this VirtualHub.
	Sku pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// Resource type.
	Type pulumi.StringPtrInput
	// List of all virtual hub route table v2s associated with this VirtualHub.
	VirtualHubRouteTableV2s VirtualHubRouteTableV2ResponseArrayInput
	// VirtualRouter ASN.
	VirtualRouterAsn pulumi.IntPtrInput
	// VirtualRouter IPs.
	VirtualRouterIps pulumi.StringArrayInput
	// The VirtualWAN to which the VirtualHub belongs.
	VirtualWan SubResourceResponsePtrInput
	// The VpnGateway associated with this VirtualHub.
	VpnGateway SubResourceResponsePtrInput
}

func (VirtualHubState) ElementType() reflect.Type {
	return reflect.TypeOf((*virtualHubState)(nil)).Elem()
}

type virtualHubArgs struct {
	// Address-prefix for this VirtualHub.
	AddressPrefix *string `pulumi:"addressPrefix"`
	// Flag to control transit for VirtualRouter hub.
	AllowBranchToBranchTraffic *bool `pulumi:"allowBranchToBranchTraffic"`
	// The azureFirewall associated with this VirtualHub.
	AzureFirewall *SubResource `pulumi:"azureFirewall"`
	// The expressRouteGateway associated with this VirtualHub.
	ExpressRouteGateway *SubResource `pulumi:"expressRouteGateway"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Resource location.
	Location string `pulumi:"location"`
	// The P2SVpnGateway associated with this VirtualHub.
	P2SVpnGateway *SubResource `pulumi:"p2SVpnGateway"`
	// The resource group name of the VirtualHub.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The routeTable associated with this virtual hub.
	RouteTable *VirtualHubRouteTable `pulumi:"routeTable"`
	// The securityPartnerProvider associated with this VirtualHub.
	SecurityPartnerProvider *SubResource `pulumi:"securityPartnerProvider"`
	// The Security Provider name.
	SecurityProviderName *string `pulumi:"securityProviderName"`
	// The sku of this VirtualHub.
	Sku *string `pulumi:"sku"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The name of the VirtualHub.
	VirtualHubName string `pulumi:"virtualHubName"`
	// List of all virtual hub route table v2s associated with this VirtualHub.
	VirtualHubRouteTableV2s []VirtualHubRouteTableV2Type `pulumi:"virtualHubRouteTableV2s"`
	// VirtualRouter ASN.
	VirtualRouterAsn *int `pulumi:"virtualRouterAsn"`
	// VirtualRouter IPs.
	VirtualRouterIps []string `pulumi:"virtualRouterIps"`
	// The VirtualWAN to which the VirtualHub belongs.
	VirtualWan *SubResource `pulumi:"virtualWan"`
	// The VpnGateway associated with this VirtualHub.
	VpnGateway *SubResource `pulumi:"vpnGateway"`
}

// The set of arguments for constructing a VirtualHub resource.
type VirtualHubArgs struct {
	// Address-prefix for this VirtualHub.
	AddressPrefix pulumi.StringPtrInput
	// Flag to control transit for VirtualRouter hub.
	AllowBranchToBranchTraffic pulumi.BoolPtrInput
	// The azureFirewall associated with this VirtualHub.
	AzureFirewall SubResourcePtrInput
	// The expressRouteGateway associated with this VirtualHub.
	ExpressRouteGateway SubResourcePtrInput
	// Resource ID.
	Id pulumi.StringPtrInput
	// Resource location.
	Location pulumi.StringInput
	// The P2SVpnGateway associated with this VirtualHub.
	P2SVpnGateway SubResourcePtrInput
	// The resource group name of the VirtualHub.
	ResourceGroupName pulumi.StringInput
	// The routeTable associated with this virtual hub.
	RouteTable VirtualHubRouteTablePtrInput
	// The securityPartnerProvider associated with this VirtualHub.
	SecurityPartnerProvider SubResourcePtrInput
	// The Security Provider name.
	SecurityProviderName pulumi.StringPtrInput
	// The sku of this VirtualHub.
	Sku pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The name of the VirtualHub.
	VirtualHubName pulumi.StringInput
	// List of all virtual hub route table v2s associated with this VirtualHub.
	VirtualHubRouteTableV2s VirtualHubRouteTableV2TypeArrayInput
	// VirtualRouter ASN.
	VirtualRouterAsn pulumi.IntPtrInput
	// VirtualRouter IPs.
	VirtualRouterIps pulumi.StringArrayInput
	// The VirtualWAN to which the VirtualHub belongs.
	VirtualWan SubResourcePtrInput
	// The VpnGateway associated with this VirtualHub.
	VpnGateway SubResourcePtrInput
}

func (VirtualHubArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*virtualHubArgs)(nil)).Elem()
}

type VirtualHubInput interface {
	pulumi.Input

	ToVirtualHubOutput() VirtualHubOutput
	ToVirtualHubOutputWithContext(ctx context.Context) VirtualHubOutput
}

func (VirtualHub) ElementType() reflect.Type {
	return reflect.TypeOf((*VirtualHub)(nil)).Elem()
}

func (i VirtualHub) ToVirtualHubOutput() VirtualHubOutput {
	return i.ToVirtualHubOutputWithContext(context.Background())
}

func (i VirtualHub) ToVirtualHubOutputWithContext(ctx context.Context) VirtualHubOutput {
	return pulumi.ToOutputWithContext(ctx, i).(VirtualHubOutput)
}

type VirtualHubOutput struct {
	*pulumi.OutputState
}

func (VirtualHubOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*VirtualHubOutput)(nil)).Elem()
}

func (o VirtualHubOutput) ToVirtualHubOutput() VirtualHubOutput {
	return o
}

func (o VirtualHubOutput) ToVirtualHubOutputWithContext(ctx context.Context) VirtualHubOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(VirtualHubOutput{})
}
