// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.Network.V20190501
{
    /// <summary>
    /// Whether to enable use of this backend. Permitted values are 'Enabled' or 'Disabled'
    /// </summary>
    [EnumType]
    public readonly struct BackendEnabledState : IEquatable<BackendEnabledState>
    {
        private readonly string _value;

        private BackendEnabledState(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static BackendEnabledState Enabled { get; } = new BackendEnabledState("Enabled");
        public static BackendEnabledState Disabled { get; } = new BackendEnabledState("Disabled");

        public static bool operator ==(BackendEnabledState left, BackendEnabledState right) => left.Equals(right);
        public static bool operator !=(BackendEnabledState left, BackendEnabledState right) => !left.Equals(right);

        public static explicit operator string(BackendEnabledState value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is BackendEnabledState other && Equals(other);
        public bool Equals(BackendEnabledState other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Whether to use dynamic compression for cached content
    /// </summary>
    [EnumType]
    public readonly struct DynamicCompressionEnabled : IEquatable<DynamicCompressionEnabled>
    {
        private readonly string _value;

        private DynamicCompressionEnabled(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static DynamicCompressionEnabled Enabled { get; } = new DynamicCompressionEnabled("Enabled");
        public static DynamicCompressionEnabled Disabled { get; } = new DynamicCompressionEnabled("Disabled");

        public static bool operator ==(DynamicCompressionEnabled left, DynamicCompressionEnabled right) => left.Equals(right);
        public static bool operator !=(DynamicCompressionEnabled left, DynamicCompressionEnabled right) => !left.Equals(right);

        public static explicit operator string(DynamicCompressionEnabled value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is DynamicCompressionEnabled other && Equals(other);
        public bool Equals(DynamicCompressionEnabled other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Whether to enforce certificate name check on HTTPS requests to all backend pools. No effect on non-HTTPS requests.
    /// </summary>
    [EnumType]
    public readonly struct EnforceCertificateNameCheckEnabledState : IEquatable<EnforceCertificateNameCheckEnabledState>
    {
        private readonly string _value;

        private EnforceCertificateNameCheckEnabledState(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static EnforceCertificateNameCheckEnabledState Enabled { get; } = new EnforceCertificateNameCheckEnabledState("Enabled");
        public static EnforceCertificateNameCheckEnabledState Disabled { get; } = new EnforceCertificateNameCheckEnabledState("Disabled");

        public static bool operator ==(EnforceCertificateNameCheckEnabledState left, EnforceCertificateNameCheckEnabledState right) => left.Equals(right);
        public static bool operator !=(EnforceCertificateNameCheckEnabledState left, EnforceCertificateNameCheckEnabledState right) => !left.Equals(right);

        public static explicit operator string(EnforceCertificateNameCheckEnabledState value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is EnforceCertificateNameCheckEnabledState other && Equals(other);
        public bool Equals(EnforceCertificateNameCheckEnabledState other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Operational status of the Front Door load balancer. Permitted values are 'Enabled' or 'Disabled'
    /// </summary>
    [EnumType]
    public readonly struct FrontDoorEnabledState : IEquatable<FrontDoorEnabledState>
    {
        private readonly string _value;

        private FrontDoorEnabledState(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static FrontDoorEnabledState Enabled { get; } = new FrontDoorEnabledState("Enabled");
        public static FrontDoorEnabledState Disabled { get; } = new FrontDoorEnabledState("Disabled");

        public static bool operator ==(FrontDoorEnabledState left, FrontDoorEnabledState right) => left.Equals(right);
        public static bool operator !=(FrontDoorEnabledState left, FrontDoorEnabledState right) => !left.Equals(right);

        public static explicit operator string(FrontDoorEnabledState value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is FrontDoorEnabledState other && Equals(other);
        public bool Equals(FrontDoorEnabledState other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Protocol this rule will use when forwarding traffic to backends.
    /// </summary>
    [EnumType]
    public readonly struct FrontDoorForwardingProtocol : IEquatable<FrontDoorForwardingProtocol>
    {
        private readonly string _value;

        private FrontDoorForwardingProtocol(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static FrontDoorForwardingProtocol HttpOnly { get; } = new FrontDoorForwardingProtocol("HttpOnly");
        public static FrontDoorForwardingProtocol HttpsOnly { get; } = new FrontDoorForwardingProtocol("HttpsOnly");
        public static FrontDoorForwardingProtocol MatchRequest { get; } = new FrontDoorForwardingProtocol("MatchRequest");

        public static bool operator ==(FrontDoorForwardingProtocol left, FrontDoorForwardingProtocol right) => left.Equals(right);
        public static bool operator !=(FrontDoorForwardingProtocol left, FrontDoorForwardingProtocol right) => !left.Equals(right);

        public static explicit operator string(FrontDoorForwardingProtocol value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is FrontDoorForwardingProtocol other && Equals(other);
        public bool Equals(FrontDoorForwardingProtocol other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Configures which HTTP method to use to probe the backends defined under backendPools.
    /// </summary>
    [EnumType]
    public readonly struct FrontDoorHealthProbeMethod : IEquatable<FrontDoorHealthProbeMethod>
    {
        private readonly string _value;

        private FrontDoorHealthProbeMethod(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static FrontDoorHealthProbeMethod GET { get; } = new FrontDoorHealthProbeMethod("GET");
        public static FrontDoorHealthProbeMethod HEAD { get; } = new FrontDoorHealthProbeMethod("HEAD");

        public static bool operator ==(FrontDoorHealthProbeMethod left, FrontDoorHealthProbeMethod right) => left.Equals(right);
        public static bool operator !=(FrontDoorHealthProbeMethod left, FrontDoorHealthProbeMethod right) => !left.Equals(right);

        public static explicit operator string(FrontDoorHealthProbeMethod value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is FrontDoorHealthProbeMethod other && Equals(other);
        public bool Equals(FrontDoorHealthProbeMethod other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Accepted protocol schemes.
    /// </summary>
    [EnumType]
    public readonly struct FrontDoorProtocol : IEquatable<FrontDoorProtocol>
    {
        private readonly string _value;

        private FrontDoorProtocol(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static FrontDoorProtocol Http { get; } = new FrontDoorProtocol("Http");
        public static FrontDoorProtocol Https { get; } = new FrontDoorProtocol("Https");

        public static bool operator ==(FrontDoorProtocol left, FrontDoorProtocol right) => left.Equals(right);
        public static bool operator !=(FrontDoorProtocol left, FrontDoorProtocol right) => !left.Equals(right);

        public static explicit operator string(FrontDoorProtocol value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is FrontDoorProtocol other && Equals(other);
        public bool Equals(FrontDoorProtocol other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Treatment of URL query terms when forming the cache key.
    /// </summary>
    [EnumType]
    public readonly struct FrontDoorQuery : IEquatable<FrontDoorQuery>
    {
        private readonly string _value;

        private FrontDoorQuery(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static FrontDoorQuery StripNone { get; } = new FrontDoorQuery("StripNone");
        public static FrontDoorQuery StripAll { get; } = new FrontDoorQuery("StripAll");

        public static bool operator ==(FrontDoorQuery left, FrontDoorQuery right) => left.Equals(right);
        public static bool operator !=(FrontDoorQuery left, FrontDoorQuery right) => !left.Equals(right);

        public static explicit operator string(FrontDoorQuery value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is FrontDoorQuery other && Equals(other);
        public bool Equals(FrontDoorQuery other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The protocol of the destination to where the traffic is redirected
    /// </summary>
    [EnumType]
    public readonly struct FrontDoorRedirectProtocol : IEquatable<FrontDoorRedirectProtocol>
    {
        private readonly string _value;

        private FrontDoorRedirectProtocol(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static FrontDoorRedirectProtocol HttpOnly { get; } = new FrontDoorRedirectProtocol("HttpOnly");
        public static FrontDoorRedirectProtocol HttpsOnly { get; } = new FrontDoorRedirectProtocol("HttpsOnly");
        public static FrontDoorRedirectProtocol MatchRequest { get; } = new FrontDoorRedirectProtocol("MatchRequest");

        public static bool operator ==(FrontDoorRedirectProtocol left, FrontDoorRedirectProtocol right) => left.Equals(right);
        public static bool operator !=(FrontDoorRedirectProtocol left, FrontDoorRedirectProtocol right) => !left.Equals(right);

        public static explicit operator string(FrontDoorRedirectProtocol value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is FrontDoorRedirectProtocol other && Equals(other);
        public bool Equals(FrontDoorRedirectProtocol other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The redirect type the rule will use when redirecting traffic.
    /// </summary>
    [EnumType]
    public readonly struct FrontDoorRedirectType : IEquatable<FrontDoorRedirectType>
    {
        private readonly string _value;

        private FrontDoorRedirectType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static FrontDoorRedirectType Moved { get; } = new FrontDoorRedirectType("Moved");
        public static FrontDoorRedirectType Found { get; } = new FrontDoorRedirectType("Found");
        public static FrontDoorRedirectType TemporaryRedirect { get; } = new FrontDoorRedirectType("TemporaryRedirect");
        public static FrontDoorRedirectType PermanentRedirect { get; } = new FrontDoorRedirectType("PermanentRedirect");

        public static bool operator ==(FrontDoorRedirectType left, FrontDoorRedirectType right) => left.Equals(right);
        public static bool operator !=(FrontDoorRedirectType left, FrontDoorRedirectType right) => !left.Equals(right);

        public static explicit operator string(FrontDoorRedirectType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is FrontDoorRedirectType other && Equals(other);
        public bool Equals(FrontDoorRedirectType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Whether to enable health probes to be made against backends defined under backendPools. Health probes can only be disabled if there is a single enabled backend in single enabled backend pool.
    /// </summary>
    [EnumType]
    public readonly struct HealthProbeEnabled : IEquatable<HealthProbeEnabled>
    {
        private readonly string _value;

        private HealthProbeEnabled(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static HealthProbeEnabled Enabled { get; } = new HealthProbeEnabled("Enabled");
        public static HealthProbeEnabled Disabled { get; } = new HealthProbeEnabled("Disabled");

        public static bool operator ==(HealthProbeEnabled left, HealthProbeEnabled right) => left.Equals(right);
        public static bool operator !=(HealthProbeEnabled left, HealthProbeEnabled right) => !left.Equals(right);

        public static explicit operator string(HealthProbeEnabled value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is HealthProbeEnabled other && Equals(other);
        public bool Equals(HealthProbeEnabled other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Whether to enable use of this rule. Permitted values are 'Enabled' or 'Disabled'
    /// </summary>
    [EnumType]
    public readonly struct RoutingRuleEnabledState : IEquatable<RoutingRuleEnabledState>
    {
        private readonly string _value;

        private RoutingRuleEnabledState(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static RoutingRuleEnabledState Enabled { get; } = new RoutingRuleEnabledState("Enabled");
        public static RoutingRuleEnabledState Disabled { get; } = new RoutingRuleEnabledState("Disabled");

        public static bool operator ==(RoutingRuleEnabledState left, RoutingRuleEnabledState right) => left.Equals(right);
        public static bool operator !=(RoutingRuleEnabledState left, RoutingRuleEnabledState right) => !left.Equals(right);

        public static explicit operator string(RoutingRuleEnabledState value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is RoutingRuleEnabledState other && Equals(other);
        public bool Equals(RoutingRuleEnabledState other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Whether to allow session affinity on this host. Valid options are 'Enabled' or 'Disabled'
    /// </summary>
    [EnumType]
    public readonly struct SessionAffinityEnabledState : IEquatable<SessionAffinityEnabledState>
    {
        private readonly string _value;

        private SessionAffinityEnabledState(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static SessionAffinityEnabledState Enabled { get; } = new SessionAffinityEnabledState("Enabled");
        public static SessionAffinityEnabledState Disabled { get; } = new SessionAffinityEnabledState("Disabled");

        public static bool operator ==(SessionAffinityEnabledState left, SessionAffinityEnabledState right) => left.Equals(right);
        public static bool operator !=(SessionAffinityEnabledState left, SessionAffinityEnabledState right) => !left.Equals(right);

        public static explicit operator string(SessionAffinityEnabledState value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is SessionAffinityEnabledState other && Equals(other);
        public bool Equals(SessionAffinityEnabledState other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}