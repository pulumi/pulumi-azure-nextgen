// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.HybridCompute.V20200815Preview
{
    /// <summary>
    /// Indicates whether machines associated with the private link scope can also use public Azure Arc service endpoints.
    /// </summary>
    [EnumType]
    public readonly struct PublicNetworkAccessType : IEquatable<PublicNetworkAccessType>
    {
        private readonly string _value;

        private PublicNetworkAccessType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        /// <summary>
        /// Allows Azure Arc agents to communicate with Azure Arc services over both public (internet) and private endpoints.
        /// </summary>
        public static PublicNetworkAccessType Enabled { get; } = new PublicNetworkAccessType("Enabled");
        /// <summary>
        /// Does not allow Azure Arc agents to communicate with Azure Arc services over public (internet) endpoints. The agents must use the private link.
        /// </summary>
        public static PublicNetworkAccessType Disabled { get; } = new PublicNetworkAccessType("Disabled");

        public static bool operator ==(PublicNetworkAccessType left, PublicNetworkAccessType right) => left.Equals(right);
        public static bool operator !=(PublicNetworkAccessType left, PublicNetworkAccessType right) => !left.Equals(right);

        public static explicit operator string(PublicNetworkAccessType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is PublicNetworkAccessType other && Equals(other);
        public bool Equals(PublicNetworkAccessType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The level code.
    /// </summary>
    [EnumType]
    public readonly struct StatusLevelTypes : IEquatable<StatusLevelTypes>
    {
        private readonly string _value;

        private StatusLevelTypes(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static StatusLevelTypes Info { get; } = new StatusLevelTypes("Info");
        public static StatusLevelTypes Warning { get; } = new StatusLevelTypes("Warning");
        public static StatusLevelTypes Error { get; } = new StatusLevelTypes("Error");

        public static bool operator ==(StatusLevelTypes left, StatusLevelTypes right) => left.Equals(right);
        public static bool operator !=(StatusLevelTypes left, StatusLevelTypes right) => !left.Equals(right);

        public static explicit operator string(StatusLevelTypes value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is StatusLevelTypes other && Equals(other);
        public bool Equals(StatusLevelTypes other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}