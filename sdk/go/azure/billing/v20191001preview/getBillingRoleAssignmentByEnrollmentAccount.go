// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191001preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupBillingRoleAssignmentByEnrollmentAccount(ctx *pulumi.Context, args *LookupBillingRoleAssignmentByEnrollmentAccountArgs, opts ...pulumi.InvokeOption) (*LookupBillingRoleAssignmentByEnrollmentAccountResult, error) {
	var rv LookupBillingRoleAssignmentByEnrollmentAccountResult
	err := ctx.Invoke("azure-nextgen:billing/v20191001preview:getBillingRoleAssignmentByEnrollmentAccount", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupBillingRoleAssignmentByEnrollmentAccountArgs struct {
	// The ID that uniquely identifies a billing account.
	BillingAccountName string `pulumi:"billingAccountName"`
	// The ID that uniquely identifies a role assignment.
	BillingRoleAssignmentName string `pulumi:"billingRoleAssignmentName"`
	// The ID that uniquely identifies an enrollment account.
	EnrollmentAccountName string `pulumi:"enrollmentAccountName"`
}

// The role assignment
type LookupBillingRoleAssignmentByEnrollmentAccountResult struct {
	// The principal Id of the user who created the role assignment.
	CreatedByPrincipalId string `pulumi:"createdByPrincipalId"`
	// The tenant Id of the user who created the role assignment.
	CreatedByPrincipalTenantId string `pulumi:"createdByPrincipalTenantId"`
	// The email address of the user who created the role assignment. This is supported only for billing accounts with agreement type Enterprise Agreement.
	CreatedByUserEmailAddress string `pulumi:"createdByUserEmailAddress"`
	// The date the role assignment was created.
	CreatedOn string `pulumi:"createdOn"`
	// Resource Id.
	Id string `pulumi:"id"`
	// Resource name.
	Name string `pulumi:"name"`
	// The principal id of the user to whom the role was assigned.
	PrincipalId *string `pulumi:"principalId"`
	// The principal tenant id of the user to whom the role was assigned.
	PrincipalTenantId *string `pulumi:"principalTenantId"`
	// The ID of the role definition.
	RoleDefinitionId *string `pulumi:"roleDefinitionId"`
	// The scope at which the role was assigned.
	Scope string `pulumi:"scope"`
	// Resource type.
	Type string `pulumi:"type"`
	// The authentication type of the user, whether Organization or MSA, of the user to whom the role was assigned. This is supported only for billing accounts with agreement type Enterprise Agreement.
	UserAuthenticationType *string `pulumi:"userAuthenticationType"`
	// The email address of the user to whom the role was assigned. This is supported only for billing accounts with agreement type Enterprise Agreement.
	UserEmailAddress *string `pulumi:"userEmailAddress"`
}
