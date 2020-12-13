// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200801preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupServerAzureADOnlyAuthentication(ctx *pulumi.Context, args *LookupServerAzureADOnlyAuthenticationArgs, opts ...pulumi.InvokeOption) (*LookupServerAzureADOnlyAuthenticationResult, error) {
	var rv LookupServerAzureADOnlyAuthenticationResult
	err := ctx.Invoke("azure-nextgen:sql/v20200801preview:getServerAzureADOnlyAuthentication", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupServerAzureADOnlyAuthenticationArgs struct {
	// The name of server azure active directory only authentication.
	AuthenticationName string `pulumi:"authenticationName"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the server.
	ServerName string `pulumi:"serverName"`
}

// Azure Active Directory only authentication.
type LookupServerAzureADOnlyAuthenticationResult struct {
	// Azure Active Directory only Authentication enabled.
	AzureADOnlyAuthentication bool `pulumi:"azureADOnlyAuthentication"`
	// Resource ID.
	Id string `pulumi:"id"`
	// Resource name.
	Name string `pulumi:"name"`
	// Resource type.
	Type string `pulumi:"type"`
}
