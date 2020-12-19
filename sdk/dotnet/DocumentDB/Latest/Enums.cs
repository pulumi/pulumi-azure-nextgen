// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.ComponentModel;
using Pulumi;

namespace Pulumi.AzureNextGen.DocumentDB.Latest
{
    /// <summary>
    /// Describes the mode of backups.
    /// </summary>
    [EnumType]
    public readonly struct BackupPolicyType : IEquatable<BackupPolicyType>
    {
        private readonly string _value;

        private BackupPolicyType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static BackupPolicyType Periodic { get; } = new BackupPolicyType("Periodic");
        public static BackupPolicyType Continuous { get; } = new BackupPolicyType("Continuous");

        public static bool operator ==(BackupPolicyType left, BackupPolicyType right) => left.Equals(right);
        public static bool operator !=(BackupPolicyType left, BackupPolicyType right) => !left.Equals(right);

        public static explicit operator string(BackupPolicyType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is BackupPolicyType other && Equals(other);
        public bool Equals(BackupPolicyType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Sort order for composite paths.
    /// </summary>
    [EnumType]
    public readonly struct CompositePathSortOrder : IEquatable<CompositePathSortOrder>
    {
        private readonly string _value;

        private CompositePathSortOrder(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static CompositePathSortOrder Ascending { get; } = new CompositePathSortOrder("Ascending");
        public static CompositePathSortOrder Descending { get; } = new CompositePathSortOrder("Descending");

        public static bool operator ==(CompositePathSortOrder left, CompositePathSortOrder right) => left.Equals(right);
        public static bool operator !=(CompositePathSortOrder left, CompositePathSortOrder right) => !left.Equals(right);

        public static explicit operator string(CompositePathSortOrder value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is CompositePathSortOrder other && Equals(other);
        public bool Equals(CompositePathSortOrder other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Indicates the conflict resolution mode.
    /// </summary>
    [EnumType]
    public readonly struct ConflictResolutionMode : IEquatable<ConflictResolutionMode>
    {
        private readonly string _value;

        private ConflictResolutionMode(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ConflictResolutionMode LastWriterWins { get; } = new ConflictResolutionMode("LastWriterWins");
        public static ConflictResolutionMode Custom { get; } = new ConflictResolutionMode("Custom");

        public static bool operator ==(ConflictResolutionMode left, ConflictResolutionMode right) => left.Equals(right);
        public static bool operator !=(ConflictResolutionMode left, ConflictResolutionMode right) => !left.Equals(right);

        public static explicit operator string(ConflictResolutionMode value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ConflictResolutionMode other && Equals(other);
        public bool Equals(ConflictResolutionMode other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The cassandra connector offer type for the Cosmos DB database C* account.
    /// </summary>
    [EnumType]
    public readonly struct ConnectorOffer : IEquatable<ConnectorOffer>
    {
        private readonly string _value;

        private ConnectorOffer(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ConnectorOffer Small { get; } = new ConnectorOffer("Small");

        public static bool operator ==(ConnectorOffer left, ConnectorOffer right) => left.Equals(right);
        public static bool operator !=(ConnectorOffer left, ConnectorOffer right) => !left.Equals(right);

        public static explicit operator string(ConnectorOffer value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is ConnectorOffer other && Equals(other);
        public bool Equals(ConnectorOffer other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The datatype for which the indexing behavior is applied to.
    /// </summary>
    [EnumType]
    public readonly struct DataType : IEquatable<DataType>
    {
        private readonly string _value;

        private DataType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static DataType String { get; } = new DataType("String");
        public static DataType Number { get; } = new DataType("Number");
        public static DataType Point { get; } = new DataType("Point");
        public static DataType Polygon { get; } = new DataType("Polygon");
        public static DataType LineString { get; } = new DataType("LineString");
        public static DataType MultiPolygon { get; } = new DataType("MultiPolygon");

        public static bool operator ==(DataType left, DataType right) => left.Equals(right);
        public static bool operator !=(DataType left, DataType right) => !left.Equals(right);

        public static explicit operator string(DataType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is DataType other && Equals(other);
        public bool Equals(DataType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Indicates the type of database account. This can only be set at database account creation.
    /// </summary>
    [EnumType]
    public readonly struct DatabaseAccountKind : IEquatable<DatabaseAccountKind>
    {
        private readonly string _value;

        private DatabaseAccountKind(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static DatabaseAccountKind GlobalDocumentDB { get; } = new DatabaseAccountKind("GlobalDocumentDB");
        public static DatabaseAccountKind MongoDB { get; } = new DatabaseAccountKind("MongoDB");
        public static DatabaseAccountKind Parse { get; } = new DatabaseAccountKind("Parse");

        public static bool operator ==(DatabaseAccountKind left, DatabaseAccountKind right) => left.Equals(right);
        public static bool operator !=(DatabaseAccountKind left, DatabaseAccountKind right) => !left.Equals(right);

        public static explicit operator string(DatabaseAccountKind value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is DatabaseAccountKind other && Equals(other);
        public bool Equals(DatabaseAccountKind other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The offer type for the database
    /// </summary>
    [EnumType]
    public readonly struct DatabaseAccountOfferType : IEquatable<DatabaseAccountOfferType>
    {
        private readonly string _value;

        private DatabaseAccountOfferType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static DatabaseAccountOfferType Standard { get; } = new DatabaseAccountOfferType("Standard");

        public static bool operator ==(DatabaseAccountOfferType left, DatabaseAccountOfferType right) => left.Equals(right);
        public static bool operator !=(DatabaseAccountOfferType left, DatabaseAccountOfferType right) => !left.Equals(right);

        public static explicit operator string(DatabaseAccountOfferType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is DatabaseAccountOfferType other && Equals(other);
        public bool Equals(DatabaseAccountOfferType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The default consistency level and configuration settings of the Cosmos DB account.
    /// </summary>
    [EnumType]
    public readonly struct DefaultConsistencyLevel : IEquatable<DefaultConsistencyLevel>
    {
        private readonly string _value;

        private DefaultConsistencyLevel(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static DefaultConsistencyLevel Eventual { get; } = new DefaultConsistencyLevel("Eventual");
        public static DefaultConsistencyLevel Session { get; } = new DefaultConsistencyLevel("Session");
        public static DefaultConsistencyLevel BoundedStaleness { get; } = new DefaultConsistencyLevel("BoundedStaleness");
        public static DefaultConsistencyLevel Strong { get; } = new DefaultConsistencyLevel("Strong");
        public static DefaultConsistencyLevel ConsistentPrefix { get; } = new DefaultConsistencyLevel("ConsistentPrefix");

        public static bool operator ==(DefaultConsistencyLevel left, DefaultConsistencyLevel right) => left.Equals(right);
        public static bool operator !=(DefaultConsistencyLevel left, DefaultConsistencyLevel right) => !left.Equals(right);

        public static explicit operator string(DefaultConsistencyLevel value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is DefaultConsistencyLevel other && Equals(other);
        public bool Equals(DefaultConsistencyLevel other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Indicates the type of index.
    /// </summary>
    [EnumType]
    public readonly struct IndexKind : IEquatable<IndexKind>
    {
        private readonly string _value;

        private IndexKind(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static IndexKind Hash { get; } = new IndexKind("Hash");
        public static IndexKind Range { get; } = new IndexKind("Range");
        public static IndexKind Spatial { get; } = new IndexKind("Spatial");

        public static bool operator ==(IndexKind left, IndexKind right) => left.Equals(right);
        public static bool operator !=(IndexKind left, IndexKind right) => !left.Equals(right);

        public static explicit operator string(IndexKind value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is IndexKind other && Equals(other);
        public bool Equals(IndexKind other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Indicates the indexing mode.
    /// </summary>
    [EnumType]
    public readonly struct IndexingMode : IEquatable<IndexingMode>
    {
        private readonly string _value;

        private IndexingMode(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static IndexingMode Consistent { get; } = new IndexingMode("Consistent");
        public static IndexingMode Lazy { get; } = new IndexingMode("Lazy");
        public static IndexingMode None { get; } = new IndexingMode("None");

        public static bool operator ==(IndexingMode left, IndexingMode right) => left.Equals(right);
        public static bool operator !=(IndexingMode left, IndexingMode right) => !left.Equals(right);

        public static explicit operator string(IndexingMode value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is IndexingMode other && Equals(other);
        public bool Equals(IndexingMode other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Indicates the kind of algorithm used for partitioning
    /// </summary>
    [EnumType]
    public readonly struct PartitionKind : IEquatable<PartitionKind>
    {
        private readonly string _value;

        private PartitionKind(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static PartitionKind Hash { get; } = new PartitionKind("Hash");
        public static PartitionKind Range { get; } = new PartitionKind("Range");

        public static bool operator ==(PartitionKind left, PartitionKind right) => left.Equals(right);
        public static bool operator !=(PartitionKind left, PartitionKind right) => !left.Equals(right);

        public static explicit operator string(PartitionKind value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is PartitionKind other && Equals(other);
        public bool Equals(PartitionKind other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Describes the ServerVersion of an a MongoDB account.
    /// </summary>
    [EnumType]
    public readonly struct ServerVersion : IEquatable<ServerVersion>
    {
        private readonly string _value;

        private ServerVersion(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static ServerVersion ServerVersion_3_2 { get; } = new ServerVersion("3.2");
        public static ServerVersion ServerVersion_3_6 { get; } = new ServerVersion("3.6");

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
    /// Indicates the spatial type of index.
    /// </summary>
    [EnumType]
    public readonly struct SpatialType : IEquatable<SpatialType>
    {
        private readonly string _value;

        private SpatialType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static SpatialType Point { get; } = new SpatialType("Point");
        public static SpatialType LineString { get; } = new SpatialType("LineString");
        public static SpatialType Polygon { get; } = new SpatialType("Polygon");
        public static SpatialType MultiPolygon { get; } = new SpatialType("MultiPolygon");

        public static bool operator ==(SpatialType left, SpatialType right) => left.Equals(right);
        public static bool operator !=(SpatialType left, SpatialType right) => !left.Equals(right);

        public static explicit operator string(SpatialType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is SpatialType other && Equals(other);
        public bool Equals(SpatialType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// The operation the trigger is associated with
    /// </summary>
    [EnumType]
    public readonly struct TriggerOperation : IEquatable<TriggerOperation>
    {
        private readonly string _value;

        private TriggerOperation(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static TriggerOperation All { get; } = new TriggerOperation("All");
        public static TriggerOperation Create { get; } = new TriggerOperation("Create");
        public static TriggerOperation Update { get; } = new TriggerOperation("Update");
        public static TriggerOperation Delete { get; } = new TriggerOperation("Delete");
        public static TriggerOperation Replace { get; } = new TriggerOperation("Replace");

        public static bool operator ==(TriggerOperation left, TriggerOperation right) => left.Equals(right);
        public static bool operator !=(TriggerOperation left, TriggerOperation right) => !left.Equals(right);

        public static explicit operator string(TriggerOperation value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is TriggerOperation other && Equals(other);
        public bool Equals(TriggerOperation other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }

    /// <summary>
    /// Type of the Trigger
    /// </summary>
    [EnumType]
    public readonly struct TriggerType : IEquatable<TriggerType>
    {
        private readonly string _value;

        private TriggerType(string value)
        {
            _value = value ?? throw new ArgumentNullException(nameof(value));
        }

        public static TriggerType Pre { get; } = new TriggerType("Pre");
        public static TriggerType Post { get; } = new TriggerType("Post");

        public static bool operator ==(TriggerType left, TriggerType right) => left.Equals(right);
        public static bool operator !=(TriggerType left, TriggerType right) => !left.Equals(right);

        public static explicit operator string(TriggerType value) => value._value;

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override bool Equals(object? obj) => obj is TriggerType other && Equals(other);
        public bool Equals(TriggerType other) => string.Equals(_value, other._value, StringComparison.Ordinal);

        [EditorBrowsable(EditorBrowsableState.Never)]
        public override int GetHashCode() => _value?.GetHashCode() ?? 0;

        public override string ToString() => _value;
    }
}
