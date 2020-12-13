// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.StorSimple.Latest
{
    public static class GetBackupScheduleGroup
    {
        public static Task<GetBackupScheduleGroupResult> InvokeAsync(GetBackupScheduleGroupArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetBackupScheduleGroupResult>("azure-nextgen:storsimple/latest:getBackupScheduleGroup", args ?? new GetBackupScheduleGroupArgs(), options.WithVersion());
    }


    public sealed class GetBackupScheduleGroupArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the device.
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

        /// <summary>
        /// The name of the schedule group.
        /// </summary>
        [Input("scheduleGroupName", required: true)]
        public string ScheduleGroupName { get; set; } = null!;

        public GetBackupScheduleGroupArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetBackupScheduleGroupResult
    {
        /// <summary>
        /// The identifier.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The start time. When this field is specified we will generate Default GrandFather Father Son Backup Schedules.
        /// </summary>
        public readonly Outputs.TimeResponse StartTime;
        /// <summary>
        /// The type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetBackupScheduleGroupResult(
            string id,

            string name,

            Outputs.TimeResponse startTime,

            string type)
        {
            Id = id;
            Name = name;
            StartTime = startTime;
            Type = type;
        }
    }
}
