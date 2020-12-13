// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Media.V20200501.Inputs
{

    /// <summary>
    /// Describes a built-in preset for encoding the input video with the Standard Encoder.
    /// </summary>
    public sealed class BuiltInStandardEncoderPresetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The discriminator for derived types.
        /// </summary>
        [Input("odataType", required: true)]
        public Input<string> OdataType { get; set; } = null!;

        /// <summary>
        /// The built-in preset to be used for encoding videos.
        /// </summary>
        [Input("presetName", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.Media.V20200501.EncoderNamedPreset> PresetName { get; set; } = null!;

        public BuiltInStandardEncoderPresetArgs()
        {
        }
    }
}
