// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180601

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Disk resource.
type Disk struct {
	pulumi.CustomResourceState

	// Disk source information. CreationData information cannot be changed after the disk has been created.
	CreationData CreationDataResponseOutput `pulumi:"creationData"`
	// The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes. For a description of the range of values you can set, see [Ultra SSD Managed Disk Offerings](https://docs.microsoft.com/azure/virtual-machines/windows/disks-ultra-ssd#ultra-ssd-managed-disk-offerings).
	DiskIOPSReadWrite pulumi.IntPtrOutput `pulumi:"diskIOPSReadWrite"`
	// The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. For a description of the range of values you can set, see [Ultra SSD Managed Disk Offerings](https://docs.microsoft.com/azure/virtual-machines/windows/disks-ultra-ssd#ultra-ssd-managed-disk-offerings).
	DiskMBpsReadWrite pulumi.IntPtrOutput `pulumi:"diskMBpsReadWrite"`
	// If creationData.createOption is Empty, this field is mandatory and it indicates the size of the VHD to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
	DiskSizeGB pulumi.IntPtrOutput `pulumi:"diskSizeGB"`
	// Encryption settings for disk or snapshot
	EncryptionSettings EncryptionSettingsResponsePtrOutput `pulumi:"encryptionSettings"`
	// Resource location
	Location pulumi.StringOutput `pulumi:"location"`
	// A relative URI containing the ID of the VM that has the disk attached.
	ManagedBy pulumi.StringOutput `pulumi:"managedBy"`
	// Resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// The Operating System type.
	OsType pulumi.StringPtrOutput `pulumi:"osType"`
	// The disk provisioning state.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, or UltraSSD_LRS.
	Sku DiskSkuResponsePtrOutput `pulumi:"sku"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The time when the disk was created.
	TimeCreated pulumi.StringOutput `pulumi:"timeCreated"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
	// The Logical zone list for Disk.
	Zones pulumi.StringArrayOutput `pulumi:"zones"`
}

// NewDisk registers a new resource with the given unique name, arguments, and options.
func NewDisk(ctx *pulumi.Context,
	name string, args *DiskArgs, opts ...pulumi.ResourceOption) (*Disk, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.CreationData == nil {
		return nil, errors.New("invalid value for required argument 'CreationData'")
	}
	if args.DiskName == nil {
		return nil, errors.New("invalid value for required argument 'DiskName'")
	}
	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:compute/latest:Disk"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20160430preview:Disk"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20170330:Disk"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20180401:Disk"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20180930:Disk"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20190301:Disk"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20190701:Disk"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20191101:Disk"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20200501:Disk"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20200630:Disk"),
		},
	})
	opts = append(opts, aliases)
	var resource Disk
	err := ctx.RegisterResource("azure-nextgen:compute/v20180601:Disk", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetDisk gets an existing Disk resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDisk(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *DiskState, opts ...pulumi.ResourceOption) (*Disk, error) {
	var resource Disk
	err := ctx.ReadResource("azure-nextgen:compute/v20180601:Disk", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Disk resources.
type diskState struct {
	// Disk source information. CreationData information cannot be changed after the disk has been created.
	CreationData *CreationDataResponse `pulumi:"creationData"`
	// The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes. For a description of the range of values you can set, see [Ultra SSD Managed Disk Offerings](https://docs.microsoft.com/azure/virtual-machines/windows/disks-ultra-ssd#ultra-ssd-managed-disk-offerings).
	DiskIOPSReadWrite *int `pulumi:"diskIOPSReadWrite"`
	// The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. For a description of the range of values you can set, see [Ultra SSD Managed Disk Offerings](https://docs.microsoft.com/azure/virtual-machines/windows/disks-ultra-ssd#ultra-ssd-managed-disk-offerings).
	DiskMBpsReadWrite *int `pulumi:"diskMBpsReadWrite"`
	// If creationData.createOption is Empty, this field is mandatory and it indicates the size of the VHD to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
	DiskSizeGB *int `pulumi:"diskSizeGB"`
	// Encryption settings for disk or snapshot
	EncryptionSettings *EncryptionSettingsResponse `pulumi:"encryptionSettings"`
	// Resource location
	Location *string `pulumi:"location"`
	// A relative URI containing the ID of the VM that has the disk attached.
	ManagedBy *string `pulumi:"managedBy"`
	// Resource name
	Name *string `pulumi:"name"`
	// The Operating System type.
	OsType *string `pulumi:"osType"`
	// The disk provisioning state.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, or UltraSSD_LRS.
	Sku *DiskSkuResponse `pulumi:"sku"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// The time when the disk was created.
	TimeCreated *string `pulumi:"timeCreated"`
	// Resource type
	Type *string `pulumi:"type"`
	// The Logical zone list for Disk.
	Zones []string `pulumi:"zones"`
}

type DiskState struct {
	// Disk source information. CreationData information cannot be changed after the disk has been created.
	CreationData CreationDataResponsePtrInput
	// The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes. For a description of the range of values you can set, see [Ultra SSD Managed Disk Offerings](https://docs.microsoft.com/azure/virtual-machines/windows/disks-ultra-ssd#ultra-ssd-managed-disk-offerings).
	DiskIOPSReadWrite pulumi.IntPtrInput
	// The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. For a description of the range of values you can set, see [Ultra SSD Managed Disk Offerings](https://docs.microsoft.com/azure/virtual-machines/windows/disks-ultra-ssd#ultra-ssd-managed-disk-offerings).
	DiskMBpsReadWrite pulumi.IntPtrInput
	// If creationData.createOption is Empty, this field is mandatory and it indicates the size of the VHD to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
	DiskSizeGB pulumi.IntPtrInput
	// Encryption settings for disk or snapshot
	EncryptionSettings EncryptionSettingsResponsePtrInput
	// Resource location
	Location pulumi.StringPtrInput
	// A relative URI containing the ID of the VM that has the disk attached.
	ManagedBy pulumi.StringPtrInput
	// Resource name
	Name pulumi.StringPtrInput
	// The Operating System type.
	OsType pulumi.StringPtrInput
	// The disk provisioning state.
	ProvisioningState pulumi.StringPtrInput
	// The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, or UltraSSD_LRS.
	Sku DiskSkuResponsePtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// The time when the disk was created.
	TimeCreated pulumi.StringPtrInput
	// Resource type
	Type pulumi.StringPtrInput
	// The Logical zone list for Disk.
	Zones pulumi.StringArrayInput
}

func (DiskState) ElementType() reflect.Type {
	return reflect.TypeOf((*diskState)(nil)).Elem()
}

type diskArgs struct {
	// Disk source information. CreationData information cannot be changed after the disk has been created.
	CreationData CreationData `pulumi:"creationData"`
	// The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes. For a description of the range of values you can set, see [Ultra SSD Managed Disk Offerings](https://docs.microsoft.com/azure/virtual-machines/windows/disks-ultra-ssd#ultra-ssd-managed-disk-offerings).
	DiskIOPSReadWrite *int `pulumi:"diskIOPSReadWrite"`
	// The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. For a description of the range of values you can set, see [Ultra SSD Managed Disk Offerings](https://docs.microsoft.com/azure/virtual-machines/windows/disks-ultra-ssd#ultra-ssd-managed-disk-offerings).
	DiskMBpsReadWrite *int `pulumi:"diskMBpsReadWrite"`
	// The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
	DiskName string `pulumi:"diskName"`
	// If creationData.createOption is Empty, this field is mandatory and it indicates the size of the VHD to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
	DiskSizeGB *int `pulumi:"diskSizeGB"`
	// Encryption settings for disk or snapshot
	EncryptionSettings *EncryptionSettings `pulumi:"encryptionSettings"`
	// Resource location
	Location string `pulumi:"location"`
	// The Operating System type.
	OsType *string `pulumi:"osType"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, or UltraSSD_LRS.
	Sku *DiskSku `pulumi:"sku"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// The Logical zone list for Disk.
	Zones []string `pulumi:"zones"`
}

// The set of arguments for constructing a Disk resource.
type DiskArgs struct {
	// Disk source information. CreationData information cannot be changed after the disk has been created.
	CreationData CreationDataInput
	// The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes. For a description of the range of values you can set, see [Ultra SSD Managed Disk Offerings](https://docs.microsoft.com/azure/virtual-machines/windows/disks-ultra-ssd#ultra-ssd-managed-disk-offerings).
	DiskIOPSReadWrite pulumi.IntPtrInput
	// The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. For a description of the range of values you can set, see [Ultra SSD Managed Disk Offerings](https://docs.microsoft.com/azure/virtual-machines/windows/disks-ultra-ssd#ultra-ssd-managed-disk-offerings).
	DiskMBpsReadWrite pulumi.IntPtrInput
	// The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
	DiskName pulumi.StringInput
	// If creationData.createOption is Empty, this field is mandatory and it indicates the size of the VHD to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
	DiskSizeGB pulumi.IntPtrInput
	// Encryption settings for disk or snapshot
	EncryptionSettings EncryptionSettingsPtrInput
	// Resource location
	Location pulumi.StringInput
	// The Operating System type.
	OsType OperatingSystemTypes
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, or UltraSSD_LRS.
	Sku DiskSkuPtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// The Logical zone list for Disk.
	Zones pulumi.StringArrayInput
}

func (DiskArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*diskArgs)(nil)).Elem()
}

type DiskInput interface {
	pulumi.Input

	ToDiskOutput() DiskOutput
	ToDiskOutputWithContext(ctx context.Context) DiskOutput
}

func (*Disk) ElementType() reflect.Type {
	return reflect.TypeOf((*Disk)(nil))
}

func (i *Disk) ToDiskOutput() DiskOutput {
	return i.ToDiskOutputWithContext(context.Background())
}

func (i *Disk) ToDiskOutputWithContext(ctx context.Context) DiskOutput {
	return pulumi.ToOutputWithContext(ctx, i).(DiskOutput)
}

type DiskOutput struct {
	*pulumi.OutputState
}

func (DiskOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Disk)(nil))
}

func (o DiskOutput) ToDiskOutput() DiskOutput {
	return o
}

func (o DiskOutput) ToDiskOutputWithContext(ctx context.Context) DiskOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(DiskOutput{})
}
