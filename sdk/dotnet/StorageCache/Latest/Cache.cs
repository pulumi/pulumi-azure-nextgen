// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.StorageCache.Latest
{
    /// <summary>
    /// A Cache instance. Follows Azure Resource Manager standards: https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/resource-api-reference.md
    /// </summary>
    public partial class Cache : Pulumi.CustomResource
    {
        /// <summary>
        /// The size of this Cache, in GB.
        /// </summary>
        [Output("cacheSizeGB")]
        public Output<int?> CacheSizeGB { get; private set; } = null!;

        /// <summary>
        /// Specifies encryption settings of the cache.
        /// </summary>
        [Output("encryptionSettings")]
        public Output<Outputs.CacheEncryptionSettingsResponse?> EncryptionSettings { get; private set; } = null!;

        /// <summary>
        /// Health of the Cache.
        /// </summary>
        [Output("health")]
        public Output<Outputs.CacheHealthResponse> Health { get; private set; } = null!;

        /// <summary>
        /// The identity of the cache, if configured.
        /// </summary>
        [Output("identity")]
        public Output<Outputs.CacheIdentityResponse?> Identity { get; private set; } = null!;

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
        /// Name of Cache.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Specifies network settings of the cache.
        /// </summary>
        [Output("networkSettings")]
        public Output<Outputs.CacheNetworkSettingsResponse?> NetworkSettings { get; private set; } = null!;

        /// <summary>
        /// ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
        /// </summary>
        [Output("provisioningState")]
        public Output<string?> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Specifies security settings of the cache.
        /// </summary>
        [Output("securitySettings")]
        public Output<Outputs.CacheSecuritySettingsResponse?> SecuritySettings { get; private set; } = null!;

        /// <summary>
        /// SKU for the Cache.
        /// </summary>
        [Output("sku")]
        public Output<Outputs.CacheResponseSku?> Sku { get; private set; } = null!;

        /// <summary>
        /// Subnet used for the Cache.
        /// </summary>
        [Output("subnet")]
        public Output<string?> Subnet { get; private set; } = null!;

        /// <summary>
        /// The system meta data relating to this resource.
        /// </summary>
        [Output("systemData")]
        public Output<Outputs.SystemDataResponse> SystemData { get; private set; } = null!;

        /// <summary>
        /// ARM tags as name/value pairs.
        /// </summary>
        [Output("tags")]
        public Output<object?> Tags { get; private set; } = null!;

        /// <summary>
        /// Type of the Cache; Microsoft.StorageCache/Cache
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// Upgrade status of the Cache.
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
            : base("azure-nextgen:storagecache/latest:Cache", name, args ?? new CacheArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Cache(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:storagecache/latest:Cache", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:storagecache/v20190801preview:Cache"},
                    new Pulumi.Alias { Type = "azure-nextgen:storagecache/v20191101:Cache"},
                    new Pulumi.Alias { Type = "azure-nextgen:storagecache/v20200301:Cache"},
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
        /// Name of Cache. Length of name must be not greater than 80 and chars must be in list of [-0-9a-zA-Z_] char class.
        /// </summary>
        [Input("cacheName", required: true)]
        public Input<string> CacheName { get; set; } = null!;

        /// <summary>
        /// The size of this Cache, in GB.
        /// </summary>
        [Input("cacheSizeGB")]
        public Input<int>? CacheSizeGB { get; set; }

        /// <summary>
        /// Specifies encryption settings of the cache.
        /// </summary>
        [Input("encryptionSettings")]
        public Input<Inputs.CacheEncryptionSettingsArgs>? EncryptionSettings { get; set; }

        /// <summary>
        /// The identity of the cache, if configured.
        /// </summary>
        [Input("identity")]
        public Input<Inputs.CacheIdentityArgs>? Identity { get; set; }

        /// <summary>
        /// Region name string.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// Specifies network settings of the cache.
        /// </summary>
        [Input("networkSettings")]
        public Input<Inputs.CacheNetworkSettingsArgs>? NetworkSettings { get; set; }

        /// <summary>
        /// ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
        /// </summary>
        [Input("provisioningState")]
        public Input<string>? ProvisioningState { get; set; }

        /// <summary>
        /// Target resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Specifies security settings of the cache.
        /// </summary>
        [Input("securitySettings")]
        public Input<Inputs.CacheSecuritySettingsArgs>? SecuritySettings { get; set; }

        /// <summary>
        /// SKU for the Cache.
        /// </summary>
        [Input("sku")]
        public Input<Inputs.CacheSkuArgs>? Sku { get; set; }

        /// <summary>
        /// Subnet used for the Cache.
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
