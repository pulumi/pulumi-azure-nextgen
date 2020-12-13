// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Maintenance.V20200701Preview
{
    public static class GetMaintenanceConfiguration
    {
        public static Task<GetMaintenanceConfigurationResult> InvokeAsync(GetMaintenanceConfigurationArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetMaintenanceConfigurationResult>("azure-nextgen:maintenance/v20200701preview:getMaintenanceConfiguration", args ?? new GetMaintenanceConfigurationArgs(), options.WithVersion());
    }


    public sealed class GetMaintenanceConfigurationArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Resource Group Name
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Resource Identifier
        /// </summary>
        [Input("resourceName", required: true)]
        public string ResourceName { get; set; } = null!;

        public GetMaintenanceConfigurationArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetMaintenanceConfigurationResult
    {
        /// <summary>
        /// Duration of the maintenance window in HH:mm format. If not provided, default value will be used based on maintenance scope provided. Example: 05:00.
        /// </summary>
        public readonly string? Duration;
        /// <summary>
        /// Effective expiration date of the maintenance window in YYYY-MM-DD hh:mm format. The window will be created in the time zone provided and adjusted to daylight savings according to that time zone. Expiration date must be set to a future date. If not provided, it will be set to the maximum datetime 9999-12-31 23:59:59.
        /// </summary>
        public readonly string? ExpirationDateTime;
        /// <summary>
        /// Gets or sets extensionProperties of the maintenanceConfiguration
        /// </summary>
        public readonly ImmutableDictionary<string, string>? ExtensionProperties;
        /// <summary>
        /// Fully qualified identifier of the resource
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Gets or sets location of the resource
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Gets or sets maintenanceScope of the configuration
        /// </summary>
        public readonly string? MaintenanceScope;
        /// <summary>
        /// Name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Gets or sets namespace of the resource
        /// </summary>
        public readonly string? Namespace;
        /// <summary>
        /// Rate at which a Maintenance window is expected to recur. The rate can be expressed as daily, weekly, or monthly schedules. Daily schedule are formatted as recurEvery: [Frequency as integer]['Day(s)']. If no frequency is provided, the default frequency is 1. Daily schedule examples are recurEvery: Day, recurEvery: 3Days.  Weekly schedule are formatted as recurEvery: [Frequency as integer]['Week(s)'] [Optional comma separated list of weekdays Monday-Sunday]. Weekly schedule examples are recurEvery: 3Weeks, recurEvery: Week Saturday,Sunday. Monthly schedules are formatted as [Frequency as integer]['Month(s)'] [Comma separated list of month days] or [Frequency as integer]['Month(s)'] [Week of Month (First, Second, Third, Fourth, Last)] [Weekday Monday-Sunday]. Monthly schedule examples are recurEvery: Month, recurEvery: 2Months, recurEvery: Month day23,day24, recurEvery: Month Last Sunday, recurEvery: Month Fourth Monday.
        /// </summary>
        public readonly string? RecurEvery;
        /// <summary>
        /// Effective start date of the maintenance window in YYYY-MM-DD hh:mm format. The start date can be set to either the current date or future date. The window will be created in the time zone provided and adjusted to daylight savings according to that time zone.
        /// </summary>
        public readonly string? StartDateTime;
        /// <summary>
        /// Gets or sets tags of the resource
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Name of the timezone. List of timezones can be obtained by executing [System.TimeZoneInfo]::GetSystemTimeZones() in PowerShell. Example: Pacific Standard Time, UTC, W. Europe Standard Time, Korea Standard Time, Cen. Australia Standard Time.
        /// </summary>
        public readonly string? TimeZone;
        /// <summary>
        /// Type of the resource
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Gets or sets the visibility of the configuration
        /// </summary>
        public readonly string? Visibility;

        [OutputConstructor]
        private GetMaintenanceConfigurationResult(
            string? duration,

            string? expirationDateTime,

            ImmutableDictionary<string, string>? extensionProperties,

            string id,

            string? location,

            string? maintenanceScope,

            string name,

            string? @namespace,

            string? recurEvery,

            string? startDateTime,

            ImmutableDictionary<string, string>? tags,

            string? timeZone,

            string type,

            string? visibility)
        {
            Duration = duration;
            ExpirationDateTime = expirationDateTime;
            ExtensionProperties = extensionProperties;
            Id = id;
            Location = location;
            MaintenanceScope = maintenanceScope;
            Name = name;
            Namespace = @namespace;
            RecurEvery = recurEvery;
            StartDateTime = startDateTime;
            Tags = tags;
            TimeZone = timeZone;
            Type = type;
            Visibility = visibility;
        }
    }
}
