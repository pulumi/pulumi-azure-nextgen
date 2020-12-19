// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DocumentDB.Latest.Inputs
{

    /// <summary>
    /// The object representing periodic mode backup policy.
    /// </summary>
    public sealed class PeriodicModeBackupPolicyArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Configuration values for periodic mode backup
        /// </summary>
        [Input("periodicModeProperties")]
        public Input<Inputs.PeriodicModePropertiesArgs>? PeriodicModeProperties { get; set; }

        /// <summary>
        /// Describes the mode of backups.
        /// Expected value is 'Periodic'.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        public PeriodicModeBackupPolicyArgs()
        {
        }
    }
}
