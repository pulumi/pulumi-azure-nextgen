// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Cdn.V20200415.Inputs
{

    /// <summary>
    /// Defines the QueryString condition for the delivery rule.
    /// </summary>
    public sealed class DeliveryRuleQueryStringConditionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the condition for the delivery rule.
        /// Expected value is 'QueryString'.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// Defines the parameters for the condition.
        /// </summary>
        [Input("parameters", required: true)]
        public Input<Inputs.QueryStringMatchConditionParametersArgs> Parameters { get; set; } = null!;

        public DeliveryRuleQueryStringConditionArgs()
        {
        }
    }
}
