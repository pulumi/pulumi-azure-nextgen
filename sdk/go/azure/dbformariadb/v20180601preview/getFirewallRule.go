// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180601preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupFirewallRule(ctx *pulumi.Context, args *LookupFirewallRuleArgs, opts ...pulumi.InvokeOption) (*LookupFirewallRuleResult, error) {
	var rv LookupFirewallRuleResult
	err := ctx.Invoke("azure-nextgen:dbformariadb/v20180601preview:getFirewallRule", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupFirewallRuleArgs struct {
	// The name of the server firewall rule.
	FirewallRuleName string `pulumi:"firewallRuleName"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the server.
	ServerName string `pulumi:"serverName"`
}

// Represents a server firewall rule.
type LookupFirewallRuleResult struct {
	// The end IP address of the server firewall rule. Must be IPv4 format.
	EndIpAddress string `pulumi:"endIpAddress"`
	// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
	Id string `pulumi:"id"`
	// The name of the resource
	Name string `pulumi:"name"`
	// The start IP address of the server firewall rule. Must be IPv4 format.
	StartIpAddress string `pulumi:"startIpAddress"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type string `pulumi:"type"`
}
