// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.Cdn.V20160402
{
    /// <summary>
    /// Defines the query string caching behavior.
    /// </summary>
    [EnumType]
    public readonly struct QueryStringCachingBehavior : IEquatable<QueryStringCachingBehavior>
    {
        private readonly string _value;

        private QueryStringCachingBehavior(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static QueryStringCachingBehavior IgnoreQueryString { get; } = new QueryStringCachingBehavior("IgnoreQueryString");
        public static QueryStringCachingBehavior BypassCaching { get; } = new QueryStringCachingBehavior("BypassCaching");
        public static QueryStringCachingBehavior UseQueryString { get; } = new QueryStringCachingBehavior("UseQueryString");
        public static QueryStringCachingBehavior NotSet { get; } = new QueryStringCachingBehavior("NotSet");

        public static bool operator ==(QueryStringCachingBehavior left, QueryStringCachingBehavior right) => left.Equals(right);
        public static bool operator !=(QueryStringCachingBehavior left, QueryStringCachingBehavior right) => !left.Equals(right);

        public static explicit operator string(QueryStringCachingBehavior value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is QueryStringCachingBehavior other && Equals(other);
        public bool Equals(QueryStringCachingBehavior other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Name of the pricing tier
    /// </summary>
    [EnumType]
    public readonly struct SkuName : IEquatable<SkuName>
    {
        private readonly string _value;

        private SkuName(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static SkuName Standard_Verizon { get; } = new SkuName("Standard_Verizon");
        public static SkuName Premium_Verizon { get; } = new SkuName("Premium_Verizon");
        public static SkuName Custom_Verizon { get; } = new SkuName("Custom_Verizon");
        public static SkuName Standard_Akamai { get; } = new SkuName("Standard_Akamai");

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