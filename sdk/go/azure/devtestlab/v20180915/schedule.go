// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180915

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A schedule.
type Schedule struct {
	pulumi.CustomResourceState

	// The creation date of the schedule.
	CreatedDate pulumi.StringOutput `pulumi:"createdDate"`
	// If the schedule will occur once each day of the week, specify the daily recurrence.
	DailyRecurrence DayDetailsResponsePtrOutput `pulumi:"dailyRecurrence"`
	// If the schedule will occur multiple times a day, specify the hourly recurrence.
	HourlyRecurrence HourDetailsResponsePtrOutput `pulumi:"hourlyRecurrence"`
	// The location of the resource.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// The name of the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// Notification settings.
	NotificationSettings NotificationSettingsResponsePtrOutput `pulumi:"notificationSettings"`
	// The provisioning status of the resource.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The status of the schedule (i.e. Enabled, Disabled)
	Status pulumi.StringPtrOutput `pulumi:"status"`
	// The tags of the resource.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The resource ID to which the schedule belongs
	TargetResourceId pulumi.StringPtrOutput `pulumi:"targetResourceId"`
	// The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart).
	TaskType pulumi.StringPtrOutput `pulumi:"taskType"`
	// The time zone ID (e.g. Pacific Standard time).
	TimeZoneId pulumi.StringPtrOutput `pulumi:"timeZoneId"`
	// The type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
	// The unique immutable identifier of a resource (Guid).
	UniqueIdentifier pulumi.StringOutput `pulumi:"uniqueIdentifier"`
	// If the schedule will occur only some days of the week, specify the weekly recurrence.
	WeeklyRecurrence WeekDetailsResponsePtrOutput `pulumi:"weeklyRecurrence"`
}

// NewSchedule registers a new resource with the given unique name, arguments, and options.
func NewSchedule(ctx *pulumi.Context,
	name string, args *ScheduleArgs, opts ...pulumi.ResourceOption) (*Schedule, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.LabName == nil {
		return nil, errors.New("invalid value for required argument 'LabName'")
	}
	if args.Name == nil {
		return nil, errors.New("invalid value for required argument 'Name'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:devtestlab/latest:Schedule"),
		},
		{
			Type: pulumi.String("azure-nextgen:devtestlab/v20150521preview:Schedule"),
		},
		{
			Type: pulumi.String("azure-nextgen:devtestlab/v20160515:Schedule"),
		},
	})
	opts = append(opts, aliases)
	var resource Schedule
	err := ctx.RegisterResource("azure-nextgen:devtestlab/v20180915:Schedule", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetSchedule gets an existing Schedule resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSchedule(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ScheduleState, opts ...pulumi.ResourceOption) (*Schedule, error) {
	var resource Schedule
	err := ctx.ReadResource("azure-nextgen:devtestlab/v20180915:Schedule", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Schedule resources.
type scheduleState struct {
	// The creation date of the schedule.
	CreatedDate *string `pulumi:"createdDate"`
	// If the schedule will occur once each day of the week, specify the daily recurrence.
	DailyRecurrence *DayDetailsResponse `pulumi:"dailyRecurrence"`
	// If the schedule will occur multiple times a day, specify the hourly recurrence.
	HourlyRecurrence *HourDetailsResponse `pulumi:"hourlyRecurrence"`
	// The location of the resource.
	Location *string `pulumi:"location"`
	// The name of the resource.
	Name *string `pulumi:"name"`
	// Notification settings.
	NotificationSettings *NotificationSettingsResponse `pulumi:"notificationSettings"`
	// The provisioning status of the resource.
	ProvisioningState *string `pulumi:"provisioningState"`
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
	Type *string `pulumi:"type"`
	// The unique immutable identifier of a resource (Guid).
	UniqueIdentifier *string `pulumi:"uniqueIdentifier"`
	// If the schedule will occur only some days of the week, specify the weekly recurrence.
	WeeklyRecurrence *WeekDetailsResponse `pulumi:"weeklyRecurrence"`
}

type ScheduleState struct {
	// The creation date of the schedule.
	CreatedDate pulumi.StringPtrInput
	// If the schedule will occur once each day of the week, specify the daily recurrence.
	DailyRecurrence DayDetailsResponsePtrInput
	// If the schedule will occur multiple times a day, specify the hourly recurrence.
	HourlyRecurrence HourDetailsResponsePtrInput
	// The location of the resource.
	Location pulumi.StringPtrInput
	// The name of the resource.
	Name pulumi.StringPtrInput
	// Notification settings.
	NotificationSettings NotificationSettingsResponsePtrInput
	// The provisioning status of the resource.
	ProvisioningState pulumi.StringPtrInput
	// The status of the schedule (i.e. Enabled, Disabled)
	Status pulumi.StringPtrInput
	// The tags of the resource.
	Tags pulumi.StringMapInput
	// The resource ID to which the schedule belongs
	TargetResourceId pulumi.StringPtrInput
	// The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart).
	TaskType pulumi.StringPtrInput
	// The time zone ID (e.g. Pacific Standard time).
	TimeZoneId pulumi.StringPtrInput
	// The type of the resource.
	Type pulumi.StringPtrInput
	// The unique immutable identifier of a resource (Guid).
	UniqueIdentifier pulumi.StringPtrInput
	// If the schedule will occur only some days of the week, specify the weekly recurrence.
	WeeklyRecurrence WeekDetailsResponsePtrInput
}

func (ScheduleState) ElementType() reflect.Type {
	return reflect.TypeOf((*scheduleState)(nil)).Elem()
}

type scheduleArgs struct {
	// If the schedule will occur once each day of the week, specify the daily recurrence.
	DailyRecurrence *DayDetails `pulumi:"dailyRecurrence"`
	// If the schedule will occur multiple times a day, specify the hourly recurrence.
	HourlyRecurrence *HourDetails `pulumi:"hourlyRecurrence"`
	// The name of the lab.
	LabName string `pulumi:"labName"`
	// The location of the resource.
	Location *string `pulumi:"location"`
	// The name of the schedule.
	Name string `pulumi:"name"`
	// Notification settings.
	NotificationSettings *NotificationSettings `pulumi:"notificationSettings"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
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
	// If the schedule will occur only some days of the week, specify the weekly recurrence.
	WeeklyRecurrence *WeekDetails `pulumi:"weeklyRecurrence"`
}

// The set of arguments for constructing a Schedule resource.
type ScheduleArgs struct {
	// If the schedule will occur once each day of the week, specify the daily recurrence.
	DailyRecurrence DayDetailsPtrInput
	// If the schedule will occur multiple times a day, specify the hourly recurrence.
	HourlyRecurrence HourDetailsPtrInput
	// The name of the lab.
	LabName pulumi.StringInput
	// The location of the resource.
	Location pulumi.StringPtrInput
	// The name of the schedule.
	Name pulumi.StringInput
	// Notification settings.
	NotificationSettings NotificationSettingsPtrInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// The status of the schedule (i.e. Enabled, Disabled)
	Status pulumi.StringPtrInput
	// The tags of the resource.
	Tags pulumi.StringMapInput
	// The resource ID to which the schedule belongs
	TargetResourceId pulumi.StringPtrInput
	// The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart).
	TaskType pulumi.StringPtrInput
	// The time zone ID (e.g. Pacific Standard time).
	TimeZoneId pulumi.StringPtrInput
	// If the schedule will occur only some days of the week, specify the weekly recurrence.
	WeeklyRecurrence WeekDetailsPtrInput
}

func (ScheduleArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*scheduleArgs)(nil)).Elem()
}

type ScheduleInput interface {
	pulumi.Input

	ToScheduleOutput() ScheduleOutput
	ToScheduleOutputWithContext(ctx context.Context) ScheduleOutput
}

func (Schedule) ElementType() reflect.Type {
	return reflect.TypeOf((*Schedule)(nil)).Elem()
}

func (i Schedule) ToScheduleOutput() ScheduleOutput {
	return i.ToScheduleOutputWithContext(context.Background())
}

func (i Schedule) ToScheduleOutputWithContext(ctx context.Context) ScheduleOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ScheduleOutput)
}

type ScheduleOutput struct {
	*pulumi.OutputState
}

func (ScheduleOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ScheduleOutput)(nil)).Elem()
}

func (o ScheduleOutput) ToScheduleOutput() ScheduleOutput {
	return o
}

func (o ScheduleOutput) ToScheduleOutputWithContext(ctx context.Context) ScheduleOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ScheduleOutput{})
}
