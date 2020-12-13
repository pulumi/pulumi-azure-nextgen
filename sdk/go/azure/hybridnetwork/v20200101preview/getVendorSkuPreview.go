// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200101preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupVendorSkuPreview(ctx *pulumi.Context, args *LookupVendorSkuPreviewArgs, opts ...pulumi.InvokeOption) (*LookupVendorSkuPreviewResult, error) {
	var rv LookupVendorSkuPreviewResult
	err := ctx.Invoke("azure-nextgen:hybridnetwork/v20200101preview:getVendorSkuPreview", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupVendorSkuPreviewArgs struct {
	// Preview subscription ID.
	PreviewSubscription string `pulumi:"previewSubscription"`
	// The name of the vendor sku.
	SkuName string `pulumi:"skuName"`
	// The name of the vendor.
	VendorName string `pulumi:"vendorName"`
}

// Customer subscription which can use a sku.
type LookupVendorSkuPreviewResult struct {
	// The ARM ID of the resource.
	Id string `pulumi:"id"`
	// The preview subscription ID.
	Name string `pulumi:"name"`
	// The type of the resource.
	Type string `pulumi:"type"`
}
