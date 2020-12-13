// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20200601.Inputs
{

    /// <summary>
    /// Parameters that define the flow log format.
    /// </summary>
    public sealed class FlowLogFormatParametersArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The file type of flow log.
        /// </summary>
        [Input("type")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20200601.FlowLogFormatType>? Type { get; set; }

        /// <summary>
        /// The version (revision) of the flow log.
        /// </summary>
        [Input("version")]
        public Input<int>? Version { get; set; }

        public FlowLogFormatParametersArgs()
        {
        }
    }
}
