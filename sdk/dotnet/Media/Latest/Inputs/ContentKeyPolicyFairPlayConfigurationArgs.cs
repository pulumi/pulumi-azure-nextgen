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
    /// Specifies a configuration for FairPlay licenses.
    /// </summary>
    public sealed class ContentKeyPolicyFairPlayConfigurationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The key that must be used as FairPlay Application Secret key.
        /// </summary>
        [Input("ask", required: true)]
        public Input<string> Ask { get; set; } = null!;

        /// <summary>
        /// The Base64 representation of FairPlay certificate in PKCS 12 (pfx) format (including private key).
        /// </summary>
        [Input("fairPlayPfx", required: true)]
        public Input<string> FairPlayPfx { get; set; } = null!;

        /// <summary>
        /// The password encrypting FairPlay certificate in PKCS 12 (pfx) format.
        /// </summary>
        [Input("fairPlayPfxPassword", required: true)]
        public Input<string> FairPlayPfxPassword { get; set; } = null!;

        /// <summary>
        /// The discriminator for derived types.
        /// Expected value is '#Microsoft.Media.ContentKeyPolicyFairPlayConfiguration'.
        /// </summary>
        [Input("odataType", required: true)]
        public Input<string> OdataType { get; set; } = null!;

        /// <summary>
        /// Offline rental policy
        /// </summary>
        [Input("offlineRentalConfiguration")]
        public Input<Inputs.ContentKeyPolicyFairPlayOfflineRentalConfigurationArgs>? OfflineRentalConfiguration { get; set; }

        /// <summary>
        /// The rental and lease key type.
        /// </summary>
        [Input("rentalAndLeaseKeyType", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.Media.Latest.ContentKeyPolicyFairPlayRentalAndLeaseKeyType> RentalAndLeaseKeyType { get; set; } = null!;

        /// <summary>
        /// The rental duration. Must be greater than or equal to 0.
        /// </summary>
        [Input("rentalDuration", required: true)]
        public Input<int> RentalDuration { get; set; } = null!;

        public ContentKeyPolicyFairPlayConfigurationArgs()
        {
        }
    }
}
