// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.V20170701.Inputs
{

    /// <summary>
    /// IaaS VM specific backup protection intent item.
    /// </summary>
    public sealed class AzureResourceProtectionIntentArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Type of backup management for the backed up item.
        /// </summary>
        [Input("backupManagementType")]
        public InputUnion<string, Pulumi.AzureNextGen.RecoveryServices.V20170701.BackupManagementType>? BackupManagementType { get; set; }

        /// <summary>
        /// Friendly name of the VM represented by this backup item.
        /// </summary>
        [Input("friendlyName")]
        public Input<string>? FriendlyName { get; set; }

        /// <summary>
        /// ID of the item which is getting protected, In case of Azure Vm , it is ProtectedItemId
        /// </summary>
        [Input("itemId")]
        public Input<string>? ItemId { get; set; }

        /// <summary>
        /// ID of the backup policy with which this item is backed up.
        /// </summary>
        [Input("policyId")]
        public Input<string>? PolicyId { get; set; }

        /// <summary>
        /// backup protectionIntent type.
        /// </summary>
        [Input("protectionIntentItemType")]
        public Input<string>? ProtectionIntentItemType { get; set; }

        /// <summary>
        /// Backup state of this backup item.
        /// </summary>
        [Input("protectionState")]
        public InputUnion<string, Pulumi.AzureNextGen.RecoveryServices.V20170701.ProtectionStatus>? ProtectionState { get; set; }

        /// <summary>
        /// ARM ID of the resource to be backed up.
        /// </summary>
        [Input("sourceResourceId")]
        public Input<string>? SourceResourceId { get; set; }

        public AzureResourceProtectionIntentArgs()
        {
        }
    }
}
