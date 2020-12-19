// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// An Azure Cosmos DB MongoDB database.
// Latest API Version: 2020-09-01.
type MongoDBResourceMongoDBDatabase struct {
	pulumi.CustomResourceState

	// The location of the resource group to which the resource belongs.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// The name of the ARM resource.
	Name     pulumi.StringOutput                                   `pulumi:"name"`
	Options  MongoDBDatabaseGetPropertiesResponseOptionsPtrOutput  `pulumi:"options"`
	Resource MongoDBDatabaseGetPropertiesResponseResourcePtrOutput `pulumi:"resource"`
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The type of Azure resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewMongoDBResourceMongoDBDatabase registers a new resource with the given unique name, arguments, and options.
func NewMongoDBResourceMongoDBDatabase(ctx *pulumi.Context,
	name string, args *MongoDBResourceMongoDBDatabaseArgs, opts ...pulumi.ResourceOption) (*MongoDBResourceMongoDBDatabase, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AccountName == nil {
		return nil, errors.New("invalid value for required argument 'AccountName'")
	}
	if args.DatabaseName == nil {
		return nil, errors.New("invalid value for required argument 'DatabaseName'")
	}
	if args.Resource == nil {
		return nil, errors.New("invalid value for required argument 'Resource'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20190801:MongoDBResourceMongoDBDatabase"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20191212:MongoDBResourceMongoDBDatabase"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20200301:MongoDBResourceMongoDBDatabase"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20200401:MongoDBResourceMongoDBDatabase"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20200601preview:MongoDBResourceMongoDBDatabase"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20200901:MongoDBResourceMongoDBDatabase"),
		},
	})
	opts = append(opts, aliases)
	var resource MongoDBResourceMongoDBDatabase
	err := ctx.RegisterResource("azure-nextgen:documentdb/latest:MongoDBResourceMongoDBDatabase", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetMongoDBResourceMongoDBDatabase gets an existing MongoDBResourceMongoDBDatabase resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetMongoDBResourceMongoDBDatabase(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *MongoDBResourceMongoDBDatabaseState, opts ...pulumi.ResourceOption) (*MongoDBResourceMongoDBDatabase, error) {
	var resource MongoDBResourceMongoDBDatabase
	err := ctx.ReadResource("azure-nextgen:documentdb/latest:MongoDBResourceMongoDBDatabase", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering MongoDBResourceMongoDBDatabase resources.
type mongoDBResourceMongoDBDatabaseState struct {
	// The location of the resource group to which the resource belongs.
	Location *string `pulumi:"location"`
	// The name of the ARM resource.
	Name     *string                                       `pulumi:"name"`
	Options  *MongoDBDatabaseGetPropertiesResponseOptions  `pulumi:"options"`
	Resource *MongoDBDatabaseGetPropertiesResponseResource `pulumi:"resource"`
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags map[string]string `pulumi:"tags"`
	// The type of Azure resource.
	Type *string `pulumi:"type"`
}

type MongoDBResourceMongoDBDatabaseState struct {
	// The location of the resource group to which the resource belongs.
	Location pulumi.StringPtrInput
	// The name of the ARM resource.
	Name     pulumi.StringPtrInput
	Options  MongoDBDatabaseGetPropertiesResponseOptionsPtrInput
	Resource MongoDBDatabaseGetPropertiesResponseResourcePtrInput
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags pulumi.StringMapInput
	// The type of Azure resource.
	Type pulumi.StringPtrInput
}

func (MongoDBResourceMongoDBDatabaseState) ElementType() reflect.Type {
	return reflect.TypeOf((*mongoDBResourceMongoDBDatabaseState)(nil)).Elem()
}

type mongoDBResourceMongoDBDatabaseArgs struct {
	// Cosmos DB database account name.
	AccountName string `pulumi:"accountName"`
	// Cosmos DB database name.
	DatabaseName string `pulumi:"databaseName"`
	// The location of the resource group to which the resource belongs.
	Location *string `pulumi:"location"`
	// A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
	Options *CreateUpdateOptions `pulumi:"options"`
	// The standard JSON format of a MongoDB database
	Resource MongoDBDatabaseResource `pulumi:"resource"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a MongoDBResourceMongoDBDatabase resource.
type MongoDBResourceMongoDBDatabaseArgs struct {
	// Cosmos DB database account name.
	AccountName pulumi.StringInput
	// Cosmos DB database name.
	DatabaseName pulumi.StringInput
	// The location of the resource group to which the resource belongs.
	Location pulumi.StringPtrInput
	// A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
	Options CreateUpdateOptionsPtrInput
	// The standard JSON format of a MongoDB database
	Resource MongoDBDatabaseResourceInput
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags pulumi.StringMapInput
}

func (MongoDBResourceMongoDBDatabaseArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*mongoDBResourceMongoDBDatabaseArgs)(nil)).Elem()
}

type MongoDBResourceMongoDBDatabaseInput interface {
	pulumi.Input

	ToMongoDBResourceMongoDBDatabaseOutput() MongoDBResourceMongoDBDatabaseOutput
	ToMongoDBResourceMongoDBDatabaseOutputWithContext(ctx context.Context) MongoDBResourceMongoDBDatabaseOutput
}

func (*MongoDBResourceMongoDBDatabase) ElementType() reflect.Type {
	return reflect.TypeOf((*MongoDBResourceMongoDBDatabase)(nil))
}

func (i *MongoDBResourceMongoDBDatabase) ToMongoDBResourceMongoDBDatabaseOutput() MongoDBResourceMongoDBDatabaseOutput {
	return i.ToMongoDBResourceMongoDBDatabaseOutputWithContext(context.Background())
}

func (i *MongoDBResourceMongoDBDatabase) ToMongoDBResourceMongoDBDatabaseOutputWithContext(ctx context.Context) MongoDBResourceMongoDBDatabaseOutput {
	return pulumi.ToOutputWithContext(ctx, i).(MongoDBResourceMongoDBDatabaseOutput)
}

type MongoDBResourceMongoDBDatabaseOutput struct {
	*pulumi.OutputState
}

func (MongoDBResourceMongoDBDatabaseOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*MongoDBResourceMongoDBDatabase)(nil))
}

func (o MongoDBResourceMongoDBDatabaseOutput) ToMongoDBResourceMongoDBDatabaseOutput() MongoDBResourceMongoDBDatabaseOutput {
	return o
}

func (o MongoDBResourceMongoDBDatabaseOutput) ToMongoDBResourceMongoDBDatabaseOutputWithContext(ctx context.Context) MongoDBResourceMongoDBDatabaseOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(MongoDBResourceMongoDBDatabaseOutput{})
}
