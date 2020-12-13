// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20181001

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Peering in an ExpressRoute Cross Connection resource.
type ExpressRouteCrossConnectionPeering struct {
	pulumi.CustomResourceState

	// The Azure ASN.
	AzureASN pulumi.IntOutput `pulumi:"azureASN"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// The GatewayManager Etag.
	GatewayManagerEtag pulumi.StringPtrOutput `pulumi:"gatewayManagerEtag"`
	// The IPv6 peering configuration.
	Ipv6PeeringConfig Ipv6ExpressRouteCircuitPeeringConfigResponsePtrOutput `pulumi:"ipv6PeeringConfig"`
	// Gets whether the provider or the customer last modified the peering.
	LastModifiedBy pulumi.StringPtrOutput `pulumi:"lastModifiedBy"`
	// The Microsoft peering configuration.
	MicrosoftPeeringConfig ExpressRouteCircuitPeeringConfigResponsePtrOutput `pulumi:"microsoftPeeringConfig"`
	// Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name pulumi.StringPtrOutput `pulumi:"name"`
	// The peer ASN.
	PeerASN pulumi.IntPtrOutput `pulumi:"peerASN"`
	// The peering type.
	PeeringType pulumi.StringPtrOutput `pulumi:"peeringType"`
	// The primary port.
	PrimaryAzurePort pulumi.StringOutput `pulumi:"primaryAzurePort"`
	// The primary address prefix.
	PrimaryPeerAddressPrefix pulumi.StringPtrOutput `pulumi:"primaryPeerAddressPrefix"`
	// Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The secondary port.
	SecondaryAzurePort pulumi.StringOutput `pulumi:"secondaryAzurePort"`
	// The secondary address prefix.
	SecondaryPeerAddressPrefix pulumi.StringPtrOutput `pulumi:"secondaryPeerAddressPrefix"`
	// The shared key.
	SharedKey pulumi.StringPtrOutput `pulumi:"sharedKey"`
	// The peering state.
	State pulumi.StringPtrOutput `pulumi:"state"`
	// The VLAN ID.
	VlanId pulumi.IntPtrOutput `pulumi:"vlanId"`
}

// NewExpressRouteCrossConnectionPeering registers a new resource with the given unique name, arguments, and options.
func NewExpressRouteCrossConnectionPeering(ctx *pulumi.Context,
	name string, args *ExpressRouteCrossConnectionPeeringArgs, opts ...pulumi.ResourceOption) (*ExpressRouteCrossConnectionPeering, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.CrossConnectionName == nil {
		return nil, errors.New("invalid value for required argument 'CrossConnectionName'")
	}
	if args.PeeringName == nil {
		return nil, errors.New("invalid value for required argument 'PeeringName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/latest:ExpressRouteCrossConnectionPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180201:ExpressRouteCrossConnectionPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180401:ExpressRouteCrossConnectionPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180601:ExpressRouteCrossConnectionPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180701:ExpressRouteCrossConnectionPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180801:ExpressRouteCrossConnectionPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181101:ExpressRouteCrossConnectionPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181201:ExpressRouteCrossConnectionPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190201:ExpressRouteCrossConnectionPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190401:ExpressRouteCrossConnectionPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190601:ExpressRouteCrossConnectionPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190701:ExpressRouteCrossConnectionPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190801:ExpressRouteCrossConnectionPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190901:ExpressRouteCrossConnectionPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191101:ExpressRouteCrossConnectionPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191201:ExpressRouteCrossConnectionPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200301:ExpressRouteCrossConnectionPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200401:ExpressRouteCrossConnectionPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200501:ExpressRouteCrossConnectionPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200601:ExpressRouteCrossConnectionPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200701:ExpressRouteCrossConnectionPeering"),
		},
	})
	opts = append(opts, aliases)
	var resource ExpressRouteCrossConnectionPeering
	err := ctx.RegisterResource("azure-nextgen:network/v20181001:ExpressRouteCrossConnectionPeering", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetExpressRouteCrossConnectionPeering gets an existing ExpressRouteCrossConnectionPeering resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetExpressRouteCrossConnectionPeering(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ExpressRouteCrossConnectionPeeringState, opts ...pulumi.ResourceOption) (*ExpressRouteCrossConnectionPeering, error) {
	var resource ExpressRouteCrossConnectionPeering
	err := ctx.ReadResource("azure-nextgen:network/v20181001:ExpressRouteCrossConnectionPeering", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ExpressRouteCrossConnectionPeering resources.
type expressRouteCrossConnectionPeeringState struct {
	// The Azure ASN.
	AzureASN *int `pulumi:"azureASN"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// The GatewayManager Etag.
	GatewayManagerEtag *string `pulumi:"gatewayManagerEtag"`
	// The IPv6 peering configuration.
	Ipv6PeeringConfig *Ipv6ExpressRouteCircuitPeeringConfigResponse `pulumi:"ipv6PeeringConfig"`
	// Gets whether the provider or the customer last modified the peering.
	LastModifiedBy *string `pulumi:"lastModifiedBy"`
	// The Microsoft peering configuration.
	MicrosoftPeeringConfig *ExpressRouteCircuitPeeringConfigResponse `pulumi:"microsoftPeeringConfig"`
	// Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name *string `pulumi:"name"`
	// The peer ASN.
	PeerASN *int `pulumi:"peerASN"`
	// The peering type.
	PeeringType *string `pulumi:"peeringType"`
	// The primary port.
	PrimaryAzurePort *string `pulumi:"primaryAzurePort"`
	// The primary address prefix.
	PrimaryPeerAddressPrefix *string `pulumi:"primaryPeerAddressPrefix"`
	// Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The secondary port.
	SecondaryAzurePort *string `pulumi:"secondaryAzurePort"`
	// The secondary address prefix.
	SecondaryPeerAddressPrefix *string `pulumi:"secondaryPeerAddressPrefix"`
	// The shared key.
	SharedKey *string `pulumi:"sharedKey"`
	// The peering state.
	State *string `pulumi:"state"`
	// The VLAN ID.
	VlanId *int `pulumi:"vlanId"`
}

type ExpressRouteCrossConnectionPeeringState struct {
	// The Azure ASN.
	AzureASN pulumi.IntPtrInput
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// The GatewayManager Etag.
	GatewayManagerEtag pulumi.StringPtrInput
	// The IPv6 peering configuration.
	Ipv6PeeringConfig Ipv6ExpressRouteCircuitPeeringConfigResponsePtrInput
	// Gets whether the provider or the customer last modified the peering.
	LastModifiedBy pulumi.StringPtrInput
	// The Microsoft peering configuration.
	MicrosoftPeeringConfig ExpressRouteCircuitPeeringConfigResponsePtrInput
	// Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name pulumi.StringPtrInput
	// The peer ASN.
	PeerASN pulumi.IntPtrInput
	// The peering type.
	PeeringType pulumi.StringPtrInput
	// The primary port.
	PrimaryAzurePort pulumi.StringPtrInput
	// The primary address prefix.
	PrimaryPeerAddressPrefix pulumi.StringPtrInput
	// Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState pulumi.StringPtrInput
	// The secondary port.
	SecondaryAzurePort pulumi.StringPtrInput
	// The secondary address prefix.
	SecondaryPeerAddressPrefix pulumi.StringPtrInput
	// The shared key.
	SharedKey pulumi.StringPtrInput
	// The peering state.
	State pulumi.StringPtrInput
	// The VLAN ID.
	VlanId pulumi.IntPtrInput
}

func (ExpressRouteCrossConnectionPeeringState) ElementType() reflect.Type {
	return reflect.TypeOf((*expressRouteCrossConnectionPeeringState)(nil)).Elem()
}

type expressRouteCrossConnectionPeeringArgs struct {
	// The name of the ExpressRouteCrossConnection.
	CrossConnectionName string `pulumi:"crossConnectionName"`
	// The GatewayManager Etag.
	GatewayManagerEtag *string `pulumi:"gatewayManagerEtag"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// The IPv6 peering configuration.
	Ipv6PeeringConfig *Ipv6ExpressRouteCircuitPeeringConfig `pulumi:"ipv6PeeringConfig"`
	// Gets whether the provider or the customer last modified the peering.
	LastModifiedBy *string `pulumi:"lastModifiedBy"`
	// The Microsoft peering configuration.
	MicrosoftPeeringConfig *ExpressRouteCircuitPeeringConfig `pulumi:"microsoftPeeringConfig"`
	// Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name *string `pulumi:"name"`
	// The peer ASN.
	PeerASN *int `pulumi:"peerASN"`
	// The name of the peering.
	PeeringName string `pulumi:"peeringName"`
	// The peering type.
	PeeringType *string `pulumi:"peeringType"`
	// The primary address prefix.
	PrimaryPeerAddressPrefix *string `pulumi:"primaryPeerAddressPrefix"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The secondary address prefix.
	SecondaryPeerAddressPrefix *string `pulumi:"secondaryPeerAddressPrefix"`
	// The shared key.
	SharedKey *string `pulumi:"sharedKey"`
	// The peering state.
	State *string `pulumi:"state"`
	// The VLAN ID.
	VlanId *int `pulumi:"vlanId"`
}

// The set of arguments for constructing a ExpressRouteCrossConnectionPeering resource.
type ExpressRouteCrossConnectionPeeringArgs struct {
	// The name of the ExpressRouteCrossConnection.
	CrossConnectionName pulumi.StringInput
	// The GatewayManager Etag.
	GatewayManagerEtag pulumi.StringPtrInput
	// Resource ID.
	Id pulumi.StringPtrInput
	// The IPv6 peering configuration.
	Ipv6PeeringConfig Ipv6ExpressRouteCircuitPeeringConfigPtrInput
	// Gets whether the provider or the customer last modified the peering.
	LastModifiedBy pulumi.StringPtrInput
	// The Microsoft peering configuration.
	MicrosoftPeeringConfig ExpressRouteCircuitPeeringConfigPtrInput
	// Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name pulumi.StringPtrInput
	// The peer ASN.
	PeerASN pulumi.IntPtrInput
	// The name of the peering.
	PeeringName pulumi.StringInput
	// The peering type.
	PeeringType pulumi.StringPtrInput
	// The primary address prefix.
	PrimaryPeerAddressPrefix pulumi.StringPtrInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The secondary address prefix.
	SecondaryPeerAddressPrefix pulumi.StringPtrInput
	// The shared key.
	SharedKey pulumi.StringPtrInput
	// The peering state.
	State pulumi.StringPtrInput
	// The VLAN ID.
	VlanId pulumi.IntPtrInput
}

func (ExpressRouteCrossConnectionPeeringArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*expressRouteCrossConnectionPeeringArgs)(nil)).Elem()
}

type ExpressRouteCrossConnectionPeeringInput interface {
	pulumi.Input

	ToExpressRouteCrossConnectionPeeringOutput() ExpressRouteCrossConnectionPeeringOutput
	ToExpressRouteCrossConnectionPeeringOutputWithContext(ctx context.Context) ExpressRouteCrossConnectionPeeringOutput
}

func (ExpressRouteCrossConnectionPeering) ElementType() reflect.Type {
	return reflect.TypeOf((*ExpressRouteCrossConnectionPeering)(nil)).Elem()
}

func (i ExpressRouteCrossConnectionPeering) ToExpressRouteCrossConnectionPeeringOutput() ExpressRouteCrossConnectionPeeringOutput {
	return i.ToExpressRouteCrossConnectionPeeringOutputWithContext(context.Background())
}

func (i ExpressRouteCrossConnectionPeering) ToExpressRouteCrossConnectionPeeringOutputWithContext(ctx context.Context) ExpressRouteCrossConnectionPeeringOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ExpressRouteCrossConnectionPeeringOutput)
}

type ExpressRouteCrossConnectionPeeringOutput struct {
	*pulumi.OutputState
}

func (ExpressRouteCrossConnectionPeeringOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ExpressRouteCrossConnectionPeeringOutput)(nil)).Elem()
}

func (o ExpressRouteCrossConnectionPeeringOutput) ToExpressRouteCrossConnectionPeeringOutput() ExpressRouteCrossConnectionPeeringOutput {
	return o
}

func (o ExpressRouteCrossConnectionPeeringOutput) ToExpressRouteCrossConnectionPeeringOutputWithContext(ctx context.Context) ExpressRouteCrossConnectionPeeringOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ExpressRouteCrossConnectionPeeringOutput{})
}
