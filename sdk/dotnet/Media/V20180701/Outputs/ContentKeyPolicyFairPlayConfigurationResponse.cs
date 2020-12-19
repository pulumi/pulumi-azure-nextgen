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
    public sealed class ContentKeyPolicyFairPlayConfigurationResponse
    {
        /// <summary>
        /// The key that must be used as FairPlay Application Secret key.
        /// </summary>
        public readonly string Ask;
        /// <summary>
        /// The Base64 representation of FairPlay certificate in PKCS 12 (pfx) format (including private key).
        /// </summary>
        public readonly string FairPlayPfx;
        /// <summary>
        /// The password encrypting FairPlay certificate in PKCS 12 (pfx) format.
        /// </summary>
        public readonly string FairPlayPfxPassword;
        /// <summary>
        /// The discriminator for derived types.
        /// Expected value is '#Microsoft.Media.ContentKeyPolicyFairPlayConfiguration'.
        /// </summary>
        public readonly string OdataType;
        /// <summary>
        /// Offline rental policy
        /// </summary>
        public readonly Outputs.ContentKeyPolicyFairPlayOfflineRentalConfigurationResponse? OfflineRentalConfiguration;
        /// <summary>
        /// The rental and lease key type.
        /// </summary>
        public readonly string RentalAndLeaseKeyType;
        /// <summary>
        /// The rental duration. Must be greater than or equal to 0.
        /// </summary>
        public readonly int RentalDuration;

        [OutputConstructor]
        private ContentKeyPolicyFairPlayConfigurationResponse(
            string ask,

            string fairPlayPfx,

            string fairPlayPfxPassword,

            string odataType,

            Outputs.ContentKeyPolicyFairPlayOfflineRentalConfigurationResponse? offlineRentalConfiguration,

            string rentalAndLeaseKeyType,

            int rentalDuration)
        {
            Ask = ask;
            FairPlayPfx = fairPlayPfx;
            FairPlayPfxPassword = fairPlayPfxPassword;
            OdataType = odataType;
            OfflineRentalConfiguration = offlineRentalConfiguration;
            RentalAndLeaseKeyType = rentalAndLeaseKeyType;
            RentalDuration = rentalDuration;
        }
    }
}
