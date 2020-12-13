// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20160515

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupPolicy(ctx *pulumi.Context, args *LookupPolicyArgs, opts ...pulumi.InvokeOption) (*LookupPolicyResult, error) {
	var rv LookupPolicyResult
	err := ctx.Invoke("azure-nextgen:devtestlab/v20160515:getPolicy", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupPolicyArgs struct {
	// Specify the $expand query. Example: 'properties($select=description)'
	Expand *string `pulumi:"expand"`
	// The name of the lab.
	LabName string `pulumi:"labName"`
	// The name of the policy.
	Name string `pulumi:"name"`
	// The name of the policy set.
	PolicySetName string `pulumi:"policySetName"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// A Policy.
type LookupPolicyResult struct {
	// The creation date of the policy.
	CreatedDate string `pulumi:"createdDate"`
	// The description of the policy.
	Description *string `pulumi:"description"`
	// The evaluator type of the policy (i.e. AllowedValuesPolicy, MaxValuePolicy).
	EvaluatorType *string `pulumi:"evaluatorType"`
	// The fact data of the policy.
	FactData *string `pulumi:"factData"`
	// The fact name of the policy (e.g. LabVmCount, LabVmSize, MaxVmsAllowedPerLab, etc.
	FactName *string `pulumi:"factName"`
	// The identifier of the resource.
	Id string `pulumi:"id"`
	// The location of the resource.
	Location *string `pulumi:"location"`
	// The name of the resource.
	Name string `pulumi:"name"`
	// The provisioning status of the resource.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The status of the policy.
	Status *string `pulumi:"status"`
	// The tags of the resource.
	Tags map[string]string `pulumi:"tags"`
	// The threshold of the policy (i.e. a number for MaxValuePolicy, and a JSON array of values for AllowedValuesPolicy).
	Threshold *string `pulumi:"threshold"`
	// The type of the resource.
	Type string `pulumi:"type"`
	// The unique immutable identifier of a resource (Guid).
	UniqueIdentifier *string `pulumi:"uniqueIdentifier"`
}
