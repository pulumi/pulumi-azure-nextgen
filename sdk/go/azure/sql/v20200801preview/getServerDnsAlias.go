// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200801preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupServerDnsAlias(ctx *pulumi.Context, args *LookupServerDnsAliasArgs, opts ...pulumi.InvokeOption) (*LookupServerDnsAliasResult, error) {
	var rv LookupServerDnsAliasResult
	err := ctx.Invoke("azure-nextgen:sql/v20200801preview:getServerDnsAlias", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupServerDnsAliasArgs struct {
	// The name of the server dns alias.
	DnsAliasName string `pulumi:"dnsAliasName"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the server that the alias is pointing to.
	ServerName string `pulumi:"serverName"`
}

// A server DNS alias.
type LookupServerDnsAliasResult struct {
	// The fully qualified DNS record for alias
	AzureDnsRecord string `pulumi:"azureDnsRecord"`
	// Resource ID.
	Id string `pulumi:"id"`
	// Resource name.
	Name string `pulumi:"name"`
	// Resource type.
	Type string `pulumi:"type"`
}
