// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.AzureActiveDirectory.V20190101Preview
{
    /// <summary>
    /// The name of the SKU for the tenant.
    /// </summary>
    [EnumType]
    public readonly struct B2CResourceSKUName : IEquatable<B2CResourceSKUName>
    {
        private readonly string _value;

        private B2CResourceSKUName(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        /// <summary>
        /// Azure AD B2C usage is billed to a linked Azure subscription and uses a monthly active users (MAU) billing model.
        /// </summary>
        public static B2CResourceSKUName Standard { get; } = new B2CResourceSKUName("Standard");
        /// <summary>
        /// Azure AD B2C usage is billed to a linked Azure subscription and uses number of authentications based billing.
        /// </summary>
        public static B2CResourceSKUName PremiumP1 { get; } = new B2CResourceSKUName("PremiumP1");
        /// <summary>
        /// Azure AD B2C usage is billed to a linked Azure subscription and uses number of authentications based billing.
        /// </summary>
        public static B2CResourceSKUName PremiumP2 { get; } = new B2CResourceSKUName("PremiumP2");

        public static bool operator ==(B2CResourceSKUName left, B2CResourceSKUName right) => left.Equals(right);
        public static bool operator !=(B2CResourceSKUName left, B2CResourceSKUName right) => !left.Equals(right);

        public static explicit operator string(B2CResourceSKUName value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is B2CResourceSKUName other && Equals(other);
        public bool Equals(B2CResourceSKUName other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The tier of the tenant.
    /// </summary>
    [EnumType]
    public readonly struct B2CResourceSKUTier : IEquatable<B2CResourceSKUTier>
    {
        private readonly string _value;

        private B2CResourceSKUTier(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        /// <summary>
        /// The SKU tier used for all Azure AD B2C tenants.
        /// </summary>
        public static B2CResourceSKUTier A0 { get; } = new B2CResourceSKUTier("A0");

        public static bool operator ==(B2CResourceSKUTier left, B2CResourceSKUTier right) => left.Equals(right);
        public static bool operator !=(B2CResourceSKUTier left, B2CResourceSKUTier right) => !left.Equals(right);

        public static explicit operator string(B2CResourceSKUTier value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is B2CResourceSKUTier other && Equals(other);
        public bool Equals(B2CResourceSKUTier other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}
