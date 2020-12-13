// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190601

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupRegistrationAssignment(ctx *pulumi.Context, args *LookupRegistrationAssignmentArgs, opts ...pulumi.InvokeOption) (*LookupRegistrationAssignmentResult, error) {
	var rv LookupRegistrationAssignmentResult
	err := ctx.Invoke("azure-nextgen:managedservices/v20190601:getRegistrationAssignment", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupRegistrationAssignmentArgs struct {
	// Tells whether to return registration definition details also along with registration assignment details.
	ExpandRegistrationDefinition *bool `pulumi:"expandRegistrationDefinition"`
	// Guid of the registration assignment.
	RegistrationAssignmentId string `pulumi:"registrationAssignmentId"`
	// Scope of the resource.
	Scope string `pulumi:"scope"`
}

// Registration assignment.
type LookupRegistrationAssignmentResult struct {
	// The fully qualified path of the registration assignment.
	Id string `pulumi:"id"`
	// Name of the registration assignment.
	Name string `pulumi:"name"`
	// Properties of a registration assignment.
	Properties RegistrationAssignmentPropertiesResponse `pulumi:"properties"`
	// Type of the resource.
	Type string `pulumi:"type"`
}
