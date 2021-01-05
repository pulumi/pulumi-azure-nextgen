// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.IoTSpaces.V20171001Preview
{
    /// <summary>
    /// The name of the SKU.
    /// </summary>
    [EnumType]
    public readonly struct IoTSpacesSku : IEquatable<IoTSpacesSku>
    {
        private readonly string _value;

        private IoTSpacesSku(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static IoTSpacesSku F1 { get; } = new IoTSpacesSku("F1");
        public static IoTSpacesSku S1 { get; } = new IoTSpacesSku("S1");
        public static IoTSpacesSku S2 { get; } = new IoTSpacesSku("S2");
        public static IoTSpacesSku S3 { get; } = new IoTSpacesSku("S3");

        public static bool operator ==(IoTSpacesSku left, IoTSpacesSku right) => left.Equals(right);
        public static bool operator !=(IoTSpacesSku left, IoTSpacesSku right) => !left.Equals(right);

        public static explicit operator string(IoTSpacesSku value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is IoTSpacesSku other && Equals(other);
        public bool Equals(IoTSpacesSku other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}