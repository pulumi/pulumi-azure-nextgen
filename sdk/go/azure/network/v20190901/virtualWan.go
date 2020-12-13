// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190901

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// VirtualWAN Resource.
type VirtualWan struct {
	pulumi.CustomResourceState

	// True if branch to branch traffic is allowed.
	AllowBranchToBranchTraffic pulumi.BoolPtrOutput `pulumi:"allowBranchToBranchTraffic"`
	// True if Vnet to Vnet traffic is allowed.
	AllowVnetToVnetTraffic pulumi.BoolPtrOutput `pulumi:"allowVnetToVnetTraffic"`
	// Vpn encryption to be disabled or not.
	DisableVpnEncryption pulumi.BoolPtrOutput `pulumi:"disableVpnEncryption"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// Resource location.
	Location pulumi.StringOutput `pulumi:"location"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The office local breakout category.
	Office365LocalBreakoutCategory pulumi.StringOutput `pulumi:"office365LocalBreakoutCategory"`
	// The provisioning state of the virtual WAN resource.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// List of VirtualHubs in the VirtualWAN.
	VirtualHubs SubResourceResponseArrayOutput `pulumi:"virtualHubs"`
	// List of VpnSites in the VirtualWAN.
	VpnSites SubResourceResponseArrayOutput `pulumi:"vpnSites"`
}

// NewVirtualWan registers a new resource with the given unique name, arguments, and options.
func NewVirtualWan(ctx *pulumi.Context,
	name string, args *VirtualWanArgs, opts ...pulumi.ResourceOption) (*VirtualWan, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.VirtualWANName == nil {
		return nil, errors.New("invalid value for required argument 'VirtualWANName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/latest:VirtualWan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180401:VirtualWan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180601:VirtualWan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180701:VirtualWan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20180801:VirtualWan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181001:VirtualWan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181101:VirtualWan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20181201:VirtualWan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190201:VirtualWan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190401:VirtualWan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190601:VirtualWan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190701:VirtualWan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20190801:VirtualWan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191101:VirtualWan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20191201:VirtualWan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200301:VirtualWan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200401:VirtualWan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200501:VirtualWan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200601:VirtualWan"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200701:VirtualWan"),
		},
	})
	opts = append(opts, aliases)
	var resource VirtualWan
	err := ctx.RegisterResource("azure-nextgen:network/v20190901:VirtualWan", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetVirtualWan gets an existing VirtualWan resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetVirtualWan(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *VirtualWanState, opts ...pulumi.ResourceOption) (*VirtualWan, error) {
	var resource VirtualWan
	err := ctx.ReadResource("azure-nextgen:network/v20190901:VirtualWan", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering VirtualWan resources.
type virtualWanState struct {
	// True if branch to branch traffic is allowed.
	AllowBranchToBranchTraffic *bool `pulumi:"allowBranchToBranchTraffic"`
	// True if Vnet to Vnet traffic is allowed.
	AllowVnetToVnetTraffic *bool `pulumi:"allowVnetToVnetTraffic"`
	// Vpn encryption to be disabled or not.
	DisableVpnEncryption *bool `pulumi:"disableVpnEncryption"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name *string `pulumi:"name"`
	// The office local breakout category.
	Office365LocalBreakoutCategory *string `pulumi:"office365LocalBreakoutCategory"`
	// The provisioning state of the virtual WAN resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type *string `pulumi:"type"`
	// List of VirtualHubs in the VirtualWAN.
	VirtualHubs []SubResourceResponse `pulumi:"virtualHubs"`
	// List of VpnSites in the VirtualWAN.
	VpnSites []SubResourceResponse `pulumi:"vpnSites"`
}

type VirtualWanState struct {
	// True if branch to branch traffic is allowed.
	AllowBranchToBranchTraffic pulumi.BoolPtrInput
	// True if Vnet to Vnet traffic is allowed.
	AllowVnetToVnetTraffic pulumi.BoolPtrInput
	// Vpn encryption to be disabled or not.
	DisableVpnEncryption pulumi.BoolPtrInput
	// A unique read-only string that changes whenever the resource is updated.
	Etag pulumi.StringPtrInput
	// Resource location.
	Location pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// The office local breakout category.
	Office365LocalBreakoutCategory pulumi.StringPtrInput
	// The provisioning state of the virtual WAN resource.
	ProvisioningState pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// Resource type.
	Type pulumi.StringPtrInput
	// List of VirtualHubs in the VirtualWAN.
	VirtualHubs SubResourceResponseArrayInput
	// List of VpnSites in the VirtualWAN.
	VpnSites SubResourceResponseArrayInput
}

func (VirtualWanState) ElementType() reflect.Type {
	return reflect.TypeOf((*virtualWanState)(nil)).Elem()
}

type virtualWanArgs struct {
	// True if branch to branch traffic is allowed.
	AllowBranchToBranchTraffic *bool `pulumi:"allowBranchToBranchTraffic"`
	// True if Vnet to Vnet traffic is allowed.
	AllowVnetToVnetTraffic *bool `pulumi:"allowVnetToVnetTraffic"`
	// Vpn encryption to be disabled or not.
	DisableVpnEncryption *bool `pulumi:"disableVpnEncryption"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Resource location.
	Location string `pulumi:"location"`
	// The resource group name of the VirtualWan.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The type of the VirtualWAN.
	Type *string `pulumi:"type"`
	// The name of the VirtualWAN being created or updated.
	VirtualWANName string `pulumi:"virtualWANName"`
}

// The set of arguments for constructing a VirtualWan resource.
type VirtualWanArgs struct {
	// True if branch to branch traffic is allowed.
	AllowBranchToBranchTraffic pulumi.BoolPtrInput
	// True if Vnet to Vnet traffic is allowed.
	AllowVnetToVnetTraffic pulumi.BoolPtrInput
	// Vpn encryption to be disabled or not.
	DisableVpnEncryption pulumi.BoolPtrInput
	// Resource ID.
	Id pulumi.StringPtrInput
	// Resource location.
	Location pulumi.StringInput
	// The resource group name of the VirtualWan.
	ResourceGroupName pulumi.StringInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The type of the VirtualWAN.
	Type pulumi.StringPtrInput
	// The name of the VirtualWAN being created or updated.
	VirtualWANName pulumi.StringInput
}

func (VirtualWanArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*virtualWanArgs)(nil)).Elem()
}

type VirtualWanInput interface {
	pulumi.Input

	ToVirtualWanOutput() VirtualWanOutput
	ToVirtualWanOutputWithContext(ctx context.Context) VirtualWanOutput
}

func (VirtualWan) ElementType() reflect.Type {
	return reflect.TypeOf((*VirtualWan)(nil)).Elem()
}

func (i VirtualWan) ToVirtualWanOutput() VirtualWanOutput {
	return i.ToVirtualWanOutputWithContext(context.Background())
}

func (i VirtualWan) ToVirtualWanOutputWithContext(ctx context.Context) VirtualWanOutput {
	return pulumi.ToOutputWithContext(ctx, i).(VirtualWanOutput)
}

type VirtualWanOutput struct {
	*pulumi.OutputState
}

func (VirtualWanOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*VirtualWanOutput)(nil)).Elem()
}

func (o VirtualWanOutput) ToVirtualWanOutput() VirtualWanOutput {
	return o
}

func (o VirtualWanOutput) ToVirtualWanOutputWithContext(ctx context.Context) VirtualWanOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(VirtualWanOutput{})
}
