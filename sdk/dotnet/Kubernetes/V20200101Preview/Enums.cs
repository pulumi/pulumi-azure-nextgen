// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.Kubernetes.V20200101Preview
{
    /// <summary>
    /// The mode of client authentication.
    /// </summary>
    [EnumType]
    public readonly struct AuthenticationMethod : IEquatable<AuthenticationMethod>
    {
        private readonly string _value;

        private AuthenticationMethod(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static AuthenticationMethod Token { get; } = new AuthenticationMethod("Token");

        public static bool operator ==(AuthenticationMethod left, AuthenticationMethod right) => left.Equals(right);
        public static bool operator !=(AuthenticationMethod left, AuthenticationMethod right) => !left.Equals(right);

        public static explicit operator string(AuthenticationMethod value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is AuthenticationMethod other && Equals(other);
        public bool Equals(AuthenticationMethod other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Represents the connectivity status of the connected cluster.
    /// </summary>
    [EnumType]
    public readonly struct ConnectivityStatus : IEquatable<ConnectivityStatus>
    {
        private readonly string _value;

        private ConnectivityStatus(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ConnectivityStatus Connecting { get; } = new ConnectivityStatus("Connecting");
        public static ConnectivityStatus Connected { get; } = new ConnectivityStatus("Connected");
        public static ConnectivityStatus Offline { get; } = new ConnectivityStatus("Offline");
        public static ConnectivityStatus Expired { get; } = new ConnectivityStatus("Expired");

        public static bool operator ==(ConnectivityStatus left, ConnectivityStatus right) => left.Equals(right);
        public static bool operator !=(ConnectivityStatus left, ConnectivityStatus right) => !left.Equals(right);

        public static explicit operator string(ConnectivityStatus value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ConnectivityStatus other && Equals(other);
        public bool Equals(ConnectivityStatus other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Provisioning state of the connected cluster resource.
    /// </summary>
    [EnumType]
    public readonly struct ProvisioningState : IEquatable<ProvisioningState>
    {
        private readonly string _value;

        private ProvisioningState(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ProvisioningState Succeeded { get; } = new ProvisioningState("Succeeded");
        public static ProvisioningState Failed { get; } = new ProvisioningState("Failed");
        public static ProvisioningState Canceled { get; } = new ProvisioningState("Canceled");
        public static ProvisioningState Provisioning { get; } = new ProvisioningState("Provisioning");
        public static ProvisioningState Updating { get; } = new ProvisioningState("Updating");
        public static ProvisioningState Deleting { get; } = new ProvisioningState("Deleting");
        public static ProvisioningState Accepted { get; } = new ProvisioningState("Accepted");

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
    /// The type of identity used for the connected cluster. The type 'SystemAssigned, includes a system created identity. The type 'None' means no identity is assigned to the connected cluster.
    /// </summary>
    [EnumType]
    public readonly struct ResourceIdentityType : IEquatable<ResourceIdentityType>
    {
        private readonly string _value;

        private ResourceIdentityType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ResourceIdentityType None { get; } = new ResourceIdentityType("None");
        public static ResourceIdentityType SystemAssigned { get; } = new ResourceIdentityType("SystemAssigned");

        public static bool operator ==(ResourceIdentityType left, ResourceIdentityType right) => left.Equals(right);
        public static bool operator !=(ResourceIdentityType left, ResourceIdentityType right) => !left.Equals(right);

        public static explicit operator string(ResourceIdentityType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ResourceIdentityType other && Equals(other);
        public bool Equals(ResourceIdentityType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}
