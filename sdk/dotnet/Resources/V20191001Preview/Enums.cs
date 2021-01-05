// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.Resources.V20191001Preview
{
    /// <summary>
    /// Type of the managed identity.
    /// </summary>
    [EnumType]
    public readonly struct ManagedServiceIdentityType : IEquatable<ManagedServiceIdentityType>
    {
        private readonly string _value;

        private ManagedServiceIdentityType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ManagedServiceIdentityType UserAssigned { get; } = new ManagedServiceIdentityType("UserAssigned");

        public static bool operator ==(ManagedServiceIdentityType left, ManagedServiceIdentityType right) => left.Equals(right);
        public static bool operator !=(ManagedServiceIdentityType left, ManagedServiceIdentityType right) => !left.Equals(right);

        public static explicit operator string(ManagedServiceIdentityType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ManagedServiceIdentityType other && Equals(other);
        public bool Equals(ManagedServiceIdentityType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Type of the script.
    /// </summary>
    [EnumType]
    public readonly struct ScriptType : IEquatable<ScriptType>
    {
        private readonly string _value;

        private ScriptType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ScriptType AzurePowerShell { get; } = new ScriptType("AzurePowerShell");
        public static ScriptType AzureCLI { get; } = new ScriptType("AzureCLI");

        public static bool operator ==(ScriptType left, ScriptType right) => left.Equals(right);
        public static bool operator !=(ScriptType left, ScriptType right) => !left.Equals(right);

        public static explicit operator string(ScriptType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ScriptType other && Equals(other);
        public bool Equals(ScriptType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}