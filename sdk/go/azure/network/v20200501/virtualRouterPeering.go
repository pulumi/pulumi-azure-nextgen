// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200501

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Virtual Router Peering resource.
type VirtualRouterPeering struct {
	pulumi.CustomResourceState

	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// Name of the virtual router peering that is unique within a virtual router.
	Name pulumi.StringPtrOutput `pulumi:"name"`
	// Peer ASN.
	PeerAsn pulumi.IntPtrOutput `pulumi:"peerAsn"`
	// Peer IP.
	PeerIp pulumi.StringPtrOutput `pulumi:"peerIp"`
	// The provisioning state of the resource.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Peering type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewVirtualRouterPeering registers a new resource with the given unique name, arguments, and options.
func NewVirtualRouterPeering(ctx *pulumi.Context,
	name string, args *VirtualRouterPeeringArgs, opts ...pulumi.ResourceOption) (*VirtualRouterPeering, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.PeeringName == nil {
		return nil, errors.New("invalid value for required argument 'PeeringName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.VirtualRouterName == nil {
		return nil, errors.New("invalid value for required argument 'VirtualRouterName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/latest:VirtualRouterPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190701:VirtualRouterPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190801:VirtualRouterPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190901:VirtualRouterPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191101:VirtualRouterPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191201:VirtualRouterPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200301:VirtualRouterPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200401:VirtualRouterPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200601:VirtualRouterPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200701:VirtualRouterPeering"),
		},
	})
	opts = append(opts, aliases)
	var resource VirtualRouterPeering
	err := ctx.RegisterResource("azure-nextgen:network/v20200501:VirtualRouterPeering", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetVirtualRouterPeering gets an existing VirtualRouterPeering resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetVirtualRouterPeering(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *VirtualRouterPeeringState, opts ...pulumi.ResourceOption) (*VirtualRouterPeering, error) {
	var resource VirtualRouterPeering
	err := ctx.ReadResource("azure-nextgen:network/v20200501:VirtualRouterPeering", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering VirtualRouterPeering resources.
type virtualRouterPeeringState struct {
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// Name of the virtual router peering that is unique within a virtual router.
	Name *string `pulumi:"name"`
	// Peer ASN.
	PeerAsn *int `pulumi:"peerAsn"`
	// Peer IP.
	PeerIp *string `pulumi:"peerIp"`
	// The provisioning state of the resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Peering type.
	Type *string `pulumi:"type"`
}

type VirtualRouterPeeringState struct {
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// Name of the virtual router peering that is unique within a virtual router.
	Name pulumi.StringPtrInput
	// Peer ASN.
	PeerAsn pulumi.IntPtrInput
	// Peer IP.
	PeerIp pulumi.StringPtrInput
	// The provisioning state of the resource.
	ProvisioningState pulumi.StringPtrInput
	// Peering type.
	Type pulumi.StringPtrInput
}

func (VirtualRouterPeeringState) ElementType() reflect.Type {
	return reflect.TypeOf((*virtualRouterPeeringState)(nil)).Elem()
}

type virtualRouterPeeringArgs struct {
	// Resource ID.
	Id *string `pulumi:"id"`
	// Name of the virtual router peering that is unique within a virtual router.
	Name *string `pulumi:"name"`
	// Peer ASN.
	PeerAsn *int `pulumi:"peerAsn"`
	// Peer IP.
	PeerIp *string `pulumi:"peerIp"`
	// The name of the Virtual Router Peering.
	PeeringName string `pulumi:"peeringName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the Virtual Router.
	VirtualRouterName string `pulumi:"virtualRouterName"`
}

// The set of arguments for constructing a VirtualRouterPeering resource.
type VirtualRouterPeeringArgs struct {
	// Resource ID.
	Id pulumi.StringPtrInput
	// Name of the virtual router peering that is unique within a virtual router.
	Name pulumi.StringPtrInput
	// Peer ASN.
	PeerAsn pulumi.IntPtrInput
	// Peer IP.
	PeerIp pulumi.StringPtrInput
	// The name of the Virtual Router Peering.
	PeeringName pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The name of the Virtual Router.
	VirtualRouterName pulumi.StringInput
}

func (VirtualRouterPeeringArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*virtualRouterPeeringArgs)(nil)).Elem()
}

type VirtualRouterPeeringInput interface {
	pulumi.Input

	ToVirtualRouterPeeringOutput() VirtualRouterPeeringOutput
	ToVirtualRouterPeeringOutputWithContext(ctx context.Context) VirtualRouterPeeringOutput
}

func (*VirtualRouterPeering) ElementType() reflect.Type {
	return reflect.TypeOf((*VirtualRouterPeering)(nil))
}

func (i *VirtualRouterPeering) ToVirtualRouterPeeringOutput() VirtualRouterPeeringOutput {
	return i.ToVirtualRouterPeeringOutputWithContext(context.Background())
}

func (i *VirtualRouterPeering) ToVirtualRouterPeeringOutputWithContext(ctx context.Context) VirtualRouterPeeringOutput {
	return pulumi.ToOutputWithContext(ctx, i).(VirtualRouterPeeringOutput)
}

type VirtualRouterPeeringOutput struct {
	*pulumi.OutputState
}

func (VirtualRouterPeeringOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*VirtualRouterPeering)(nil))
}

func (o VirtualRouterPeeringOutput) ToVirtualRouterPeeringOutput() VirtualRouterPeeringOutput {
	return o
}

func (o VirtualRouterPeeringOutput) ToVirtualRouterPeeringOutputWithContext(ctx context.Context) VirtualRouterPeeringOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(VirtualRouterPeeringOutput{})
}
