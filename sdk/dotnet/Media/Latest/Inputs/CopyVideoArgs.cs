// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Media.Latest.Inputs
{

    /// <summary>
    /// A codec flag, which tells the encoder to copy the input video bitstream without re-encoding.
    /// </summary>
    public sealed class CopyVideoArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// An optional label for the codec. The label can be used to control muxing behavior.
        /// </summary>
        [Input("label")]
        public Input<string>? Label { get; set; }

        /// <summary>
        /// The discriminator for derived types.
        /// Expected value is '#Microsoft.Media.CopyVideo'.
        /// </summary>
        [Input("odataType", required: true)]
        public Input<string> OdataType { get; set; } = null!;

        public CopyVideoArgs()
        {
        }
    }
}
