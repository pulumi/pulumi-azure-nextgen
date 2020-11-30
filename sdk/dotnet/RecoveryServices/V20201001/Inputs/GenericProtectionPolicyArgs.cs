// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.V20201001.Inputs
{

    /// <summary>
    /// Azure VM (Mercury) workload-specific backup policy.
    /// </summary>
    public sealed class GenericProtectionPolicyArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types.
        /// </summary>
        [Input("backupManagementType", required: true)]
        public Input<string> BackupManagementType { get; set; } = null!;

        /// <summary>
        /// Name of this policy's fabric.
        /// </summary>
        [Input("fabricName")]
        public Input<string>? FabricName { get; set; }

        /// <summary>
        /// Number of items associated with this policy.
        /// </summary>
        [Input("protectedItemsCount")]
        public Input<int>? ProtectedItemsCount { get; set; }

        [Input("subProtectionPolicy")]
        private InputList<Inputs.SubProtectionPolicyArgs>? _subProtectionPolicy;

        /// <summary>
        /// List of sub-protection policies which includes schedule and retention
        /// </summary>
        public InputList<Inputs.SubProtectionPolicyArgs> SubProtectionPolicy
        {
            get => _subProtectionPolicy ?? (_subProtectionPolicy = new InputList<Inputs.SubProtectionPolicyArgs>());
            set => _subProtectionPolicy = value;
        }

        /// <summary>
        /// TimeZone optional input as string. For example: TimeZone = "Pacific Standard Time".
        /// </summary>
        [Input("timeZone")]
        public Input<string>? TimeZone { get; set; }

        public GenericProtectionPolicyArgs()
        {
        }
    }
}
