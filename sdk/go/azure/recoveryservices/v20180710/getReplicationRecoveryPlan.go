// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180710

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupReplicationRecoveryPlan(ctx *pulumi.Context, args *LookupReplicationRecoveryPlanArgs, opts ...pulumi.InvokeOption) (*LookupReplicationRecoveryPlanResult, error) {
	var rv LookupReplicationRecoveryPlanResult
	err := ctx.Invoke("azure-nextgen:recoveryservices/v20180710:getReplicationRecoveryPlan", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupReplicationRecoveryPlanArgs struct {
	// Name of the recovery plan.
	RecoveryPlanName string `pulumi:"recoveryPlanName"`
	// The name of the resource group where the recovery services vault is present.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the recovery services vault.
	ResourceName string `pulumi:"resourceName"`
}

// Recovery plan details.
type LookupReplicationRecoveryPlanResult struct {
	// Resource Id
	Id string `pulumi:"id"`
	// Resource Location
	Location *string `pulumi:"location"`
	// Resource Name
	Name string `pulumi:"name"`
	// The custom details.
	Properties RecoveryPlanPropertiesResponse `pulumi:"properties"`
	// Resource Type
	Type string `pulumi:"type"`
}
