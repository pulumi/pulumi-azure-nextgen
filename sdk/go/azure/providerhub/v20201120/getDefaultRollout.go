// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20201120

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupDefaultRollout(ctx *pulumi.Context, args *LookupDefaultRolloutArgs, opts ...pulumi.InvokeOption) (*LookupDefaultRolloutResult, error) {
	var rv LookupDefaultRolloutResult
	err := ctx.Invoke("azure-nextgen:providerhub/v20201120:getDefaultRollout", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupDefaultRolloutArgs struct {
	// The name of the resource provider hosted within ProviderHub.
	ProviderNamespace string `pulumi:"providerNamespace"`
	// The rollout name.
	RolloutName string `pulumi:"rolloutName"`
}

// Default rollout definition.
type LookupDefaultRolloutResult struct {
	// The name of the resource
	Name              string                                         `pulumi:"name"`
	ProvisioningState *string                                        `pulumi:"provisioningState"`
	Specification     *DefaultRolloutPropertiesResponseSpecification `pulumi:"specification"`
	Status            *DefaultRolloutPropertiesResponseStatus        `pulumi:"status"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type string `pulumi:"type"`
}
