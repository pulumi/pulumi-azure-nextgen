// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200801preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupManagedDatabaseSensitivityLabel(ctx *pulumi.Context, args *LookupManagedDatabaseSensitivityLabelArgs, opts ...pulumi.InvokeOption) (*LookupManagedDatabaseSensitivityLabelResult, error) {
	var rv LookupManagedDatabaseSensitivityLabelResult
	err := ctx.Invoke("azure-nextgen:sql/v20200801preview:getManagedDatabaseSensitivityLabel", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupManagedDatabaseSensitivityLabelArgs struct {
	// The name of the column.
	ColumnName string `pulumi:"columnName"`
	// The name of the database.
	DatabaseName string `pulumi:"databaseName"`
	// The name of the managed instance.
	ManagedInstanceName string `pulumi:"managedInstanceName"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the schema.
	SchemaName string `pulumi:"schemaName"`
	// The source of the sensitivity label.
	SensitivityLabelSource string `pulumi:"sensitivityLabelSource"`
	// The name of the table.
	TableName string `pulumi:"tableName"`
}

// A sensitivity label.
type LookupManagedDatabaseSensitivityLabelResult struct {
	// The column name.
	ColumnName string `pulumi:"columnName"`
	// Resource ID.
	Id string `pulumi:"id"`
	// The information type.
	InformationType *string `pulumi:"informationType"`
	// The information type ID.
	InformationTypeId *string `pulumi:"informationTypeId"`
	// Is sensitivity recommendation disabled. Applicable for recommended sensitivity label only. Specifies whether the sensitivity recommendation on this column is disabled (dismissed) or not.
	IsDisabled bool `pulumi:"isDisabled"`
	// The label ID.
	LabelId *string `pulumi:"labelId"`
	// The label name.
	LabelName *string `pulumi:"labelName"`
	// Resource that manages the sensitivity label.
	ManagedBy string `pulumi:"managedBy"`
	// Resource name.
	Name string  `pulumi:"name"`
	Rank *string `pulumi:"rank"`
	// The schema name.
	SchemaName string `pulumi:"schemaName"`
	// The table name.
	TableName string `pulumi:"tableName"`
	// Resource type.
	Type string `pulumi:"type"`
}
