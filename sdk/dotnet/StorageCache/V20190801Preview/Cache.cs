// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.StorageCache.V20190801Preview
{
    /// <summary>
    /// A cache instance.  Follows Azure Resource Manager standards: https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/resource-api-reference.md
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:storagecache/v20190801preview:Cache")]
    public partial class Cache : Pulumi.CustomResource
    {
        /// <summary>
        /// The size of this cache's cache, in GB.
        /// </summary>
        [Output("cacheSizeGB")]
        public Output<int?> CacheSizeGB { get; private set; } = null!;

        /// <summary>
        /// Health of the cache.
        /// </summary>
        [Output("health")]
        public Output<Outputs.CacheHealthResponse> Health { get; private set; } = null!;

        /// <summary>
        /// Region name string.
        /// </summary>
        [Output("location")]
        public Output<string?> Location { get; private set; } = null!;

        /// <summary>
        /// Array of IP addresses that can be used by clients mounting this Cache.
        /// </summary>
        [Output("mountAddresses")]
        public Output<ImmutableArray<string>> MountAddresses { get; private set; } = null!;

        /// <summary>
        /// Name of cache.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
        /// </summary>
        [Output("provisioningState")]
        public Output<string?> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Sku for the cache.
        /// </summary>
        [Output("sku")]
        public Output<Outputs.CacheResponseSku?> Sku { get; private set; } = null!;

        /// <summary>
        /// Subnet used for the cache.
        /// </summary>
        [Output("subnet")]
        public Output<string?> Subnet { get; private set; } = null!;

        /// <summary>
        /// ARM tags as name/value pairs.
        /// </summary>
        [Output("tags")]
        public Output<object?> Tags { get; private set; } = null!;

        /// <summary>
        /// Type for the cache; Microsoft.StorageCache/Cache
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// Upgrade status of the cache.
        /// </summary>
        [Output("upgradeStatus")]
        public Output<Outputs.CacheUpgradeStatusResponse?> UpgradeStatus { get; private set; } = null!;


        /// <summary>
        /// Create a Cache resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Cache(string name, CacheArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:storagecache/v20190801preview:Cache", name, args ?? new CacheArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Cache(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:storagecache/v20190801preview:Cache", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:storagecache/latest:Cache"},
                    new Pulumi.Alias { Type = "azure-nextgen:storagecache/v20191101:Cache"},
                    new Pulumi.Alias { Type = "azure-nextgen:storagecache/v20200301:Cache"},
                    new Pulumi.Alias { Type = "azure-nextgen:storagecache/v20201001:Cache"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Cache resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Cache Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Cache(name, id, options);
        }
    }

    public sealed class CacheArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Name of cache.
        /// </summary>
        [Input("cacheName", required: true)]
        public Input<string> CacheName { get; set; } = null!;

        /// <summary>
        /// The size of this cache's cache, in GB.
        /// </summary>
        [Input("cacheSizeGB")]
        public Input<int>? CacheSizeGB { get; set; }

        /// <summary>
        /// Region name string.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
        /// </summary>
        [Input("provisioningState")]
        public InputUnion<string, Pulumi.AzureNextGen.StorageCache.V20190801Preview.ProvisioningStateType>? ProvisioningState { get; set; }

        /// <summary>
        /// Target resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Sku for the cache.
        /// </summary>
        [Input("sku")]
        public Input<Inputs.CacheSkuArgs>? Sku { get; set; }

        /// <summary>
        /// Subnet used for the cache.
        /// </summary>
        [Input("subnet")]
        public Input<string>? Subnet { get; set; }

        /// <summary>
        /// ARM tags as name/value pairs.
        /// </summary>
        [Input("tags")]
        public Input<object>? Tags { get; set; }

        public CacheArgs()
        {
        }
    }
}
