// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.CostManagement.V20200601
{
    /// <summary>
    /// Show costs accumulated over time.
    /// </summary>
    [EnumType]
    public readonly struct AccumulatedType : IEquatable<AccumulatedType>
    {
        private readonly string _value;

        private AccumulatedType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static AccumulatedType @True { get; } = new AccumulatedType("true");
        public static AccumulatedType @False { get; } = new AccumulatedType("false");

        public static bool operator ==(AccumulatedType left, AccumulatedType right) => left.Equals(right);
        public static bool operator !=(AccumulatedType left, AccumulatedType right) => !left.Equals(right);

        public static explicit operator string(AccumulatedType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is AccumulatedType other && Equals(other);
        public bool Equals(AccumulatedType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Chart type of the main view in Cost Analysis. Required.
    /// </summary>
    [EnumType]
    public readonly struct ChartType : IEquatable<ChartType>
    {
        private readonly string _value;

        private ChartType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ChartType Area { get; } = new ChartType("Area");
        public static ChartType Line { get; } = new ChartType("Line");
        public static ChartType StackedColumn { get; } = new ChartType("StackedColumn");
        public static ChartType GroupedColumn { get; } = new ChartType("GroupedColumn");
        public static ChartType Table { get; } = new ChartType("Table");

        public static bool operator ==(ChartType left, ChartType right) => left.Equals(right);
        public static bool operator !=(ChartType left, ChartType right) => !left.Equals(right);

        public static explicit operator string(ChartType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ChartType other && Equals(other);
        public bool Equals(ChartType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The type of the export. Note that 'Usage' is equivalent to 'ActualCost' and is applicable to exports that do not yet provide data for charges or amortization for service reservations.
    /// </summary>
    [EnumType]
    public readonly struct ExportType : IEquatable<ExportType>
    {
        private readonly string _value;

        private ExportType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ExportType Usage { get; } = new ExportType("Usage");
        public static ExportType ActualCost { get; } = new ExportType("ActualCost");
        public static ExportType AmortizedCost { get; } = new ExportType("AmortizedCost");

        public static bool operator ==(ExportType left, ExportType right) => left.Equals(right);
        public static bool operator !=(ExportType left, ExportType right) => !left.Equals(right);

        public static explicit operator string(ExportType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ExportType other && Equals(other);
        public bool Equals(ExportType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The format of the export being delivered. Currently only 'Csv' is supported.
    /// </summary>
    [EnumType]
    public readonly struct FormatType : IEquatable<FormatType>
    {
        private readonly string _value;

        private FormatType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static FormatType Csv { get; } = new FormatType("Csv");

        public static bool operator ==(FormatType left, FormatType right) => left.Equals(right);
        public static bool operator !=(FormatType left, FormatType right) => !left.Equals(right);

        public static explicit operator string(FormatType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is FormatType other && Equals(other);
        public bool Equals(FormatType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The name of the aggregation function to use.
    /// </summary>
    [EnumType]
    public readonly struct FunctionType : IEquatable<FunctionType>
    {
        private readonly string _value;

        private FunctionType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static FunctionType Sum { get; } = new FunctionType("Sum");

        public static bool operator ==(FunctionType left, FunctionType right) => left.Equals(right);
        public static bool operator !=(FunctionType left, FunctionType right) => !left.Equals(right);

        public static explicit operator string(FunctionType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is FunctionType other && Equals(other);
        public bool Equals(FunctionType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The granularity of rows in the export. Currently only 'Daily' is supported.
    /// </summary>
    [EnumType]
    public readonly struct GranularityType : IEquatable<GranularityType>
    {
        private readonly string _value;

        private GranularityType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static GranularityType Daily { get; } = new GranularityType("Daily");

        public static bool operator ==(GranularityType left, GranularityType right) => left.Equals(right);
        public static bool operator !=(GranularityType left, GranularityType right) => !left.Equals(right);

        public static explicit operator string(GranularityType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is GranularityType other && Equals(other);
        public bool Equals(GranularityType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// KPI type (Forecast, Budget).
    /// </summary>
    [EnumType]
    public readonly struct KpiTypeType : IEquatable<KpiTypeType>
    {
        private readonly string _value;

        private KpiTypeType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static KpiTypeType Forecast { get; } = new KpiTypeType("Forecast");
        public static KpiTypeType Budget { get; } = new KpiTypeType("Budget");

        public static bool operator ==(KpiTypeType left, KpiTypeType right) => left.Equals(right);
        public static bool operator !=(KpiTypeType left, KpiTypeType right) => !left.Equals(right);

        public static explicit operator string(KpiTypeType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is KpiTypeType other && Equals(other);
        public bool Equals(KpiTypeType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Metric to use when displaying costs.
    /// </summary>
    [EnumType]
    public readonly struct MetricType : IEquatable<MetricType>
    {
        private readonly string _value;

        private MetricType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static MetricType ActualCost { get; } = new MetricType("ActualCost");
        public static MetricType AmortizedCost { get; } = new MetricType("AmortizedCost");
        public static MetricType AHUB { get; } = new MetricType("AHUB");

        public static bool operator ==(MetricType left, MetricType right) => left.Equals(right);
        public static bool operator !=(MetricType left, MetricType right) => !left.Equals(right);

        public static explicit operator string(MetricType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is MetricType other && Equals(other);
        public bool Equals(MetricType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The operator to use for comparison.
    /// </summary>
    [EnumType]
    public readonly struct OperatorType : IEquatable<OperatorType>
    {
        private readonly string _value;

        private OperatorType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static OperatorType In { get; } = new OperatorType("In");
        public static OperatorType Contains { get; } = new OperatorType("Contains");

        public static bool operator ==(OperatorType left, OperatorType right) => left.Equals(right);
        public static bool operator !=(OperatorType left, OperatorType right) => !left.Equals(right);

        public static explicit operator string(OperatorType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is OperatorType other && Equals(other);
        public bool Equals(OperatorType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Data type to show in view.
    /// </summary>
    [EnumType]
    public readonly struct PivotTypeType : IEquatable<PivotTypeType>
    {
        private readonly string _value;

        private PivotTypeType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static PivotTypeType Dimension { get; } = new PivotTypeType("Dimension");
        public static PivotTypeType TagKey { get; } = new PivotTypeType("TagKey");

        public static bool operator ==(PivotTypeType left, PivotTypeType right) => left.Equals(right);
        public static bool operator !=(PivotTypeType left, PivotTypeType right) => !left.Equals(right);

        public static explicit operator string(PivotTypeType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is PivotTypeType other && Equals(other);
        public bool Equals(PivotTypeType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The schedule recurrence.
    /// </summary>
    [EnumType]
    public readonly struct RecurrenceType : IEquatable<RecurrenceType>
    {
        private readonly string _value;

        private RecurrenceType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static RecurrenceType Daily { get; } = new RecurrenceType("Daily");
        public static RecurrenceType Weekly { get; } = new RecurrenceType("Weekly");
        public static RecurrenceType Monthly { get; } = new RecurrenceType("Monthly");
        public static RecurrenceType Annually { get; } = new RecurrenceType("Annually");

        public static bool operator ==(RecurrenceType left, RecurrenceType right) => left.Equals(right);
        public static bool operator !=(RecurrenceType left, RecurrenceType right) => !left.Equals(right);

        public static explicit operator string(RecurrenceType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is RecurrenceType other && Equals(other);
        public bool Equals(RecurrenceType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Has type of the column to group.
    /// </summary>
    [EnumType]
    public readonly struct ReportConfigColumnType : IEquatable<ReportConfigColumnType>
    {
        private readonly string _value;

        private ReportConfigColumnType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ReportConfigColumnType Tag { get; } = new ReportConfigColumnType("Tag");
        public static ReportConfigColumnType Dimension { get; } = new ReportConfigColumnType("Dimension");

        public static bool operator ==(ReportConfigColumnType left, ReportConfigColumnType right) => left.Equals(right);
        public static bool operator !=(ReportConfigColumnType left, ReportConfigColumnType right) => !left.Equals(right);

        public static explicit operator string(ReportConfigColumnType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ReportConfigColumnType other && Equals(other);
        public bool Equals(ReportConfigColumnType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The granularity of rows in the report.
    /// </summary>
    [EnumType]
    public readonly struct ReportGranularityType : IEquatable<ReportGranularityType>
    {
        private readonly string _value;

        private ReportGranularityType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ReportGranularityType Daily { get; } = new ReportGranularityType("Daily");
        public static ReportGranularityType Monthly { get; } = new ReportGranularityType("Monthly");

        public static bool operator ==(ReportGranularityType left, ReportGranularityType right) => left.Equals(right);
        public static bool operator !=(ReportGranularityType left, ReportGranularityType right) => !left.Equals(right);

        public static explicit operator string(ReportGranularityType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ReportGranularityType other && Equals(other);
        public bool Equals(ReportGranularityType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The time frame for pulling data for the report. If custom, then a specific time period must be provided.
    /// </summary>
    [EnumType]
    public readonly struct ReportTimeframeType : IEquatable<ReportTimeframeType>
    {
        private readonly string _value;

        private ReportTimeframeType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ReportTimeframeType WeekToDate { get; } = new ReportTimeframeType("WeekToDate");
        public static ReportTimeframeType MonthToDate { get; } = new ReportTimeframeType("MonthToDate");
        public static ReportTimeframeType YearToDate { get; } = new ReportTimeframeType("YearToDate");
        public static ReportTimeframeType Custom { get; } = new ReportTimeframeType("Custom");

        public static bool operator ==(ReportTimeframeType left, ReportTimeframeType right) => left.Equals(right);
        public static bool operator !=(ReportTimeframeType left, ReportTimeframeType right) => !left.Equals(right);

        public static explicit operator string(ReportTimeframeType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ReportTimeframeType other && Equals(other);
        public bool Equals(ReportTimeframeType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The type of the report. Usage represents actual usage, forecast represents forecasted data and UsageAndForecast represents both usage and forecasted data. Actual usage and forecasted data can be differentiated based on dates.
    /// </summary>
    [EnumType]
    public readonly struct ReportType : IEquatable<ReportType>
    {
        private readonly string _value;

        private ReportType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ReportType Usage { get; } = new ReportType("Usage");

        public static bool operator ==(ReportType left, ReportType right) => left.Equals(right);
        public static bool operator !=(ReportType left, ReportType right) => !left.Equals(right);

        public static explicit operator string(ReportType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ReportType other && Equals(other);
        public bool Equals(ReportType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The status of the export's schedule. If 'Inactive', the export's schedule is paused.
    /// </summary>
    [EnumType]
    public readonly struct StatusType : IEquatable<StatusType>
    {
        private readonly string _value;

        private StatusType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static StatusType Active { get; } = new StatusType("Active");
        public static StatusType Inactive { get; } = new StatusType("Inactive");

        public static bool operator ==(StatusType left, StatusType right) => left.Equals(right);
        public static bool operator !=(StatusType left, StatusType right) => !left.Equals(right);

        public static explicit operator string(StatusType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is StatusType other && Equals(other);
        public bool Equals(StatusType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The time frame for pulling data for the export. If custom, then a specific time period must be provided.
    /// </summary>
    [EnumType]
    public readonly struct TimeframeType : IEquatable<TimeframeType>
    {
        private readonly string _value;

        private TimeframeType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static TimeframeType MonthToDate { get; } = new TimeframeType("MonthToDate");
        public static TimeframeType BillingMonthToDate { get; } = new TimeframeType("BillingMonthToDate");
        public static TimeframeType TheLastMonth { get; } = new TimeframeType("TheLastMonth");
        public static TimeframeType TheLastBillingMonth { get; } = new TimeframeType("TheLastBillingMonth");
        public static TimeframeType WeekToDate { get; } = new TimeframeType("WeekToDate");
        public static TimeframeType Custom { get; } = new TimeframeType("Custom");

        public static bool operator ==(TimeframeType left, TimeframeType right) => left.Equals(right);
        public static bool operator !=(TimeframeType left, TimeframeType right) => !left.Equals(right);

        public static explicit operator string(TimeframeType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is TimeframeType other && Equals(other);
        public bool Equals(TimeframeType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}