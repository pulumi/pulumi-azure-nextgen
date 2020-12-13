// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.Marketplace.Latest
{
    /// <summary>
    /// Plan accessibility
    /// </summary>
    [EnumType]
    public readonly struct Accessibility : IEquatable<Accessibility>
    {
        private readonly string _value;

        private Accessibility(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static Accessibility Unknown { get; } = new Accessibility("Unknown");
        public static Accessibility Public { get; } = new Accessibility("Public");
        public static Accessibility PrivateTenantOnLevel { get; } = new Accessibility("PrivateTenantOnLevel");
        public static Accessibility PrivateSubscriptionOnLevel { get; } = new Accessibility("PrivateSubscriptionOnLevel");

        public static bool operator ==(Accessibility left, Accessibility right) => left.Equals(right);
        public static bool operator !=(Accessibility left, Accessibility right) => !left.Equals(right);

        public static explicit operator string(Accessibility value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is Accessibility other && Equals(other);
        public bool Equals(Accessibility other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Indicates private store availability
    /// </summary>
    [EnumType]
    public readonly struct Availability : IEquatable<Availability>
    {
        private readonly string _value;

        private Availability(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static Availability Enabled { get; } = new Availability("enabled");
        public static Availability Disabled { get; } = new Availability("disabled");

        public static bool operator ==(Availability left, Availability right) => left.Equals(right);
        public static bool operator !=(Availability left, Availability right) => !left.Equals(right);

        public static explicit operator string(Availability value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is Availability other && Equals(other);
        public bool Equals(Availability other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}
