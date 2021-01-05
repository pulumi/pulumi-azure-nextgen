// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.Devices.Latest
{
    /// <summary>
    /// The permissions assigned to the shared access policy.
    /// </summary>
    [EnumType]
    public readonly struct AccessRights : IEquatable<AccessRights>
    {
        private readonly string _value;

        private AccessRights(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static AccessRights RegistryRead { get; } = new AccessRights("RegistryRead");
        public static AccessRights RegistryWrite { get; } = new AccessRights("RegistryWrite");
        public static AccessRights ServiceConnect { get; } = new AccessRights("ServiceConnect");
        public static AccessRights DeviceConnect { get; } = new AccessRights("DeviceConnect");
        public static AccessRights RegistryRead_RegistryWrite { get; } = new AccessRights("RegistryRead, RegistryWrite");
        public static AccessRights RegistryRead_ServiceConnect { get; } = new AccessRights("RegistryRead, ServiceConnect");
        public static AccessRights RegistryRead_DeviceConnect { get; } = new AccessRights("RegistryRead, DeviceConnect");
        public static AccessRights RegistryWrite_ServiceConnect { get; } = new AccessRights("RegistryWrite, ServiceConnect");
        public static AccessRights RegistryWrite_DeviceConnect { get; } = new AccessRights("RegistryWrite, DeviceConnect");
        public static AccessRights ServiceConnect_DeviceConnect { get; } = new AccessRights("ServiceConnect, DeviceConnect");
        public static AccessRights RegistryRead_RegistryWrite_ServiceConnect { get; } = new AccessRights("RegistryRead, RegistryWrite, ServiceConnect");
        public static AccessRights RegistryRead_RegistryWrite_DeviceConnect { get; } = new AccessRights("RegistryRead, RegistryWrite, DeviceConnect");
        public static AccessRights RegistryRead_ServiceConnect_DeviceConnect { get; } = new AccessRights("RegistryRead, ServiceConnect, DeviceConnect");
        public static AccessRights RegistryWrite_ServiceConnect_DeviceConnect { get; } = new AccessRights("RegistryWrite, ServiceConnect, DeviceConnect");
        public static AccessRights RegistryRead_RegistryWrite_ServiceConnect_DeviceConnect { get; } = new AccessRights("RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect");

        public static bool operator ==(AccessRights left, AccessRights right) => left.Equals(right);
        public static bool operator !=(AccessRights left, AccessRights right) => !left.Equals(right);

        public static explicit operator string(AccessRights value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is AccessRights other && Equals(other);
        public bool Equals(AccessRights other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Rights that this key has.
    /// </summary>
    [EnumType]
    public readonly struct AccessRightsDescription : IEquatable<AccessRightsDescription>
    {
        private readonly string _value;

        private AccessRightsDescription(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static AccessRightsDescription ServiceConfig { get; } = new AccessRightsDescription("ServiceConfig");
        public static AccessRightsDescription EnrollmentRead { get; } = new AccessRightsDescription("EnrollmentRead");
        public static AccessRightsDescription EnrollmentWrite { get; } = new AccessRightsDescription("EnrollmentWrite");
        public static AccessRightsDescription DeviceConnect { get; } = new AccessRightsDescription("DeviceConnect");
        public static AccessRightsDescription RegistrationStatusRead { get; } = new AccessRightsDescription("RegistrationStatusRead");
        public static AccessRightsDescription RegistrationStatusWrite { get; } = new AccessRightsDescription("RegistrationStatusWrite");

        public static bool operator ==(AccessRightsDescription left, AccessRightsDescription right) => left.Equals(right);
        public static bool operator !=(AccessRightsDescription left, AccessRightsDescription right) => !left.Equals(right);

        public static explicit operator string(AccessRightsDescription value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is AccessRightsDescription other && Equals(other);
        public bool Equals(AccessRightsDescription other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Allocation policy to be used by this provisioning service.
    /// </summary>
    [EnumType]
    public readonly struct AllocationPolicy : IEquatable<AllocationPolicy>
    {
        private readonly string _value;

        private AllocationPolicy(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static AllocationPolicy Hashed { get; } = new AllocationPolicy("Hashed");
        public static AllocationPolicy GeoLatency { get; } = new AllocationPolicy("GeoLatency");
        public static AllocationPolicy Static { get; } = new AllocationPolicy("Static");

        public static bool operator ==(AllocationPolicy left, AllocationPolicy right) => left.Equals(right);
        public static bool operator !=(AllocationPolicy left, AllocationPolicy right) => !left.Equals(right);

        public static explicit operator string(AllocationPolicy value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is AllocationPolicy other && Equals(other);
        public bool Equals(AllocationPolicy other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Specifies authentication type being used for connecting to the storage account.
    /// </summary>
    [EnumType]
    public readonly struct AuthenticationType : IEquatable<AuthenticationType>
    {
        private readonly string _value;

        private AuthenticationType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static AuthenticationType KeyBased { get; } = new AuthenticationType("keyBased");
        public static AuthenticationType IdentityBased { get; } = new AuthenticationType("identityBased");

        public static bool operator ==(AuthenticationType left, AuthenticationType right) => left.Equals(right);
        public static bool operator !=(AuthenticationType left, AuthenticationType right) => !left.Equals(right);

        public static explicit operator string(AuthenticationType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is AuthenticationType other && Equals(other);
        public bool Equals(AuthenticationType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The capabilities and features enabled for the IoT hub.
    /// </summary>
    [EnumType]
    public readonly struct Capabilities : IEquatable<Capabilities>
    {
        private readonly string _value;

        private Capabilities(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static Capabilities None { get; } = new Capabilities("None");
        public static Capabilities DeviceManagement { get; } = new Capabilities("DeviceManagement");

        public static bool operator ==(Capabilities left, Capabilities right) => left.Equals(right);
        public static bool operator !=(Capabilities left, Capabilities right) => !left.Equals(right);

        public static explicit operator string(Capabilities value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is Capabilities other && Equals(other);
        public bool Equals(Capabilities other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Sku name.
    /// </summary>
    [EnumType]
    public readonly struct IotDpsSku : IEquatable<IotDpsSku>
    {
        private readonly string _value;

        private IotDpsSku(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static IotDpsSku S1 { get; } = new IotDpsSku("S1");

        public static bool operator ==(IotDpsSku left, IotDpsSku right) => left.Equals(right);
        public static bool operator !=(IotDpsSku left, IotDpsSku right) => !left.Equals(right);

        public static explicit operator string(IotDpsSku value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is IotDpsSku other && Equals(other);
        public bool Equals(IotDpsSku other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The name of the SKU.
    /// </summary>
    [EnumType]
    public readonly struct IotHubSku : IEquatable<IotHubSku>
    {
        private readonly string _value;

        private IotHubSku(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static IotHubSku F1 { get; } = new IotHubSku("F1");
        public static IotHubSku S1 { get; } = new IotHubSku("S1");
        public static IotHubSku S2 { get; } = new IotHubSku("S2");
        public static IotHubSku S3 { get; } = new IotHubSku("S3");
        public static IotHubSku B1 { get; } = new IotHubSku("B1");
        public static IotHubSku B2 { get; } = new IotHubSku("B2");
        public static IotHubSku B3 { get; } = new IotHubSku("B3");

        public static bool operator ==(IotHubSku left, IotHubSku right) => left.Equals(right);
        public static bool operator !=(IotHubSku left, IotHubSku right) => !left.Equals(right);

        public static explicit operator string(IotHubSku value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is IotHubSku other && Equals(other);
        public bool Equals(IotHubSku other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The desired action for requests captured by this rule.
    /// </summary>
    [EnumType]
    public readonly struct IpFilterActionType : IEquatable<IpFilterActionType>
    {
        private readonly string _value;

        private IpFilterActionType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static IpFilterActionType Accept { get; } = new IpFilterActionType("Accept");
        public static IpFilterActionType Reject { get; } = new IpFilterActionType("Reject");

        public static bool operator ==(IpFilterActionType left, IpFilterActionType right) => left.Equals(right);
        public static bool operator !=(IpFilterActionType left, IpFilterActionType right) => !left.Equals(right);

        public static explicit operator string(IpFilterActionType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is IpFilterActionType other && Equals(other);
        public bool Equals(IpFilterActionType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Target for requests captured by this rule.
    /// </summary>
    [EnumType]
    public readonly struct IpFilterTargetType : IEquatable<IpFilterTargetType>
    {
        private readonly string _value;

        private IpFilterTargetType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static IpFilterTargetType All { get; } = new IpFilterTargetType("all");
        public static IpFilterTargetType ServiceApi { get; } = new IpFilterTargetType("serviceApi");
        public static IpFilterTargetType DeviceApi { get; } = new IpFilterTargetType("deviceApi");

        public static bool operator ==(IpFilterTargetType left, IpFilterTargetType right) => left.Equals(right);
        public static bool operator !=(IpFilterTargetType left, IpFilterTargetType right) => !left.Equals(right);

        public static explicit operator string(IpFilterTargetType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is IpFilterTargetType other && Equals(other);
        public bool Equals(IpFilterTargetType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The status of a private endpoint connection
    /// </summary>
    [EnumType]
    public readonly struct PrivateLinkServiceConnectionStatus : IEquatable<PrivateLinkServiceConnectionStatus>
    {
        private readonly string _value;

        private PrivateLinkServiceConnectionStatus(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static PrivateLinkServiceConnectionStatus Pending { get; } = new PrivateLinkServiceConnectionStatus("Pending");
        public static PrivateLinkServiceConnectionStatus Approved { get; } = new PrivateLinkServiceConnectionStatus("Approved");
        public static PrivateLinkServiceConnectionStatus Rejected { get; } = new PrivateLinkServiceConnectionStatus("Rejected");
        public static PrivateLinkServiceConnectionStatus Disconnected { get; } = new PrivateLinkServiceConnectionStatus("Disconnected");

        public static bool operator ==(PrivateLinkServiceConnectionStatus left, PrivateLinkServiceConnectionStatus right) => left.Equals(right);
        public static bool operator !=(PrivateLinkServiceConnectionStatus left, PrivateLinkServiceConnectionStatus right) => !left.Equals(right);

        public static explicit operator string(PrivateLinkServiceConnectionStatus value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is PrivateLinkServiceConnectionStatus other && Equals(other);
        public bool Equals(PrivateLinkServiceConnectionStatus other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Whether requests from Public Network are allowed
    /// </summary>
    [EnumType]
    public readonly struct PublicNetworkAccess : IEquatable<PublicNetworkAccess>
    {
        private readonly string _value;

        private PublicNetworkAccess(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static PublicNetworkAccess Enabled { get; } = new PublicNetworkAccess("Enabled");
        public static PublicNetworkAccess Disabled { get; } = new PublicNetworkAccess("Disabled");

        public static bool operator ==(PublicNetworkAccess left, PublicNetworkAccess right) => left.Equals(right);
        public static bool operator !=(PublicNetworkAccess left, PublicNetworkAccess right) => !left.Equals(right);

        public static explicit operator string(PublicNetworkAccess value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is PublicNetworkAccess other && Equals(other);
        public bool Equals(PublicNetworkAccess other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The source that the routing rule is to be applied to, such as DeviceMessages.
    /// </summary>
    [EnumType]
    public readonly struct RoutingSource : IEquatable<RoutingSource>
    {
        private readonly string _value;

        private RoutingSource(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static RoutingSource Invalid { get; } = new RoutingSource("Invalid");
        public static RoutingSource DeviceMessages { get; } = new RoutingSource("DeviceMessages");
        public static RoutingSource TwinChangeEvents { get; } = new RoutingSource("TwinChangeEvents");
        public static RoutingSource DeviceLifecycleEvents { get; } = new RoutingSource("DeviceLifecycleEvents");
        public static RoutingSource DeviceJobLifecycleEvents { get; } = new RoutingSource("DeviceJobLifecycleEvents");

        public static bool operator ==(RoutingSource left, RoutingSource right) => left.Equals(right);
        public static bool operator !=(RoutingSource left, RoutingSource right) => !left.Equals(right);

        public static explicit operator string(RoutingSource value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is RoutingSource other && Equals(other);
        public bool Equals(RoutingSource other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Current state of the provisioning service.
    /// </summary>
    [EnumType]
    public readonly struct State : IEquatable<State>
    {
        private readonly string _value;

        private State(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static State Activating { get; } = new State("Activating");
        public static State Active { get; } = new State("Active");
        public static State Deleting { get; } = new State("Deleting");
        public static State Deleted { get; } = new State("Deleted");
        public static State ActivationFailed { get; } = new State("ActivationFailed");
        public static State DeletionFailed { get; } = new State("DeletionFailed");
        public static State Transitioning { get; } = new State("Transitioning");
        public static State Suspending { get; } = new State("Suspending");
        public static State Suspended { get; } = new State("Suspended");
        public static State Resuming { get; } = new State("Resuming");
        public static State FailingOver { get; } = new State("FailingOver");
        public static State FailoverFailed { get; } = new State("FailoverFailed");

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