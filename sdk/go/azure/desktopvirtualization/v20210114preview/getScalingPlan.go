// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20210114preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupScalingPlan(ctx *pulumi.Context, args *LookupScalingPlanArgs, opts ...pulumi.InvokeOption) (*LookupScalingPlanResult, error) {
	var rv LookupScalingPlanResult
	err := ctx.Invoke("azure-nextgen:desktopvirtualization/v20210114preview:getScalingPlan", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupScalingPlanArgs struct {
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the scaling plan.
	ScalingPlanName string `pulumi:"scalingPlanName"`
}

// Represents a scaling plan definition.
type LookupScalingPlanResult struct {
	// Description of scaling plan.
	Description *string `pulumi:"description"`
	// Exclusion tag for scaling plan.
	ExclusionTag *string `pulumi:"exclusionTag"`
	// User friendly name of scaling plan.
	FriendlyName *string `pulumi:"friendlyName"`
	// List of ScalingHostPoolReference definitions.
	HostPoolReferences []ScalingHostPoolReferenceResponse `pulumi:"hostPoolReferences"`
	// HostPool type for scaling plan.
	HostPoolType *string `pulumi:"hostPoolType"`
	// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
	Id string `pulumi:"id"`
	// The geo-location where the resource lives
	Location string `pulumi:"location"`
	// The name of the resource
	Name string `pulumi:"name"`
	// List of ScalingSchedule definitions.
	Schedules []ScalingScheduleResponse `pulumi:"schedules"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Timezone of the scaling plan.
	TimeZone *string `pulumi:"timeZone"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type string `pulumi:"type"`
}
