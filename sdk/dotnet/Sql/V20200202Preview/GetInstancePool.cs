// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Sql.V20200202Preview
{
    public static class GetInstancePool
    {
        public static Task<GetInstancePoolResult> InvokeAsync(GetInstancePoolArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetInstancePoolResult>("azure-nextgen:sql/v20200202preview:getInstancePool", args ?? new GetInstancePoolArgs(), options.WithVersion());
    }


    public sealed class GetInstancePoolArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the instance pool to be retrieved.
        /// </summary>
        [Input("instancePoolName", required: true)]
        public string InstancePoolName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetInstancePoolArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetInstancePoolResult
    {
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The license type. Possible values are 'LicenseIncluded' (price for SQL license is included) and 'BasePrice' (without SQL license price).
        /// </summary>
        public readonly string LicenseType;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The name and tier of the SKU.
        /// </summary>
        public readonly Outputs.SkuResponse? Sku;
        /// <summary>
        /// Resource ID of the subnet to place this instance pool in.
        /// </summary>
        public readonly string SubnetId;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Count of vCores belonging to this instance pool.
        /// </summary>
        public readonly int VCores;

        [OutputConstructor]
        private GetInstancePoolResult(
            string id,

            string licenseType,

            string location,

            string name,

            Outputs.SkuResponse? sku,

            string subnetId,

            ImmutableDictionary<string, string>? tags,

            string type,

            int vCores)
        {
            Id = id;
            LicenseType = licenseType;
            Location = location;
            Name = name;
            Sku = sku;
            SubnetId = subnetId;
            Tags = tags;
            Type = type;
            VCores = vCores;
        }
    }
}
