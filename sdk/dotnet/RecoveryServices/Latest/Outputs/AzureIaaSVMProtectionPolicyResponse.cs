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
    public sealed class AzureIaaSVMProtectionPolicyResponse
    {
        /// <summary>
        /// This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
        /// </summary>
        public readonly string BackupManagementType;
        public readonly Outputs.InstantRPAdditionalDetailsResponse? InstantRPDetails;
        /// <summary>
        /// Instant RP retention policy range in days
        /// </summary>
        public readonly int? InstantRpRetentionRangeInDays;
        /// <summary>
        /// Number of items associated with this policy.
        /// </summary>
        public readonly int? ProtectedItemsCount;
        /// <summary>
        /// Retention policy with the details on backup copy retention ranges.
        /// </summary>
        public readonly Union<Outputs.LongTermRetentionPolicyResponse, Outputs.SimpleRetentionPolicyResponse>? RetentionPolicy;
        /// <summary>
        /// Backup schedule specified as part of backup policy.
        /// </summary>
        public readonly Union<Outputs.LogSchedulePolicyResponse, Union<Outputs.LongTermSchedulePolicyResponse, Outputs.SimpleSchedulePolicyResponse>>? SchedulePolicy;
        /// <summary>
        /// TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".
        /// </summary>
        public readonly string? TimeZone;

        [OutputConstructor]
        private AzureIaaSVMProtectionPolicyResponse(
            string backupManagementType,

            Outputs.InstantRPAdditionalDetailsResponse? instantRPDetails,

            int? instantRpRetentionRangeInDays,

            int? protectedItemsCount,

            Union<Outputs.LongTermRetentionPolicyResponse, Outputs.SimpleRetentionPolicyResponse>? retentionPolicy,

            Union<Outputs.LogSchedulePolicyResponse, Union<Outputs.LongTermSchedulePolicyResponse, Outputs.SimpleSchedulePolicyResponse>>? schedulePolicy,

            string? timeZone)
        {
            BackupManagementType = backupManagementType;
            InstantRPDetails = instantRPDetails;
            InstantRpRetentionRangeInDays = instantRpRetentionRangeInDays;
            ProtectedItemsCount = protectedItemsCount;
            RetentionPolicy = retentionPolicy;
            SchedulePolicy = schedulePolicy;
            TimeZone = timeZone;
        }
    }
}
