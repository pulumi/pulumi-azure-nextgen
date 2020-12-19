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
    public sealed class ContentKeyPolicySymmetricTokenKeyResponse
    {
        /// <summary>
        /// The key value of the key
        /// </summary>
        public readonly string KeyValue;
        /// <summary>
        /// The discriminator for derived types.
        /// Expected value is '#Microsoft.Media.ContentKeyPolicySymmetricTokenKey'.
        /// </summary>
        public readonly string OdataType;

        [OutputConstructor]
        private ContentKeyPolicySymmetricTokenKeyResponse(
            string keyValue,

            string odataType)
        {
            KeyValue = keyValue;
            OdataType = odataType;
        }
    }
}
