// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.Cache.V20190701
{
    /// <summary>
    /// Day of the week when a cache can be patched.
    /// </summary>
    [EnumType]
    public readonly struct DayOfWeek : IEquatable<DayOfWeek>
    {
        private readonly string _value;

        private DayOfWeek(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static DayOfWeek Monday { get; } = new DayOfWeek("Monday");
        public static DayOfWeek Tuesday { get; } = new DayOfWeek("Tuesday");
        public static DayOfWeek Wednesday { get; } = new DayOfWeek("Wednesday");
        public static DayOfWeek Thursday { get; } = new DayOfWeek("Thursday");
        public static DayOfWeek Friday { get; } = new DayOfWeek("Friday");
        public static DayOfWeek Saturday { get; } = new DayOfWeek("Saturday");
        public static DayOfWeek Sunday { get; } = new DayOfWeek("Sunday");
        public static DayOfWeek Everyday { get; } = new DayOfWeek("Everyday");
        public static DayOfWeek Weekend { get; } = new DayOfWeek("Weekend");

        public static bool operator ==(DayOfWeek left, DayOfWeek right) => left.Equals(right);
        public static bool operator !=(DayOfWeek left, DayOfWeek right) => !left.Equals(right);

        public static explicit operator string(DayOfWeek value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is DayOfWeek other && Equals(other);
        public bool Equals(DayOfWeek other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Role of the linked server.
    /// </summary>
    [EnumType]
    public readonly struct ReplicationRole : IEquatable<ReplicationRole>
    {
        private readonly string _value;

        private ReplicationRole(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ReplicationRole Primary { get; } = new ReplicationRole("Primary");
        public static ReplicationRole Secondary { get; } = new ReplicationRole("Secondary");

        public static bool operator ==(ReplicationRole left, ReplicationRole right) => left.Equals(right);
        public static bool operator !=(ReplicationRole left, ReplicationRole right) => !left.Equals(right);

        public static explicit operator string(ReplicationRole value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ReplicationRole other && Equals(other);
        public bool Equals(ReplicationRole other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The SKU family to use. Valid values: (C, P). (C = Basic/Standard, P = Premium).
    /// </summary>
    [EnumType]
    public readonly struct SkuFamily : IEquatable<SkuFamily>
    {
        private readonly string _value;

        private SkuFamily(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static SkuFamily C { get; } = new SkuFamily("C");
        public static SkuFamily P { get; } = new SkuFamily("P");

        public static bool operator ==(SkuFamily left, SkuFamily right) => left.Equals(right);
        public static bool operator !=(SkuFamily left, SkuFamily right) => !left.Equals(right);

        public static explicit operator string(SkuFamily value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is SkuFamily other && Equals(other);
        public bool Equals(SkuFamily other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The type of Redis cache to deploy. Valid values: (Basic, Standard, Premium)
    /// </summary>
    [EnumType]
    public readonly struct SkuName : IEquatable<SkuName>
    {
        private readonly string _value;

        private SkuName(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static SkuName Basic { get; } = new SkuName("Basic");
        public static SkuName Standard { get; } = new SkuName("Standard");
        public static SkuName Premium { get; } = new SkuName("Premium");

        public static bool operator ==(SkuName left, SkuName right) => left.Equals(right);
        public static bool operator !=(SkuName left, SkuName right) => !left.Equals(right);

        public static explicit operator string(SkuName value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is SkuName other && Equals(other);
        public bool Equals(SkuName other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Optional: requires clients to use a specified TLS version (or higher) to connect (e,g, '1.0', '1.1', '1.2')
    /// </summary>
    [EnumType]
    public readonly struct TlsVersion : IEquatable<TlsVersion>
    {
        private readonly string _value;

        private TlsVersion(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static TlsVersion _0 { get; } = new TlsVersion("1.0");
        public static TlsVersion _1 { get; } = new TlsVersion("1.1");
        public static TlsVersion _2 { get; } = new TlsVersion("1.2");

        public static bool operator ==(TlsVersion left, TlsVersion right) => left.Equals(right);
        public static bool operator !=(TlsVersion left, TlsVersion right) => !left.Equals(right);

        public static explicit operator string(TlsVersion value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is TlsVersion other && Equals(other);
        public bool Equals(TlsVersion other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}
