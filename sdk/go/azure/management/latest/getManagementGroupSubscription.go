// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupManagementGroupSubscription(ctx *pulumi.Context, args *LookupManagementGroupSubscriptionArgs, opts ...pulumi.InvokeOption) (*LookupManagementGroupSubscriptionResult, error) {
	var rv LookupManagementGroupSubscriptionResult
	err := ctx.Invoke("azure-nextgen:management/latest:getManagementGroupSubscription", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupManagementGroupSubscriptionArgs struct {
	// Management Group ID.
	GroupId string `pulumi:"groupId"`
}

// The details of subscription under management group.
type LookupManagementGroupSubscriptionResult struct {
	// The friendly name of the subscription.
	DisplayName *string `pulumi:"displayName"`
	// The fully qualified ID for the subscription.  For example, /providers/Microsoft.Management/managementGroups/0000000-0000-0000-0000-000000000000/subscriptions/0000000-0000-0000-0000-000000000001
	Id string `pulumi:"id"`
	// The stringified id of the subscription. For example, 00000000-0000-0000-0000-000000000000
	Name string `pulumi:"name"`
	// The ID of the parent management group.
	Parent *DescendantParentGroupInfoResponse `pulumi:"parent"`
	// The state of the subscription.
	State *string `pulumi:"state"`
	// The AAD Tenant ID associated with the subscription. For example, 00000000-0000-0000-0000-000000000000
	Tenant *string `pulumi:"tenant"`
	// The type of the resource.  For example, Microsoft.Management/managementGroups/subscriptions
	Type string `pulumi:"type"`
}
