// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200501preview

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Type of storage accessed on the storage account.
type AccountType pulumi.String

const (
	AccountTypeGeneralPurposeStorage = AccountType("GeneralPurposeStorage")
	AccountTypeBlobStorage           = AccountType("BlobStorage")
)

func (AccountType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e AccountType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e AccountType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e AccountType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e AccountType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Storage format used for the file represented by the share.
type AzureContainerDataFormat pulumi.String

const (
	AzureContainerDataFormatBlockBlob = AzureContainerDataFormat("BlockBlob")
	AzureContainerDataFormatPageBlob  = AzureContainerDataFormat("PageBlob")
	AzureContainerDataFormatAzureFile = AzureContainerDataFormat("AzureFile")
)

func (AzureContainerDataFormat) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e AzureContainerDataFormat) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e AzureContainerDataFormat) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e AzureContainerDataFormat) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e AzureContainerDataFormat) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Type of access to be allowed for the client.
type ClientPermissionType pulumi.String

const (
	ClientPermissionTypeNoAccess  = ClientPermissionType("NoAccess")
	ClientPermissionTypeReadOnly  = ClientPermissionType("ReadOnly")
	ClientPermissionTypeReadWrite = ClientPermissionType("ReadWrite")
)

func (ClientPermissionType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ClientPermissionType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ClientPermissionType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ClientPermissionType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ClientPermissionType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The status of the Data Box Edge/Gateway device.
type DataBoxEdgeDeviceStatus pulumi.String

const (
	DataBoxEdgeDeviceStatusReadyToSetup          = DataBoxEdgeDeviceStatus("ReadyToSetup")
	DataBoxEdgeDeviceStatusOnline                = DataBoxEdgeDeviceStatus("Online")
	DataBoxEdgeDeviceStatusOffline               = DataBoxEdgeDeviceStatus("Offline")
	DataBoxEdgeDeviceStatusNeedsAttention        = DataBoxEdgeDeviceStatus("NeedsAttention")
	DataBoxEdgeDeviceStatusDisconnected          = DataBoxEdgeDeviceStatus("Disconnected")
	DataBoxEdgeDeviceStatusPartiallyDisconnected = DataBoxEdgeDeviceStatus("PartiallyDisconnected")
	DataBoxEdgeDeviceStatusMaintenance           = DataBoxEdgeDeviceStatus("Maintenance")
)

func (DataBoxEdgeDeviceStatus) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e DataBoxEdgeDeviceStatus) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e DataBoxEdgeDeviceStatus) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e DataBoxEdgeDeviceStatus) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e DataBoxEdgeDeviceStatus) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Data policy of the storage Account.
type DataPolicy pulumi.String

const (
	DataPolicyCloud = DataPolicy("Cloud")
	DataPolicyLocal = DataPolicy("Local")
)

func (DataPolicy) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e DataPolicy) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e DataPolicy) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e DataPolicy) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e DataPolicy) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

type DayOfWeek pulumi.String

const (
	DayOfWeekSunday    = DayOfWeek("Sunday")
	DayOfWeekMonday    = DayOfWeek("Monday")
	DayOfWeekTuesday   = DayOfWeek("Tuesday")
	DayOfWeekWednesday = DayOfWeek("Wednesday")
	DayOfWeekThursday  = DayOfWeek("Thursday")
	DayOfWeekFriday    = DayOfWeek("Friday")
	DayOfWeekSaturday  = DayOfWeek("Saturday")
)

func (DayOfWeek) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e DayOfWeek) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e DayOfWeek) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e DayOfWeek) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e DayOfWeek) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The algorithm used to encrypt "Value".
type EncryptionAlgorithm pulumi.String

const (
	EncryptionAlgorithmNone               = EncryptionAlgorithm("None")
	EncryptionAlgorithmAES256             = EncryptionAlgorithm("AES256")
	EncryptionAlgorithm_RSAES_PKCS1_v_1_5 = EncryptionAlgorithm("RSAES_PKCS1_v_1_5")
)

func (EncryptionAlgorithm) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e EncryptionAlgorithm) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e EncryptionAlgorithm) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e EncryptionAlgorithm) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e EncryptionAlgorithm) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Current monitoring status of the share.
type MonitoringStatus pulumi.String

const (
	MonitoringStatusEnabled  = MonitoringStatus("Enabled")
	MonitoringStatusDisabled = MonitoringStatus("Disabled")
)

func (MonitoringStatus) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e MonitoringStatus) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e MonitoringStatus) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e MonitoringStatus) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e MonitoringStatus) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Status of the order as per the allowed status types.
type OrderStateEnum pulumi.String

const (
	OrderStateEnumUntracked              = OrderStateEnum("Untracked")
	OrderStateEnumAwaitingFulfilment     = OrderStateEnum("AwaitingFulfilment")
	OrderStateEnumAwaitingPreparation    = OrderStateEnum("AwaitingPreparation")
	OrderStateEnumAwaitingShipment       = OrderStateEnum("AwaitingShipment")
	OrderStateEnumShipped                = OrderStateEnum("Shipped")
	OrderStateEnumArriving               = OrderStateEnum("Arriving")
	OrderStateEnumDelivered              = OrderStateEnum("Delivered")
	OrderStateEnumReplacementRequested   = OrderStateEnum("ReplacementRequested")
	OrderStateEnumLostDevice             = OrderStateEnum("LostDevice")
	OrderStateEnumDeclined               = OrderStateEnum("Declined")
	OrderStateEnumReturnInitiated        = OrderStateEnum("ReturnInitiated")
	OrderStateEnumAwaitingReturnShipment = OrderStateEnum("AwaitingReturnShipment")
	OrderStateEnumShippedBack            = OrderStateEnum("ShippedBack")
	OrderStateEnumCollectedAtMicrosoft   = OrderStateEnum("CollectedAtMicrosoft")
)

func (OrderStateEnum) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e OrderStateEnum) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e OrderStateEnum) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e OrderStateEnum) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e OrderStateEnum) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Role type.
type RoleTypes pulumi.String

const (
	RoleTypesIOT       = RoleTypes("IOT")
	RoleTypesASA       = RoleTypes("ASA")
	RoleTypesFunctions = RoleTypes("Functions")
	RoleTypesCognitive = RoleTypes("Cognitive")
)

func (RoleTypes) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e RoleTypes) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e RoleTypes) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e RoleTypes) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e RoleTypes) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Signifies whether SSL needs to be enabled or not.
type SSLStatus pulumi.String

const (
	SSLStatusEnabled  = SSLStatus("Enabled")
	SSLStatusDisabled = SSLStatus("Disabled")
)

func (SSLStatus) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e SSLStatus) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e SSLStatus) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e SSLStatus) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e SSLStatus) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Access protocol to be used by the share.
type ShareAccessProtocol pulumi.String

const (
	ShareAccessProtocolSMB = ShareAccessProtocol("SMB")
	ShareAccessProtocolNFS = ShareAccessProtocol("NFS")
)

func (ShareAccessProtocol) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ShareAccessProtocol) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ShareAccessProtocol) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ShareAccessProtocol) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ShareAccessProtocol) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Type of access to be allowed for the user.
type ShareAccessType pulumi.String

const (
	ShareAccessTypeChange = ShareAccessType("Change")
	ShareAccessTypeRead   = ShareAccessType("Read")
	ShareAccessTypeCustom = ShareAccessType("Custom")
)

func (ShareAccessType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ShareAccessType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ShareAccessType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ShareAccessType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ShareAccessType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Current status of the share.
type ShareStatus pulumi.String

const (
	ShareStatusOffline        = ShareStatus("Offline")
	ShareStatusUnknown        = ShareStatus("Unknown")
	ShareStatusOK             = ShareStatus("OK")
	ShareStatusUpdating       = ShareStatus("Updating")
	ShareStatusNeedsAttention = ShareStatus("NeedsAttention")
)

func (ShareStatus) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ShareStatus) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ShareStatus) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ShareStatus) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ShareStatus) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// SKU name.
type SkuName pulumi.String

const (
	SkuNameGateway               = SkuName("Gateway")
	SkuNameEdge                  = SkuName("Edge")
	SkuName_TEA_1Node            = SkuName("TEA_1Node")
	SkuName_TEA_1Node_UPS        = SkuName("TEA_1Node_UPS")
	SkuName_TEA_1Node_Heater     = SkuName("TEA_1Node_Heater")
	SkuName_TEA_1Node_UPS_Heater = SkuName("TEA_1Node_UPS_Heater")
	SkuName_TEA_4Node_Heater     = SkuName("TEA_4Node_Heater")
	SkuName_TEA_4Node_UPS_Heater = SkuName("TEA_4Node_UPS_Heater")
	SkuNameTMA                   = SkuName("TMA")
	SkuNameTDC                   = SkuName("TDC")
	SkuName_TCA_Large            = SkuName("TCA_Large")
	SkuName_TCA_Small            = SkuName("TCA_Small")
	SkuNameGPU                   = SkuName("GPU")
)

func (SkuName) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e SkuName) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e SkuName) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e SkuName) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e SkuName) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The SKU tier. This is based on the SKU name.
type SkuTier pulumi.String

const (
	SkuTierStandard = SkuTier("Standard")
)

func (SkuTier) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e SkuTier) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e SkuTier) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e SkuTier) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e SkuTier) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Current status of the storage account
type StorageAccountStatus pulumi.String

const (
	StorageAccountStatusOK             = StorageAccountStatus("OK")
	StorageAccountStatusOffline        = StorageAccountStatus("Offline")
	StorageAccountStatusUnknown        = StorageAccountStatus("Unknown")
	StorageAccountStatusUpdating       = StorageAccountStatus("Updating")
	StorageAccountStatusNeedsAttention = StorageAccountStatus("NeedsAttention")
)

func (StorageAccountStatus) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e StorageAccountStatus) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e StorageAccountStatus) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e StorageAccountStatus) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e StorageAccountStatus) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Trigger Kind.
type TriggerEventType pulumi.String

const (
	TriggerEventTypeFileEvent          = TriggerEventType("FileEvent")
	TriggerEventTypePeriodicTimerEvent = TriggerEventType("PeriodicTimerEvent")
)

func (TriggerEventType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e TriggerEventType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e TriggerEventType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e TriggerEventType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e TriggerEventType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Type of the user.
type UserType pulumi.String

const (
	UserTypeShare           = UserType("Share")
	UserTypeLocalManagement = UserType("LocalManagement")
	UserTypeARM             = UserType("ARM")
)

func (UserType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e UserType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e UserType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e UserType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e UserType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}
