// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20160301

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

type DayOfWeek pulumi.String

const (
	DayOfWeekSunday    = DayOfWeek("Sunday")
	DayOfWeekMonday    = DayOfWeek("Monday")
	DayOfWeekTuesday   = DayOfWeek("Tuesday")
	DayOfWeekWednesday = DayOfWeek("Wednesday")
	DayOfWeekThursday  = DayOfWeek("Thursday")
	DayOfWeekFriday    = DayOfWeek("Friday")
	DayOfWeekSaturday  = DayOfWeek("Saturday")
)

func (DayOfWeek) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e DayOfWeek) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e DayOfWeek) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e DayOfWeek) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e DayOfWeek) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Gets or sets the HTTP authentication type.
type HttpAuthenticationType pulumi.String

const (
	HttpAuthenticationTypeNotSpecified         = HttpAuthenticationType("NotSpecified")
	HttpAuthenticationTypeClientCertificate    = HttpAuthenticationType("ClientCertificate")
	HttpAuthenticationTypeActiveDirectoryOAuth = HttpAuthenticationType("ActiveDirectoryOAuth")
	HttpAuthenticationTypeBasic                = HttpAuthenticationType("Basic")
)

func (HttpAuthenticationType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e HttpAuthenticationType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e HttpAuthenticationType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e HttpAuthenticationType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e HttpAuthenticationType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Gets or sets the job action type.
type JobActionType pulumi.String

const (
	JobActionTypeHttp            = JobActionType("Http")
	JobActionTypeHttps           = JobActionType("Https")
	JobActionTypeStorageQueue    = JobActionType("StorageQueue")
	JobActionTypeServiceBusQueue = JobActionType("ServiceBusQueue")
	JobActionTypeServiceBusTopic = JobActionType("ServiceBusTopic")
)

func (JobActionType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e JobActionType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e JobActionType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e JobActionType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e JobActionType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Gets or sets the state.
type JobCollectionState pulumi.String

const (
	JobCollectionStateEnabled   = JobCollectionState("Enabled")
	JobCollectionStateDisabled  = JobCollectionState("Disabled")
	JobCollectionStateSuspended = JobCollectionState("Suspended")
	JobCollectionStateDeleted   = JobCollectionState("Deleted")
)

func (JobCollectionState) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e JobCollectionState) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e JobCollectionState) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e JobCollectionState) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e JobCollectionState) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Gets or sets the day. Must be one of monday, tuesday, wednesday, thursday, friday, saturday, sunday.
type JobScheduleDay pulumi.String

const (
	JobScheduleDayMonday    = JobScheduleDay("Monday")
	JobScheduleDayTuesday   = JobScheduleDay("Tuesday")
	JobScheduleDayWednesday = JobScheduleDay("Wednesday")
	JobScheduleDayThursday  = JobScheduleDay("Thursday")
	JobScheduleDayFriday    = JobScheduleDay("Friday")
	JobScheduleDaySaturday  = JobScheduleDay("Saturday")
	JobScheduleDaySunday    = JobScheduleDay("Sunday")
)

func (JobScheduleDay) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e JobScheduleDay) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e JobScheduleDay) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e JobScheduleDay) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e JobScheduleDay) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Gets or set the job state.
type JobState pulumi.String

const (
	JobStateEnabled   = JobState("Enabled")
	JobStateDisabled  = JobState("Disabled")
	JobStateFaulted   = JobState("Faulted")
	JobStateCompleted = JobState("Completed")
)

func (JobState) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e JobState) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e JobState) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e JobState) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e JobState) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Gets or sets the frequency of recurrence (second, minute, hour, day, week, month).
type RecurrenceFrequency pulumi.String

const (
	RecurrenceFrequencyMinute = RecurrenceFrequency("Minute")
	RecurrenceFrequencyHour   = RecurrenceFrequency("Hour")
	RecurrenceFrequencyDay    = RecurrenceFrequency("Day")
	RecurrenceFrequencyWeek   = RecurrenceFrequency("Week")
	RecurrenceFrequencyMonth  = RecurrenceFrequency("Month")
)

func (RecurrenceFrequency) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e RecurrenceFrequency) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e RecurrenceFrequency) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e RecurrenceFrequency) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e RecurrenceFrequency) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Gets or sets the retry strategy to be used.
type RetryType pulumi.String

const (
	RetryTypeNone  = RetryType("None")
	RetryTypeFixed = RetryType("Fixed")
)

func (RetryType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e RetryType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e RetryType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e RetryType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e RetryType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Gets or sets the authentication type.
type ServiceBusAuthenticationType pulumi.String

const (
	ServiceBusAuthenticationTypeNotSpecified    = ServiceBusAuthenticationType("NotSpecified")
	ServiceBusAuthenticationTypeSharedAccessKey = ServiceBusAuthenticationType("SharedAccessKey")
)

func (ServiceBusAuthenticationType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ServiceBusAuthenticationType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ServiceBusAuthenticationType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ServiceBusAuthenticationType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ServiceBusAuthenticationType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Gets or sets the transport type.
type ServiceBusTransportType pulumi.String

const (
	ServiceBusTransportTypeNotSpecified = ServiceBusTransportType("NotSpecified")
	ServiceBusTransportTypeNetMessaging = ServiceBusTransportType("NetMessaging")
	ServiceBusTransportTypeAMQP         = ServiceBusTransportType("AMQP")
)

func (ServiceBusTransportType) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e ServiceBusTransportType) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e ServiceBusTransportType) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e ServiceBusTransportType) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e ServiceBusTransportType) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}

// Gets or set the SKU.
type SkuDefinition pulumi.String

const (
	SkuDefinitionStandard   = SkuDefinition("Standard")
	SkuDefinitionFree       = SkuDefinition("Free")
	SkuDefinitionP10Premium = SkuDefinition("P10Premium")
	SkuDefinitionP20Premium = SkuDefinition("P20Premium")
)

func (SkuDefinition) ElementType() reflect.Type {
	return reflect.TypeOf((*pulumi.String)(nil)).Elem()
}

func (e SkuDefinition) ToStringOutput() pulumi.StringOutput {
	return pulumi.ToOutput(pulumi.String(e)).(pulumi.StringOutput)
}

func (e SkuDefinition) ToStringOutputWithContext(ctx context.Context) pulumi.StringOutput {
	return pulumi.ToOutputWithContext(ctx, pulumi.String(e)).(pulumi.StringOutput)
}

func (e SkuDefinition) ToStringPtrOutput() pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringPtrOutputWithContext(context.Background())
}

func (e SkuDefinition) ToStringPtrOutputWithContext(ctx context.Context) pulumi.StringPtrOutput {
	return pulumi.String(e).ToStringOutputWithContext(ctx).ToStringPtrOutputWithContext(ctx)
}
