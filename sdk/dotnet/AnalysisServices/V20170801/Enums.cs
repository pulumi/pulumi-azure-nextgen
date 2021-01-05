// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.AnalysisServices.V20170801
{
    /// <summary>
    /// How the read-write server's participation in the query pool is controlled.&lt;br/&gt;It can have the following values: &lt;ul&gt;&lt;li&gt;readOnly - indicates that the read-write server is intended not to participate in query operations&lt;/li&gt;&lt;li&gt;all - indicates that the read-write server can participate in query operations&lt;/li&gt;&lt;/ul&gt;Specifying readOnly when capacity is 1 results in error.
    /// </summary>
    [EnumType]
    public readonly struct ConnectionMode : IEquatable<ConnectionMode>
    {
        private readonly string _value;

        private ConnectionMode(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ConnectionMode All { get; } = new ConnectionMode("All");
        public static ConnectionMode ReadOnly { get; } = new ConnectionMode("ReadOnly");

        public static bool operator ==(ConnectionMode left, ConnectionMode right) => left.Equals(right);
        public static bool operator !=(ConnectionMode left, ConnectionMode right) => !left.Equals(right);

        public static explicit operator string(ConnectionMode value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ConnectionMode other && Equals(other);
        public bool Equals(ConnectionMode other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The managed mode of the server (0 = not managed, 1 = managed).
    /// </summary>
    [EnumType]
    public readonly struct ManagedMode : IEquatable<ManagedMode>
    {
        private readonly string _value;

        private ManagedMode(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ManagedMode Zero { get; } = new ManagedMode("0");
        public static ManagedMode One { get; } = new ManagedMode("1");

        public static bool operator ==(ManagedMode left, ManagedMode right) => left.Equals(right);
        public static bool operator !=(ManagedMode left, ManagedMode right) => !left.Equals(right);

        public static explicit operator string(ManagedMode value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ManagedMode other && Equals(other);
        public bool Equals(ManagedMode other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The name of the Azure pricing tier to which the SKU applies.
    /// </summary>
    [EnumType]
    public readonly struct SkuTier : IEquatable<SkuTier>
    {
        private readonly string _value;

        private SkuTier(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static SkuTier Development { get; } = new SkuTier("Development");
        public static SkuTier Basic { get; } = new SkuTier("Basic");
        public static SkuTier Standard { get; } = new SkuTier("Standard");

        public static bool operator ==(SkuTier left, SkuTier right) => left.Equals(right);
        public static bool operator !=(SkuTier left, SkuTier right) => !left.Equals(right);

        public static explicit operator string(SkuTier value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is SkuTier other && Equals(other);
        public bool Equals(SkuTier other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}
