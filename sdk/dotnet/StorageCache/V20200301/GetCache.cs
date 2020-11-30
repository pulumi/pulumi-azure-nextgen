// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.StorageCache.V20200301
{
    public static class GetCache
    {
        public static Task<GetCacheResult> InvokeAsync(GetCacheArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetCacheResult>("azure-nextgen:storagecache/v20200301:getCache", args ?? new GetCacheArgs(), options.WithVersion());
    }


    public sealed class GetCacheArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of Cache. Length of name must be not greater than 80 and chars must be in list of [-0-9a-zA-Z_] char class.
        /// </summary>
        [Input("cacheName", required: true)]
        public string CacheName { get; set; } = null!;

        /// <summary>
        /// Target resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetCacheArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetCacheResult
    {
        /// <summary>
        /// The size of this Cache, in GB.
        /// </summary>
        public readonly int? CacheSizeGB;
        /// <summary>
        /// Specifies encryption settings of the cache.
        /// </summary>
        public readonly Outputs.CacheEncryptionSettingsResponse? EncryptionSettings;
        /// <summary>
        /// Health of the Cache.
        /// </summary>
        public readonly Outputs.CacheHealthResponse Health;
        /// <summary>
        /// The identity of the cache, if configured.
        /// </summary>
        public readonly Outputs.CacheIdentityResponse? Identity;
        /// <summary>
        /// Region name string.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Array of IP addresses that can be used by clients mounting this Cache.
        /// </summary>
        public readonly ImmutableArray<string> MountAddresses;
        /// <summary>
        /// Name of Cache.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Specifies network settings of the cache.
        /// </summary>
        public readonly Outputs.CacheNetworkSettingsResponse? NetworkSettings;
        /// <summary>
        /// ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
        /// </summary>
        public readonly string? ProvisioningState;
        /// <summary>
        /// Specifies security settings of the cache.
        /// </summary>
        public readonly Outputs.CacheSecuritySettingsResponse? SecuritySettings;
        /// <summary>
        /// SKU for the Cache.
        /// </summary>
        public readonly Outputs.CacheResponseSku? Sku;
        /// <summary>
        /// Subnet used for the Cache.
        /// </summary>
        public readonly string? Subnet;
        /// <summary>
        /// The system meta data relating to this resource.
        /// </summary>
        public readonly Outputs.SystemDataResponse SystemData;
        /// <summary>
        /// ARM tags as name/value pairs.
        /// </summary>
        public readonly object? Tags;
        /// <summary>
        /// Type of the Cache; Microsoft.StorageCache/Cache
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Upgrade status of the Cache.
        /// </summary>
        public readonly Outputs.CacheUpgradeStatusResponse? UpgradeStatus;

        [OutputConstructor]
        private GetCacheResult(
            int? cacheSizeGB,

            Outputs.CacheEncryptionSettingsResponse? encryptionSettings,

            Outputs.CacheHealthResponse health,

            Outputs.CacheIdentityResponse? identity,

            string? location,

            ImmutableArray<string> mountAddresses,

            string name,

            Outputs.CacheNetworkSettingsResponse? networkSettings,

            string? provisioningState,

            Outputs.CacheSecuritySettingsResponse? securitySettings,

            Outputs.CacheResponseSku? sku,

            string? subnet,

            Outputs.SystemDataResponse systemData,

            object? tags,

            string type,

            Outputs.CacheUpgradeStatusResponse? upgradeStatus)
        {
            CacheSizeGB = cacheSizeGB;
            EncryptionSettings = encryptionSettings;
            Health = health;
            Identity = identity;
            Location = location;
            MountAddresses = mountAddresses;
            Name = name;
            NetworkSettings = networkSettings;
            ProvisioningState = provisioningState;
            SecuritySettings = securitySettings;
            Sku = sku;
            Subnet = subnet;
            SystemData = systemData;
            Tags = tags;
            Type = type;
            UpgradeStatus = upgradeStatus;
        }
    }
}
