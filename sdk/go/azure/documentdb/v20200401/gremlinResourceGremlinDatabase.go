// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200401

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// An Azure Cosmos DB Gremlin database.
type GremlinResourceGremlinDatabase struct {
	pulumi.CustomResourceState

	// The location of the resource group to which the resource belongs.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// The name of the ARM resource.
	Name     pulumi.StringOutput                                   `pulumi:"name"`
	Options  GremlinDatabaseGetPropertiesResponseOptionsPtrOutput  `pulumi:"options"`
	Resource GremlinDatabaseGetPropertiesResponseResourcePtrOutput `pulumi:"resource"`
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The type of Azure resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewGremlinResourceGremlinDatabase registers a new resource with the given unique name, arguments, and options.
func NewGremlinResourceGremlinDatabase(ctx *pulumi.Context,
	name string, args *GremlinResourceGremlinDatabaseArgs, opts ...pulumi.ResourceOption) (*GremlinResourceGremlinDatabase, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AccountName == nil {
		return nil, errors.New("invalid value for required argument 'AccountName'")
	}
	if args.DatabaseName == nil {
		return nil, errors.New("invalid value for required argument 'DatabaseName'")
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
			Type: pulumi.String("azure-nextgen:documentdb/latest:GremlinResourceGremlinDatabase"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20190801:GremlinResourceGremlinDatabase"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20191212:GremlinResourceGremlinDatabase"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20200301:GremlinResourceGremlinDatabase"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20200601preview:GremlinResourceGremlinDatabase"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20200901:GremlinResourceGremlinDatabase"),
		},
	})
	opts = append(opts, aliases)
	var resource GremlinResourceGremlinDatabase
	err := ctx.RegisterResource("azure-nextgen:documentdb/v20200401:GremlinResourceGremlinDatabase", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetGremlinResourceGremlinDatabase gets an existing GremlinResourceGremlinDatabase resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetGremlinResourceGremlinDatabase(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *GremlinResourceGremlinDatabaseState, opts ...pulumi.ResourceOption) (*GremlinResourceGremlinDatabase, error) {
	var resource GremlinResourceGremlinDatabase
	err := ctx.ReadResource("azure-nextgen:documentdb/v20200401:GremlinResourceGremlinDatabase", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering GremlinResourceGremlinDatabase resources.
type gremlinResourceGremlinDatabaseState struct {
	// The location of the resource group to which the resource belongs.
	Location *string `pulumi:"location"`
	// The name of the ARM resource.
	Name     *string                                       `pulumi:"name"`
	Options  *GremlinDatabaseGetPropertiesResponseOptions  `pulumi:"options"`
	Resource *GremlinDatabaseGetPropertiesResponseResource `pulumi:"resource"`
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags map[string]string `pulumi:"tags"`
	// The type of Azure resource.
	Type *string `pulumi:"type"`
}

type GremlinResourceGremlinDatabaseState struct {
	// The location of the resource group to which the resource belongs.
	Location pulumi.StringPtrInput
	// The name of the ARM resource.
	Name     pulumi.StringPtrInput
	Options  GremlinDatabaseGetPropertiesResponseOptionsPtrInput
	Resource GremlinDatabaseGetPropertiesResponseResourcePtrInput
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags pulumi.StringMapInput
	// The type of Azure resource.
	Type pulumi.StringPtrInput
}

func (GremlinResourceGremlinDatabaseState) ElementType() reflect.Type {
	return reflect.TypeOf((*gremlinResourceGremlinDatabaseState)(nil)).Elem()
}

type gremlinResourceGremlinDatabaseArgs struct {
	// Cosmos DB database account name.
	AccountName string `pulumi:"accountName"`
	// Cosmos DB database name.
	DatabaseName string `pulumi:"databaseName"`
	// The location of the resource group to which the resource belongs.
	Location *string `pulumi:"location"`
	// A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
	Options CreateUpdateOptions `pulumi:"options"`
	// The standard JSON format of a Gremlin database
	Resource GremlinDatabaseResource `pulumi:"resource"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a GremlinResourceGremlinDatabase resource.
type GremlinResourceGremlinDatabaseArgs struct {
	// Cosmos DB database account name.
	AccountName pulumi.StringInput
	// Cosmos DB database name.
	DatabaseName pulumi.StringInput
	// The location of the resource group to which the resource belongs.
	Location pulumi.StringPtrInput
	// A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
	Options CreateUpdateOptionsInput
	// The standard JSON format of a Gremlin database
	Resource GremlinDatabaseResourceInput
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags pulumi.StringMapInput
}

func (GremlinResourceGremlinDatabaseArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*gremlinResourceGremlinDatabaseArgs)(nil)).Elem()
}

type GremlinResourceGremlinDatabaseInput interface {
	pulumi.Input

	ToGremlinResourceGremlinDatabaseOutput() GremlinResourceGremlinDatabaseOutput
	ToGremlinResourceGremlinDatabaseOutputWithContext(ctx context.Context) GremlinResourceGremlinDatabaseOutput
}

func (*GremlinResourceGremlinDatabase) ElementType() reflect.Type {
	return reflect.TypeOf((*GremlinResourceGremlinDatabase)(nil))
}

func (i *GremlinResourceGremlinDatabase) ToGremlinResourceGremlinDatabaseOutput() GremlinResourceGremlinDatabaseOutput {
	return i.ToGremlinResourceGremlinDatabaseOutputWithContext(context.Background())
}

func (i *GremlinResourceGremlinDatabase) ToGremlinResourceGremlinDatabaseOutputWithContext(ctx context.Context) GremlinResourceGremlinDatabaseOutput {
	return pulumi.ToOutputWithContext(ctx, i).(GremlinResourceGremlinDatabaseOutput)
}

type GremlinResourceGremlinDatabaseOutput struct {
	*pulumi.OutputState
}

func (GremlinResourceGremlinDatabaseOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*GremlinResourceGremlinDatabase)(nil))
}

func (o GremlinResourceGremlinDatabaseOutput) ToGremlinResourceGremlinDatabaseOutput() GremlinResourceGremlinDatabaseOutput {
	return o
}

func (o GremlinResourceGremlinDatabaseOutput) ToGremlinResourceGremlinDatabaseOutputWithContext(ctx context.Context) GremlinResourceGremlinDatabaseOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(GremlinResourceGremlinDatabaseOutput{})
}
