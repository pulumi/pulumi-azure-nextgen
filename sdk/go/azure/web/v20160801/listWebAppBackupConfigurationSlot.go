// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20160801

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func ListWebAppBackupConfigurationSlot(ctx *pulumi.Context, args *ListWebAppBackupConfigurationSlotArgs, opts ...pulumi.InvokeOption) (*ListWebAppBackupConfigurationSlotResult, error) {
	var rv ListWebAppBackupConfigurationSlotResult
	err := ctx.Invoke("azure-nextgen:web/v20160801:listWebAppBackupConfigurationSlot", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type ListWebAppBackupConfigurationSlotArgs struct {
	// Name of the app.
	Name string `pulumi:"name"`
	// Name of the resource group to which the resource belongs.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Name of the deployment slot. If a slot is not specified, the API will get the backup configuration for the production slot.
	Slot string `pulumi:"slot"`
}

// Description of a backup which will be performed.
type ListWebAppBackupConfigurationSlotResult struct {
	// Name of the backup.
	BackupRequestName string `pulumi:"backupRequestName"`
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
	// Resource type.
	Type string `pulumi:"type"`
}
