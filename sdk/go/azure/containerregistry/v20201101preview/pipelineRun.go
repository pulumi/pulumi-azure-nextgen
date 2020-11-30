// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20201101preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// An object that represents a pipeline run for a container registry.
type PipelineRun struct {
	pulumi.CustomResourceState

	// How the pipeline run should be forced to recreate even if the pipeline run configuration has not changed.
	ForceUpdateTag pulumi.StringPtrOutput `pulumi:"forceUpdateTag"`
	// The name of the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// The provisioning state of a pipeline run.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The request parameters for a pipeline run.
	Request PipelineRunRequestResponsePtrOutput `pulumi:"request"`
	// The response of a pipeline run.
	Response PipelineRunResponseResponseOutput `pulumi:"response"`
	// Metadata pertaining to creation and last modification of the resource.
	SystemData SystemDataResponseOutput `pulumi:"systemData"`
	// The type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewPipelineRun registers a new resource with the given unique name, arguments, and options.
func NewPipelineRun(ctx *pulumi.Context,
	name string, args *PipelineRunArgs, opts ...pulumi.ResourceOption) (*PipelineRun, error) {
	if args == nil || args.PipelineRunName == nil {
		return nil, errors.New("missing required argument 'PipelineRunName'")
	}
	if args == nil || args.RegistryName == nil {
		return nil, errors.New("missing required argument 'RegistryName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil {
		args = &PipelineRunArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:containerregistry/v20191201preview:PipelineRun"),
		},
	})
	opts = append(opts, aliases)
	var resource PipelineRun
	err := ctx.RegisterResource("azure-nextgen:containerregistry/v20201101preview:PipelineRun", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetPipelineRun gets an existing PipelineRun resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPipelineRun(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *PipelineRunState, opts ...pulumi.ResourceOption) (*PipelineRun, error) {
	var resource PipelineRun
	err := ctx.ReadResource("azure-nextgen:containerregistry/v20201101preview:PipelineRun", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering PipelineRun resources.
type pipelineRunState struct {
	// How the pipeline run should be forced to recreate even if the pipeline run configuration has not changed.
	ForceUpdateTag *string `pulumi:"forceUpdateTag"`
	// The name of the resource.
	Name *string `pulumi:"name"`
	// The provisioning state of a pipeline run.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The request parameters for a pipeline run.
	Request *PipelineRunRequestResponse `pulumi:"request"`
	// The response of a pipeline run.
	Response *PipelineRunResponseResponse `pulumi:"response"`
	// Metadata pertaining to creation and last modification of the resource.
	SystemData *SystemDataResponse `pulumi:"systemData"`
	// The type of the resource.
	Type *string `pulumi:"type"`
}

type PipelineRunState struct {
	// How the pipeline run should be forced to recreate even if the pipeline run configuration has not changed.
	ForceUpdateTag pulumi.StringPtrInput
	// The name of the resource.
	Name pulumi.StringPtrInput
	// The provisioning state of a pipeline run.
	ProvisioningState pulumi.StringPtrInput
	// The request parameters for a pipeline run.
	Request PipelineRunRequestResponsePtrInput
	// The response of a pipeline run.
	Response PipelineRunResponseResponsePtrInput
	// Metadata pertaining to creation and last modification of the resource.
	SystemData SystemDataResponsePtrInput
	// The type of the resource.
	Type pulumi.StringPtrInput
}

func (PipelineRunState) ElementType() reflect.Type {
	return reflect.TypeOf((*pipelineRunState)(nil)).Elem()
}

type pipelineRunArgs struct {
	// How the pipeline run should be forced to recreate even if the pipeline run configuration has not changed.
	ForceUpdateTag *string `pulumi:"forceUpdateTag"`
	// The name of the pipeline run.
	PipelineRunName string `pulumi:"pipelineRunName"`
	// The name of the container registry.
	RegistryName string `pulumi:"registryName"`
	// The request parameters for a pipeline run.
	Request *PipelineRunRequest `pulumi:"request"`
	// The name of the resource group to which the container registry belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The set of arguments for constructing a PipelineRun resource.
type PipelineRunArgs struct {
	// How the pipeline run should be forced to recreate even if the pipeline run configuration has not changed.
	ForceUpdateTag pulumi.StringPtrInput
	// The name of the pipeline run.
	PipelineRunName pulumi.StringInput
	// The name of the container registry.
	RegistryName pulumi.StringInput
	// The request parameters for a pipeline run.
	Request PipelineRunRequestPtrInput
	// The name of the resource group to which the container registry belongs.
	ResourceGroupName pulumi.StringInput
}

func (PipelineRunArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*pipelineRunArgs)(nil)).Elem()
}

type PipelineRunInput interface {
	pulumi.Input

	ToPipelineRunOutput() PipelineRunOutput
	ToPipelineRunOutputWithContext(ctx context.Context) PipelineRunOutput
}

func (PipelineRun) ElementType() reflect.Type {
	return reflect.TypeOf((*PipelineRun)(nil)).Elem()
}

func (i PipelineRun) ToPipelineRunOutput() PipelineRunOutput {
	return i.ToPipelineRunOutputWithContext(context.Background())
}

func (i PipelineRun) ToPipelineRunOutputWithContext(ctx context.Context) PipelineRunOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PipelineRunOutput)
}

type PipelineRunOutput struct {
	*pulumi.OutputState
}

func (PipelineRunOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*PipelineRunOutput)(nil)).Elem()
}

func (o PipelineRunOutput) ToPipelineRunOutput() PipelineRunOutput {
	return o
}

func (o PipelineRunOutput) ToPipelineRunOutputWithContext(ctx context.Context) PipelineRunOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(PipelineRunOutput{})
}
