// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20171201preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupServerAdministrator(ctx *pulumi.Context, args *LookupServerAdministratorArgs, opts ...pulumi.InvokeOption) (*LookupServerAdministratorResult, error) {
	var rv LookupServerAdministratorResult
	err := ctx.Invoke("azure-nextgen:dbforpostgresql/v20171201preview:getServerAdministrator", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupServerAdministratorArgs struct {
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the server.
	ServerName string `pulumi:"serverName"`
}

// Represents a and external administrator to be created.
type LookupServerAdministratorResult struct {
	// The type of administrator.
	AdministratorType string `pulumi:"administratorType"`
	// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
	Id string `pulumi:"id"`
	// The server administrator login account name.
	Login string `pulumi:"login"`
	// The name of the resource
	Name string `pulumi:"name"`
	// The server administrator Sid (Secure ID).
	Sid string `pulumi:"sid"`
	// The server Active Directory Administrator tenant id.
	TenantId string `pulumi:"tenantId"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type string `pulumi:"type"`
}
