// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190301

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupDisk(ctx *pulumi.Context, args *LookupDiskArgs, opts ...pulumi.InvokeOption) (*LookupDiskResult, error) {
	var rv LookupDiskResult
	err := ctx.Invoke("azure-nextgen:compute/v20190301:getDisk", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupDiskArgs struct {
	// The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
	DiskName string `pulumi:"diskName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Disk resource.
type LookupDiskResult struct {
	// Disk source information. CreationData information cannot be changed after the disk has been created.
	CreationData CreationDataResponse `pulumi:"creationData"`
	// The number of IOPS allowed for this disk; only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes.
	DiskIOPSReadWrite *int `pulumi:"diskIOPSReadWrite"`
	// The bandwidth allowed for this disk; only settable for UltraSSD disks. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10.
	DiskMBpsReadWrite *int `pulumi:"diskMBpsReadWrite"`
	// The size of the disk in bytes. This field is read only.
	DiskSizeBytes int `pulumi:"diskSizeBytes"`
	// If creationData.createOption is Empty, this field is mandatory and it indicates the size of the disk to create. If this field is present for updates or creation with other options, it indicates a resize. Resizes are only allowed if the disk is not attached to a running VM, and can only increase the disk's size.
	DiskSizeGB *int `pulumi:"diskSizeGB"`
	// The state of the disk.
	DiskState string `pulumi:"diskState"`
	// Encryption settings collection used for Azure Disk Encryption, can contain multiple encryption settings per disk or snapshot.
	EncryptionSettingsCollection *EncryptionSettingsCollectionResponse `pulumi:"encryptionSettingsCollection"`
	// The hypervisor generation of the Virtual Machine. Applicable to OS disks only.
	HyperVGeneration *string `pulumi:"hyperVGeneration"`
	// Resource Id
	Id string `pulumi:"id"`
	// Resource location
	Location string `pulumi:"location"`
	// A relative URI containing the ID of the VM that has the disk attached.
	ManagedBy string `pulumi:"managedBy"`
	// Resource name
	Name string `pulumi:"name"`
	// The Operating System type.
	OsType *string `pulumi:"osType"`
	// The disk provisioning state.
	ProvisioningState string `pulumi:"provisioningState"`
	// The disks sku name. Can be Standard_LRS, Premium_LRS, StandardSSD_LRS, or UltraSSD_LRS.
	Sku *DiskSkuResponse `pulumi:"sku"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// The time when the disk was created.
	TimeCreated string `pulumi:"timeCreated"`
	// Resource type
	Type string `pulumi:"type"`
	// Unique Guid identifying the resource.
	UniqueId string `pulumi:"uniqueId"`
	// The Logical zone list for Disk.
	Zones []string `pulumi:"zones"`
}
