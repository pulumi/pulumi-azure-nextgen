// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupGuestConfigurationHCRPAssignment(ctx *pulumi.Context, args *LookupGuestConfigurationHCRPAssignmentArgs, opts ...pulumi.InvokeOption) (*LookupGuestConfigurationHCRPAssignmentResult, error) {
	var rv LookupGuestConfigurationHCRPAssignmentResult
	err := ctx.Invoke("azure-nextgen:hybridcompute/latest:getGuestConfigurationHCRPAssignment", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupGuestConfigurationHCRPAssignmentArgs struct {
	// The guest configuration assignment name.
	GuestConfigurationAssignmentName string `pulumi:"guestConfigurationAssignmentName"`
	// The name of the ARC machine.
	MachineName string `pulumi:"machineName"`
	// The resource group name.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Guest configuration assignment is an association between a machine and guest configuration.
type LookupGuestConfigurationHCRPAssignmentResult struct {
	// ARM resource id of the guest configuration assignment.
	Id string `pulumi:"id"`
	// Region where the VM is located.
	Location *string `pulumi:"location"`
	// Name of the guest configuration assignment.
	Name *string `pulumi:"name"`
	// Properties of the Guest configuration assignment.
	Properties GuestConfigurationAssignmentPropertiesResponse `pulumi:"properties"`
	// The type of the resource.
	Type string `pulumi:"type"`
}
