// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.DataShare.V20191101
{
    /// <summary>
    /// Kind of synchronization
    /// </summary>
    [EnumType]
    public readonly struct Kind : IEquatable<Kind>
    {
        private readonly string _value;

        private Kind(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static Kind ScheduleBased { get; } = new Kind("ScheduleBased");

        public static bool operator ==(Kind left, Kind right) => left.Equals(right);
        public static bool operator !=(Kind left, Kind right) => !left.Equals(right);

        public static explicit operator string(Kind value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is Kind other && Equals(other);
        public bool Equals(Kind other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Share kind.
    /// </summary>
    [EnumType]
    public readonly struct ShareKind : IEquatable<ShareKind>
    {
        private readonly string _value;

        private ShareKind(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ShareKind CopyBased { get; } = new ShareKind("CopyBased");
        public static ShareKind InPlace { get; } = new ShareKind("InPlace");

        public static bool operator ==(ShareKind left, ShareKind right) => left.Equals(right);
        public static bool operator !=(ShareKind left, ShareKind right) => !left.Equals(right);

        public static explicit operator string(ShareKind value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ShareKind other && Equals(other);
        public bool Equals(ShareKind other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Identity Type
    /// </summary>
    [EnumType]
    public readonly struct Type : IEquatable<Type>
    {
        private readonly string _value;

        private Type(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static Type SystemAssigned { get; } = new Type("SystemAssigned");

        public static bool operator ==(Type left, Type right) => left.Equals(right);
        public static bool operator !=(Type left, Type right) => !left.Equals(right);

        public static explicit operator string(Type value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is Type other && Equals(other);
        public bool Equals(Type other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}
