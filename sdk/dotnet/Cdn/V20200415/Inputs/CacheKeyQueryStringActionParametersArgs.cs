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
    /// Defines the parameters for the cache-key query string action.
    /// </summary>
    public sealed class CacheKeyQueryStringActionParametersArgs : Pulumi.ResourceArgs
    {
        [Input("odataType", required: true)]
        public Input<string> OdataType { get; set; } = null!;

        /// <summary>
        /// query parameters to include or exclude (comma separated).
        /// </summary>
        [Input("queryParameters")]
        public Input<string>? QueryParameters { get; set; }

        /// <summary>
        /// Caching behavior for the requests
        /// </summary>
        [Input("queryStringBehavior", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.Cdn.V20200415.QueryStringBehavior> QueryStringBehavior { get; set; } = null!;

        public CacheKeyQueryStringActionParametersArgs()
        {
        }
    }
}
