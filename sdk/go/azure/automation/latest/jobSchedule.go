// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Definition of the job schedule.
// Latest API Version: 2015-10-31.
type JobSchedule struct {
	pulumi.CustomResourceState

	// Gets or sets the id of job schedule.
	JobScheduleId pulumi.StringPtrOutput `pulumi:"jobScheduleId"`
	// Gets the name of the variable.
	Name pulumi.StringOutput `pulumi:"name"`
	// Gets or sets the parameters of the job schedule.
	Parameters pulumi.StringMapOutput `pulumi:"parameters"`
	// Gets or sets the hybrid worker group that the scheduled job should run on.
	RunOn pulumi.StringPtrOutput `pulumi:"runOn"`
	// Gets or sets the runbook.
	Runbook RunbookAssociationPropertyResponsePtrOutput `pulumi:"runbook"`
	// Gets or sets the schedule.
	Schedule ScheduleAssociationPropertyResponsePtrOutput `pulumi:"schedule"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewJobSchedule registers a new resource with the given unique name, arguments, and options.
func NewJobSchedule(ctx *pulumi.Context,
	name string, args *JobScheduleArgs, opts ...pulumi.ResourceOption) (*JobSchedule, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AutomationAccountName == nil {
		return nil, errors.New("invalid value for required argument 'AutomationAccountName'")
	}
	if args.JobScheduleId == nil {
		return nil, errors.New("invalid value for required argument 'JobScheduleId'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.Runbook == nil {
		return nil, errors.New("invalid value for required argument 'Runbook'")
	}
	if args.Schedule == nil {
		return nil, errors.New("invalid value for required argument 'Schedule'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:automation/v20151031:JobSchedule"),
		},
	})
	opts = append(opts, aliases)
	var resource JobSchedule
	err := ctx.RegisterResource("azure-nextgen:automation/latest:JobSchedule", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetJobSchedule gets an existing JobSchedule resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetJobSchedule(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *JobScheduleState, opts ...pulumi.ResourceOption) (*JobSchedule, error) {
	var resource JobSchedule
	err := ctx.ReadResource("azure-nextgen:automation/latest:JobSchedule", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering JobSchedule resources.
type jobScheduleState struct {
	// Gets or sets the id of job schedule.
	JobScheduleId *string `pulumi:"jobScheduleId"`
	// Gets the name of the variable.
	Name *string `pulumi:"name"`
	// Gets or sets the parameters of the job schedule.
	Parameters map[string]string `pulumi:"parameters"`
	// Gets or sets the hybrid worker group that the scheduled job should run on.
	RunOn *string `pulumi:"runOn"`
	// Gets or sets the runbook.
	Runbook *RunbookAssociationPropertyResponse `pulumi:"runbook"`
	// Gets or sets the schedule.
	Schedule *ScheduleAssociationPropertyResponse `pulumi:"schedule"`
	// Resource type
	Type *string `pulumi:"type"`
}

type JobScheduleState struct {
	// Gets or sets the id of job schedule.
	JobScheduleId pulumi.StringPtrInput
	// Gets the name of the variable.
	Name pulumi.StringPtrInput
	// Gets or sets the parameters of the job schedule.
	Parameters pulumi.StringMapInput
	// Gets or sets the hybrid worker group that the scheduled job should run on.
	RunOn pulumi.StringPtrInput
	// Gets or sets the runbook.
	Runbook RunbookAssociationPropertyResponsePtrInput
	// Gets or sets the schedule.
	Schedule ScheduleAssociationPropertyResponsePtrInput
	// Resource type
	Type pulumi.StringPtrInput
}

func (JobScheduleState) ElementType() reflect.Type {
	return reflect.TypeOf((*jobScheduleState)(nil)).Elem()
}

type jobScheduleArgs struct {
	// The name of the automation account.
	AutomationAccountName string `pulumi:"automationAccountName"`
	// The job schedule name.
	JobScheduleId string `pulumi:"jobScheduleId"`
	// Gets or sets a list of job properties.
	Parameters map[string]string `pulumi:"parameters"`
	// Name of an Azure Resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Gets or sets the hybrid worker group that the scheduled job should run on.
	RunOn *string `pulumi:"runOn"`
	// Gets or sets the runbook.
	Runbook RunbookAssociationProperty `pulumi:"runbook"`
	// Gets or sets the schedule.
	Schedule ScheduleAssociationProperty `pulumi:"schedule"`
}

// The set of arguments for constructing a JobSchedule resource.
type JobScheduleArgs struct {
	// The name of the automation account.
	AutomationAccountName pulumi.StringInput
	// The job schedule name.
	JobScheduleId pulumi.StringInput
	// Gets or sets a list of job properties.
	Parameters pulumi.StringMapInput
	// Name of an Azure Resource group.
	ResourceGroupName pulumi.StringInput
	// Gets or sets the hybrid worker group that the scheduled job should run on.
	RunOn pulumi.StringPtrInput
	// Gets or sets the runbook.
	Runbook RunbookAssociationPropertyInput
	// Gets or sets the schedule.
	Schedule ScheduleAssociationPropertyInput
}

func (JobScheduleArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*jobScheduleArgs)(nil)).Elem()
}

type JobScheduleInput interface {
	pulumi.Input

	ToJobScheduleOutput() JobScheduleOutput
	ToJobScheduleOutputWithContext(ctx context.Context) JobScheduleOutput
}

func (*JobSchedule) ElementType() reflect.Type {
	return reflect.TypeOf((*JobSchedule)(nil))
}

func (i *JobSchedule) ToJobScheduleOutput() JobScheduleOutput {
	return i.ToJobScheduleOutputWithContext(context.Background())
}

func (i *JobSchedule) ToJobScheduleOutputWithContext(ctx context.Context) JobScheduleOutput {
	return pulumi.ToOutputWithContext(ctx, i).(JobScheduleOutput)
}

type JobScheduleOutput struct {
	*pulumi.OutputState
}

func (JobScheduleOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*JobSchedule)(nil))
}

func (o JobScheduleOutput) ToJobScheduleOutput() JobScheduleOutput {
	return o
}

func (o JobScheduleOutput) ToJobScheduleOutputWithContext(ctx context.Context) JobScheduleOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(JobScheduleOutput{})
}
