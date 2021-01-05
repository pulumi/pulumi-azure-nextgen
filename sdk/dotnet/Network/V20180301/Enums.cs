// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.Network.V20180301
{
    /// <summary>
    /// The monitoring status of the endpoint.
    /// </summary>
    [EnumType]
    public readonly struct EndpointMonitorStatus : IEquatable<EndpointMonitorStatus>
    {
        private readonly string _value;

        private EndpointMonitorStatus(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static EndpointMonitorStatus CheckingEndpoint { get; } = new EndpointMonitorStatus("CheckingEndpoint");
        public static EndpointMonitorStatus Online { get; } = new EndpointMonitorStatus("Online");
        public static EndpointMonitorStatus Degraded { get; } = new EndpointMonitorStatus("Degraded");
        public static EndpointMonitorStatus Disabled { get; } = new EndpointMonitorStatus("Disabled");
        public static EndpointMonitorStatus Inactive { get; } = new EndpointMonitorStatus("Inactive");
        public static EndpointMonitorStatus Stopped { get; } = new EndpointMonitorStatus("Stopped");

        public static bool operator ==(EndpointMonitorStatus left, EndpointMonitorStatus right) => left.Equals(right);
        public static bool operator !=(EndpointMonitorStatus left, EndpointMonitorStatus right) => !left.Equals(right);

        public static explicit operator string(EndpointMonitorStatus value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is EndpointMonitorStatus other && Equals(other);
        public bool Equals(EndpointMonitorStatus other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The status of the endpoint. If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method.
    /// </summary>
    [EnumType]
    public readonly struct EndpointStatus : IEquatable<EndpointStatus>
    {
        private readonly string _value;

        private EndpointStatus(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static EndpointStatus Enabled { get; } = new EndpointStatus("Enabled");
        public static EndpointStatus Disabled { get; } = new EndpointStatus("Disabled");

        public static bool operator ==(EndpointStatus left, EndpointStatus right) => left.Equals(right);
        public static bool operator !=(EndpointStatus left, EndpointStatus right) => !left.Equals(right);

        public static explicit operator string(EndpointStatus value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is EndpointStatus other && Equals(other);
        public bool Equals(EndpointStatus other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The protocol (HTTP, HTTPS or TCP) used to probe for endpoint health.
    /// </summary>
    [EnumType]
    public readonly struct MonitorProtocol : IEquatable<MonitorProtocol>
    {
        private readonly string _value;

        private MonitorProtocol(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static MonitorProtocol HTTP { get; } = new MonitorProtocol("HTTP");
        public static MonitorProtocol HTTPS { get; } = new MonitorProtocol("HTTPS");
        public static MonitorProtocol TCP { get; } = new MonitorProtocol("TCP");

        public static bool operator ==(MonitorProtocol left, MonitorProtocol right) => left.Equals(right);
        public static bool operator !=(MonitorProtocol left, MonitorProtocol right) => !left.Equals(right);

        public static explicit operator string(MonitorProtocol value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is MonitorProtocol other && Equals(other);
        public bool Equals(MonitorProtocol other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The profile-level monitoring status of the Traffic Manager profile.
    /// </summary>
    [EnumType]
    public readonly struct ProfileMonitorStatus : IEquatable<ProfileMonitorStatus>
    {
        private readonly string _value;

        private ProfileMonitorStatus(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ProfileMonitorStatus CheckingEndpoints { get; } = new ProfileMonitorStatus("CheckingEndpoints");
        public static ProfileMonitorStatus Online { get; } = new ProfileMonitorStatus("Online");
        public static ProfileMonitorStatus Degraded { get; } = new ProfileMonitorStatus("Degraded");
        public static ProfileMonitorStatus Disabled { get; } = new ProfileMonitorStatus("Disabled");
        public static ProfileMonitorStatus Inactive { get; } = new ProfileMonitorStatus("Inactive");

        public static bool operator ==(ProfileMonitorStatus left, ProfileMonitorStatus right) => left.Equals(right);
        public static bool operator !=(ProfileMonitorStatus left, ProfileMonitorStatus right) => !left.Equals(right);

        public static explicit operator string(ProfileMonitorStatus value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ProfileMonitorStatus other && Equals(other);
        public bool Equals(ProfileMonitorStatus other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The status of the Traffic Manager profile.
    /// </summary>
    [EnumType]
    public readonly struct ProfileStatus : IEquatable<ProfileStatus>
    {
        private readonly string _value;

        private ProfileStatus(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ProfileStatus Enabled { get; } = new ProfileStatus("Enabled");
        public static ProfileStatus Disabled { get; } = new ProfileStatus("Disabled");

        public static bool operator ==(ProfileStatus left, ProfileStatus right) => left.Equals(right);
        public static bool operator !=(ProfileStatus left, ProfileStatus right) => !left.Equals(right);

        public static explicit operator string(ProfileStatus value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ProfileStatus other && Equals(other);
        public bool Equals(ProfileStatus other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The traffic routing method of the Traffic Manager profile.
    /// </summary>
    [EnumType]
    public readonly struct TrafficRoutingMethod : IEquatable<TrafficRoutingMethod>
    {
        private readonly string _value;

        private TrafficRoutingMethod(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static TrafficRoutingMethod Performance { get; } = new TrafficRoutingMethod("Performance");
        public static TrafficRoutingMethod Priority { get; } = new TrafficRoutingMethod("Priority");
        public static TrafficRoutingMethod Weighted { get; } = new TrafficRoutingMethod("Weighted");
        public static TrafficRoutingMethod Geographic { get; } = new TrafficRoutingMethod("Geographic");

        public static bool operator ==(TrafficRoutingMethod left, TrafficRoutingMethod right) => left.Equals(right);
        public static bool operator !=(TrafficRoutingMethod left, TrafficRoutingMethod right) => !left.Equals(right);

        public static explicit operator string(TrafficRoutingMethod value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is TrafficRoutingMethod other && Equals(other);
        public bool Equals(TrafficRoutingMethod other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Indicates whether Traffic View is 'Enabled' or 'Disabled' for the Traffic Manager profile. Null, indicates 'Disabled'. Enabling this feature will increase the cost of the Traffic Manage profile.
    /// </summary>
    [EnumType]
    public readonly struct TrafficViewEnrollmentStatus : IEquatable<TrafficViewEnrollmentStatus>
    {
        private readonly string _value;

        private TrafficViewEnrollmentStatus(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static TrafficViewEnrollmentStatus Enabled { get; } = new TrafficViewEnrollmentStatus("Enabled");
        public static TrafficViewEnrollmentStatus Disabled { get; } = new TrafficViewEnrollmentStatus("Disabled");

        public static bool operator ==(TrafficViewEnrollmentStatus left, TrafficViewEnrollmentStatus right) => left.Equals(right);
        public static bool operator !=(TrafficViewEnrollmentStatus left, TrafficViewEnrollmentStatus right) => !left.Equals(right);

        public static explicit operator string(TrafficViewEnrollmentStatus value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is TrafficViewEnrollmentStatus other && Equals(other);
        public bool Equals(TrafficViewEnrollmentStatus other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}