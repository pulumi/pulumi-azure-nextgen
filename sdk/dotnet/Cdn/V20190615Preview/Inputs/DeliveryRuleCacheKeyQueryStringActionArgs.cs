// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Cdn.V20190615Preview.Inputs
{

    /// <summary>
    /// Defines the cache-key query string action for the delivery rule.
    /// </summary>
    public sealed class DeliveryRuleCacheKeyQueryStringActionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the action for the delivery rule.
        /// Expected value is 'CacheKeyQueryString'.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// Defines the parameters for the action.
        /// </summary>
        [Input("parameters", required: true)]
        public Input<Inputs.CacheKeyQueryStringActionParametersArgs> Parameters { get; set; } = null!;

        public DeliveryRuleCacheKeyQueryStringActionArgs()
        {
        }
    }
}
