// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190201

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// P2SVpnGateway Resource.
type P2sVpnGateway struct {
	pulumi.CustomResourceState

	// The reference of the address space resource which represents the custom routes specified by the customer for P2SVpnGateway and P2S VpnClient.
	CustomRoutes AddressSpaceResponsePtrOutput `pulumi:"customRoutes"`
	// Gets a unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// Resource location.
	Location pulumi.StringOutput `pulumi:"location"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The P2SVpnServerConfiguration to which the p2sVpnGateway is attached to.
	P2SVpnServerConfiguration SubResourceResponsePtrOutput `pulumi:"p2SVpnServerConfiguration"`
	// The provisioning state of the resource.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// The VirtualHub to which the gateway belongs
	VirtualHub SubResourceResponsePtrOutput `pulumi:"virtualHub"`
	// The reference of the address space resource which represents Address space for P2S VpnClient.
	VpnClientAddressPool AddressSpaceResponsePtrOutput `pulumi:"vpnClientAddressPool"`
	// All P2S VPN clients' connection health status.
	VpnClientConnectionHealth VpnClientConnectionHealthResponseOutput `pulumi:"vpnClientConnectionHealth"`
	// The scale unit for this p2s vpn gateway.
	VpnGatewayScaleUnit pulumi.IntPtrOutput `pulumi:"vpnGatewayScaleUnit"`
}

// NewP2sVpnGateway registers a new resource with the given unique name, arguments, and options.
func NewP2sVpnGateway(ctx *pulumi.Context,
	name string, args *P2sVpnGatewayArgs, opts ...pulumi.ResourceOption) (*P2sVpnGateway, error) {
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
			Type: pulumi.String("azure-nextgen:network/latest:P2sVpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180801:P2sVpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181001:P2sVpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181101:P2sVpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181201:P2sVpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190401:P2sVpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190601:P2sVpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190701:P2sVpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190801:P2sVpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190901:P2sVpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191101:P2sVpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191201:P2sVpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200301:P2sVpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200401:P2sVpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200501:P2sVpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200601:P2sVpnGateway"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200701:P2sVpnGateway"),
		},
	})
	opts = append(opts, aliases)
	var resource P2sVpnGateway
	err := ctx.RegisterResource("azure-nextgen:network/v20190201:P2sVpnGateway", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetP2sVpnGateway gets an existing P2sVpnGateway resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetP2sVpnGateway(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *P2sVpnGatewayState, opts ...pulumi.ResourceOption) (*P2sVpnGateway, error) {
	var resource P2sVpnGateway
	err := ctx.ReadResource("azure-nextgen:network/v20190201:P2sVpnGateway", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering P2sVpnGateway resources.
type p2sVpnGatewayState struct {
	// The reference of the address space resource which represents the custom routes specified by the customer for P2SVpnGateway and P2S VpnClient.
	CustomRoutes *AddressSpaceResponse `pulumi:"customRoutes"`
	// Gets a unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name *string `pulumi:"name"`
	// The P2SVpnServerConfiguration to which the p2sVpnGateway is attached to.
	P2SVpnServerConfiguration *SubResourceResponse `pulumi:"p2SVpnServerConfiguration"`
	// The provisioning state of the resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type *string `pulumi:"type"`
	// The VirtualHub to which the gateway belongs
	VirtualHub *SubResourceResponse `pulumi:"virtualHub"`
	// The reference of the address space resource which represents Address space for P2S VpnClient.
	VpnClientAddressPool *AddressSpaceResponse `pulumi:"vpnClientAddressPool"`
	// All P2S VPN clients' connection health status.
	VpnClientConnectionHealth *VpnClientConnectionHealthResponse `pulumi:"vpnClientConnectionHealth"`
	// The scale unit for this p2s vpn gateway.
	VpnGatewayScaleUnit *int `pulumi:"vpnGatewayScaleUnit"`
}

type P2sVpnGatewayState struct {
	// The reference of the address space resource which represents the custom routes specified by the customer for P2SVpnGateway and P2S VpnClient.
	CustomRoutes AddressSpaceResponsePtrInput
	// Gets a unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// The P2SVpnServerConfiguration to which the p2sVpnGateway is attached to.
	P2SVpnServerConfiguration SubResourceResponsePtrInput
	// The provisioning state of the resource.
	ProvisioningState pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// Resource type.
	Type pulumi.StringPtrInput
	// The VirtualHub to which the gateway belongs
	VirtualHub SubResourceResponsePtrInput
	// The reference of the address space resource which represents Address space for P2S VpnClient.
	VpnClientAddressPool AddressSpaceResponsePtrInput
	// All P2S VPN clients' connection health status.
	VpnClientConnectionHealth VpnClientConnectionHealthResponsePtrInput
	// The scale unit for this p2s vpn gateway.
	VpnGatewayScaleUnit pulumi.IntPtrInput
}

func (P2sVpnGatewayState) ElementType() reflect.Type {
	return reflect.TypeOf((*p2sVpnGatewayState)(nil)).Elem()
}

type p2sVpnGatewayArgs struct {
	// The reference of the address space resource which represents the custom routes specified by the customer for P2SVpnGateway and P2S VpnClient.
	CustomRoutes *AddressSpace `pulumi:"customRoutes"`
	// The name of the gateway.
	GatewayName string `pulumi:"gatewayName"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Resource location.
	Location string `pulumi:"location"`
	// The P2SVpnServerConfiguration to which the p2sVpnGateway is attached to.
	P2SVpnServerConfiguration *SubResource `pulumi:"p2SVpnServerConfiguration"`
	// The resource group name of the P2SVpnGateway.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The VirtualHub to which the gateway belongs
	VirtualHub *SubResource `pulumi:"virtualHub"`
	// The reference of the address space resource which represents Address space for P2S VpnClient.
	VpnClientAddressPool *AddressSpace `pulumi:"vpnClientAddressPool"`
	// The scale unit for this p2s vpn gateway.
	VpnGatewayScaleUnit *int `pulumi:"vpnGatewayScaleUnit"`
}

// The set of arguments for constructing a P2sVpnGateway resource.
type P2sVpnGatewayArgs struct {
	// The reference of the address space resource which represents the custom routes specified by the customer for P2SVpnGateway and P2S VpnClient.
	CustomRoutes AddressSpacePtrInput
	// The name of the gateway.
	GatewayName pulumi.StringInput
	// Resource ID.
	Id pulumi.StringPtrInput
	// Resource location.
	Location pulumi.StringInput
	// The P2SVpnServerConfiguration to which the p2sVpnGateway is attached to.
	P2SVpnServerConfiguration SubResourcePtrInput
	// The resource group name of the P2SVpnGateway.
	ResourceGroupName pulumi.StringInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The VirtualHub to which the gateway belongs
	VirtualHub SubResourcePtrInput
	// The reference of the address space resource which represents Address space for P2S VpnClient.
	VpnClientAddressPool AddressSpacePtrInput
	// The scale unit for this p2s vpn gateway.
	VpnGatewayScaleUnit pulumi.IntPtrInput
}

func (P2sVpnGatewayArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*p2sVpnGatewayArgs)(nil)).Elem()
}

type P2sVpnGatewayInput interface {
	pulumi.Input

	ToP2sVpnGatewayOutput() P2sVpnGatewayOutput
	ToP2sVpnGatewayOutputWithContext(ctx context.Context) P2sVpnGatewayOutput
}

func (P2sVpnGateway) ElementType() reflect.Type {
	return reflect.TypeOf((*P2sVpnGateway)(nil)).Elem()
}

func (i P2sVpnGateway) ToP2sVpnGatewayOutput() P2sVpnGatewayOutput {
	return i.ToP2sVpnGatewayOutputWithContext(context.Background())
}

func (i P2sVpnGateway) ToP2sVpnGatewayOutputWithContext(ctx context.Context) P2sVpnGatewayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(P2sVpnGatewayOutput)
}

type P2sVpnGatewayOutput struct {
	*pulumi.OutputState
}

func (P2sVpnGatewayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*P2sVpnGatewayOutput)(nil)).Elem()
}

func (o P2sVpnGatewayOutput) ToP2sVpnGatewayOutput() P2sVpnGatewayOutput {
	return o
}

func (o P2sVpnGatewayOutput) ToP2sVpnGatewayOutputWithContext(ctx context.Context) P2sVpnGatewayOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(P2sVpnGatewayOutput{})
}
