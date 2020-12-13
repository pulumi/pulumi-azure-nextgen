// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.Latest.Inputs
{

    /// <summary>
    /// AzureStorage backup policy.
    /// </summary>
    public sealed class AzureFileShareProtectionPolicyArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
        /// </summary>
        [Input("backupManagementType", required: true)]
        public Input<string> BackupManagementType { get; set; } = null!;

        /// <summary>
        /// Number of items associated with this policy.
        /// </summary>
        [Input("protectedItemsCount")]
        public Input<int>? ProtectedItemsCount { get; set; }

        /// <summary>
        /// Retention policy with the details on backup copy retention ranges.
        /// </summary>
        [Input("retentionPolicy")]
        public InputUnion<Inputs.LongTermRetentionPolicyArgs, Inputs.SimpleRetentionPolicyArgs>? RetentionPolicy { get; set; }

        /// <summary>
        /// Backup schedule specified as part of backup policy.
        /// </summary>
        [Input("schedulePolicy")]
        public InputUnion<Inputs.LogSchedulePolicyArgs, InputUnion<Inputs.LongTermSchedulePolicyArgs, Inputs.SimpleSchedulePolicyArgs>>? SchedulePolicy { get; set; }

        /// <summary>
        /// TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".
        /// </summary>
        [Input("timeZone")]
        public Input<string>? TimeZone { get; set; }

        /// <summary>
        /// Type of workload for the backup management
        /// </summary>
        [Input("workLoadType")]
        public InputUnion<string, Pulumi.AzureNextGen.RecoveryServices.Latest.WorkloadType>? WorkLoadType { get; set; }

        public AzureFileShareProtectionPolicyArgs()
        {
        }
    }
}
