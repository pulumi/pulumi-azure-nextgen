// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20181101preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupShareSubscription(ctx *pulumi.Context, args *LookupShareSubscriptionArgs, opts ...pulumi.InvokeOption) (*LookupShareSubscriptionResult, error) {
	var rv LookupShareSubscriptionResult
	err := ctx.Invoke("azure-nextgen:datashare/v20181101preview:getShareSubscription", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupShareSubscriptionArgs struct {
	// The name of the share account.
	AccountName string `pulumi:"accountName"`
	// The resource group name.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the shareSubscription.
	ShareSubscriptionName string `pulumi:"shareSubscriptionName"`
}

// A share subscription data transfer object.
type LookupShareSubscriptionResult struct {
	// Time at which the share subscription was created.
	CreatedAt string `pulumi:"createdAt"`
	// The resource id of the azure resource
	Id string `pulumi:"id"`
	// The invitation id.
	InvitationId string `pulumi:"invitationId"`
	// Name of the azure resource
	Name string `pulumi:"name"`
	// Email of the provider who created the resource
	ProviderEmail string `pulumi:"providerEmail"`
	// Name of the provider who created the resource
	ProviderName string `pulumi:"providerName"`
	// Tenant name of the provider who created the resource
	ProviderTenantName string `pulumi:"providerTenantName"`
	// Provisioning state of the share subscription
	ProvisioningState string `pulumi:"provisioningState"`
	// Description of share
	ShareDescription string `pulumi:"shareDescription"`
	// Kind of share
	ShareKind string `pulumi:"shareKind"`
	// Name of the share
	ShareName string `pulumi:"shareName"`
	// Gets the current status of share subscription.
	ShareSubscriptionStatus string `pulumi:"shareSubscriptionStatus"`
	// Terms of a share
	ShareTerms string `pulumi:"shareTerms"`
	// Type of the azure resource
	Type string `pulumi:"type"`
	// Email of the user who created the resource
	UserEmail string `pulumi:"userEmail"`
	// Name of the user who created the resource
	UserName string `pulumi:"userName"`
}
