// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.HybridData.V20190601
{
    public static class GetDataManager
    {
        public static Task<GetDataManagerResult> InvokeAsync(GetDataManagerArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetDataManagerResult>("azure-nextgen:hybriddata/v20190601:getDataManager", args ?? new GetDataManagerArgs(), options.WithVersion());
    }


    public sealed class GetDataManagerArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
        /// </summary>
        [Input("dataManagerName", required: true)]
        public string DataManagerName { get; set; } = null!;

        /// <summary>
        /// The Resource Group Name
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetDataManagerArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetDataManagerResult
    {
        /// <summary>
        /// Etag of the Resource.
        /// </summary>
        public readonly string? Etag;
        /// <summary>
        /// The Resource Id.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East
        /// US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo
        /// region is specified on update the request will succeed.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// The Resource Name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The sku type.
        /// </summary>
        public readonly Outputs.SkuResponse? Sku;
        /// <summary>
        /// The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource
        /// (across resource groups).
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetDataManagerResult(
            string? etag,

            string id,

            string location,

            string name,

            Outputs.SkuResponse? sku,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            Etag = etag;
            Id = id;
            Location = location;
            Name = name;
            Sku = sku;
            Tags = tags;
            Type = type;
        }
    }
}
