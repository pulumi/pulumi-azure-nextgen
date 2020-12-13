// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180601preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupLiveOutput(ctx *pulumi.Context, args *LookupLiveOutputArgs, opts ...pulumi.InvokeOption) (*LookupLiveOutputResult, error) {
	var rv LookupLiveOutputResult
	err := ctx.Invoke("azure-nextgen:media/v20180601preview:getLiveOutput", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupLiveOutputArgs struct {
	// The Media Services account name.
	AccountName string `pulumi:"accountName"`
	// The name of the Live Event.
	LiveEventName string `pulumi:"liveEventName"`
	// The name of the Live Output.
	LiveOutputName string `pulumi:"liveOutputName"`
	// The name of the resource group within the Azure subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The Live Output.
type LookupLiveOutputResult struct {
	// ISO 8601 timespan duration of the archive window length. This is duration that customer want to retain the recorded content.
	ArchiveWindowLength string `pulumi:"archiveWindowLength"`
	// The asset name.
	AssetName string `pulumi:"assetName"`
	// The exact time the Live Output was created.
	Created string `pulumi:"created"`
	// The description of the Live Output.
	Description *string `pulumi:"description"`
	// The HLS configuration.
	Hls *HlsResponse `pulumi:"hls"`
	// Fully qualified resource ID for the resource.
	Id string `pulumi:"id"`
	// The exact time the Live Output was last modified.
	LastModified string `pulumi:"lastModified"`
	// The manifest file name.
	ManifestName *string `pulumi:"manifestName"`
	// The name of the resource.
	Name string `pulumi:"name"`
	// The output snapshot time.
	OutputSnapTime *int `pulumi:"outputSnapTime"`
	// The provisioning state of the Live Output.
	ProvisioningState string `pulumi:"provisioningState"`
	// The resource state of the Live Output.
	ResourceState string `pulumi:"resourceState"`
	// The type of the resource.
	Type string `pulumi:"type"`
}
