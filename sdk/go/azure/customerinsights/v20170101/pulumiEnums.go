// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170101

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The calculation window.
type CalculationWindowTypes pulumi.String

const (
	CalculationWindowTypesLifetime = CalculationWindowTypes("Lifetime")
	CalculationWindowTypesHour     = CalculationWindowTypes("Hour")
	CalculationWindowTypesDay      = CalculationWindowTypes("Day")
	CalculationWindowTypesWeek     = CalculationWindowTypes("Week")
	CalculationWindowTypesMonth    = CalculationWindowTypes("Month")
)

func (CalculationWindowTypes) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e CalculationWindowTypes) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e CalculationWindowTypes) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e CalculationWindowTypes) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e CalculationWindowTypes) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The Relationship Cardinality.
type CardinalityTypes pulumi.String

const (
	CardinalityTypesOneToOne   = CardinalityTypes("OneToOne")
	CardinalityTypesOneToMany  = CardinalityTypes("OneToMany")
	CardinalityTypesManyToMany = CardinalityTypes("ManyToMany")
)

func (CardinalityTypes) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e CardinalityTypes) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e CardinalityTypes) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e CardinalityTypes) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e CardinalityTypes) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The type of completion operation.
type CompletionOperationTypes pulumi.String

const (
	CompletionOperationTypesDoNothing  = CompletionOperationTypes("DoNothing")
	CompletionOperationTypesDeleteFile = CompletionOperationTypes("DeleteFile")
	CompletionOperationTypesMoveFile   = CompletionOperationTypes("MoveFile")
)

func (CompletionOperationTypes) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e CompletionOperationTypes) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e CompletionOperationTypes) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e CompletionOperationTypes) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e CompletionOperationTypes) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Type of connector.
type ConnectorTypes pulumi.String

const (
	ConnectorTypesNone           = ConnectorTypes("None")
	ConnectorTypesCRM            = ConnectorTypes("CRM")
	ConnectorTypesAzureBlob      = ConnectorTypes("AzureBlob")
	ConnectorTypesSalesforce     = ConnectorTypes("Salesforce")
	ConnectorTypesExchangeOnline = ConnectorTypes("ExchangeOnline")
	ConnectorTypesOutbound       = ConnectorTypes("Outbound")
)

func (ConnectorTypes) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ConnectorTypes) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ConnectorTypes) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ConnectorTypes) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ConnectorTypes) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Type of entity.
type EntityTypes pulumi.String

const (
	EntityTypesNone         = EntityTypes("None")
	EntityTypesProfile      = EntityTypes("Profile")
	EntityTypesInteraction  = EntityTypes("Interaction")
	EntityTypesRelationship = EntityTypes("Relationship")
)

func (EntityTypes) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e EntityTypes) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e EntityTypes) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e EntityTypes) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e EntityTypes) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The type of error management to use for the mapping.
type ErrorManagementTypes pulumi.String

const (
	ErrorManagementTypesRejectAndContinue = ErrorManagementTypes("RejectAndContinue")
	ErrorManagementTypesStopImport        = ErrorManagementTypes("StopImport")
	ErrorManagementTypesRejectUntilLimit  = ErrorManagementTypes("RejectUntilLimit")
)

func (ErrorManagementTypes) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ErrorManagementTypes) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ErrorManagementTypes) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ErrorManagementTypes) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ErrorManagementTypes) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The type mapping format.
type FormatTypes pulumi.String

const (
	FormatTypesTextFormat = FormatTypes("TextFormat")
)

func (FormatTypes) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e FormatTypes) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e FormatTypes) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e FormatTypes) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e FormatTypes) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The frequency to update.
type FrequencyTypes pulumi.String

const (
	FrequencyTypesMinute = FrequencyTypes("Minute")
	FrequencyTypesHour   = FrequencyTypes("Hour")
	FrequencyTypesDay    = FrequencyTypes("Day")
	FrequencyTypesWeek   = FrequencyTypes("Week")
	FrequencyTypesMonth  = FrequencyTypes("Month")
)

func (FrequencyTypes) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e FrequencyTypes) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e FrequencyTypes) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e FrequencyTypes) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e FrequencyTypes) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Determines whether this link is supposed to create or delete instances if Link is NOT Reference Only.
type InstanceOperationType pulumi.String

const (
	InstanceOperationTypeUpsert = InstanceOperationType("Upsert")
	InstanceOperationTypeDelete = InstanceOperationType("Delete")
)

func (InstanceOperationType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e InstanceOperationType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e InstanceOperationType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e InstanceOperationType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e InstanceOperationType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The computation function for the KPI.
type KpiFunctions pulumi.String

const (
	KpiFunctionsSum           = KpiFunctions("Sum")
	KpiFunctionsAvg           = KpiFunctions("Avg")
	KpiFunctionsMin           = KpiFunctions("Min")
	KpiFunctionsMax           = KpiFunctions("Max")
	KpiFunctionsLast          = KpiFunctions("Last")
	KpiFunctionsCount         = KpiFunctions("Count")
	KpiFunctionsNone          = KpiFunctions("None")
	KpiFunctionsCountDistinct = KpiFunctions("CountDistinct")
)

func (KpiFunctions) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e KpiFunctions) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e KpiFunctions) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e KpiFunctions) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e KpiFunctions) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Link type.
type LinkTypes pulumi.String

const (
	LinkTypesUpdateAlways = LinkTypes("UpdateAlways")
	LinkTypesCopyIfNull   = LinkTypes("CopyIfNull")
)

func (LinkTypes) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e LinkTypes) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e LinkTypes) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e LinkTypes) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e LinkTypes) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Type of roles.
type RoleTypes pulumi.String

const (
	RoleTypesAdmin        = RoleTypes("Admin")
	RoleTypesReader       = RoleTypes("Reader")
	RoleTypesManageAdmin  = RoleTypes("ManageAdmin")
	RoleTypesManageReader = RoleTypes("ManageReader")
	RoleTypesDataAdmin    = RoleTypes("DataAdmin")
	RoleTypesDataReader   = RoleTypes("DataReader")
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