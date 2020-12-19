// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.EventGrid.V20180915Preview.Outputs
{

    [OutputType]
    public sealed class NumberLessThanAdvancedFilterResponse
    {
        /// <summary>
        /// The filter key. Represents an event property with up to two levels of nesting.
        /// </summary>
        public readonly string? Key;
        /// <summary>
        /// Represents the filter operator
        /// Expected value is 'NumberLessThan'.
        /// </summary>
        public readonly string OperatorType;
        /// <summary>
        /// The filter value
        /// </summary>
        public readonly double? Value;

        [OutputConstructor]
        private NumberLessThanAdvancedFilterResponse(
            string? key,

            string operatorType,

            double? value)
        {
            Key = key;
            OperatorType = operatorType;
            Value = value;
        }
    }
}
