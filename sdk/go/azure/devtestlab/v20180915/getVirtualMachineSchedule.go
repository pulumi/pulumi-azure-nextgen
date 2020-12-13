// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180915

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupVirtualMachineSchedule(ctx *pulumi.Context, args *LookupVirtualMachineScheduleArgs, opts ...pulumi.InvokeOption) (*LookupVirtualMachineScheduleResult, error) {
	var rv LookupVirtualMachineScheduleResult
	err := ctx.Invoke("azure-nextgen:devtestlab/v20180915:getVirtualMachineSchedule", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupVirtualMachineScheduleArgs struct {
	// Specify the $expand query. Example: 'properties($select=status)'
	Expand *string `pulumi:"expand"`
	// The name of the lab.
	LabName string `pulumi:"labName"`
	// The name of the schedule.
	Name string `pulumi:"name"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the virtual machine.
	VirtualMachineName string `pulumi:"virtualMachineName"`
}

// A schedule.
type LookupVirtualMachineScheduleResult struct {
	// The creation date of the schedule.
	CreatedDate string `pulumi:"createdDate"`
	// If the schedule will occur once each day of the week, specify the daily recurrence.
	DailyRecurrence *DayDetailsResponse `pulumi:"dailyRecurrence"`
	// If the schedule will occur multiple times a day, specify the hourly recurrence.
	HourlyRecurrence *HourDetailsResponse `pulumi:"hourlyRecurrence"`
	// The identifier of the resource.
	Id string `pulumi:"id"`
	// The location of the resource.
	Location *string `pulumi:"location"`
	// The name of the resource.
	Name string `pulumi:"name"`
	// Notification settings.
	NotificationSettings *NotificationSettingsResponse `pulumi:"notificationSettings"`
	// The provisioning status of the resource.
	ProvisioningState string `pulumi:"provisioningState"`
	// The status of the schedule (i.e. Enabled, Disabled)
	Status *string `pulumi:"status"`
	// The tags of the resource.
	Tags map[string]string `pulumi:"tags"`
	// The resource ID to which the schedule belongs
	TargetResourceId *string `pulumi:"targetResourceId"`
	// The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart).
	TaskType *string `pulumi:"taskType"`
	// The time zone ID (e.g. Pacific Standard time).
	TimeZoneId *string `pulumi:"timeZoneId"`
	// The type of the resource.
	Type string `pulumi:"type"`
	// The unique immutable identifier of a resource (Guid).
	UniqueIdentifier string `pulumi:"uniqueIdentifier"`
	// If the schedule will occur only some days of the week, specify the weekly recurrence.
	WeeklyRecurrence *WeekDetailsResponse `pulumi:"weeklyRecurrence"`
}
