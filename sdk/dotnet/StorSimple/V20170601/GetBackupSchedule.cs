// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.StorSimple.V20170601
{
    public static class GetBackupSchedule
    {
        public static Task<GetBackupScheduleResult> InvokeAsync(GetBackupScheduleArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetBackupScheduleResult>("azure-nextgen:storsimple/v20170601:getBackupSchedule", args ?? new GetBackupScheduleArgs(), options.WithVersion());
    }


    public sealed class GetBackupScheduleArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The backup policy name.
        /// </summary>
        [Input("backupPolicyName", required: true)]
        public string BackupPolicyName { get; set; } = null!;

        /// <summary>
        /// The name of the backup schedule to be fetched
        /// </summary>
        [Input("backupScheduleName", required: true)]
        public string BackupScheduleName { get; set; } = null!;

        /// <summary>
        /// The device name
        /// </summary>
        [Input("deviceName", required: true)]
        public string DeviceName { get; set; } = null!;

        /// <summary>
        /// The manager name
        /// </summary>
        [Input("managerName", required: true)]
        public string ManagerName { get; set; } = null!;

        /// <summary>
        /// The resource group name
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetBackupScheduleArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetBackupScheduleResult
    {
        /// <summary>
        /// The type of backup which needs to be taken.
        /// </summary>
        public readonly string BackupType;
        /// <summary>
        /// The path ID that uniquely identifies the object.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The Kind of the object. Currently only Series8000 is supported
        /// </summary>
        public readonly string? Kind;
        /// <summary>
        /// The last successful backup run which was triggered for the schedule.
        /// </summary>
        public readonly string LastSuccessfulRun;
        /// <summary>
        /// The name of the object.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The number of backups to be retained.
        /// </summary>
        public readonly int RetentionCount;
        /// <summary>
        /// The schedule recurrence.
        /// </summary>
        public readonly Outputs.ScheduleRecurrenceResponse ScheduleRecurrence;
        /// <summary>
        /// The schedule status.
        /// </summary>
        public readonly string ScheduleStatus;
        /// <summary>
        /// The start time of the schedule.
        /// </summary>
        public readonly string StartTime;
        /// <summary>
        /// The hierarchical type of the object.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetBackupScheduleResult(
            string backupType,

            string id,

            string? kind,

            string lastSuccessfulRun,

            string name,

            int retentionCount,

            Outputs.ScheduleRecurrenceResponse scheduleRecurrence,

            string scheduleStatus,

            string startTime,

            string type)
        {
            BackupType = backupType;
            Id = id;
            Kind = kind;
            LastSuccessfulRun = lastSuccessfulRun;
            Name = name;
            RetentionCount = retentionCount;
            ScheduleRecurrence = scheduleRecurrence;
            ScheduleStatus = scheduleStatus;
            StartTime = startTime;
            Type = type;
        }
    }
}
