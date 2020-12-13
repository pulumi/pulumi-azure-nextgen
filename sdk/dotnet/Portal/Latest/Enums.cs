// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.Portal.Latest
{
    /// <summary>
    /// Size of terminal font.
    /// </summary>
    [EnumType]
    public readonly struct FontSize : IEquatable<FontSize>
    {
        private readonly string _value;

        private FontSize(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static FontSize NotSpecified { get; } = new FontSize("NotSpecified");
        public static FontSize Small { get; } = new FontSize("Small");
        public static FontSize Medium { get; } = new FontSize("Medium");
        public static FontSize Large { get; } = new FontSize("Large");

        public static bool operator ==(FontSize left, FontSize right) => left.Equals(right);
        public static bool operator !=(FontSize left, FontSize right) => !left.Equals(right);

        public static explicit operator string(FontSize value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is FontSize other && Equals(other);
        public bool Equals(FontSize other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Style of terminal font.
    /// </summary>
    [EnumType]
    public readonly struct FontStyle : IEquatable<FontStyle>
    {
        private readonly string _value;

        private FontStyle(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static FontStyle NotSpecified { get; } = new FontStyle("NotSpecified");
        public static FontStyle Monospace { get; } = new FontStyle("Monospace");
        public static FontStyle Courier { get; } = new FontStyle("Courier");

        public static bool operator ==(FontStyle left, FontStyle right) => left.Equals(right);
        public static bool operator !=(FontStyle left, FontStyle right) => !left.Equals(right);

        public static explicit operator string(FontStyle value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is FontStyle other && Equals(other);
        public bool Equals(FontStyle other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The operating system type of the cloud shell. Deprecated, use preferredShellType.
    /// </summary>
    [EnumType]
    public readonly struct OsType : IEquatable<OsType>
    {
        private readonly string _value;

        private OsType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static OsType Windows { get; } = new OsType("Windows");
        public static OsType Linux { get; } = new OsType("Linux");

        public static bool operator ==(OsType left, OsType right) => left.Equals(right);
        public static bool operator !=(OsType left, OsType right) => !left.Equals(right);

        public static explicit operator string(OsType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is OsType other && Equals(other);
        public bool Equals(OsType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Provisioning state of the console.
    /// </summary>
    [EnumType]
    public readonly struct ProvisioningState : IEquatable<ProvisioningState>
    {
        private readonly string _value;

        private ProvisioningState(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ProvisioningState NotSpecified { get; } = new ProvisioningState("NotSpecified");
        public static ProvisioningState Accepted { get; } = new ProvisioningState("Accepted");
        public static ProvisioningState Pending { get; } = new ProvisioningState("Pending");
        public static ProvisioningState Updating { get; } = new ProvisioningState("Updating");
        public static ProvisioningState Creating { get; } = new ProvisioningState("Creating");
        public static ProvisioningState Repairing { get; } = new ProvisioningState("Repairing");
        public static ProvisioningState Failed { get; } = new ProvisioningState("Failed");
        public static ProvisioningState Canceled { get; } = new ProvisioningState("Canceled");
        public static ProvisioningState Succeeded { get; } = new ProvisioningState("Succeeded");

        public static bool operator ==(ProvisioningState left, ProvisioningState right) => left.Equals(right);
        public static bool operator !=(ProvisioningState left, ProvisioningState right) => !left.Equals(right);

        public static explicit operator string(ProvisioningState value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ProvisioningState other && Equals(other);
        public bool Equals(ProvisioningState other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The shell type of the cloud shell.
    /// </summary>
    [EnumType]
    public readonly struct ShellType : IEquatable<ShellType>
    {
        private readonly string _value;

        private ShellType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ShellType Bash { get; } = new ShellType("bash");
        public static ShellType Pwsh { get; } = new ShellType("pwsh");
        public static ShellType Powershell { get; } = new ShellType("powershell");

        public static bool operator ==(ShellType left, ShellType right) => left.Equals(right);
        public static bool operator !=(ShellType left, ShellType right) => !left.Equals(right);

        public static explicit operator string(ShellType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ShellType other && Equals(other);
        public bool Equals(ShellType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}
