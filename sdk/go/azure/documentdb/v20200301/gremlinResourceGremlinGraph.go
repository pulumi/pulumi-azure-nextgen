// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200301

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// An Azure Cosmos DB Gremlin graph.
type GremlinResourceGremlinGraph struct {
	pulumi.CustomResourceState

	// The location of the resource group to which the resource belongs.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// The name of the ARM resource.
	Name     pulumi.StringOutput                                `pulumi:"name"`
	Options  GremlinGraphGetPropertiesResponseOptionsPtrOutput  `pulumi:"options"`
	Resource GremlinGraphGetPropertiesResponseResourcePtrOutput `pulumi:"resource"`
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The type of Azure resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewGremlinResourceGremlinGraph registers a new resource with the given unique name, arguments, and options.
func NewGremlinResourceGremlinGraph(ctx *pulumi.Context,
	name string, args *GremlinResourceGremlinGraphArgs, opts ...pulumi.ResourceOption) (*GremlinResourceGremlinGraph, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AccountName == nil {
		return nil, errors.New("invalid value for required argument 'AccountName'")
	}
	if args.DatabaseName == nil {
		return nil, errors.New("invalid value for required argument 'DatabaseName'")
	}
	if args.GraphName == nil {
		return nil, errors.New("invalid value for required argument 'GraphName'")
	}
	if args.Options == nil {
		return nil, errors.New("invalid value for required argument 'Options'")
	}
	if args.Resource == nil {
		return nil, errors.New("invalid value for required argument 'Resource'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:documentdb/latest:GremlinResourceGremlinGraph"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20190801:GremlinResourceGremlinGraph"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20191212:GremlinResourceGremlinGraph"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20200401:GremlinResourceGremlinGraph"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20200601preview:GremlinResourceGremlinGraph"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20200901:GremlinResourceGremlinGraph"),
		},
	})
	opts = append(opts, aliases)
	var resource GremlinResourceGremlinGraph
	err := ctx.RegisterResource("azure-nextgen:documentdb/v20200301:GremlinResourceGremlinGraph", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetGremlinResourceGremlinGraph gets an existing GremlinResourceGremlinGraph resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetGremlinResourceGremlinGraph(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *GremlinResourceGremlinGraphState, opts ...pulumi.ResourceOption) (*GremlinResourceGremlinGraph, error) {
	var resource GremlinResourceGremlinGraph
	err := ctx.ReadResource("azure-nextgen:documentdb/v20200301:GremlinResourceGremlinGraph", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering GremlinResourceGremlinGraph resources.
type gremlinResourceGremlinGraphState struct {
	// The location of the resource group to which the resource belongs.
	Location *string `pulumi:"location"`
	// The name of the ARM resource.
	Name     *string                                    `pulumi:"name"`
	Options  *GremlinGraphGetPropertiesResponseOptions  `pulumi:"options"`
	Resource *GremlinGraphGetPropertiesResponseResource `pulumi:"resource"`
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags map[string]string `pulumi:"tags"`
	// The type of Azure resource.
	Type *string `pulumi:"type"`
}

type GremlinResourceGremlinGraphState struct {
	// The location of the resource group to which the resource belongs.
	Location pulumi.StringPtrInput
	// The name of the ARM resource.
	Name     pulumi.StringPtrInput
	Options  GremlinGraphGetPropertiesResponseOptionsPtrInput
	Resource GremlinGraphGetPropertiesResponseResourcePtrInput
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags pulumi.StringMapInput
	// The type of Azure resource.
	Type pulumi.StringPtrInput
}

func (GremlinResourceGremlinGraphState) ElementType() reflect.Type {
	return reflect.TypeOf((*gremlinResourceGremlinGraphState)(nil)).Elem()
}

type gremlinResourceGremlinGraphArgs struct {
	// Cosmos DB database account name.
	AccountName string `pulumi:"accountName"`
	// Cosmos DB database name.
	DatabaseName string `pulumi:"databaseName"`
	// Cosmos DB graph name.
	GraphName string `pulumi:"graphName"`
	// The location of the resource group to which the resource belongs.
	Location *string `pulumi:"location"`
	// A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
	Options CreateUpdateOptions `pulumi:"options"`
	// The standard JSON format of a Gremlin graph
	Resource GremlinGraphResource `pulumi:"resource"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a GremlinResourceGremlinGraph resource.
type GremlinResourceGremlinGraphArgs struct {
	// Cosmos DB database account name.
	AccountName pulumi.StringInput
	// Cosmos DB database name.
	DatabaseName pulumi.StringInput
	// Cosmos DB graph name.
	GraphName pulumi.StringInput
	// The location of the resource group to which the resource belongs.
	Location pulumi.StringPtrInput
	// A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
	Options CreateUpdateOptionsInput
	// The standard JSON format of a Gremlin graph
	Resource GremlinGraphResourceInput
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags pulumi.StringMapInput
}

func (GremlinResourceGremlinGraphArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*gremlinResourceGremlinGraphArgs)(nil)).Elem()
}

type GremlinResourceGremlinGraphInput interface {
	pulumi.Input

	ToGremlinResourceGremlinGraphOutput() GremlinResourceGremlinGraphOutput
	ToGremlinResourceGremlinGraphOutputWithContext(ctx context.Context) GremlinResourceGremlinGraphOutput
}

func (*GremlinResourceGremlinGraph) ElementType() reflect.Type {
	return reflect.TypeOf((*GremlinResourceGremlinGraph)(nil))
}

func (i *GremlinResourceGremlinGraph) ToGremlinResourceGremlinGraphOutput() GremlinResourceGremlinGraphOutput {
	return i.ToGremlinResourceGremlinGraphOutputWithContext(context.Background())
}

func (i *GremlinResourceGremlinGraph) ToGremlinResourceGremlinGraphOutputWithContext(ctx context.Context) GremlinResourceGremlinGraphOutput {
	return pulumi.ToOutputWithContext(ctx, i).(GremlinResourceGremlinGraphOutput)
}

type GremlinResourceGremlinGraphOutput struct {
	*pulumi.OutputState
}

func (GremlinResourceGremlinGraphOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*GremlinResourceGremlinGraph)(nil))
}

func (o GremlinResourceGremlinGraphOutput) ToGremlinResourceGremlinGraphOutput() GremlinResourceGremlinGraphOutput {
	return o
}

func (o GremlinResourceGremlinGraphOutput) ToGremlinResourceGremlinGraphOutputWithContext(ctx context.Context) GremlinResourceGremlinGraphOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(GremlinResourceGremlinGraphOutput{})
}
