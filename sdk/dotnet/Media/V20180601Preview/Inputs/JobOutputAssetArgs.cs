// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Media.V20180601Preview.Inputs
{

    /// <summary>
    /// Represents an Asset used as a JobOutput.
    /// </summary>
    public sealed class JobOutputAssetArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the output Asset.
        /// </summary>
        [Input("assetName", required: true)]
        public Input<string> AssetName { get; set; } = null!;

        /// <summary>
        /// The discriminator for derived types.
        /// Expected value is '#Microsoft.Media.JobOutputAsset'.
        /// </summary>
        [Input("odataType", required: true)]
        public Input<string> OdataType { get; set; } = null!;

        public JobOutputAssetArgs()
        {
        }
    }
}
