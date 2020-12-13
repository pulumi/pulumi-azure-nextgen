// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.Sql.V20150501Preview
{
    /// <summary>
    /// The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.
    /// </summary>
    [EnumType]
    public readonly struct IdentityType : IEquatable<IdentityType>
    {
        private readonly string _value;

        private IdentityType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static IdentityType None { get; } = new IdentityType("None");
        public static IdentityType SystemAssigned { get; } = new IdentityType("SystemAssigned");
        public static IdentityType UserAssigned { get; } = new IdentityType("UserAssigned");

        public static bool operator ==(IdentityType left, IdentityType right) => left.Equals(right);
        public static bool operator !=(IdentityType left, IdentityType right) => !left.Equals(right);

        public static explicit operator string(IdentityType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is IdentityType other && Equals(other);
        public bool Equals(IdentityType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The license type. Possible values are 'LicenseIncluded' (regular price inclusive of a new SQL license) and 'BasePrice' (discounted AHB price for bringing your own SQL licenses).
    /// </summary>
    [EnumType]
    public readonly struct ManagedInstanceLicenseType : IEquatable<ManagedInstanceLicenseType>
    {
        private readonly string _value;

        private ManagedInstanceLicenseType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ManagedInstanceLicenseType LicenseIncluded { get; } = new ManagedInstanceLicenseType("LicenseIncluded");
        public static ManagedInstanceLicenseType BasePrice { get; } = new ManagedInstanceLicenseType("BasePrice");

        public static bool operator ==(ManagedInstanceLicenseType left, ManagedInstanceLicenseType right) => left.Equals(right);
        public static bool operator !=(ManagedInstanceLicenseType left, ManagedInstanceLicenseType right) => !left.Equals(right);

        public static explicit operator string(ManagedInstanceLicenseType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ManagedInstanceLicenseType other && Equals(other);
        public bool Equals(ManagedInstanceLicenseType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Connection type used for connecting to the instance.
    /// </summary>
    [EnumType]
    public readonly struct ManagedInstanceProxyOverride : IEquatable<ManagedInstanceProxyOverride>
    {
        private readonly string _value;

        private ManagedInstanceProxyOverride(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ManagedInstanceProxyOverride Proxy { get; } = new ManagedInstanceProxyOverride("Proxy");
        public static ManagedInstanceProxyOverride Redirect { get; } = new ManagedInstanceProxyOverride("Redirect");
        public static ManagedInstanceProxyOverride Default { get; } = new ManagedInstanceProxyOverride("Default");

        public static bool operator ==(ManagedInstanceProxyOverride left, ManagedInstanceProxyOverride right) => left.Equals(right);
        public static bool operator !=(ManagedInstanceProxyOverride left, ManagedInstanceProxyOverride right) => !left.Equals(right);

        public static explicit operator string(ManagedInstanceProxyOverride value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ManagedInstanceProxyOverride other && Equals(other);
        public bool Equals(ManagedInstanceProxyOverride other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Specifies the mode of database creation.
    /// 
    /// Default: Regular instance creation.
    /// 
    /// Restore: Creates an instance by restoring a set of backups to specific point in time. RestorePointInTime and SourceManagedInstanceId must be specified.
    /// </summary>
    [EnumType]
    public readonly struct ManagedServerCreateMode : IEquatable<ManagedServerCreateMode>
    {
        private readonly string _value;

        private ManagedServerCreateMode(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ManagedServerCreateMode Default { get; } = new ManagedServerCreateMode("Default");
        public static ManagedServerCreateMode PointInTimeRestore { get; } = new ManagedServerCreateMode("PointInTimeRestore");

        public static bool operator ==(ManagedServerCreateMode left, ManagedServerCreateMode right) => left.Equals(right);
        public static bool operator !=(ManagedServerCreateMode left, ManagedServerCreateMode right) => !left.Equals(right);

        public static explicit operator string(ManagedServerCreateMode value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ManagedServerCreateMode other && Equals(other);
        public bool Equals(ManagedServerCreateMode other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Failover policy of the read-only endpoint for the failover group.
    /// </summary>
    [EnumType]
    public readonly struct ReadOnlyEndpointFailoverPolicy : IEquatable<ReadOnlyEndpointFailoverPolicy>
    {
        private readonly string _value;

        private ReadOnlyEndpointFailoverPolicy(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ReadOnlyEndpointFailoverPolicy Disabled { get; } = new ReadOnlyEndpointFailoverPolicy("Disabled");
        public static ReadOnlyEndpointFailoverPolicy Enabled { get; } = new ReadOnlyEndpointFailoverPolicy("Enabled");

        public static bool operator ==(ReadOnlyEndpointFailoverPolicy left, ReadOnlyEndpointFailoverPolicy right) => left.Equals(right);
        public static bool operator !=(ReadOnlyEndpointFailoverPolicy left, ReadOnlyEndpointFailoverPolicy right) => !left.Equals(right);

        public static explicit operator string(ReadOnlyEndpointFailoverPolicy value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ReadOnlyEndpointFailoverPolicy other && Equals(other);
        public bool Equals(ReadOnlyEndpointFailoverPolicy other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Failover policy of the read-write endpoint for the failover group. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required.
    /// </summary>
    [EnumType]
    public readonly struct ReadWriteEndpointFailoverPolicy : IEquatable<ReadWriteEndpointFailoverPolicy>
    {
        private readonly string _value;

        private ReadWriteEndpointFailoverPolicy(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ReadWriteEndpointFailoverPolicy Manual { get; } = new ReadWriteEndpointFailoverPolicy("Manual");
        public static ReadWriteEndpointFailoverPolicy Automatic { get; } = new ReadWriteEndpointFailoverPolicy("Automatic");

        public static bool operator ==(ReadWriteEndpointFailoverPolicy left, ReadWriteEndpointFailoverPolicy right) => left.Equals(right);
        public static bool operator !=(ReadWriteEndpointFailoverPolicy left, ReadWriteEndpointFailoverPolicy right) => !left.Equals(right);

        public static explicit operator string(ReadWriteEndpointFailoverPolicy value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ReadWriteEndpointFailoverPolicy other && Equals(other);
        public bool Equals(ReadWriteEndpointFailoverPolicy other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The server key type like 'ServiceManaged', 'AzureKeyVault'.
    /// </summary>
    [EnumType]
    public readonly struct ServerKeyType : IEquatable<ServerKeyType>
    {
        private readonly string _value;

        private ServerKeyType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ServerKeyType ServiceManaged { get; } = new ServerKeyType("ServiceManaged");
        public static ServerKeyType AzureKeyVault { get; } = new ServerKeyType("AzureKeyVault");

        public static bool operator ==(ServerKeyType left, ServerKeyType right) => left.Equals(right);
        public static bool operator !=(ServerKeyType left, ServerKeyType right) => !left.Equals(right);

        public static explicit operator string(ServerKeyType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ServerKeyType other && Equals(other);
        public bool Equals(ServerKeyType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Conflict resolution policy of the sync group.
    /// </summary>
    [EnumType]
    public readonly struct SyncConflictResolutionPolicy : IEquatable<SyncConflictResolutionPolicy>
    {
        private readonly string _value;

        private SyncConflictResolutionPolicy(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static SyncConflictResolutionPolicy HubWin { get; } = new SyncConflictResolutionPolicy("HubWin");
        public static SyncConflictResolutionPolicy MemberWin { get; } = new SyncConflictResolutionPolicy("MemberWin");

        public static bool operator ==(SyncConflictResolutionPolicy left, SyncConflictResolutionPolicy right) => left.Equals(right);
        public static bool operator !=(SyncConflictResolutionPolicy left, SyncConflictResolutionPolicy right) => !left.Equals(right);

        public static explicit operator string(SyncConflictResolutionPolicy value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is SyncConflictResolutionPolicy other && Equals(other);
        public bool Equals(SyncConflictResolutionPolicy other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Sync direction of the sync member.
    /// </summary>
    [EnumType]
    public readonly struct SyncDirection : IEquatable<SyncDirection>
    {
        private readonly string _value;

        private SyncDirection(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static SyncDirection Bidirectional { get; } = new SyncDirection("Bidirectional");
        public static SyncDirection OneWayMemberToHub { get; } = new SyncDirection("OneWayMemberToHub");
        public static SyncDirection OneWayHubToMember { get; } = new SyncDirection("OneWayHubToMember");

        public static bool operator ==(SyncDirection left, SyncDirection right) => left.Equals(right);
        public static bool operator !=(SyncDirection left, SyncDirection right) => !left.Equals(right);

        public static explicit operator string(SyncDirection value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is SyncDirection other && Equals(other);
        public bool Equals(SyncDirection other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Database type of the sync member.
    /// </summary>
    [EnumType]
    public readonly struct SyncMemberDbType : IEquatable<SyncMemberDbType>
    {
        private readonly string _value;

        private SyncMemberDbType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static SyncMemberDbType AzureSqlDatabase { get; } = new SyncMemberDbType("AzureSqlDatabase");
        public static SyncMemberDbType SqlServerDatabase { get; } = new SyncMemberDbType("SqlServerDatabase");

        public static bool operator ==(SyncMemberDbType left, SyncMemberDbType right) => left.Equals(right);
        public static bool operator !=(SyncMemberDbType left, SyncMemberDbType right) => !left.Equals(right);

        public static explicit operator string(SyncMemberDbType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is SyncMemberDbType other && Equals(other);
        public bool Equals(SyncMemberDbType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}
