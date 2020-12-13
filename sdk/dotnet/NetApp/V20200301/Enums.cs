// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.NetApp.V20200301
{
    /// <summary>
    /// Indicates whether the local volume is the source or destination for the Volume Replication
    /// </summary>
    [EnumType]
    public readonly struct EndpointType : IEquatable<EndpointType>
    {
        private readonly string _value;

        private EndpointType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static EndpointType Src { get; } = new EndpointType("src");
        public static EndpointType Dst { get; } = new EndpointType("dst");

        public static bool operator ==(EndpointType left, EndpointType right) => left.Equals(right);
        public static bool operator !=(EndpointType left, EndpointType right) => !left.Equals(right);

        public static explicit operator string(EndpointType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is EndpointType other && Equals(other);
        public bool Equals(EndpointType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Schedule
    /// </summary>
    [EnumType]
    public readonly struct ReplicationSchedule : IEquatable<ReplicationSchedule>
    {
        private readonly string _value;

        private ReplicationSchedule(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ReplicationSchedule _10minutely { get; } = new ReplicationSchedule("_10minutely");
        public static ReplicationSchedule Hourly { get; } = new ReplicationSchedule("hourly");
        public static ReplicationSchedule Daily { get; } = new ReplicationSchedule("daily");
        public static ReplicationSchedule Weekly { get; } = new ReplicationSchedule("weekly");
        public static ReplicationSchedule Monthly { get; } = new ReplicationSchedule("monthly");

        public static bool operator ==(ReplicationSchedule left, ReplicationSchedule right) => left.Equals(right);
        public static bool operator !=(ReplicationSchedule left, ReplicationSchedule right) => !left.Equals(right);

        public static explicit operator string(ReplicationSchedule value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ReplicationSchedule other && Equals(other);
        public bool Equals(ReplicationSchedule other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The service level of the file system
    /// </summary>
    [EnumType]
    public readonly struct ServiceLevel : IEquatable<ServiceLevel>
    {
        private readonly string _value;

        private ServiceLevel(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        /// <summary>
        /// Standard service level
        /// </summary>
        public static ServiceLevel Standard { get; } = new ServiceLevel("Standard");
        /// <summary>
        /// Premium service level
        /// </summary>
        public static ServiceLevel Premium { get; } = new ServiceLevel("Premium");
        /// <summary>
        /// Ultra service level
        /// </summary>
        public static ServiceLevel Ultra { get; } = new ServiceLevel("Ultra");

        public static bool operator ==(ServiceLevel left, ServiceLevel right) => left.Equals(right);
        public static bool operator !=(ServiceLevel left, ServiceLevel right) => !left.Equals(right);

        public static explicit operator string(ServiceLevel value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ServiceLevel other && Equals(other);
        public bool Equals(ServiceLevel other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}
