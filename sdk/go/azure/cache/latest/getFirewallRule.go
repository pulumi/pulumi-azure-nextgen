// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupFirewallRule(ctx *pulumi.Context, args *LookupFirewallRuleArgs, opts ...pulumi.InvokeOption) (*LookupFirewallRuleResult, error) {
	var rv LookupFirewallRuleResult
	err := ctx.Invoke("azure-nextgen:cache/latest:getFirewallRule", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupFirewallRuleArgs struct {
	// The name of the Redis cache.
	CacheName string `pulumi:"cacheName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the firewall rule.
	RuleName string `pulumi:"ruleName"`
}

// A firewall rule on a redis cache has a name, and describes a contiguous range of IP addresses permitted to connect
type LookupFirewallRuleResult struct {
	// highest IP address included in the range
	EndIP string `pulumi:"endIP"`
	// Resource ID.
	Id string `pulumi:"id"`
	// Resource name.
	Name string `pulumi:"name"`
	// lowest IP address included in the range
	StartIP string `pulumi:"startIP"`
	// Resource type.
	Type string `pulumi:"type"`
}
