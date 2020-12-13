// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180401

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Specifies the caching requirements. <br><br> Possible values are: <br><br> **None** <br><br> **ReadOnly** <br><br> **ReadWrite** <br><br> Default: **None for Standard storage. ReadOnly for Premium storage**
type CachingTypes pulumi.String

const (
	CachingTypesNone      = CachingTypes("None")
	CachingTypesReadOnly  = CachingTypes("ReadOnly")
	CachingTypesReadWrite = CachingTypes("ReadWrite")
)

func (CachingTypes) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e CachingTypes) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e CachingTypes) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e CachingTypes) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e CachingTypes) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The component name. Currently, the only allowable value is Microsoft-Windows-Shell-Setup.
type ComponentNames pulumi.String

const (
	ComponentNames_Microsoft_Windows_Shell_Setup = ComponentNames("Microsoft-Windows-Shell-Setup")
)

func (ComponentNames) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ComponentNames) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ComponentNames) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ComponentNames) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ComponentNames) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// This enumerates the possible sources of a disk's creation.
type DiskCreateOption pulumi.String

const (
	DiskCreateOptionEmpty     = DiskCreateOption("Empty")
	DiskCreateOptionAttach    = DiskCreateOption("Attach")
	DiskCreateOptionFromImage = DiskCreateOption("FromImage")
	DiskCreateOptionImport    = DiskCreateOption("Import")
	DiskCreateOptionCopy      = DiskCreateOption("Copy")
	DiskCreateOptionRestore   = DiskCreateOption("Restore")
)

func (DiskCreateOption) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e DiskCreateOption) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e DiskCreateOption) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e DiskCreateOption) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e DiskCreateOption) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Specifies how the virtual machine should be created.<br><br> Possible values are:<br><br> **Attach** \u2013 This value is used when you are using a specialized disk to create the virtual machine.<br><br> **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
type DiskCreateOptionTypes pulumi.String

const (
	DiskCreateOptionTypesFromImage = DiskCreateOptionTypes("FromImage")
	DiskCreateOptionTypesEmpty     = DiskCreateOptionTypes("Empty")
	DiskCreateOptionTypesAttach    = DiskCreateOptionTypes("Attach")
)

func (DiskCreateOptionTypes) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e DiskCreateOptionTypes) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e DiskCreateOptionTypes) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e DiskCreateOptionTypes) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e DiskCreateOptionTypes) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Available from Api-Version 2017-03-30 onwards, it represents whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4.  Possible values are: 'IPv4' and 'IPv6'.
type IPVersion pulumi.String

const (
	IPVersionIPv4 = IPVersion("IPv4")
	IPVersionIPv6 = IPVersion("IPv6")
)

func (IPVersion) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e IPVersion) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e IPVersion) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e IPVersion) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e IPVersion) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Interval value in minutes used to create LogAnalytics call rate logs.
type IntervalInMins pulumi.String

const (
	IntervalInMinsThreeMins  = IntervalInMins("ThreeMins")
	IntervalInMinsFiveMins   = IntervalInMins("FiveMins")
	IntervalInMinsThirtyMins = IntervalInMins("ThirtyMins")
	IntervalInMinsSixtyMins  = IntervalInMins("SixtyMins")
)

func (IntervalInMins) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e IntervalInMins) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e IntervalInMins) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e IntervalInMins) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e IntervalInMins) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The OS State.
type OperatingSystemStateTypes pulumi.String

const (
	OperatingSystemStateTypesGeneralized = OperatingSystemStateTypes("Generalized")
	OperatingSystemStateTypesSpecialized = OperatingSystemStateTypes("Specialized")
)

func (OperatingSystemStateTypes) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e OperatingSystemStateTypes) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e OperatingSystemStateTypes) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e OperatingSystemStateTypes) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e OperatingSystemStateTypes) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. <br><br> Possible values are: <br><br> **Windows** <br><br> **Linux**
type OperatingSystemTypes pulumi.String

const (
	OperatingSystemTypesWindows = OperatingSystemTypes("Windows")
	OperatingSystemTypesLinux   = OperatingSystemTypes("Linux")
)

func (OperatingSystemTypes) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e OperatingSystemTypes) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e OperatingSystemTypes) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e OperatingSystemTypes) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e OperatingSystemTypes) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The pass name. Currently, the only allowable value is OobeSystem.
type PassNames pulumi.String

const (
	PassNamesOobeSystem = PassNames("OobeSystem")
)

func (PassNames) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e PassNames) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e PassNames) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e PassNames) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e PassNames) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Specifies the protocol of listener. <br><br> Possible values are: <br>**http** <br><br> **https**
type ProtocolTypes pulumi.String

const (
	ProtocolTypesHttp  = ProtocolTypes("Http")
	ProtocolTypesHttps = ProtocolTypes("Https")
)

func (ProtocolTypes) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ProtocolTypes) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ProtocolTypes) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ProtocolTypes) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ProtocolTypes) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Specifies the type of the proximity placement group. <br><br> Possible values are: <br><br> **Standard** : Co-locate resources within an Azure region or Availability Zone. <br><br> **Ultra** : For future use.
type ProximityPlacementGroupType pulumi.String

const (
	ProximityPlacementGroupTypeStandard = ProximityPlacementGroupType("Standard")
	ProximityPlacementGroupTypeUltra    = ProximityPlacementGroupType("Ultra")
)

func (ProximityPlacementGroupType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ProximityPlacementGroupType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ProximityPlacementGroupType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ProximityPlacementGroupType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ProximityPlacementGroupType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The type of identity used for the virtual machine scale set. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine scale set.
type ResourceIdentityType pulumi.String

const (
	ResourceIdentityTypeSystemAssigned               = ResourceIdentityType("SystemAssigned")
	ResourceIdentityTypeUserAssigned                 = ResourceIdentityType("UserAssigned")
	ResourceIdentityType_SystemAssigned_UserAssigned = ResourceIdentityType("SystemAssigned, UserAssigned")
	ResourceIdentityTypeNone                         = ResourceIdentityType("None")
)

func (ResourceIdentityType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ResourceIdentityType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ResourceIdentityType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ResourceIdentityType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ResourceIdentityType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Specifies the name of the setting to which the content applies. Possible values are: FirstLogonCommands and AutoLogon.
type SettingNames pulumi.String

const (
	SettingNamesAutoLogon          = SettingNames("AutoLogon")
	SettingNamesFirstLogonCommands = SettingNames("FirstLogonCommands")
)

func (SettingNames) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e SettingNames) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e SettingNames) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e SettingNames) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e SettingNames) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The sku name.
type SnapshotStorageAccountTypes pulumi.String

const (
	SnapshotStorageAccountTypes_Standard_LRS = SnapshotStorageAccountTypes("Standard_LRS")
	SnapshotStorageAccountTypes_Premium_LRS  = SnapshotStorageAccountTypes("Premium_LRS")
	SnapshotStorageAccountTypes_Standard_ZRS = SnapshotStorageAccountTypes("Standard_ZRS")
)

func (SnapshotStorageAccountTypes) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e SnapshotStorageAccountTypes) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e SnapshotStorageAccountTypes) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e SnapshotStorageAccountTypes) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e SnapshotStorageAccountTypes) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The level code.
type StatusLevelTypes pulumi.String

const (
	StatusLevelTypesInfo    = StatusLevelTypes("Info")
	StatusLevelTypesWarning = StatusLevelTypes("Warning")
	StatusLevelTypesError   = StatusLevelTypes("Error")
)

func (StatusLevelTypes) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e StatusLevelTypes) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e StatusLevelTypes) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e StatusLevelTypes) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e StatusLevelTypes) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Specifies the storage account type for the managed disk. Possible values are: Standard_LRS, Premium_LRS, and StandardSSD_LRS.
type StorageAccountTypes pulumi.String

const (
	StorageAccountTypes_Standard_LRS    = StorageAccountTypes("Standard_LRS")
	StorageAccountTypes_Premium_LRS     = StorageAccountTypes("Premium_LRS")
	StorageAccountTypes_StandardSSD_LRS = StorageAccountTypes("StandardSSD_LRS")
)

func (StorageAccountTypes) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e StorageAccountTypes) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e StorageAccountTypes) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e StorageAccountTypes) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e StorageAccountTypes) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Specifies the mode of an upgrade to virtual machines in the scale set.<br /><br /> Possible values are:<br /><br /> **Manual** - You  control the application of updates to virtual machines in the scale set. You do this by using the manualUpgrade action.<br /><br /> **Automatic** - All virtual machines in the scale set are  automatically updated at the same time.
type UpgradeMode pulumi.String

const (
	UpgradeModeAutomatic = UpgradeMode("Automatic")
	UpgradeModeManual    = UpgradeMode("Manual")
	UpgradeModeRolling   = UpgradeMode("Rolling")
)

func (UpgradeMode) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e UpgradeMode) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e UpgradeMode) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e UpgradeMode) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e UpgradeMode) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Specifies the eviction policy for virtual machines in a low priority scale set. <br><br>Minimum api-version: 2017-10-30-preview
type VirtualMachineEvictionPolicyTypes pulumi.String

const (
	VirtualMachineEvictionPolicyTypesDeallocate = VirtualMachineEvictionPolicyTypes("Deallocate")
	VirtualMachineEvictionPolicyTypesDelete     = VirtualMachineEvictionPolicyTypes("Delete")
)

func (VirtualMachineEvictionPolicyTypes) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e VirtualMachineEvictionPolicyTypes) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e VirtualMachineEvictionPolicyTypes) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e VirtualMachineEvictionPolicyTypes) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e VirtualMachineEvictionPolicyTypes) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Specifies the priority for the virtual machines in the scale set. <br><br>Minimum api-version: 2017-10-30-preview
type VirtualMachinePriorityTypes pulumi.String

const (
	VirtualMachinePriorityTypesRegular = VirtualMachinePriorityTypes("Regular")
	VirtualMachinePriorityTypesLow     = VirtualMachinePriorityTypes("Low")
)

func (VirtualMachinePriorityTypes) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e VirtualMachinePriorityTypes) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e VirtualMachinePriorityTypes) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e VirtualMachinePriorityTypes) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e VirtualMachinePriorityTypes) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Specifies the size of the virtual machine. For more information about virtual machine sizes, see [Sizes for virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-sizes?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> The available VM sizes depend on region and availability set. For a list of available sizes use these APIs:  <br><br> [List all available virtual machine sizes in an availability set](https://docs.microsoft.com/rest/api/compute/availabilitysets/listavailablesizes) <br><br> [List all available virtual machine sizes in a region](https://docs.microsoft.com/rest/api/compute/virtualmachinesizes/list) <br><br> [List all available virtual machine sizes for resizing](https://docs.microsoft.com/rest/api/compute/virtualmachines/listavailablesizes)
type VirtualMachineSizeTypes pulumi.String

const (
	VirtualMachineSizeTypes_Basic_A0            = VirtualMachineSizeTypes("Basic_A0")
	VirtualMachineSizeTypes_Basic_A1            = VirtualMachineSizeTypes("Basic_A1")
	VirtualMachineSizeTypes_Basic_A2            = VirtualMachineSizeTypes("Basic_A2")
	VirtualMachineSizeTypes_Basic_A3            = VirtualMachineSizeTypes("Basic_A3")
	VirtualMachineSizeTypes_Basic_A4            = VirtualMachineSizeTypes("Basic_A4")
	VirtualMachineSizeTypes_Standard_A0         = VirtualMachineSizeTypes("Standard_A0")
	VirtualMachineSizeTypes_Standard_A1         = VirtualMachineSizeTypes("Standard_A1")
	VirtualMachineSizeTypes_Standard_A2         = VirtualMachineSizeTypes("Standard_A2")
	VirtualMachineSizeTypes_Standard_A3         = VirtualMachineSizeTypes("Standard_A3")
	VirtualMachineSizeTypes_Standard_A4         = VirtualMachineSizeTypes("Standard_A4")
	VirtualMachineSizeTypes_Standard_A5         = VirtualMachineSizeTypes("Standard_A5")
	VirtualMachineSizeTypes_Standard_A6         = VirtualMachineSizeTypes("Standard_A6")
	VirtualMachineSizeTypes_Standard_A7         = VirtualMachineSizeTypes("Standard_A7")
	VirtualMachineSizeTypes_Standard_A8         = VirtualMachineSizeTypes("Standard_A8")
	VirtualMachineSizeTypes_Standard_A9         = VirtualMachineSizeTypes("Standard_A9")
	VirtualMachineSizeTypes_Standard_A10        = VirtualMachineSizeTypes("Standard_A10")
	VirtualMachineSizeTypes_Standard_A11        = VirtualMachineSizeTypes("Standard_A11")
	VirtualMachineSizeTypes_Standard_A1_v2      = VirtualMachineSizeTypes("Standard_A1_v2")
	VirtualMachineSizeTypes_Standard_A2_v2      = VirtualMachineSizeTypes("Standard_A2_v2")
	VirtualMachineSizeTypes_Standard_A4_v2      = VirtualMachineSizeTypes("Standard_A4_v2")
	VirtualMachineSizeTypes_Standard_A8_v2      = VirtualMachineSizeTypes("Standard_A8_v2")
	VirtualMachineSizeTypes_Standard_A2m_v2     = VirtualMachineSizeTypes("Standard_A2m_v2")
	VirtualMachineSizeTypes_Standard_A4m_v2     = VirtualMachineSizeTypes("Standard_A4m_v2")
	VirtualMachineSizeTypes_Standard_A8m_v2     = VirtualMachineSizeTypes("Standard_A8m_v2")
	VirtualMachineSizeTypes_Standard_B1s        = VirtualMachineSizeTypes("Standard_B1s")
	VirtualMachineSizeTypes_Standard_B1ms       = VirtualMachineSizeTypes("Standard_B1ms")
	VirtualMachineSizeTypes_Standard_B2s        = VirtualMachineSizeTypes("Standard_B2s")
	VirtualMachineSizeTypes_Standard_B2ms       = VirtualMachineSizeTypes("Standard_B2ms")
	VirtualMachineSizeTypes_Standard_B4ms       = VirtualMachineSizeTypes("Standard_B4ms")
	VirtualMachineSizeTypes_Standard_B8ms       = VirtualMachineSizeTypes("Standard_B8ms")
	VirtualMachineSizeTypes_Standard_D1         = VirtualMachineSizeTypes("Standard_D1")
	VirtualMachineSizeTypes_Standard_D2         = VirtualMachineSizeTypes("Standard_D2")
	VirtualMachineSizeTypes_Standard_D3         = VirtualMachineSizeTypes("Standard_D3")
	VirtualMachineSizeTypes_Standard_D4         = VirtualMachineSizeTypes("Standard_D4")
	VirtualMachineSizeTypes_Standard_D11        = VirtualMachineSizeTypes("Standard_D11")
	VirtualMachineSizeTypes_Standard_D12        = VirtualMachineSizeTypes("Standard_D12")
	VirtualMachineSizeTypes_Standard_D13        = VirtualMachineSizeTypes("Standard_D13")
	VirtualMachineSizeTypes_Standard_D14        = VirtualMachineSizeTypes("Standard_D14")
	VirtualMachineSizeTypes_Standard_D1_v2      = VirtualMachineSizeTypes("Standard_D1_v2")
	VirtualMachineSizeTypes_Standard_D2_v2      = VirtualMachineSizeTypes("Standard_D2_v2")
	VirtualMachineSizeTypes_Standard_D3_v2      = VirtualMachineSizeTypes("Standard_D3_v2")
	VirtualMachineSizeTypes_Standard_D4_v2      = VirtualMachineSizeTypes("Standard_D4_v2")
	VirtualMachineSizeTypes_Standard_D5_v2      = VirtualMachineSizeTypes("Standard_D5_v2")
	VirtualMachineSizeTypes_Standard_D2_v3      = VirtualMachineSizeTypes("Standard_D2_v3")
	VirtualMachineSizeTypes_Standard_D4_v3      = VirtualMachineSizeTypes("Standard_D4_v3")
	VirtualMachineSizeTypes_Standard_D8_v3      = VirtualMachineSizeTypes("Standard_D8_v3")
	VirtualMachineSizeTypes_Standard_D16_v3     = VirtualMachineSizeTypes("Standard_D16_v3")
	VirtualMachineSizeTypes_Standard_D32_v3     = VirtualMachineSizeTypes("Standard_D32_v3")
	VirtualMachineSizeTypes_Standard_D64_v3     = VirtualMachineSizeTypes("Standard_D64_v3")
	VirtualMachineSizeTypes_Standard_D2s_v3     = VirtualMachineSizeTypes("Standard_D2s_v3")
	VirtualMachineSizeTypes_Standard_D4s_v3     = VirtualMachineSizeTypes("Standard_D4s_v3")
	VirtualMachineSizeTypes_Standard_D8s_v3     = VirtualMachineSizeTypes("Standard_D8s_v3")
	VirtualMachineSizeTypes_Standard_D16s_v3    = VirtualMachineSizeTypes("Standard_D16s_v3")
	VirtualMachineSizeTypes_Standard_D32s_v3    = VirtualMachineSizeTypes("Standard_D32s_v3")
	VirtualMachineSizeTypes_Standard_D64s_v3    = VirtualMachineSizeTypes("Standard_D64s_v3")
	VirtualMachineSizeTypes_Standard_D11_v2     = VirtualMachineSizeTypes("Standard_D11_v2")
	VirtualMachineSizeTypes_Standard_D12_v2     = VirtualMachineSizeTypes("Standard_D12_v2")
	VirtualMachineSizeTypes_Standard_D13_v2     = VirtualMachineSizeTypes("Standard_D13_v2")
	VirtualMachineSizeTypes_Standard_D14_v2     = VirtualMachineSizeTypes("Standard_D14_v2")
	VirtualMachineSizeTypes_Standard_D15_v2     = VirtualMachineSizeTypes("Standard_D15_v2")
	VirtualMachineSizeTypes_Standard_DS1        = VirtualMachineSizeTypes("Standard_DS1")
	VirtualMachineSizeTypes_Standard_DS2        = VirtualMachineSizeTypes("Standard_DS2")
	VirtualMachineSizeTypes_Standard_DS3        = VirtualMachineSizeTypes("Standard_DS3")
	VirtualMachineSizeTypes_Standard_DS4        = VirtualMachineSizeTypes("Standard_DS4")
	VirtualMachineSizeTypes_Standard_DS11       = VirtualMachineSizeTypes("Standard_DS11")
	VirtualMachineSizeTypes_Standard_DS12       = VirtualMachineSizeTypes("Standard_DS12")
	VirtualMachineSizeTypes_Standard_DS13       = VirtualMachineSizeTypes("Standard_DS13")
	VirtualMachineSizeTypes_Standard_DS14       = VirtualMachineSizeTypes("Standard_DS14")
	VirtualMachineSizeTypes_Standard_DS1_v2     = VirtualMachineSizeTypes("Standard_DS1_v2")
	VirtualMachineSizeTypes_Standard_DS2_v2     = VirtualMachineSizeTypes("Standard_DS2_v2")
	VirtualMachineSizeTypes_Standard_DS3_v2     = VirtualMachineSizeTypes("Standard_DS3_v2")
	VirtualMachineSizeTypes_Standard_DS4_v2     = VirtualMachineSizeTypes("Standard_DS4_v2")
	VirtualMachineSizeTypes_Standard_DS5_v2     = VirtualMachineSizeTypes("Standard_DS5_v2")
	VirtualMachineSizeTypes_Standard_DS11_v2    = VirtualMachineSizeTypes("Standard_DS11_v2")
	VirtualMachineSizeTypes_Standard_DS12_v2    = VirtualMachineSizeTypes("Standard_DS12_v2")
	VirtualMachineSizeTypes_Standard_DS13_v2    = VirtualMachineSizeTypes("Standard_DS13_v2")
	VirtualMachineSizeTypes_Standard_DS14_v2    = VirtualMachineSizeTypes("Standard_DS14_v2")
	VirtualMachineSizeTypes_Standard_DS15_v2    = VirtualMachineSizeTypes("Standard_DS15_v2")
	VirtualMachineSizeTypes_Standard_DS13_4_v2  = VirtualMachineSizeTypes("Standard_DS13-4_v2")
	VirtualMachineSizeTypes_Standard_DS13_2_v2  = VirtualMachineSizeTypes("Standard_DS13-2_v2")
	VirtualMachineSizeTypes_Standard_DS14_8_v2  = VirtualMachineSizeTypes("Standard_DS14-8_v2")
	VirtualMachineSizeTypes_Standard_DS14_4_v2  = VirtualMachineSizeTypes("Standard_DS14-4_v2")
	VirtualMachineSizeTypes_Standard_E2_v3      = VirtualMachineSizeTypes("Standard_E2_v3")
	VirtualMachineSizeTypes_Standard_E4_v3      = VirtualMachineSizeTypes("Standard_E4_v3")
	VirtualMachineSizeTypes_Standard_E8_v3      = VirtualMachineSizeTypes("Standard_E8_v3")
	VirtualMachineSizeTypes_Standard_E16_v3     = VirtualMachineSizeTypes("Standard_E16_v3")
	VirtualMachineSizeTypes_Standard_E32_v3     = VirtualMachineSizeTypes("Standard_E32_v3")
	VirtualMachineSizeTypes_Standard_E64_v3     = VirtualMachineSizeTypes("Standard_E64_v3")
	VirtualMachineSizeTypes_Standard_E2s_v3     = VirtualMachineSizeTypes("Standard_E2s_v3")
	VirtualMachineSizeTypes_Standard_E4s_v3     = VirtualMachineSizeTypes("Standard_E4s_v3")
	VirtualMachineSizeTypes_Standard_E8s_v3     = VirtualMachineSizeTypes("Standard_E8s_v3")
	VirtualMachineSizeTypes_Standard_E16s_v3    = VirtualMachineSizeTypes("Standard_E16s_v3")
	VirtualMachineSizeTypes_Standard_E32s_v3    = VirtualMachineSizeTypes("Standard_E32s_v3")
	VirtualMachineSizeTypes_Standard_E64s_v3    = VirtualMachineSizeTypes("Standard_E64s_v3")
	VirtualMachineSizeTypes_Standard_E32_16_v3  = VirtualMachineSizeTypes("Standard_E32-16_v3")
	VirtualMachineSizeTypes_Standard_E32_8s_v3  = VirtualMachineSizeTypes("Standard_E32-8s_v3")
	VirtualMachineSizeTypes_Standard_E64_32s_v3 = VirtualMachineSizeTypes("Standard_E64-32s_v3")
	VirtualMachineSizeTypes_Standard_E64_16s_v3 = VirtualMachineSizeTypes("Standard_E64-16s_v3")
	VirtualMachineSizeTypes_Standard_F1         = VirtualMachineSizeTypes("Standard_F1")
	VirtualMachineSizeTypes_Standard_F2         = VirtualMachineSizeTypes("Standard_F2")
	VirtualMachineSizeTypes_Standard_F4         = VirtualMachineSizeTypes("Standard_F4")
	VirtualMachineSizeTypes_Standard_F8         = VirtualMachineSizeTypes("Standard_F8")
	VirtualMachineSizeTypes_Standard_F16        = VirtualMachineSizeTypes("Standard_F16")
	VirtualMachineSizeTypes_Standard_F1s        = VirtualMachineSizeTypes("Standard_F1s")
	VirtualMachineSizeTypes_Standard_F2s        = VirtualMachineSizeTypes("Standard_F2s")
	VirtualMachineSizeTypes_Standard_F4s        = VirtualMachineSizeTypes("Standard_F4s")
	VirtualMachineSizeTypes_Standard_F8s        = VirtualMachineSizeTypes("Standard_F8s")
	VirtualMachineSizeTypes_Standard_F16s       = VirtualMachineSizeTypes("Standard_F16s")
	VirtualMachineSizeTypes_Standard_F2s_v2     = VirtualMachineSizeTypes("Standard_F2s_v2")
	VirtualMachineSizeTypes_Standard_F4s_v2     = VirtualMachineSizeTypes("Standard_F4s_v2")
	VirtualMachineSizeTypes_Standard_F8s_v2     = VirtualMachineSizeTypes("Standard_F8s_v2")
	VirtualMachineSizeTypes_Standard_F16s_v2    = VirtualMachineSizeTypes("Standard_F16s_v2")
	VirtualMachineSizeTypes_Standard_F32s_v2    = VirtualMachineSizeTypes("Standard_F32s_v2")
	VirtualMachineSizeTypes_Standard_F64s_v2    = VirtualMachineSizeTypes("Standard_F64s_v2")
	VirtualMachineSizeTypes_Standard_F72s_v2    = VirtualMachineSizeTypes("Standard_F72s_v2")
	VirtualMachineSizeTypes_Standard_G1         = VirtualMachineSizeTypes("Standard_G1")
	VirtualMachineSizeTypes_Standard_G2         = VirtualMachineSizeTypes("Standard_G2")
	VirtualMachineSizeTypes_Standard_G3         = VirtualMachineSizeTypes("Standard_G3")
	VirtualMachineSizeTypes_Standard_G4         = VirtualMachineSizeTypes("Standard_G4")
	VirtualMachineSizeTypes_Standard_G5         = VirtualMachineSizeTypes("Standard_G5")
	VirtualMachineSizeTypes_Standard_GS1        = VirtualMachineSizeTypes("Standard_GS1")
	VirtualMachineSizeTypes_Standard_GS2        = VirtualMachineSizeTypes("Standard_GS2")
	VirtualMachineSizeTypes_Standard_GS3        = VirtualMachineSizeTypes("Standard_GS3")
	VirtualMachineSizeTypes_Standard_GS4        = VirtualMachineSizeTypes("Standard_GS4")
	VirtualMachineSizeTypes_Standard_GS5        = VirtualMachineSizeTypes("Standard_GS5")
	VirtualMachineSizeTypes_Standard_GS4_8      = VirtualMachineSizeTypes("Standard_GS4-8")
	VirtualMachineSizeTypes_Standard_GS4_4      = VirtualMachineSizeTypes("Standard_GS4-4")
	VirtualMachineSizeTypes_Standard_GS5_16     = VirtualMachineSizeTypes("Standard_GS5-16")
	VirtualMachineSizeTypes_Standard_GS5_8      = VirtualMachineSizeTypes("Standard_GS5-8")
	VirtualMachineSizeTypes_Standard_H8         = VirtualMachineSizeTypes("Standard_H8")
	VirtualMachineSizeTypes_Standard_H16        = VirtualMachineSizeTypes("Standard_H16")
	VirtualMachineSizeTypes_Standard_H8m        = VirtualMachineSizeTypes("Standard_H8m")
	VirtualMachineSizeTypes_Standard_H16m       = VirtualMachineSizeTypes("Standard_H16m")
	VirtualMachineSizeTypes_Standard_H16r       = VirtualMachineSizeTypes("Standard_H16r")
	VirtualMachineSizeTypes_Standard_H16mr      = VirtualMachineSizeTypes("Standard_H16mr")
	VirtualMachineSizeTypes_Standard_L4s        = VirtualMachineSizeTypes("Standard_L4s")
	VirtualMachineSizeTypes_Standard_L8s        = VirtualMachineSizeTypes("Standard_L8s")
	VirtualMachineSizeTypes_Standard_L16s       = VirtualMachineSizeTypes("Standard_L16s")
	VirtualMachineSizeTypes_Standard_L32s       = VirtualMachineSizeTypes("Standard_L32s")
	VirtualMachineSizeTypes_Standard_M64s       = VirtualMachineSizeTypes("Standard_M64s")
	VirtualMachineSizeTypes_Standard_M64ms      = VirtualMachineSizeTypes("Standard_M64ms")
	VirtualMachineSizeTypes_Standard_M128s      = VirtualMachineSizeTypes("Standard_M128s")
	VirtualMachineSizeTypes_Standard_M128ms     = VirtualMachineSizeTypes("Standard_M128ms")
	VirtualMachineSizeTypes_Standard_M64_32ms   = VirtualMachineSizeTypes("Standard_M64-32ms")
	VirtualMachineSizeTypes_Standard_M64_16ms   = VirtualMachineSizeTypes("Standard_M64-16ms")
	VirtualMachineSizeTypes_Standard_M128_64ms  = VirtualMachineSizeTypes("Standard_M128-64ms")
	VirtualMachineSizeTypes_Standard_M128_32ms  = VirtualMachineSizeTypes("Standard_M128-32ms")
	VirtualMachineSizeTypes_Standard_NC6        = VirtualMachineSizeTypes("Standard_NC6")
	VirtualMachineSizeTypes_Standard_NC12       = VirtualMachineSizeTypes("Standard_NC12")
	VirtualMachineSizeTypes_Standard_NC24       = VirtualMachineSizeTypes("Standard_NC24")
	VirtualMachineSizeTypes_Standard_NC24r      = VirtualMachineSizeTypes("Standard_NC24r")
	VirtualMachineSizeTypes_Standard_NC6s_v2    = VirtualMachineSizeTypes("Standard_NC6s_v2")
	VirtualMachineSizeTypes_Standard_NC12s_v2   = VirtualMachineSizeTypes("Standard_NC12s_v2")
	VirtualMachineSizeTypes_Standard_NC24s_v2   = VirtualMachineSizeTypes("Standard_NC24s_v2")
	VirtualMachineSizeTypes_Standard_NC24rs_v2  = VirtualMachineSizeTypes("Standard_NC24rs_v2")
	VirtualMachineSizeTypes_Standard_NC6s_v3    = VirtualMachineSizeTypes("Standard_NC6s_v3")
	VirtualMachineSizeTypes_Standard_NC12s_v3   = VirtualMachineSizeTypes("Standard_NC12s_v3")
	VirtualMachineSizeTypes_Standard_NC24s_v3   = VirtualMachineSizeTypes("Standard_NC24s_v3")
	VirtualMachineSizeTypes_Standard_NC24rs_v3  = VirtualMachineSizeTypes("Standard_NC24rs_v3")
	VirtualMachineSizeTypes_Standard_ND6s       = VirtualMachineSizeTypes("Standard_ND6s")
	VirtualMachineSizeTypes_Standard_ND12s      = VirtualMachineSizeTypes("Standard_ND12s")
	VirtualMachineSizeTypes_Standard_ND24s      = VirtualMachineSizeTypes("Standard_ND24s")
	VirtualMachineSizeTypes_Standard_ND24rs     = VirtualMachineSizeTypes("Standard_ND24rs")
	VirtualMachineSizeTypes_Standard_NV6        = VirtualMachineSizeTypes("Standard_NV6")
	VirtualMachineSizeTypes_Standard_NV12       = VirtualMachineSizeTypes("Standard_NV12")
	VirtualMachineSizeTypes_Standard_NV24       = VirtualMachineSizeTypes("Standard_NV24")
)

func (VirtualMachineSizeTypes) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e VirtualMachineSizeTypes) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e VirtualMachineSizeTypes) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e VirtualMachineSizeTypes) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e VirtualMachineSizeTypes) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}
