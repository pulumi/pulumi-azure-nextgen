// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.DevSpaces.Latest
{
    /// <summary>
    /// The name of the SKU for Azure Dev Spaces Controller.
    /// </summary>
    [EnumType]
    public readonly struct SkuName : IEquatable<SkuName>
    {
        private readonly string _value;

        private SkuName(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static SkuName S1 { get; } = new SkuName("S1");

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

    /// <summary>
    /// The tier of the SKU for Azure Dev Spaces Controller.
    /// </summary>
    [EnumType]
    public readonly struct SkuTier : IEquatable<SkuTier>
    {
        private readonly string _value;

        private SkuTier(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static SkuTier Standard { get; } = new SkuTier("Standard");

        public static bool operator ==(SkuTier left, SkuTier right) => left.Equals(right);
        public static bool operator !=(SkuTier left, SkuTier right) => !left.Equals(right);

        public static explicit operator string(SkuTier value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is SkuTier other && Equals(other);
        public bool Equals(SkuTier other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}