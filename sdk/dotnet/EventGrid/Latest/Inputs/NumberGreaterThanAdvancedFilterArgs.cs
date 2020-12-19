// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.EventGrid.Latest.Inputs
{

    /// <summary>
    /// NumberGreaterThan Advanced Filter.
    /// </summary>
    public sealed class NumberGreaterThanAdvancedFilterArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The field/property in the event based on which you want to filter.
        /// </summary>
        [Input("key")]
        public Input<string>? Key { get; set; }

        /// <summary>
        /// The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
        /// Expected value is 'NumberGreaterThan'.
        /// </summary>
        [Input("operatorType", required: true)]
        public Input<string> OperatorType { get; set; } = null!;

        /// <summary>
        /// The filter value.
        /// </summary>
        [Input("value")]
        public Input<double>? Value { get; set; }

        public NumberGreaterThanAdvancedFilterArgs()
        {
        }
    }
}
