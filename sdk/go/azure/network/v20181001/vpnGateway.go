// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20181001

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// VpnGateway Resource.
type VpnGateway struct {
	pulumi.CustomResourceState

	// Local network gateway's BGP speaker settings.
	BgpSettings BgpSettingsResponsePtrOutput `pulumi:"bgpSettings"`
	// list of all vpn connections to the gateway.
	Connections VpnConnectionResponseArrayOutput `pulumi:"connections"`
	// Gets a unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// Resource location.
	Location pulumi.StringOutput `pulumi:"location"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The provisioning state of the resource.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// The VirtualHub to which the gateway belongs
	VirtualHub SubResourceResponsePtrOutput `pulumi:"virtualHub"`
	// The scale unit for this vpn gateway.
	VpnGatewayScaleUnit pulumi.IntPtrOutput `pulumi:"vpnGatewayScaleUnit"`
}

// NewVpnGateway registers a new resource with the given unique name, arguments, and options.
func NewVpnGateway(ctx *pulumi.Context,
	name string, args *VpnGatewayArgs, opts ...pulumi.ResourceOption) (*VpnGateway, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.GatewayName == nil {
		return nil, errors.New("invalid value for required argument 'GatewayName'")
	}
	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/latest:VpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180401:VpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180601:VpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180701:VpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180801:VpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181101:VpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181201:VpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190201:VpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190401:VpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190601:VpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190701:VpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190801:VpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190901:VpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191101:VpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191201:VpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200301:VpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200401:VpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200501:VpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200601:VpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200701:VpnGateway"),
		},
	})
	opts = append(opts, aliases)
	var resource VpnGateway
	err := ctx.RegisterResource("azure-nextgen:network/v20181001:VpnGateway", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetVpnGateway gets an existing VpnGateway resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetVpnGateway(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *VpnGatewayState, opts ...pulumi.ResourceOption) (*VpnGateway, error) {
	var resource VpnGateway
	err := ctx.ReadResource("azure-nextgen:network/v20181001:VpnGateway", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering VpnGateway resources.
type vpnGatewayState struct {
	// Local network gateway's BGP speaker settings.
	BgpSettings *BgpSettingsResponse `pulumi:"bgpSettings"`
	// list of all vpn connections to the gateway.
	Connections []VpnConnectionResponse `pulumi:"connections"`
	// Gets a unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name *string `pulumi:"name"`
	// The provisioning state of the resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type *string `pulumi:"type"`
	// The VirtualHub to which the gateway belongs
	VirtualHub *SubResourceResponse `pulumi:"virtualHub"`
	// The scale unit for this vpn gateway.
	VpnGatewayScaleUnit *int `pulumi:"vpnGatewayScaleUnit"`
}

type VpnGatewayState struct {
	// Local network gateway's BGP speaker settings.
	BgpSettings BgpSettingsResponsePtrInput
	// list of all vpn connections to the gateway.
	Connections VpnConnectionResponseArrayInput
	// Gets a unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// The provisioning state of the resource.
	ProvisioningState pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// Resource type.
	Type pulumi.StringPtrInput
	// The VirtualHub to which the gateway belongs
	VirtualHub SubResourceResponsePtrInput
	// The scale unit for this vpn gateway.
	VpnGatewayScaleUnit pulumi.IntPtrInput
}

func (VpnGatewayState) ElementType() reflect.Type {
	return reflect.TypeOf((*vpnGatewayState)(nil)).Elem()
}

type vpnGatewayArgs struct {
	// Local network gateway's BGP speaker settings.
	BgpSettings *BgpSettings `pulumi:"bgpSettings"`
	// list of all vpn connections to the gateway.
	Connections []VpnConnectionType `pulumi:"connections"`
	// The name of the gateway.
	GatewayName string `pulumi:"gatewayName"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Resource location.
	Location string `pulumi:"location"`
	// The resource group name of the VpnGateway.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The VirtualHub to which the gateway belongs
	VirtualHub *SubResource `pulumi:"virtualHub"`
	// The scale unit for this vpn gateway.
	VpnGatewayScaleUnit *int `pulumi:"vpnGatewayScaleUnit"`
}

// The set of arguments for constructing a VpnGateway resource.
type VpnGatewayArgs struct {
	// Local network gateway's BGP speaker settings.
	BgpSettings BgpSettingsPtrInput
	// list of all vpn connections to the gateway.
	Connections VpnConnectionTypeArrayInput
	// The name of the gateway.
	GatewayName pulumi.StringInput
	// Resource ID.
	Id pulumi.StringPtrInput
	// Resource location.
	Location pulumi.StringInput
	// The resource group name of the VpnGateway.
	ResourceGroupName pulumi.StringInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The VirtualHub to which the gateway belongs
	VirtualHub SubResourcePtrInput
	// The scale unit for this vpn gateway.
	VpnGatewayScaleUnit pulumi.IntPtrInput
}

func (VpnGatewayArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*vpnGatewayArgs)(nil)).Elem()
}

type VpnGatewayInput interface {
	pulumi.Input

	ToVpnGatewayOutput() VpnGatewayOutput
	ToVpnGatewayOutputWithContext(ctx context.Context) VpnGatewayOutput
}

func (VpnGateway) ElementType() reflect.Type {
	return reflect.TypeOf((*VpnGateway)(nil)).Elem()
}

func (i VpnGateway) ToVpnGatewayOutput() VpnGatewayOutput {
	return i.ToVpnGatewayOutputWithContext(context.Background())
}

func (i VpnGateway) ToVpnGatewayOutputWithContext(ctx context.Context) VpnGatewayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(VpnGatewayOutput)
}

type VpnGatewayOutput struct {
	*pulumi.OutputState
}

func (VpnGatewayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*VpnGatewayOutput)(nil)).Elem()
}

func (o VpnGatewayOutput) ToVpnGatewayOutput() VpnGatewayOutput {
	return o
}

func (o VpnGatewayOutput) ToVpnGatewayOutputWithContext(ctx context.Context) VpnGatewayOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(VpnGatewayOutput{})
}
