// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupFileShare(ctx *pulumi.Context, args *LookupFileShareArgs, opts ...pulumi.InvokeOption) (*LookupFileShareResult, error) {
	var rv LookupFileShareResult
	err := ctx.Invoke("azure-nextgen:storsimple/latest:getFileShare", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupFileShareArgs struct {
	// The device name.
	DeviceName string `pulumi:"deviceName"`
	// The file server name.
	FileServerName string `pulumi:"fileServerName"`
	// The manager name
	ManagerName string `pulumi:"managerName"`
	// The resource group name
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The file share name.
	ShareName string `pulumi:"shareName"`
}

// The File Share.
type LookupFileShareResult struct {
	// The user/group who will have full permission in this share. Active directory email address. Example: xyz@contoso.com or Contoso\xyz.
	AdminUser string `pulumi:"adminUser"`
	// The data policy
	DataPolicy string `pulumi:"dataPolicy"`
	// Description for file share
	Description *string `pulumi:"description"`
	// The identifier.
	Id string `pulumi:"id"`
	// The local used capacity in Bytes.
	LocalUsedCapacityInBytes int `pulumi:"localUsedCapacityInBytes"`
	// The monitoring status
	MonitoringStatus string `pulumi:"monitoringStatus"`
	// The name.
	Name string `pulumi:"name"`
	// The total provisioned capacity in Bytes
	ProvisionedCapacityInBytes int `pulumi:"provisionedCapacityInBytes"`
	// The Share Status
	ShareStatus string `pulumi:"shareStatus"`
	// The type.
	Type string `pulumi:"type"`
	// The used capacity in Bytes.
	UsedCapacityInBytes int `pulumi:"usedCapacityInBytes"`
}
