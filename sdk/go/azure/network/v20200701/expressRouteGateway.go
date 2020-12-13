// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200701

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// ExpressRoute gateway resource.
type ExpressRouteGateway struct {
	pulumi.CustomResourceState

	// Configuration for auto scaling.
	AutoScaleConfiguration ExpressRouteGatewayPropertiesResponseAutoScaleConfigurationPtrOutput `pulumi:"autoScaleConfiguration"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// List of ExpressRoute connections to the ExpressRoute gateway.
	ExpressRouteConnections ExpressRouteConnectionResponseArrayOutput `pulumi:"expressRouteConnections"`
	// Resource location.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The provisioning state of the express route gateway resource.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// The Virtual Hub where the ExpressRoute gateway is or will be deployed.
	VirtualHub VirtualHubIdResponseOutput `pulumi:"virtualHub"`
}

// NewExpressRouteGateway registers a new resource with the given unique name, arguments, and options.
func NewExpressRouteGateway(ctx *pulumi.Context,
	name string, args *ExpressRouteGatewayArgs, opts ...pulumi.ResourceOption) (*ExpressRouteGateway, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ExpressRouteGatewayName == nil {
		return nil, errors.New("invalid value for required argument 'ExpressRouteGatewayName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.VirtualHub == nil {
		return nil, errors.New("invalid value for required argument 'VirtualHub'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/latest:ExpressRouteGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180801:ExpressRouteGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181001:ExpressRouteGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181101:ExpressRouteGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181201:ExpressRouteGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190201:ExpressRouteGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190401:ExpressRouteGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190601:ExpressRouteGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190701:ExpressRouteGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190801:ExpressRouteGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190901:ExpressRouteGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191101:ExpressRouteGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191201:ExpressRouteGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200301:ExpressRouteGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200401:ExpressRouteGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200501:ExpressRouteGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200601:ExpressRouteGateway"),
		},
	})
	opts = append(opts, aliases)
	var resource ExpressRouteGateway
	err := ctx.RegisterResource("azure-nextgen:network/v20200701:ExpressRouteGateway", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetExpressRouteGateway gets an existing ExpressRouteGateway resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetExpressRouteGateway(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ExpressRouteGatewayState, opts ...pulumi.ResourceOption) (*ExpressRouteGateway, error) {
	var resource ExpressRouteGateway
	err := ctx.ReadResource("azure-nextgen:network/v20200701:ExpressRouteGateway", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ExpressRouteGateway resources.
type expressRouteGatewayState struct {
	// Configuration for auto scaling.
	AutoScaleConfiguration *ExpressRouteGatewayPropertiesResponseAutoScaleConfiguration `pulumi:"autoScaleConfiguration"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// List of ExpressRoute connections to the ExpressRoute gateway.
	ExpressRouteConnections []ExpressRouteConnectionResponse `pulumi:"expressRouteConnections"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name *string `pulumi:"name"`
	// The provisioning state of the express route gateway resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type *string `pulumi:"type"`
	// The Virtual Hub where the ExpressRoute gateway is or will be deployed.
	VirtualHub *VirtualHubIdResponse `pulumi:"virtualHub"`
}

type ExpressRouteGatewayState struct {
	// Configuration for auto scaling.
	AutoScaleConfiguration ExpressRouteGatewayPropertiesResponseAutoScaleConfigurationPtrInput
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// List of ExpressRoute connections to the ExpressRoute gateway.
	ExpressRouteConnections ExpressRouteConnectionResponseArrayInput
	// Resource location.
	Location pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// The provisioning state of the express route gateway resource.
	ProvisioningState pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// Resource type.
	Type pulumi.StringPtrInput
	// The Virtual Hub where the ExpressRoute gateway is or will be deployed.
	VirtualHub VirtualHubIdResponsePtrInput
}

func (ExpressRouteGatewayState) ElementType() reflect.Type {
	return reflect.TypeOf((*expressRouteGatewayState)(nil)).Elem()
}

type expressRouteGatewayArgs struct {
	// Configuration for auto scaling.
	AutoScaleConfiguration *ExpressRouteGatewayPropertiesAutoScaleConfiguration `pulumi:"autoScaleConfiguration"`
	// The name of the ExpressRoute gateway.
	ExpressRouteGatewayName string `pulumi:"expressRouteGatewayName"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Resource location.
	Location *string `pulumi:"location"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The Virtual Hub where the ExpressRoute gateway is or will be deployed.
	VirtualHub VirtualHubId `pulumi:"virtualHub"`
}

// The set of arguments for constructing a ExpressRouteGateway resource.
type ExpressRouteGatewayArgs struct {
	// Configuration for auto scaling.
	AutoScaleConfiguration ExpressRouteGatewayPropertiesAutoScaleConfigurationPtrInput
	// The name of the ExpressRoute gateway.
	ExpressRouteGatewayName pulumi.StringInput
	// Resource ID.
	Id pulumi.StringPtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The Virtual Hub where the ExpressRoute gateway is or will be deployed.
	VirtualHub VirtualHubIdInput
}

func (ExpressRouteGatewayArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*expressRouteGatewayArgs)(nil)).Elem()
}

type ExpressRouteGatewayInput interface {
	pulumi.Input

	ToExpressRouteGatewayOutput() ExpressRouteGatewayOutput
	ToExpressRouteGatewayOutputWithContext(ctx context.Context) ExpressRouteGatewayOutput
}

func (ExpressRouteGateway) ElementType() reflect.Type {
	return reflect.TypeOf((*ExpressRouteGateway)(nil)).Elem()
}

func (i ExpressRouteGateway) ToExpressRouteGatewayOutput() ExpressRouteGatewayOutput {
	return i.ToExpressRouteGatewayOutputWithContext(context.Background())
}

func (i ExpressRouteGateway) ToExpressRouteGatewayOutputWithContext(ctx context.Context) ExpressRouteGatewayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ExpressRouteGatewayOutput)
}

type ExpressRouteGatewayOutput struct {
	*pulumi.OutputState
}

func (ExpressRouteGatewayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ExpressRouteGatewayOutput)(nil)).Elem()
}

func (o ExpressRouteGatewayOutput) ToExpressRouteGatewayOutput() ExpressRouteGatewayOutput {
	return o
}

func (o ExpressRouteGatewayOutput) ToExpressRouteGatewayOutputWithContext(ctx context.Context) ExpressRouteGatewayOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ExpressRouteGatewayOutput{})
}
