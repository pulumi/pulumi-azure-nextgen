// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170301preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A sensitivity label.
type SensitivityLabel struct {
	pulumi.CustomResourceState

	// The information type.
	InformationType pulumi.StringPtrOutput `pulumi:"informationType"`
	// The information type ID.
	InformationTypeId pulumi.StringPtrOutput `pulumi:"informationTypeId"`
	// Is sensitivity recommendation disabled. Applicable for recommended sensitivity label only. Specifies whether the sensitivity recommendation on this column is disabled (dismissed) or not.
	IsDisabled pulumi.BoolOutput `pulumi:"isDisabled"`
	// The label ID.
	LabelId pulumi.StringPtrOutput `pulumi:"labelId"`
	// The label name.
	LabelName pulumi.StringPtrOutput `pulumi:"labelName"`
	// Resource name.
	Name pulumi.StringOutput    `pulumi:"name"`
	Rank pulumi.StringPtrOutput `pulumi:"rank"`
	// Resource type.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewSensitivityLabel registers a new resource with the given unique name, arguments, and options.
func NewSensitivityLabel(ctx *pulumi.Context,
	name string, args *SensitivityLabelArgs, opts ...pulumi.ResourceOption) (*SensitivityLabel, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ColumnName == nil {
		return nil, errors.New("invalid value for required argument 'ColumnName'")
	}
	if args.DatabaseName == nil {
		return nil, errors.New("invalid value for required argument 'DatabaseName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.SchemaName == nil {
		return nil, errors.New("invalid value for required argument 'SchemaName'")
	}
	if args.SensitivityLabelSource == nil {
		return nil, errors.New("invalid value for required argument 'SensitivityLabelSource'")
	}
	if args.ServerName == nil {
		return nil, errors.New("invalid value for required argument 'ServerName'")
	}
	if args.TableName == nil {
		return nil, errors.New("invalid value for required argument 'TableName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:sql/v20200801preview:SensitivityLabel"),
		},
	})
	opts = append(opts, aliases)
	var resource SensitivityLabel
	err := ctx.RegisterResource("azure-nextgen:sql/v20170301preview:SensitivityLabel", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetSensitivityLabel gets an existing SensitivityLabel resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSensitivityLabel(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *SensitivityLabelState, opts ...pulumi.ResourceOption) (*SensitivityLabel, error) {
	var resource SensitivityLabel
	err := ctx.ReadResource("azure-nextgen:sql/v20170301preview:SensitivityLabel", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering SensitivityLabel resources.
type sensitivityLabelState struct {
	// The information type.
	InformationType *string `pulumi:"informationType"`
	// The information type ID.
	InformationTypeId *string `pulumi:"informationTypeId"`
	// Is sensitivity recommendation disabled. Applicable for recommended sensitivity label only. Specifies whether the sensitivity recommendation on this column is disabled (dismissed) or not.
	IsDisabled *bool `pulumi:"isDisabled"`
	// The label ID.
	LabelId *string `pulumi:"labelId"`
	// The label name.
	LabelName *string `pulumi:"labelName"`
	// Resource name.
	Name *string `pulumi:"name"`
	Rank *string `pulumi:"rank"`
	// Resource type.
	Type *string `pulumi:"type"`
}

type SensitivityLabelState struct {
	// The information type.
	InformationType pulumi.StringPtrInput
	// The information type ID.
	InformationTypeId pulumi.StringPtrInput
	// Is sensitivity recommendation disabled. Applicable for recommended sensitivity label only. Specifies whether the sensitivity recommendation on this column is disabled (dismissed) or not.
	IsDisabled pulumi.BoolPtrInput
	// The label ID.
	LabelId pulumi.StringPtrInput
	// The label name.
	LabelName pulumi.StringPtrInput
	// Resource name.
	Name pulumi.StringPtrInput
	Rank pulumi.StringPtrInput
	// Resource type.
	Type pulumi.StringPtrInput
}

func (SensitivityLabelState) ElementType() reflect.Type {
	return reflect.TypeOf((*sensitivityLabelState)(nil)).Elem()
}

type sensitivityLabelArgs struct {
	// The name of the column.
	ColumnName string `pulumi:"columnName"`
	// The name of the database.
	DatabaseName string `pulumi:"databaseName"`
	// The information type.
	InformationType *string `pulumi:"informationType"`
	// The information type ID.
	InformationTypeId *string `pulumi:"informationTypeId"`
	// The label ID.
	LabelId *string `pulumi:"labelId"`
	// The label name.
	LabelName *string `pulumi:"labelName"`
	Rank      *string `pulumi:"rank"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the schema.
	SchemaName string `pulumi:"schemaName"`
	// The source of the sensitivity label.
	SensitivityLabelSource string `pulumi:"sensitivityLabelSource"`
	// The name of the server.
	ServerName string `pulumi:"serverName"`
	// The name of the table.
	TableName string `pulumi:"tableName"`
}

// The set of arguments for constructing a SensitivityLabel resource.
type SensitivityLabelArgs struct {
	// The name of the column.
	ColumnName pulumi.StringInput
	// The name of the database.
	DatabaseName pulumi.StringInput
	// The information type.
	InformationType pulumi.StringPtrInput
	// The information type ID.
	InformationTypeId pulumi.StringPtrInput
	// The label ID.
	LabelId pulumi.StringPtrInput
	// The label name.
	LabelName pulumi.StringPtrInput
	Rank      SensitivityLabelRank
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName pulumi.StringInput
	// The name of the schema.
	SchemaName pulumi.StringInput
	// The source of the sensitivity label.
	SensitivityLabelSource pulumi.StringInput
	// The name of the server.
	ServerName pulumi.StringInput
	// The name of the table.
	TableName pulumi.StringInput
}

func (SensitivityLabelArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*sensitivityLabelArgs)(nil)).Elem()
}

type SensitivityLabelInput interface {
	pulumi.Input

	ToSensitivityLabelOutput() SensitivityLabelOutput
	ToSensitivityLabelOutputWithContext(ctx context.Context) SensitivityLabelOutput
}

func (SensitivityLabel) ElementType() reflect.Type {
	return reflect.TypeOf((*SensitivityLabel)(nil)).Elem()
}

func (i SensitivityLabel) ToSensitivityLabelOutput() SensitivityLabelOutput {
	return i.ToSensitivityLabelOutputWithContext(context.Background())
}

func (i SensitivityLabel) ToSensitivityLabelOutputWithContext(ctx context.Context) SensitivityLabelOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SensitivityLabelOutput)
}

type SensitivityLabelOutput struct {
	*pulumi.OutputState
}

func (SensitivityLabelOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*SensitivityLabelOutput)(nil)).Elem()
}

func (o SensitivityLabelOutput) ToSensitivityLabelOutput() SensitivityLabelOutput {
	return o
}

func (o SensitivityLabelOutput) ToSensitivityLabelOutputWithContext(ctx context.Context) SensitivityLabelOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(SensitivityLabelOutput{})
}
