// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DocumentDB.V20200301
{
    public static class GetSqlResourceSqlContainer
    {
        public static Task<GetSqlResourceSqlContainerResult> InvokeAsync(GetSqlResourceSqlContainerArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetSqlResourceSqlContainerResult>("azure-nextgen:documentdb/v20200301:getSqlResourceSqlContainer", args ?? new GetSqlResourceSqlContainerArgs(), options.WithVersion());
    }


    public sealed class GetSqlResourceSqlContainerArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Cosmos DB database account name.
        /// </summary>
        [Input("accountName", required: true)]
        public string AccountName { get; set; } = null!;

        /// <summary>
        /// Cosmos DB container name.
        /// </summary>
        [Input("containerName", required: true)]
        public string ContainerName { get; set; } = null!;

        /// <summary>
        /// Cosmos DB database name.
        /// </summary>
        [Input("databaseName", required: true)]
        public string DatabaseName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetSqlResourceSqlContainerArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetSqlResourceSqlContainerResult
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
        public readonly Outputs.SqlContainerGetPropertiesResponseOptions? Options;
        public readonly Outputs.SqlContainerGetPropertiesResponseResource? Resource;
        /// <summary>
        /// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The type of Azure resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetSqlResourceSqlContainerResult(
            string id,

            string? location,

            string name,

            Outputs.SqlContainerGetPropertiesResponseOptions? options,

            Outputs.SqlContainerGetPropertiesResponseResource? resource,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            Id = id;
            Location = location;
            Name = name;
            Options = options;
            Resource = resource;
            Tags = tags;
            Type = type;
        }
    }
}
