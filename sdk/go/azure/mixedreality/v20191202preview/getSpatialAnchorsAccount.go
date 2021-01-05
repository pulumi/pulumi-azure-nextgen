// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191202preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupSpatialAnchorsAccount(ctx *pulumi.Context, args *LookupSpatialAnchorsAccountArgs, opts ...pulumi.InvokeOption) (*LookupSpatialAnchorsAccountResult, error) {
	var rv LookupSpatialAnchorsAccountResult
	err := ctx.Invoke("azure-nextgen:mixedreality/v20191202preview:getSpatialAnchorsAccount", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupSpatialAnchorsAccountArgs struct {
	// Name of an Mixed Reality Account.
	AccountName string `pulumi:"accountName"`
	// Name of an Azure resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// SpatialAnchorsAccount Response.
type LookupSpatialAnchorsAccountResult struct {
	// Correspond domain name of certain Spatial Anchors Account
	AccountDomain string `pulumi:"accountDomain"`
	// unique id of certain account.
	AccountId string `pulumi:"accountId"`
	// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
	Id string `pulumi:"id"`
	// The identity associated with this account
	Identity *IdentityResponse `pulumi:"identity"`
	// The geo-location where the resource lives
	Location string `pulumi:"location"`
	// The name of the resource
	Name string `pulumi:"name"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type string `pulumi:"type"`
}
