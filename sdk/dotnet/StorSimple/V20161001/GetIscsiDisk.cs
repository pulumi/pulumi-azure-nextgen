// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.StorSimple.V20161001
{
    public static class GetIscsiDisk
    {
        public static Task<GetIscsiDiskResult> InvokeAsync(GetIscsiDiskArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetIscsiDiskResult>("azure-nextgen:storsimple/v20161001:getIscsiDisk", args ?? new GetIscsiDiskArgs(), options.WithVersion());
    }


    public sealed class GetIscsiDiskArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The device name.
        /// </summary>
        [Input("deviceName", required: true)]
        public string DeviceName { get; set; } = null!;

        /// <summary>
        /// The disk name.
        /// </summary>
        [Input("diskName", required: true)]
        public string DiskName { get; set; } = null!;

        /// <summary>
        /// The iSCSI server name.
        /// </summary>
        [Input("iscsiServerName", required: true)]
        public string IscsiServerName { get; set; } = null!;

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

        public GetIscsiDiskArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetIscsiDiskResult
    {
        /// <summary>
        /// The access control records.
        /// </summary>
        public readonly ImmutableArray<string> AccessControlRecords;
        /// <summary>
        /// The data policy.
        /// </summary>
        public readonly string DataPolicy;
        /// <summary>
        /// The description.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// The disk status.
        /// </summary>
        public readonly string DiskStatus;
        /// <summary>
        /// The identifier.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The local used capacity in bytes.
        /// </summary>
        public readonly int LocalUsedCapacityInBytes;
        /// <summary>
        /// The monitoring.
        /// </summary>
        public readonly string MonitoringStatus;
        /// <summary>
        /// The name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The provisioned capacity in bytes.
        /// </summary>
        public readonly int ProvisionedCapacityInBytes;
        /// <summary>
        /// The type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The used capacity in bytes.
        /// </summary>
        public readonly int UsedCapacityInBytes;

        [OutputConstructor]
        private GetIscsiDiskResult(
            ImmutableArray<string> accessControlRecords,

            string dataPolicy,

            string? description,

            string diskStatus,

            string id,

            int localUsedCapacityInBytes,

            string monitoringStatus,

            string name,

            int provisionedCapacityInBytes,

            string type,

            int usedCapacityInBytes)
        {
            AccessControlRecords = accessControlRecords;
            DataPolicy = dataPolicy;
            Description = description;
            DiskStatus = diskStatus;
            Id = id;
            LocalUsedCapacityInBytes = localUsedCapacityInBytes;
            MonitoringStatus = monitoringStatus;
            Name = name;
            ProvisionedCapacityInBytes = provisionedCapacityInBytes;
            Type = type;
            UsedCapacityInBytes = usedCapacityInBytes;
        }
    }
}
