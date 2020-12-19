// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.Latest.Outputs
{

    [OutputType]
    public sealed class AzureRecoveryServiceVaultProtectionIntentResponse
    {
        /// <summary>
        /// Type of backup management for the backed up item.
        /// </summary>
        public readonly string? BackupManagementType;
        /// <summary>
        /// ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
        /// </summary>
        public readonly string? ItemId;
        /// <summary>
        /// ID of the backup policy with which this item is backed up.
        /// </summary>
        public readonly string? PolicyId;
        /// <summary>
        /// backup protectionIntent type.
        /// Expected value is 'RecoveryServiceVaultItem'.
        /// </summary>
        public readonly string? ProtectionIntentItemType;
        /// <summary>
        /// Backup state of this backup item.
        /// </summary>
        public readonly string? ProtectionState;
        /// <summary>
        /// ARM ID of the resource to be backed up.
        /// </summary>
        public readonly string? SourceResourceId;

        [OutputConstructor]
        private AzureRecoveryServiceVaultProtectionIntentResponse(
            string? backupManagementType,

            string? itemId,

            string? policyId,

            string? protectionIntentItemType,

            string? protectionState,

            string? sourceResourceId)
        {
            BackupManagementType = backupManagementType;
            ItemId = itemId;
            PolicyId = policyId;
            ProtectionIntentItemType = protectionIntentItemType;
            ProtectionState = protectionState;
            SourceResourceId = sourceResourceId;
        }
    }
}
