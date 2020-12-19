// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.StreamAnalytics.Latest
{
    /// <summary>
    /// Controls certain runtime behaviors of the streaming job.
    /// </summary>
    [EnumType]
    public readonly struct CompatibilityLevel : IEquatable<CompatibilityLevel>
    {
        private readonly string _value;

        private CompatibilityLevel(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static CompatibilityLevel CompatibilityLevel_1_0 { get; } = new CompatibilityLevel("1.0");

        public static bool operator ==(CompatibilityLevel left, CompatibilityLevel right) => left.Equals(right);
        public static bool operator !=(CompatibilityLevel left, CompatibilityLevel right) => !left.Equals(right);

        public static explicit operator string(CompatibilityLevel value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is CompatibilityLevel other && Equals(other);
        public bool Equals(CompatibilityLevel other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Specifies the encoding of the incoming data in the case of input and the encoding of outgoing data in the case of output. Required on PUT (CreateOrReplace) requests.
    /// </summary>
    [EnumType]
    public readonly struct Encoding : IEquatable<Encoding>
    {
        private readonly string _value;

        private Encoding(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static Encoding UTF8 { get; } = new Encoding("UTF8");

        public static bool operator ==(Encoding left, Encoding right) => left.Equals(right);
        public static bool operator !=(Encoding left, Encoding right) => !left.Equals(right);

        public static explicit operator string(Encoding value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is Encoding other && Equals(other);
        public bool Equals(Encoding other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Indicates the policy to apply to events that arrive out of order in the input event stream.
    /// </summary>
    [EnumType]
    public readonly struct EventsOutOfOrderPolicy : IEquatable<EventsOutOfOrderPolicy>
    {
        private readonly string _value;

        private EventsOutOfOrderPolicy(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static EventsOutOfOrderPolicy Adjust { get; } = new EventsOutOfOrderPolicy("Adjust");
        public static EventsOutOfOrderPolicy Drop { get; } = new EventsOutOfOrderPolicy("Drop");

        public static bool operator ==(EventsOutOfOrderPolicy left, EventsOutOfOrderPolicy right) => left.Equals(right);
        public static bool operator !=(EventsOutOfOrderPolicy left, EventsOutOfOrderPolicy right) => !left.Equals(right);

        public static explicit operator string(EventsOutOfOrderPolicy value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is EventsOutOfOrderPolicy other && Equals(other);
        public bool Equals(EventsOutOfOrderPolicy other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// This property only applies to JSON serialization of outputs only. It is not applicable to inputs. This property specifies the format of the JSON the output will be written in. The currently supported values are 'lineSeparated' indicating the output will be formatted by having each JSON object separated by a new line and 'array' indicating the output will be formatted as an array of JSON objects. Default value is 'lineSeparated' if left null.
    /// </summary>
    [EnumType]
    public readonly struct JsonOutputSerializationFormat : IEquatable<JsonOutputSerializationFormat>
    {
        private readonly string _value;

        private JsonOutputSerializationFormat(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static JsonOutputSerializationFormat LineSeparated { get; } = new JsonOutputSerializationFormat("LineSeparated");
        public static JsonOutputSerializationFormat Array { get; } = new JsonOutputSerializationFormat("Array");

        public static bool operator ==(JsonOutputSerializationFormat left, JsonOutputSerializationFormat right) => left.Equals(right);
        public static bool operator !=(JsonOutputSerializationFormat left, JsonOutputSerializationFormat right) => !left.Equals(right);

        public static explicit operator string(JsonOutputSerializationFormat value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is JsonOutputSerializationFormat other && Equals(other);
        public bool Equals(JsonOutputSerializationFormat other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Indicates the policy to apply to events that arrive at the output and cannot be written to the external storage due to being malformed (missing column values, column values of wrong type or size).
    /// </summary>
    [EnumType]
    public readonly struct OutputErrorPolicy : IEquatable<OutputErrorPolicy>
    {
        private readonly string _value;

        private OutputErrorPolicy(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static OutputErrorPolicy Stop { get; } = new OutputErrorPolicy("Stop");
        public static OutputErrorPolicy Drop { get; } = new OutputErrorPolicy("Drop");

        public static bool operator ==(OutputErrorPolicy left, OutputErrorPolicy right) => left.Equals(right);
        public static bool operator !=(OutputErrorPolicy left, OutputErrorPolicy right) => !left.Equals(right);

        public static explicit operator string(OutputErrorPolicy value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is OutputErrorPolicy other && Equals(other);
        public bool Equals(OutputErrorPolicy other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// This property should only be utilized when it is desired that the job be started immediately upon creation. Value may be JobStartTime, CustomTime, or LastOutputEventTime to indicate whether the starting point of the output event stream should start whenever the job is started, start at a custom user time stamp specified via the outputStartTime property, or start from the last event output time.
    /// </summary>
    [EnumType]
    public readonly struct OutputStartMode : IEquatable<OutputStartMode>
    {
        private readonly string _value;

        private OutputStartMode(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static OutputStartMode JobStartTime { get; } = new OutputStartMode("JobStartTime");
        public static OutputStartMode CustomTime { get; } = new OutputStartMode("CustomTime");
        public static OutputStartMode LastOutputEventTime { get; } = new OutputStartMode("LastOutputEventTime");

        public static bool operator ==(OutputStartMode left, OutputStartMode right) => left.Equals(right);
        public static bool operator !=(OutputStartMode left, OutputStartMode right) => !left.Equals(right);

        public static explicit operator string(OutputStartMode value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is OutputStartMode other && Equals(other);
        public bool Equals(OutputStartMode other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The name of the SKU. Required on PUT (CreateOrReplace) requests.
    /// </summary>
    [EnumType]
    public readonly struct SkuName : IEquatable<SkuName>
    {
        private readonly string _value;

        private SkuName(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static SkuName Standard { get; } = new SkuName("Standard");

        public static bool operator ==(SkuName left, SkuName right) => left.Equals(right);
        public static bool operator !=(SkuName left, SkuName right) => !left.Equals(right);

        public static explicit operator string(SkuName value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is SkuName other && Equals(other);
        public bool Equals(SkuName other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}
