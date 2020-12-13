// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190701

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupServiceEndpointPolicy(ctx *pulumi.Context, args *LookupServiceEndpointPolicyArgs, opts ...pulumi.InvokeOption) (*LookupServiceEndpointPolicyResult, error) {
	var rv LookupServiceEndpointPolicyResult
	err := ctx.Invoke("azure-nextgen:network/v20190701:getServiceEndpointPolicy", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupServiceEndpointPolicyArgs struct {
	// Expands referenced resources.
	Expand *string `pulumi:"expand"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the service endpoint policy.
	ServiceEndpointPolicyName string `pulumi:"serviceEndpointPolicyName"`
}

// Service End point policy resource.
type LookupServiceEndpointPolicyResult struct {
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name string `pulumi:"name"`
	// The provisioning state of the service endpoint policy resource.
	ProvisioningState string `pulumi:"provisioningState"`
	// The resource GUID property of the service endpoint policy resource.
	ResourceGuid string `pulumi:"resourceGuid"`
	// A collection of service endpoint policy definitions of the service endpoint policy.
	ServiceEndpointPolicyDefinitions []ServiceEndpointPolicyDefinitionResponse `pulumi:"serviceEndpointPolicyDefinitions"`
	// A collection of references to subnets.
	Subnets []SubnetResponse `pulumi:"subnets"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type string `pulumi:"type"`
}
