// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191212

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// An Azure Cosmos DB Table.
type TableResourceTable struct {
	pulumi.CustomResourceState

	// The location of the resource group to which the resource belongs.
	Location pulumi.StringPtrOutput `pulumi:"location"`
	// The name of the ARM resource.
	Name     pulumi.StringOutput                         `pulumi:"name"`
	Resource TableGetPropertiesResponseResourcePtrOutput `pulumi:"resource"`
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// The type of Azure resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewTableResourceTable registers a new resource with the given unique name, arguments, and options.
func NewTableResourceTable(ctx *pulumi.Context,
	name string, args *TableResourceTableArgs, opts ...pulumi.ResourceOption) (*TableResourceTable, error) {
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
			Type: pulumi.String("azure-nextgen:documentdb/latest:TableResourceTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20190801:TableResourceTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20200301:TableResourceTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20200401:TableResourceTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20200601preview:TableResourceTable"),
		},
		{
			Type: pulumi.String("azure-nextgen:documentdb/v20200901:TableResourceTable"),
		},
	})
	opts = append(opts, aliases)
	var resource TableResourceTable
	err := ctx.RegisterResource("azure-nextgen:documentdb/v20191212:TableResourceTable", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetTableResourceTable gets an existing TableResourceTable resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetTableResourceTable(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *TableResourceTableState, opts ...pulumi.ResourceOption) (*TableResourceTable, error) {
	var resource TableResourceTable
	err := ctx.ReadResource("azure-nextgen:documentdb/v20191212:TableResourceTable", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering TableResourceTable resources.
type tableResourceTableState struct {
	// The location of the resource group to which the resource belongs.
	Location *string `pulumi:"location"`
	// The name of the ARM resource.
	Name     *string                             `pulumi:"name"`
	Resource *TableGetPropertiesResponseResource `pulumi:"resource"`
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags map[string]string `pulumi:"tags"`
	// The type of Azure resource.
	Type *string `pulumi:"type"`
}

type TableResourceTableState struct {
	// The location of the resource group to which the resource belongs.
	Location pulumi.StringPtrInput
	// The name of the ARM resource.
	Name     pulumi.StringPtrInput
	Resource TableGetPropertiesResponseResourcePtrInput
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags pulumi.StringMapInput
	// The type of Azure resource.
	Type pulumi.StringPtrInput
}

func (TableResourceTableState) ElementType() reflect.Type {
	return reflect.TypeOf((*tableResourceTableState)(nil)).Elem()
}

type tableResourceTableArgs struct {
	// Cosmos DB database account name.
	AccountName string `pulumi:"accountName"`
	// The location of the resource group to which the resource belongs.
	Location *string `pulumi:"location"`
	// A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
	Options CreateUpdateOptions `pulumi:"options"`
	// The standard JSON format of a Table
	Resource TableResource `pulumi:"resource"`
	// Name of an Azure resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Cosmos DB table name.
	TableName string `pulumi:"tableName"`
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags map[string]string `pulumi:"tags"`
}

// The set of arguments for constructing a TableResourceTable resource.
type TableResourceTableArgs struct {
	// Cosmos DB database account name.
	AccountName pulumi.StringInput
	// The location of the resource group to which the resource belongs.
	Location pulumi.StringPtrInput
	// A key-value pair of options to be applied for the request. This corresponds to the headers sent with the request.
	Options CreateUpdateOptionsInput
	// The standard JSON format of a Table
	Resource TableResourceInput
	// Name of an Azure resource group.
	ResourceGroupName pulumi.StringInput
	// Cosmos DB table name.
	TableName pulumi.StringInput
	// Tags are a list of key-value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater than 128 characters and value no greater than 256 characters. For example, the default experience for a template type is set with "defaultExperience": "Cassandra". Current "defaultExperience" values also include "Table", "Graph", "DocumentDB", and "MongoDB".
	Tags pulumi.StringMapInput
}

func (TableResourceTableArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*tableResourceTableArgs)(nil)).Elem()
}

type TableResourceTableInput interface {
	pulumi.Input

	ToTableResourceTableOutput() TableResourceTableOutput
	ToTableResourceTableOutputWithContext(ctx context.Context) TableResourceTableOutput
}

func (*TableResourceTable) ElementType() reflect.Type {
	return reflect.TypeOf((*TableResourceTable)(nil))
}

func (i *TableResourceTable) ToTableResourceTableOutput() TableResourceTableOutput {
	return i.ToTableResourceTableOutputWithContext(context.Background())
}

func (i *TableResourceTable) ToTableResourceTableOutputWithContext(ctx context.Context) TableResourceTableOutput {
	return pulumi.ToOutputWithContext(ctx, i).(TableResourceTableOutput)
}

type TableResourceTableOutput struct {
	*pulumi.OutputState
}

func (TableResourceTableOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*TableResourceTable)(nil))
}

func (o TableResourceTableOutput) ToTableResourceTableOutput() TableResourceTableOutput {
	return o
}

func (o TableResourceTableOutput) ToTableResourceTableOutputWithContext(ctx context.Context) TableResourceTableOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(TableResourceTableOutput{})
}
