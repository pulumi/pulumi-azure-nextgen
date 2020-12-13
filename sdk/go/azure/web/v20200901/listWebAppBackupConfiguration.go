// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200901

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func ListWebAppBackupConfiguration(ctx *pulumi.Context, args *ListWebAppBackupConfigurationArgs, opts ...pulumi.InvokeOption) (*ListWebAppBackupConfigurationResult, error) {
	var rv ListWebAppBackupConfigurationResult
	err := ctx.Invoke("azure-nextgen:web/v20200901:listWebAppBackupConfiguration", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type ListWebAppBackupConfigurationArgs struct {
	// Name of the app.
	Name string `pulumi:"name"`
	// Name of the resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// Description of a backup which will be performed.
type ListWebAppBackupConfigurationResult struct {
	// Name of the backup.
	BackupName *string `pulumi:"backupName"`
	// Schedule for the backup if it is executed periodically.
	BackupSchedule *BackupScheduleResponse `pulumi:"backupSchedule"`
	// Databases included in the backup.
	Databases []DatabaseBackupSettingResponse `pulumi:"databases"`
	// True if the backup schedule is enabled (must be included in that case), false if the backup schedule should be disabled.
	Enabled *bool `pulumi:"enabled"`
	// Resource Id.
	Id string `pulumi:"id"`
	// Kind of resource.
	Kind *string `pulumi:"kind"`
	// Resource Name.
	Name string `pulumi:"name"`
	// SAS URL to the container.
	StorageAccountUrl string `pulumi:"storageAccountUrl"`
	// The system metadata relating to this resource.
	SystemData SystemDataResponse `pulumi:"systemData"`
	// Resource type.
	Type string `pulumi:"type"`
}
