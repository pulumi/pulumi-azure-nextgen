// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Security.V20200101.Inputs
{

    /// <summary>
    /// Details of the On Premise resource that was assessed
    /// </summary>
    public sealed class OnPremiseResourceDetailsArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the machine
        /// </summary>
        [Input("machineName", required: true)]
        public Input<string> MachineName { get; set; } = null!;

        /// <summary>
        /// The platform where the assessed resource resides
        /// Expected value is 'OnPremise'.
        /// </summary>
        [Input("source", required: true)]
        public Input<string> Source { get; set; } = null!;

        /// <summary>
        /// The oms agent Id installed on the machine
        /// </summary>
        [Input("sourceComputerId", required: true)]
        public Input<string> SourceComputerId { get; set; } = null!;

        /// <summary>
        /// The unique Id of the machine
        /// </summary>
        [Input("vmuuid", required: true)]
        public Input<string> Vmuuid { get; set; } = null!;

        /// <summary>
        /// Azure resource Id of the workspace the machine is attached to
        /// </summary>
        [Input("workspaceId", required: true)]
        public Input<string> WorkspaceId { get; set; } = null!;

        public OnPremiseResourceDetailsArgs()
        {
        }
    }
}
