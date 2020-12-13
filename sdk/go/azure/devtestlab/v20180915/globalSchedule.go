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
type GlobalSchedule struct {
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

// NewGlobalSchedule registers a new resource with the given unique name, arguments, and options.
func NewGlobalSchedule(ctx *pulumi.Context,
	name string, args *GlobalScheduleArgs, opts ...pulumi.ResourceOption) (*GlobalSchedule, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Name == nil {
		return nil, errors.New("invalid value for required argument 'Name'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:devtestlab/latest:GlobalSchedule"),
		},
		{
			Type: pulumi.String("azure-nextgen:devtestlab/v20160515:GlobalSchedule"),
		},
	})
	opts = append(opts, aliases)
	var resource GlobalSchedule
	err := ctx.RegisterResource("azure-nextgen:devtestlab/v20180915:GlobalSchedule", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetGlobalSchedule gets an existing GlobalSchedule resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetGlobalSchedule(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *GlobalScheduleState, opts ...pulumi.ResourceOption) (*GlobalSchedule, error) {
	var resource GlobalSchedule
	err := ctx.ReadResource("azure-nextgen:devtestlab/v20180915:GlobalSchedule", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering GlobalSchedule resources.
type globalScheduleState struct {
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

type GlobalScheduleState struct {
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

func (GlobalScheduleState) ElementType() reflect.Type {
	return reflect.TypeOf((*globalScheduleState)(nil)).Elem()
}

type globalScheduleArgs struct {
	// If the schedule will occur once each day of the week, specify the daily recurrence.
	DailyRecurrence *DayDetails `pulumi:"dailyRecurrence"`
	// If the schedule will occur multiple times a day, specify the hourly recurrence.
	HourlyRecurrence *HourDetails `pulumi:"hourlyRecurrence"`
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

// The set of arguments for constructing a GlobalSchedule resource.
type GlobalScheduleArgs struct {
	// If the schedule will occur once each day of the week, specify the daily recurrence.
	DailyRecurrence DayDetailsPtrInput
	// If the schedule will occur multiple times a day, specify the hourly recurrence.
	HourlyRecurrence HourDetailsPtrInput
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

func (GlobalScheduleArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*globalScheduleArgs)(nil)).Elem()
}

type GlobalScheduleInput interface {
	pulumi.Input

	ToGlobalScheduleOutput() GlobalScheduleOutput
	ToGlobalScheduleOutputWithContext(ctx context.Context) GlobalScheduleOutput
}

func (GlobalSchedule) ElementType() reflect.Type {
	return reflect.TypeOf((*GlobalSchedule)(nil)).Elem()
}

func (i GlobalSchedule) ToGlobalScheduleOutput() GlobalScheduleOutput {
	return i.ToGlobalScheduleOutputWithContext(context.Background())
}

func (i GlobalSchedule) ToGlobalScheduleOutputWithContext(ctx context.Context) GlobalScheduleOutput {
	return pulumi.ToOutputWithContext(ctx, i).(GlobalScheduleOutput)
}

type GlobalScheduleOutput struct {
	*pulumi.OutputState
}

func (GlobalScheduleOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*GlobalScheduleOutput)(nil)).Elem()
}

func (o GlobalScheduleOutput) ToGlobalScheduleOutput() GlobalScheduleOutput {
	return o
}

func (o GlobalScheduleOutput) ToGlobalScheduleOutputWithContext(ctx context.Context) GlobalScheduleOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(GlobalScheduleOutput{})
}
