// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.StorageSync.V20181001
{
    public static class GetServerEndpoint
    {
        public static Task<GetServerEndpointResult> InvokeAsync(GetServerEndpointArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetServerEndpointResult>("azure-nextgen:storagesync/v20181001:getServerEndpoint", args ?? new GetServerEndpointArgs(), options.WithVersion());
    }


    public sealed class GetServerEndpointArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Name of Server Endpoint object.
        /// </summary>
        [Input("serverEndpointName", required: true)]
        public string ServerEndpointName { get; set; } = null!;

        /// <summary>
        /// Name of Storage Sync Service resource.
        /// </summary>
        [Input("storageSyncServiceName", required: true)]
        public string StorageSyncServiceName { get; set; } = null!;

        /// <summary>
        /// Name of Sync Group resource.
        /// </summary>
        [Input("syncGroupName", required: true)]
        public string SyncGroupName { get; set; } = null!;

        public GetServerEndpointArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetServerEndpointResult
    {
        /// <summary>
        /// Cloud Tiering.
        /// </summary>
        public readonly string? CloudTiering;
        /// <summary>
        /// Friendly Name
        /// </summary>
        public readonly string? FriendlyName;
        /// <summary>
        /// Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource Last Operation Name
        /// </summary>
        public readonly string? LastOperationName;
        /// <summary>
        /// ServerEndpoint lastWorkflowId
        /// </summary>
        public readonly string? LastWorkflowId;
        /// <summary>
        /// The name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Offline data transfer
        /// </summary>
        public readonly string? OfflineDataTransfer;
        /// <summary>
        /// Offline data transfer share name
        /// </summary>
        public readonly string? OfflineDataTransferShareName;
        /// <summary>
        /// Offline data transfer storage account resource ID
        /// </summary>
        public readonly string OfflineDataTransferStorageAccountResourceId;
        /// <summary>
        /// Offline data transfer storage account tenant ID
        /// </summary>
        public readonly string OfflineDataTransferStorageAccountTenantId;
        /// <summary>
        /// ServerEndpoint Provisioning State
        /// </summary>
        public readonly string? ProvisioningState;
        /// <summary>
        /// Server Local path.
        /// </summary>
        public readonly string? ServerLocalPath;
        /// <summary>
        /// Server Resource Id.
        /// </summary>
        public readonly string? ServerResourceId;
        /// <summary>
        /// Server Endpoint properties.
        /// </summary>
        public readonly Outputs.ServerEndpointHealthResponse? SyncStatus;
        /// <summary>
        /// Tier files older than days.
        /// </summary>
        public readonly int? TierFilesOlderThanDays;
        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Level of free space to be maintained by Cloud Tiering if it is enabled.
        /// </summary>
        public readonly int? VolumeFreeSpacePercent;

        [OutputConstructor]
        private GetServerEndpointResult(
            string? cloudTiering,

            string? friendlyName,

            string id,

            string? lastOperationName,

            string? lastWorkflowId,

            string name,

            string? offlineDataTransfer,

            string? offlineDataTransferShareName,

            string offlineDataTransferStorageAccountResourceId,

            string offlineDataTransferStorageAccountTenantId,

            string? provisioningState,

            string? serverLocalPath,

            string? serverResourceId,

            Outputs.ServerEndpointHealthResponse? syncStatus,

            int? tierFilesOlderThanDays,

            string type,

            int? volumeFreeSpacePercent)
        {
            CloudTiering = cloudTiering;
            FriendlyName = friendlyName;
            Id = id;
            LastOperationName = lastOperationName;
            LastWorkflowId = lastWorkflowId;
            Name = name;
            OfflineDataTransfer = offlineDataTransfer;
            OfflineDataTransferShareName = offlineDataTransferShareName;
            OfflineDataTransferStorageAccountResourceId = offlineDataTransferStorageAccountResourceId;
            OfflineDataTransferStorageAccountTenantId = offlineDataTransferStorageAccountTenantId;
            ProvisioningState = provisioningState;
            ServerLocalPath = serverLocalPath;
            ServerResourceId = serverResourceId;
            SyncStatus = syncStatus;
            TierFilesOlderThanDays = tierFilesOlderThanDays;
            Type = type;
            VolumeFreeSpacePercent = volumeFreeSpacePercent;
        }
    }
}
