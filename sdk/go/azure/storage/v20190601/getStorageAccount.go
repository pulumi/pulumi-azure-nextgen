// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190601

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupStorageAccount(ctx *pulumi.Context, args *LookupStorageAccountArgs, opts ...pulumi.InvokeOption) (*LookupStorageAccountResult, error) {
	var rv LookupStorageAccountResult
	err := ctx.Invoke("azure-nextgen:storage/v20190601:getStorageAccount", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupStorageAccountArgs struct {
	// The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
	AccountName string `pulumi:"accountName"`
	// May be used to expand the properties within account's properties. By default, data is not included when fetching properties. Currently we only support geoReplicationStats and blobRestoreStatus.
	Expand *string `pulumi:"expand"`
	// The name of the resource group within the user's subscription. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The storage account.
type LookupStorageAccountResult struct {
	// Required for storage accounts where kind = BlobStorage. The access tier used for billing.
	AccessTier string `pulumi:"accessTier"`
	// Allow or disallow public access to all blobs or containers in the storage account. The default interpretation is true for this property.
	AllowBlobPublicAccess *bool `pulumi:"allowBlobPublicAccess"`
	// Provides the identity based authentication settings for Azure Files.
	AzureFilesIdentityBasedAuthentication *AzureFilesIdentityBasedAuthenticationResponse `pulumi:"azureFilesIdentityBasedAuthentication"`
	// Blob restore status
	BlobRestoreStatus BlobRestoreStatusResponse `pulumi:"blobRestoreStatus"`
	// Gets the creation date and time of the storage account in UTC.
	CreationTime string `pulumi:"creationTime"`
	// Gets the custom domain the user assigned to this storage account.
	CustomDomain CustomDomainResponse `pulumi:"customDomain"`
	// Allows https traffic only to storage service if sets to true.
	EnableHttpsTrafficOnly *bool `pulumi:"enableHttpsTrafficOnly"`
	// Gets the encryption settings on the account. If unspecified, the account is unencrypted.
	Encryption EncryptionResponse `pulumi:"encryption"`
	// If the failover is in progress, the value will be true, otherwise, it will be null.
	FailoverInProgress bool `pulumi:"failoverInProgress"`
	// Geo Replication Stats
	GeoReplicationStats GeoReplicationStatsResponse `pulumi:"geoReplicationStats"`
	// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
	Id string `pulumi:"id"`
	// The identity of the resource.
	Identity *IdentityResponse `pulumi:"identity"`
	// Account HierarchicalNamespace enabled if sets to true.
	IsHnsEnabled *bool `pulumi:"isHnsEnabled"`
	// Gets the Kind.
	Kind string `pulumi:"kind"`
	// Allow large file shares if sets to Enabled. It cannot be disabled once it is enabled.
	LargeFileSharesState *string `pulumi:"largeFileSharesState"`
	// Gets the timestamp of the most recent instance of a failover to the secondary location. Only the most recent timestamp is retained. This element is not returned if there has never been a failover instance. Only available if the accountType is Standard_GRS or Standard_RAGRS.
	LastGeoFailoverTime string `pulumi:"lastGeoFailoverTime"`
	// The geo-location where the resource lives
	Location string `pulumi:"location"`
	// Set the minimum TLS version to be permitted on requests to storage. The default interpretation is TLS 1.0 for this property.
	MinimumTlsVersion *string `pulumi:"minimumTlsVersion"`
	// The name of the resource
	Name string `pulumi:"name"`
	// Network rule set
	NetworkRuleSet NetworkRuleSetResponse `pulumi:"networkRuleSet"`
	// Gets the URLs that are used to perform a retrieval of a public blob, queue, or table object. Note that Standard_ZRS and Premium_LRS accounts only return the blob endpoint.
	PrimaryEndpoints EndpointsResponse `pulumi:"primaryEndpoints"`
	// Gets the location of the primary data center for the storage account.
	PrimaryLocation string `pulumi:"primaryLocation"`
	// List of private endpoint connection associated with the specified storage account
	PrivateEndpointConnections []PrivateEndpointConnectionResponse `pulumi:"privateEndpointConnections"`
	// Gets the status of the storage account at the time the operation was called.
	ProvisioningState string `pulumi:"provisioningState"`
	// Maintains information about the network routing choice opted by the user for data transfer
	RoutingPreference *RoutingPreferenceResponse `pulumi:"routingPreference"`
	// Gets the URLs that are used to perform a retrieval of a public blob, queue, or table object from the secondary location of the storage account. Only available if the SKU name is Standard_RAGRS.
	SecondaryEndpoints EndpointsResponse `pulumi:"secondaryEndpoints"`
	// Gets the location of the geo-replicated secondary for the storage account. Only available if the accountType is Standard_GRS or Standard_RAGRS.
	SecondaryLocation string `pulumi:"secondaryLocation"`
	// Gets the SKU.
	Sku SkuResponse `pulumi:"sku"`
	// Gets the status indicating whether the primary location of the storage account is available or unavailable.
	StatusOfPrimary string `pulumi:"statusOfPrimary"`
	// Gets the status indicating whether the secondary location of the storage account is available or unavailable. Only available if the SKU name is Standard_GRS or Standard_RAGRS.
	StatusOfSecondary string `pulumi:"statusOfSecondary"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type string `pulumi:"type"`
}
