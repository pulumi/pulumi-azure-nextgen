// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Media.V20180701.Outputs
{

    [OutputType]
    public sealed class CopyVideoResponse
    {
        /// <summary>
        /// An optional label for the codec. The label can be used to control muxing behavior.
        /// </summary>
        public readonly string? Label;
        /// <summary>
        /// The discriminator for derived types.
        /// Expected value is '#Microsoft.Media.CopyVideo'.
        /// </summary>
        public readonly string OdataType;

        [OutputConstructor]
        private CopyVideoResponse(
            string? label,

            string odataType)
        {
            Label = label;
            OdataType = odataType;
        }
    }
}
