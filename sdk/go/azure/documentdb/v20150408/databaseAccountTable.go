// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20150408

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// An Azure Cosmos DB Table.
type DatabaseAccountTable struct {
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

// NewDatabaseAccountTable registers a new resource with the given unique name, arguments, and options.
func NewDatabaseAccountTable(ctx *pulumi.Context,
	name string, args *DatabaseAccountTableArgs, opts ...pulumi.ResourceOption) (*DatabaseAccountTable, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AccountName == nil {
		return nil, errors.New("invalid value for required argument 'AccountName'")
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
			Type: pulumi.String("azure-nextgen:documentdb/latest:DatabaseAccountTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20150401:DatabaseAccountTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20151106:DatabaseAccountTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20160319:DatabaseAccountTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20160331:DatabaseAccountTable"),
		},
	})
	opts = append(opts, aliases)
	var resource DatabaseAccountTable
	err := ctx.RegisterResource("azure-nextgen:documentdb/v20150408:DatabaseAccountTable", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetDatabaseAccountTable gets an existing DatabaseAccountTable resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDatabaseAccountTable(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *DatabaseAccountTableState, opts ...pulumi.ResourceOption) (*DatabaseAccountTable, error) {
	var resource DatabaseAccountTable
	err := ctx.ReadResource("azure-nextgen:documentdb/v20150408:DatabaseAccountTable", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering DatabaseAccountTable resources.
type databaseAccountTableState struct {
	// The location of the resource group to which the resource belongs.
	Location *string `pulumi:"location"`
	// The name of the database account.
	Name *string `pulumi:"name"`
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags map[string]string `pulumi:"tags"`
	// The type of Azure resource.
	Type *string `pulumi:"type"`
}

type DatabaseAccountTableState struct {
	// The location of the resource group to which the resource belongs.
	Location pulumi.StringPtrInput
	// The name of the database account.
	Name pulumi.StringPtrInput
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags pulumi.StringMapInput
	// The type of Azure resource.
	Type pulumi.StringPtrInput
}

func (DatabaseAccountTableState) ElementType() reflect.Type {
	return reflect.TypeOf((*databaseAccountTableState)(nil)).Elem()
}

type databaseAccountTableArgs struct {
	// Cosmos DB database account name.
	AccountName string `pulumi:"accountName"`
	// A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
	Options map[string]string `pulumi:"options"`
	// The standard JSON format of a Table
	Resource TableResource `pulumi:"resource"`
	// Name of an Azure resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Cosmos DB table name.
	TableName string `pulumi:"tableName"`
}

// The set of arguments for constructing a DatabaseAccountTable resource.
type DatabaseAccountTableArgs struct {
	// Cosmos DB database account name.
	AccountName pulumi.StringInput
	// A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
	Options pulumi.StringMapInput
	// The standard JSON format of a Table
	Resource TableResourceInput
	// Name of an Azure resource group.
	ResourceGroupName pulumi.StringInput
	// Cosmos DB table name.
	TableName pulumi.StringInput
}

func (DatabaseAccountTableArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*databaseAccountTableArgs)(nil)).Elem()
}

type DatabaseAccountTableInput interface {
	pulumi.Input

	ToDatabaseAccountTableOutput() DatabaseAccountTableOutput
	ToDatabaseAccountTableOutputWithContext(ctx context.Context) DatabaseAccountTableOutput
}

func (*DatabaseAccountTable) ElementType() reflect.Type {
	return reflect.TypeOf((*DatabaseAccountTable)(nil))
}

func (i *DatabaseAccountTable) ToDatabaseAccountTableOutput() DatabaseAccountTableOutput {
	return i.ToDatabaseAccountTableOutputWithContext(context.Background())
}

func (i *DatabaseAccountTable) ToDatabaseAccountTableOutputWithContext(ctx context.Context) DatabaseAccountTableOutput {
	return pulumi.ToOutputWithContext(ctx, i).(DatabaseAccountTableOutput)
}

type DatabaseAccountTableOutput struct {
	*pulumi.OutputState
}

func (DatabaseAccountTableOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*DatabaseAccountTable)(nil))
}

func (o DatabaseAccountTableOutput) ToDatabaseAccountTableOutput() DatabaseAccountTableOutput {
	return o
}

func (o DatabaseAccountTableOutput) ToDatabaseAccountTableOutputWithContext(ctx context.Context) DatabaseAccountTableOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(DatabaseAccountTableOutput{})
}
