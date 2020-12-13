// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupAccount(ctx *pulumi.Context, args *LookupAccountArgs, opts ...pulumi.InvokeOption) (*LookupAccountResult, error) {
	var rv LookupAccountResult
	err := ctx.Invoke("azure-nextgen:datashare/latest:getAccount", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupAccountArgs struct {
	// The name of the share account.
	AccountName string `pulumi:"accountName"`
	// The resource group name.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// An account data transfer object.
type LookupAccountResult struct {
	// Time at which the account was created.
	CreatedAt string `pulumi:"createdAt"`
	// The resource id of the azure resource
	Id string `pulumi:"id"`
	// Identity Info on the Account
	Identity IdentityResponse `pulumi:"identity"`
	// Location of the azure resource.
	Location *string `pulumi:"location"`
	// Name of the azure resource
	Name string `pulumi:"name"`
	// Provisioning state of the Account
	ProvisioningState string `pulumi:"provisioningState"`
	// Tags on the azure resource.
	Tags map[string]string `pulumi:"tags"`
	// Type of the azure resource
	Type string `pulumi:"type"`
	// Email of the user who created the resource
	UserEmail string `pulumi:"userEmail"`
	// Name of the user who created the resource
	UserName string `pulumi:"userName"`
}
