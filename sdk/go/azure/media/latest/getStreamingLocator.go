// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupStreamingLocator(ctx *pulumi.Context, args *LookupStreamingLocatorArgs, opts ...pulumi.InvokeOption) (*LookupStreamingLocatorResult, error) {
	var rv LookupStreamingLocatorResult
	err := ctx.Invoke("azure-nextgen:media/latest:getStreamingLocator", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupStreamingLocatorArgs struct {
	// The Media Services account name.
	AccountName string `pulumi:"accountName"`
	// The name of the resource group within the Azure subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The Streaming Locator name.
	StreamingLocatorName string `pulumi:"streamingLocatorName"`
}

// A Streaming Locator resource
type LookupStreamingLocatorResult struct {
	// Alternative Media ID of this Streaming Locator
	AlternativeMediaId *string `pulumi:"alternativeMediaId"`
	// Asset Name
	AssetName string `pulumi:"assetName"`
	// The ContentKeys used by this Streaming Locator.
	ContentKeys []StreamingLocatorContentKeyResponse `pulumi:"contentKeys"`
	// The creation time of the Streaming Locator.
	Created string `pulumi:"created"`
	// Name of the default ContentKeyPolicy used by this Streaming Locator.
	DefaultContentKeyPolicyName *string `pulumi:"defaultContentKeyPolicyName"`
	// The end time of the Streaming Locator.
	EndTime *string `pulumi:"endTime"`
	// A list of asset or account filters which apply to this streaming locator
	Filters []string `pulumi:"filters"`
	// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
	Id string `pulumi:"id"`
	// The name of the resource
	Name string `pulumi:"name"`
	// The start time of the Streaming Locator.
	StartTime *string `pulumi:"startTime"`
	// The StreamingLocatorId of the Streaming Locator.
	StreamingLocatorId *string `pulumi:"streamingLocatorId"`
	// Name of the Streaming Policy used by this Streaming Locator. Either specify the name of Streaming Policy you created or use one of the predefined Streaming Policies. The predefined Streaming Policies available are: 'Predefined_DownloadOnly', 'Predefined_ClearStreamingOnly', 'Predefined_DownloadAndClearStreaming', 'Predefined_ClearKey', 'Predefined_MultiDrmCencStreaming' and 'Predefined_MultiDrmStreaming'
	StreamingPolicyName string `pulumi:"streamingPolicyName"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type string `pulumi:"type"`
}
