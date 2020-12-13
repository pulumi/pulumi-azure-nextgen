// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20170301preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupManagedDatabase(ctx *pulumi.Context, args *LookupManagedDatabaseArgs, opts ...pulumi.InvokeOption) (*LookupManagedDatabaseResult, error) {
	var rv LookupManagedDatabaseResult
	err := ctx.Invoke("azure-nextgen:sql/v20170301preview:getManagedDatabase", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupManagedDatabaseArgs struct {
	// The name of the database.
	DatabaseName string `pulumi:"databaseName"`
	// The name of the managed instance.
	ManagedInstanceName string `pulumi:"managedInstanceName"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// A managed database resource.
type LookupManagedDatabaseResult struct {
	// Collation of the metadata catalog.
	CatalogCollation *string `pulumi:"catalogCollation"`
	// Collation of the managed database.
	Collation *string `pulumi:"collation"`
	// Managed database create mode. PointInTimeRestore: Create a database by restoring a point in time backup of an existing database. SourceDatabaseName, SourceManagedInstanceName and PointInTime must be specified. RestoreExternalBackup: Create a database by restoring from external backup files. Collation, StorageContainerUri and StorageContainerSasToken must be specified. Recovery: Creates a database by restoring a geo-replicated backup. RecoverableDatabaseId must be specified as the recoverable database resource ID to restore.
	CreateMode *string `pulumi:"createMode"`
	// Creation date of the database.
	CreationDate string `pulumi:"creationDate"`
	// Geo paired region.
	DefaultSecondaryLocation string `pulumi:"defaultSecondaryLocation"`
	// Earliest restore point in time for point in time restore.
	EarliestRestorePoint string `pulumi:"earliestRestorePoint"`
	// Instance Failover Group resource identifier that this managed database belongs to.
	FailoverGroupId string `pulumi:"failoverGroupId"`
	// Resource ID.
	Id string `pulumi:"id"`
	// Resource location.
	Location string `pulumi:"location"`
	// The name of the Long Term Retention backup to be used for restore of this managed database.
	LongTermRetentionBackupResourceId *string `pulumi:"longTermRetentionBackupResourceId"`
	// Resource name.
	Name string `pulumi:"name"`
	// The resource identifier of the recoverable database associated with create operation of this database.
	RecoverableDatabaseId *string `pulumi:"recoverableDatabaseId"`
	// The restorable dropped database resource id to restore when creating this database.
	RestorableDroppedDatabaseId *string `pulumi:"restorableDroppedDatabaseId"`
	// Conditional. If createMode is PointInTimeRestore, this value is required. Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
	RestorePointInTime *string `pulumi:"restorePointInTime"`
	// The resource identifier of the source database associated with create operation of this database.
	SourceDatabaseId *string `pulumi:"sourceDatabaseId"`
	// Status of the database.
	Status string `pulumi:"status"`
	// Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the storage container sas token.
	StorageContainerSasToken *string `pulumi:"storageContainerSasToken"`
	// Conditional. If createMode is RestoreExternalBackup, this value is required. Specifies the uri of the storage container where backups for this restore are stored.
	StorageContainerUri *string `pulumi:"storageContainerUri"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Resource type.
	Type string `pulumi:"type"`
}
