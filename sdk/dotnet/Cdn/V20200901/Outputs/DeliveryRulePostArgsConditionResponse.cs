// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Cdn.V20200901.Outputs
{

    [OutputType]
    public sealed class DeliveryRulePostArgsConditionResponse
    {
        /// <summary>
        /// The name of the condition for the delivery rule.
        /// Expected value is 'PostArgs'.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Defines the parameters for the condition.
        /// </summary>
        public readonly Outputs.PostArgsMatchConditionParametersResponse Parameters;

        [OutputConstructor]
        private DeliveryRulePostArgsConditionResponse(
            string name,

            Outputs.PostArgsMatchConditionParametersResponse parameters)
        {
            Name = name;
            Parameters = parameters;
        }
    }
}
