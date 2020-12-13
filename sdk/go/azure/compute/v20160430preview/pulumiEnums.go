// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20160430preview

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

// Specifies how the virtual machines in the scale set should be created.<br><br> The only allowed value is: **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
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

// The type of identity used for the virtual machine scale set. Currently, the only supported type is 'SystemAssigned', which implicitly creates an identity.
type ResourceIdentityType pulumi.String

const (
	ResourceIdentityTypeSystemAssigned = ResourceIdentityType("SystemAssigned")
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

// Specifies the storage account type for the managed disk. Possible values are: Standard_LRS or Premium_LRS.
type StorageAccountTypes pulumi.String

const (
	StorageAccountTypes_Standard_LRS = StorageAccountTypes("Standard_LRS")
	StorageAccountTypes_Premium_LRS  = StorageAccountTypes("Premium_LRS")
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

// Specifies the size of the virtual machine. For more information about virtual machine sizes, see [Sizes for virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-sizes?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> The available VM sizes depend on region and availability set. For a list of available sizes use these APIs:  <br><br> [List all available virtual machine sizes in an availability set](virtualmachines-list-sizes-availability-set.md) <br><br> [List all available virtual machine sizes in a region](virtualmachines-list-sizes-region.md) <br><br> [List all available virtual machine sizes for resizing](virtualmachines-list-sizes-for-resizing.md)
type VirtualMachineSizeTypes pulumi.String

const (
	VirtualMachineSizeTypes_Basic_A0         = VirtualMachineSizeTypes("Basic_A0")
	VirtualMachineSizeTypes_Basic_A1         = VirtualMachineSizeTypes("Basic_A1")
	VirtualMachineSizeTypes_Basic_A2         = VirtualMachineSizeTypes("Basic_A2")
	VirtualMachineSizeTypes_Basic_A3         = VirtualMachineSizeTypes("Basic_A3")
	VirtualMachineSizeTypes_Basic_A4         = VirtualMachineSizeTypes("Basic_A4")
	VirtualMachineSizeTypes_Standard_A0      = VirtualMachineSizeTypes("Standard_A0")
	VirtualMachineSizeTypes_Standard_A1      = VirtualMachineSizeTypes("Standard_A1")
	VirtualMachineSizeTypes_Standard_A2      = VirtualMachineSizeTypes("Standard_A2")
	VirtualMachineSizeTypes_Standard_A3      = VirtualMachineSizeTypes("Standard_A3")
	VirtualMachineSizeTypes_Standard_A4      = VirtualMachineSizeTypes("Standard_A4")
	VirtualMachineSizeTypes_Standard_A5      = VirtualMachineSizeTypes("Standard_A5")
	VirtualMachineSizeTypes_Standard_A6      = VirtualMachineSizeTypes("Standard_A6")
	VirtualMachineSizeTypes_Standard_A7      = VirtualMachineSizeTypes("Standard_A7")
	VirtualMachineSizeTypes_Standard_A8      = VirtualMachineSizeTypes("Standard_A8")
	VirtualMachineSizeTypes_Standard_A9      = VirtualMachineSizeTypes("Standard_A9")
	VirtualMachineSizeTypes_Standard_A10     = VirtualMachineSizeTypes("Standard_A10")
	VirtualMachineSizeTypes_Standard_A11     = VirtualMachineSizeTypes("Standard_A11")
	VirtualMachineSizeTypes_Standard_D1      = VirtualMachineSizeTypes("Standard_D1")
	VirtualMachineSizeTypes_Standard_D2      = VirtualMachineSizeTypes("Standard_D2")
	VirtualMachineSizeTypes_Standard_D3      = VirtualMachineSizeTypes("Standard_D3")
	VirtualMachineSizeTypes_Standard_D4      = VirtualMachineSizeTypes("Standard_D4")
	VirtualMachineSizeTypes_Standard_D11     = VirtualMachineSizeTypes("Standard_D11")
	VirtualMachineSizeTypes_Standard_D12     = VirtualMachineSizeTypes("Standard_D12")
	VirtualMachineSizeTypes_Standard_D13     = VirtualMachineSizeTypes("Standard_D13")
	VirtualMachineSizeTypes_Standard_D14     = VirtualMachineSizeTypes("Standard_D14")
	VirtualMachineSizeTypes_Standard_D1_v2   = VirtualMachineSizeTypes("Standard_D1_v2")
	VirtualMachineSizeTypes_Standard_D2_v2   = VirtualMachineSizeTypes("Standard_D2_v2")
	VirtualMachineSizeTypes_Standard_D3_v2   = VirtualMachineSizeTypes("Standard_D3_v2")
	VirtualMachineSizeTypes_Standard_D4_v2   = VirtualMachineSizeTypes("Standard_D4_v2")
	VirtualMachineSizeTypes_Standard_D5_v2   = VirtualMachineSizeTypes("Standard_D5_v2")
	VirtualMachineSizeTypes_Standard_D11_v2  = VirtualMachineSizeTypes("Standard_D11_v2")
	VirtualMachineSizeTypes_Standard_D12_v2  = VirtualMachineSizeTypes("Standard_D12_v2")
	VirtualMachineSizeTypes_Standard_D13_v2  = VirtualMachineSizeTypes("Standard_D13_v2")
	VirtualMachineSizeTypes_Standard_D14_v2  = VirtualMachineSizeTypes("Standard_D14_v2")
	VirtualMachineSizeTypes_Standard_D15_v2  = VirtualMachineSizeTypes("Standard_D15_v2")
	VirtualMachineSizeTypes_Standard_DS1     = VirtualMachineSizeTypes("Standard_DS1")
	VirtualMachineSizeTypes_Standard_DS2     = VirtualMachineSizeTypes("Standard_DS2")
	VirtualMachineSizeTypes_Standard_DS3     = VirtualMachineSizeTypes("Standard_DS3")
	VirtualMachineSizeTypes_Standard_DS4     = VirtualMachineSizeTypes("Standard_DS4")
	VirtualMachineSizeTypes_Standard_DS11    = VirtualMachineSizeTypes("Standard_DS11")
	VirtualMachineSizeTypes_Standard_DS12    = VirtualMachineSizeTypes("Standard_DS12")
	VirtualMachineSizeTypes_Standard_DS13    = VirtualMachineSizeTypes("Standard_DS13")
	VirtualMachineSizeTypes_Standard_DS14    = VirtualMachineSizeTypes("Standard_DS14")
	VirtualMachineSizeTypes_Standard_DS1_v2  = VirtualMachineSizeTypes("Standard_DS1_v2")
	VirtualMachineSizeTypes_Standard_DS2_v2  = VirtualMachineSizeTypes("Standard_DS2_v2")
	VirtualMachineSizeTypes_Standard_DS3_v2  = VirtualMachineSizeTypes("Standard_DS3_v2")
	VirtualMachineSizeTypes_Standard_DS4_v2  = VirtualMachineSizeTypes("Standard_DS4_v2")
	VirtualMachineSizeTypes_Standard_DS5_v2  = VirtualMachineSizeTypes("Standard_DS5_v2")
	VirtualMachineSizeTypes_Standard_DS11_v2 = VirtualMachineSizeTypes("Standard_DS11_v2")
	VirtualMachineSizeTypes_Standard_DS12_v2 = VirtualMachineSizeTypes("Standard_DS12_v2")
	VirtualMachineSizeTypes_Standard_DS13_v2 = VirtualMachineSizeTypes("Standard_DS13_v2")
	VirtualMachineSizeTypes_Standard_DS14_v2 = VirtualMachineSizeTypes("Standard_DS14_v2")
	VirtualMachineSizeTypes_Standard_DS15_v2 = VirtualMachineSizeTypes("Standard_DS15_v2")
	VirtualMachineSizeTypes_Standard_G1      = VirtualMachineSizeTypes("Standard_G1")
	VirtualMachineSizeTypes_Standard_G2      = VirtualMachineSizeTypes("Standard_G2")
	VirtualMachineSizeTypes_Standard_G3      = VirtualMachineSizeTypes("Standard_G3")
	VirtualMachineSizeTypes_Standard_G4      = VirtualMachineSizeTypes("Standard_G4")
	VirtualMachineSizeTypes_Standard_G5      = VirtualMachineSizeTypes("Standard_G5")
	VirtualMachineSizeTypes_Standard_GS1     = VirtualMachineSizeTypes("Standard_GS1")
	VirtualMachineSizeTypes_Standard_GS2     = VirtualMachineSizeTypes("Standard_GS2")
	VirtualMachineSizeTypes_Standard_GS3     = VirtualMachineSizeTypes("Standard_GS3")
	VirtualMachineSizeTypes_Standard_GS4     = VirtualMachineSizeTypes("Standard_GS4")
	VirtualMachineSizeTypes_Standard_GS5     = VirtualMachineSizeTypes("Standard_GS5")
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
