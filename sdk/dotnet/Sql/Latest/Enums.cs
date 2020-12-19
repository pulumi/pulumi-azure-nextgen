// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.Sql.Latest
{
    /// <summary>
    /// The type of administrator.
    /// </summary>
    [EnumType]
    public readonly struct AdministratorType : IEquatable<AdministratorType>
    {
        private readonly string _value;

        private AdministratorType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static AdministratorType ActiveDirectory { get; } = new AdministratorType("ActiveDirectory");

        public static bool operator ==(AdministratorType left, AdministratorType right) => left.Equals(right);
        public static bool operator !=(AdministratorType left, AdministratorType right) => !left.Equals(right);

        public static explicit operator string(AdministratorType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is AdministratorType other && Equals(other);
        public bool Equals(AdministratorType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Specifies the mode of database creation.
    /// 
    /// Default: regular database creation.
    /// 
    /// Copy: creates a database as a copy of an existing database. sourceDatabaseId must be specified as the resource ID of the source database.
    /// 
    /// OnlineSecondary/NonReadableSecondary: creates a database as a (readable or nonreadable) secondary replica of an existing database. sourceDatabaseId must be specified as the resource ID of the existing primary database.
    /// 
    /// PointInTimeRestore: Creates a database by restoring a point in time backup of an existing database. sourceDatabaseId must be specified as the resource ID of the existing database, and restorePointInTime must be specified.
    /// 
    /// Recovery: Creates a database by restoring a geo-replicated backup. sourceDatabaseId must be specified as the recoverable database resource ID to restore.
    /// 
    /// Restore: Creates a database by restoring a backup of a deleted database. sourceDatabaseId must be specified. If sourceDatabaseId is the database's original resource ID, then sourceDatabaseDeletionDate must be specified. Otherwise sourceDatabaseId must be the restorable dropped database resource ID and sourceDatabaseDeletionDate is ignored. restorePointInTime may also be specified to restore from an earlier point in time.
    /// 
    /// RestoreLongTermRetentionBackup: Creates a database by restoring from a long term retention vault. recoveryServicesRecoveryPointResourceId must be specified as the recovery point resource ID.
    /// 
    /// Copy, NonReadableSecondary, OnlineSecondary and RestoreLongTermRetentionBackup are not supported for DataWarehouse edition.
    /// </summary>
    [EnumType]
    public readonly struct CreateMode : IEquatable<CreateMode>
    {
        private readonly string _value;

        private CreateMode(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static CreateMode Copy { get; } = new CreateMode("Copy");
        public static CreateMode Default { get; } = new CreateMode("Default");
        public static CreateMode NonReadableSecondary { get; } = new CreateMode("NonReadableSecondary");
        public static CreateMode OnlineSecondary { get; } = new CreateMode("OnlineSecondary");
        public static CreateMode PointInTimeRestore { get; } = new CreateMode("PointInTimeRestore");
        public static CreateMode Recovery { get; } = new CreateMode("Recovery");
        public static CreateMode Restore { get; } = new CreateMode("Restore");
        public static CreateMode RestoreLongTermRetentionBackup { get; } = new CreateMode("RestoreLongTermRetentionBackup");

        public static bool operator ==(CreateMode left, CreateMode right) => left.Equals(right);
        public static bool operator !=(CreateMode left, CreateMode right) => !left.Equals(right);

        public static explicit operator string(CreateMode value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is CreateMode other && Equals(other);
        public bool Equals(CreateMode other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The edition of the database. The DatabaseEditions enumeration contains all the valid editions. If createMode is NonReadableSecondary or OnlineSecondary, this value is ignored.
    /// 
    /// The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or one of the following commands:
    /// 
    /// ```azurecli
    /// az sql db list-editions -l &lt;location&gt; -o table
    /// ````
    /// 
    /// ```powershell
    /// Get-AzSqlServerServiceObjective -Location &lt;location&gt;
    /// ````
    /// </summary>
    [EnumType]
    public readonly struct DatabaseEdition : IEquatable<DatabaseEdition>
    {
        private readonly string _value;

        private DatabaseEdition(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static DatabaseEdition Web { get; } = new DatabaseEdition("Web");
        public static DatabaseEdition Business { get; } = new DatabaseEdition("Business");
        public static DatabaseEdition Basic { get; } = new DatabaseEdition("Basic");
        public static DatabaseEdition Standard { get; } = new DatabaseEdition("Standard");
        public static DatabaseEdition Premium { get; } = new DatabaseEdition("Premium");
        public static DatabaseEdition PremiumRS { get; } = new DatabaseEdition("PremiumRS");
        public static DatabaseEdition Free { get; } = new DatabaseEdition("Free");
        public static DatabaseEdition Stretch { get; } = new DatabaseEdition("Stretch");
        public static DatabaseEdition DataWarehouse { get; } = new DatabaseEdition("DataWarehouse");
        public static DatabaseEdition System { get; } = new DatabaseEdition("System");
        public static DatabaseEdition System2 { get; } = new DatabaseEdition("System2");
        public static DatabaseEdition GeneralPurpose { get; } = new DatabaseEdition("GeneralPurpose");
        public static DatabaseEdition BusinessCritical { get; } = new DatabaseEdition("BusinessCritical");
        public static DatabaseEdition Hyperscale { get; } = new DatabaseEdition("Hyperscale");

        public static bool operator ==(DatabaseEdition left, DatabaseEdition right) => left.Equals(right);
        public static bool operator !=(DatabaseEdition left, DatabaseEdition right) => !left.Equals(right);

        public static explicit operator string(DatabaseEdition value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is DatabaseEdition other && Equals(other);
        public bool Equals(DatabaseEdition other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The edition of the elastic pool.
    /// </summary>
    [EnumType]
    public readonly struct ElasticPoolEdition : IEquatable<ElasticPoolEdition>
    {
        private readonly string _value;

        private ElasticPoolEdition(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ElasticPoolEdition Basic { get; } = new ElasticPoolEdition("Basic");
        public static ElasticPoolEdition Standard { get; } = new ElasticPoolEdition("Standard");
        public static ElasticPoolEdition Premium { get; } = new ElasticPoolEdition("Premium");
        public static ElasticPoolEdition GeneralPurpose { get; } = new ElasticPoolEdition("GeneralPurpose");
        public static ElasticPoolEdition BusinessCritical { get; } = new ElasticPoolEdition("BusinessCritical");

        public static bool operator ==(ElasticPoolEdition left, ElasticPoolEdition right) => left.Equals(right);
        public static bool operator !=(ElasticPoolEdition left, ElasticPoolEdition right) => !left.Equals(right);

        public static explicit operator string(ElasticPoolEdition value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ElasticPoolEdition other && Equals(other);
        public bool Equals(ElasticPoolEdition other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The state of the geo backup policy.
    /// </summary>
    [EnumType]
    public readonly struct GeoBackupPolicyState : IEquatable<GeoBackupPolicyState>
    {
        private readonly string _value;

        private GeoBackupPolicyState(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static GeoBackupPolicyState Disabled { get; } = new GeoBackupPolicyState("Disabled");
        public static GeoBackupPolicyState Enabled { get; } = new GeoBackupPolicyState("Enabled");

        public static bool operator ==(GeoBackupPolicyState left, GeoBackupPolicyState right) => left.Equals(right);
        public static bool operator !=(GeoBackupPolicyState left, GeoBackupPolicyState right) => !left.Equals(right);

        public static explicit operator string(GeoBackupPolicyState value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is GeoBackupPolicyState other && Equals(other);
        public bool Equals(GeoBackupPolicyState other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Conditional. If the database is a geo-secondary, readScale indicates whether read-only connections are allowed to this database or not. Not supported for DataWarehouse edition.
    /// </summary>
    [EnumType]
    public readonly struct ReadScale : IEquatable<ReadScale>
    {
        private readonly string _value;

        private ReadScale(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ReadScale Enabled { get; } = new ReadScale("Enabled");
        public static ReadScale Disabled { get; } = new ReadScale("Disabled");

        public static bool operator ==(ReadScale left, ReadScale right) => left.Equals(right);
        public static bool operator !=(ReadScale left, ReadScale right) => !left.Equals(right);

        public static explicit operator string(ReadScale value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ReadScale other && Equals(other);
        public bool Equals(ReadScale other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Indicates the name of the sample schema to apply when creating this database. If createMode is not Default, this value is ignored. Not supported for DataWarehouse edition.
    /// </summary>
    [EnumType]
    public readonly struct SampleName : IEquatable<SampleName>
    {
        private readonly string _value;

        private SampleName(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static SampleName AdventureWorksLT { get; } = new SampleName("AdventureWorksLT");

        public static bool operator ==(SampleName left, SampleName right) => left.Equals(right);
        public static bool operator !=(SampleName left, SampleName right) => !left.Equals(right);

        public static explicit operator string(SampleName value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is SampleName other && Equals(other);
        public bool Equals(SampleName other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The version of the server.
    /// </summary>
    [EnumType]
    public readonly struct ServerVersion : IEquatable<ServerVersion>
    {
        private readonly string _value;

        private ServerVersion(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ServerVersion ServerVersion_2_0 { get; } = new ServerVersion("2.0");
        public static ServerVersion ServerVersion_12_0 { get; } = new ServerVersion("12.0");

        public static bool operator ==(ServerVersion left, ServerVersion right) => left.Equals(right);
        public static bool operator !=(ServerVersion left, ServerVersion right) => !left.Equals(right);

        public static explicit operator string(ServerVersion value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ServerVersion other && Equals(other);
        public bool Equals(ServerVersion other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The name of the configured service level objective of the database. This is the service level objective that is in the process of being applied to the database. Once successfully updated, it will match the value of serviceLevelObjective property. 
    /// 
    /// The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or one of the following commands:
    /// 
    /// ```azurecli
    /// az sql db list-editions -l &lt;location&gt; -o table
    /// ````
    /// 
    /// ```powershell
    /// Get-AzSqlServerServiceObjective -Location &lt;location&gt;
    /// ````
    /// </summary>
    [EnumType]
    public readonly struct ServiceObjectiveName : IEquatable<ServiceObjectiveName>
    {
        private readonly string _value;

        private ServiceObjectiveName(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ServiceObjectiveName System { get; } = new ServiceObjectiveName("System");
        public static ServiceObjectiveName System0 { get; } = new ServiceObjectiveName("System0");
        public static ServiceObjectiveName System1 { get; } = new ServiceObjectiveName("System1");
        public static ServiceObjectiveName System2 { get; } = new ServiceObjectiveName("System2");
        public static ServiceObjectiveName System3 { get; } = new ServiceObjectiveName("System3");
        public static ServiceObjectiveName System4 { get; } = new ServiceObjectiveName("System4");
        public static ServiceObjectiveName System2L { get; } = new ServiceObjectiveName("System2L");
        public static ServiceObjectiveName System3L { get; } = new ServiceObjectiveName("System3L");
        public static ServiceObjectiveName System4L { get; } = new ServiceObjectiveName("System4L");
        public static ServiceObjectiveName Free { get; } = new ServiceObjectiveName("Free");
        public static ServiceObjectiveName Basic { get; } = new ServiceObjectiveName("Basic");
        public static ServiceObjectiveName S0 { get; } = new ServiceObjectiveName("S0");
        public static ServiceObjectiveName S1 { get; } = new ServiceObjectiveName("S1");
        public static ServiceObjectiveName S2 { get; } = new ServiceObjectiveName("S2");
        public static ServiceObjectiveName S3 { get; } = new ServiceObjectiveName("S3");
        public static ServiceObjectiveName S4 { get; } = new ServiceObjectiveName("S4");
        public static ServiceObjectiveName S6 { get; } = new ServiceObjectiveName("S6");
        public static ServiceObjectiveName S7 { get; } = new ServiceObjectiveName("S7");
        public static ServiceObjectiveName S9 { get; } = new ServiceObjectiveName("S9");
        public static ServiceObjectiveName S12 { get; } = new ServiceObjectiveName("S12");
        public static ServiceObjectiveName P1 { get; } = new ServiceObjectiveName("P1");
        public static ServiceObjectiveName P2 { get; } = new ServiceObjectiveName("P2");
        public static ServiceObjectiveName P3 { get; } = new ServiceObjectiveName("P3");
        public static ServiceObjectiveName P4 { get; } = new ServiceObjectiveName("P4");
        public static ServiceObjectiveName P6 { get; } = new ServiceObjectiveName("P6");
        public static ServiceObjectiveName P11 { get; } = new ServiceObjectiveName("P11");
        public static ServiceObjectiveName P15 { get; } = new ServiceObjectiveName("P15");
        public static ServiceObjectiveName PRS1 { get; } = new ServiceObjectiveName("PRS1");
        public static ServiceObjectiveName PRS2 { get; } = new ServiceObjectiveName("PRS2");
        public static ServiceObjectiveName PRS4 { get; } = new ServiceObjectiveName("PRS4");
        public static ServiceObjectiveName PRS6 { get; } = new ServiceObjectiveName("PRS6");
        public static ServiceObjectiveName DW100 { get; } = new ServiceObjectiveName("DW100");
        public static ServiceObjectiveName DW200 { get; } = new ServiceObjectiveName("DW200");
        public static ServiceObjectiveName DW300 { get; } = new ServiceObjectiveName("DW300");
        public static ServiceObjectiveName DW400 { get; } = new ServiceObjectiveName("DW400");
        public static ServiceObjectiveName DW500 { get; } = new ServiceObjectiveName("DW500");
        public static ServiceObjectiveName DW600 { get; } = new ServiceObjectiveName("DW600");
        public static ServiceObjectiveName DW1000 { get; } = new ServiceObjectiveName("DW1000");
        public static ServiceObjectiveName DW1200 { get; } = new ServiceObjectiveName("DW1200");
        public static ServiceObjectiveName DW1000c { get; } = new ServiceObjectiveName("DW1000c");
        public static ServiceObjectiveName DW1500 { get; } = new ServiceObjectiveName("DW1500");
        public static ServiceObjectiveName DW1500c { get; } = new ServiceObjectiveName("DW1500c");
        public static ServiceObjectiveName DW2000 { get; } = new ServiceObjectiveName("DW2000");
        public static ServiceObjectiveName DW2000c { get; } = new ServiceObjectiveName("DW2000c");
        public static ServiceObjectiveName DW3000 { get; } = new ServiceObjectiveName("DW3000");
        public static ServiceObjectiveName DW2500c { get; } = new ServiceObjectiveName("DW2500c");
        public static ServiceObjectiveName DW3000c { get; } = new ServiceObjectiveName("DW3000c");
        public static ServiceObjectiveName DW6000 { get; } = new ServiceObjectiveName("DW6000");
        public static ServiceObjectiveName DW5000c { get; } = new ServiceObjectiveName("DW5000c");
        public static ServiceObjectiveName DW6000c { get; } = new ServiceObjectiveName("DW6000c");
        public static ServiceObjectiveName DW7500c { get; } = new ServiceObjectiveName("DW7500c");
        public static ServiceObjectiveName DW10000c { get; } = new ServiceObjectiveName("DW10000c");
        public static ServiceObjectiveName DW15000c { get; } = new ServiceObjectiveName("DW15000c");
        public static ServiceObjectiveName DW30000c { get; } = new ServiceObjectiveName("DW30000c");
        public static ServiceObjectiveName DS100 { get; } = new ServiceObjectiveName("DS100");
        public static ServiceObjectiveName DS200 { get; } = new ServiceObjectiveName("DS200");
        public static ServiceObjectiveName DS300 { get; } = new ServiceObjectiveName("DS300");
        public static ServiceObjectiveName DS400 { get; } = new ServiceObjectiveName("DS400");
        public static ServiceObjectiveName DS500 { get; } = new ServiceObjectiveName("DS500");
        public static ServiceObjectiveName DS600 { get; } = new ServiceObjectiveName("DS600");
        public static ServiceObjectiveName DS1000 { get; } = new ServiceObjectiveName("DS1000");
        public static ServiceObjectiveName DS1200 { get; } = new ServiceObjectiveName("DS1200");
        public static ServiceObjectiveName DS1500 { get; } = new ServiceObjectiveName("DS1500");
        public static ServiceObjectiveName DS2000 { get; } = new ServiceObjectiveName("DS2000");
        public static ServiceObjectiveName ElasticPool { get; } = new ServiceObjectiveName("ElasticPool");

        public static bool operator ==(ServiceObjectiveName left, ServiceObjectiveName right) => left.Equals(right);
        public static bool operator !=(ServiceObjectiveName left, ServiceObjectiveName right) => !left.Equals(right);

        public static explicit operator string(ServiceObjectiveName value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ServiceObjectiveName other && Equals(other);
        public bool Equals(ServiceObjectiveName other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The status of the database transparent data encryption.
    /// </summary>
    [EnumType]
    public readonly struct TransparentDataEncryptionStatus : IEquatable<TransparentDataEncryptionStatus>
    {
        private readonly string _value;

        private TransparentDataEncryptionStatus(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static TransparentDataEncryptionStatus Enabled { get; } = new TransparentDataEncryptionStatus("Enabled");
        public static TransparentDataEncryptionStatus Disabled { get; } = new TransparentDataEncryptionStatus("Disabled");

        public static bool operator ==(TransparentDataEncryptionStatus left, TransparentDataEncryptionStatus right) => left.Equals(right);
        public static bool operator !=(TransparentDataEncryptionStatus left, TransparentDataEncryptionStatus right) => !left.Equals(right);

        public static explicit operator string(TransparentDataEncryptionStatus value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is TransparentDataEncryptionStatus other && Equals(other);
        public bool Equals(TransparentDataEncryptionStatus other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}
