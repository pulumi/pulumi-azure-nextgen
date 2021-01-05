// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.ManagedNetwork.V20190601Preview
{
    /// <summary>
    /// Responsibility role under which this Managed Network Group will be created
    /// </summary>
    [EnumType]
    public readonly struct Kind : IEquatable<Kind>
    {
        private readonly string _value;

        private Kind(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static Kind Connectivity { get; } = new Kind("Connectivity");

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
    /// Gets or sets the connectivity type of a network structure policy
    /// </summary>
    [EnumType]
    public readonly struct Type : IEquatable<Type>
    {
        private readonly string _value;

        private Type(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static Type HubAndSpokeTopology { get; } = new Type("HubAndSpokeTopology");
        public static Type MeshTopology { get; } = new Type("MeshTopology");

        public static bool operator ==(Type left, Type right) => left.Equals(right);
        public static bool operator !=(Type left, Type right) => !left.Equals(right);

        public static explicit operator string(Type value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is Type other && Equals(other);
        public bool Equals(Type other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}