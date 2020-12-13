// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180301

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupPatchSchedule(ctx *pulumi.Context, args *LookupPatchScheduleArgs, opts ...pulumi.InvokeOption) (*LookupPatchScheduleResult, error) {
	var rv LookupPatchScheduleResult
	err := ctx.Invoke("azure-nextgen:cache/v20180301:getPatchSchedule", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupPatchScheduleArgs struct {
	// Default string modeled as parameter for auto generation to work correctly.
	Default string `pulumi:"default"`
	// The name of the redis cache.
	Name string `pulumi:"name"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Response to put/get patch schedules for Redis cache.
type LookupPatchScheduleResult struct {
	// Resource ID.
	Id string `pulumi:"id"`
	// Resource name.
	Name string `pulumi:"name"`
	// List of patch schedules for a Redis cache.
	ScheduleEntries []ScheduleEntryResponse `pulumi:"scheduleEntries"`
	// Resource type.
	Type string `pulumi:"type"`
}
