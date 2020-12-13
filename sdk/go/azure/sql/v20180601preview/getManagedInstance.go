// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180601preview

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupManagedInstance(ctx *pulumi.Context, args *LookupManagedInstanceArgs, opts ...pulumi.InvokeOption) (*LookupManagedInstanceResult, error) {
	var rv LookupManagedInstanceResult
	err := ctx.Invoke("azure-nextgen:sql/v20180601preview:getManagedInstance", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupManagedInstanceArgs struct {
	// The name of the managed instance.
	ManagedInstanceName string `pulumi:"managedInstanceName"`
	// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
	ResourceGroupName string `pulumi:"resourceGroupName"`
}

// An Azure SQL managed instance.
type LookupManagedInstanceResult struct {
	// Administrator username for the managed instance. Can only be specified when the managed instance is being created (and is required for creation).
	AdministratorLogin *string `pulumi:"administratorLogin"`
	// The administrator login password (required for managed instance creation).
	AdministratorLoginPassword *string `pulumi:"administratorLoginPassword"`
	// Collation of the managed instance.
	Collation *string `pulumi:"collation"`
	// The Dns Zone that the managed instance is in.
	DnsZone string `pulumi:"dnsZone"`
	// The resource id of another managed instance whose DNS zone this managed instance will share after creation.
	DnsZonePartner *string `pulumi:"dnsZonePartner"`
	// The fully qualified domain name of the managed instance.
	FullyQualifiedDomainName string `pulumi:"fullyQualifiedDomainName"`
	// Resource ID.
	Id string `pulumi:"id"`
	// The Azure Active Directory identity of the managed instance.
	Identity *ResourceIdentityResponse `pulumi:"identity"`
	// The Id of the instance pool this managed server belongs to.
	InstancePoolId *string `pulumi:"instancePoolId"`
	// The license type. Possible values are 'LicenseIncluded' (regular price inclusive of a new SQL license) and 'BasePrice' (discounted AHB price for bringing your own SQL licenses).
	LicenseType *string `pulumi:"licenseType"`
	// Resource location.
	Location string `pulumi:"location"`
	// Specifies maintenance configuration id to apply to this managed instance.
	MaintenanceConfigurationId *string `pulumi:"maintenanceConfigurationId"`
	// Specifies the mode of database creation.
	//
	// Default: Regular instance creation.
	//
	// Restore: Creates an instance by restoring a set of backups to specific point in time. RestorePointInTime and SourceManagedInstanceId must be specified.
	ManagedInstanceCreateMode *string `pulumi:"managedInstanceCreateMode"`
	// Minimal TLS version. Allowed values: 'None', '1.0', '1.1', '1.2'
	MinimalTlsVersion *string `pulumi:"minimalTlsVersion"`
	// Resource name.
	Name string `pulumi:"name"`
	// Connection type used for connecting to the instance.
	ProxyOverride *string `pulumi:"proxyOverride"`
	// Whether or not the public data endpoint is enabled.
	PublicDataEndpointEnabled *bool `pulumi:"publicDataEndpointEnabled"`
	// Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
	RestorePointInTime *string `pulumi:"restorePointInTime"`
	// Managed instance SKU. Allowed values for sku.name: GP_Gen4, GP_Gen5, BC_Gen4, BC_Gen5
	Sku *SkuResponse `pulumi:"sku"`
	// The resource identifier of the source managed instance associated with create operation of this instance.
	SourceManagedInstanceId *string `pulumi:"sourceManagedInstanceId"`
	// The state of the managed instance.
	State string `pulumi:"state"`
	// Storage size in GB. Minimum value: 32. Maximum value: 8192. Increments of 32 GB allowed only.
	StorageSizeInGB *int `pulumi:"storageSizeInGB"`
	// Subnet resource ID for the managed instance.
	SubnetId *string `pulumi:"subnetId"`
	// Resource tags.
	Tags map[string]string `pulumi:"tags"`
	// Id of the timezone. Allowed values are timezones supported by Windows.
	// Windows keeps details on supported timezones, including the id, in registry under
	// KEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones.
	// You can get those registry values via SQL Server by querying SELECT name AS timezone_id FROM sys.time_zone_info.
	// List of Ids can also be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell.
	// An example of valid timezone id is "Pacific Standard Time" or "W. Europe Standard Time".
	TimezoneId *string `pulumi:"timezoneId"`
	// Resource type.
	Type string `pulumi:"type"`
	// The number of vCores. Allowed values: 8, 16, 24, 32, 40, 64, 80.
	VCores *int `pulumi:"vCores"`
}
