// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupAccount(ctx *pulumi.Context, args *LookupAccountArgs, opts ...pulumi.InvokeOption) (*LookupAccountResult, error) {
	var rv LookupAccountResult
	err := ctx.Invoke("azure-nextgen:cognitiveservices/latest:getAccount", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupAccountArgs struct {
	// The name of Cognitive Services account.
	AccountName string `pulumi:"accountName"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Cognitive Services Account is an Azure resource representing the provisioned account, its type, location and SKU.
type LookupAccountResult struct {
	// Entity Tag
	Etag string `pulumi:"etag"`
	// The id of the created account
	Id string `pulumi:"id"`
	// The identity of Cognitive Services account.
	Identity *IdentityResponse `pulumi:"identity"`
	// The Kind of the resource.
	Kind *string `pulumi:"kind"`
	// The location of the resource
	Location *string `pulumi:"location"`
	// The name of the created account
	Name string `pulumi:"name"`
	// Properties of Cognitive Services account.
	Properties CognitiveServicesAccountPropertiesResponse `pulumi:"properties"`
	// The SKU of Cognitive Services account.
	Sku *SkuResponse `pulumi:"sku"`
	// Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters.
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type string `pulumi:"type"`
}
