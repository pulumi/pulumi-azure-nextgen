// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180901preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupAccount(ctx *pulumi.Context, args *LookupAccountArgs, opts ...pulumi.InvokeOption) (*LookupAccountResult, error) {
	var rv LookupAccountResult
	err := ctx.Invoke("azure-nextgen:engagementfabric/v20180901preview:getAccount", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupAccountArgs struct {
	// Account Name
	AccountName string `pulumi:"accountName"`
	// Resource Group Name
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The EngagementFabric account
type LookupAccountResult struct {
	// The ID of the resource
	Id string `pulumi:"id"`
	// The location of the resource
	Location string `pulumi:"location"`
	// The name of the resource
	Name string `pulumi:"name"`
	// The SKU of the resource
	Sku SKUResponse `pulumi:"sku"`
	// The tags of the resource
	Tags map[string]string `pulumi:"tags"`
	// The fully qualified type of the resource
	Type string `pulumi:"type"`
}
