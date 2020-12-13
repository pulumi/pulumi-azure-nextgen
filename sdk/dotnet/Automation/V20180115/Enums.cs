// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.Automation.V20180115
{
    /// <summary>
    /// Gets or sets the content source type.
    /// </summary>
    [EnumType]
    public readonly struct ContentSourceType : IEquatable<ContentSourceType>
    {
        private readonly string _value;

        private ContentSourceType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ContentSourceType EmbeddedContent { get; } = new ContentSourceType("embeddedContent");
        public static ContentSourceType Uri { get; } = new ContentSourceType("uri");

        public static bool operator ==(ContentSourceType left, ContentSourceType right) => left.Equals(right);
        public static bool operator !=(ContentSourceType left, ContentSourceType right) => !left.Equals(right);

        public static explicit operator string(ContentSourceType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ContentSourceType other && Equals(other);
        public bool Equals(ContentSourceType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}
