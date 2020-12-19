// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20160319

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// An Azure Cosmos DB Cassandra keyspace.
type DatabaseAccountCassandraKeyspace struct {
	pulumi.CustomResourceState

	// The location of the resource group to which the resource belongs.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// The name of the database account.
	Name pulumi.StringOutput `pulumi:"name"`
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The type of Azure resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewDatabaseAccountCassandraKeyspace registers a new resource with the given unique name, arguments, and options.
func NewDatabaseAccountCassandraKeyspace(ctx *pulumi.Context,
	name string, args *DatabaseAccountCassandraKeyspaceArgs, opts ...pulumi.ResourceOption) (*DatabaseAccountCassandraKeyspace, error) {
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
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:documentdb/latest:DatabaseAccountCassandraKeyspace"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20150401:DatabaseAccountCassandraKeyspace"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20150408:DatabaseAccountCassandraKeyspace"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20151106:DatabaseAccountCassandraKeyspace"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20160331:DatabaseAccountCassandraKeyspace"),
		},
	})
	opts = append(opts, aliases)
	var resource DatabaseAccountCassandraKeyspace
	err := ctx.RegisterResource("azure-nextgen:documentdb/v20160319:DatabaseAccountCassandraKeyspace", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetDatabaseAccountCassandraKeyspace gets an existing DatabaseAccountCassandraKeyspace resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDatabaseAccountCassandraKeyspace(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *DatabaseAccountCassandraKeyspaceState, opts ...pulumi.ResourceOption) (*DatabaseAccountCassandraKeyspace, error) {
	var resource DatabaseAccountCassandraKeyspace
	err := ctx.ReadResource("azure-nextgen:documentdb/v20160319:DatabaseAccountCassandraKeyspace", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering DatabaseAccountCassandraKeyspace resources.
type databaseAccountCassandraKeyspaceState struct {
	// The location of the resource group to which the resource belongs.
	Location *string `pulumi:"location"`
	// The name of the database account.
	Name *string `pulumi:"name"`
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags map[string]string `pulumi:"tags"`
	// The type of Azure resource.
	Type *string `pulumi:"type"`
}

type DatabaseAccountCassandraKeyspaceState struct {
	// The location of the resource group to which the resource belongs.
	Location pulumi.StringPtrInput
	// The name of the database account.
	Name pulumi.StringPtrInput
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags pulumi.StringMapInput
	// The type of Azure resource.
	Type pulumi.StringPtrInput
}

func (DatabaseAccountCassandraKeyspaceState) ElementType() reflect.Type {
	return reflect.TypeOf((*databaseAccountCassandraKeyspaceState)(nil)).Elem()
}

type databaseAccountCassandraKeyspaceArgs struct {
	// Cosmos DB database account name.
	AccountName string `pulumi:"accountName"`
	// Cosmos DB keyspace name.
	KeyspaceName string `pulumi:"keyspaceName"`
	// A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
	Options map[string]string `pulumi:"options"`
	// The standard JSON format of a Cassandra keyspace
	Resource CassandraKeyspaceResource `pulumi:"resource"`
	// Name of an Azure resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// The set of arguments for constructing a DatabaseAccountCassandraKeyspace resource.
type DatabaseAccountCassandraKeyspaceArgs struct {
	// Cosmos DB database account name.
	AccountName pulumi.StringInput
	// Cosmos DB keyspace name.
	KeyspaceName pulumi.StringInput
	// A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
	Options pulumi.StringMapInput
	// The standard JSON format of a Cassandra keyspace
	Resource CassandraKeyspaceResourceInput
	// Name of an Azure resource group.
	ResourceGroupName pulumi.StringInput
}

func (DatabaseAccountCassandraKeyspaceArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*databaseAccountCassandraKeyspaceArgs)(nil)).Elem()
}

type DatabaseAccountCassandraKeyspaceInput interface {
	pulumi.Input

	ToDatabaseAccountCassandraKeyspaceOutput() DatabaseAccountCassandraKeyspaceOutput
	ToDatabaseAccountCassandraKeyspaceOutputWithContext(ctx context.Context) DatabaseAccountCassandraKeyspaceOutput
}

func (*DatabaseAccountCassandraKeyspace) ElementType() reflect.Type {
	return reflect.TypeOf((*DatabaseAccountCassandraKeyspace)(nil))
}

func (i *DatabaseAccountCassandraKeyspace) ToDatabaseAccountCassandraKeyspaceOutput() DatabaseAccountCassandraKeyspaceOutput {
	return i.ToDatabaseAccountCassandraKeyspaceOutputWithContext(context.Background())
}

func (i *DatabaseAccountCassandraKeyspace) ToDatabaseAccountCassandraKeyspaceOutputWithContext(ctx context.Context) DatabaseAccountCassandraKeyspaceOutput {
	return pulumi.ToOutputWithContext(ctx, i).(DatabaseAccountCassandraKeyspaceOutput)
}

type DatabaseAccountCassandraKeyspaceOutput struct {
	*pulumi.OutputState
}

func (DatabaseAccountCassandraKeyspaceOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*DatabaseAccountCassandraKeyspace)(nil))
}

func (o DatabaseAccountCassandraKeyspaceOutput) ToDatabaseAccountCassandraKeyspaceOutput() DatabaseAccountCassandraKeyspaceOutput {
	return o
}

func (o DatabaseAccountCassandraKeyspaceOutput) ToDatabaseAccountCassandraKeyspaceOutputWithContext(ctx context.Context) DatabaseAccountCassandraKeyspaceOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(DatabaseAccountCassandraKeyspaceOutput{})
}
