// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.AlertsManagement.V20200804Preview
{
    /// <summary>
    /// specifies the type of the alert criterion.
    /// </summary>
    [EnumType]
    public readonly struct HealthAlertsNamespace : IEquatable<HealthAlertsNamespace>
    {
        private readonly string _value;

        private HealthAlertsNamespace(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static HealthAlertsNamespace GuestVmHealth { get; } = new HealthAlertsNamespace("GuestVmHealth");

        public static bool operator ==(HealthAlertsNamespace left, HealthAlertsNamespace right) => left.Equals(right);
        public static bool operator !=(HealthAlertsNamespace left, HealthAlertsNamespace right) => !left.Equals(right);

        public static explicit operator string(HealthAlertsNamespace value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is HealthAlertsNamespace other && Equals(other);
        public bool Equals(HealthAlertsNamespace other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Health state name
    /// </summary>
    [EnumType]
    public readonly struct HealthStateName : IEquatable<HealthStateName>
    {
        private readonly string _value;

        private HealthStateName(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static HealthStateName Warning { get; } = new HealthStateName("Warning");
        public static HealthStateName Critical { get; } = new HealthStateName("Critical");

        public static bool operator ==(HealthStateName left, HealthStateName right) => left.Equals(right);
        public static bool operator !=(HealthStateName left, HealthStateName right) => !left.Equals(right);

        public static explicit operator string(HealthStateName value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is HealthStateName other && Equals(other);
        public bool Equals(HealthStateName other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}