// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.Media.V20190501Preview
{
    /// <summary>
    /// The encoding type for Live Event.  This value is specified at creation time and cannot be updated.
    /// </summary>
    [EnumType]
    public readonly struct LiveEventEncodingType : IEquatable<LiveEventEncodingType>
    {
        private readonly string _value;

        private LiveEventEncodingType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static LiveEventEncodingType None { get; } = new LiveEventEncodingType("None");
        public static LiveEventEncodingType Basic { get; } = new LiveEventEncodingType("Basic");
        public static LiveEventEncodingType Standard { get; } = new LiveEventEncodingType("Standard");
        public static LiveEventEncodingType Premium1080p { get; } = new LiveEventEncodingType("Premium1080p");

        public static bool operator ==(LiveEventEncodingType left, LiveEventEncodingType right) => left.Equals(right);
        public static bool operator !=(LiveEventEncodingType left, LiveEventEncodingType right) => !left.Equals(right);

        public static explicit operator string(LiveEventEncodingType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is LiveEventEncodingType other && Equals(other);
        public bool Equals(LiveEventEncodingType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The streaming protocol for the Live Event.  This is specified at creation time and cannot be updated.
    /// </summary>
    [EnumType]
    public readonly struct LiveEventInputProtocol : IEquatable<LiveEventInputProtocol>
    {
        private readonly string _value;

        private LiveEventInputProtocol(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static LiveEventInputProtocol FragmentedMP4 { get; } = new LiveEventInputProtocol("FragmentedMP4");
        public static LiveEventInputProtocol RTMP { get; } = new LiveEventInputProtocol("RTMP");

        public static bool operator ==(LiveEventInputProtocol left, LiveEventInputProtocol right) => left.Equals(right);
        public static bool operator !=(LiveEventInputProtocol left, LiveEventInputProtocol right) => !left.Equals(right);

        public static explicit operator string(LiveEventInputProtocol value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is LiveEventInputProtocol other && Equals(other);
        public bool Equals(LiveEventInputProtocol other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    [EnumType]
    public readonly struct StreamOptionsFlag : IEquatable<StreamOptionsFlag>
    {
        private readonly string _value;

        private StreamOptionsFlag(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static StreamOptionsFlag Default { get; } = new StreamOptionsFlag("Default");
        public static StreamOptionsFlag LowLatency { get; } = new StreamOptionsFlag("LowLatency");

        public static bool operator ==(StreamOptionsFlag left, StreamOptionsFlag right) => left.Equals(right);
        public static bool operator !=(StreamOptionsFlag left, StreamOptionsFlag right) => !left.Equals(right);

        public static explicit operator string(StreamOptionsFlag value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is StreamOptionsFlag other && Equals(other);
        public bool Equals(StreamOptionsFlag other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}
