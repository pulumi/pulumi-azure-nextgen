// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Synapse.V20190601Preview.Outputs
{

    [OutputType]
    public sealed class LinkedIntegrationRuntimeKeyAuthorizationResponse
    {
        /// <summary>
        /// The authorization type for integration runtime sharing.
        /// Expected value is 'Key'.
        /// </summary>
        public readonly string AuthorizationType;
        /// <summary>
        /// The key used for authorization.
        /// </summary>
        public readonly Outputs.SecureStringResponse Key;

        [OutputConstructor]
        private LinkedIntegrationRuntimeKeyAuthorizationResponse(
            string authorizationType,

            Outputs.SecureStringResponse key)
        {
            AuthorizationType = authorizationType;
            Key = key;
        }
    }
}
