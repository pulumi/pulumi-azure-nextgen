// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190801preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupCache(ctx *pulumi.Context, args *LookupCacheArgs, opts ...pulumi.InvokeOption) (*LookupCacheResult, error) {
	var rv LookupCacheResult
	err := ctx.Invoke("azure-nextgen:storagecache/v20190801preview:getCache", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupCacheArgs struct {
	// Name of cache.
	CacheName string `pulumi:"cacheName"`
	// Target resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// A cache instance.  Follows Azure Resource Manager standards: https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/resource-api-reference.md
type LookupCacheResult struct {
	// The size of this cache's cache, in GB.
	CacheSizeGB *int `pulumi:"cacheSizeGB"`
	// Health of the cache.
	Health CacheHealthResponse `pulumi:"health"`
	// Fully qualified URL of the cache.
	Id string `pulumi:"id"`
	// Region name string.
	Location *string `pulumi:"location"`
	// Array of IP addresses that can be used by clients mounting this Cache.
	MountAddresses []string `pulumi:"mountAddresses"`
	// Name of cache.
	Name string `pulumi:"name"`
	// ARM provisioning state, see https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/Addendum.md#provisioningstate-property
	ProvisioningState *string `pulumi:"provisioningState"`
	// Sku for the cache.
	Sku *CacheResponseSku `pulumi:"sku"`
	// Subnet used for the cache.
	Subnet *string `pulumi:"subnet"`
	// ARM tags as name/value pairs.
	Tags interface{} `pulumi:"tags"`
	// Type for the cache; Microsoft.StorageCache/Cache
	Type string `pulumi:"type"`
	// Upgrade status of the cache.
	UpgradeStatus *CacheUpgradeStatusResponse `pulumi:"upgradeStatus"`
}
