// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Media.V20190901Preview.Outputs
{

    [OutputType]
    public sealed class MediaGraphAssetSinkResponse
    {
        /// <summary>
        /// Asset name
        /// </summary>
        public readonly string AssetName;
        /// <summary>
        /// Sink inputs
        /// </summary>
        public readonly ImmutableArray<string> Inputs;
        /// <summary>
        /// Sink name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The discriminator for derived types.
        /// Expected value is '#Microsoft.Media.MediaGraphAssetSink'.
        /// </summary>
        public readonly string OdataType;

        [OutputConstructor]
        private MediaGraphAssetSinkResponse(
            string assetName,

            ImmutableArray<string> inputs,

            string name,

            string odataType)
        {
            AssetName = assetName;
            Inputs = inputs;
            Name = name;
            OdataType = odataType;
        }
    }
}
