// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Synapse.Latest.Inputs
{

    /// <summary>
    /// Auto-scaling properties of a Big Data pool powered by Apache Spark
    /// </summary>
    public sealed class AutoScalePropertiesArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Whether automatic scaling is enabled for the Big Data pool.
        /// </summary>
        [Input("enabled")]
        public Input<bool>? Enabled { get; set; }

        /// <summary>
        /// The maximum number of nodes the Big Data pool can support.
        /// </summary>
        [Input("maxNodeCount")]
        public Input<int>? MaxNodeCount { get; set; }

        /// <summary>
        /// The minimum number of nodes the Big Data pool can support.
        /// </summary>
        [Input("minNodeCount")]
        public Input<int>? MinNodeCount { get; set; }

        public AutoScalePropertiesArgs()
        {
        }
    }
}
