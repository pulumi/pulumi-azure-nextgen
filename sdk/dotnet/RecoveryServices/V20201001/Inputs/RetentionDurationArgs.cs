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
    /// Retention duration.
    /// </summary>
    public sealed class RetentionDurationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Count of duration types. Retention duration is obtained by the counting the duration type Count times.
        /// For example, when Count = 3 and DurationType = Weeks, retention duration will be three weeks.
        /// </summary>
        [Input("count")]
        public Input<int>? Count { get; set; }

        /// <summary>
        /// Retention duration type of retention policy.
        /// </summary>
        [Input("durationType")]
        public Input<string>? DurationType { get; set; }

        public RetentionDurationArgs()
        {
        }
    }
}