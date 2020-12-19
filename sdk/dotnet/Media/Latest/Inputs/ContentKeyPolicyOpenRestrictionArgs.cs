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
    /// Represents an open restriction. License or key will be delivered on every request.
    /// </summary>
    public sealed class ContentKeyPolicyOpenRestrictionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The discriminator for derived types.
        /// Expected value is '#Microsoft.Media.ContentKeyPolicyOpenRestriction'.
        /// </summary>
        [Input("odataType", required: true)]
        public Input<string> OdataType { get; set; } = null!;

        public ContentKeyPolicyOpenRestrictionArgs()
        {
        }
    }
}
