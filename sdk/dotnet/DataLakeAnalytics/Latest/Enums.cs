// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.DataLakeAnalytics.Latest
{
    /// <summary>
    /// The type of AAD object the object identifier refers to.
    /// </summary>
    [EnumType]
    public readonly struct AADObjectType : IEquatable<AADObjectType>
    {
        private readonly string _value;

        private AADObjectType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static AADObjectType User { get; } = new AADObjectType("User");
        public static AADObjectType Group { get; } = new AADObjectType("Group");
        public static AADObjectType ServicePrincipal { get; } = new AADObjectType("ServicePrincipal");

        public static bool operator ==(AADObjectType left, AADObjectType right) => left.Equals(right);
        public static bool operator !=(AADObjectType left, AADObjectType right) => !left.Equals(right);

        public static explicit operator string(AADObjectType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is AADObjectType other && Equals(other);
        public bool Equals(AADObjectType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced.
    /// </summary>
    [EnumType]
    public readonly struct FirewallAllowAzureIpsState : IEquatable<FirewallAllowAzureIpsState>
    {
        private readonly string _value;

        private FirewallAllowAzureIpsState(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static FirewallAllowAzureIpsState Enabled { get; } = new FirewallAllowAzureIpsState("Enabled");
        public static FirewallAllowAzureIpsState Disabled { get; } = new FirewallAllowAzureIpsState("Disabled");

        public static bool operator ==(FirewallAllowAzureIpsState left, FirewallAllowAzureIpsState right) => left.Equals(right);
        public static bool operator !=(FirewallAllowAzureIpsState left, FirewallAllowAzureIpsState right) => !left.Equals(right);

        public static explicit operator string(FirewallAllowAzureIpsState value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is FirewallAllowAzureIpsState other && Equals(other);
        public bool Equals(FirewallAllowAzureIpsState other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The current state of the IP address firewall for this account.
    /// </summary>
    [EnumType]
    public readonly struct FirewallState : IEquatable<FirewallState>
    {
        private readonly string _value;

        private FirewallState(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static FirewallState Enabled { get; } = new FirewallState("Enabled");
        public static FirewallState Disabled { get; } = new FirewallState("Disabled");

        public static bool operator ==(FirewallState left, FirewallState right) => left.Equals(right);
        public static bool operator !=(FirewallState left, FirewallState right) => !left.Equals(right);

        public static explicit operator string(FirewallState value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is FirewallState other && Equals(other);
        public bool Equals(FirewallState other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The commitment tier for the next month.
    /// </summary>
    [EnumType]
    public readonly struct TierType : IEquatable<TierType>
    {
        private readonly string _value;

        private TierType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static TierType Consumption { get; } = new TierType("Consumption");
        public static TierType Commitment_100AUHours { get; } = new TierType("Commitment_100AUHours");
        public static TierType Commitment_500AUHours { get; } = new TierType("Commitment_500AUHours");
        public static TierType Commitment_1000AUHours { get; } = new TierType("Commitment_1000AUHours");
        public static TierType Commitment_5000AUHours { get; } = new TierType("Commitment_5000AUHours");
        public static TierType Commitment_10000AUHours { get; } = new TierType("Commitment_10000AUHours");
        public static TierType Commitment_50000AUHours { get; } = new TierType("Commitment_50000AUHours");
        public static TierType Commitment_100000AUHours { get; } = new TierType("Commitment_100000AUHours");
        public static TierType Commitment_500000AUHours { get; } = new TierType("Commitment_500000AUHours");

        public static bool operator ==(TierType left, TierType right) => left.Equals(right);
        public static bool operator !=(TierType left, TierType right) => !left.Equals(right);

        public static explicit operator string(TierType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is TierType other && Equals(other);
        public bool Equals(TierType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}