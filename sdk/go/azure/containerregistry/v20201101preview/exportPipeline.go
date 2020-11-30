// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20201101preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// An object that represents an export pipeline for a container registry.
type ExportPipeline struct {
	pulumi.CustomResourceState

	// The identity of the export pipeline.
	Identity IdentityPropertiesResponsePtrOutput `pulumi:"identity"`
	// The location of the export pipeline.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// The name of the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// The list of all options configured for the pipeline.
	Options pulumi.StringArrayOutput `pulumi:"options"`
	// The provisioning state of the pipeline at the time the operation was called.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Metadata pertaining to creation and last modification of the resource.
	SystemData SystemDataResponseOutput `pulumi:"systemData"`
	// The target properties of the export pipeline.
	Target ExportPipelineTargetPropertiesResponseOutput `pulumi:"target"`
	// The type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewExportPipeline registers a new resource with the given unique name, arguments, and options.
func NewExportPipeline(ctx *pulumi.Context,
	name string, args *ExportPipelineArgs, opts ...pulumi.ResourceOption) (*ExportPipeline, error) {
	if args == nil || args.ExportPipelineName == nil {
		return nil, errors.New("missing required argument 'ExportPipelineName'")
	}
	if args == nil || args.RegistryName == nil {
		return nil, errors.New("missing required argument 'RegistryName'")
	}
	if args == nil || args.ResourceGroupName == nil {
		return nil, errors.New("missing required argument 'ResourceGroupName'")
	}
	if args == nil || args.Target == nil {
		return nil, errors.New("missing required argument 'Target'")
	}
	if args == nil {
		args = &ExportPipelineArgs{}
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:containerregistry/v20191201preview:ExportPipeline"),
		},
	})
	opts = append(opts, aliases)
	var resource ExportPipeline
	err := ctx.RegisterResource("azure-nextgen:containerregistry/v20201101preview:ExportPipeline", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetExportPipeline gets an existing ExportPipeline resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetExportPipeline(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *ExportPipelineState, opts ...pulumi.ResourceOption) (*ExportPipeline, error) {
	var resource ExportPipeline
	err := ctx.ReadResource("azure-nextgen:containerregistry/v20201101preview:ExportPipeline", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering ExportPipeline resources.
type exportPipelineState struct {
	// The identity of the export pipeline.
	Identity *IdentityPropertiesResponse `pulumi:"identity"`
	// The location of the export pipeline.
	Location *string `pulumi:"location"`
	// The name of the resource.
	Name *string `pulumi:"name"`
	// The list of all options configured for the pipeline.
	Options []string `pulumi:"options"`
	// The provisioning state of the pipeline at the time the operation was called.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Metadata pertaining to creation and last modification of the resource.
	SystemData *SystemDataResponse `pulumi:"systemData"`
	// The target properties of the export pipeline.
	Target *ExportPipelineTargetPropertiesResponse `pulumi:"target"`
	// The type of the resource.
	Type *string `pulumi:"type"`
}

type ExportPipelineState struct {
	// The identity of the export pipeline.
	Identity IdentityPropertiesResponsePtrInput
	// The location of the export pipeline.
	Location pulumi.StringPtrInput
	// The name of the resource.
	Name pulumi.StringPtrInput
	// The list of all options configured for the pipeline.
	Options pulumi.StringArrayInput
	// The provisioning state of the pipeline at the time the operation was called.
	ProvisioningState pulumi.StringPtrInput
	// Metadata pertaining to creation and last modification of the resource.
	SystemData SystemDataResponsePtrInput
	// The target properties of the export pipeline.
	Target ExportPipelineTargetPropertiesResponsePtrInput
	// The type of the resource.
	Type pulumi.StringPtrInput
}

func (ExportPipelineState) ElementType() reflect.Type {
	return reflect.TypeOf((*exportPipelineState)(nil)).Elem()
}

type exportPipelineArgs struct {
	// The name of the export pipeline.
	ExportPipelineName string `pulumi:"exportPipelineName"`
	// The identity of the export pipeline.
	Identity *IdentityProperties `pulumi:"identity"`
	// The location of the export pipeline.
	Location *string `pulumi:"location"`
	// The list of all options configured for the pipeline.
	Options []string `pulumi:"options"`
	// The name of the container registry.
	RegistryName string `pulumi:"registryName"`
	// The name of the resource group to which the container registry belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The target properties of the export pipeline.
	Target ExportPipelineTargetProperties `pulumi:"target"`
}

// The set of arguments for constructing a ExportPipeline resource.
type ExportPipelineArgs struct {
	// The name of the export pipeline.
	ExportPipelineName pulumi.StringInput
	// The identity of the export pipeline.
	Identity IdentityPropertiesPtrInput
	// The location of the export pipeline.
	Location pulumi.StringPtrInput
	// The list of all options configured for the pipeline.
	Options pulumi.StringArrayInput
	// The name of the container registry.
	RegistryName pulumi.StringInput
	// The name of the resource group to which the container registry belongs.
	ResourceGroupName pulumi.StringInput
	// The target properties of the export pipeline.
	Target ExportPipelineTargetPropertiesInput
}

func (ExportPipelineArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*exportPipelineArgs)(nil)).Elem()
}

type ExportPipelineInput interface {
	pulumi.Input

	ToExportPipelineOutput() ExportPipelineOutput
	ToExportPipelineOutputWithContext(ctx context.Context) ExportPipelineOutput
}

func (ExportPipeline) ElementType() reflect.Type {
	return reflect.TypeOf((*ExportPipeline)(nil)).Elem()
}

func (i ExportPipeline) ToExportPipelineOutput() ExportPipelineOutput {
	return i.ToExportPipelineOutputWithContext(context.Background())
}

func (i ExportPipeline) ToExportPipelineOutputWithContext(ctx context.Context) ExportPipelineOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ExportPipelineOutput)
}

type ExportPipelineOutput struct {
	*pulumi.OutputState
}

func (ExportPipelineOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ExportPipelineOutput)(nil)).Elem()
}

func (o ExportPipelineOutput) ToExportPipelineOutput() ExportPipelineOutput {
	return o
}

func (o ExportPipelineOutput) ToExportPipelineOutputWithContext(ctx context.Context) ExportPipelineOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(ExportPipelineOutput{})
}
