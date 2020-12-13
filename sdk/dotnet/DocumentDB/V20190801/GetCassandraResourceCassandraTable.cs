// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DocumentDB.V20190801
{
    public static class GetCassandraResourceCassandraTable
    {
        public static Task<GetCassandraResourceCassandraTableResult> InvokeAsync(GetCassandraResourceCassandraTableArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetCassandraResourceCassandraTableResult>("azure-nextgen:documentdb/v20190801:getCassandraResourceCassandraTable", args ?? new GetCassandraResourceCassandraTableArgs(), options.WithVersion());
    }


    public sealed class GetCassandraResourceCassandraTableArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Cosmos DB database account name.
        /// </summary>
        [Input("accountName", required: true)]
        public string AccountName { get; set; } = null!;

        /// <summary>
        /// Cosmos DB keyspace name.
        /// </summary>
        [Input("keyspaceName", required: true)]
        public string KeyspaceName { get; set; } = null!;

        /// <summary>
        /// Name of an Azure resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Cosmos DB table name.
        /// </summary>
        [Input("tableName", required: true)]
        public string TableName { get; set; } = null!;

        public GetCassandraResourceCassandraTableArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetCassandraResourceCassandraTableResult
    {
        /// <summary>
        /// The unique resource identifier of the ARM resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The location of the resource group to which the resource belongs.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// The name of the ARM resource.
        /// </summary>
        public readonly string Name;
        public readonly Outputs.CassandraTableGetPropertiesResponseResource? Resource;
        /// <summary>
        /// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The type of Azure resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetCassandraResourceCassandraTableResult(
            string id,

            string? location,

            string name,

            Outputs.CassandraTableGetPropertiesResponseResource? resource,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            Id = id;
            Location = location;
            Name = name;
            Resource = resource;
            Tags = tags;
            Type = type;
        }
    }
}
