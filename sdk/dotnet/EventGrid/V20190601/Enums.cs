// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.EventGrid.V20190601
{
    /// <summary>
    /// The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
    /// </summary>
    [EnumType]
    public readonly struct AdvancedFilterOperatorType : IEquatable<AdvancedFilterOperatorType>
    {
        private readonly string _value;

        private AdvancedFilterOperatorType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static AdvancedFilterOperatorType NumberIn { get; } = new AdvancedFilterOperatorType("NumberIn");
        public static AdvancedFilterOperatorType NumberNotIn { get; } = new AdvancedFilterOperatorType("NumberNotIn");
        public static AdvancedFilterOperatorType NumberLessThan { get; } = new AdvancedFilterOperatorType("NumberLessThan");
        public static AdvancedFilterOperatorType NumberGreaterThan { get; } = new AdvancedFilterOperatorType("NumberGreaterThan");
        public static AdvancedFilterOperatorType NumberLessThanOrEquals { get; } = new AdvancedFilterOperatorType("NumberLessThanOrEquals");
        public static AdvancedFilterOperatorType NumberGreaterThanOrEquals { get; } = new AdvancedFilterOperatorType("NumberGreaterThanOrEquals");
        public static AdvancedFilterOperatorType BoolEquals { get; } = new AdvancedFilterOperatorType("BoolEquals");
        public static AdvancedFilterOperatorType StringIn { get; } = new AdvancedFilterOperatorType("StringIn");
        public static AdvancedFilterOperatorType StringNotIn { get; } = new AdvancedFilterOperatorType("StringNotIn");
        public static AdvancedFilterOperatorType StringBeginsWith { get; } = new AdvancedFilterOperatorType("StringBeginsWith");
        public static AdvancedFilterOperatorType StringEndsWith { get; } = new AdvancedFilterOperatorType("StringEndsWith");
        public static AdvancedFilterOperatorType StringContains { get; } = new AdvancedFilterOperatorType("StringContains");

        public static bool operator ==(AdvancedFilterOperatorType left, AdvancedFilterOperatorType right) => left.Equals(right);
        public static bool operator !=(AdvancedFilterOperatorType left, AdvancedFilterOperatorType right) => !left.Equals(right);

        public static explicit operator string(AdvancedFilterOperatorType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is AdvancedFilterOperatorType other && Equals(other);
        public bool Equals(AdvancedFilterOperatorType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Type of the endpoint for the dead letter destination
    /// </summary>
    [EnumType]
    public readonly struct DeadLetterEndPointType : IEquatable<DeadLetterEndPointType>
    {
        private readonly string _value;

        private DeadLetterEndPointType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static DeadLetterEndPointType StorageBlob { get; } = new DeadLetterEndPointType("StorageBlob");

        public static bool operator ==(DeadLetterEndPointType left, DeadLetterEndPointType right) => left.Equals(right);
        public static bool operator !=(DeadLetterEndPointType left, DeadLetterEndPointType right) => !left.Equals(right);

        public static explicit operator string(DeadLetterEndPointType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is DeadLetterEndPointType other && Equals(other);
        public bool Equals(DeadLetterEndPointType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Type of the endpoint for the event subscription destination
    /// </summary>
    [EnumType]
    public readonly struct EndpointType : IEquatable<EndpointType>
    {
        private readonly string _value;

        private EndpointType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static EndpointType WebHook { get; } = new EndpointType("WebHook");
        public static EndpointType EventHub { get; } = new EndpointType("EventHub");
        public static EndpointType StorageQueue { get; } = new EndpointType("StorageQueue");
        public static EndpointType HybridConnection { get; } = new EndpointType("HybridConnection");
        public static EndpointType ServiceBusQueue { get; } = new EndpointType("ServiceBusQueue");

        public static bool operator ==(EndpointType left, EndpointType right) => left.Equals(right);
        public static bool operator !=(EndpointType left, EndpointType right) => !left.Equals(right);

        public static explicit operator string(EndpointType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is EndpointType other && Equals(other);
        public bool Equals(EndpointType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}
