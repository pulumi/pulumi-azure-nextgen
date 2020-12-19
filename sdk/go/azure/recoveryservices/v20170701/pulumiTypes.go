// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170701

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Azure Recovery Services Vault specific protection intent item.
type AzureRecoveryServiceVaultProtectionIntent struct {
	// Type of backup management for the backed up item.
	BackupManagementType *string `pulumi:"backupManagementType"`
	// ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
	ItemId *string `pulumi:"itemId"`
	// ID of the backup policy with which this item is backed up.
	PolicyId *string `pulumi:"policyId"`
	// backup protectionIntent type.
	// Expected value is 'RecoveryServiceVaultItem'.
	ProtectionIntentItemType *string `pulumi:"protectionIntentItemType"`
	// Backup state of this backup item.
	ProtectionState *string `pulumi:"protectionState"`
	// ARM ID of the resource to be backed up.
	SourceResourceId *string `pulumi:"sourceResourceId"`
}

// AzureRecoveryServiceVaultProtectionIntentInput is an input type that accepts AzureRecoveryServiceVaultProtectionIntentArgs and AzureRecoveryServiceVaultProtectionIntentOutput values.
// You can construct a concrete instance of `AzureRecoveryServiceVaultProtectionIntentInput` via:
//
//          AzureRecoveryServiceVaultProtectionIntentArgs{...}
type AzureRecoveryServiceVaultProtectionIntentInput interface {
	pulumi.Input

	ToAzureRecoveryServiceVaultProtectionIntentOutput() AzureRecoveryServiceVaultProtectionIntentOutput
	ToAzureRecoveryServiceVaultProtectionIntentOutputWithContext(context.Context) AzureRecoveryServiceVaultProtectionIntentOutput
}

// Azure Recovery Services Vault specific protection intent item.
type AzureRecoveryServiceVaultProtectionIntentArgs struct {
	// Type of backup management for the backed up item.
	BackupManagementType pulumi.StringPtrInput `pulumi:"backupManagementType"`
	// ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
	ItemId pulumi.StringPtrInput `pulumi:"itemId"`
	// ID of the backup policy with which this item is backed up.
	PolicyId pulumi.StringPtrInput `pulumi:"policyId"`
	// backup protectionIntent type.
	// Expected value is 'RecoveryServiceVaultItem'.
	ProtectionIntentItemType pulumi.StringPtrInput `pulumi:"protectionIntentItemType"`
	// Backup state of this backup item.
	ProtectionState pulumi.StringPtrInput `pulumi:"protectionState"`
	// ARM ID of the resource to be backed up.
	SourceResourceId pulumi.StringPtrInput `pulumi:"sourceResourceId"`
}

func (AzureRecoveryServiceVaultProtectionIntentArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*AzureRecoveryServiceVaultProtectionIntent)(nil)).Elem()
}

func (i AzureRecoveryServiceVaultProtectionIntentArgs) ToAzureRecoveryServiceVaultProtectionIntentOutput() AzureRecoveryServiceVaultProtectionIntentOutput {
	return i.ToAzureRecoveryServiceVaultProtectionIntentOutputWithContext(context.Background())
}

func (i AzureRecoveryServiceVaultProtectionIntentArgs) ToAzureRecoveryServiceVaultProtectionIntentOutputWithContext(ctx context.Context) AzureRecoveryServiceVaultProtectionIntentOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AzureRecoveryServiceVaultProtectionIntentOutput)
}

// Azure Recovery Services Vault specific protection intent item.
type AzureRecoveryServiceVaultProtectionIntentOutput struct{ *pulumi.OutputState }

func (AzureRecoveryServiceVaultProtectionIntentOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*AzureRecoveryServiceVaultProtectionIntent)(nil)).Elem()
}

func (o AzureRecoveryServiceVaultProtectionIntentOutput) ToAzureRecoveryServiceVaultProtectionIntentOutput() AzureRecoveryServiceVaultProtectionIntentOutput {
	return o
}

func (o AzureRecoveryServiceVaultProtectionIntentOutput) ToAzureRecoveryServiceVaultProtectionIntentOutputWithContext(ctx context.Context) AzureRecoveryServiceVaultProtectionIntentOutput {
	return o
}

// Type of backup management for the backed up item.
func (o AzureRecoveryServiceVaultProtectionIntentOutput) BackupManagementType() pulumi.StringPtrOutput {
	return o.ApplyT(func(v AzureRecoveryServiceVaultProtectionIntent) *string { return v.BackupManagementType }).(pulumi.StringPtrOutput)
}

// ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
func (o AzureRecoveryServiceVaultProtectionIntentOutput) ItemId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v AzureRecoveryServiceVaultProtectionIntent) *string { return v.ItemId }).(pulumi.StringPtrOutput)
}

// ID of the backup policy with which this item is backed up.
func (o AzureRecoveryServiceVaultProtectionIntentOutput) PolicyId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v AzureRecoveryServiceVaultProtectionIntent) *string { return v.PolicyId }).(pulumi.StringPtrOutput)
}

// backup protectionIntent type.
// Expected value is 'RecoveryServiceVaultItem'.
func (o AzureRecoveryServiceVaultProtectionIntentOutput) ProtectionIntentItemType() pulumi.StringPtrOutput {
	return o.ApplyT(func(v AzureRecoveryServiceVaultProtectionIntent) *string { return v.ProtectionIntentItemType }).(pulumi.StringPtrOutput)
}

// Backup state of this backup item.
func (o AzureRecoveryServiceVaultProtectionIntentOutput) ProtectionState() pulumi.StringPtrOutput {
	return o.ApplyT(func(v AzureRecoveryServiceVaultProtectionIntent) *string { return v.ProtectionState }).(pulumi.StringPtrOutput)
}

// ARM ID of the resource to be backed up.
func (o AzureRecoveryServiceVaultProtectionIntentOutput) SourceResourceId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v AzureRecoveryServiceVaultProtectionIntent) *string { return v.SourceResourceId }).(pulumi.StringPtrOutput)
}

// Azure Recovery Services Vault specific protection intent item.
type AzureRecoveryServiceVaultProtectionIntentResponse struct {
	// Type of backup management for the backed up item.
	BackupManagementType *string `pulumi:"backupManagementType"`
	// ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
	ItemId *string `pulumi:"itemId"`
	// ID of the backup policy with which this item is backed up.
	PolicyId *string `pulumi:"policyId"`
	// backup protectionIntent type.
	// Expected value is 'RecoveryServiceVaultItem'.
	ProtectionIntentItemType *string `pulumi:"protectionIntentItemType"`
	// Backup state of this backup item.
	ProtectionState *string `pulumi:"protectionState"`
	// ARM ID of the resource to be backed up.
	SourceResourceId *string `pulumi:"sourceResourceId"`
}

// AzureRecoveryServiceVaultProtectionIntentResponseInput is an input type that accepts AzureRecoveryServiceVaultProtectionIntentResponseArgs and AzureRecoveryServiceVaultProtectionIntentResponseOutput values.
// You can construct a concrete instance of `AzureRecoveryServiceVaultProtectionIntentResponseInput` via:
//
//          AzureRecoveryServiceVaultProtectionIntentResponseArgs{...}
type AzureRecoveryServiceVaultProtectionIntentResponseInput interface {
	pulumi.Input

	ToAzureRecoveryServiceVaultProtectionIntentResponseOutput() AzureRecoveryServiceVaultProtectionIntentResponseOutput
	ToAzureRecoveryServiceVaultProtectionIntentResponseOutputWithContext(context.Context) AzureRecoveryServiceVaultProtectionIntentResponseOutput
}

// Azure Recovery Services Vault specific protection intent item.
type AzureRecoveryServiceVaultProtectionIntentResponseArgs struct {
	// Type of backup management for the backed up item.
	BackupManagementType pulumi.StringPtrInput `pulumi:"backupManagementType"`
	// ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
	ItemId pulumi.StringPtrInput `pulumi:"itemId"`
	// ID of the backup policy with which this item is backed up.
	PolicyId pulumi.StringPtrInput `pulumi:"policyId"`
	// backup protectionIntent type.
	// Expected value is 'RecoveryServiceVaultItem'.
	ProtectionIntentItemType pulumi.StringPtrInput `pulumi:"protectionIntentItemType"`
	// Backup state of this backup item.
	ProtectionState pulumi.StringPtrInput `pulumi:"protectionState"`
	// ARM ID of the resource to be backed up.
	SourceResourceId pulumi.StringPtrInput `pulumi:"sourceResourceId"`
}

func (AzureRecoveryServiceVaultProtectionIntentResponseArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*AzureRecoveryServiceVaultProtectionIntentResponse)(nil)).Elem()
}

func (i AzureRecoveryServiceVaultProtectionIntentResponseArgs) ToAzureRecoveryServiceVaultProtectionIntentResponseOutput() AzureRecoveryServiceVaultProtectionIntentResponseOutput {
	return i.ToAzureRecoveryServiceVaultProtectionIntentResponseOutputWithContext(context.Background())
}

func (i AzureRecoveryServiceVaultProtectionIntentResponseArgs) ToAzureRecoveryServiceVaultProtectionIntentResponseOutputWithContext(ctx context.Context) AzureRecoveryServiceVaultProtectionIntentResponseOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AzureRecoveryServiceVaultProtectionIntentResponseOutput)
}

// Azure Recovery Services Vault specific protection intent item.
type AzureRecoveryServiceVaultProtectionIntentResponseOutput struct{ *pulumi.OutputState }

func (AzureRecoveryServiceVaultProtectionIntentResponseOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*AzureRecoveryServiceVaultProtectionIntentResponse)(nil)).Elem()
}

func (o AzureRecoveryServiceVaultProtectionIntentResponseOutput) ToAzureRecoveryServiceVaultProtectionIntentResponseOutput() AzureRecoveryServiceVaultProtectionIntentResponseOutput {
	return o
}

func (o AzureRecoveryServiceVaultProtectionIntentResponseOutput) ToAzureRecoveryServiceVaultProtectionIntentResponseOutputWithContext(ctx context.Context) AzureRecoveryServiceVaultProtectionIntentResponseOutput {
	return o
}

// Type of backup management for the backed up item.
func (o AzureRecoveryServiceVaultProtectionIntentResponseOutput) BackupManagementType() pulumi.StringPtrOutput {
	return o.ApplyT(func(v AzureRecoveryServiceVaultProtectionIntentResponse) *string { return v.BackupManagementType }).(pulumi.StringPtrOutput)
}

// ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
func (o AzureRecoveryServiceVaultProtectionIntentResponseOutput) ItemId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v AzureRecoveryServiceVaultProtectionIntentResponse) *string { return v.ItemId }).(pulumi.StringPtrOutput)
}

// ID of the backup policy with which this item is backed up.
func (o AzureRecoveryServiceVaultProtectionIntentResponseOutput) PolicyId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v AzureRecoveryServiceVaultProtectionIntentResponse) *string { return v.PolicyId }).(pulumi.StringPtrOutput)
}

// backup protectionIntent type.
// Expected value is 'RecoveryServiceVaultItem'.
func (o AzureRecoveryServiceVaultProtectionIntentResponseOutput) ProtectionIntentItemType() pulumi.StringPtrOutput {
	return o.ApplyT(func(v AzureRecoveryServiceVaultProtectionIntentResponse) *string { return v.ProtectionIntentItemType }).(pulumi.StringPtrOutput)
}

// Backup state of this backup item.
func (o AzureRecoveryServiceVaultProtectionIntentResponseOutput) ProtectionState() pulumi.StringPtrOutput {
	return o.ApplyT(func(v AzureRecoveryServiceVaultProtectionIntentResponse) *string { return v.ProtectionState }).(pulumi.StringPtrOutput)
}

// ARM ID of the resource to be backed up.
func (o AzureRecoveryServiceVaultProtectionIntentResponseOutput) SourceResourceId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v AzureRecoveryServiceVaultProtectionIntentResponse) *string { return v.SourceResourceId }).(pulumi.StringPtrOutput)
}

// IaaS VM specific backup protection intent item.
type AzureResourceProtectionIntent struct {
	// Type of backup management for the backed up item.
	BackupManagementType *string `pulumi:"backupManagementType"`
	// Friendly name of the VM represented by this backup item.
	FriendlyName *string `pulumi:"friendlyName"`
	// ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
	ItemId *string `pulumi:"itemId"`
	// ID of the backup policy with which this item is backed up.
	PolicyId *string `pulumi:"policyId"`
	// backup protectionIntent type.
	// Expected value is 'AzureResourceItem'.
	ProtectionIntentItemType *string `pulumi:"protectionIntentItemType"`
	// Backup state of this backup item.
	ProtectionState *string `pulumi:"protectionState"`
	// ARM ID of the resource to be backed up.
	SourceResourceId *string `pulumi:"sourceResourceId"`
}

// AzureResourceProtectionIntentInput is an input type that accepts AzureResourceProtectionIntentArgs and AzureResourceProtectionIntentOutput values.
// You can construct a concrete instance of `AzureResourceProtectionIntentInput` via:
//
//          AzureResourceProtectionIntentArgs{...}
type AzureResourceProtectionIntentInput interface {
	pulumi.Input

	ToAzureResourceProtectionIntentOutput() AzureResourceProtectionIntentOutput
	ToAzureResourceProtectionIntentOutputWithContext(context.Context) AzureResourceProtectionIntentOutput
}

// IaaS VM specific backup protection intent item.
type AzureResourceProtectionIntentArgs struct {
	// Type of backup management for the backed up item.
	BackupManagementType pulumi.StringPtrInput `pulumi:"backupManagementType"`
	// Friendly name of the VM represented by this backup item.
	FriendlyName pulumi.StringPtrInput `pulumi:"friendlyName"`
	// ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
	ItemId pulumi.StringPtrInput `pulumi:"itemId"`
	// ID of the backup policy with which this item is backed up.
	PolicyId pulumi.StringPtrInput `pulumi:"policyId"`
	// backup protectionIntent type.
	// Expected value is 'AzureResourceItem'.
	ProtectionIntentItemType pulumi.StringPtrInput `pulumi:"protectionIntentItemType"`
	// Backup state of this backup item.
	ProtectionState pulumi.StringPtrInput `pulumi:"protectionState"`
	// ARM ID of the resource to be backed up.
	SourceResourceId pulumi.StringPtrInput `pulumi:"sourceResourceId"`
}

func (AzureResourceProtectionIntentArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*AzureResourceProtectionIntent)(nil)).Elem()
}

func (i AzureResourceProtectionIntentArgs) ToAzureResourceProtectionIntentOutput() AzureResourceProtectionIntentOutput {
	return i.ToAzureResourceProtectionIntentOutputWithContext(context.Background())
}

func (i AzureResourceProtectionIntentArgs) ToAzureResourceProtectionIntentOutputWithContext(ctx context.Context) AzureResourceProtectionIntentOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AzureResourceProtectionIntentOutput)
}

// IaaS VM specific backup protection intent item.
type AzureResourceProtectionIntentOutput struct{ *pulumi.OutputState }

func (AzureResourceProtectionIntentOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*AzureResourceProtectionIntent)(nil)).Elem()
}

func (o AzureResourceProtectionIntentOutput) ToAzureResourceProtectionIntentOutput() AzureResourceProtectionIntentOutput {
	return o
}

func (o AzureResourceProtectionIntentOutput) ToAzureResourceProtectionIntentOutputWithContext(ctx context.Context) AzureResourceProtectionIntentOutput {
	return o
}

// Type of backup management for the backed up item.
func (o AzureResourceProtectionIntentOutput) BackupManagementType() pulumi.StringPtrOutput {
	return o.ApplyT(func(v AzureResourceProtectionIntent) *string { return v.BackupManagementType }).(pulumi.StringPtrOutput)
}

// Friendly name of the VM represented by this backup item.
func (o AzureResourceProtectionIntentOutput) FriendlyName() pulumi.StringPtrOutput {
	return o.ApplyT(func(v AzureResourceProtectionIntent) *string { return v.FriendlyName }).(pulumi.StringPtrOutput)
}

// ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
func (o AzureResourceProtectionIntentOutput) ItemId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v AzureResourceProtectionIntent) *string { return v.ItemId }).(pulumi.StringPtrOutput)
}

// ID of the backup policy with which this item is backed up.
func (o AzureResourceProtectionIntentOutput) PolicyId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v AzureResourceProtectionIntent) *string { return v.PolicyId }).(pulumi.StringPtrOutput)
}

// backup protectionIntent type.
// Expected value is 'AzureResourceItem'.
func (o AzureResourceProtectionIntentOutput) ProtectionIntentItemType() pulumi.StringPtrOutput {
	return o.ApplyT(func(v AzureResourceProtectionIntent) *string { return v.ProtectionIntentItemType }).(pulumi.StringPtrOutput)
}

// Backup state of this backup item.
func (o AzureResourceProtectionIntentOutput) ProtectionState() pulumi.StringPtrOutput {
	return o.ApplyT(func(v AzureResourceProtectionIntent) *string { return v.ProtectionState }).(pulumi.StringPtrOutput)
}

// ARM ID of the resource to be backed up.
func (o AzureResourceProtectionIntentOutput) SourceResourceId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v AzureResourceProtectionIntent) *string { return v.SourceResourceId }).(pulumi.StringPtrOutput)
}

// IaaS VM specific backup protection intent item.
type AzureResourceProtectionIntentResponse struct {
	// Type of backup management for the backed up item.
	BackupManagementType *string `pulumi:"backupManagementType"`
	// Friendly name of the VM represented by this backup item.
	FriendlyName *string `pulumi:"friendlyName"`
	// ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
	ItemId *string `pulumi:"itemId"`
	// ID of the backup policy with which this item is backed up.
	PolicyId *string `pulumi:"policyId"`
	// backup protectionIntent type.
	// Expected value is 'AzureResourceItem'.
	ProtectionIntentItemType *string `pulumi:"protectionIntentItemType"`
	// Backup state of this backup item.
	ProtectionState *string `pulumi:"protectionState"`
	// ARM ID of the resource to be backed up.
	SourceResourceId *string `pulumi:"sourceResourceId"`
}

// AzureResourceProtectionIntentResponseInput is an input type that accepts AzureResourceProtectionIntentResponseArgs and AzureResourceProtectionIntentResponseOutput values.
// You can construct a concrete instance of `AzureResourceProtectionIntentResponseInput` via:
//
//          AzureResourceProtectionIntentResponseArgs{...}
type AzureResourceProtectionIntentResponseInput interface {
	pulumi.Input

	ToAzureResourceProtectionIntentResponseOutput() AzureResourceProtectionIntentResponseOutput
	ToAzureResourceProtectionIntentResponseOutputWithContext(context.Context) AzureResourceProtectionIntentResponseOutput
}

// IaaS VM specific backup protection intent item.
type AzureResourceProtectionIntentResponseArgs struct {
	// Type of backup management for the backed up item.
	BackupManagementType pulumi.StringPtrInput `pulumi:"backupManagementType"`
	// Friendly name of the VM represented by this backup item.
	FriendlyName pulumi.StringPtrInput `pulumi:"friendlyName"`
	// ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
	ItemId pulumi.StringPtrInput `pulumi:"itemId"`
	// ID of the backup policy with which this item is backed up.
	PolicyId pulumi.StringPtrInput `pulumi:"policyId"`
	// backup protectionIntent type.
	// Expected value is 'AzureResourceItem'.
	ProtectionIntentItemType pulumi.StringPtrInput `pulumi:"protectionIntentItemType"`
	// Backup state of this backup item.
	ProtectionState pulumi.StringPtrInput `pulumi:"protectionState"`
	// ARM ID of the resource to be backed up.
	SourceResourceId pulumi.StringPtrInput `pulumi:"sourceResourceId"`
}

func (AzureResourceProtectionIntentResponseArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*AzureResourceProtectionIntentResponse)(nil)).Elem()
}

func (i AzureResourceProtectionIntentResponseArgs) ToAzureResourceProtectionIntentResponseOutput() AzureResourceProtectionIntentResponseOutput {
	return i.ToAzureResourceProtectionIntentResponseOutputWithContext(context.Background())
}

func (i AzureResourceProtectionIntentResponseArgs) ToAzureResourceProtectionIntentResponseOutputWithContext(ctx context.Context) AzureResourceProtectionIntentResponseOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AzureResourceProtectionIntentResponseOutput)
}

// IaaS VM specific backup protection intent item.
type AzureResourceProtectionIntentResponseOutput struct{ *pulumi.OutputState }

func (AzureResourceProtectionIntentResponseOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*AzureResourceProtectionIntentResponse)(nil)).Elem()
}

func (o AzureResourceProtectionIntentResponseOutput) ToAzureResourceProtectionIntentResponseOutput() AzureResourceProtectionIntentResponseOutput {
	return o
}

func (o AzureResourceProtectionIntentResponseOutput) ToAzureResourceProtectionIntentResponseOutputWithContext(ctx context.Context) AzureResourceProtectionIntentResponseOutput {
	return o
}

// Type of backup management for the backed up item.
func (o AzureResourceProtectionIntentResponseOutput) BackupManagementType() pulumi.StringPtrOutput {
	return o.ApplyT(func(v AzureResourceProtectionIntentResponse) *string { return v.BackupManagementType }).(pulumi.StringPtrOutput)
}

// Friendly name of the VM represented by this backup item.
func (o AzureResourceProtectionIntentResponseOutput) FriendlyName() pulumi.StringPtrOutput {
	return o.ApplyT(func(v AzureResourceProtectionIntentResponse) *string { return v.FriendlyName }).(pulumi.StringPtrOutput)
}

// ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
func (o AzureResourceProtectionIntentResponseOutput) ItemId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v AzureResourceProtectionIntentResponse) *string { return v.ItemId }).(pulumi.StringPtrOutput)
}

// ID of the backup policy with which this item is backed up.
func (o AzureResourceProtectionIntentResponseOutput) PolicyId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v AzureResourceProtectionIntentResponse) *string { return v.PolicyId }).(pulumi.StringPtrOutput)
}

// backup protectionIntent type.
// Expected value is 'AzureResourceItem'.
func (o AzureResourceProtectionIntentResponseOutput) ProtectionIntentItemType() pulumi.StringPtrOutput {
	return o.ApplyT(func(v AzureResourceProtectionIntentResponse) *string { return v.ProtectionIntentItemType }).(pulumi.StringPtrOutput)
}

// Backup state of this backup item.
func (o AzureResourceProtectionIntentResponseOutput) ProtectionState() pulumi.StringPtrOutput {
	return o.ApplyT(func(v AzureResourceProtectionIntentResponse) *string { return v.ProtectionState }).(pulumi.StringPtrOutput)
}

// ARM ID of the resource to be backed up.
func (o AzureResourceProtectionIntentResponseOutput) SourceResourceId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v AzureResourceProtectionIntentResponse) *string { return v.SourceResourceId }).(pulumi.StringPtrOutput)
}

func init() {
	pulumi.RegisterOutputType(AzureRecoveryServiceVaultProtectionIntentOutput{})
	pulumi.RegisterOutputType(AzureRecoveryServiceVaultProtectionIntentResponseOutput{})
	pulumi.RegisterOutputType(AzureResourceProtectionIntentOutput{})
	pulumi.RegisterOutputType(AzureResourceProtectionIntentResponseOutput{})
}
