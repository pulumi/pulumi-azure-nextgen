// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Media.Latest.Outputs
{

    [OutputType]
    public sealed class ContentKeyPolicyPlayReadyConfigurationResponse
    {
        /// <summary>
        /// The PlayReady licenses.
        /// </summary>
        public readonly ImmutableArray<Outputs.ContentKeyPolicyPlayReadyLicenseResponse> Licenses;
        /// <summary>
        /// The discriminator for derived types.
        /// Expected value is '#Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration'.
        /// </summary>
        public readonly string OdataType;
        /// <summary>
        /// The custom response data.
        /// </summary>
        public readonly string? ResponseCustomData;

        [OutputConstructor]
        private ContentKeyPolicyPlayReadyConfigurationResponse(
            ImmutableArray<Outputs.ContentKeyPolicyPlayReadyLicenseResponse> licenses,

            string odataType,

            string? responseCustomData)
        {
            Licenses = licenses;
            OdataType = odataType;
            ResponseCustomData = responseCustomData;
        }
    }
}
