// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200101preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Peering is a logical representation of a set of connections to the Microsoft Cloud Edge at a location.
type Peering struct {
	pulumi.CustomResourceState

	// The properties that define a direct peering.
	Direct PeeringPropertiesDirectResponsePtrOutput `pulumi:"direct"`
	// The properties that define an exchange peering.
	Exchange PeeringPropertiesExchangeResponsePtrOutput `pulumi:"exchange"`
	// The kind of the peering.
	Kind pulumi.StringOutput `pulumi:"kind"`
	// The location of the resource.
	Location pulumi.StringOutput `pulumi:"location"`
	// The name of the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// The location of the peering.
	PeeringLocation pulumi.StringPtrOutput `pulumi:"peeringLocation"`
	// The provisioning state of the resource.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The SKU that defines the tier and kind of the peering.
	Sku PeeringSkuResponseOutput `pulumi:"sku"`
	// The resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewPeering registers a new resource with the given unique name, arguments, and options.
func NewPeering(ctx *pulumi.Context,
	name string, args *PeeringArgs, opts ...pulumi.ResourceOption) (*Peering, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Kind == nil {
		return nil, errors.New("invalid value for required argument 'Kind'")
	}
	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.PeeringName == nil {
		return nil, errors.New("invalid value for required argument 'PeeringName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.Sku == nil {
		return nil, errors.New("invalid value for required argument 'Sku'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:peering/latest:Peering"),
		},
		{
			Type: pulumi.String("azure-nextgen:peering/v20190801preview:Peering"),
		},
		{
			Type: pulumi.String("azure-nextgen:peering/v20190901preview:Peering"),
		},
		{
			Type: pulumi.String("azure-nextgen:peering/v20200401:Peering"),
		},
		{
			Type: pulumi.String("azure-nextgen:peering/v20201001:Peering"),
		},
	})
	opts = append(opts, aliases)
	var resource Peering
	err := ctx.RegisterResource("azure-nextgen:peering/v20200101preview:Peering", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetPeering gets an existing Peering resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPeering(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *PeeringState, opts ...pulumi.ResourceOption) (*Peering, error) {
	var resource Peering
	err := ctx.ReadResource("azure-nextgen:peering/v20200101preview:Peering", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Peering resources.
type peeringState struct {
	// The properties that define a direct peering.
	Direct *PeeringPropertiesDirectResponse `pulumi:"direct"`
	// The properties that define an exchange peering.
	Exchange *PeeringPropertiesExchangeResponse `pulumi:"exchange"`
	// The kind of the peering.
	Kind *string `pulumi:"kind"`
	// The location of the resource.
	Location *string `pulumi:"location"`
	// The name of the resource.
	Name *string `pulumi:"name"`
	// The location of the peering.
	PeeringLocation *string `pulumi:"peeringLocation"`
	// The provisioning state of the resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The SKU that defines the tier and kind of the peering.
	Sku *PeeringSkuResponse `pulumi:"sku"`
	// The resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource.
	Type *string `pulumi:"type"`
}

type PeeringState struct {
	// The properties that define a direct peering.
	Direct PeeringPropertiesDirectResponsePtrInput
	// The properties that define an exchange peering.
	Exchange PeeringPropertiesExchangeResponsePtrInput
	// The kind of the peering.
	Kind pulumi.StringPtrInput
	// The location of the resource.
	Location pulumi.StringPtrInput
	// The name of the resource.
	Name pulumi.StringPtrInput
	// The location of the peering.
	PeeringLocation pulumi.StringPtrInput
	// The provisioning state of the resource.
	ProvisioningState pulumi.StringPtrInput
	// The SKU that defines the tier and kind of the peering.
	Sku PeeringSkuResponsePtrInput
	// The resource tags.
	Tags pulumi.StringMapInput
	// The type of the resource.
	Type pulumi.StringPtrInput
}

func (PeeringState) ElementType() reflect.Type {
	return reflect.TypeOf((*peeringState)(nil)).Elem()
}

type peeringArgs struct {
	// The properties that define a direct peering.
	Direct *PeeringPropertiesDirect `pulumi:"direct"`
	// The properties that define an exchange peering.
	Exchange *PeeringPropertiesExchange `pulumi:"exchange"`
	// The kind of the peering.
	Kind string `pulumi:"kind"`
	// The location of the resource.
	Location string `pulumi:"location"`
	// The location of the peering.
	PeeringLocation *string `pulumi:"peeringLocation"`
	// The name of the peering.
	PeeringName string `pulumi:"peeringName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The SKU that defines the tier and kind of the peering.
	Sku PeeringSku `pulumi:"sku"`
	// The resource tags.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a Peering resource.
type PeeringArgs struct {
	// The properties that define a direct peering.
	Direct PeeringPropertiesDirectPtrInput
	// The properties that define an exchange peering.
	Exchange PeeringPropertiesExchangePtrInput
	// The kind of the peering.
	Kind pulumi.StringInput
	// The location of the resource.
	Location pulumi.StringInput
	// The location of the peering.
	PeeringLocation pulumi.StringPtrInput
	// The name of the peering.
	PeeringName pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The SKU that defines the tier and kind of the peering.
	Sku PeeringSkuInput
	// The resource tags.
	Tags pulumi.StringMapInput
}

func (PeeringArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*peeringArgs)(nil)).Elem()
}

type PeeringInput interface {
	pulumi.Input

	ToPeeringOutput() PeeringOutput
	ToPeeringOutputWithContext(ctx context.Context) PeeringOutput
}

func (*Peering) ElementType() reflect.Type {
	return reflect.TypeOf((*Peering)(nil))
}

func (i *Peering) ToPeeringOutput() PeeringOutput {
	return i.ToPeeringOutputWithContext(context.Background())
}

func (i *Peering) ToPeeringOutputWithContext(ctx context.Context) PeeringOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PeeringOutput)
}

type PeeringOutput struct {
	*pulumi.OutputState
}

func (PeeringOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Peering)(nil))
}

func (o PeeringOutput) ToPeeringOutput() PeeringOutput {
	return o
}

func (o PeeringOutput) ToPeeringOutputWithContext(ctx context.Context) PeeringOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(PeeringOutput{})
}
