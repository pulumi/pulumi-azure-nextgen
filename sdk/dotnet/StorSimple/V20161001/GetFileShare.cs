// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.StorSimple.V20161001
{
    public static class GetFileShare
    {
        public static Task<GetFileShareResult> InvokeAsync(GetFileShareArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetFileShareResult>("azure-nextgen:storsimple/v20161001:getFileShare", args ?? new GetFileShareArgs(), options.WithVersion());
    }


    public sealed class GetFileShareArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The device name.
        /// </summary>
        [Input("deviceName", required: true)]
        public string DeviceName { get; set; } = null!;

        /// <summary>
        /// The file server name.
        /// </summary>
        [Input("fileServerName", required: true)]
        public string FileServerName { get; set; } = null!;

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
        /// The file share name.
        /// </summary>
        [Input("shareName", required: true)]
        public string ShareName { get; set; } = null!;

        public GetFileShareArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetFileShareResult
    {
        /// <summary>
        /// The user/group who will have full permission in this share. Active directory email address. Example: xyz@contoso.com or Contoso\xyz.
        /// </summary>
        public readonly string AdminUser;
        /// <summary>
        /// The data policy
        /// </summary>
        public readonly string DataPolicy;
        /// <summary>
        /// Description for file share
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// The identifier.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The local used capacity in Bytes.
        /// </summary>
        public readonly int LocalUsedCapacityInBytes;
        /// <summary>
        /// The monitoring status
        /// </summary>
        public readonly string MonitoringStatus;
        /// <summary>
        /// The name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The total provisioned capacity in Bytes
        /// </summary>
        public readonly int ProvisionedCapacityInBytes;
        /// <summary>
        /// The Share Status
        /// </summary>
        public readonly string ShareStatus;
        /// <summary>
        /// The type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The used capacity in Bytes.
        /// </summary>
        public readonly int UsedCapacityInBytes;

        [OutputConstructor]
        private GetFileShareResult(
            string adminUser,

            string dataPolicy,

            string? description,

            string id,

            int localUsedCapacityInBytes,

            string monitoringStatus,

            string name,

            int provisionedCapacityInBytes,

            string shareStatus,

            string type,

            int usedCapacityInBytes)
        {
            AdminUser = adminUser;
            DataPolicy = dataPolicy;
            Description = description;
            Id = id;
            LocalUsedCapacityInBytes = localUsedCapacityInBytes;
            MonitoringStatus = monitoringStatus;
            Name = name;
            ProvisionedCapacityInBytes = provisionedCapacityInBytes;
            ShareStatus = shareStatus;
            Type = type;
            UsedCapacityInBytes = usedCapacityInBytes;
        }
    }
}
