// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.V20160601.Inputs
{

    /// <summary>
    /// The backup policy for the file or folder container.
    /// </summary>
    public sealed class MabProtectionPolicyArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// This property is used as the discriminator for deciding the specific types in the polymorphic chain of types.
        /// Expected value is 'MAB'.
        /// </summary>
        [Input("backupManagementType")]
        public Input<string>? BackupManagementType { get; set; }

        /// <summary>
        /// The number of items associated with this policy.
        /// </summary>
        [Input("protectedItemsCount")]
        public Input<int>? ProtectedItemsCount { get; set; }

        /// <summary>
        /// The details specified in the Retention policy.
        /// </summary>
        [Input("retentionPolicy")]
        public InputUnion<Inputs.LongTermRetentionPolicyArgs, Inputs.SimpleRetentionPolicyArgs>? RetentionPolicy { get; set; }

        /// <summary>
        /// The schedule specified in the backup policy.
        /// </summary>
        [Input("schedulePolicy")]
        public InputUnion<Inputs.LongTermSchedulePolicyArgs, Inputs.SimpleSchedulePolicyArgs>? SchedulePolicy { get; set; }

        public MabProtectionPolicyArgs()
        {
        }
    }
}
