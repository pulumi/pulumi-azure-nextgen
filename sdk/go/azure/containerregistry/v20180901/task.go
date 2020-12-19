// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180901

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The task that has the ARM resource and task properties.
// The task will have all information to schedule a run against it.
type Task struct {
	pulumi.CustomResourceState

	// The machine configuration of the run agent.
	AgentConfiguration AgentPropertiesResponsePtrOutput `pulumi:"agentConfiguration"`
	// The creation date of task.
	CreationDate pulumi.StringOutput `pulumi:"creationDate"`
	// The properties that describes a set of credentials that will be used when this run is invoked.
	Credentials CredentialsResponsePtrOutput `pulumi:"credentials"`
	// The location of the resource. This cannot be changed after the resource is created.
	Location pulumi.StringOutput `pulumi:"location"`
	// The name of the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// The platform properties against which the run has to happen.
	Platform PlatformPropertiesResponseOutput `pulumi:"platform"`
	// The provisioning state of the task.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The current status of task.
	Status pulumi.StringPtrOutput `pulumi:"status"`
	// The properties of a task step.
	Step pulumi.AnyOutput `pulumi:"step"`
	// The tags of the resource.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Run timeout in seconds.
	Timeout pulumi.IntPtrOutput `pulumi:"timeout"`
	// The properties that describe all triggers for the task.
	Trigger TriggerPropertiesResponsePtrOutput `pulumi:"trigger"`
	// The type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewTask registers a new resource with the given unique name, arguments, and options.
func NewTask(ctx *pulumi.Context,
	name string, args *TaskArgs, opts ...pulumi.ResourceOption) (*Task, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.Platform == nil {
		return nil, errors.New("invalid value for required argument 'Platform'")
	}
	if args.RegistryName == nil {
		return nil, errors.New("invalid value for required argument 'RegistryName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.Step == nil {
		return nil, errors.New("invalid value for required argument 'Step'")
	}
	if args.TaskName == nil {
		return nil, errors.New("invalid value for required argument 'TaskName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:containerregistry/latest:Task"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerregistry/v20190401:Task"),
		},
		{
			Type: pulumi.String("azure-nextgen:containerregistry/v20190601preview:Task"),
		},
	})
	opts = append(opts, aliases)
	var resource Task
	err := ctx.RegisterResource("azure-nextgen:containerregistry/v20180901:Task", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetTask gets an existing Task resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetTask(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *TaskState, opts ...pulumi.ResourceOption) (*Task, error) {
	var resource Task
	err := ctx.ReadResource("azure-nextgen:containerregistry/v20180901:Task", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Task resources.
type taskState struct {
	// The machine configuration of the run agent.
	AgentConfiguration *AgentPropertiesResponse `pulumi:"agentConfiguration"`
	// The creation date of task.
	CreationDate *string `pulumi:"creationDate"`
	// The properties that describes a set of credentials that will be used when this run is invoked.
	Credentials *CredentialsResponse `pulumi:"credentials"`
	// The location of the resource. This cannot be changed after the resource is created.
	Location *string `pulumi:"location"`
	// The name of the resource.
	Name *string `pulumi:"name"`
	// The platform properties against which the run has to happen.
	Platform *PlatformPropertiesResponse `pulumi:"platform"`
	// The provisioning state of the task.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The current status of task.
	Status *string `pulumi:"status"`
	// The properties of a task step.
	Step interface{} `pulumi:"step"`
	// The tags of the resource.
	Tags map[string]string `pulumi:"tags"`
	// Run timeout in seconds.
	Timeout *int `pulumi:"timeout"`
	// The properties that describe all triggers for the task.
	Trigger *TriggerPropertiesResponse `pulumi:"trigger"`
	// The type of the resource.
	Type *string `pulumi:"type"`
}

type TaskState struct {
	// The machine configuration of the run agent.
	AgentConfiguration AgentPropertiesResponsePtrInput
	// The creation date of task.
	CreationDate pulumi.StringPtrInput
	// The properties that describes a set of credentials that will be used when this run is invoked.
	Credentials CredentialsResponsePtrInput
	// The location of the resource. This cannot be changed after the resource is created.
	Location pulumi.StringPtrInput
	// The name of the resource.
	Name pulumi.StringPtrInput
	// The platform properties against which the run has to happen.
	Platform PlatformPropertiesResponsePtrInput
	// The provisioning state of the task.
	ProvisioningState pulumi.StringPtrInput
	// The current status of task.
	Status pulumi.StringPtrInput
	// The properties of a task step.
	Step pulumi.Input
	// The tags of the resource.
	Tags pulumi.StringMapInput
	// Run timeout in seconds.
	Timeout pulumi.IntPtrInput
	// The properties that describe all triggers for the task.
	Trigger TriggerPropertiesResponsePtrInput
	// The type of the resource.
	Type pulumi.StringPtrInput
}

func (TaskState) ElementType() reflect.Type {
	return reflect.TypeOf((*taskState)(nil)).Elem()
}

type taskArgs struct {
	// The machine configuration of the run agent.
	AgentConfiguration *AgentProperties `pulumi:"agentConfiguration"`
	// The properties that describes a set of credentials that will be used when this run is invoked.
	Credentials *Credentials `pulumi:"credentials"`
	// The location of the resource. This cannot be changed after the resource is created.
	Location string `pulumi:"location"`
	// The platform properties against which the run has to happen.
	Platform PlatformProperties `pulumi:"platform"`
	// The name of the container registry.
	RegistryName string `pulumi:"registryName"`
	// The name of the resource group to which the container registry belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The current status of task.
	Status *string `pulumi:"status"`
	// The properties of a task step.
	Step TaskStepProperties `pulumi:"step"`
	// The tags of the resource.
	Tags map[string]string `pulumi:"tags"`
	// The name of the container registry task.
	TaskName string `pulumi:"taskName"`
	// Run timeout in seconds.
	Timeout *int `pulumi:"timeout"`
	// The properties that describe all triggers for the task.
	Trigger *TriggerProperties `pulumi:"trigger"`
}

// The set of arguments for constructing a Task resource.
type TaskArgs struct {
	// The machine configuration of the run agent.
	AgentConfiguration AgentPropertiesPtrInput
	// The properties that describes a set of credentials that will be used when this run is invoked.
	Credentials CredentialsPtrInput
	// The location of the resource. This cannot be changed after the resource is created.
	Location pulumi.StringInput
	// The platform properties against which the run has to happen.
	Platform PlatformPropertiesInput
	// The name of the container registry.
	RegistryName pulumi.StringInput
	// The name of the resource group to which the container registry belongs.
	ResourceGroupName pulumi.StringInput
	// The current status of task.
	Status pulumi.StringPtrInput
	// The properties of a task step.
	Step TaskStepPropertiesInput
	// The tags of the resource.
	Tags pulumi.StringMapInput
	// The name of the container registry task.
	TaskName pulumi.StringInput
	// Run timeout in seconds.
	Timeout pulumi.IntPtrInput
	// The properties that describe all triggers for the task.
	Trigger TriggerPropertiesPtrInput
}

func (TaskArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*taskArgs)(nil)).Elem()
}

type TaskInput interface {
	pulumi.Input

	ToTaskOutput() TaskOutput
	ToTaskOutputWithContext(ctx context.Context) TaskOutput
}

func (*Task) ElementType() reflect.Type {
	return reflect.TypeOf((*Task)(nil))
}

func (i *Task) ToTaskOutput() TaskOutput {
	return i.ToTaskOutputWithContext(context.Background())
}

func (i *Task) ToTaskOutputWithContext(ctx context.Context) TaskOutput {
	return pulumi.ToOutputWithContext(ctx, i).(TaskOutput)
}

type TaskOutput struct {
	*pulumi.OutputState
}

func (TaskOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Task)(nil))
}

func (o TaskOutput) ToTaskOutput() TaskOutput {
	return o
}

func (o TaskOutput) ToTaskOutputWithContext(ctx context.Context) TaskOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(TaskOutput{})
}
