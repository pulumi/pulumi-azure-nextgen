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
    /// Represents a ContentKeyPolicyRestriction that is unavailable in the current API version.
    /// </summary>
    public sealed class ContentKeyPolicyUnknownRestrictionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The discriminator for derived types.
        /// Expected value is '#Microsoft.Media.ContentKeyPolicyUnknownRestriction'.
        /// </summary>
        [Input("odataType", required: true)]
        public Input<string> OdataType { get; set; } = null!;

        public ContentKeyPolicyUnknownRestrictionArgs()
        {
        }
    }
}
