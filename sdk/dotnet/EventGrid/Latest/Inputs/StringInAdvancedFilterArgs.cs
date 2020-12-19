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
    /// StringIn Advanced Filter.
    /// </summary>
    public sealed class StringInAdvancedFilterArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The field/property in the event based on which you want to filter.
        /// </summary>
        [Input("key")]
        public Input<string>? Key { get; set; }

        /// <summary>
        /// The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
        /// Expected value is 'StringIn'.
        /// </summary>
        [Input("operatorType", required: true)]
        public Input<string> OperatorType { get; set; } = null!;

        [Input("values")]
        private InputList<string>? _values;

        /// <summary>
        /// The set of filter values.
        /// </summary>
        public InputList<string> Values
        {
            get => _values ?? (_values = new InputList<string>());
            set => _values = value;
        }

        public StringInAdvancedFilterArgs()
        {
        }
    }
}
