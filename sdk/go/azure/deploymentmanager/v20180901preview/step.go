// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180901preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The resource representation of a rollout step.
type Step struct {
	pulumi.CustomResourceState

	// The geo-location where the resource lives
	Location pulumi.StringOutput `pulumi:"location"`
	// The name of the resource
	Name pulumi.StringOutput `pulumi:"name"`
	// The properties that define the step.
	Properties WaitStepPropertiesResponseOutput `pulumi:"properties"`
	// Resource tags.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewStep registers a new resource with the given unique name, arguments, and options.
func NewStep(ctx *pulumi.Context,
	name string, args *StepArgs, opts ...pulumi.ResourceOption) (*Step, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.Properties == nil {
		return nil, errors.New("invalid value for required argument 'Properties'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.StepName == nil {
		return nil, errors.New("invalid value for required argument 'StepName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:deploymentmanager/v20191101preview:Step"),
		},
	})
	opts = append(opts, aliases)
	var resource Step
	err := ctx.RegisterResource("azure-nextgen:deploymentmanager/v20180901preview:Step", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetStep gets an existing Step resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetStep(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *StepState, opts ...pulumi.ResourceOption) (*Step, error) {
	var resource Step
	err := ctx.ReadResource("azure-nextgen:deploymentmanager/v20180901preview:Step", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Step resources.
type stepState struct {
	// The geo-location where the resource lives
	Location *string `pulumi:"location"`
	// The name of the resource
	Name *string `pulumi:"name"`
	// The properties that define the step.
	Properties *WaitStepPropertiesResponse `pulumi:"properties"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type *string `pulumi:"type"`
}

type StepState struct {
	// The geo-location where the resource lives
	Location pulumi.StringPtrInput
	// The name of the resource
	Name pulumi.StringPtrInput
	// The properties that define the step.
	Properties WaitStepPropertiesResponsePtrInput
	// Resource tags.
	Tags pulumi.StringMapInput
	// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
	Type pulumi.StringPtrInput
}

func (StepState) ElementType() reflect.Type {
	return reflect.TypeOf((*stepState)(nil)).Elem()
}

type stepArgs struct {
	// The geo-location where the resource lives
	Location string `pulumi:"location"`
	// The properties that define the step.
	Properties WaitStepProperties `pulumi:"properties"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the deployment step.
	StepName string `pulumi:"stepName"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a Step resource.
type StepArgs struct {
	// The geo-location where the resource lives
	Location pulumi.StringInput
	// The properties that define the step.
	Properties WaitStepPropertiesInput
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
	// The name of the deployment step.
	StepName pulumi.StringInput
	// Resource tags.
	Tags pulumi.StringMapInput
}

func (StepArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*stepArgs)(nil)).Elem()
}

type StepInput interface {
	pulumi.Input

	ToStepOutput() StepOutput
	ToStepOutputWithContext(ctx context.Context) StepOutput
}

func (*Step) ElementType() reflect.Type {
	return reflect.TypeOf((*Step)(nil))
}

func (i *Step) ToStepOutput() StepOutput {
	return i.ToStepOutputWithContext(context.Background())
}

func (i *Step) ToStepOutputWithContext(ctx context.Context) StepOutput {
	return pulumi.ToOutputWithContext(ctx, i).(StepOutput)
}

type StepOutput struct {
	*pulumi.OutputState
}

func (StepOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*Step)(nil))
}

func (o StepOutput) ToStepOutput() StepOutput {
	return o
}

func (o StepOutput) ToStepOutputWithContext(ctx context.Context) StepOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(StepOutput{})
}
