// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200701preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupDataPool(ctx *pulumi.Context, args *LookupDataPoolArgs, opts ...pulumi.InvokeOption) (*LookupDataPoolResult, error) {
	var rv LookupDataPoolResult
	err := ctx.Invoke("azure-nextgen:autonomousdevelopmentplatform/v20200701preview:getDataPool", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupDataPoolArgs struct {
	// The name of the ADP account.
	AccountName string `pulumi:"accountName"`
	// The name of the Data Pool.
	DataPoolName string `pulumi:"dataPoolName"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// An ADP Data Pool.
type LookupDataPoolResult struct {
	// The Data Pool's data-plane ID
	DataPoolId string `pulumi:"dataPoolId"`
	// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
	Id string `pulumi:"id"`
	// Gets or sets the collection of locations where Data Pool resources should be created.
	Locations []DataPoolLocationResponse `pulumi:"locations"`
	// The name of the resource
	Name string `pulumi:"name"`
	// Gets the status of the data pool at the time the operation was called.
	ProvisioningState string `pulumi:"provisioningState"`
	// The system meta data relating to this resource.
	SystemData SystemDataResponse `pulumi:"systemData"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type string `pulumi:"type"`
}
