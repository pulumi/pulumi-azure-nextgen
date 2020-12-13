// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupJitRequest(ctx *pulumi.Context, args *LookupJitRequestArgs, opts ...pulumi.InvokeOption) (*LookupJitRequestResult, error) {
	var rv LookupJitRequestResult
	err := ctx.Invoke("azure-nextgen:solutions/latest:getJitRequest", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupJitRequestArgs struct {
	// The name of the JIT request.
	JitRequestName string `pulumi:"jitRequestName"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Information about JIT request definition.
type LookupJitRequestResult struct {
	// The parent application id.
	ApplicationResourceId string `pulumi:"applicationResourceId"`
	// The client entity that created the JIT request.
	CreatedBy ApplicationClientDetailsResponse `pulumi:"createdBy"`
	// Resource ID
	Id string `pulumi:"id"`
	// The JIT authorization policies.
	JitAuthorizationPolicies []JitAuthorizationPoliciesResponse `pulumi:"jitAuthorizationPolicies"`
	// The JIT request state.
	JitRequestState string `pulumi:"jitRequestState"`
	// The JIT request properties.
	JitSchedulingPolicy JitSchedulingPolicyResponse `pulumi:"jitSchedulingPolicy"`
	// Resource location
	Location *string `pulumi:"location"`
	// Resource name
	Name string `pulumi:"name"`
	// The JIT request provisioning state.
	ProvisioningState string `pulumi:"provisioningState"`
	// The publisher tenant id.
	PublisherTenantId string `pulumi:"publisherTenantId"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type string `pulumi:"type"`
	// The client entity that last updated the JIT request.
	UpdatedBy ApplicationClientDetailsResponse `pulumi:"updatedBy"`
}
