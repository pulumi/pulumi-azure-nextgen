// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.StorSimple.V20161001
{
    /// <summary>
    /// The cloud service provider
    /// </summary>
    [EnumType]
    public readonly struct CloudType : IEquatable<CloudType>
    {
        private readonly string _value;

        private CloudType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static CloudType Azure { get; } = new CloudType("Azure");
        public static CloudType S3 { get; } = new CloudType("S3");
        public static CloudType S3_RRS { get; } = new CloudType("S3_RRS");
        public static CloudType OpenStack { get; } = new CloudType("OpenStack");
        public static CloudType HP { get; } = new CloudType("HP");

        public static bool operator ==(CloudType left, CloudType right) => left.Equals(right);
        public static bool operator !=(CloudType left, CloudType right) => !left.Equals(right);

        public static explicit operator string(CloudType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is CloudType other && Equals(other);
        public bool Equals(CloudType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The data policy.
    /// </summary>
    [EnumType]
    public readonly struct DataPolicy : IEquatable<DataPolicy>
    {
        private readonly string _value;

        private DataPolicy(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static DataPolicy Invalid { get; } = new DataPolicy("Invalid");
        public static DataPolicy Local { get; } = new DataPolicy("Local");
        public static DataPolicy Tiered { get; } = new DataPolicy("Tiered");
        public static DataPolicy Cloud { get; } = new DataPolicy("Cloud");

        public static bool operator ==(DataPolicy left, DataPolicy right) => left.Equals(right);
        public static bool operator !=(DataPolicy left, DataPolicy right) => !left.Equals(right);

        public static explicit operator string(DataPolicy value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is DataPolicy other && Equals(other);
        public bool Equals(DataPolicy other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The disk status.
    /// </summary>
    [EnumType]
    public readonly struct DiskStatus : IEquatable<DiskStatus>
    {
        private readonly string _value;

        private DiskStatus(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static DiskStatus Online { get; } = new DiskStatus("Online");
        public static DiskStatus Offline { get; } = new DiskStatus("Offline");

        public static bool operator ==(DiskStatus left, DiskStatus right) => left.Equals(right);
        public static bool operator !=(DiskStatus left, DiskStatus right) => !left.Equals(right);

        public static explicit operator string(DiskStatus value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is DiskStatus other && Equals(other);
        public bool Equals(DiskStatus other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Algorithm used to encrypt "Value"
    /// </summary>
    [EnumType]
    public readonly struct EncryptionAlgorithm : IEquatable<EncryptionAlgorithm>
    {
        private readonly string _value;

        private EncryptionAlgorithm(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static EncryptionAlgorithm None { get; } = new EncryptionAlgorithm("None");
        public static EncryptionAlgorithm AES256 { get; } = new EncryptionAlgorithm("AES256");
        public static EncryptionAlgorithm RSAES_PKCS1_v_1_5 { get; } = new EncryptionAlgorithm("RSAES_PKCS1_v_1_5");

        public static bool operator ==(EncryptionAlgorithm left, EncryptionAlgorithm right) => left.Equals(right);
        public static bool operator !=(EncryptionAlgorithm left, EncryptionAlgorithm right) => !left.Equals(right);

        public static explicit operator string(EncryptionAlgorithm value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is EncryptionAlgorithm other && Equals(other);
        public bool Equals(EncryptionAlgorithm other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The encryption status "Enabled | Disabled".
    /// </summary>
    [EnumType]
    public readonly struct EncryptionStatus : IEquatable<EncryptionStatus>
    {
        private readonly string _value;

        private EncryptionStatus(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static EncryptionStatus Enabled { get; } = new EncryptionStatus("Enabled");
        public static EncryptionStatus Disabled { get; } = new EncryptionStatus("Disabled");

        public static bool operator ==(EncryptionStatus left, EncryptionStatus right) => left.Equals(right);
        public static bool operator !=(EncryptionStatus left, EncryptionStatus right) => !left.Equals(right);

        public static explicit operator string(EncryptionStatus value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is EncryptionStatus other && Equals(other);
        public bool Equals(EncryptionStatus other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Refers to the sku name which should be "Standard"
    /// </summary>
    [EnumType]
    public readonly struct ManagerSkuType : IEquatable<ManagerSkuType>
    {
        private readonly string _value;

        private ManagerSkuType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ManagerSkuType Standard { get; } = new ManagerSkuType("Standard");

        public static bool operator ==(ManagerSkuType left, ManagerSkuType right) => left.Equals(right);
        public static bool operator !=(ManagerSkuType left, ManagerSkuType right) => !left.Equals(right);

        public static explicit operator string(ManagerSkuType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ManagerSkuType other && Equals(other);
        public bool Equals(ManagerSkuType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Refers to the type of the StorSimple Manager
    /// </summary>
    [EnumType]
    public readonly struct ManagerType : IEquatable<ManagerType>
    {
        private readonly string _value;

        private ManagerType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ManagerType GardaV1 { get; } = new ManagerType("GardaV1");
        public static ManagerType HelsinkiV1 { get; } = new ManagerType("HelsinkiV1");

        public static bool operator ==(ManagerType left, ManagerType right) => left.Equals(right);
        public static bool operator !=(ManagerType left, ManagerType right) => !left.Equals(right);

        public static explicit operator string(ManagerType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ManagerType other && Equals(other);
        public bool Equals(ManagerType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The monitoring.
    /// </summary>
    [EnumType]
    public readonly struct MonitoringStatus : IEquatable<MonitoringStatus>
    {
        private readonly string _value;

        private MonitoringStatus(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static MonitoringStatus Enabled { get; } = new MonitoringStatus("Enabled");
        public static MonitoringStatus Disabled { get; } = new MonitoringStatus("Disabled");

        public static bool operator ==(MonitoringStatus left, MonitoringStatus right) => left.Equals(right);
        public static bool operator !=(MonitoringStatus left, MonitoringStatus right) => !left.Equals(right);

        public static explicit operator string(MonitoringStatus value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is MonitoringStatus other && Equals(other);
        public bool Equals(MonitoringStatus other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The Share Status
    /// </summary>
    [EnumType]
    public readonly struct ShareStatus : IEquatable<ShareStatus>
    {
        private readonly string _value;

        private ShareStatus(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ShareStatus Online { get; } = new ShareStatus("Online");
        public static ShareStatus Offline { get; } = new ShareStatus("Offline");

        public static bool operator ==(ShareStatus left, ShareStatus right) => left.Equals(right);
        public static bool operator !=(ShareStatus left, ShareStatus right) => !left.Equals(right);

        public static explicit operator string(ShareStatus value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ShareStatus other && Equals(other);
        public bool Equals(ShareStatus other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// SSL needs to be enabled or not
    /// </summary>
    [EnumType]
    public readonly struct SslStatus : IEquatable<SslStatus>
    {
        private readonly string _value;

        private SslStatus(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static SslStatus Enabled { get; } = new SslStatus("Enabled");
        public static SslStatus Disabled { get; } = new SslStatus("Disabled");

        public static bool operator ==(SslStatus left, SslStatus right) => left.Equals(right);
        public static bool operator !=(SslStatus left, SslStatus right) => !left.Equals(right);

        public static explicit operator string(SslStatus value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is SslStatus other && Equals(other);
        public bool Equals(SslStatus other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}