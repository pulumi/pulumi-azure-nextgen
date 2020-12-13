// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190601

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupWebApplicationFirewallPolicy(ctx *pulumi.Context, args *LookupWebApplicationFirewallPolicyArgs, opts ...pulumi.InvokeOption) (*LookupWebApplicationFirewallPolicyResult, error) {
	var rv LookupWebApplicationFirewallPolicyResult
	err := ctx.Invoke("azure-nextgen:network/v20190601:getWebApplicationFirewallPolicy", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupWebApplicationFirewallPolicyArgs struct {
	// The name of the policy.
	PolicyName string `pulumi:"policyName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Defines web application firewall policy.
type LookupWebApplicationFirewallPolicyResult struct {
	// A collection of references to application gateways.
	ApplicationGateways []ApplicationGatewayResponse `pulumi:"applicationGateways"`
	// Describes custom rules inside the policy.
	CustomRules []WebApplicationFirewallCustomRuleResponse `pulumi:"customRules"`
	// Gets a unique read-only string that changes whenever the resource is updated.
	Etag *string `pulumi:"etag"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name string `pulumi:"name"`
	// Describes policySettings for policy.
	PolicySettings *PolicySettingsResponse `pulumi:"policySettings"`
	// Provisioning state of the WebApplicationFirewallPolicy.
	ProvisioningState string `pulumi:"provisioningState"`
	// Resource status of the policy.
	ResourceState string `pulumi:"resourceState"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type string `pulumi:"type"`
}
