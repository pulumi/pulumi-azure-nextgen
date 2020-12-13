// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupProperty(ctx *pulumi.Context, args *LookupPropertyArgs, opts ...pulumi.InvokeOption) (*LookupPropertyResult, error) {
	var rv LookupPropertyResult
	err := ctx.Invoke("azure-nextgen:apimanagement/latest:getProperty", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupPropertyArgs struct {
	// Identifier of the property.
	PropId string `pulumi:"propId"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the API Management service.
	ServiceName string `pulumi:"serviceName"`
}

// Property details.
type LookupPropertyResult struct {
	// Unique name of Property. It may contain only letters, digits, period, dash, and underscore characters.
	DisplayName string `pulumi:"displayName"`
	// Resource ID.
	Id string `pulumi:"id"`
	// Resource name.
	Name string `pulumi:"name"`
	// Determines whether the value is a secret and should be encrypted or not. Default value is false.
	Secret *bool `pulumi:"secret"`
	// Optional tags that when provided can be used to filter the property list.
	Tags []string `pulumi:"tags"`
	// Resource type for API Management resource.
	Type string `pulumi:"type"`
	// Value of the property. Can contain policy expressions. It may not be empty or consist only of whitespace.
	Value string `pulumi:"value"`
}
