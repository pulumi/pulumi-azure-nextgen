// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupCache(ctx *pulumi.Context, args *LookupCacheArgs, opts ...pulumi.InvokeOption) (*LookupCacheResult, error) {
	var rv LookupCacheResult
	err := ctx.Invoke("azure-nextgen:storagecache/latest:getCache", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupCacheArgs struct {
	// Name of Cache. Length of name must be not greater than 80 and chars must be in list of [-0-9a-zA-Z_] char class.
	CacheName string `pulumi:"cacheName"`
	// Target resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// A Cache instance. Follows Azure Resource Manager standards: https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/resource-api-reference.md
type LookupCacheResult struct {
	// The size of this Cache, in GB.
	CacheSizeGB *int `pulumi:"cacheSizeGB"`
	// Specifies encryption settings of the cache.
	EncryptionSettings *CacheEncryptionSettingsResponse `pulumi:"encryptionSettings"`
	// Health of the Cache.
	Health CacheHealthResponse `pulumi:"health"`
	// The identity of the cache, if configured.
	Identity *CacheIdentityResponse `pulumi:"identity"`
	// Region name string.
	Location *string `pulumi:"location"`
	// Array of IP addresses that can be used by clients mounting this Cache.
	MountAddresses []string `pulumi:"mountAddresses"`
	// Name of Cache.
	Name string `pulumi:"name"`
	// Specifies network settings of the cache.
	NetworkSettings *CacheNetworkSettingsResponse `pulumi:"networkSettings"`
	// ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
	ProvisioningState *string `pulumi:"provisioningState"`
	// Specifies security settings of the cache.
	SecuritySettings *CacheSecuritySettingsResponse `pulumi:"securitySettings"`
	// SKU for the Cache.
	Sku *CacheResponseSku `pulumi:"sku"`
	// Subnet used for the Cache.
	Subnet *string `pulumi:"subnet"`
	// The system meta data relating to this resource.
	SystemData SystemDataResponse `pulumi:"systemData"`
	// ARM tags as name/value pairs.
	Tags interface{} `pulumi:"tags"`
	// Type of the Cache; Microsoft.StorageCache/Cache
	Type string `pulumi:"type"`
	// Upgrade status of the Cache.
	UpgradeStatus *CacheUpgradeStatusResponse `pulumi:"upgradeStatus"`
}
