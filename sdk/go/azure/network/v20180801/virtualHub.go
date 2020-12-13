// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180801

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
	// Gets a unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// The expressRouteGateway associated with this VirtualHub
	ExpressRouteGateway SubResourceResponsePtrOutput `pulumi:"expressRouteGateway"`
	// Resource location.
	Location pulumi.StringOutput `pulumi:"location"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The P2SVpnGateway associated with this VirtualHub
	P2SVpnGateway SubResourceResponsePtrOutput `pulumi:"p2SVpnGateway"`
	// The provisioning state of the resource.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The routeTable associated with this virtual hub.
	RouteTable VirtualHubRouteTableResponsePtrOutput `pulumi:"routeTable"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// list of all vnet connections with this VirtualHub.
	VirtualNetworkConnections HubVirtualNetworkConnectionResponseArrayOutput `pulumi:"virtualNetworkConnections"`
	// The VirtualWAN to which the VirtualHub belongs
	VirtualWan SubResourceResponsePtrOutput `pulumi:"virtualWan"`
	// The VpnGateway associated with this VirtualHub
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
			Type: pulumi.String("azure-nextgen:network/latest:VirtualHub"),
		},
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
	err := ctx.RegisterResource("azure-nextgen:network/v20180801:VirtualHub", name, args, &resource, opts...)
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
	err := ctx.ReadResource("azure-nextgen:network/v20180801:VirtualHub", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering VirtualHub resources.
type virtualHubState struct {
	// Address-prefix for this VirtualHub.
	AddressPrefix *string `pulumi:"addressPrefix"`
	// Gets a unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// The expressRouteGateway associated with this VirtualHub
	ExpressRouteGateway *SubResourceResponse `pulumi:"expressRouteGateway"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name *string `pulumi:"name"`
	// The P2SVpnGateway associated with this VirtualHub
	P2SVpnGateway *SubResourceResponse `pulumi:"p2SVpnGateway"`
	// The provisioning state of the resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The routeTable associated with this virtual hub.
	RouteTable *VirtualHubRouteTableResponse `pulumi:"routeTable"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type *string `pulumi:"type"`
	// list of all vnet connections with this VirtualHub.
	VirtualNetworkConnections []HubVirtualNetworkConnectionResponse `pulumi:"virtualNetworkConnections"`
	// The VirtualWAN to which the VirtualHub belongs
	VirtualWan *SubResourceResponse `pulumi:"virtualWan"`
	// The VpnGateway associated with this VirtualHub
	VpnGateway *SubResourceResponse `pulumi:"vpnGateway"`
}

type VirtualHubState struct {
	// Address-prefix for this VirtualHub.
	AddressPrefix pulumi.StringPtrInput
	// Gets a unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// The expressRouteGateway associated with this VirtualHub
	ExpressRouteGateway SubResourceResponsePtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// The P2SVpnGateway associated with this VirtualHub
	P2SVpnGateway SubResourceResponsePtrInput
	// The provisioning state of the resource.
	ProvisioningState pulumi.StringPtrInput
	// The routeTable associated with this virtual hub.
	RouteTable VirtualHubRouteTableResponsePtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// Resource type.
	Type pulumi.StringPtrInput
	// list of all vnet connections with this VirtualHub.
	VirtualNetworkConnections HubVirtualNetworkConnectionResponseArrayInput
	// The VirtualWAN to which the VirtualHub belongs
	VirtualWan SubResourceResponsePtrInput
	// The VpnGateway associated with this VirtualHub
	VpnGateway SubResourceResponsePtrInput
}

func (VirtualHubState) ElementType() reflect.Type {
	return reflect.TypeOf((*virtualHubState)(nil)).Elem()
}

type virtualHubArgs struct {
	// Address-prefix for this VirtualHub.
	AddressPrefix *string `pulumi:"addressPrefix"`
	// The expressRouteGateway associated with this VirtualHub
	ExpressRouteGateway *SubResource `pulumi:"expressRouteGateway"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Resource location.
	Location string `pulumi:"location"`
	// The P2SVpnGateway associated with this VirtualHub
	P2SVpnGateway *SubResource `pulumi:"p2SVpnGateway"`
	// The resource group name of the VirtualHub.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The routeTable associated with this virtual hub.
	RouteTable *VirtualHubRouteTable `pulumi:"routeTable"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The name of the VirtualHub.
	VirtualHubName string `pulumi:"virtualHubName"`
	// list of all vnet connections with this VirtualHub.
	VirtualNetworkConnections []HubVirtualNetworkConnection `pulumi:"virtualNetworkConnections"`
	// The VirtualWAN to which the VirtualHub belongs
	VirtualWan *SubResource `pulumi:"virtualWan"`
	// The VpnGateway associated with this VirtualHub
	VpnGateway *SubResource `pulumi:"vpnGateway"`
}

// The set of arguments for constructing a VirtualHub resource.
type VirtualHubArgs struct {
	// Address-prefix for this VirtualHub.
	AddressPrefix pulumi.StringPtrInput
	// The expressRouteGateway associated with this VirtualHub
	ExpressRouteGateway SubResourcePtrInput
	// Resource ID.
	Id pulumi.StringPtrInput
	// Resource location.
	Location pulumi.StringInput
	// The P2SVpnGateway associated with this VirtualHub
	P2SVpnGateway SubResourcePtrInput
	// The resource group name of the VirtualHub.
	ResourceGroupName pulumi.StringInput
	// The routeTable associated with this virtual hub.
	RouteTable VirtualHubRouteTablePtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The name of the VirtualHub.
	VirtualHubName pulumi.StringInput
	// list of all vnet connections with this VirtualHub.
	VirtualNetworkConnections HubVirtualNetworkConnectionArrayInput
	// The VirtualWAN to which the VirtualHub belongs
	VirtualWan SubResourcePtrInput
	// The VpnGateway associated with this VirtualHub
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
