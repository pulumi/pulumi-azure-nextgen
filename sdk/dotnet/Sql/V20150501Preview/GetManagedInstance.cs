// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Sql.V20150501Preview
{
    public static class GetManagedInstance
    {
        public static Task<GetManagedInstanceResult> InvokeAsync(GetManagedInstanceArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetManagedInstanceResult>("azure-nextgen:sql/v20150501preview:getManagedInstance", args ?? new GetManagedInstanceArgs(), options.WithVersion());
    }


    public sealed class GetManagedInstanceArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the managed instance.
        /// </summary>
        [Input("managedInstanceName", required: true)]
        public string ManagedInstanceName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetManagedInstanceArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetManagedInstanceResult
    {
        /// <summary>
        /// Administrator username for the managed instance. Can only be specified when the managed instance is being created (and is required for creation).
        /// </summary>
        public readonly string? AdministratorLogin;
        /// <summary>
        /// The administrator login password (required for managed instance creation).
        /// </summary>
        public readonly string? AdministratorLoginPassword;
        /// <summary>
        /// Collation of the managed instance.
        /// </summary>
        public readonly string? Collation;
        /// <summary>
        /// The Dns Zone that the managed instance is in.
        /// </summary>
        public readonly string DnsZone;
        /// <summary>
        /// The resource id of another managed instance whose DNS zone this managed instance will share after creation.
        /// </summary>
        public readonly string? DnsZonePartner;
        /// <summary>
        /// The fully qualified domain name of the managed instance.
        /// </summary>
        public readonly string FullyQualifiedDomainName;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The Azure Active Directory identity of the managed instance.
        /// </summary>
        public readonly Outputs.ResourceIdentityResponse? Identity;
        /// <summary>
        /// The Id of the instance pool this managed server belongs to.
        /// </summary>
        public readonly string? InstancePoolId;
        /// <summary>
        /// The license type. Possible values are 'LicenseIncluded' (regular price inclusive of a new SQL license) and 'BasePrice' (discounted AHB price for bringing your own SQL licenses).
        /// </summary>
        public readonly string? LicenseType;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Specifies maintenance configuration id to apply to this managed instance.
        /// </summary>
        public readonly string? MaintenanceConfigurationId;
        /// <summary>
        /// Specifies the mode of database creation.
        /// 
        /// Default: Regular instance creation.
        /// 
        /// Restore: Creates an instance by restoring a set of backups to specific point in time. RestorePointInTime and SourceManagedInstanceId must be specified.
        /// </summary>
        public readonly string? ManagedInstanceCreateMode;
        /// <summary>
        /// Minimal TLS version. Allowed values: 'None', '1.0', '1.1', '1.2'
        /// </summary>
        public readonly string? MinimalTlsVersion;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Connection type used for connecting to the instance.
        /// </summary>
        public readonly string? ProxyOverride;
        /// <summary>
        /// Whether or not the public data endpoint is enabled.
        /// </summary>
        public readonly bool? PublicDataEndpointEnabled;
        /// <summary>
        /// Specifies the point in time (ISO8601 format) of the source database that will be restored to create the new database.
        /// </summary>
        public readonly string? RestorePointInTime;
        /// <summary>
        /// Managed instance SKU. Allowed values for sku.name: GP_Gen4, GP_Gen5, BC_Gen4, BC_Gen5
        /// </summary>
        public readonly Outputs.SkuResponse? Sku;
        /// <summary>
        /// The resource identifier of the source managed instance associated with create operation of this instance.
        /// </summary>
        public readonly string? SourceManagedInstanceId;
        /// <summary>
        /// The state of the managed instance.
        /// </summary>
        public readonly string State;
        /// <summary>
        /// Storage size in GB. Minimum value: 32. Maximum value: 8192. Increments of 32 GB allowed only.
        /// </summary>
        public readonly int? StorageSizeInGB;
        /// <summary>
        /// Subnet resource ID for the managed instance.
        /// </summary>
        public readonly string? SubnetId;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Id of the timezone. Allowed values are timezones supported by Windows.
        /// Windows keeps details on supported timezones, including the id, in registry under
        /// KEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Time Zones.
        /// You can get those registry values via SQL Server by querying SELECT name AS timezone_id FROM sys.time_zone_info.
        /// List of Ids can also be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell.
        /// An example of valid timezone id is "Pacific Standard Time" or "W. Europe Standard Time".
        /// </summary>
        public readonly string? TimezoneId;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The number of vCores. Allowed values: 8, 16, 24, 32, 40, 64, 80.
        /// </summary>
        public readonly int? VCores;

        [OutputConstructor]
        private GetManagedInstanceResult(
            string? administratorLogin,

            string? administratorLoginPassword,

            string? collation,

            string dnsZone,

            string? dnsZonePartner,

            string fullyQualifiedDomainName,

            string id,

            Outputs.ResourceIdentityResponse? identity,

            string? instancePoolId,

            string? licenseType,

            string location,

            string? maintenanceConfigurationId,

            string? managedInstanceCreateMode,

            string? minimalTlsVersion,

            string name,

            string? proxyOverride,

            bool? publicDataEndpointEnabled,

            string? restorePointInTime,

            Outputs.SkuResponse? sku,

            string? sourceManagedInstanceId,

            string state,

            int? storageSizeInGB,

            string? subnetId,

            ImmutableDictionary<string, string>? tags,

            string? timezoneId,

            string type,

            int? vCores)
        {
            AdministratorLogin = administratorLogin;
            AdministratorLoginPassword = administratorLoginPassword;
            Collation = collation;
            DnsZone = dnsZone;
            DnsZonePartner = dnsZonePartner;
            FullyQualifiedDomainName = fullyQualifiedDomainName;
            Id = id;
            Identity = identity;
            InstancePoolId = instancePoolId;
            LicenseType = licenseType;
            Location = location;
            MaintenanceConfigurationId = maintenanceConfigurationId;
            ManagedInstanceCreateMode = managedInstanceCreateMode;
            MinimalTlsVersion = minimalTlsVersion;
            Name = name;
            ProxyOverride = proxyOverride;
            PublicDataEndpointEnabled = publicDataEndpointEnabled;
            RestorePointInTime = restorePointInTime;
            Sku = sku;
            SourceManagedInstanceId = sourceManagedInstanceId;
            State = state;
            StorageSizeInGB = storageSizeInGB;
            SubnetId = subnetId;
            Tags = tags;
            TimezoneId = timezoneId;
            Type = type;
            VCores = vCores;
        }
    }
}
