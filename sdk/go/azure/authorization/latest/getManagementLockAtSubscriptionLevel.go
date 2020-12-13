// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupManagementLockAtSubscriptionLevel(ctx *pulumi.Context, args *LookupManagementLockAtSubscriptionLevelArgs, opts ...pulumi.InvokeOption) (*LookupManagementLockAtSubscriptionLevelResult, error) {
	var rv LookupManagementLockAtSubscriptionLevelResult
	err := ctx.Invoke("azure-nextgen:authorization/latest:getManagementLockAtSubscriptionLevel", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupManagementLockAtSubscriptionLevelArgs struct {
	// The name of the lock to get.
	LockName string `pulumi:"lockName"`
}

// The lock information.
type LookupManagementLockAtSubscriptionLevelResult struct {
	// The resource ID of the lock.
	Id string `pulumi:"id"`
	// The level of the lock. Possible values are: NotSpecified, CanNotDelete, ReadOnly. CanNotDelete means authorized users are able to read and modify the resources, but not delete. ReadOnly means authorized users can only read from a resource, but they can't modify or delete it.
	Level string `pulumi:"level"`
	// The name of the lock.
	Name string `pulumi:"name"`
	// Notes about the lock. Maximum of 512 characters.
	Notes *string `pulumi:"notes"`
	// The owners of the lock.
	Owners []ManagementLockOwnerResponse `pulumi:"owners"`
	// The resource type of the lock - Microsoft.Authorization/locks.
	Type string `pulumi:"type"`
}
