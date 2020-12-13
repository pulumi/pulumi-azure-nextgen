// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190401

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupBlobServiceProperties(ctx *pulumi.Context, args *LookupBlobServicePropertiesArgs, opts ...pulumi.InvokeOption) (*LookupBlobServicePropertiesResult, error) {
	var rv LookupBlobServicePropertiesResult
	err := ctx.Invoke("azure-nextgen:storage/v20190401:getBlobServiceProperties", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupBlobServicePropertiesArgs struct {
	// The name of the storage account within the specified resource group. Storage account names must be between 3 and 24 characters in length and use numbers and lower-case letters only.
	AccountName string `pulumi:"accountName"`
	// The name of the blob Service within the specified storage account. Blob Service Name must be 'default'
	BlobServicesName string `pulumi:"blobServicesName"`
	// The name of the resource group within the user's subscription. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The properties of a storage account’s Blob service.
type LookupBlobServicePropertiesResult struct {
	// Automatic Snapshot is enabled if set to true.
	AutomaticSnapshotPolicyEnabled *bool `pulumi:"automaticSnapshotPolicyEnabled"`
	// The blob service properties for change feed events.
	ChangeFeed *ChangeFeedResponse `pulumi:"changeFeed"`
	// Specifies CORS rules for the Blob service. You can include up to five CorsRule elements in the request. If no CorsRule elements are included in the request body, all CORS rules will be deleted, and CORS will be disabled for the Blob service.
	Cors *CorsRulesResponse `pulumi:"cors"`
	// DefaultServiceVersion indicates the default version to use for requests to the Blob service if an incoming request’s version is not specified. Possible values include version 2008-10-27 and all more recent versions.
	DefaultServiceVersion *string `pulumi:"defaultServiceVersion"`
	// The blob service properties for soft delete.
	DeleteRetentionPolicy *DeleteRetentionPolicyResponse `pulumi:"deleteRetentionPolicy"`
	// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
	Id string `pulumi:"id"`
	// The name of the resource
	Name string `pulumi:"name"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type string `pulumi:"type"`
}
