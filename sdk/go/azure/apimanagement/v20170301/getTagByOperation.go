// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170301

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupTagByOperation(ctx *pulumi.Context, args *LookupTagByOperationArgs, opts ...pulumi.InvokeOption) (*LookupTagByOperationResult, error) {
	var rv LookupTagByOperationResult
	err := ctx.Invoke("azure-nextgen:apimanagement/v20170301:getTagByOperation", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupTagByOperationArgs struct {
	// API identifier. Must be unique in the current API Management service instance.
	ApiId string `pulumi:"apiId"`
	// Operation identifier within an API. Must be unique in the current API Management service instance.
	OperationId string `pulumi:"operationId"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the API Management service.
	ServiceName string `pulumi:"serviceName"`
	// Tag identifier. Must be unique in the current API Management service instance.
	TagId string `pulumi:"tagId"`
}

// Tag Contract details.
type LookupTagByOperationResult struct {
	// Tag name.
	DisplayName string `pulumi:"displayName"`
	// Resource ID.
	Id string `pulumi:"id"`
	// Resource name.
	Name string `pulumi:"name"`
	// Resource type for API Management resource.
	Type string `pulumi:"type"`
}
