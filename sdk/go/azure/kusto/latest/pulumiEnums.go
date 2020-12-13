// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// SKU name.
type AzureSkuName pulumi.String

const (
	AzureSkuName_Standard_DS13_v2_1TB_PS    = AzureSkuName("Standard_DS13_v2+1TB_PS")
	AzureSkuName_Standard_DS13_v2_2TB_PS    = AzureSkuName("Standard_DS13_v2+2TB_PS")
	AzureSkuName_Standard_DS14_v2_3TB_PS    = AzureSkuName("Standard_DS14_v2+3TB_PS")
	AzureSkuName_Standard_DS14_v2_4TB_PS    = AzureSkuName("Standard_DS14_v2+4TB_PS")
	AzureSkuName_Standard_D13_v2            = AzureSkuName("Standard_D13_v2")
	AzureSkuName_Standard_D14_v2            = AzureSkuName("Standard_D14_v2")
	AzureSkuName_Standard_L8s               = AzureSkuName("Standard_L8s")
	AzureSkuName_Standard_L16s              = AzureSkuName("Standard_L16s")
	AzureSkuName_Standard_D11_v2            = AzureSkuName("Standard_D11_v2")
	AzureSkuName_Standard_D12_v2            = AzureSkuName("Standard_D12_v2")
	AzureSkuName_Standard_L4s               = AzureSkuName("Standard_L4s")
	AzureSkuName_Dev_No_SLA_Standard_D11_v2 = AzureSkuName("Dev(No SLA)_Standard_D11_v2")
	AzureSkuName_Standard_E64i_v3           = AzureSkuName("Standard_E64i_v3")
	AzureSkuName_Standard_E2a_v4            = AzureSkuName("Standard_E2a_v4")
	AzureSkuName_Standard_E4a_v4            = AzureSkuName("Standard_E4a_v4")
	AzureSkuName_Standard_E8a_v4            = AzureSkuName("Standard_E8a_v4")
	AzureSkuName_Standard_E16a_v4           = AzureSkuName("Standard_E16a_v4")
	AzureSkuName_Standard_E8as_v4_1TB_PS    = AzureSkuName("Standard_E8as_v4+1TB_PS")
	AzureSkuName_Standard_E8as_v4_2TB_PS    = AzureSkuName("Standard_E8as_v4+2TB_PS")
	AzureSkuName_Standard_E16as_v4_3TB_PS   = AzureSkuName("Standard_E16as_v4+3TB_PS")
	AzureSkuName_Standard_E16as_v4_4TB_PS   = AzureSkuName("Standard_E16as_v4+4TB_PS")
	AzureSkuName_Dev_No_SLA_Standard_E2a_v4 = AzureSkuName("Dev(No SLA)_Standard_E2a_v4")
)

func (AzureSkuName) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e AzureSkuName) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e AzureSkuName) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e AzureSkuName) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e AzureSkuName) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// SKU tier.
type AzureSkuTier pulumi.String

const (
	AzureSkuTierBasic    = AzureSkuTier("Basic")
	AzureSkuTierStandard = AzureSkuTier("Standard")
)

func (AzureSkuTier) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e AzureSkuTier) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e AzureSkuTier) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e AzureSkuTier) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e AzureSkuTier) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Cluster principal role.
type ClusterPrincipalRole pulumi.String

const (
	ClusterPrincipalRoleAllDatabasesAdmin  = ClusterPrincipalRole("AllDatabasesAdmin")
	ClusterPrincipalRoleAllDatabasesViewer = ClusterPrincipalRole("AllDatabasesViewer")
)

func (ClusterPrincipalRole) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ClusterPrincipalRole) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ClusterPrincipalRole) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ClusterPrincipalRole) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ClusterPrincipalRole) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Kind of the endpoint for the data connection
type DataConnectionKind pulumi.String

const (
	DataConnectionKindEventHub  = DataConnectionKind("EventHub")
	DataConnectionKindEventGrid = DataConnectionKind("EventGrid")
	DataConnectionKindIotHub    = DataConnectionKind("IotHub")
)

func (DataConnectionKind) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e DataConnectionKind) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e DataConnectionKind) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e DataConnectionKind) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e DataConnectionKind) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Database principal role.
type DatabasePrincipalRole pulumi.String

const (
	DatabasePrincipalRoleAdmin               = DatabasePrincipalRole("Admin")
	DatabasePrincipalRoleIngestor            = DatabasePrincipalRole("Ingestor")
	DatabasePrincipalRoleMonitor             = DatabasePrincipalRole("Monitor")
	DatabasePrincipalRoleUser                = DatabasePrincipalRole("User")
	DatabasePrincipalRoleUnrestrictedViewers = DatabasePrincipalRole("UnrestrictedViewers")
	DatabasePrincipalRoleViewer              = DatabasePrincipalRole("Viewer")
)

func (DatabasePrincipalRole) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e DatabasePrincipalRole) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e DatabasePrincipalRole) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e DatabasePrincipalRole) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e DatabasePrincipalRole) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The default principals modification kind
type DefaultPrincipalsModificationKind pulumi.String

const (
	DefaultPrincipalsModificationKindUnion   = DefaultPrincipalsModificationKind("Union")
	DefaultPrincipalsModificationKindReplace = DefaultPrincipalsModificationKind("Replace")
	DefaultPrincipalsModificationKindNone    = DefaultPrincipalsModificationKind("None")
)

func (DefaultPrincipalsModificationKind) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e DefaultPrincipalsModificationKind) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e DefaultPrincipalsModificationKind) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e DefaultPrincipalsModificationKind) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e DefaultPrincipalsModificationKind) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The engine type
type EngineType pulumi.String

const (
	EngineTypeV2 = EngineType("V2")
	EngineTypeV3 = EngineType("V3")
)

func (EngineType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e EngineType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e EngineType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e EngineType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e EngineType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove all identities.
type IdentityType pulumi.String

const (
	IdentityTypeNone                         = IdentityType("None")
	IdentityTypeSystemAssigned               = IdentityType("SystemAssigned")
	IdentityTypeUserAssigned                 = IdentityType("UserAssigned")
	IdentityType_SystemAssigned_UserAssigned = IdentityType("SystemAssigned, UserAssigned")
)

func (IdentityType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e IdentityType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e IdentityType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e IdentityType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e IdentityType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Kind of the database
type Kind pulumi.String

const (
	KindReadWrite         = Kind("ReadWrite")
	KindReadOnlyFollowing = Kind("ReadOnlyFollowing")
)

func (Kind) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e Kind) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e Kind) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e Kind) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e Kind) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Principal type.
type PrincipalType pulumi.String

const (
	PrincipalTypeApp   = PrincipalType("App")
	PrincipalTypeGroup = PrincipalType("Group")
	PrincipalTypeUser  = PrincipalType("User")
)

func (PrincipalType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e PrincipalType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e PrincipalType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e PrincipalType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e PrincipalType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}
