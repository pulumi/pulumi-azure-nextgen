// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180701

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupStreamingPolicy(ctx *pulumi.Context, args *LookupStreamingPolicyArgs, opts ...pulumi.InvokeOption) (*LookupStreamingPolicyResult, error) {
	var rv LookupStreamingPolicyResult
	err := ctx.Invoke("azure-nextgen:media/v20180701:getStreamingPolicy", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupStreamingPolicyArgs struct {
	// The Media Services account name.
	AccountName string `pulumi:"accountName"`
	// The name of the resource group within the Azure subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The Streaming Policy name.
	StreamingPolicyName string `pulumi:"streamingPolicyName"`
}

// A Streaming Policy resource
type LookupStreamingPolicyResult struct {
	// Configuration of CommonEncryptionCbcs
	CommonEncryptionCbcs *CommonEncryptionCbcsResponse `pulumi:"commonEncryptionCbcs"`
	// Configuration of CommonEncryptionCenc
	CommonEncryptionCenc *CommonEncryptionCencResponse `pulumi:"commonEncryptionCenc"`
	// Creation time of Streaming Policy
	Created string `pulumi:"created"`
	// Default ContentKey used by current Streaming Policy
	DefaultContentKeyPolicyName *string `pulumi:"defaultContentKeyPolicyName"`
	// Configuration of EnvelopeEncryption
	EnvelopeEncryption *EnvelopeEncryptionResponse `pulumi:"envelopeEncryption"`
	// Fully qualified resource ID for the resource.
	Id string `pulumi:"id"`
	// The name of the resource.
	Name string `pulumi:"name"`
	// Configurations of NoEncryption
	NoEncryption *NoEncryptionResponse `pulumi:"noEncryption"`
	// The type of the resource.
	Type string `pulumi:"type"`
}
