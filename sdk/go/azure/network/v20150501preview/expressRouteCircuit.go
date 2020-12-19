// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20150501preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// ExpressRouteCircuit resource
type ExpressRouteCircuit struct {
	pulumi.CustomResourceState

	// Gets or sets list of authorizations
	Authorizations ExpressRouteCircuitAuthorizationResponseArrayOutput `pulumi:"authorizations"`
	// Gets or sets CircuitProvisioningState state of the resource
	CircuitProvisioningState pulumi.StringPtrOutput `pulumi:"circuitProvisioningState"`
	// Gets a unique read-only string that changes whenever the resource is updated
	Etag pulumi.StringPtrOutput `pulumi:"etag"`
	// Resource location
	Location pulumi.StringOutput `pulumi:"location"`
	// Resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// Gets or sets list of peerings
	Peerings ExpressRouteCircuitPeeringResponseArrayOutput `pulumi:"peerings"`
	// Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
	ProvisioningState pulumi.StringPtrOutput `pulumi:"provisioningState"`
	// Gets or sets ServiceKey
	ServiceKey pulumi.StringPtrOutput `pulumi:"serviceKey"`
	// Gets or sets ServiceProviderNotes
	ServiceProviderNotes pulumi.StringPtrOutput `pulumi:"serviceProviderNotes"`
	// Gets or sets ServiceProviderProperties
	ServiceProviderProperties ExpressRouteCircuitServiceProviderPropertiesResponsePtrOutput `pulumi:"serviceProviderProperties"`
	// Gets or sets ServiceProviderProvisioningState state of the resource
	ServiceProviderProvisioningState pulumi.StringPtrOutput `pulumi:"serviceProviderProvisioningState"`
	// Gets or sets sku
	Sku ExpressRouteCircuitSkuResponsePtrOutput `pulumi:"sku"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewExpressRouteCircuit registers a new resource with the given unique name, arguments, and options.
func NewExpressRouteCircuit(ctx *pulumi.Context,
	name string, args *ExpressRouteCircuitArgs, opts ...pulumi.ResourceOption) (*ExpressRouteCircuit, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.CircuitName == nil {
		return nil, errors.New("invalid value for required argument 'CircuitName'")
	}
	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/latest:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20150615:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160330:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160601:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20160901:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20161201:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170301:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170601:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170801:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20170901:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20171001:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20171101:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180101:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180201:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180401:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180601:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180701:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180801:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181001:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181101:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181201:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190201:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190401:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190601:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190701:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190801:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190901:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191101:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191201:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200301:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200401:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200501:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200601:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200701:ExpressRouteCircuit"),
		},
	})
	opts = append(opts, aliases)
	var resource ExpressRouteCircuit
	err := ctx.RegisterResource("azure-nextgen:network/v20150501preview:ExpressRouteCircuit", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetExpressRouteCircuit gets an existing ExpressRouteCircuit resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetExpressRouteCircuit(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ExpressRouteCircuitState, opts ...pulumi.ResourceOption) (*ExpressRouteCircuit, error) {
	var resource ExpressRouteCircuit
	err := ctx.ReadResource("azure-nextgen:network/v20150501preview:ExpressRouteCircuit", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ExpressRouteCircuit resources.
type expressRouteCircuitState struct {
	// Gets or sets list of authorizations
	Authorizations []ExpressRouteCircuitAuthorizationResponse `pulumi:"authorizations"`
	// Gets or sets CircuitProvisioningState state of the resource
	CircuitProvisioningState *string `pulumi:"circuitProvisioningState"`
	// Gets a unique read-only string that changes whenever the resource is updated
	Etag *string `pulumi:"etag"`
	// Resource location
	Location *string `pulumi:"location"`
	// Resource name
	Name *string `pulumi:"name"`
	// Gets or sets list of peerings
	Peerings []ExpressRouteCircuitPeeringResponse `pulumi:"peerings"`
	// Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
	ProvisioningState *string `pulumi:"provisioningState"`
	// Gets or sets ServiceKey
	ServiceKey *string `pulumi:"serviceKey"`
	// Gets or sets ServiceProviderNotes
	ServiceProviderNotes *string `pulumi:"serviceProviderNotes"`
	// Gets or sets ServiceProviderProperties
	ServiceProviderProperties *ExpressRouteCircuitServiceProviderPropertiesResponse `pulumi:"serviceProviderProperties"`
	// Gets or sets ServiceProviderProvisioningState state of the resource
	ServiceProviderProvisioningState *string `pulumi:"serviceProviderProvisioningState"`
	// Gets or sets sku
	Sku *ExpressRouteCircuitSkuResponse `pulumi:"sku"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type *string `pulumi:"type"`
}

type ExpressRouteCircuitState struct {
	// Gets or sets list of authorizations
	Authorizations ExpressRouteCircuitAuthorizationResponseArrayInput
	// Gets or sets CircuitProvisioningState state of the resource
	CircuitProvisioningState pulumi.StringPtrInput
	// Gets a unique read-only string that changes whenever the resource is updated
	Etag pulumi.StringPtrInput
	// Resource location
	Location pulumi.StringPtrInput
	// Resource name
	Name pulumi.StringPtrInput
	// Gets or sets list of peerings
	Peerings ExpressRouteCircuitPeeringResponseArrayInput
	// Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
	ProvisioningState pulumi.StringPtrInput
	// Gets or sets ServiceKey
	ServiceKey pulumi.StringPtrInput
	// Gets or sets ServiceProviderNotes
	ServiceProviderNotes pulumi.StringPtrInput
	// Gets or sets ServiceProviderProperties
	ServiceProviderProperties ExpressRouteCircuitServiceProviderPropertiesResponsePtrInput
	// Gets or sets ServiceProviderProvisioningState state of the resource
	ServiceProviderProvisioningState pulumi.StringPtrInput
	// Gets or sets sku
	Sku ExpressRouteCircuitSkuResponsePtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Resource type
	Type pulumi.StringPtrInput
}

func (ExpressRouteCircuitState) ElementType() reflect.Type {
	return reflect.TypeOf((*expressRouteCircuitState)(nil)).Elem()
}

type expressRouteCircuitArgs struct {
	// Gets or sets list of authorizations
	Authorizations []ExpressRouteCircuitAuthorizationType `pulumi:"authorizations"`
	// The name of the circuit.
	CircuitName string `pulumi:"circuitName"`
	// Gets or sets CircuitProvisioningState state of the resource
	CircuitProvisioningState *string `pulumi:"circuitProvisioningState"`
	// Gets a unique read-only string that changes whenever the resource is updated
	Etag *string `pulumi:"etag"`
	// Resource location
	Location string `pulumi:"location"`
	// Gets or sets list of peerings
	Peerings []ExpressRouteCircuitPeeringType `pulumi:"peerings"`
	// Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
	ProvisioningState *string `pulumi:"provisioningState"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Gets or sets ServiceKey
	ServiceKey *string `pulumi:"serviceKey"`
	// Gets or sets ServiceProviderNotes
	ServiceProviderNotes *string `pulumi:"serviceProviderNotes"`
	// Gets or sets ServiceProviderProperties
	ServiceProviderProperties *ExpressRouteCircuitServiceProviderProperties `pulumi:"serviceProviderProperties"`
	// Gets or sets ServiceProviderProvisioningState state of the resource
	ServiceProviderProvisioningState *string `pulumi:"serviceProviderProvisioningState"`
	// Gets or sets sku
	Sku *ExpressRouteCircuitSku `pulumi:"sku"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a ExpressRouteCircuit resource.
type ExpressRouteCircuitArgs struct {
	// Gets or sets list of authorizations
	Authorizations ExpressRouteCircuitAuthorizationTypeArrayInput
	// The name of the circuit.
	CircuitName pulumi.StringInput
	// Gets or sets CircuitProvisioningState state of the resource
	CircuitProvisioningState pulumi.StringPtrInput
	// Gets a unique read-only string that changes whenever the resource is updated
	Etag pulumi.StringPtrInput
	// Resource location
	Location pulumi.StringInput
	// Gets or sets list of peerings
	Peerings ExpressRouteCircuitPeeringTypeArrayInput
	// Gets or sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
	ProvisioningState pulumi.StringPtrInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// Gets or sets ServiceKey
	ServiceKey pulumi.StringPtrInput
	// Gets or sets ServiceProviderNotes
	ServiceProviderNotes pulumi.StringPtrInput
	// Gets or sets ServiceProviderProperties
	ServiceProviderProperties ExpressRouteCircuitServiceProviderPropertiesPtrInput
	// Gets or sets ServiceProviderProvisioningState state of the resource
	ServiceProviderProvisioningState pulumi.StringPtrInput
	// Gets or sets sku
	Sku ExpressRouteCircuitSkuPtrInput
	// Resource tags
	Tags pulumi.StringMapInput
}

func (ExpressRouteCircuitArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*expressRouteCircuitArgs)(nil)).Elem()
}

type ExpressRouteCircuitInput interface {
	pulumi.Input

	ToExpressRouteCircuitOutput() ExpressRouteCircuitOutput
	ToExpressRouteCircuitOutputWithContext(ctx context.Context) ExpressRouteCircuitOutput
}

func (*ExpressRouteCircuit) ElementType() reflect.Type {
	return reflect.TypeOf((*ExpressRouteCircuit)(nil))
}

func (i *ExpressRouteCircuit) ToExpressRouteCircuitOutput() ExpressRouteCircuitOutput {
	return i.ToExpressRouteCircuitOutputWithContext(context.Background())
}

func (i *ExpressRouteCircuit) ToExpressRouteCircuitOutputWithContext(ctx context.Context) ExpressRouteCircuitOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ExpressRouteCircuitOutput)
}

type ExpressRouteCircuitOutput struct {
	*pulumi.OutputState
}

func (ExpressRouteCircuitOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ExpressRouteCircuit)(nil))
}

func (o ExpressRouteCircuitOutput) ToExpressRouteCircuitOutput() ExpressRouteCircuitOutput {
	return o
}

func (o ExpressRouteCircuitOutput) ToExpressRouteCircuitOutputWithContext(ctx context.Context) ExpressRouteCircuitOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ExpressRouteCircuitOutput{})
}
