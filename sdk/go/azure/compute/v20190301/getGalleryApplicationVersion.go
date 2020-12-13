// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190301

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupGalleryApplicationVersion(ctx *pulumi.Context, args *LookupGalleryApplicationVersionArgs, opts ...pulumi.InvokeOption) (*LookupGalleryApplicationVersionResult, error) {
	var rv LookupGalleryApplicationVersionResult
	err := ctx.Invoke("azure-nextgen:compute/v20190301:getGalleryApplicationVersion", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupGalleryApplicationVersionArgs struct {
	// The expand expression to apply on the operation.
	Expand *string `pulumi:"expand"`
	// The name of the gallery Application Definition in which the Application Version resides.
	GalleryApplicationName string `pulumi:"galleryApplicationName"`
	// The name of the gallery Application Version to be retrieved.
	GalleryApplicationVersionName string `pulumi:"galleryApplicationVersionName"`
	// The name of the Shared Application Gallery in which the Application Definition resides.
	GalleryName string `pulumi:"galleryName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Specifies information about the gallery Application Version that you want to create or update.
type LookupGalleryApplicationVersionResult struct {
	// Resource Id
	Id string `pulumi:"id"`
	// Resource location
	Location string `pulumi:"location"`
	// Resource name
	Name string `pulumi:"name"`
	// The provisioning state, which only appears in the response.
	ProvisioningState string `pulumi:"provisioningState"`
	// The publishing profile of a gallery Image Version.
	PublishingProfile GalleryApplicationVersionPublishingProfileResponse `pulumi:"publishingProfile"`
	// This is the replication status of the gallery Image Version.
	ReplicationStatus ReplicationStatusResponse `pulumi:"replicationStatus"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type string `pulumi:"type"`
}
