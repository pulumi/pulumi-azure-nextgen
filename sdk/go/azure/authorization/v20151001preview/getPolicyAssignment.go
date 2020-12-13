// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20151001preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupPolicyAssignment(ctx *pulumi.Context, args *LookupPolicyAssignmentArgs, opts ...pulumi.InvokeOption) (*LookupPolicyAssignmentResult, error) {
	var rv LookupPolicyAssignmentResult
	err := ctx.Invoke("azure-nextgen:authorization/v20151001preview:getPolicyAssignment", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupPolicyAssignmentArgs struct {
	// The name of the policy assignment to get.
	PolicyAssignmentName string `pulumi:"policyAssignmentName"`
	// The scope of the policy assignment.
	Scope string `pulumi:"scope"`
}

// The policy assignment.
type LookupPolicyAssignmentResult struct {
	// The display name of the policy assignment.
	DisplayName *string `pulumi:"displayName"`
	// The ID of the policy assignment.
	Id *string `pulumi:"id"`
	// The name of the policy assignment.
	Name *string `pulumi:"name"`
	// The ID of the policy definition.
	PolicyDefinitionId *string `pulumi:"policyDefinitionId"`
	// The scope for the policy assignment.
	Scope *string `pulumi:"scope"`
	// The type of the policy assignment.
	Type *string `pulumi:"type"`
}
