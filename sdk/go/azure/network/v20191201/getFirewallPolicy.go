// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191201

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupFirewallPolicy(ctx *pulumi.Context, args *LookupFirewallPolicyArgs, opts ...pulumi.InvokeOption) (*LookupFirewallPolicyResult, error) {
	var rv LookupFirewallPolicyResult
	err := ctx.Invoke("azure-nextgen:network/v20191201:getFirewallPolicy", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupFirewallPolicyArgs struct {
	// Expands referenced resources.
	Expand *string `pulumi:"expand"`
	// The name of the Firewall Policy.
	FirewallPolicyName string `pulumi:"firewallPolicyName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// FirewallPolicy Resource.
type LookupFirewallPolicyResult struct {
	// The parent firewall policy from which rules are inherited.
	BasePolicy *SubResourceResponse `pulumi:"basePolicy"`
	// List of references to Child Firewall Policies.
	ChildPolicies []SubResourceResponse `pulumi:"childPolicies"`
	// A unique read-only string that changes whenever the resource is updated.
	Etag string `pulumi:"etag"`
	// List of references to Azure Firewalls that this Firewall Policy is associated with.
	Firewalls []SubResourceResponse `pulumi:"firewalls"`
	// Resource ID.
	Id *string `pulumi:"id"`
	// Resource location.
	Location *string `pulumi:"location"`
	// Resource name.
	Name string `pulumi:"name"`
	// The provisioning state of the firewall policy resource.
	ProvisioningState string `pulumi:"provisioningState"`
	// List of references to FirewallPolicyRuleGroups.
	RuleGroups []SubResourceResponse `pulumi:"ruleGroups"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The operation mode for Threat Intelligence.
	ThreatIntelMode *string `pulumi:"threatIntelMode"`
	// Resource type.
	Type string `pulumi:"type"`
}
