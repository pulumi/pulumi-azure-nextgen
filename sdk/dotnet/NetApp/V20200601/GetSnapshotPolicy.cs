// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.NetApp.V20200601
{
    public static class GetSnapshotPolicy
    {
        public static Task<GetSnapshotPolicyResult> InvokeAsync(GetSnapshotPolicyArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetSnapshotPolicyResult>("azure-nextgen:netapp/v20200601:getSnapshotPolicy", args ?? new GetSnapshotPolicyArgs(), options.WithVersion());
    }


    public sealed class GetSnapshotPolicyArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the NetApp account
        /// </summary>
        [Input("accountName", required: true)]
        public string AccountName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the snapshot policy target
        /// </summary>
        [Input("snapshotPolicyName", required: true)]
        public string SnapshotPolicyName { get; set; } = null!;

        public GetSnapshotPolicyArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetSnapshotPolicyResult
    {
        /// <summary>
        /// Schedule for daily snapshots
        /// </summary>
        public readonly Outputs.DailyScheduleResponse? DailySchedule;
        /// <summary>
        /// The property to decide policy is enabled or not
        /// </summary>
        public readonly bool? Enabled;
        /// <summary>
        /// Schedule for hourly snapshots
        /// </summary>
        public readonly Outputs.HourlyScheduleResponse? HourlySchedule;
        /// <summary>
        /// Resource Id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource location
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Schedule for monthly snapshots
        /// </summary>
        public readonly Outputs.MonthlyScheduleResponse? MonthlySchedule;
        /// <summary>
        /// Snapshot policy name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Azure lifecycle management
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Resource tags
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Schedule for weekly snapshots
        /// </summary>
        public readonly Outputs.WeeklyScheduleResponse? WeeklySchedule;

        [OutputConstructor]
        private GetSnapshotPolicyResult(
            Outputs.DailyScheduleResponse? dailySchedule,

            bool? enabled,

            Outputs.HourlyScheduleResponse? hourlySchedule,

            string id,

            string location,

            Outputs.MonthlyScheduleResponse? monthlySchedule,

            string name,

            string provisioningState,

            ImmutableDictionary<string, string>? tags,

            string type,

            Outputs.WeeklyScheduleResponse? weeklySchedule)
        {
            DailySchedule = dailySchedule;
            Enabled = enabled;
            HourlySchedule = hourlySchedule;
            Id = id;
            Location = location;
            MonthlySchedule = monthlySchedule;
            Name = name;
            ProvisioningState = provisioningState;
            Tags = tags;
            Type = type;
            WeeklySchedule = weeklySchedule;
        }
    }
}
