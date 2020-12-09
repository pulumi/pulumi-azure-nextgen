// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20201101preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// An object that represents an import pipeline for a container registry.
type ImportPipeline struct {
	pulumi.CustomResourceState

	// The identity of the import pipeline.
	Identity IdentityPropertiesResponsePtrOutput `pulumi:"identity"`
	// The location of the import pipeline.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// The name of the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// The list of all options configured for the pipeline.
	Options pulumi.StringArrayOutput `pulumi:"options"`
	// The provisioning state of the pipeline at the time the operation was called.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The source properties of the import pipeline.
	Source ImportPipelineSourcePropertiesResponseOutput `pulumi:"source"`
	// Metadata pertaining to creation and last modification of the resource.
	SystemData SystemDataResponseOutput `pulumi:"systemData"`
	// The properties that describe the trigger of the import pipeline.
	Trigger PipelineTriggerPropertiesResponsePtrOutput `pulumi:"trigger"`
	// The type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewImportPipeline registers a new resource with the given unique name, arguments, and options.
func NewImportPipeline(ctx *pulumi.Context,
	name string, args *ImportPipelineArgs, opts ...pulumi.ResourceOption) (*ImportPipeline, error) {
	if args == nil || args.ImportPipelineName == nil {
		return nil, errors.New("missing required argument 'ImportPipelineName'")
	}
	if args == nil || args.RegistryName == nil {
		return nil, errors.New("missing required argument 'RegistryName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.Source == nil {
		return nil, errors.New("missing required argument 'Source'")
	}
	if args == nil {
		args = &ImportPipelineArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:containerregistry/v20191201preview:ImportPipeline"),
		},
	})
	opts = append(opts, aliases)
	var resource ImportPipeline
	err := ctx.RegisterResource("azure-nextgen:containerregistry/v20201101preview:ImportPipeline", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetImportPipeline gets an existing ImportPipeline resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetImportPipeline(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ImportPipelineState, opts ...pulumi.ResourceOption) (*ImportPipeline, error) {
	var resource ImportPipeline
	err := ctx.ReadResource("azure-nextgen:containerregistry/v20201101preview:ImportPipeline", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ImportPipeline resources.
type importPipelineState struct {
	// The identity of the import pipeline.
	Identity *IdentityPropertiesResponse `pulumi:"identity"`
	// The location of the import pipeline.
	Location *string `pulumi:"location"`
	// The name of the resource.
	Name *string `pulumi:"name"`
	// The list of all options configured for the pipeline.
	Options []string `pulumi:"options"`
	// The provisioning state of the pipeline at the time the operation was called.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The source properties of the import pipeline.
	Source *ImportPipelineSourcePropertiesResponse `pulumi:"source"`
	// Metadata pertaining to creation and last modification of the resource.
	SystemData *SystemDataResponse `pulumi:"systemData"`
	// The properties that describe the trigger of the import pipeline.
	Trigger *PipelineTriggerPropertiesResponse `pulumi:"trigger"`
	// The type of the resource.
	Type *string `pulumi:"type"`
}

type ImportPipelineState struct {
	// The identity of the import pipeline.
	Identity IdentityPropertiesResponsePtrInput
	// The location of the import pipeline.
	Location pulumi.StringPtrInput
	// The name of the resource.
	Name pulumi.StringPtrInput
	// The list of all options configured for the pipeline.
	Options pulumi.StringArrayInput
	// The provisioning state of the pipeline at the time the operation was called.
	ProvisioningState pulumi.StringPtrInput
	// The source properties of the import pipeline.
	Source ImportPipelineSourcePropertiesResponsePtrInput
	// Metadata pertaining to creation and last modification of the resource.
	SystemData SystemDataResponsePtrInput
	// The properties that describe the trigger of the import pipeline.
	Trigger PipelineTriggerPropertiesResponsePtrInput
	// The type of the resource.
	Type pulumi.StringPtrInput
}

func (ImportPipelineState) ElementType() reflect.Type {
	return reflect.TypeOf((*importPipelineState)(nil)).Elem()
}

type importPipelineArgs struct {
	// The identity of the import pipeline.
	Identity *IdentityProperties `pulumi:"identity"`
	// The name of the import pipeline.
	ImportPipelineName string `pulumi:"importPipelineName"`
	// The location of the import pipeline.
	Location *string `pulumi:"location"`
	// The list of all options configured for the pipeline.
	Options []string `pulumi:"options"`
	// The name of the container registry.
	RegistryName string `pulumi:"registryName"`
	// The name of the resource group to which the container registry belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The source properties of the import pipeline.
	Source ImportPipelineSourceProperties `pulumi:"source"`
	// The properties that describe the trigger of the import pipeline.
	Trigger *PipelineTriggerProperties `pulumi:"trigger"`
}

// The set of arguments for constructing a ImportPipeline resource.
type ImportPipelineArgs struct {
	// The identity of the import pipeline.
	Identity IdentityPropertiesPtrInput
	// The name of the import pipeline.
	ImportPipelineName pulumi.StringInput
	// The location of the import pipeline.
	Location pulumi.StringPtrInput
	// The list of all options configured for the pipeline.
	Options pulumi.StringArrayInput
	// The name of the container registry.
	RegistryName pulumi.StringInput
	// The name of the resource group to which the container registry belongs.
	ResourceGroupName pulumi.StringInput
	// The source properties of the import pipeline.
	Source ImportPipelineSourcePropertiesInput
	// The properties that describe the trigger of the import pipeline.
	Trigger PipelineTriggerPropertiesPtrInput
}

func (ImportPipelineArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*importPipelineArgs)(nil)).Elem()
}

type ImportPipelineInput interface {
	pulumi.Input

	ToImportPipelineOutput() ImportPipelineOutput
	ToImportPipelineOutputWithContext(ctx context.Context) ImportPipelineOutput
}

func (ImportPipeline) ElementType() reflect.Type {
	return reflect.TypeOf((*ImportPipeline)(nil)).Elem()
}

func (i ImportPipeline) ToImportPipelineOutput() ImportPipelineOutput {
	return i.ToImportPipelineOutputWithContext(context.Background())
}

func (i ImportPipeline) ToImportPipelineOutputWithContext(ctx context.Context) ImportPipelineOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ImportPipelineOutput)
}

type ImportPipelineOutput struct {
	*pulumi.OutputState
}

func (ImportPipelineOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ImportPipelineOutput)(nil)).Elem()
}

func (o ImportPipelineOutput) ToImportPipelineOutput() ImportPipelineOutput {
	return o
}

func (o ImportPipelineOutput) ToImportPipelineOutputWithContext(ctx context.Context) ImportPipelineOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ImportPipelineOutput{})
}