// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.V20201001.Outputs
{

    [OutputType]
    public sealed class MabFileFolderProtectedItemResponse
    {
        /// <summary>
        /// Type of backup management for the backed up item.
        /// </summary>
        public readonly string? BackupManagementType;
        /// <summary>
        /// Name of the backup set the backup item belongs to
        /// </summary>
        public readonly string? BackupSetName;
        /// <summary>
        /// Name of the computer associated with this backup item.
        /// </summary>
        public readonly string? ComputerName;
        /// <summary>
        /// Unique name of container
        /// </summary>
        public readonly string? ContainerName;
        /// <summary>
        /// Create mode to indicate recovery of existing soft deleted data source or creation of new data source.
        /// </summary>
        public readonly string? CreateMode;
        /// <summary>
        /// Sync time for deferred deletion in UTC
        /// </summary>
        public readonly int? DeferredDeleteSyncTimeInUTC;
        /// <summary>
        /// Time for deferred deletion in UTC
        /// </summary>
        public readonly string? DeferredDeleteTimeInUTC;
        /// <summary>
        /// Time remaining before the DS marked for deferred delete is permanently deleted
        /// </summary>
        public readonly string? DeferredDeleteTimeRemaining;
        /// <summary>
        /// Additional information with this backup item.
        /// </summary>
        public readonly Outputs.MabFileFolderProtectedItemExtendedInfoResponse? ExtendedInfo;
        /// <summary>
        /// Friendly name of this backup item.
        /// </summary>
        public readonly string? FriendlyName;
        /// <summary>
        /// Flag to identify whether the deferred deleted DS is to be purged soon
        /// </summary>
        public readonly bool? IsDeferredDeleteScheduleUpcoming;
        /// <summary>
        /// Flag to identify that deferred deleted DS is to be moved into Pause state
        /// </summary>
        public readonly bool? IsRehydrate;
        /// <summary>
        /// Flag to identify whether the DS is scheduled for deferred delete
        /// </summary>
        public readonly bool? IsScheduledForDeferredDelete;
        /// <summary>
        /// Status of last backup operation.
        /// </summary>
        public readonly string? LastBackupStatus;
        /// <summary>
        /// Timestamp of the last backup operation on this backup item.
        /// </summary>
        public readonly string? LastBackupTime;
        /// <summary>
        /// Timestamp when the last (latest) backup copy was created for this backup item.
        /// </summary>
        public readonly string? LastRecoveryPoint;
        /// <summary>
        /// ID of the backup policy with which this item is backed up.
        /// </summary>
        public readonly string? PolicyId;
        /// <summary>
        /// backup item type.
        /// </summary>
        public readonly string ProtectedItemType;
        /// <summary>
        /// Protected, ProtectionStopped, IRPending or ProtectionError
        /// </summary>
        public readonly string? ProtectionState;
        /// <summary>
        /// ARM ID of the resource to be backed up.
        /// </summary>
        public readonly string? SourceResourceId;
        /// <summary>
        /// Type of workload this item represents.
        /// </summary>
        public readonly string? WorkloadType;

        [OutputConstructor]
        private MabFileFolderProtectedItemResponse(
            string? backupManagementType,

            string? backupSetName,

            string? computerName,

            string? containerName,

            string? createMode,

            int? deferredDeleteSyncTimeInUTC,

            string? deferredDeleteTimeInUTC,

            string? deferredDeleteTimeRemaining,

            Outputs.MabFileFolderProtectedItemExtendedInfoResponse? extendedInfo,

            string? friendlyName,

            bool? isDeferredDeleteScheduleUpcoming,

            bool? isRehydrate,

            bool? isScheduledForDeferredDelete,

            string? lastBackupStatus,

            string? lastBackupTime,

            string? lastRecoveryPoint,

            string? policyId,

            string protectedItemType,

            string? protectionState,

            string? sourceResourceId,

            string? workloadType)
        {
            BackupManagementType = backupManagementType;
            BackupSetName = backupSetName;
            ComputerName = computerName;
            ContainerName = containerName;
            CreateMode = createMode;
            DeferredDeleteSyncTimeInUTC = deferredDeleteSyncTimeInUTC;
            DeferredDeleteTimeInUTC = deferredDeleteTimeInUTC;
            DeferredDeleteTimeRemaining = deferredDeleteTimeRemaining;
            ExtendedInfo = extendedInfo;
            FriendlyName = friendlyName;
            IsDeferredDeleteScheduleUpcoming = isDeferredDeleteScheduleUpcoming;
            IsRehydrate = isRehydrate;
            IsScheduledForDeferredDelete = isScheduledForDeferredDelete;
            LastBackupStatus = lastBackupStatus;
            LastBackupTime = lastBackupTime;
            LastRecoveryPoint = lastRecoveryPoint;
            PolicyId = policyId;
            ProtectedItemType = protectedItemType;
            ProtectionState = protectionState;
            SourceResourceId = sourceResourceId;
            WorkloadType = workloadType;
        }
    }
}
