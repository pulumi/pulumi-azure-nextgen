// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupCustomApi(ctx *pulumi.Context, args *LookupCustomApiArgs, opts ...pulumi.InvokeOption) (*LookupCustomApiResult, error) {
	var rv LookupCustomApiResult
	err := ctx.Invoke("azure-nextgen:web/latest:getCustomApi", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupCustomApiArgs struct {
	// API name
	ApiName string `pulumi:"apiName"`
	// The resource group
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// A custom API
type LookupCustomApiResult struct {
	// Resource ETag
	Etag *string `pulumi:"etag"`
	// Resource id
	Id string `pulumi:"id"`
	// Resource location
	Location *string `pulumi:"location"`
	// Resource name
	Name string `pulumi:"name"`
	// Custom API properties
	Properties CustomApiPropertiesDefinitionResponse `pulumi:"properties"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type string `pulumi:"type"`
}
