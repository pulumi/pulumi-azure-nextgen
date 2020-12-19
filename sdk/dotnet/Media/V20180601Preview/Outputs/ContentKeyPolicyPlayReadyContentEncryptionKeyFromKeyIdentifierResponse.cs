// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Media.V20180601Preview.Outputs
{

    [OutputType]
    public sealed class ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifierResponse
    {
        /// <summary>
        /// The content key ID.
        /// </summary>
        public readonly string KeyId;
        /// <summary>
        /// The discriminator for derived types.
        /// Expected value is '#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifier'.
        /// </summary>
        public readonly string OdataType;

        [OutputConstructor]
        private ContentKeyPolicyPlayReadyContentEncryptionKeyFromKeyIdentifierResponse(
            string keyId,

            string odataType)
        {
            KeyId = keyId;
            OdataType = odataType;
        }
    }
}
