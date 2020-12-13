// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200921preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupMSIXPackage(ctx *pulumi.Context, args *LookupMSIXPackageArgs, opts ...pulumi.InvokeOption) (*LookupMSIXPackageResult, error) {
	var rv LookupMSIXPackageResult
	err := ctx.Invoke("azure-nextgen:desktopvirtualization/v20200921preview:getMSIXPackage", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupMSIXPackageArgs struct {
	// The name of the host pool within the specified resource group
	HostPoolName string `pulumi:"hostPoolName"`
	// The version specific package full name of the MSIX package within specified hostpool
	MsixPackageFullName string `pulumi:"msixPackageFullName"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Schema for MSIX Package properties.
type LookupMSIXPackageResult struct {
	// User friendly Name to be displayed in the portal.
	DisplayName *string `pulumi:"displayName"`
	// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
	Id string `pulumi:"id"`
	// VHD/CIM image path on Network Share.
	ImagePath *string `pulumi:"imagePath"`
	// Make this version of the package the active one across the hostpool.
	IsActive *bool `pulumi:"isActive"`
	// Specifies how to register Package in feed.
	IsRegularRegistration *bool `pulumi:"isRegularRegistration"`
	// Date Package was last updated, found in the appxmanifest.xml.
	LastUpdated *string `pulumi:"lastUpdated"`
	// The name of the resource
	Name string `pulumi:"name"`
	// List of package applications.
	PackageApplications []MsixPackageApplicationsResponse `pulumi:"packageApplications"`
	// List of package dependencies.
	PackageDependencies []MsixPackageDependenciesResponse `pulumi:"packageDependencies"`
	// Package Family Name from appxmanifest.xml. Contains Package Name and Publisher name.
	PackageFamilyName *string `pulumi:"packageFamilyName"`
	// Package Name from appxmanifest.xml.
	PackageName *string `pulumi:"packageName"`
	// Relative Path to the package inside the image.
	PackageRelativePath *string `pulumi:"packageRelativePath"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type string `pulumi:"type"`
	// Package Version found in the appxmanifest.xml.
	Version *string `pulumi:"version"`
}
