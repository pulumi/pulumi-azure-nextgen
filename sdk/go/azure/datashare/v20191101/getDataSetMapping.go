// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191101

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupDataSetMapping(ctx *pulumi.Context, args *LookupDataSetMappingArgs, opts ...pulumi.InvokeOption) (*LookupDataSetMappingResult, error) {
	var rv LookupDataSetMappingResult
	err := ctx.Invoke("azure-nextgen:datashare/v20191101:getDataSetMapping", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupDataSetMappingArgs struct {
	// The name of the share account.
	AccountName string `pulumi:"accountName"`
	// The name of the dataSetMapping.
	DataSetMappingName string `pulumi:"dataSetMappingName"`
	// The resource group name.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the shareSubscription.
	ShareSubscriptionName string `pulumi:"shareSubscriptionName"`
}

// A data set mapping data transfer object.
type LookupDataSetMappingResult struct {
	// The resource id of the azure resource
	Id string `pulumi:"id"`
	// Kind of data set mapping.
	Kind string `pulumi:"kind"`
	// Name of the azure resource
	Name string `pulumi:"name"`
	// Type of the azure resource
	Type string `pulumi:"type"`
}
