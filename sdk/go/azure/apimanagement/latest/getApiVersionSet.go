// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupApiVersionSet(ctx *pulumi.Context, args *LookupApiVersionSetArgs, opts ...pulumi.InvokeOption) (*LookupApiVersionSetResult, error) {
	var rv LookupApiVersionSetResult
	err := ctx.Invoke("azure-nextgen:apimanagement/latest:getApiVersionSet", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupApiVersionSetArgs struct {
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the API Management service.
	ServiceName string `pulumi:"serviceName"`
	// Api Version Set identifier. Must be unique in the current API Management service instance.
	VersionSetId string `pulumi:"versionSetId"`
}

// Api Version Set Contract details.
type LookupApiVersionSetResult struct {
	// Description of API Version Set.
	Description *string `pulumi:"description"`
	// Name of API Version Set
	DisplayName string `pulumi:"displayName"`
	// Resource ID.
	Id string `pulumi:"id"`
	// Resource name.
	Name string `pulumi:"name"`
	// Resource type for API Management resource.
	Type string `pulumi:"type"`
	// Name of HTTP header parameter that indicates the API Version if versioningScheme is set to `header`.
	VersionHeaderName *string `pulumi:"versionHeaderName"`
	// Name of query parameter that indicates the API Version if versioningScheme is set to `query`.
	VersionQueryName *string `pulumi:"versionQueryName"`
	// An value that determines where the API Version identifer will be located in a HTTP request.
	VersioningScheme string `pulumi:"versioningScheme"`
}
