// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Security.V20170801Preview.Inputs
{

    /// <summary>
    /// A custom alert rule that checks if a value (depends on the custom alert type) is within the given range.
    /// </summary>
    public sealed class ThresholdCustomAlertRuleArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Status of the custom alert.
        /// </summary>
        [Input("isEnabled", required: true)]
        public Input<bool> IsEnabled { get; set; } = null!;

        /// <summary>
        /// The maximum threshold.
        /// </summary>
        [Input("maxThreshold", required: true)]
        public Input<int> MaxThreshold { get; set; } = null!;

        /// <summary>
        /// The minimum threshold.
        /// </summary>
        [Input("minThreshold", required: true)]
        public Input<int> MinThreshold { get; set; } = null!;

        /// <summary>
        /// The type of the custom alert rule.
        /// Expected value is 'ThresholdCustomAlertRule'.
        /// </summary>
        [Input("ruleType", required: true)]
        public Input<string> RuleType { get; set; } = null!;

        public ThresholdCustomAlertRuleArgs()
        {
        }
    }
}
