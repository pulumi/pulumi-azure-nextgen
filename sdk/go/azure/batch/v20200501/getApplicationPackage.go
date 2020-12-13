// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200501

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupApplicationPackage(ctx *pulumi.Context, args *LookupApplicationPackageArgs, opts ...pulumi.InvokeOption) (*LookupApplicationPackageResult, error) {
	var rv LookupApplicationPackageResult
	err := ctx.Invoke("azure-nextgen:batch/v20200501:getApplicationPackage", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupApplicationPackageArgs struct {
	// The name of the Batch account.
	AccountName string `pulumi:"accountName"`
	// The name of the application. This must be unique within the account.
	ApplicationName string `pulumi:"applicationName"`
	// The name of the resource group that contains the Batch account.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The version of the application.
	VersionName string `pulumi:"versionName"`
}

// An application package which represents a particular version of an application.
type LookupApplicationPackageResult struct {
	// The ETag of the resource, used for concurrency statements.
	Etag string `pulumi:"etag"`
	// The format of the application package, if the package is active.
	Format string `pulumi:"format"`
	// The ID of the resource.
	Id string `pulumi:"id"`
	// The time at which the package was last activated, if the package is active.
	LastActivationTime string `pulumi:"lastActivationTime"`
	// The name of the resource.
	Name string `pulumi:"name"`
	// The current state of the application package.
	State string `pulumi:"state"`
	// The URL for the application package in Azure Storage.
	StorageUrl string `pulumi:"storageUrl"`
	// The UTC time at which the Azure Storage URL will expire.
	StorageUrlExpiry string `pulumi:"storageUrlExpiry"`
	// The type of the resource.
	Type string `pulumi:"type"`
}
