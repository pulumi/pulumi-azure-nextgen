// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// An Azure Cosmos DB Cassandra table.
// Latest API Version: 2016-03-31.
type DatabaseAccountCassandraTable struct {
	pulumi.CustomResourceState

	// Time to live of the Cosmos DB Cassandra table
	DefaultTtl pulumi.IntPtrOutput `pulumi:"defaultTtl"`
	// The location of the resource group to which the resource belongs.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// The name of the database account.
	Name pulumi.StringOutput `pulumi:"name"`
	// Schema of the Cosmos DB Cassandra table
	Schema CassandraSchemaResponsePtrOutput `pulumi:"schema"`
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The type of Azure resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewDatabaseAccountCassandraTable registers a new resource with the given unique name, arguments, and options.
func NewDatabaseAccountCassandraTable(ctx *pulumi.Context,
	name string, args *DatabaseAccountCassandraTableArgs, opts ...pulumi.ResourceOption) (*DatabaseAccountCassandraTable, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AccountName == nil {
		return nil, errors.New("invalid value for required argument 'AccountName'")
	}
	if args.KeyspaceName == nil {
		return nil, errors.New("invalid value for required argument 'KeyspaceName'")
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
	if args.TableName == nil {
		return nil, errors.New("invalid value for required argument 'TableName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20150401:DatabaseAccountCassandraTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20150408:DatabaseAccountCassandraTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20151106:DatabaseAccountCassandraTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20160319:DatabaseAccountCassandraTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20160331:DatabaseAccountCassandraTable"),
		},
	})
	opts = append(opts, aliases)
	var resource DatabaseAccountCassandraTable
	err := ctx.RegisterResource("azure-nextgen:documentdb/latest:DatabaseAccountCassandraTable", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetDatabaseAccountCassandraTable gets an existing DatabaseAccountCassandraTable resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDatabaseAccountCassandraTable(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *DatabaseAccountCassandraTableState, opts ...pulumi.ResourceOption) (*DatabaseAccountCassandraTable, error) {
	var resource DatabaseAccountCassandraTable
	err := ctx.ReadResource("azure-nextgen:documentdb/latest:DatabaseAccountCassandraTable", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering DatabaseAccountCassandraTable resources.
type databaseAccountCassandraTableState struct {
	// Time to live of the Cosmos DB Cassandra table
	DefaultTtl *int `pulumi:"defaultTtl"`
	// The location of the resource group to which the resource belongs.
	Location *string `pulumi:"location"`
	// The name of the database account.
	Name *string `pulumi:"name"`
	// Schema of the Cosmos DB Cassandra table
	Schema *CassandraSchemaResponse `pulumi:"schema"`
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags map[string]string `pulumi:"tags"`
	// The type of Azure resource.
	Type *string `pulumi:"type"`
}

type DatabaseAccountCassandraTableState struct {
	// Time to live of the Cosmos DB Cassandra table
	DefaultTtl pulumi.IntPtrInput
	// The location of the resource group to which the resource belongs.
	Location pulumi.StringPtrInput
	// The name of the database account.
	Name pulumi.StringPtrInput
	// Schema of the Cosmos DB Cassandra table
	Schema CassandraSchemaResponsePtrInput
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags pulumi.StringMapInput
	// The type of Azure resource.
	Type pulumi.StringPtrInput
}

func (DatabaseAccountCassandraTableState) ElementType() reflect.Type {
	return reflect.TypeOf((*databaseAccountCassandraTableState)(nil)).Elem()
}

type databaseAccountCassandraTableArgs struct {
	// Cosmos DB database account name.
	AccountName string `pulumi:"accountName"`
	// Cosmos DB keyspace name.
	KeyspaceName string `pulumi:"keyspaceName"`
	// A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
	Options map[string]string `pulumi:"options"`
	// The standard JSON format of a Cassandra table
	Resource CassandraTableResource `pulumi:"resource"`
	// Name of an Azure resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Cosmos DB table name.
	TableName string `pulumi:"tableName"`
}

// The set of arguments for constructing a DatabaseAccountCassandraTable resource.
type DatabaseAccountCassandraTableArgs struct {
	// Cosmos DB database account name.
	AccountName pulumi.StringInput
	// Cosmos DB keyspace name.
	KeyspaceName pulumi.StringInput
	// A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
	Options pulumi.StringMapInput
	// The standard JSON format of a Cassandra table
	Resource CassandraTableResourceInput
	// Name of an Azure resource group.
	ResourceGroupName pulumi.StringInput
	// Cosmos DB table name.
	TableName pulumi.StringInput
}

func (DatabaseAccountCassandraTableArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*databaseAccountCassandraTableArgs)(nil)).Elem()
}

type DatabaseAccountCassandraTableInput interface {
	pulumi.Input

	ToDatabaseAccountCassandraTableOutput() DatabaseAccountCassandraTableOutput
	ToDatabaseAccountCassandraTableOutputWithContext(ctx context.Context) DatabaseAccountCassandraTableOutput
}

func (*DatabaseAccountCassandraTable) ElementType() reflect.Type {
	return reflect.TypeOf((*DatabaseAccountCassandraTable)(nil))
}

func (i *DatabaseAccountCassandraTable) ToDatabaseAccountCassandraTableOutput() DatabaseAccountCassandraTableOutput {
	return i.ToDatabaseAccountCassandraTableOutputWithContext(context.Background())
}

func (i *DatabaseAccountCassandraTable) ToDatabaseAccountCassandraTableOutputWithContext(ctx context.Context) DatabaseAccountCassandraTableOutput {
	return pulumi.ToOutputWithContext(ctx, i).(DatabaseAccountCassandraTableOutput)
}

type DatabaseAccountCassandraTableOutput struct {
	*pulumi.OutputState
}

func (DatabaseAccountCassandraTableOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*DatabaseAccountCassandraTable)(nil))
}

func (o DatabaseAccountCassandraTableOutput) ToDatabaseAccountCassandraTableOutput() DatabaseAccountCassandraTableOutput {
	return o
}

func (o DatabaseAccountCassandraTableOutput) ToDatabaseAccountCassandraTableOutputWithContext(ctx context.Context) DatabaseAccountCassandraTableOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(DatabaseAccountCassandraTableOutput{})
}
