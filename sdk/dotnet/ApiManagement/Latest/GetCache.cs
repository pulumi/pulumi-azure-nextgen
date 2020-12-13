// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ApiManagement.Latest
{
    public static class GetCache
    {
        public static Task<GetCacheResult> InvokeAsync(GetCacheArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetCacheResult>("azure-nextgen:apimanagement/latest:getCache", args ?? new GetCacheArgs(), options.WithVersion());
    }


    public sealed class GetCacheArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Identifier of the Cache entity. Cache identifier (should be either 'default' or valid Azure region identifier).
        /// </summary>
        [Input("cacheId", required: true)]
        public string CacheId { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the API Management service.
        /// </summary>
        [Input("serviceName", required: true)]
        public string ServiceName { get; set; } = null!;

        public GetCacheArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetCacheResult
    {
        /// <summary>
        /// Runtime connection string to cache
        /// </summary>
        public readonly string ConnectionString;
        /// <summary>
        /// Cache description
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Original uri of entity in external system cache points to
        /// </summary>
        public readonly string? ResourceId;
        /// <summary>
        /// Resource type for API Management resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetCacheResult(
            string connectionString,

            string? description,

            string id,

            string name,

            string? resourceId,

            string type)
        {
            ConnectionString = connectionString;
            Description = description;
            Id = id;
            Name = name;
            ResourceId = resourceId;
            Type = type;
        }
    }
}
