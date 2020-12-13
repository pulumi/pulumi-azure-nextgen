// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***


export const AccumulatedType = {
    True: "true",
    False: "false",
} as const;

/**
 * Show costs accumulated over time.
 */
export type AccumulatedType = (typeof AccumulatedType)[keyof typeof AccumulatedType];

export const ChartType = {
    Area: "Area",
    Line: "Line",
    StackedColumn: "StackedColumn",
    GroupedColumn: "GroupedColumn",
    Table: "Table",
} as const;

/**
 * Chart type of the main view in Cost Analysis. Required.
 */
export type ChartType = (typeof ChartType)[keyof typeof ChartType];

export const ExportType = {
    Usage: "Usage",
    ActualCost: "ActualCost",
    AmortizedCost: "AmortizedCost",
} as const;

/**
 * The type of the query.
 */
export type ExportType = (typeof ExportType)[keyof typeof ExportType];

export const FormatType = {
    Csv: "Csv",
} as const;

/**
 * The format of the export being delivered.
 */
export type FormatType = (typeof FormatType)[keyof typeof FormatType];

export const FunctionType = {
    Sum: "Sum",
} as const;

/**
 * The name of the aggregation function to use.
 */
export type FunctionType = (typeof FunctionType)[keyof typeof FunctionType];

export const GranularityType = {
    Daily: "Daily",
} as const;

/**
 * The granularity of rows in the query.
 */
export type GranularityType = (typeof GranularityType)[keyof typeof GranularityType];

export const KpiTypeType = {
    Forecast: "Forecast",
    Budget: "Budget",
} as const;

/**
 * KPI type (Forecast, Budget).
 */
export type KpiTypeType = (typeof KpiTypeType)[keyof typeof KpiTypeType];

export const MetricType = {
    ActualCost: "ActualCost",
    AmortizedCost: "AmortizedCost",
    AHUB: "AHUB",
} as const;

/**
 * Metric to use when displaying costs.
 */
export type MetricType = (typeof MetricType)[keyof typeof MetricType];

export const OperatorType = {
    In: "In",
    Contains: "Contains",
} as const;

/**
 * The operator to use for comparison.
 */
export type OperatorType = (typeof OperatorType)[keyof typeof OperatorType];

export const PivotTypeType = {
    Dimension: "Dimension",
    TagKey: "TagKey",
} as const;

/**
 * Data type to show in view.
 */
export type PivotTypeType = (typeof PivotTypeType)[keyof typeof PivotTypeType];

export const QueryColumnType = {
    Tag: "Tag",
    Dimension: "Dimension",
} as const;

/**
 * Has type of the column to group.
 */
export type QueryColumnType = (typeof QueryColumnType)[keyof typeof QueryColumnType];

export const RecurrenceType = {
    Daily: "Daily",
    Weekly: "Weekly",
    Monthly: "Monthly",
    Annually: "Annually",
} as const;

/**
 * The schedule recurrence.
 */
export type RecurrenceType = (typeof RecurrenceType)[keyof typeof RecurrenceType];

export const ReportConfigColumnType = {
    Tag: "Tag",
    Dimension: "Dimension",
} as const;

/**
 * Has type of the column to group.
 */
export type ReportConfigColumnType = (typeof ReportConfigColumnType)[keyof typeof ReportConfigColumnType];

export const ReportGranularityType = {
    Daily: "Daily",
    Monthly: "Monthly",
} as const;

/**
 * The granularity of rows in the report.
 */
export type ReportGranularityType = (typeof ReportGranularityType)[keyof typeof ReportGranularityType];

export const ReportTimeframeType = {
    WeekToDate: "WeekToDate",
    MonthToDate: "MonthToDate",
    YearToDate: "YearToDate",
    Custom: "Custom",
} as const;

/**
 * The time frame for pulling data for the report. If custom, then a specific time period must be provided.
 */
export type ReportTimeframeType = (typeof ReportTimeframeType)[keyof typeof ReportTimeframeType];

export const ReportType = {
    Usage: "Usage",
} as const;

/**
 * The type of the report. Usage represents actual usage, forecast represents forecasted data and UsageAndForecast represents both usage and forecasted data. Actual usage and forecasted data can be differentiated based on dates.
 */
export type ReportType = (typeof ReportType)[keyof typeof ReportType];

export const StatusType = {
    Active: "Active",
    Inactive: "Inactive",
} as const;

/**
 * The status of the schedule. Whether active or not. If inactive, the export's scheduled execution is paused.
 */
export type StatusType = (typeof StatusType)[keyof typeof StatusType];

export const TimeframeType = {
    MonthToDate: "MonthToDate",
    BillingMonthToDate: "BillingMonthToDate",
    TheLastMonth: "TheLastMonth",
    TheLastBillingMonth: "TheLastBillingMonth",
    WeekToDate: "WeekToDate",
    Custom: "Custom",
} as const;

/**
 * The time frame for pulling data for the query. If custom, then a specific time period must be provided.
 */
export type TimeframeType = (typeof TimeframeType)[keyof typeof TimeframeType];
