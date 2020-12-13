// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Pipeline resource type.
type Pipeline struct {
	pulumi.CustomResourceState

	// List of activities in pipeline.
	Activities pulumi.ArrayOutput `pulumi:"activities"`
	// List of tags that can be used for describing the Pipeline.
	Annotations pulumi.ArrayOutput `pulumi:"annotations"`
	// The max number of concurrent runs for the pipeline.
	Concurrency pulumi.IntPtrOutput `pulumi:"concurrency"`
	// The description of the pipeline.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// Etag identifies change in the resource.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level.
	Folder PipelineResponseFolderPtrOutput `pulumi:"folder"`
	// The resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// List of parameters for pipeline.
	Parameters ParameterSpecificationResponseMapOutput `pulumi:"parameters"`
	// Dimensions emitted by Pipeline.
	RunDimensions pulumi.MapOutput `pulumi:"runDimensions"`
	// The resource type.
	Type pulumi.StringOutput `pulumi:"type"`
	// List of variables for pipeline.
	Variables VariableSpecificationResponseMapOutput `pulumi:"variables"`
}

// NewPipeline registers a new resource with the given unique name, arguments, and options.
func NewPipeline(ctx *pulumi.Context,
	name string, args *PipelineArgs, opts ...pulumi.ResourceOption) (*Pipeline, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.FactoryName == nil {
		return nil, errors.New("invalid value for required argument 'FactoryName'")
	}
	if args.PipelineName == nil {
		return nil, errors.New("invalid value for required argument 'PipelineName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:datafactory/v20170901preview:Pipeline"),
		},
		{
			Type: pulumi.String("azure-nextgen:datafactory/v20180601:Pipeline"),
		},
	})
	opts = append(opts, aliases)
	var resource Pipeline
	err := ctx.RegisterResource("azure-nextgen:datafactory/latest:Pipeline", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetPipeline gets an existing Pipeline resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetPipeline(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *PipelineState, opts ...pulumi.ResourceOption) (*Pipeline, error) {
	var resource Pipeline
	err := ctx.ReadResource("azure-nextgen:datafactory/latest:Pipeline", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Pipeline resources.
type pipelineState struct {
	// List of activities in pipeline.
	Activities []interface{} `pulumi:"activities"`
	// List of tags that can be used for describing the Pipeline.
	Annotations []interface{} `pulumi:"annotations"`
	// The max number of concurrent runs for the pipeline.
	Concurrency *int `pulumi:"concurrency"`
	// The description of the pipeline.
	Description *string `pulumi:"description"`
	// Etag identifies change in the resource.
	Etag *string `pulumi:"etag"`
	// The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level.
	Folder *PipelineResponseFolder `pulumi:"folder"`
	// The resource name.
	Name *string `pulumi:"name"`
	// List of parameters for pipeline.
	Parameters map[string]ParameterSpecificationResponse `pulumi:"parameters"`
	// Dimensions emitted by Pipeline.
	RunDimensions map[string]interface{} `pulumi:"runDimensions"`
	// The resource type.
	Type *string `pulumi:"type"`
	// List of variables for pipeline.
	Variables map[string]VariableSpecificationResponse `pulumi:"variables"`
}

type PipelineState struct {
	// List of activities in pipeline.
	Activities pulumi.ArrayInput
	// List of tags that can be used for describing the Pipeline.
	Annotations pulumi.ArrayInput
	// The max number of concurrent runs for the pipeline.
	Concurrency pulumi.IntPtrInput
	// The description of the pipeline.
	Description pulumi.StringPtrInput
	// Etag identifies change in the resource.
	Etag pulumi.StringPtrInput
	// The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level.
	Folder PipelineResponseFolderPtrInput
	// The resource name.
	Name pulumi.StringPtrInput
	// List of parameters for pipeline.
	Parameters ParameterSpecificationResponseMapInput
	// Dimensions emitted by Pipeline.
	RunDimensions pulumi.MapInput
	// The resource type.
	Type pulumi.StringPtrInput
	// List of variables for pipeline.
	Variables VariableSpecificationResponseMapInput
}

func (PipelineState) ElementType() reflect.Type {
	return reflect.TypeOf((*pipelineState)(nil)).Elem()
}

type pipelineArgs struct {
	// List of activities in pipeline.
	Activities []interface{} `pulumi:"activities"`
	// List of tags that can be used for describing the Pipeline.
	Annotations []interface{} `pulumi:"annotations"`
	// The max number of concurrent runs for the pipeline.
	Concurrency *int `pulumi:"concurrency"`
	// The description of the pipeline.
	Description *string `pulumi:"description"`
	// The factory name.
	FactoryName string `pulumi:"factoryName"`
	// The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level.
	Folder *PipelineFolder `pulumi:"folder"`
	// List of parameters for pipeline.
	Parameters map[string]ParameterSpecification `pulumi:"parameters"`
	// The pipeline name.
	PipelineName string `pulumi:"pipelineName"`
	// The resource group name.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Dimensions emitted by Pipeline.
	RunDimensions map[string]interface{} `pulumi:"runDimensions"`
	// List of variables for pipeline.
	Variables map[string]VariableSpecification `pulumi:"variables"`
}

// The set of arguments for constructing a Pipeline resource.
type PipelineArgs struct {
	// List of activities in pipeline.
	Activities pulumi.ArrayInput
	// List of tags that can be used for describing the Pipeline.
	Annotations pulumi.ArrayInput
	// The max number of concurrent runs for the pipeline.
	Concurrency pulumi.IntPtrInput
	// The description of the pipeline.
	Description pulumi.StringPtrInput
	// The factory name.
	FactoryName pulumi.StringInput
	// The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level.
	Folder PipelineFolderPtrInput
	// List of parameters for pipeline.
	Parameters ParameterSpecificationMapInput
	// The pipeline name.
	PipelineName pulumi.StringInput
	// The resource group name.
	ResourceGroupName pulumi.StringInput
	// Dimensions emitted by Pipeline.
	RunDimensions pulumi.MapInput
	// List of variables for pipeline.
	Variables VariableSpecificationMapInput
}

func (PipelineArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*pipelineArgs)(nil)).Elem()
}

type PipelineInput interface {
	pulumi.Input

	ToPipelineOutput() PipelineOutput
	ToPipelineOutputWithContext(ctx context.Context) PipelineOutput
}

func (Pipeline) ElementType() reflect.Type {
	return reflect.TypeOf((*Pipeline)(nil)).Elem()
}

func (i Pipeline) ToPipelineOutput() PipelineOutput {
	return i.ToPipelineOutputWithContext(context.Background())
}

func (i Pipeline) ToPipelineOutputWithContext(ctx context.Context) PipelineOutput {
	return pulumi.ToOutputWithContext(ctx, i).(PipelineOutput)
}

type PipelineOutput struct {
	*pulumi.OutputState
}

func (PipelineOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*PipelineOutput)(nil)).Elem()
}

func (o PipelineOutput) ToPipelineOutput() PipelineOutput {
	return o
}

func (o PipelineOutput) ToPipelineOutputWithContext(ctx context.Context) PipelineOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(PipelineOutput{})
}
