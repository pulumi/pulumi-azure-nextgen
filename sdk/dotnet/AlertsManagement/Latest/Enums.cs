// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.AlertsManagement.Latest
{
    /// <summary>
    /// The alert rule state.
    /// </summary>
    [EnumType]
    public readonly struct AlertRuleState : IEquatable<AlertRuleState>
    {
        private readonly string _value;

        private AlertRuleState(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static AlertRuleState Enabled { get; } = new AlertRuleState("Enabled");
        public static AlertRuleState Disabled { get; } = new AlertRuleState("Disabled");

        public static bool operator ==(AlertRuleState left, AlertRuleState right) => left.Equals(right);
        public static bool operator !=(AlertRuleState left, AlertRuleState right) => !left.Equals(right);

        public static explicit operator string(AlertRuleState value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is AlertRuleState other && Equals(other);
        public bool Equals(AlertRuleState other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The alert rule severity.
    /// </summary>
    [EnumType]
    public readonly struct Severity : IEquatable<Severity>
    {
        private readonly string _value;

        private Severity(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static Severity Sev0 { get; } = new Severity("Sev0");
        public static Severity Sev1 { get; } = new Severity("Sev1");
        public static Severity Sev2 { get; } = new Severity("Sev2");
        public static Severity Sev3 { get; } = new Severity("Sev3");
        public static Severity Sev4 { get; } = new Severity("Sev4");

        public static bool operator ==(Severity left, Severity right) => left.Equals(right);
        public static bool operator !=(Severity left, Severity right) => !left.Equals(right);

        public static explicit operator string(Severity value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is Severity other && Equals(other);
        public bool Equals(Severity other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}
