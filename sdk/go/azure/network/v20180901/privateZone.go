// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180901

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Describes a Private DNS zone.
type PrivateZone struct {
	pulumi.CustomResourceState

	// The ETag of the zone.
	Etag pulumi.StringPtrOutput `pulumi:"etag"`
	// The Azure Region where the resource lives
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// The maximum number of record sets that can be created in this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
	MaxNumberOfRecordSets pulumi.IntOutput `pulumi:"maxNumberOfRecordSets"`
	// The maximum number of virtual networks that can be linked to this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
	MaxNumberOfVirtualNetworkLinks pulumi.IntOutput `pulumi:"maxNumberOfVirtualNetworkLinks"`
	// The maximum number of virtual networks that can be linked to this Private DNS zone with registration enabled. This is a read-only property and any attempt to set this value will be ignored.
	MaxNumberOfVirtualNetworkLinksWithRegistration pulumi.IntOutput `pulumi:"maxNumberOfVirtualNetworkLinksWithRegistration"`
	// The name of the resource
	Name pulumi.StringOutput `pulumi:"name"`
	// The current number of record sets in this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
	NumberOfRecordSets pulumi.IntOutput `pulumi:"numberOfRecordSets"`
	// The current number of virtual networks that are linked to this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
	NumberOfVirtualNetworkLinks pulumi.IntOutput `pulumi:"numberOfVirtualNetworkLinks"`
	// The current number of virtual networks that are linked to this Private DNS zone with registration enabled. This is a read-only property and any attempt to set this value will be ignored.
	NumberOfVirtualNetworkLinksWithRegistration pulumi.IntOutput `pulumi:"numberOfVirtualNetworkLinksWithRegistration"`
	// The provisioning state of the resource. This is a read-only property and any attempt to set this value will be ignored.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The type of the resource. Example - 'Microsoft.Network/privateDnsZones'.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewPrivateZone registers a new resource with the given unique name, arguments, and options.
func NewPrivateZone(ctx *pulumi.Context,
	name string, args *PrivateZoneArgs, opts ...pulumi.ResourceOption) (*PrivateZone, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.PrivateZoneName == nil {
		return nil, errors.New("invalid value for required argument 'PrivateZoneName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:network/latest:PrivateZone"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200101:PrivateZone"),
		},
		{
			Type: pulumi.String("azure-nextgen:network/v20200601:PrivateZone"),
		},
	})
	opts = append(opts, aliases)
	var resource PrivateZone
	err := ctx.RegisterResource("azure-nextgen:network/v20180901:PrivateZone", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetPrivateZone gets an existing PrivateZone resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPrivateZone(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *PrivateZoneState, opts ...pulumi.ResourceOption) (*PrivateZone, error) {
	var resource PrivateZone
	err := ctx.ReadResource("azure-nextgen:network/v20180901:PrivateZone", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering PrivateZone resources.
type privateZoneState struct {
	// The ETag of the zone.
	Etag *string `pulumi:"etag"`
	// The Azure Region where the resource lives
	Location *string `pulumi:"location"`
	// The maximum number of record sets that can be created in this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
	MaxNumberOfRecordSets *int `pulumi:"maxNumberOfRecordSets"`
	// The maximum number of virtual networks that can be linked to this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
	MaxNumberOfVirtualNetworkLinks *int `pulumi:"maxNumberOfVirtualNetworkLinks"`
	// The maximum number of virtual networks that can be linked to this Private DNS zone with registration enabled. This is a read-only property and any attempt to set this value will be ignored.
	MaxNumberOfVirtualNetworkLinksWithRegistration *int `pulumi:"maxNumberOfVirtualNetworkLinksWithRegistration"`
	// The name of the resource
	Name *string `pulumi:"name"`
	// The current number of record sets in this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
	NumberOfRecordSets *int `pulumi:"numberOfRecordSets"`
	// The current number of virtual networks that are linked to this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
	NumberOfVirtualNetworkLinks *int `pulumi:"numberOfVirtualNetworkLinks"`
	// The current number of virtual networks that are linked to this Private DNS zone with registration enabled. This is a read-only property and any attempt to set this value will be ignored.
	NumberOfVirtualNetworkLinksWithRegistration *int `pulumi:"numberOfVirtualNetworkLinksWithRegistration"`
	// The provisioning state of the resource. This is a read-only property and any attempt to set this value will be ignored.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource. Example - 'Microsoft.Network/privateDnsZones'.
	Type *string `pulumi:"type"`
}

type PrivateZoneState struct {
	// The ETag of the zone.
	Etag pulumi.StringPtrInput
	// The Azure Region where the resource lives
	Location pulumi.StringPtrInput
	// The maximum number of record sets that can be created in this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
	MaxNumberOfRecordSets pulumi.IntPtrInput
	// The maximum number of virtual networks that can be linked to this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
	MaxNumberOfVirtualNetworkLinks pulumi.IntPtrInput
	// The maximum number of virtual networks that can be linked to this Private DNS zone with registration enabled. This is a read-only property and any attempt to set this value will be ignored.
	MaxNumberOfVirtualNetworkLinksWithRegistration pulumi.IntPtrInput
	// The name of the resource
	Name pulumi.StringPtrInput
	// The current number of record sets in this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
	NumberOfRecordSets pulumi.IntPtrInput
	// The current number of virtual networks that are linked to this Private DNS zone. This is a read-only property and any attempt to set this value will be ignored.
	NumberOfVirtualNetworkLinks pulumi.IntPtrInput
	// The current number of virtual networks that are linked to this Private DNS zone with registration enabled. This is a read-only property and any attempt to set this value will be ignored.
	NumberOfVirtualNetworkLinksWithRegistration pulumi.IntPtrInput
	// The provisioning state of the resource. This is a read-only property and any attempt to set this value will be ignored.
	ProvisioningState pulumi.StringPtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The type of the resource. Example - 'Microsoft.Network/privateDnsZones'.
	Type pulumi.StringPtrInput
}

func (PrivateZoneState) ElementType() reflect.Type {
	return reflect.TypeOf((*privateZoneState)(nil)).Elem()
}

type privateZoneArgs struct {
	// The ETag of the zone.
	Etag *string `pulumi:"etag"`
	// The Azure Region where the resource lives
	Location *string `pulumi:"location"`
	// The name of the Private DNS zone (without a terminating dot).
	PrivateZoneName string `pulumi:"privateZoneName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a PrivateZone resource.
type PrivateZoneArgs struct {
	// The ETag of the zone.
	Etag pulumi.StringPtrInput
	// The Azure Region where the resource lives
	Location pulumi.StringPtrInput
	// The name of the Private DNS zone (without a terminating dot).
	PrivateZoneName pulumi.StringInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// Resource tags.
	Tags pulumi.StringMapInput
}

func (PrivateZoneArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*privateZoneArgs)(nil)).Elem()
}

type PrivateZoneInput interface {
	pulumi.Input

	ToPrivateZoneOutput() PrivateZoneOutput
	ToPrivateZoneOutputWithContext(ctx context.Context) PrivateZoneOutput
}

func (*PrivateZone) ElementType() reflect.Type {
	return reflect.TypeOf((*PrivateZone)(nil))
}

func (i *PrivateZone) ToPrivateZoneOutput() PrivateZoneOutput {
	return i.ToPrivateZoneOutputWithContext(context.Background())
}

func (i *PrivateZone) ToPrivateZoneOutputWithContext(ctx context.Context) PrivateZoneOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PrivateZoneOutput)
}

type PrivateZoneOutput struct {
	*pulumi.OutputState
}

func (PrivateZoneOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*PrivateZone)(nil))
}

func (o PrivateZoneOutput) ToPrivateZoneOutput() PrivateZoneOutput {
	return o
}

func (o PrivateZoneOutput) ToPrivateZoneOutputWithContext(ctx context.Context) PrivateZoneOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(PrivateZoneOutput{})
}
