// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Synapse.V20201201.Outputs
{

    [OutputType]
    public sealed class LinkedIntegrationRuntimeRbacAuthorizationResponse
    {
        /// <summary>
        /// The authorization type for integration runtime sharing.
        /// Expected value is 'RBAC'.
        /// </summary>
        public readonly string AuthorizationType;
        /// <summary>
        /// The resource identifier of the integration runtime to be shared.
        /// </summary>
        public readonly string ResourceId;

        [OutputConstructor]
        private LinkedIntegrationRuntimeRbacAuthorizationResponse(
            string authorizationType,

            string resourceId)
        {
            AuthorizationType = authorizationType;
            ResourceId = resourceId;
        }
    }
}
