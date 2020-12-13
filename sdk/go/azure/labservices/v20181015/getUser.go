// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20181015

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupUser(ctx *pulumi.Context, args *LookupUserArgs, opts ...pulumi.InvokeOption) (*LookupUserResult, error) {
	var rv LookupUserResult
	err := ctx.Invoke("azure-nextgen:labservices/v20181015:getUser", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupUserArgs struct {
	// Specify the $expand query. Example: 'properties($select=email)'
	Expand *string `pulumi:"expand"`
	// The name of the lab Account.
	LabAccountName string `pulumi:"labAccountName"`
	// The name of the lab.
	LabName string `pulumi:"labName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the user.
	UserName string `pulumi:"userName"`
}

// The User registered to a lab
type LookupUserResult struct {
	// The user email address, as it was specified during registration.
	Email string `pulumi:"email"`
	// The user family name, as it was specified during registration.
	FamilyName string `pulumi:"familyName"`
	// The user given name, as it was specified during registration.
	GivenName string `pulumi:"givenName"`
	// The identifier of the resource.
	Id string `pulumi:"id"`
	// The details of the latest operation. ex: status, error
	LatestOperationResult LatestOperationResultResponse `pulumi:"latestOperationResult"`
	// The location of the resource.
	Location *string `pulumi:"location"`
	// The name of the resource.
	Name string `pulumi:"name"`
	// The provisioning status of the resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The tags of the resource.
	Tags map[string]string `pulumi:"tags"`
	// The user tenant ID, as it was specified during registration.
	TenantId string `pulumi:"tenantId"`
	// How long the user has used his VMs in this lab
	TotalUsage string `pulumi:"totalUsage"`
	// The type of the resource.
	Type string `pulumi:"type"`
	// The unique immutable identifier of a resource (Guid).
	UniqueIdentifier *string `pulumi:"uniqueIdentifier"`
}
