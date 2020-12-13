// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataCatalog.V20160330
{
    public static class GetADCCatalog
    {
        public static Task<GetADCCatalogResult> InvokeAsync(GetADCCatalogArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetADCCatalogResult>("azure-nextgen:datacatalog/v20160330:getADCCatalog", args ?? new GetADCCatalogArgs(), options.WithVersion());
    }


    public sealed class GetADCCatalogArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the data catalog in the specified subscription and resource group.
        /// </summary>
        [Input("catalogName", required: true)]
        public string CatalogName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group within the user's subscription. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetADCCatalogArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetADCCatalogResult
    {
        /// <summary>
        /// Azure data catalog admin list.
        /// </summary>
        public readonly ImmutableArray<Outputs.PrincipalsResponse> Admins;
        /// <summary>
        /// Automatic unit adjustment enabled or not.
        /// </summary>
        public readonly bool? EnableAutomaticUnitAdjustment;
        /// <summary>
        /// Resource etag
        /// </summary>
        public readonly string? Etag;
        /// <summary>
        /// Resource Id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource location
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Resource name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Azure data catalog SKU.
        /// </summary>
        public readonly string? Sku;
        /// <summary>
        /// Azure data catalog provision status.
        /// </summary>
        public readonly bool? SuccessfullyProvisioned;
        /// <summary>
        /// Resource tags
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Azure data catalog units.
        /// </summary>
        public readonly int? Units;
        /// <summary>
        /// Azure data catalog user list.
        /// </summary>
        public readonly ImmutableArray<Outputs.PrincipalsResponse> Users;

        [OutputConstructor]
        private GetADCCatalogResult(
            ImmutableArray<Outputs.PrincipalsResponse> admins,

            bool? enableAutomaticUnitAdjustment,

            string? etag,

            string id,

            string? location,

            string name,

            string? sku,

            bool? successfullyProvisioned,

            ImmutableDictionary<string, string>? tags,

            string type,

            int? units,

            ImmutableArray<Outputs.PrincipalsResponse> users)
        {
            Admins = admins;
            EnableAutomaticUnitAdjustment = enableAutomaticUnitAdjustment;
            Etag = etag;
            Id = id;
            Location = location;
            Name = name;
            Sku = sku;
            SuccessfullyProvisioned = successfullyProvisioned;
            Tags = tags;
            Type = type;
            Units = units;
            Users = users;
        }
    }
}
