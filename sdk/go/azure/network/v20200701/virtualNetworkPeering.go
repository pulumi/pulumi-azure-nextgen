// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200701

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Peerings in a virtual network resource.
type VirtualNetworkPeering struct {
	pulumi.CustomResourceState

	// Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network.
	AllowForwardedTraffic pulumi.BoolPtrOutput `pulumi:"allowForwardedTraffic"`
	// If gateway links can be used in remote virtual networking to link to this virtual network.
	AllowGatewayTransit pulumi.BoolPtrOutput `pulumi:"allowGatewayTransit"`
	// Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space.
	AllowVirtualNetworkAccess pulumi.BoolPtrOutput `pulumi:"allowVirtualNetworkAccess"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// The name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name pulumi.StringPtrOutput `pulumi:"name"`
	// The status of the virtual network peering.
	PeeringState pulumi.StringPtrOutput `pulumi:"peeringState"`
	// The provisioning state of the virtual network peering resource.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The reference to the remote virtual network address space.
	RemoteAddressSpace AddressSpaceResponsePtrOutput `pulumi:"remoteAddressSpace"`
	// The reference to the remote virtual network's Bgp Communities.
	RemoteBgpCommunities VirtualNetworkBgpCommunitiesResponsePtrOutput `pulumi:"remoteBgpCommunities"`
	// The reference to the remote virtual network. The remote virtual network can be in the same or different region (preview). See here to register for the preview and learn more (https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-create-peering).
	RemoteVirtualNetwork SubResourceResponsePtrOutput `pulumi:"remoteVirtualNetwork"`
	// If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.
	UseRemoteGateways pulumi.BoolPtrOutput `pulumi:"useRemoteGateways"`
}

// NewVirtualNetworkPeering registers a new resource with the given unique name, arguments, and options.
func NewVirtualNetworkPeering(ctx *pulumi.Context,
	name string, args *VirtualNetworkPeeringArgs, opts ...pulumi.ResourceOption) (*VirtualNetworkPeering, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.VirtualNetworkName == nil {
		return nil, errors.New("invalid value for required argument 'VirtualNetworkName'")
	}
	if args.VirtualNetworkPeeringName == nil {
		return nil, errors.New("invalid value for required argument 'VirtualNetworkPeeringName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/latest:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160601:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160901:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20161201:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170301:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170601:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170801:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170901:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20171001:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20171101:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180101:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180201:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180401:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180601:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180701:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180801:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181001:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181101:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181201:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190201:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190401:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190601:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190701:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190801:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190901:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191101:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191201:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200301:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200401:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200501:VirtualNetworkPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200601:VirtualNetworkPeering"),
		},
	})
	opts = append(opts, aliases)
	var resource VirtualNetworkPeering
	err := ctx.RegisterResource("azure-nextgen:network/v20200701:VirtualNetworkPeering", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetVirtualNetworkPeering gets an existing VirtualNetworkPeering resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetVirtualNetworkPeering(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *VirtualNetworkPeeringState, opts ...pulumi.ResourceOption) (*VirtualNetworkPeering, error) {
	var resource VirtualNetworkPeering
	err := ctx.ReadResource("azure-nextgen:network/v20200701:VirtualNetworkPeering", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering VirtualNetworkPeering resources.
type virtualNetworkPeeringState struct {
	// Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network.
	AllowForwardedTraffic *bool `pulumi:"allowForwardedTraffic"`
	// If gateway links can be used in remote virtual networking to link to this virtual network.
	AllowGatewayTransit *bool `pulumi:"allowGatewayTransit"`
	// Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space.
	AllowVirtualNetworkAccess *bool `pulumi:"allowVirtualNetworkAccess"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// The name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name *string `pulumi:"name"`
	// The status of the virtual network peering.
	PeeringState *string `pulumi:"peeringState"`
	// The provisioning state of the virtual network peering resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The reference to the remote virtual network address space.
	RemoteAddressSpace *AddressSpaceResponse `pulumi:"remoteAddressSpace"`
	// The reference to the remote virtual network's Bgp Communities.
	RemoteBgpCommunities *VirtualNetworkBgpCommunitiesResponse `pulumi:"remoteBgpCommunities"`
	// The reference to the remote virtual network. The remote virtual network can be in the same or different region (preview). See here to register for the preview and learn more (https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-create-peering).
	RemoteVirtualNetwork *SubResourceResponse `pulumi:"remoteVirtualNetwork"`
	// If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.
	UseRemoteGateways *bool `pulumi:"useRemoteGateways"`
}

type VirtualNetworkPeeringState struct {
	// Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network.
	AllowForwardedTraffic pulumi.BoolPtrInput
	// If gateway links can be used in remote virtual networking to link to this virtual network.
	AllowGatewayTransit pulumi.BoolPtrInput
	// Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space.
	AllowVirtualNetworkAccess pulumi.BoolPtrInput
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// The name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name pulumi.StringPtrInput
	// The status of the virtual network peering.
	PeeringState pulumi.StringPtrInput
	// The provisioning state of the virtual network peering resource.
	ProvisioningState pulumi.StringPtrInput
	// The reference to the remote virtual network address space.
	RemoteAddressSpace AddressSpaceResponsePtrInput
	// The reference to the remote virtual network's Bgp Communities.
	RemoteBgpCommunities VirtualNetworkBgpCommunitiesResponsePtrInput
	// The reference to the remote virtual network. The remote virtual network can be in the same or different region (preview). See here to register for the preview and learn more (https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-create-peering).
	RemoteVirtualNetwork SubResourceResponsePtrInput
	// If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.
	UseRemoteGateways pulumi.BoolPtrInput
}

func (VirtualNetworkPeeringState) ElementType() reflect.Type {
	return reflect.TypeOf((*virtualNetworkPeeringState)(nil)).Elem()
}

type virtualNetworkPeeringArgs struct {
	// Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network.
	AllowForwardedTraffic *bool `pulumi:"allowForwardedTraffic"`
	// If gateway links can be used in remote virtual networking to link to this virtual network.
	AllowGatewayTransit *bool `pulumi:"allowGatewayTransit"`
	// Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space.
	AllowVirtualNetworkAccess *bool `pulumi:"allowVirtualNetworkAccess"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// The name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name *string `pulumi:"name"`
	// The status of the virtual network peering.
	PeeringState *string `pulumi:"peeringState"`
	// The reference to the remote virtual network address space.
	RemoteAddressSpace *AddressSpace `pulumi:"remoteAddressSpace"`
	// The reference to the remote virtual network's Bgp Communities.
	RemoteBgpCommunities *VirtualNetworkBgpCommunities `pulumi:"remoteBgpCommunities"`
	// The reference to the remote virtual network. The remote virtual network can be in the same or different region (preview). See here to register for the preview and learn more (https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-create-peering).
	RemoteVirtualNetwork *SubResource `pulumi:"remoteVirtualNetwork"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.
	UseRemoteGateways *bool `pulumi:"useRemoteGateways"`
	// The name of the virtual network.
	VirtualNetworkName string `pulumi:"virtualNetworkName"`
	// The name of the peering.
	VirtualNetworkPeeringName string `pulumi:"virtualNetworkPeeringName"`
}

// The set of arguments for constructing a VirtualNetworkPeering resource.
type VirtualNetworkPeeringArgs struct {
	// Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network.
	AllowForwardedTraffic pulumi.BoolPtrInput
	// If gateway links can be used in remote virtual networking to link to this virtual network.
	AllowGatewayTransit pulumi.BoolPtrInput
	// Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space.
	AllowVirtualNetworkAccess pulumi.BoolPtrInput
	// Resource ID.
	Id pulumi.StringPtrInput
	// The name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name pulumi.StringPtrInput
	// The status of the virtual network peering.
	PeeringState pulumi.StringPtrInput
	// The reference to the remote virtual network address space.
	RemoteAddressSpace AddressSpacePtrInput
	// The reference to the remote virtual network's Bgp Communities.
	RemoteBgpCommunities VirtualNetworkBgpCommunitiesPtrInput
	// The reference to the remote virtual network. The remote virtual network can be in the same or different region (preview). See here to register for the preview and learn more (https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-create-peering).
	RemoteVirtualNetwork SubResourcePtrInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.
	UseRemoteGateways pulumi.BoolPtrInput
	// The name of the virtual network.
	VirtualNetworkName pulumi.StringInput
	// The name of the peering.
	VirtualNetworkPeeringName pulumi.StringInput
}

func (VirtualNetworkPeeringArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*virtualNetworkPeeringArgs)(nil)).Elem()
}

type VirtualNetworkPeeringInput interface {
	pulumi.Input

	ToVirtualNetworkPeeringOutput() VirtualNetworkPeeringOutput
	ToVirtualNetworkPeeringOutputWithContext(ctx context.Context) VirtualNetworkPeeringOutput
}

func (VirtualNetworkPeering) ElementType() reflect.Type {
	return reflect.TypeOf((*VirtualNetworkPeering)(nil)).Elem()
}

func (i VirtualNetworkPeering) ToVirtualNetworkPeeringOutput() VirtualNetworkPeeringOutput {
	return i.ToVirtualNetworkPeeringOutputWithContext(context.Background())
}

func (i VirtualNetworkPeering) ToVirtualNetworkPeeringOutputWithContext(ctx context.Context) VirtualNetworkPeeringOutput {
	return pulumi.ToOutputWithContext(ctx, i).(VirtualNetworkPeeringOutput)
}

type VirtualNetworkPeeringOutput struct {
	*pulumi.OutputState
}

func (VirtualNetworkPeeringOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*VirtualNetworkPeeringOutput)(nil)).Elem()
}

func (o VirtualNetworkPeeringOutput) ToVirtualNetworkPeeringOutput() VirtualNetworkPeeringOutput {
	return o
}

func (o VirtualNetworkPeeringOutput) ToVirtualNetworkPeeringOutputWithContext(ctx context.Context) VirtualNetworkPeeringOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(VirtualNetworkPeeringOutput{})
}
