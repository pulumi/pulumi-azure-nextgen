// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191201

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupGalleryImageVersion(ctx *pulumi.Context, args *LookupGalleryImageVersionArgs, opts ...pulumi.InvokeOption) (*LookupGalleryImageVersionResult, error) {
	var rv LookupGalleryImageVersionResult
	err := ctx.Invoke("azure-nextgen:compute/v20191201:getGalleryImageVersion", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupGalleryImageVersionArgs struct {
	// The expand expression to apply on the operation.
	Expand *string `pulumi:"expand"`
	// The name of the gallery Image Definition in which the Image Version resides.
	GalleryImageName string `pulumi:"galleryImageName"`
	// The name of the gallery Image Version to be retrieved.
	GalleryImageVersionName string `pulumi:"galleryImageVersionName"`
	// The name of the Shared Image Gallery in which the Image Definition resides.
	GalleryName string `pulumi:"galleryName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Specifies information about the gallery Image Version that you want to create or update.
type LookupGalleryImageVersionResult struct {
	// Resource Id
	Id string `pulumi:"id"`
	// Resource location
	Location string `pulumi:"location"`
	// Resource name
	Name string `pulumi:"name"`
	// The provisioning state, which only appears in the response.
	ProvisioningState string `pulumi:"provisioningState"`
	// The publishing profile of a gallery Image Version.
	PublishingProfile *GalleryImageVersionPublishingProfileResponse `pulumi:"publishingProfile"`
	// This is the replication status of the gallery Image Version.
	ReplicationStatus ReplicationStatusResponse `pulumi:"replicationStatus"`
	// This is the storage profile of a Gallery Image Version.
	StorageProfile GalleryImageVersionStorageProfileResponse `pulumi:"storageProfile"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type string `pulumi:"type"`
}
