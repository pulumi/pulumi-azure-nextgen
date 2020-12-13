// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.HDInsight.V20150301Preview.Inputs
{

    /// <summary>
    /// The network properties.
    /// </summary>
    public sealed class NetworkPropertiesArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Indicates whether or not private link is enabled.
        /// </summary>
        [Input("privateLink")]
        public InputUnion<string, Pulumi.AzureNextGen.HDInsight.V20150301Preview.PrivateLink>? PrivateLink { get; set; }

        /// <summary>
        /// The direction for the resource provider connection.
        /// </summary>
        [Input("resourceProviderConnection")]
        public InputUnion<string, Pulumi.AzureNextGen.HDInsight.V20150301Preview.ResourceProviderConnection>? ResourceProviderConnection { get; set; }

        public NetworkPropertiesArgs()
        {
        }
    }
}
