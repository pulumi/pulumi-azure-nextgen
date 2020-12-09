// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Storage.V20190601.Outputs
{

    [OutputType]
    public sealed class RestorePolicyPropertiesResponse
    {
        /// <summary>
        /// how long this blob can be restored. It should be great than zero and less than DeleteRetentionPolicy.days.
        /// </summary>
        public readonly int? Days;
        /// <summary>
        /// Blob restore is enabled if set to true.
        /// </summary>
        public readonly bool Enabled;
        /// <summary>
        /// Deprecated in favor of minRestoreTime property.
        /// </summary>
        public readonly string LastEnabledTime;
        /// <summary>
        /// Returns the minimum date and time that the restore can be started.
        /// </summary>
        public readonly string MinRestoreTime;

        [OutputConstructor]
        private RestorePolicyPropertiesResponse(
            int? days,

            bool enabled,

            string lastEnabledTime,

            string minRestoreTime)
        {
            Days = days;
            Enabled = enabled;
            LastEnabledTime = lastEnabledTime;
            MinRestoreTime = minRestoreTime;
        }
    }
}