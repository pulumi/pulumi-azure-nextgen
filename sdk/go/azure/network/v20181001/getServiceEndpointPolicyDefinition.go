// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20181001

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupServiceEndpointPolicyDefinition(ctx *pulumi.Context, args *LookupServiceEndpointPolicyDefinitionArgs, opts ...pulumi.InvokeOption) (*LookupServiceEndpointPolicyDefinitionResult, error) {
	var rv LookupServiceEndpointPolicyDefinitionResult
	err := ctx.Invoke("azure-nextgen:network/v20181001:getServiceEndpointPolicyDefinition", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupServiceEndpointPolicyDefinitionArgs struct {
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the service endpoint policy definition name.
	ServiceEndpointPolicyDefinitionName string `pulumi:"serviceEndpointPolicyDefinitionName"`
	// The name of the service endpoint policy name.
	ServiceEndpointPolicyName string `pulumi:"serviceEndpointPolicyName"`
}

// Service Endpoint policy definitions.
type LookupServiceEndpointPolicyDefinitionResult struct {
	// A description for this rule. Restricted to 140 chars.
	Description *string `pulumi:"description"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// The name of the resource that is unique within a resource group. This name can be used to access the resource.
	Name *string `pulumi:"name"`
	// The provisioning state of the service end point policy definition. Possible values are: 'Updating', 'Deleting', and 'Failed'.
	ProvisioningState string `pulumi:"provisioningState"`
	// service endpoint name.
	Service *string `pulumi:"service"`
	// A list of service resources.
	ServiceResources []string `pulumi:"serviceResources"`
}
