// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190801

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupWebAppSiteExtensionSlot(ctx *pulumi.Context, args *LookupWebAppSiteExtensionSlotArgs, opts ...pulumi.InvokeOption) (*LookupWebAppSiteExtensionSlotResult, error) {
	var rv LookupWebAppSiteExtensionSlotResult
	err := ctx.Invoke("azure-nextgen:web/v20190801:getWebAppSiteExtensionSlot", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupWebAppSiteExtensionSlotArgs struct {
	// Site name.
	Name string `pulumi:"name"`
	// Name of the resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Site extension name.
	SiteExtensionId string `pulumi:"siteExtensionId"`
	// Name of the deployment slot. If a slot is not specified, the API uses the production slot.
	Slot string `pulumi:"slot"`
}

// Site Extension Information.
type LookupWebAppSiteExtensionSlotResult struct {
	// List of authors.
	Authors []string `pulumi:"authors"`
	// Site Extension comment.
	Comment *string `pulumi:"comment"`
	// Detailed description.
	Description *string `pulumi:"description"`
	// Count of downloads.
	DownloadCount *int `pulumi:"downloadCount"`
	// Site extension ID.
	ExtensionId *string `pulumi:"extensionId"`
	// Site extension type.
	ExtensionType *string `pulumi:"extensionType"`
	// Extension URL.
	ExtensionUrl *string `pulumi:"extensionUrl"`
	// Feed URL.
	FeedUrl *string `pulumi:"feedUrl"`
	// Icon URL.
	IconUrl *string `pulumi:"iconUrl"`
	// Resource Id.
	Id string `pulumi:"id"`
	// Installed timestamp.
	InstalledDateTime *string `pulumi:"installedDateTime"`
	// Installer command line parameters.
	InstallerCommandLineParams *string `pulumi:"installerCommandLineParams"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// License URL.
	LicenseUrl *string `pulumi:"licenseUrl"`
	// <code>true</code> if the local version is the latest version; <code>false</code> otherwise.
	LocalIsLatestVersion *bool `pulumi:"localIsLatestVersion"`
	// Local path.
	LocalPath *string `pulumi:"localPath"`
	// Resource Name.
	Name string `pulumi:"name"`
	// Project URL.
	ProjectUrl *string `pulumi:"projectUrl"`
	// Provisioning state.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Published timestamp.
	PublishedDateTime *string `pulumi:"publishedDateTime"`
	// Summary description.
	Summary *string `pulumi:"summary"`
	Title   *string `pulumi:"title"`
	// Resource type.
	Type string `pulumi:"type"`
	// Version information.
	Version *string `pulumi:"version"`
}
