// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.Insights.V20201005Preview
{
    /// <summary>
    /// The kind of WebTest that this web test watches. Choices are ping and multistep.
    /// </summary>
    [EnumType]
    public readonly struct WebTestKind : IEquatable<WebTestKind>
    {
        private readonly string _value;

        private WebTestKind(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static WebTestKind Ping { get; } = new WebTestKind("ping");
        public static WebTestKind Multistep { get; } = new WebTestKind("multistep");

        public static bool operator ==(WebTestKind left, WebTestKind right) => left.Equals(right);
        public static bool operator !=(WebTestKind left, WebTestKind right) => !left.Equals(right);

        public static explicit operator string(WebTestKind value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is WebTestKind other && Equals(other);
        public bool Equals(WebTestKind other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The kind of web test this is, valid choices are ping, multistep, basic, and standard.
    /// </summary>
    [EnumType]
    public readonly struct WebTestKindEnum : IEquatable<WebTestKindEnum>
    {
        private readonly string _value;

        private WebTestKindEnum(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static WebTestKindEnum Ping { get; } = new WebTestKindEnum("ping");
        public static WebTestKindEnum Multistep { get; } = new WebTestKindEnum("multistep");
        public static WebTestKindEnum Basic { get; } = new WebTestKindEnum("basic");
        public static WebTestKindEnum Standard { get; } = new WebTestKindEnum("standard");

        public static bool operator ==(WebTestKindEnum left, WebTestKindEnum right) => left.Equals(right);
        public static bool operator !=(WebTestKindEnum left, WebTestKindEnum right) => !left.Equals(right);

        public static explicit operator string(WebTestKindEnum value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is WebTestKindEnum other && Equals(other);
        public bool Equals(WebTestKindEnum other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}
