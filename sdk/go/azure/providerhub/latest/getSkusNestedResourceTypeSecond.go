// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupSkusNestedResourceTypeSecond(ctx *pulumi.Context, args *LookupSkusNestedResourceTypeSecondArgs, opts ...pulumi.InvokeOption) (*LookupSkusNestedResourceTypeSecondResult, error) {
	var rv LookupSkusNestedResourceTypeSecondResult
	err := ctx.Invoke("azure-nextgen:providerhub/latest:getSkusNestedResourceTypeSecond", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupSkusNestedResourceTypeSecondArgs struct {
	// The first child resource type.
	NestedResourceTypeFirst string `pulumi:"nestedResourceTypeFirst"`
	// The second child resource type.
	NestedResourceTypeSecond string `pulumi:"nestedResourceTypeSecond"`
	// The name of the resource provider hosted within ProviderHub.
	ProviderNamespace string `pulumi:"providerNamespace"`
	// The resource type.
	ResourceType string `pulumi:"resourceType"`
	// The SKU.
	Sku string `pulumi:"sku"`
}

type LookupSkusNestedResourceTypeSecondResult struct {
	// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
	Id string `pulumi:"id"`
	// The name of the resource
	Name       string                        `pulumi:"name"`
	Properties SkuResourceResponseProperties `pulumi:"properties"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type string `pulumi:"type"`
}
