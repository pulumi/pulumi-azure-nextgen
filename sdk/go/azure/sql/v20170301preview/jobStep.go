// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170301preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A job step.
type JobStep struct {
	pulumi.CustomResourceState

	// The action payload of the job step.
	Action JobStepActionResponseOutput `pulumi:"action"`
	// The resource ID of the job credential that will be used to connect to the targets.
	Credential pulumi.StringOutput `pulumi:"credential"`
	// Execution options for the job step.
	ExecutionOptions JobStepExecutionOptionsResponsePtrOutput `pulumi:"executionOptions"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Output destination properties of the job step.
	Output JobStepOutputResponsePtrOutput `pulumi:"output"`
	// The job step's index within the job. If not specified when creating the job step, it will be created as the last step. If not specified when updating the job step, the step id is not modified.
	StepId pulumi.IntPtrOutput `pulumi:"stepId"`
	// The resource ID of the target group that the job step will be executed on.
	TargetGroup pulumi.StringOutput `pulumi:"targetGroup"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewJobStep registers a new resource with the given unique name, arguments, and options.
func NewJobStep(ctx *pulumi.Context,
	name string, args *JobStepArgs, opts ...pulumi.ResourceOption) (*JobStep, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Action == nil {
		return nil, errors.New("invalid value for required argument 'Action'")
	}
	if args.Credential == nil {
		return nil, errors.New("invalid value for required argument 'Credential'")
	}
	if args.JobAgentName == nil {
		return nil, errors.New("invalid value for required argument 'JobAgentName'")
	}
	if args.JobName == nil {
		return nil, errors.New("invalid value for required argument 'JobName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ServerName == nil {
		return nil, errors.New("invalid value for required argument 'ServerName'")
	}
	if args.StepName == nil {
		return nil, errors.New("invalid value for required argument 'StepName'")
	}
	if args.TargetGroup == nil {
		return nil, errors.New("invalid value for required argument 'TargetGroup'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:sql/v20200202preview:JobStep"),
		},
		{
			Type: pulumi.String("azure-nextgen:sql/v20200801preview:JobStep"),
		},
	})
	opts = append(opts, aliases)
	var resource JobStep
	err := ctx.RegisterResource("azure-nextgen:sql/v20170301preview:JobStep", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetJobStep gets an existing JobStep resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetJobStep(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *JobStepState, opts ...pulumi.ResourceOption) (*JobStep, error) {
	var resource JobStep
	err := ctx.ReadResource("azure-nextgen:sql/v20170301preview:JobStep", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering JobStep resources.
type jobStepState struct {
	// The action payload of the job step.
	Action *JobStepActionResponse `pulumi:"action"`
	// The resource ID of the job credential that will be used to connect to the targets.
	Credential *string `pulumi:"credential"`
	// Execution options for the job step.
	ExecutionOptions *JobStepExecutionOptionsResponse `pulumi:"executionOptions"`
	// Resource name.
	Name *string `pulumi:"name"`
	// Output destination properties of the job step.
	Output *JobStepOutputResponse `pulumi:"output"`
	// The job step's index within the job. If not specified when creating the job step, it will be created as the last step. If not specified when updating the job step, the step id is not modified.
	StepId *int `pulumi:"stepId"`
	// The resource ID of the target group that the job step will be executed on.
	TargetGroup *string `pulumi:"targetGroup"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type JobStepState struct {
	// The action payload of the job step.
	Action JobStepActionResponsePtrInput
	// The resource ID of the job credential that will be used to connect to the targets.
	Credential pulumi.StringPtrInput
	// Execution options for the job step.
	ExecutionOptions JobStepExecutionOptionsResponsePtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// Output destination properties of the job step.
	Output JobStepOutputResponsePtrInput
	// The job step's index within the job. If not specified when creating the job step, it will be created as the last step. If not specified when updating the job step, the step id is not modified.
	StepId pulumi.IntPtrInput
	// The resource ID of the target group that the job step will be executed on.
	TargetGroup pulumi.StringPtrInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (JobStepState) ElementType() reflect.Type {
	return reflect.TypeOf((*jobStepState)(nil)).Elem()
}

type jobStepArgs struct {
	// The action payload of the job step.
	Action JobStepAction `pulumi:"action"`
	// The resource ID of the job credential that will be used to connect to the targets.
	Credential string `pulumi:"credential"`
	// Execution options for the job step.
	ExecutionOptions *JobStepExecutionOptions `pulumi:"executionOptions"`
	// The name of the job agent.
	JobAgentName string `pulumi:"jobAgentName"`
	// The name of the job.
	JobName string `pulumi:"jobName"`
	// Output destination properties of the job step.
	Output *JobStepOutput `pulumi:"output"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the server.
	ServerName string `pulumi:"serverName"`
	// The job step's index within the job. If not specified when creating the job step, it will be created as the last step. If not specified when updating the job step, the step id is not modified.
	StepId *int `pulumi:"stepId"`
	// The name of the job step.
	StepName string `pulumi:"stepName"`
	// The resource ID of the target group that the job step will be executed on.
	TargetGroup string `pulumi:"targetGroup"`
}

// The set of arguments for constructing a JobStep resource.
type JobStepArgs struct {
	// The action payload of the job step.
	Action JobStepActionInput
	// The resource ID of the job credential that will be used to connect to the targets.
	Credential pulumi.StringInput
	// Execution options for the job step.
	ExecutionOptions JobStepExecutionOptionsPtrInput
	// The name of the job agent.
	JobAgentName pulumi.StringInput
	// The name of the job.
	JobName pulumi.StringInput
	// Output destination properties of the job step.
	Output JobStepOutputPtrInput
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName pulumi.StringInput
	// The name of the server.
	ServerName pulumi.StringInput
	// The job step's index within the job. If not specified when creating the job step, it will be created as the last step. If not specified when updating the job step, the step id is not modified.
	StepId pulumi.IntPtrInput
	// The name of the job step.
	StepName pulumi.StringInput
	// The resource ID of the target group that the job step will be executed on.
	TargetGroup pulumi.StringInput
}

func (JobStepArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*jobStepArgs)(nil)).Elem()
}

type JobStepInput interface {
	pulumi.Input

	ToJobStepOutput() JobStepOutput
	ToJobStepOutputWithContext(ctx context.Context) JobStepOutput
}

func (*JobStep) ElementType() reflect.Type {
	return reflect.TypeOf((*JobStep)(nil))
}

func (i *JobStep) ToJobStepOutput() JobStepOutput {
	return i.ToJobStepOutputWithContext(context.Background())
}

func (i *JobStep) ToJobStepOutputWithContext(ctx context.Context) JobStepOutput {
	return pulumi.ToOutputWithContext(ctx, i).(JobStepOutput)
}

type JobStepOutput struct {
	*pulumi.OutputState
}

func (JobStepOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*JobStep)(nil))
}

func (o JobStepOutput) ToJobStepOutput() JobStepOutput {
	return o
}

func (o JobStepOutput) ToJobStepOutputWithContext(ctx context.Context) JobStepOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(JobStepOutput{})
}
