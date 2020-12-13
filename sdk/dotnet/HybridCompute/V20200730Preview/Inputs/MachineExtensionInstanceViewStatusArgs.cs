// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.HybridCompute.V20200730Preview.Inputs
{

    /// <summary>
    /// Instance view status.
    /// </summary>
    public sealed class MachineExtensionInstanceViewStatusArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The status code.
        /// </summary>
        [Input("code")]
        public Input<string>? Code { get; set; }

        /// <summary>
        /// The short localizable label for the status.
        /// </summary>
        [Input("displayStatus")]
        public Input<string>? DisplayStatus { get; set; }

        /// <summary>
        /// The level code.
        /// </summary>
        [Input("level")]
        public InputUnion<string, Pulumi.AzureNextGen.HybridCompute.V20200730Preview.StatusLevelTypes>? Level { get; set; }

        /// <summary>
        /// The detailed status message, including for alerts and error messages.
        /// </summary>
        [Input("message")]
        public Input<string>? Message { get; set; }

        /// <summary>
        /// The time of the status.
        /// </summary>
        [Input("time")]
        public Input<string>? Time { get; set; }

        public MachineExtensionInstanceViewStatusArgs()
        {
        }
    }
}
