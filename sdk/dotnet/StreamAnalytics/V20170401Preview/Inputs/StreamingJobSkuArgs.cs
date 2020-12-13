// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.StreamAnalytics.V20170401Preview.Inputs
{

    /// <summary>
    /// The properties that are associated with a SKU.
    /// </summary>
    public sealed class StreamingJobSkuArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the SKU. Required on PUT (CreateOrReplace) requests.
        /// </summary>
        [Input("name")]
        public InputUnion<string, Pulumi.AzureNextGen.StreamAnalytics.V20170401Preview.StreamingJobSkuName>? Name { get; set; }

        public StreamingJobSkuArgs()
        {
        }
    }
}
