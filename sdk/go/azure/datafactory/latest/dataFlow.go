// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Data flow resource type.
// Latest API Version: 2018-06-01.
type DataFlow struct {
	pulumi.CustomResourceState

	// Etag identifies change in the resource.
	Etag pulumi.StringOutput `pulumi:"etag"`
	// The resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// Data flow properties.
	Properties MappingDataFlowResponseOutput `pulumi:"properties"`
	// The resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewDataFlow registers a new resource with the given unique name, arguments, and options.
func NewDataFlow(ctx *pulumi.Context,
	name string, args *DataFlowArgs, opts ...pulumi.ResourceOption) (*DataFlow, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.DataFlowName == nil {
		return nil, errors.New("invalid value for required argument 'DataFlowName'")
	}
	if args.FactoryName == nil {
		return nil, errors.New("invalid value for required argument 'FactoryName'")
	}
	if args.Properties == nil {
		return nil, errors.New("invalid value for required argument 'Properties'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:datafactory/v20180601:DataFlow"),
		},
	})
	opts = append(opts, aliases)
	var resource DataFlow
	err := ctx.RegisterResource("azure-nextgen:datafactory/latest:DataFlow", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetDataFlow gets an existing DataFlow resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDataFlow(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *DataFlowState, opts ...pulumi.ResourceOption) (*DataFlow, error) {
	var resource DataFlow
	err := ctx.ReadResource("azure-nextgen:datafactory/latest:DataFlow", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering DataFlow resources.
type dataFlowState struct {
	// Etag identifies change in the resource.
	Etag *string `pulumi:"etag"`
	// The resource name.
	Name *string `pulumi:"name"`
	// Data flow properties.
	Properties *MappingDataFlowResponse `pulumi:"properties"`
	// The resource type.
	Type *string `pulumi:"type"`
}

type DataFlowState struct {
	// Etag identifies change in the resource.
	Etag pulumi.StringPtrInput
	// The resource name.
	Name pulumi.StringPtrInput
	// Data flow properties.
	Properties MappingDataFlowResponsePtrInput
	// The resource type.
	Type pulumi.StringPtrInput
}

func (DataFlowState) ElementType() reflect.Type {
	return reflect.TypeOf((*dataFlowState)(nil)).Elem()
}

type dataFlowArgs struct {
	// The data flow name.
	DataFlowName string `pulumi:"dataFlowName"`
	// The factory name.
	FactoryName string `pulumi:"factoryName"`
	// Data flow properties.
	Properties MappingDataFlow `pulumi:"properties"`
	// The resource group name.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The set of arguments for constructing a DataFlow resource.
type DataFlowArgs struct {
	// The data flow name.
	DataFlowName pulumi.StringInput
	// The factory name.
	FactoryName pulumi.StringInput
	// Data flow properties.
	Properties MappingDataFlowInput
	// The resource group name.
	ResourceGroupName pulumi.StringInput
}

func (DataFlowArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*dataFlowArgs)(nil)).Elem()
}

type DataFlowInput interface {
	pulumi.Input

	ToDataFlowOutput() DataFlowOutput
	ToDataFlowOutputWithContext(ctx context.Context) DataFlowOutput
}

func (*DataFlow) ElementType() reflect.Type {
	return reflect.TypeOf((*DataFlow)(nil))
}

func (i *DataFlow) ToDataFlowOutput() DataFlowOutput {
	return i.ToDataFlowOutputWithContext(context.Background())
}

func (i *DataFlow) ToDataFlowOutputWithContext(ctx context.Context) DataFlowOutput {
	return pulumi.ToOutputWithContext(ctx, i).(DataFlowOutput)
}

type DataFlowOutput struct {
	*pulumi.OutputState
}

func (DataFlowOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*DataFlow)(nil))
}

func (o DataFlowOutput) ToDataFlowOutput() DataFlowOutput {
	return o
}

func (o DataFlowOutput) ToDataFlowOutputWithContext(ctx context.Context) DataFlowOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(DataFlowOutput{})
}
