// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20151101preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Datasources under OMS Workspace.
type DataSource struct {
	pulumi.CustomResourceState

	// The ETag of the data source.
	ETag pulumi.StringPtrOutput `pulumi:"eTag"`
	// The kind of the DataSource.
	Kind pulumi.StringOutput `pulumi:"kind"`
	// Resource name.
	Name pulumi.StringOutput `pulumi:"name"`
	// The data source properties in raw json format, each kind of data source have it's own schema.
	Properties pulumi.AnyOutput `pulumi:"properties"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewDataSource registers a new resource with the given unique name, arguments, and options.
func NewDataSource(ctx *pulumi.Context,
	name string, args *DataSourceArgs, opts ...pulumi.ResourceOption) (*DataSource, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.DataSourceName == nil {
		return nil, errors.New("invalid value for required argument 'DataSourceName'")
	}
	if args.Kind == nil {
		return nil, errors.New("invalid value for required argument 'Kind'")
	}
	if args.Properties == nil {
		return nil, errors.New("invalid value for required argument 'Properties'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.WorkspaceName == nil {
		return nil, errors.New("invalid value for required argument 'WorkspaceName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:operationalinsights/latest:DataSource"),
		},
		{
			Type: pulumi.String("azure-nextgen:operationalinsights/v20200301preview:DataSource"),
		},
		{
			Type: pulumi.String("azure-nextgen:operationalinsights/v20200801:DataSource"),
		},
	})
	opts = append(opts, aliases)
	var resource DataSource
	err := ctx.RegisterResource("azure-nextgen:operationalinsights/v20151101preview:DataSource", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetDataSource gets an existing DataSource resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDataSource(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *DataSourceState, opts ...pulumi.ResourceOption) (*DataSource, error) {
	var resource DataSource
	err := ctx.ReadResource("azure-nextgen:operationalinsights/v20151101preview:DataSource", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering DataSource resources.
type dataSourceState struct {
	// The ETag of the data source.
	ETag *string `pulumi:"eTag"`
	// The kind of the DataSource.
	Kind *string `pulumi:"kind"`
	// Resource name.
	Name *string `pulumi:"name"`
	// The data source properties in raw json format, each kind of data source have it's own schema.
	Properties interface{} `pulumi:"properties"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type DataSourceState struct {
	// The ETag of the data source.
	ETag pulumi.StringPtrInput
	// The kind of the DataSource.
	Kind pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	// The data source properties in raw json format, each kind of data source have it's own schema.
	Properties pulumi.Input
	// Resource tags
	Tags pulumi.StringMapInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (DataSourceState) ElementType() reflect.Type {
	return reflect.TypeOf((*dataSourceState)(nil)).Elem()
}

type dataSourceArgs struct {
	// The name of the datasource resource.
	DataSourceName string `pulumi:"dataSourceName"`
	// The ETag of the data source.
	ETag *string `pulumi:"eTag"`
	// The kind of the DataSource.
	Kind string `pulumi:"kind"`
	// The data source properties in raw json format, each kind of data source have it's own schema.
	Properties interface{} `pulumi:"properties"`
	// The name of the resource group to get. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Name of the Log Analytics Workspace that will contain the datasource
	WorkspaceName string `pulumi:"workspaceName"`
}

// The set of arguments for constructing a DataSource resource.
type DataSourceArgs struct {
	// The name of the datasource resource.
	DataSourceName pulumi.StringInput
	// The ETag of the data source.
	ETag pulumi.StringPtrInput
	// The kind of the DataSource.
	Kind pulumi.StringInput
	// The data source properties in raw json format, each kind of data source have it's own schema.
	Properties pulumi.Input
	// The name of the resource group to get. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Name of the Log Analytics Workspace that will contain the datasource
	WorkspaceName pulumi.StringInput
}

func (DataSourceArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*dataSourceArgs)(nil)).Elem()
}

type DataSourceInput interface {
	pulumi.Input

	ToDataSourceOutput() DataSourceOutput
	ToDataSourceOutputWithContext(ctx context.Context) DataSourceOutput
}

func (DataSource) ElementType() reflect.Type {
	return reflect.TypeOf((*DataSource)(nil)).Elem()
}

func (i DataSource) ToDataSourceOutput() DataSourceOutput {
	return i.ToDataSourceOutputWithContext(context.Background())
}

func (i DataSource) ToDataSourceOutputWithContext(ctx context.Context) DataSourceOutput {
	return pulumi.ToOutputWithContext(ctx, i).(DataSourceOutput)
}

type DataSourceOutput struct {
	*pulumi.OutputState
}

func (DataSourceOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*DataSourceOutput)(nil)).Elem()
}

func (o DataSourceOutput) ToDataSourceOutput() DataSourceOutput {
	return o
}

func (o DataSourceOutput) ToDataSourceOutputWithContext(ctx context.Context) DataSourceOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(DataSourceOutput{})
}
