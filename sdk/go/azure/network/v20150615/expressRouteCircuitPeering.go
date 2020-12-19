// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20150615

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Peering in an ExpressRouteCircuit resource.
type ExpressRouteCircuitPeering struct {
	pulumi.CustomResourceState

	// The Azure ASN.
	AzureASN pulumi.IntPtrOutput `pulumi:"azureASN"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrOutput `pulumi:"etag"`
	// The Microsoft peering configuration.
	MicrosoftPeeringConfig ExpressRouteCircuitPeeringConfigResponsePtrOutput `pulumi:"microsoftPeeringConfig"`
	// Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name pulumi.StringPtrOutput `pulumi:"name"`
	// The peer ASN.
	PeerASN pulumi.IntPtrOutput `pulumi:"peerASN"`
	// The PeeringType. Possible values are: 'AzurePublicPeering', 'AzurePrivatePeering', and 'MicrosoftPeering'.
	PeeringType pulumi.StringPtrOutput `pulumi:"peeringType"`
	// The primary port.
	PrimaryAzurePort pulumi.StringPtrOutput `pulumi:"primaryAzurePort"`
	// The primary address prefix.
	PrimaryPeerAddressPrefix pulumi.StringPtrOutput `pulumi:"primaryPeerAddressPrefix"`
	// Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState pulumi.StringPtrOutput `pulumi:"provisioningState"`
	// The secondary port.
	SecondaryAzurePort pulumi.StringPtrOutput `pulumi:"secondaryAzurePort"`
	// The secondary address prefix.
	SecondaryPeerAddressPrefix pulumi.StringPtrOutput `pulumi:"secondaryPeerAddressPrefix"`
	// The shared key.
	SharedKey pulumi.StringPtrOutput `pulumi:"sharedKey"`
	// The state of peering. Possible values are: 'Disabled' and 'Enabled'
	State pulumi.StringPtrOutput `pulumi:"state"`
	// Gets peering stats.
	Stats ExpressRouteCircuitStatsResponsePtrOutput `pulumi:"stats"`
	// The VLAN ID.
	VlanId pulumi.IntPtrOutput `pulumi:"vlanId"`
}

// NewExpressRouteCircuitPeering registers a new resource with the given unique name, arguments, and options.
func NewExpressRouteCircuitPeering(ctx *pulumi.Context,
	name string, args *ExpressRouteCircuitPeeringArgs, opts ...pulumi.ResourceOption) (*ExpressRouteCircuitPeering, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.CircuitName == nil {
		return nil, errors.New("invalid value for required argument 'CircuitName'")
	}
	if args.PeeringName == nil {
		return nil, errors.New("invalid value for required argument 'PeeringName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/latest:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20150501preview:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160330:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160601:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160901:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20161201:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170301:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170601:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170801:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170901:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20171001:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20171101:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180101:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180201:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180401:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180601:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180701:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180801:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181001:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181101:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181201:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190201:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190401:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190601:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190701:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190801:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190901:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191101:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191201:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200301:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200401:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200501:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200601:ExpressRouteCircuitPeering"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200701:ExpressRouteCircuitPeering"),
		},
	})
	opts = append(opts, aliases)
	var resource ExpressRouteCircuitPeering
	err := ctx.RegisterResource("azure-nextgen:network/v20150615:ExpressRouteCircuitPeering", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetExpressRouteCircuitPeering gets an existing ExpressRouteCircuitPeering resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetExpressRouteCircuitPeering(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ExpressRouteCircuitPeeringState, opts ...pulumi.ResourceOption) (*ExpressRouteCircuitPeering, error) {
	var resource ExpressRouteCircuitPeering
	err := ctx.ReadResource("azure-nextgen:network/v20150615:ExpressRouteCircuitPeering", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ExpressRouteCircuitPeering resources.
type expressRouteCircuitPeeringState struct {
	// The Azure ASN.
	AzureASN *int `pulumi:"azureASN"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// The Microsoft peering configuration.
	MicrosoftPeeringConfig *ExpressRouteCircuitPeeringConfigResponse `pulumi:"microsoftPeeringConfig"`
	// Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name *string `pulumi:"name"`
	// The peer ASN.
	PeerASN *int `pulumi:"peerASN"`
	// The PeeringType. Possible values are: 'AzurePublicPeering', 'AzurePrivatePeering', and 'MicrosoftPeering'.
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
	// The state of peering. Possible values are: 'Disabled' and 'Enabled'
	State *string `pulumi:"state"`
	// Gets peering stats.
	Stats *ExpressRouteCircuitStatsResponse `pulumi:"stats"`
	// The VLAN ID.
	VlanId *int `pulumi:"vlanId"`
}

type ExpressRouteCircuitPeeringState struct {
	// The Azure ASN.
	AzureASN pulumi.IntPtrInput
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// The Microsoft peering configuration.
	MicrosoftPeeringConfig ExpressRouteCircuitPeeringConfigResponsePtrInput
	// Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name pulumi.StringPtrInput
	// The peer ASN.
	PeerASN pulumi.IntPtrInput
	// The PeeringType. Possible values are: 'AzurePublicPeering', 'AzurePrivatePeering', and 'MicrosoftPeering'.
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
	// The state of peering. Possible values are: 'Disabled' and 'Enabled'
	State pulumi.StringPtrInput
	// Gets peering stats.
	Stats ExpressRouteCircuitStatsResponsePtrInput
	// The VLAN ID.
	VlanId pulumi.IntPtrInput
}

func (ExpressRouteCircuitPeeringState) ElementType() reflect.Type {
	return reflect.TypeOf((*expressRouteCircuitPeeringState)(nil)).Elem()
}

type expressRouteCircuitPeeringArgs struct {
	// The Azure ASN.
	AzureASN *int `pulumi:"azureASN"`
	// The name of the express route circuit.
	CircuitName string `pulumi:"circuitName"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// Resource Identifier.
	Id *string `pulumi:"id"`
	// The Microsoft peering configuration.
	MicrosoftPeeringConfig *ExpressRouteCircuitPeeringConfig `pulumi:"microsoftPeeringConfig"`
	// Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name *string `pulumi:"name"`
	// The peer ASN.
	PeerASN *int `pulumi:"peerASN"`
	// The name of the peering.
	PeeringName string `pulumi:"peeringName"`
	// The PeeringType. Possible values are: 'AzurePublicPeering', 'AzurePrivatePeering', and 'MicrosoftPeering'.
	PeeringType *string `pulumi:"peeringType"`
	// The primary port.
	PrimaryAzurePort *string `pulumi:"primaryAzurePort"`
	// The primary address prefix.
	PrimaryPeerAddressPrefix *string `pulumi:"primaryPeerAddressPrefix"`
	// Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The secondary port.
	SecondaryAzurePort *string `pulumi:"secondaryAzurePort"`
	// The secondary address prefix.
	SecondaryPeerAddressPrefix *string `pulumi:"secondaryPeerAddressPrefix"`
	// The shared key.
	SharedKey *string `pulumi:"sharedKey"`
	// The state of peering. Possible values are: 'Disabled' and 'Enabled'
	State *string `pulumi:"state"`
	// Gets peering stats.
	Stats *ExpressRouteCircuitStats `pulumi:"stats"`
	// The VLAN ID.
	VlanId *int `pulumi:"vlanId"`
}

// The set of arguments for constructing a ExpressRouteCircuitPeering resource.
type ExpressRouteCircuitPeeringArgs struct {
	// The Azure ASN.
	AzureASN pulumi.IntPtrInput
	// The name of the express route circuit.
	CircuitName pulumi.StringInput
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// Resource Identifier.
	Id pulumi.StringPtrInput
	// The Microsoft peering configuration.
	MicrosoftPeeringConfig ExpressRouteCircuitPeeringConfigPtrInput
	// Gets name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name pulumi.StringPtrInput
	// The peer ASN.
	PeerASN pulumi.IntPtrInput
	// The name of the peering.
	PeeringName pulumi.StringInput
	// The PeeringType. Possible values are: 'AzurePublicPeering', 'AzurePrivatePeering', and 'MicrosoftPeering'.
	PeeringType pulumi.StringPtrInput
	// The primary port.
	PrimaryAzurePort pulumi.StringPtrInput
	// The primary address prefix.
	PrimaryPeerAddressPrefix pulumi.StringPtrInput
	// Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState pulumi.StringPtrInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The secondary port.
	SecondaryAzurePort pulumi.StringPtrInput
	// The secondary address prefix.
	SecondaryPeerAddressPrefix pulumi.StringPtrInput
	// The shared key.
	SharedKey pulumi.StringPtrInput
	// The state of peering. Possible values are: 'Disabled' and 'Enabled'
	State pulumi.StringPtrInput
	// Gets peering stats.
	Stats ExpressRouteCircuitStatsPtrInput
	// The VLAN ID.
	VlanId pulumi.IntPtrInput
}

func (ExpressRouteCircuitPeeringArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*expressRouteCircuitPeeringArgs)(nil)).Elem()
}

type ExpressRouteCircuitPeeringInput interface {
	pulumi.Input

	ToExpressRouteCircuitPeeringOutput() ExpressRouteCircuitPeeringOutput
	ToExpressRouteCircuitPeeringOutputWithContext(ctx context.Context) ExpressRouteCircuitPeeringOutput
}

func (*ExpressRouteCircuitPeering) ElementType() reflect.Type {
	return reflect.TypeOf((*ExpressRouteCircuitPeering)(nil))
}

func (i *ExpressRouteCircuitPeering) ToExpressRouteCircuitPeeringOutput() ExpressRouteCircuitPeeringOutput {
	return i.ToExpressRouteCircuitPeeringOutputWithContext(context.Background())
}

func (i *ExpressRouteCircuitPeering) ToExpressRouteCircuitPeeringOutputWithContext(ctx context.Context) ExpressRouteCircuitPeeringOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ExpressRouteCircuitPeeringOutput)
}

type ExpressRouteCircuitPeeringOutput struct {
	*pulumi.OutputState
}

func (ExpressRouteCircuitPeeringOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ExpressRouteCircuitPeering)(nil))
}

func (o ExpressRouteCircuitPeeringOutput) ToExpressRouteCircuitPeeringOutput() ExpressRouteCircuitPeeringOutput {
	return o
}

func (o ExpressRouteCircuitPeeringOutput) ToExpressRouteCircuitPeeringOutputWithContext(ctx context.Context) ExpressRouteCircuitPeeringOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ExpressRouteCircuitPeeringOutput{})
}
