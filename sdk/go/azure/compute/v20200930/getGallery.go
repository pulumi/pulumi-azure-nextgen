// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200930

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupGallery(ctx *pulumi.Context, args *LookupGalleryArgs, opts ...pulumi.InvokeOption) (*LookupGalleryResult, error) {
	var rv LookupGalleryResult
	err := ctx.Invoke("azure-nextgen:compute/v20200930:getGallery", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupGalleryArgs struct {
	// The name of the Shared Image Gallery.
	GalleryName string `pulumi:"galleryName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The select expression to apply on the operation.
	Select *string `pulumi:"select"`
}

// Specifies information about the Shared Image Gallery that you want to create or update.
type LookupGalleryResult struct {
	// The description of this Shared Image Gallery resource. This property is updatable.
	Description *string `pulumi:"description"`
	// Resource Id
	Id string `pulumi:"id"`
	// Describes the gallery unique name.
	Identifier *GalleryIdentifierResponse `pulumi:"identifier"`
	// Resource location
	Location string `pulumi:"location"`
	// Resource name
	Name string `pulumi:"name"`
	// The provisioning state, which only appears in the response.
	ProvisioningState string `pulumi:"provisioningState"`
	// Profile for gallery sharing to subscription or tenant
	SharingProfile *SharingProfileResponse `pulumi:"sharingProfile"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type string `pulumi:"type"`
}
