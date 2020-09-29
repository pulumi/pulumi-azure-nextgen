// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Cdn.V20200331.Outputs
{

    [OutputType]
    public sealed class RequestHeaderMatchConditionParametersResponse
    {
        /// <summary>
        /// The match value for the condition of the delivery rule
        /// </summary>
        public readonly ImmutableArray<string> MatchValues;
        /// <summary>
        /// Describes if this is negate condition or not
        /// </summary>
        public readonly bool? NegateCondition;
        public readonly string OdataType;
        /// <summary>
        /// Describes operator to be matched
        /// </summary>
        public readonly string Operator;
        /// <summary>
        /// Name of Header to be matched
        /// </summary>
        public readonly string? Selector;
        /// <summary>
        /// List of transforms
        /// </summary>
        public readonly ImmutableArray<string> Transforms;

        [OutputConstructor]
        private RequestHeaderMatchConditionParametersResponse(
            ImmutableArray<string> matchValues,

            bool? negateCondition,

            string odataType,

            string @operator,

            string? selector,

            ImmutableArray<string> transforms)
        {
            MatchValues = matchValues;
            NegateCondition = negateCondition;
            OdataType = odataType;
            Operator = @operator;
            Selector = selector;
            Transforms = transforms;
        }
    }
}
