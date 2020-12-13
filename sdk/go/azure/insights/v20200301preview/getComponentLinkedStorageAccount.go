// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200301preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupComponentLinkedStorageAccount(ctx *pulumi.Context, args *LookupComponentLinkedStorageAccountArgs, opts ...pulumi.InvokeOption) (*LookupComponentLinkedStorageAccountResult, error) {
	var rv LookupComponentLinkedStorageAccountResult
	err := ctx.Invoke("azure-nextgen:insights/v20200301preview:getComponentLinkedStorageAccount", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupComponentLinkedStorageAccountArgs struct {
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the Application Insights component resource.
	ResourceName string `pulumi:"resourceName"`
	// The type of the Application Insights component data source for the linked storage account.
	StorageType string `pulumi:"storageType"`
}

// An Application Insights component linked storage accounts
type LookupComponentLinkedStorageAccountResult struct {
	// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
	Id string `pulumi:"id"`
	// Linked storage account resource ID
	LinkedStorageAccount *string `pulumi:"linkedStorageAccount"`
	// The name of the resource
	Name string `pulumi:"name"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type string `pulumi:"type"`
}
