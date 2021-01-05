// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.StorageCache.Latest
{
    /// <summary>
    /// The type of identity used for the cache
    /// </summary>
    [EnumType]
    public readonly struct CacheIdentityType : IEquatable<CacheIdentityType>
    {
        private readonly string _value;

        private CacheIdentityType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static CacheIdentityType SystemAssigned { get; } = new CacheIdentityType("SystemAssigned");
        public static CacheIdentityType None { get; } = new CacheIdentityType("None");

        public static bool operator ==(CacheIdentityType left, CacheIdentityType right) => left.Equals(right);
        public static bool operator !=(CacheIdentityType left, CacheIdentityType right) => !left.Equals(right);

        public static explicit operator string(CacheIdentityType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is CacheIdentityType other && Equals(other);
        public bool Equals(CacheIdentityType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Access allowed by this rule.
    /// </summary>
    [EnumType]
    public readonly struct NfsAccessRuleAccess : IEquatable<NfsAccessRuleAccess>
    {
        private readonly string _value;

        private NfsAccessRuleAccess(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static NfsAccessRuleAccess No { get; } = new NfsAccessRuleAccess("no");
        public static NfsAccessRuleAccess Ro { get; } = new NfsAccessRuleAccess("ro");
        public static NfsAccessRuleAccess Rw { get; } = new NfsAccessRuleAccess("rw");

        public static bool operator ==(NfsAccessRuleAccess left, NfsAccessRuleAccess right) => left.Equals(right);
        public static bool operator !=(NfsAccessRuleAccess left, NfsAccessRuleAccess right) => !left.Equals(right);

        public static explicit operator string(NfsAccessRuleAccess value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is NfsAccessRuleAccess other && Equals(other);
        public bool Equals(NfsAccessRuleAccess other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Scope for this rule. The scope and filter determine which clients match the rule.
    /// </summary>
    [EnumType]
    public readonly struct NfsAccessRuleScope : IEquatable<NfsAccessRuleScope>
    {
        private readonly string _value;

        private NfsAccessRuleScope(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static NfsAccessRuleScope @Default { get; } = new NfsAccessRuleScope("default");
        public static NfsAccessRuleScope Network { get; } = new NfsAccessRuleScope("network");
        public static NfsAccessRuleScope Host { get; } = new NfsAccessRuleScope("host");

        public static bool operator ==(NfsAccessRuleScope left, NfsAccessRuleScope right) => left.Equals(right);
        public static bool operator !=(NfsAccessRuleScope left, NfsAccessRuleScope right) => !left.Equals(right);

        public static explicit operator string(NfsAccessRuleScope value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is NfsAccessRuleScope other && Equals(other);
        public bool Equals(NfsAccessRuleScope other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
    /// </summary>
    [EnumType]
    public readonly struct ProvisioningStateType : IEquatable<ProvisioningStateType>
    {
        private readonly string _value;

        private ProvisioningStateType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ProvisioningStateType Succeeded { get; } = new ProvisioningStateType("Succeeded");
        public static ProvisioningStateType Failed { get; } = new ProvisioningStateType("Failed");
        public static ProvisioningStateType Cancelled { get; } = new ProvisioningStateType("Cancelled");
        public static ProvisioningStateType Creating { get; } = new ProvisioningStateType("Creating");
        public static ProvisioningStateType Deleting { get; } = new ProvisioningStateType("Deleting");
        public static ProvisioningStateType Updating { get; } = new ProvisioningStateType("Updating");

        public static bool operator ==(ProvisioningStateType left, ProvisioningStateType right) => left.Equals(right);
        public static bool operator !=(ProvisioningStateType left, ProvisioningStateType right) => !left.Equals(right);

        public static explicit operator string(ProvisioningStateType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ProvisioningStateType other && Equals(other);
        public bool Equals(ProvisioningStateType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Type of the Storage Target.
    /// </summary>
    [EnumType]
    public readonly struct StorageTargetType : IEquatable<StorageTargetType>
    {
        private readonly string _value;

        private StorageTargetType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static StorageTargetType Nfs3 { get; } = new StorageTargetType("nfs3");
        public static StorageTargetType Clfs { get; } = new StorageTargetType("clfs");
        public static StorageTargetType Unknown { get; } = new StorageTargetType("unknown");

        public static bool operator ==(StorageTargetType left, StorageTargetType right) => left.Equals(right);
        public static bool operator !=(StorageTargetType left, StorageTargetType right) => !left.Equals(right);

        public static explicit operator string(StorageTargetType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is StorageTargetType other && Equals(other);
        public bool Equals(StorageTargetType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// This setting determines how the cache gets username and group names for clients.
    /// </summary>
    [EnumType]
    public readonly struct UsernameSource : IEquatable<UsernameSource>
    {
        private readonly string _value;

        private UsernameSource(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static UsernameSource AD { get; } = new UsernameSource("AD");
        public static UsernameSource LDAP { get; } = new UsernameSource("LDAP");
        public static UsernameSource File { get; } = new UsernameSource("File");
        public static UsernameSource None { get; } = new UsernameSource("None");

        public static bool operator ==(UsernameSource left, UsernameSource right) => left.Equals(right);
        public static bool operator !=(UsernameSource left, UsernameSource right) => !left.Equals(right);

        public static explicit operator string(UsernameSource value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is UsernameSource other && Equals(other);
        public bool Equals(UsernameSource other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}