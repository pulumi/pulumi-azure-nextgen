// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// the criteria time aggregation types.
type AggregationTypeEnum pulumi.String

const (
	AggregationTypeEnumAverage = AggregationTypeEnum("Average")
	AggregationTypeEnumCount   = AggregationTypeEnum("Count")
	AggregationTypeEnumMinimum = AggregationTypeEnum("Minimum")
	AggregationTypeEnumMaximum = AggregationTypeEnum("Maximum")
	AggregationTypeEnumTotal   = AggregationTypeEnum("Total")
)

func (AggregationTypeEnum) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e AggregationTypeEnum) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e AggregationTypeEnum) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e AggregationTypeEnum) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e AggregationTypeEnum) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Severity of the alert
type AlertSeverity pulumi.String

const (
	AlertSeverityZero  = AlertSeverity("0")
	AlertSeverityOne   = AlertSeverity("1")
	AlertSeverityTwo   = AlertSeverity("2")
	AlertSeverityThree = AlertSeverity("3")
	AlertSeverityFour  = AlertSeverity("4")
)

func (AlertSeverity) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e AlertSeverity) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e AlertSeverity) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e AlertSeverity) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e AlertSeverity) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Type of application being monitored.
type ApplicationType pulumi.String

const (
	ApplicationTypeWeb   = ApplicationType("web")
	ApplicationTypeOther = ApplicationType("other")
)

func (ApplicationType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ApplicationType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ApplicationType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ApplicationType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ApplicationType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// the operator that is used to compare the metric data and the threshold.
type ComparisonOperationType pulumi.String

const (
	ComparisonOperationTypeEquals             = ComparisonOperationType("Equals")
	ComparisonOperationTypeNotEquals          = ComparisonOperationType("NotEquals")
	ComparisonOperationTypeGreaterThan        = ComparisonOperationType("GreaterThan")
	ComparisonOperationTypeGreaterThanOrEqual = ComparisonOperationType("GreaterThanOrEqual")
	ComparisonOperationTypeLessThan           = ComparisonOperationType("LessThan")
	ComparisonOperationTypeLessThanOrEqual    = ComparisonOperationType("LessThanOrEqual")
)

func (ComparisonOperationType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ComparisonOperationType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ComparisonOperationType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ComparisonOperationType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ComparisonOperationType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// the operator used to compare the data and the threshold.
type ConditionOperator pulumi.String

const (
	ConditionOperatorGreaterThan        = ConditionOperator("GreaterThan")
	ConditionOperatorGreaterThanOrEqual = ConditionOperator("GreaterThanOrEqual")
	ConditionOperatorLessThan           = ConditionOperator("LessThan")
	ConditionOperatorLessThanOrEqual    = ConditionOperator("LessThanOrEqual")
)

func (ConditionOperator) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ConditionOperator) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ConditionOperator) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ConditionOperator) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ConditionOperator) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Evaluation operation for rule - 'GreaterThan' or 'LessThan.
type ConditionalOperator pulumi.String

const (
	ConditionalOperatorGreaterThanOrEqual = ConditionalOperator("GreaterThanOrEqual")
	ConditionalOperatorLessThanOrEqual    = ConditionalOperator("LessThanOrEqual")
	ConditionalOperatorGreaterThan        = ConditionalOperator("GreaterThan")
	ConditionalOperatorLessThan           = ConditionalOperator("LessThan")
	ConditionalOperatorEqual              = ConditionalOperator("Equal")
)

func (ConditionalOperator) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ConditionalOperator) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ConditionalOperator) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ConditionalOperator) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ConditionalOperator) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Specifies the type of threshold criteria
type CriterionType pulumi.String

const (
	CriterionTypeStaticThresholdCriterion  = CriterionType("StaticThresholdCriterion")
	CriterionTypeDynamicThresholdCriterion = CriterionType("DynamicThresholdCriterion")
)

func (CriterionType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e CriterionType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e CriterionType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e CriterionType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e CriterionType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The operator used to compare the metric value against the threshold.
type DynamicThresholdOperator pulumi.String

const (
	DynamicThresholdOperatorGreaterThan       = DynamicThresholdOperator("GreaterThan")
	DynamicThresholdOperatorLessThan          = DynamicThresholdOperator("LessThan")
	DynamicThresholdOperatorGreaterOrLessThan = DynamicThresholdOperator("GreaterOrLessThan")
)

func (DynamicThresholdOperator) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e DynamicThresholdOperator) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e DynamicThresholdOperator) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e DynamicThresholdOperator) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e DynamicThresholdOperator) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The extent of deviation required to trigger an alert. This will affect how tight the threshold is to the metric series pattern.
type DynamicThresholdSensitivity pulumi.String

const (
	DynamicThresholdSensitivityLow    = DynamicThresholdSensitivity("Low")
	DynamicThresholdSensitivityMedium = DynamicThresholdSensitivity("Medium")
	DynamicThresholdSensitivityHigh   = DynamicThresholdSensitivity("High")
)

func (DynamicThresholdSensitivity) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e DynamicThresholdSensitivity) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e DynamicThresholdSensitivity) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e DynamicThresholdSensitivity) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e DynamicThresholdSensitivity) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The flag which indicates whether the Log Search rule is enabled. Value should be true or false
type Enabled pulumi.String

const (
	EnabledTrue  = Enabled("true")
	EnabledFalse = Enabled("false")
)

func (Enabled) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e Enabled) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e Enabled) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e Enabled) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e Enabled) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Enum indicating if this favorite definition is owned by a specific user or is shared between all users with access to the Application Insights component.
type FavoriteType pulumi.String

const (
	FavoriteTypeShared = FavoriteType("shared")
	FavoriteTypeUser   = FavoriteType("user")
)

func (FavoriteType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e FavoriteType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e FavoriteType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e FavoriteType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e FavoriteType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Used by the Application Insights system to determine what kind of flow this component was created by. This is to be set to 'Bluefield' when creating/updating a component via the REST API.
type FlowType pulumi.String

const (
	FlowTypeBluefield = FlowType("Bluefield")
)

func (FlowType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e FlowType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e FlowType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e FlowType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e FlowType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Indicates the flow of the ingestion.
type IngestionMode pulumi.String

const (
	IngestionModeApplicationInsights                       = IngestionMode("ApplicationInsights")
	IngestionModeApplicationInsightsWithDiagnosticSettings = IngestionMode("ApplicationInsightsWithDiagnosticSettings")
	IngestionModeLogAnalytics                              = IngestionMode("LogAnalytics")
)

func (IngestionMode) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e IngestionMode) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e IngestionMode) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e IngestionMode) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e IngestionMode) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Enum indicating if this item definition is owned by a specific user or is shared between all users with access to the Application Insights component.
type ItemScope pulumi.String

const (
	ItemScopeShared = ItemScope("shared")
	ItemScopeUser   = ItemScope("user")
)

func (ItemScope) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ItemScope) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ItemScope) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ItemScope) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ItemScope) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Enum indicating the type of the Analytics item.
type ItemType pulumi.String

const (
	ItemTypeQuery    = ItemType("query")
	ItemTypeFunction = ItemType("function")
	ItemTypeFolder   = ItemType("folder")
	ItemTypeRecent   = ItemType("recent")
)

func (ItemType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ItemType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ItemType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ItemType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ItemType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The kind of workbook. Choices are user and shared.
type Kind pulumi.String

const (
	KindUser   = Kind("user")
	KindShared = Kind("shared")
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

// the metric statistic type. How the metrics from multiple instances are combined.
type MetricStatisticType pulumi.String

const (
	MetricStatisticTypeAverage = MetricStatisticType("Average")
	MetricStatisticTypeMin     = MetricStatisticType("Min")
	MetricStatisticTypeMax     = MetricStatisticType("Max")
	MetricStatisticTypeSum     = MetricStatisticType("Sum")
)

func (MetricStatisticType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e MetricStatisticType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e MetricStatisticType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e MetricStatisticType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e MetricStatisticType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Metric Trigger Type - 'Consecutive' or 'Total'
type MetricTriggerType pulumi.String

const (
	MetricTriggerTypeConsecutive = MetricTriggerType("Consecutive")
	MetricTriggerTypeTotal       = MetricTriggerType("Total")
)

func (MetricTriggerType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e MetricTriggerType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e MetricTriggerType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e MetricTriggerType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e MetricTriggerType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// specifies the type of the alert criteria.
type Odatatype pulumi.String

const (
	Odatatype_Microsoft_Azure_Monitor_SingleResourceMultipleMetricCriteria   = Odatatype("Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria")
	Odatatype_Microsoft_Azure_Monitor_MultipleResourceMultipleMetricCriteria = Odatatype("Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria")
	Odatatype_Microsoft_Azure_Monitor_WebtestLocationAvailabilityCriteria    = Odatatype("Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria")
)

func (Odatatype) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e Odatatype) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e Odatatype) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e Odatatype) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e Odatatype) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// the operation associated with the notification and its value must be "scale"
type OperationType pulumi.String

const (
	OperationTypeScale = OperationType("Scale")
)

func (OperationType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e OperationType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e OperationType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e OperationType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e OperationType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Operator for dimension values
type Operator pulumi.String

const (
	OperatorInclude = Operator("Include")
)

func (Operator) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e Operator) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e Operator) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e Operator) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e Operator) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Set value to 'ResultCount' .
type QueryType pulumi.String

const (
	QueryTypeResultCount = QueryType("ResultCount")
)

func (QueryType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e QueryType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e QueryType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e QueryType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e QueryType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// the recurrence frequency. How often the schedule profile should take effect. This value must be Week, meaning each week will have the same set of profiles. For example, to set a daily schedule, set **schedule** to every day of the week. The frequency property specifies that the schedule is repeated weekly.
type RecurrenceFrequency pulumi.String

const (
	RecurrenceFrequencyNone   = RecurrenceFrequency("None")
	RecurrenceFrequencySecond = RecurrenceFrequency("Second")
	RecurrenceFrequencyMinute = RecurrenceFrequency("Minute")
	RecurrenceFrequencyHour   = RecurrenceFrequency("Hour")
	RecurrenceFrequencyDay    = RecurrenceFrequency("Day")
	RecurrenceFrequencyWeek   = RecurrenceFrequency("Week")
	RecurrenceFrequencyMonth  = RecurrenceFrequency("Month")
	RecurrenceFrequencyYear   = RecurrenceFrequency("Year")
)

func (RecurrenceFrequency) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e RecurrenceFrequency) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e RecurrenceFrequency) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e RecurrenceFrequency) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e RecurrenceFrequency) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Describes what tool created this Application Insights component. Customers using this API should set this to the default 'rest'.
type RequestSource pulumi.String

const (
	RequestSourceRest = RequestSource("rest")
)

func (RequestSource) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e RequestSource) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e RequestSource) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e RequestSource) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e RequestSource) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// the scale direction. Whether the scaling action increases or decreases the number of instances.
type ScaleDirection pulumi.String

const (
	ScaleDirectionNone     = ScaleDirection("None")
	ScaleDirectionIncrease = ScaleDirection("Increase")
	ScaleDirectionDecrease = ScaleDirection("Decrease")
)

func (ScaleDirection) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ScaleDirection) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ScaleDirection) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ScaleDirection) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ScaleDirection) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// the dimension operator. Only 'Equals' and 'NotEquals' are supported. 'Equals' being equal to any of the values. 'NotEquals' being not equal to all of the values
type ScaleRuleMetricDimensionOperationType pulumi.String

const (
	ScaleRuleMetricDimensionOperationTypeEquals    = ScaleRuleMetricDimensionOperationType("Equals")
	ScaleRuleMetricDimensionOperationTypeNotEquals = ScaleRuleMetricDimensionOperationType("NotEquals")
)

func (ScaleRuleMetricDimensionOperationType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ScaleRuleMetricDimensionOperationType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ScaleRuleMetricDimensionOperationType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ScaleRuleMetricDimensionOperationType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ScaleRuleMetricDimensionOperationType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// the type of action that should occur when the scale rule fires.
type ScaleType pulumi.String

const (
	ScaleTypeChangeCount        = ScaleType("ChangeCount")
	ScaleTypePercentChangeCount = ScaleType("PercentChangeCount")
	ScaleTypeExactCount         = ScaleType("ExactCount")
)

func (ScaleType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ScaleType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ScaleType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ScaleType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ScaleType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// the time aggregation operator. How the data that are collected should be combined over time. The default value is the PrimaryAggregationType of the Metric.
type TimeAggregationOperator pulumi.String

const (
	TimeAggregationOperatorAverage = TimeAggregationOperator("Average")
	TimeAggregationOperatorMinimum = TimeAggregationOperator("Minimum")
	TimeAggregationOperatorMaximum = TimeAggregationOperator("Maximum")
	TimeAggregationOperatorTotal   = TimeAggregationOperator("Total")
	TimeAggregationOperatorLast    = TimeAggregationOperator("Last")
)

func (TimeAggregationOperator) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e TimeAggregationOperator) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e TimeAggregationOperator) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e TimeAggregationOperator) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e TimeAggregationOperator) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// time aggregation type. How the data that is collected should be combined over time. The default value is Average.
type TimeAggregationType pulumi.String

const (
	TimeAggregationTypeAverage = TimeAggregationType("Average")
	TimeAggregationTypeMinimum = TimeAggregationType("Minimum")
	TimeAggregationTypeMaximum = TimeAggregationType("Maximum")
	TimeAggregationTypeTotal   = TimeAggregationType("Total")
	TimeAggregationTypeCount   = TimeAggregationType("Count")
	TimeAggregationTypeLast    = TimeAggregationType("Last")
)

func (TimeAggregationType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e TimeAggregationType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e TimeAggregationType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e TimeAggregationType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e TimeAggregationType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// The kind of web test this is, valid choices are ping and multistep.
type WebTestKind pulumi.String

const (
	WebTestKindPing      = WebTestKind("ping")
	WebTestKindMultistep = WebTestKind("multistep")
)

func (WebTestKind) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e WebTestKind) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e WebTestKind) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e WebTestKind) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e WebTestKind) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}
