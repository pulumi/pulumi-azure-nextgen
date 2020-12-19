// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20191101

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A DataSet data transfer object.
type DataSet struct {
	pulumi.CustomResourceState

	// Kind of data set.
	Kind pulumi.StringOutput `pulumi:"kind"`
	// Name of the azure resource
	Name pulumi.StringOutput `pulumi:"name"`
	// Type of the azure resource
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewDataSet registers a new resource with the given unique name, arguments, and options.
func NewDataSet(ctx *pulumi.Context,
	name string, args *DataSetArgs, opts ...pulumi.ResourceOption) (*DataSet, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AccountName == nil {
		return nil, errors.New("invalid value for required argument 'AccountName'")
	}
	if args.DataSetName == nil {
		return nil, errors.New("invalid value for required argument 'DataSetName'")
	}
	if args.Kind == nil {
		return nil, errors.New("invalid value for required argument 'Kind'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.ShareName == nil {
		return nil, errors.New("invalid value for required argument 'ShareName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:datashare/latest:DataSet"),
		},
		{
			Type: pulumi.String("azure-nextgen:datashare/v20181101preview:DataSet"),
		},
	})
	opts = append(opts, aliases)
	var resource DataSet
	err := ctx.RegisterResource("azure-nextgen:datashare/v20191101:DataSet", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetDataSet gets an existing DataSet resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDataSet(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *DataSetState, opts ...pulumi.ResourceOption) (*DataSet, error) {
	var resource DataSet
	err := ctx.ReadResource("azure-nextgen:datashare/v20191101:DataSet", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering DataSet resources.
type dataSetState struct {
	// Kind of data set.
	Kind *string `pulumi:"kind"`
	// Name of the azure resource
	Name *string `pulumi:"name"`
	// Type of the azure resource
	Type *string `pulumi:"type"`
}

type DataSetState struct {
	// Kind of data set.
	Kind pulumi.StringPtrInput
	// Name of the azure resource
	Name pulumi.StringPtrInput
	// Type of the azure resource
	Type pulumi.StringPtrInput
}

func (DataSetState) ElementType() reflect.Type {
	return reflect.TypeOf((*dataSetState)(nil)).Elem()
}

type dataSetArgs struct {
	// The name of the share account.
	AccountName string `pulumi:"accountName"`
	// The name of the dataSet.
	DataSetName string `pulumi:"dataSetName"`
	// Kind of data set.
	Kind string `pulumi:"kind"`
	// The resource group name.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the share to add the data set to.
	ShareName string `pulumi:"shareName"`
}

// The set of arguments for constructing a DataSet resource.
type DataSetArgs struct {
	// The name of the share account.
	AccountName pulumi.StringInput
	// The name of the dataSet.
	DataSetName pulumi.StringInput
	// Kind of data set.
	Kind pulumi.StringInput
	// The resource group name.
	ResourceGroupName pulumi.StringInput
	// The name of the share to add the data set to.
	ShareName pulumi.StringInput
}

func (DataSetArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*dataSetArgs)(nil)).Elem()
}

type DataSetInput interface {
	pulumi.Input

	ToDataSetOutput() DataSetOutput
	ToDataSetOutputWithContext(ctx context.Context) DataSetOutput
}

func (*DataSet) ElementType() reflect.Type {
	return reflect.TypeOf((*DataSet)(nil))
}

func (i *DataSet) ToDataSetOutput() DataSetOutput {
	return i.ToDataSetOutputWithContext(context.Background())
}

func (i *DataSet) ToDataSetOutputWithContext(ctx context.Context) DataSetOutput {
	return pulumi.ToOutputWithContext(ctx, i).(DataSetOutput)
}

type DataSetOutput struct {
	*pulumi.OutputState
}

func (DataSetOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*DataSet)(nil))
}

func (o DataSetOutput) ToDataSetOutput() DataSetOutput {
	return o
}

func (o DataSetOutput) ToDataSetOutputWithContext(ctx context.Context) DataSetOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(DataSetOutput{})
}
