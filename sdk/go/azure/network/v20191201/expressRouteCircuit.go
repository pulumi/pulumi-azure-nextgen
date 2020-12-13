// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191201

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// ExpressRouteCircuit resource.
type ExpressRouteCircuit struct {
	pulumi.CustomResourceState

	// Allow classic operations.
	AllowClassicOperations pulumi.BoolPtrOutput `pulumi:"allowClassicOperations"`
	// The list of authorizations.
	Authorizations ExpressRouteCircuitAuthorizationResponseArrayOutput `pulumi:"authorizations"`
	// The bandwidth of the circuit when the circuit is provisioned on an ExpressRoutePort resource.
	BandwidthInGbps pulumi.Float64PtrOutput `pulumi:"bandwidthInGbps"`
	// The CircuitProvisioningState state of the resource.
	CircuitProvisioningState pulumi.StringPtrOutput `pulumi:"circuitProvisioningState"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// The reference to the ExpressRoutePort resource when the circuit is provisioned on an ExpressRoutePort resource.
	ExpressRoutePort SubResourceResponsePtrOutput `pulumi:"expressRoutePort"`
	// The GatewayManager Etag.
	GatewayManagerEtag pulumi.StringPtrOutput `pulumi:"gatewayManagerEtag"`
	// Flag denoting global reach status.
	GlobalReachEnabled pulumi.BoolPtrOutput `pulumi:"globalReachEnabled"`
	// Resource location.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The list of peerings.
	Peerings ExpressRouteCircuitPeeringResponseArrayOutput `pulumi:"peerings"`
	// The provisioning state of the express route circuit resource.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The ServiceKey.
	ServiceKey pulumi.StringPtrOutput `pulumi:"serviceKey"`
	// The ServiceProviderNotes.
	ServiceProviderNotes pulumi.StringPtrOutput `pulumi:"serviceProviderNotes"`
	// The ServiceProviderProperties.
	ServiceProviderProperties ExpressRouteCircuitServiceProviderPropertiesResponsePtrOutput `pulumi:"serviceProviderProperties"`
	// The ServiceProviderProvisioningState state of the resource.
	ServiceProviderProvisioningState pulumi.StringPtrOutput `pulumi:"serviceProviderProvisioningState"`
	// The SKU.
	Sku ExpressRouteCircuitSkuResponsePtrOutput `pulumi:"sku"`
	// The identifier of the circuit traffic. Outer tag for QinQ encapsulation.
	Stag pulumi.IntOutput `pulumi:"stag"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type.
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
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/latest:ExpressRouteCircuit"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20150501preview:ExpressRouteCircuit"),
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
	err := ctx.RegisterResource("azure-nextgen:network/v20191201:ExpressRouteCircuit", name, args, &resource, opts...)
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
	err := ctx.ReadResource("azure-nextgen:network/v20191201:ExpressRouteCircuit", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ExpressRouteCircuit resources.
type expressRouteCircuitState struct {
	// Allow classic operations.
	AllowClassicOperations *bool `pulumi:"allowClassicOperations"`
	// The list of authorizations.
	Authorizations []ExpressRouteCircuitAuthorizationResponse `pulumi:"authorizations"`
	// The bandwidth of the circuit when the circuit is provisioned on an ExpressRoutePort resource.
	BandwidthInGbps *float64 `pulumi:"bandwidthInGbps"`
	// The CircuitProvisioningState state of the resource.
	CircuitProvisioningState *string `pulumi:"circuitProvisioningState"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// The reference to the ExpressRoutePort resource when the circuit is provisioned on an ExpressRoutePort resource.
	ExpressRoutePort *SubResourceResponse `pulumi:"expressRoutePort"`
	// The GatewayManager Etag.
	GatewayManagerEtag *string `pulumi:"gatewayManagerEtag"`
	// Flag denoting global reach status.
	GlobalReachEnabled *bool `pulumi:"globalReachEnabled"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name *string `pulumi:"name"`
	// The list of peerings.
	Peerings []ExpressRouteCircuitPeeringResponse `pulumi:"peerings"`
	// The provisioning state of the express route circuit resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The ServiceKey.
	ServiceKey *string `pulumi:"serviceKey"`
	// The ServiceProviderNotes.
	ServiceProviderNotes *string `pulumi:"serviceProviderNotes"`
	// The ServiceProviderProperties.
	ServiceProviderProperties *ExpressRouteCircuitServiceProviderPropertiesResponse `pulumi:"serviceProviderProperties"`
	// The ServiceProviderProvisioningState state of the resource.
	ServiceProviderProvisioningState *string `pulumi:"serviceProviderProvisioningState"`
	// The SKU.
	Sku *ExpressRouteCircuitSkuResponse `pulumi:"sku"`
	// The identifier of the circuit traffic. Outer tag for QinQ encapsulation.
	Stag *int `pulumi:"stag"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type ExpressRouteCircuitState struct {
	// Allow classic operations.
	AllowClassicOperations pulumi.BoolPtrInput
	// The list of authorizations.
	Authorizations ExpressRouteCircuitAuthorizationResponseArrayInput
	// The bandwidth of the circuit when the circuit is provisioned on an ExpressRoutePort resource.
	BandwidthInGbps pulumi.Float64PtrInput
	// The CircuitProvisioningState state of the resource.
	CircuitProvisioningState pulumi.StringPtrInput
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// The reference to the ExpressRoutePort resource when the circuit is provisioned on an ExpressRoutePort resource.
	ExpressRoutePort SubResourceResponsePtrInput
	// The GatewayManager Etag.
	GatewayManagerEtag pulumi.StringPtrInput
	// Flag denoting global reach status.
	GlobalReachEnabled pulumi.BoolPtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// The list of peerings.
	Peerings ExpressRouteCircuitPeeringResponseArrayInput
	// The provisioning state of the express route circuit resource.
	ProvisioningState pulumi.StringPtrInput
	// The ServiceKey.
	ServiceKey pulumi.StringPtrInput
	// The ServiceProviderNotes.
	ServiceProviderNotes pulumi.StringPtrInput
	// The ServiceProviderProperties.
	ServiceProviderProperties ExpressRouteCircuitServiceProviderPropertiesResponsePtrInput
	// The ServiceProviderProvisioningState state of the resource.
	ServiceProviderProvisioningState pulumi.StringPtrInput
	// The SKU.
	Sku ExpressRouteCircuitSkuResponsePtrInput
	// The identifier of the circuit traffic. Outer tag for QinQ encapsulation.
	Stag pulumi.IntPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (ExpressRouteCircuitState) ElementType() reflect.Type {
	return reflect.TypeOf((*expressRouteCircuitState)(nil)).Elem()
}

type expressRouteCircuitArgs struct {
	// Allow classic operations.
	AllowClassicOperations *bool `pulumi:"allowClassicOperations"`
	// The list of authorizations.
	Authorizations []ExpressRouteCircuitAuthorizationType `pulumi:"authorizations"`
	// The bandwidth of the circuit when the circuit is provisioned on an ExpressRoutePort resource.
	BandwidthInGbps *float64 `pulumi:"bandwidthInGbps"`
	// The name of the circuit.
	CircuitName string `pulumi:"circuitName"`
	// The CircuitProvisioningState state of the resource.
	CircuitProvisioningState *string `pulumi:"circuitProvisioningState"`
	// The reference to the ExpressRoutePort resource when the circuit is provisioned on an ExpressRoutePort resource.
	ExpressRoutePort *SubResource `pulumi:"expressRoutePort"`
	// The GatewayManager Etag.
	GatewayManagerEtag *string `pulumi:"gatewayManagerEtag"`
	// Flag denoting global reach status.
	GlobalReachEnabled *bool `pulumi:"globalReachEnabled"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Resource location.
	Location *string `pulumi:"location"`
	// The list of peerings.
	Peerings []ExpressRouteCircuitPeeringType `pulumi:"peerings"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The ServiceKey.
	ServiceKey *string `pulumi:"serviceKey"`
	// The ServiceProviderNotes.
	ServiceProviderNotes *string `pulumi:"serviceProviderNotes"`
	// The ServiceProviderProperties.
	ServiceProviderProperties *ExpressRouteCircuitServiceProviderProperties `pulumi:"serviceProviderProperties"`
	// The ServiceProviderProvisioningState state of the resource.
	ServiceProviderProvisioningState *string `pulumi:"serviceProviderProvisioningState"`
	// The SKU.
	Sku *ExpressRouteCircuitSku `pulumi:"sku"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a ExpressRouteCircuit resource.
type ExpressRouteCircuitArgs struct {
	// Allow classic operations.
	AllowClassicOperations pulumi.BoolPtrInput
	// The list of authorizations.
	Authorizations ExpressRouteCircuitAuthorizationTypeArrayInput
	// The bandwidth of the circuit when the circuit is provisioned on an ExpressRoutePort resource.
	BandwidthInGbps pulumi.Float64PtrInput
	// The name of the circuit.
	CircuitName pulumi.StringInput
	// The CircuitProvisioningState state of the resource.
	CircuitProvisioningState pulumi.StringPtrInput
	// The reference to the ExpressRoutePort resource when the circuit is provisioned on an ExpressRoutePort resource.
	ExpressRoutePort SubResourcePtrInput
	// The GatewayManager Etag.
	GatewayManagerEtag pulumi.StringPtrInput
	// Flag denoting global reach status.
	GlobalReachEnabled pulumi.BoolPtrInput
	// Resource ID.
	Id pulumi.StringPtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// The list of peerings.
	Peerings ExpressRouteCircuitPeeringTypeArrayInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The ServiceKey.
	ServiceKey pulumi.StringPtrInput
	// The ServiceProviderNotes.
	ServiceProviderNotes pulumi.StringPtrInput
	// The ServiceProviderProperties.
	ServiceProviderProperties ExpressRouteCircuitServiceProviderPropertiesPtrInput
	// The ServiceProviderProvisioningState state of the resource.
	ServiceProviderProvisioningState pulumi.StringPtrInput
	// The SKU.
	Sku ExpressRouteCircuitSkuPtrInput
	// Resource tags.
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

func (ExpressRouteCircuit) ElementType() reflect.Type {
	return reflect.TypeOf((*ExpressRouteCircuit)(nil)).Elem()
}

func (i ExpressRouteCircuit) ToExpressRouteCircuitOutput() ExpressRouteCircuitOutput {
	return i.ToExpressRouteCircuitOutputWithContext(context.Background())
}

func (i ExpressRouteCircuit) ToExpressRouteCircuitOutputWithContext(ctx context.Context) ExpressRouteCircuitOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ExpressRouteCircuitOutput)
}

type ExpressRouteCircuitOutput struct {
	*pulumi.OutputState
}

func (ExpressRouteCircuitOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ExpressRouteCircuitOutput)(nil)).Elem()
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
