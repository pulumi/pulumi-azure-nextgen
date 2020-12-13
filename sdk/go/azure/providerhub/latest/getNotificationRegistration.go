// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupNotificationRegistration(ctx *pulumi.Context, args *LookupNotificationRegistrationArgs, opts ...pulumi.InvokeOption) (*LookupNotificationRegistrationResult, error) {
	var rv LookupNotificationRegistrationResult
	err := ctx.Invoke("azure-nextgen:providerhub/latest:getNotificationRegistration", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupNotificationRegistrationArgs struct {
	// The notification registration.
	NotificationRegistrationName string `pulumi:"notificationRegistrationName"`
	// The name of the resource provider hosted within ProviderHub.
	ProviderNamespace string `pulumi:"providerNamespace"`
}

// The notification registration definition.
type LookupNotificationRegistrationResult struct {
	// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
	Id string `pulumi:"id"`
	// The name of the resource
	Name       string                                     `pulumi:"name"`
	Properties NotificationRegistrationResponseProperties `pulumi:"properties"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type string `pulumi:"type"`
}
