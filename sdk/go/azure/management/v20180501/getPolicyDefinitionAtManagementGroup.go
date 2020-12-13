// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180501

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupPolicyDefinitionAtManagementGroup(ctx *pulumi.Context, args *LookupPolicyDefinitionAtManagementGroupArgs, opts ...pulumi.InvokeOption) (*LookupPolicyDefinitionAtManagementGroupResult, error) {
	var rv LookupPolicyDefinitionAtManagementGroupResult
	err := ctx.Invoke("azure-nextgen:management/v20180501:getPolicyDefinitionAtManagementGroup", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupPolicyDefinitionAtManagementGroupArgs struct {
	// The ID of the management group.
	ManagementGroupId string `pulumi:"managementGroupId"`
	// The name of the policy definition to get.
	PolicyDefinitionName string `pulumi:"policyDefinitionName"`
}

// The policy definition.
type LookupPolicyDefinitionAtManagementGroupResult struct {
	// The policy definition description.
	Description *string `pulumi:"description"`
	// The display name of the policy definition.
	DisplayName *string `pulumi:"displayName"`
	// The ID of the policy definition.
	Id string `pulumi:"id"`
	// The policy definition metadata.
	Metadata interface{} `pulumi:"metadata"`
	// The policy definition mode. Possible values are NotSpecified, Indexed, and All.
	Mode *string `pulumi:"mode"`
	// The name of the policy definition.
	Name string `pulumi:"name"`
	// Required if a parameter is used in policy rule.
	Parameters interface{} `pulumi:"parameters"`
	// The policy rule.
	PolicyRule interface{} `pulumi:"policyRule"`
	// The type of policy definition. Possible values are NotSpecified, BuiltIn, and Custom.
	PolicyType *string `pulumi:"policyType"`
	// The type of the resource (Microsoft.Authorization/policyDefinitions).
	Type string `pulumi:"type"`
}
