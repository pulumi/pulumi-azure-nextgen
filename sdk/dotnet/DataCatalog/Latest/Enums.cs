// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.DataCatalog.Latest
{
    /// <summary>
    /// Azure data catalog SKU.
    /// </summary>
    [EnumType]
    public readonly struct SkuType : IEquatable<SkuType>
    {
        private readonly string _value;

        private SkuType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static SkuType Free { get; } = new SkuType("Free");
        public static SkuType Standard { get; } = new SkuType("Standard");

        public static bool operator ==(SkuType left, SkuType right) => left.Equals(right);
        public static bool operator !=(SkuType left, SkuType right) => !left.Equals(right);

        public static explicit operator string(SkuType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is SkuType other && Equals(other);
        public bool Equals(SkuType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}