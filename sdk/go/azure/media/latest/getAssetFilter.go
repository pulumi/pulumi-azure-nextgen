// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupAssetFilter(ctx *pulumi.Context, args *LookupAssetFilterArgs, opts ...pulumi.InvokeOption) (*LookupAssetFilterResult, error) {
	var rv LookupAssetFilterResult
	err := ctx.Invoke("azure-nextgen:media/latest:getAssetFilter", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupAssetFilterArgs struct {
	// The Media Services account name.
	AccountName string `pulumi:"accountName"`
	// The Asset name.
	AssetName string `pulumi:"assetName"`
	// The Asset Filter name
	FilterName string `pulumi:"filterName"`
	// The name of the resource group within the Azure subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// An Asset Filter.
type LookupAssetFilterResult struct {
	// The first quality.
	FirstQuality *FirstQualityResponse `pulumi:"firstQuality"`
	// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
	Id string `pulumi:"id"`
	// The name of the resource
	Name string `pulumi:"name"`
	// The presentation time range.
	PresentationTimeRange *PresentationTimeRangeResponse `pulumi:"presentationTimeRange"`
	// The tracks selection conditions.
	Tracks []FilterTrackSelectionResponse `pulumi:"tracks"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type string `pulumi:"type"`
}
