// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.Storage.Latest
{
    /// <summary>
    /// Required for storage accounts where kind = BlobStorage. The access tier used for billing.
    /// </summary>
    [EnumType]
    public readonly struct AccessTier : IEquatable<AccessTier>
    {
        private readonly string _value;

        private AccessTier(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static AccessTier Hot { get; } = new AccessTier("Hot");
        public static AccessTier Cool { get; } = new AccessTier("Cool");

        public static bool operator ==(AccessTier left, AccessTier right) => left.Equals(right);
        public static bool operator !=(AccessTier left, AccessTier right) => !left.Equals(right);

        public static explicit operator string(AccessTier value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is AccessTier other && Equals(other);
        public bool Equals(AccessTier other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The action of virtual network rule.
    /// </summary>
    [EnumType]
    public readonly struct Action : IEquatable<Action>
    {
        private readonly string _value;

        private Action(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static Action Allow { get; } = new Action("Allow");

        public static bool operator ==(Action left, Action right) => left.Equals(right);
        public static bool operator !=(Action left, Action right) => !left.Equals(right);

        public static explicit operator string(Action value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is Action other && Equals(other);
        public bool Equals(Action other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Specifies whether traffic is bypassed for Logging/Metrics/AzureServices. Possible values are any combination of Logging|Metrics|AzureServices (For example, "Logging, Metrics"), or None to bypass none of those traffics.
    /// </summary>
    [EnumType]
    public readonly struct Bypass : IEquatable<Bypass>
    {
        private readonly string _value;

        private Bypass(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static Bypass None { get; } = new Bypass("None");
        public static Bypass Logging { get; } = new Bypass("Logging");
        public static Bypass Metrics { get; } = new Bypass("Metrics");
        public static Bypass AzureServices { get; } = new Bypass("AzureServices");

        public static bool operator ==(Bypass left, Bypass right) => left.Equals(right);
        public static bool operator !=(Bypass left, Bypass right) => !left.Equals(right);

        public static explicit operator string(Bypass value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is Bypass other && Equals(other);
        public bool Equals(Bypass other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Specifies the default action of allow or deny when no other rules match.
    /// </summary>
    [EnumType]
    public readonly struct DefaultAction : IEquatable<DefaultAction>
    {
        private readonly string _value;

        private DefaultAction(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static DefaultAction Allow { get; } = new DefaultAction("Allow");
        public static DefaultAction Deny { get; } = new DefaultAction("Deny");

        public static bool operator ==(DefaultAction left, DefaultAction right) => left.Equals(right);
        public static bool operator !=(DefaultAction left, DefaultAction right) => !left.Equals(right);

        public static explicit operator string(DefaultAction value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is DefaultAction other && Equals(other);
        public bool Equals(DefaultAction other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Indicates the directory service used.
    /// </summary>
    [EnumType]
    public readonly struct DirectoryServiceOptions : IEquatable<DirectoryServiceOptions>
    {
        private readonly string _value;

        private DirectoryServiceOptions(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static DirectoryServiceOptions None { get; } = new DirectoryServiceOptions("None");
        public static DirectoryServiceOptions AADDS { get; } = new DirectoryServiceOptions("AADDS");
        public static DirectoryServiceOptions AD { get; } = new DirectoryServiceOptions("AD");

        public static bool operator ==(DirectoryServiceOptions left, DirectoryServiceOptions right) => left.Equals(right);
        public static bool operator !=(DirectoryServiceOptions left, DirectoryServiceOptions right) => !left.Equals(right);

        public static explicit operator string(DirectoryServiceOptions value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is DirectoryServiceOptions other && Equals(other);
        public bool Equals(DirectoryServiceOptions other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The authentication protocol that is used for the file share. Can only be specified when creating a share.
    /// </summary>
    [EnumType]
    public readonly struct EnabledProtocols : IEquatable<EnabledProtocols>
    {
        private readonly string _value;

        private EnabledProtocols(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static EnabledProtocols SMB { get; } = new EnabledProtocols("SMB");
        public static EnabledProtocols NFS { get; } = new EnabledProtocols("NFS");

        public static bool operator ==(EnabledProtocols left, EnabledProtocols right) => left.Equals(right);
        public static bool operator !=(EnabledProtocols left, EnabledProtocols right) => !left.Equals(right);

        public static explicit operator string(EnabledProtocols value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is EnabledProtocols other && Equals(other);
        public bool Equals(EnabledProtocols other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The identity type.
    /// </summary>
    [EnumType]
    public readonly struct IdentityType : IEquatable<IdentityType>
    {
        private readonly string _value;

        private IdentityType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static IdentityType SystemAssigned { get; } = new IdentityType("SystemAssigned");

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
    /// The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Storage, Microsoft.Keyvault
    /// </summary>
    [EnumType]
    public readonly struct KeySource : IEquatable<KeySource>
    {
        private readonly string _value;

        private KeySource(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static KeySource Microsoft_Storage { get; } = new KeySource("Microsoft.Storage");
        public static KeySource Microsoft_Keyvault { get; } = new KeySource("Microsoft.Keyvault");

        public static bool operator ==(KeySource left, KeySource right) => left.Equals(right);
        public static bool operator !=(KeySource left, KeySource right) => !left.Equals(right);

        public static explicit operator string(KeySource value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is KeySource other && Equals(other);
        public bool Equals(KeySource other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Encryption key type to be used for the encryption service. 'Account' key type implies that an account-scoped encryption key will be used. 'Service' key type implies that a default service key is used.
    /// </summary>
    [EnumType]
    public readonly struct KeyType : IEquatable<KeyType>
    {
        private readonly string _value;

        private KeyType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static KeyType Service { get; } = new KeyType("Service");
        public static KeyType Account { get; } = new KeyType("Account");

        public static bool operator ==(KeyType left, KeyType right) => left.Equals(right);
        public static bool operator !=(KeyType left, KeyType right) => !left.Equals(right);

        public static explicit operator string(KeyType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is KeyType other && Equals(other);
        public bool Equals(KeyType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Required. Indicates the type of storage account.
    /// </summary>
    [EnumType]
    public readonly struct Kind : IEquatable<Kind>
    {
        private readonly string _value;

        private Kind(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static Kind Storage { get; } = new Kind("Storage");
        public static Kind StorageV2 { get; } = new Kind("StorageV2");
        public static Kind BlobStorage { get; } = new Kind("BlobStorage");
        public static Kind FileStorage { get; } = new Kind("FileStorage");
        public static Kind BlockBlobStorage { get; } = new Kind("BlockBlobStorage");

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
    /// Allow large file shares if sets to Enabled. It cannot be disabled once it is enabled.
    /// </summary>
    [EnumType]
    public readonly struct LargeFileSharesState : IEquatable<LargeFileSharesState>
    {
        private readonly string _value;

        private LargeFileSharesState(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static LargeFileSharesState Disabled { get; } = new LargeFileSharesState("Disabled");
        public static LargeFileSharesState Enabled { get; } = new LargeFileSharesState("Enabled");

        public static bool operator ==(LargeFileSharesState left, LargeFileSharesState right) => left.Equals(right);
        public static bool operator !=(LargeFileSharesState left, LargeFileSharesState right) => !left.Equals(right);

        public static explicit operator string(LargeFileSharesState value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is LargeFileSharesState other && Equals(other);
        public bool Equals(LargeFileSharesState other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Set the minimum TLS version to be permitted on requests to storage. The default interpretation is TLS 1.0 for this property.
    /// </summary>
    [EnumType]
    public readonly struct MinimumTlsVersion : IEquatable<MinimumTlsVersion>
    {
        private readonly string _value;

        private MinimumTlsVersion(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static MinimumTlsVersion TLS1_0 { get; } = new MinimumTlsVersion("TLS1_0");
        public static MinimumTlsVersion TLS1_1 { get; } = new MinimumTlsVersion("TLS1_1");
        public static MinimumTlsVersion TLS1_2 { get; } = new MinimumTlsVersion("TLS1_2");

        public static bool operator ==(MinimumTlsVersion left, MinimumTlsVersion right) => left.Equals(right);
        public static bool operator !=(MinimumTlsVersion left, MinimumTlsVersion right) => !left.Equals(right);

        public static explicit operator string(MinimumTlsVersion value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is MinimumTlsVersion other && Equals(other);
        public bool Equals(MinimumTlsVersion other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
    /// </summary>
    [EnumType]
    public readonly struct PrivateEndpointServiceConnectionStatus : IEquatable<PrivateEndpointServiceConnectionStatus>
    {
        private readonly string _value;

        private PrivateEndpointServiceConnectionStatus(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static PrivateEndpointServiceConnectionStatus Pending { get; } = new PrivateEndpointServiceConnectionStatus("Pending");
        public static PrivateEndpointServiceConnectionStatus Approved { get; } = new PrivateEndpointServiceConnectionStatus("Approved");
        public static PrivateEndpointServiceConnectionStatus Rejected { get; } = new PrivateEndpointServiceConnectionStatus("Rejected");

        public static bool operator ==(PrivateEndpointServiceConnectionStatus left, PrivateEndpointServiceConnectionStatus right) => left.Equals(right);
        public static bool operator !=(PrivateEndpointServiceConnectionStatus left, PrivateEndpointServiceConnectionStatus right) => !left.Equals(right);

        public static explicit operator string(PrivateEndpointServiceConnectionStatus value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is PrivateEndpointServiceConnectionStatus other && Equals(other);
        public bool Equals(PrivateEndpointServiceConnectionStatus other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Specifies whether data in the container may be accessed publicly and the level of access.
    /// </summary>
    [EnumType]
    public readonly struct PublicAccess : IEquatable<PublicAccess>
    {
        private readonly string _value;

        private PublicAccess(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static PublicAccess Container { get; } = new PublicAccess("Container");
        public static PublicAccess Blob { get; } = new PublicAccess("Blob");
        public static PublicAccess None { get; } = new PublicAccess("None");

        public static bool operator ==(PublicAccess left, PublicAccess right) => left.Equals(right);
        public static bool operator !=(PublicAccess left, PublicAccess right) => !left.Equals(right);

        public static explicit operator string(PublicAccess value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is PublicAccess other && Equals(other);
        public bool Equals(PublicAccess other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The property is for NFS share only. The default is NoRootSquash.
    /// </summary>
    [EnumType]
    public readonly struct RootSquashType : IEquatable<RootSquashType>
    {
        private readonly string _value;

        private RootSquashType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static RootSquashType NoRootSquash { get; } = new RootSquashType("NoRootSquash");
        public static RootSquashType RootSquash { get; } = new RootSquashType("RootSquash");
        public static RootSquashType AllSquash { get; } = new RootSquashType("AllSquash");

        public static bool operator ==(RootSquashType left, RootSquashType right) => left.Equals(right);
        public static bool operator !=(RootSquashType left, RootSquashType right) => !left.Equals(right);

        public static explicit operator string(RootSquashType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is RootSquashType other && Equals(other);
        public bool Equals(RootSquashType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Routing Choice defines the kind of network routing opted by the user.
    /// </summary>
    [EnumType]
    public readonly struct RoutingChoice : IEquatable<RoutingChoice>
    {
        private readonly string _value;

        private RoutingChoice(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static RoutingChoice MicrosoftRouting { get; } = new RoutingChoice("MicrosoftRouting");
        public static RoutingChoice InternetRouting { get; } = new RoutingChoice("InternetRouting");

        public static bool operator ==(RoutingChoice left, RoutingChoice right) => left.Equals(right);
        public static bool operator !=(RoutingChoice left, RoutingChoice right) => !left.Equals(right);

        public static explicit operator string(RoutingChoice value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is RoutingChoice other && Equals(other);
        public bool Equals(RoutingChoice other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The valid value is Lifecycle
    /// </summary>
    [EnumType]
    public readonly struct RuleType : IEquatable<RuleType>
    {
        private readonly string _value;

        private RuleType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static RuleType Lifecycle { get; } = new RuleType("Lifecycle");

        public static bool operator ==(RuleType left, RuleType right) => left.Equals(right);
        public static bool operator !=(RuleType left, RuleType right) => !left.Equals(right);

        public static explicit operator string(RuleType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is RuleType other && Equals(other);
        public bool Equals(RuleType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Access tier for specific share. GpV2 account can choose between TransactionOptimized (default), Hot, and Cool. FileStorage account can choose Premium.
    /// </summary>
    [EnumType]
    public readonly struct ShareAccessTier : IEquatable<ShareAccessTier>
    {
        private readonly string _value;

        private ShareAccessTier(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ShareAccessTier TransactionOptimized { get; } = new ShareAccessTier("TransactionOptimized");
        public static ShareAccessTier Hot { get; } = new ShareAccessTier("Hot");
        public static ShareAccessTier Cool { get; } = new ShareAccessTier("Cool");
        public static ShareAccessTier Premium { get; } = new ShareAccessTier("Premium");

        public static bool operator ==(ShareAccessTier left, ShareAccessTier right) => left.Equals(right);
        public static bool operator !=(ShareAccessTier left, ShareAccessTier right) => !left.Equals(right);

        public static explicit operator string(ShareAccessTier value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ShareAccessTier other && Equals(other);
        public bool Equals(ShareAccessTier other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The SKU name. Required for account creation; optional for update. Note that in older versions, SKU name was called accountType.
    /// </summary>
    [EnumType]
    public readonly struct SkuName : IEquatable<SkuName>
    {
        private readonly string _value;

        private SkuName(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static SkuName Standard_LRS { get; } = new SkuName("Standard_LRS");
        public static SkuName Standard_GRS { get; } = new SkuName("Standard_GRS");
        public static SkuName Standard_RAGRS { get; } = new SkuName("Standard_RAGRS");
        public static SkuName Standard_ZRS { get; } = new SkuName("Standard_ZRS");
        public static SkuName Premium_LRS { get; } = new SkuName("Premium_LRS");
        public static SkuName Premium_ZRS { get; } = new SkuName("Premium_ZRS");
        public static SkuName Standard_GZRS { get; } = new SkuName("Standard_GZRS");
        public static SkuName Standard_RAGZRS { get; } = new SkuName("Standard_RAGZRS");

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
    /// Gets the state of virtual network rule.
    /// </summary>
    [EnumType]
    public readonly struct State : IEquatable<State>
    {
        private readonly string _value;

        private State(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static State Provisioning { get; } = new State("provisioning");
        public static State Deprovisioning { get; } = new State("deprovisioning");
        public static State Succeeded { get; } = new State("succeeded");
        public static State Failed { get; } = new State("failed");
        public static State NetworkSourceDeleted { get; } = new State("networkSourceDeleted");

        public static bool operator ==(State left, State right) => left.Equals(right);
        public static bool operator !=(State left, State right) => !left.Equals(right);

        public static explicit operator string(State value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is State other && Equals(other);
        public bool Equals(State other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}
