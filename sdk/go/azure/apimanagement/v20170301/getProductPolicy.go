// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170301

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupProductPolicy(ctx *pulumi.Context, args *LookupProductPolicyArgs, opts ...pulumi.InvokeOption) (*LookupProductPolicyResult, error) {
	var rv LookupProductPolicyResult
	err := ctx.Invoke("azure-nextgen:apimanagement/v20170301:getProductPolicy", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupProductPolicyArgs struct {
	// The identifier of the Policy.
	PolicyId string `pulumi:"policyId"`
	// Product identifier. Must be unique in the current API Management service instance.
	ProductId string `pulumi:"productId"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the API Management service.
	ServiceName string `pulumi:"serviceName"`
}

// Policy Contract details.
type LookupProductPolicyResult struct {
	// Resource ID.
	Id string `pulumi:"id"`
	// Resource name.
	Name string `pulumi:"name"`
	// Json escaped Xml Encoded contents of the Policy.
	PolicyContent string `pulumi:"policyContent"`
	// Resource type for API Management resource.
	Type string `pulumi:"type"`
}
