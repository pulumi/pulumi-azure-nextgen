// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Cdn.V20190415.Inputs
{

    /// <summary>
    /// Defines the parameters for the cache expiration action.
    /// </summary>
    public sealed class CacheExpirationActionParametersArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Caching behavior for the requests
        /// </summary>
        [Input("cacheBehavior", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.Cdn.V20190415.CacheBehavior> CacheBehavior { get; set; } = null!;

        /// <summary>
        /// The duration for which the content needs to be cached. Allowed format is [d.]hh:mm:ss
        /// </summary>
        [Input("cacheDuration")]
        public Input<string>? CacheDuration { get; set; }

        /// <summary>
        /// The level at which the content needs to be cached.
        /// </summary>
        [Input("cacheType", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.Cdn.V20190415.CacheType> CacheType { get; set; } = null!;

        [Input("odataType", required: true)]
        public Input<string> OdataType { get; set; } = null!;

        public CacheExpirationActionParametersArgs()
        {
        }
    }
}
