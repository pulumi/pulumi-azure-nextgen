// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DocumentDB.V20160319
{
    public static class GetDatabaseAccountMongoDBCollection
    {
        public static Task<GetDatabaseAccountMongoDBCollectionResult> InvokeAsync(GetDatabaseAccountMongoDBCollectionArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetDatabaseAccountMongoDBCollectionResult>("azure-nextgen:documentdb/v20160319:getDatabaseAccountMongoDBCollection", args ?? new GetDatabaseAccountMongoDBCollectionArgs(), options.WithVersion());
    }


    public sealed class GetDatabaseAccountMongoDBCollectionArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Cosmos DB database account name.
        /// </summary>
        [Input("accountName", required: true)]
        public string AccountName { get; set; } = null!;

        /// <summary>
        /// Cosmos DB collection name.
        /// </summary>
        [Input("collectionName", required: true)]
        public string CollectionName { get; set; } = null!;

        /// <summary>
        /// Cosmos DB database name.
        /// </summary>
        [Input("databaseName", required: true)]
        public string DatabaseName { get; set; } = null!;

        /// <summary>
        /// Name of an Azure resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetDatabaseAccountMongoDBCollectionArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetDatabaseAccountMongoDBCollectionResult
    {
        /// <summary>
        /// The unique resource identifier of the database account.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// List of index keys
        /// </summary>
        public readonly ImmutableArray<Outputs.MongoIndexResponse> Indexes;
        /// <summary>
        /// The location of the resource group to which the resource belongs.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// The name of the database account.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// A key-value pair of shard keys to be applied for the request.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? ShardKey;
        /// <summary>
        /// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The type of Azure resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetDatabaseAccountMongoDBCollectionResult(
            string id,

            ImmutableArray<Outputs.MongoIndexResponse> indexes,

            string? location,

            string name,

            ImmutableDictionary<string, string>? shardKey,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            Id = id;
            Indexes = indexes;
            Location = location;
            Name = name;
            ShardKey = shardKey;
            Tags = tags;
            Type = type;
        }
    }
}
