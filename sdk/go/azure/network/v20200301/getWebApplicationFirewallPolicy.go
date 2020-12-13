// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200301

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupWebApplicationFirewallPolicy(ctx *pulumi.Context, args *LookupWebApplicationFirewallPolicyArgs, opts ...pulumi.InvokeOption) (*LookupWebApplicationFirewallPolicyResult, error) {
	var rv LookupWebApplicationFirewallPolicyResult
	err := ctx.Invoke("azure-nextgen:network/v20200301:getWebApplicationFirewallPolicy", args, &rv, opts...)
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
	// The custom rules inside the policy.
	CustomRules []WebApplicationFirewallCustomRuleResponse `pulumi:"customRules"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag string `pulumi:"etag"`
	// A collection of references to application gateway http listeners.
	HttpListeners []SubResourceResponse `pulumi:"httpListeners"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Describes the managedRules structure.
	ManagedRules ManagedRulesDefinitionResponse `pulumi:"managedRules"`
	// Resource name.
	Name string `pulumi:"name"`
	// A collection of references to application gateway path rules.
	PathBasedRules []SubResourceResponse `pulumi:"pathBasedRules"`
	// The PolicySettings for policy.
	PolicySettings *PolicySettingsResponse `pulumi:"policySettings"`
	// The provisioning state of the web application firewall policy resource.
	ProvisioningState string `pulumi:"provisioningState"`
	// Resource status of the policy.
	ResourceState string `pulumi:"resourceState"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type string `pulumi:"type"`
}
