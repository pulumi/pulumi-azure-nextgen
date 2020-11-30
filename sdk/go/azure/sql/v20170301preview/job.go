// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170301preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A job.
type Job struct {
	pulumi.CustomResourceState

	// User-defined description of the job.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Schedule properties of the job.
	Schedule JobScheduleResponsePtrOutput `pulumi:"schedule"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// The job version number.
	Version pulumi.IntOutput `pulumi:"version"`
}

// NewJob registers a new resource with the given unique name, arguments, and options.
func NewJob(ctx *pulumi.Context,
	name string, args *JobArgs, opts ...pulumi.ResourceOption) (*Job, error) {
	if args == nil || args.JobAgentName == nil {
		return nil, errors.New("missing required argument 'JobAgentName'")
	}
	if args == nil || args.JobName == nil {
		return nil, errors.New("missing required argument 'JobName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.ServerName == nil {
		return nil, errors.New("missing required argument 'ServerName'")
	}
	if args == nil {
		args = &JobArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:sql/v20200801preview:Job"),
		},
	})
	opts = append(opts, aliases)
	var resource Job
	err := ctx.RegisterResource("azure-nextgen:sql/v20170301preview:Job", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetJob gets an existing Job resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetJob(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *JobState, opts ...pulumi.ResourceOption) (*Job, error) {
	var resource Job
	err := ctx.ReadResource("azure-nextgen:sql/v20170301preview:Job", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Job resources.
type jobState struct {
	// User-defined description of the job.
	Description *string `pulumi:"description"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Schedule properties of the job.
	Schedule *JobScheduleResponse `pulumi:"schedule"`
	// Resource type.
	Type *string `pulumi:"type"`
	// The job version number.
	Version *int `pulumi:"version"`
}

type JobState struct {
	// User-defined description of the job.
	Description pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Schedule properties of the job.
	Schedule JobScheduleResponsePtrInput
	// Resource type.
	Type pulumi.StringPtrInput
	// The job version number.
	Version pulumi.IntPtrInput
}

func (JobState) ElementType() reflect.Type {
	return reflect.TypeOf((*jobState)(nil)).Elem()
}

type jobArgs struct {
	// User-defined description of the job.
	Description *string `pulumi:"description"`
	// The name of the job agent.
	JobAgentName string `pulumi:"jobAgentName"`
	// The name of the job to get.
	JobName string `pulumi:"jobName"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Schedule properties of the job.
	Schedule *JobSchedule `pulumi:"schedule"`
	// The name of the server.
	ServerName string `pulumi:"serverName"`
}

// The set of arguments for constructing a Job resource.
type JobArgs struct {
	// User-defined description of the job.
	Description pulumi.StringPtrInput
	// The name of the job agent.
	JobAgentName pulumi.StringInput
	// The name of the job to get.
	JobName pulumi.StringInput
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName pulumi.StringInput
	// Schedule properties of the job.
	Schedule JobSchedulePtrInput
	// The name of the server.
	ServerName pulumi.StringInput
}

func (JobArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*jobArgs)(nil)).Elem()
}

type JobInput interface {
	pulumi.Input

	ToJobOutput() JobOutput
	ToJobOutputWithContext(ctx context.Context) JobOutput
}

func (Job) ElementType() reflect.Type {
	return reflect.TypeOf((*Job)(nil)).Elem()
}

func (i Job) ToJobOutput() JobOutput {
	return i.ToJobOutputWithContext(context.Background())
}

func (i Job) ToJobOutputWithContext(ctx context.Context) JobOutput {
	return pulumi.ToOutputWithContext(ctx, i).(JobOutput)
}

type JobOutput struct {
	*pulumi.OutputState
}

func (JobOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*JobOutput)(nil)).Elem()
}

func (o JobOutput) ToJobOutput() JobOutput {
	return o
}

func (o JobOutput) ToJobOutputWithContext(ctx context.Context) JobOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(JobOutput{})
}
