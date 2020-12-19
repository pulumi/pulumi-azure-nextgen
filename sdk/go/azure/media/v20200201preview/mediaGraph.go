// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200201preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The Media Graph.
type MediaGraph struct {
	pulumi.CustomResourceState

	// Date the Media Graph was created.
	Created pulumi.StringOutput `pulumi:"created"`
	// Media Graph description.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// Date the Media Graph was last modified.
	LastModified pulumi.StringOutput `pulumi:"lastModified"`
	// The name of the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// Media Graph sinks.
	Sinks MediaGraphAssetSinkResponseArrayOutput `pulumi:"sinks"`
	// Media Graph sources.
	Sources MediaGraphRtspSourceResponseArrayOutput `pulumi:"sources"`
	// Media Graph state which indicates the resource allocation status for running the media graph pipeline.
	State pulumi.StringOutput `pulumi:"state"`
	// The type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewMediaGraph registers a new resource with the given unique name, arguments, and options.
func NewMediaGraph(ctx *pulumi.Context,
	name string, args *MediaGraphArgs, opts ...pulumi.ResourceOption) (*MediaGraph, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AccountName == nil {
		return nil, errors.New("invalid value for required argument 'AccountName'")
	}
	if args.MediaGraphName == nil {
		return nil, errors.New("invalid value for required argument 'MediaGraphName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.Sinks == nil {
		return nil, errors.New("invalid value for required argument 'Sinks'")
	}
	if args.Sources == nil {
		return nil, errors.New("invalid value for required argument 'Sources'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:media/v20190901preview:MediaGraph"),
		},
	})
	opts = append(opts, aliases)
	var resource MediaGraph
	err := ctx.RegisterResource("azure-nextgen:media/v20200201preview:MediaGraph", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetMediaGraph gets an existing MediaGraph resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetMediaGraph(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *MediaGraphState, opts ...pulumi.ResourceOption) (*MediaGraph, error) {
	var resource MediaGraph
	err := ctx.ReadResource("azure-nextgen:media/v20200201preview:MediaGraph", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering MediaGraph resources.
type mediaGraphState struct {
	// Date the Media Graph was created.
	Created *string `pulumi:"created"`
	// Media Graph description.
	Description *string `pulumi:"description"`
	// Date the Media Graph was last modified.
	LastModified *string `pulumi:"lastModified"`
	// The name of the resource.
	Name *string `pulumi:"name"`
	// Media Graph sinks.
	Sinks []MediaGraphAssetSinkResponse `pulumi:"sinks"`
	// Media Graph sources.
	Sources []MediaGraphRtspSourceResponse `pulumi:"sources"`
	// Media Graph state which indicates the resource allocation status for running the media graph pipeline.
	State *string `pulumi:"state"`
	// The type of the resource.
	Type *string `pulumi:"type"`
}

type MediaGraphState struct {
	// Date the Media Graph was created.
	Created pulumi.StringPtrInput
	// Media Graph description.
	Description pulumi.StringPtrInput
	// Date the Media Graph was last modified.
	LastModified pulumi.StringPtrInput
	// The name of the resource.
	Name pulumi.StringPtrInput
	// Media Graph sinks.
	Sinks MediaGraphAssetSinkResponseArrayInput
	// Media Graph sources.
	Sources MediaGraphRtspSourceResponseArrayInput
	// Media Graph state which indicates the resource allocation status for running the media graph pipeline.
	State pulumi.StringPtrInput
	// The type of the resource.
	Type pulumi.StringPtrInput
}

func (MediaGraphState) ElementType() reflect.Type {
	return reflect.TypeOf((*mediaGraphState)(nil)).Elem()
}

type mediaGraphArgs struct {
	// The Media Services account name.
	AccountName string `pulumi:"accountName"`
	// Media Graph description.
	Description *string `pulumi:"description"`
	// The Media Graph name.
	MediaGraphName string `pulumi:"mediaGraphName"`
	// The name of the resource group within the Azure subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Media Graph sinks.
	Sinks []MediaGraphAssetSink `pulumi:"sinks"`
	// Media Graph sources.
	Sources []MediaGraphRtspSource `pulumi:"sources"`
}

// The set of arguments for constructing a MediaGraph resource.
type MediaGraphArgs struct {
	// The Media Services account name.
	AccountName pulumi.StringInput
	// Media Graph description.
	Description pulumi.StringPtrInput
	// The Media Graph name.
	MediaGraphName pulumi.StringInput
	// The name of the resource group within the Azure subscription.
	ResourceGroupName pulumi.StringInput
	// Media Graph sinks.
	Sinks MediaGraphAssetSinkArrayInput
	// Media Graph sources.
	Sources MediaGraphRtspSourceArrayInput
}

func (MediaGraphArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*mediaGraphArgs)(nil)).Elem()
}

type MediaGraphInput interface {
	pulumi.Input

	ToMediaGraphOutput() MediaGraphOutput
	ToMediaGraphOutputWithContext(ctx context.Context) MediaGraphOutput
}

func (*MediaGraph) ElementType() reflect.Type {
	return reflect.TypeOf((*MediaGraph)(nil))
}

func (i *MediaGraph) ToMediaGraphOutput() MediaGraphOutput {
	return i.ToMediaGraphOutputWithContext(context.Background())
}

func (i *MediaGraph) ToMediaGraphOutputWithContext(ctx context.Context) MediaGraphOutput {
	return pulumi.ToOutputWithContext(ctx, i).(MediaGraphOutput)
}

type MediaGraphOutput struct {
	*pulumi.OutputState
}

func (MediaGraphOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*MediaGraph)(nil))
}

func (o MediaGraphOutput) ToMediaGraphOutput() MediaGraphOutput {
	return o
}

func (o MediaGraphOutput) ToMediaGraphOutputWithContext(ctx context.Context) MediaGraphOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(MediaGraphOutput{})
}
