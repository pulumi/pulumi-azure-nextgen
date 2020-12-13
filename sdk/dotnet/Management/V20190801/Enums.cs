// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.Management.V20190801
{
    /// <summary>
    /// The mode that is used to deploy resources. This value can be either Incremental or Complete. In Incremental mode, resources are deployed without deleting existing resources that are not included in the template. In Complete mode, resources are deployed and existing resources in the resource group that are not included in the template are deleted. Be careful when using Complete mode as you may unintentionally delete resources.
    /// </summary>
    [EnumType]
    public readonly struct DeploymentMode : IEquatable<DeploymentMode>
    {
        private readonly string _value;

        private DeploymentMode(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static DeploymentMode Incremental { get; } = new DeploymentMode("Incremental");
        public static DeploymentMode Complete { get; } = new DeploymentMode("Complete");

        public static bool operator ==(DeploymentMode left, DeploymentMode right) => left.Equals(right);
        public static bool operator !=(DeploymentMode left, DeploymentMode right) => !left.Equals(right);

        public static explicit operator string(DeploymentMode value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is DeploymentMode other && Equals(other);
        public bool Equals(DeploymentMode other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The deployment on error behavior type. Possible values are LastSuccessful and SpecificDeployment.
    /// </summary>
    [EnumType]
    public readonly struct OnErrorDeploymentType : IEquatable<OnErrorDeploymentType>
    {
        private readonly string _value;

        private OnErrorDeploymentType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static OnErrorDeploymentType LastSuccessful { get; } = new OnErrorDeploymentType("LastSuccessful");
        public static OnErrorDeploymentType SpecificDeployment { get; } = new OnErrorDeploymentType("SpecificDeployment");

        public static bool operator ==(OnErrorDeploymentType left, OnErrorDeploymentType right) => left.Equals(right);
        public static bool operator !=(OnErrorDeploymentType left, OnErrorDeploymentType right) => !left.Equals(right);

        public static explicit operator string(OnErrorDeploymentType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is OnErrorDeploymentType other && Equals(other);
        public bool Equals(OnErrorDeploymentType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}
