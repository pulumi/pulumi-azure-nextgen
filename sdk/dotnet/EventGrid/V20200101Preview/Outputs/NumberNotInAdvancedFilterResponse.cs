// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.EventGrid.V20200101Preview.Outputs
{

    [OutputType]
    public sealed class NumberNotInAdvancedFilterResponse
    {
        /// <summary>
        /// The field/property in the event based on which you want to filter.
        /// </summary>
        public readonly string? Key;
        /// <summary>
        /// The operator type used for filtering, e.g., NumberIn, StringContains, BoolEquals and others.
        /// Expected value is 'NumberNotIn'.
        /// </summary>
        public readonly string OperatorType;
        /// <summary>
        /// The set of filter values.
        /// </summary>
        public readonly ImmutableArray<double> Values;

        [OutputConstructor]
        private NumberNotInAdvancedFilterResponse(
            string? key,

            string operatorType,

            ImmutableArray<double> values)
        {
            Key = key;
            OperatorType = operatorType;
            Values = values;
        }
    }
}
