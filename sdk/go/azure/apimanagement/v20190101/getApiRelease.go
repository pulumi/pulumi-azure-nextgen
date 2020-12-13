// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190101

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupApiRelease(ctx *pulumi.Context, args *LookupApiReleaseArgs, opts ...pulumi.InvokeOption) (*LookupApiReleaseResult, error) {
	var rv LookupApiReleaseResult
	err := ctx.Invoke("azure-nextgen:apimanagement/v20190101:getApiRelease", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupApiReleaseArgs struct {
	// API identifier. Must be unique in the current API Management service instance.
	ApiId string `pulumi:"apiId"`
	// Release identifier within an API. Must be unique in the current API Management service instance.
	ReleaseId string `pulumi:"releaseId"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the API Management service.
	ServiceName string `pulumi:"serviceName"`
}

// ApiRelease details.
type LookupApiReleaseResult struct {
	// Identifier of the API the release belongs to.
	ApiId *string `pulumi:"apiId"`
	// The time the API was released. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
	CreatedDateTime string `pulumi:"createdDateTime"`
	// Resource ID.
	Id string `pulumi:"id"`
	// Resource name.
	Name string `pulumi:"name"`
	// Release Notes
	Notes *string `pulumi:"notes"`
	// Resource type for API Management resource.
	Type string `pulumi:"type"`
	// The time the API release was updated.
	UpdatedDateTime string `pulumi:"updatedDateTime"`
}
