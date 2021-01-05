// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200901

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupPolicySetDefinition(ctx *pulumi.Context, args *LookupPolicySetDefinitionArgs, opts ...pulumi.InvokeOption) (*LookupPolicySetDefinitionResult, error) {
	var rv LookupPolicySetDefinitionResult
	err := ctx.Invoke("azure-nextgen:authorization/v20200901:getPolicySetDefinition", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupPolicySetDefinitionArgs struct {
	// The name of the policy set definition to get.
	PolicySetDefinitionName string `pulumi:"policySetDefinitionName"`
}

// The policy set definition.
type LookupPolicySetDefinitionResult struct {
	// The policy set definition description.
	Description *string `pulumi:"description"`
	// The display name of the policy set definition.
	DisplayName *string `pulumi:"displayName"`
	// The ID of the policy set definition.
	Id string `pulumi:"id"`
	// The policy set definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs.
	Metadata interface{} `pulumi:"metadata"`
	// The name of the policy set definition.
	Name string `pulumi:"name"`
	// The policy set definition parameters that can be used in policy definition references.
	Parameters map[string]ParameterDefinitionsValueResponse `pulumi:"parameters"`
	// The metadata describing groups of policy definition references within the policy set definition.
	PolicyDefinitionGroups []PolicyDefinitionGroupResponse `pulumi:"policyDefinitionGroups"`
	// An array of policy definition references.
	PolicyDefinitions []PolicyDefinitionReferenceResponse `pulumi:"policyDefinitions"`
	// The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static.
	PolicyType *string `pulumi:"policyType"`
	// The type of the resource (Microsoft.Authorization/policySetDefinitions).
	Type string `pulumi:"type"`
}