// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ProviderHub.V20201120.Outputs
{

    [OutputType]
    public sealed class ProviderRegistrationPropertiesResponseProviderHubMetadata
    {
        public readonly Outputs.ProviderHubMetadataResponseProviderAuthentication? ProviderAuthentication;
        public readonly ImmutableArray<Outputs.ResourceProviderAuthorizationResponse> ProviderAuthorizations;
        public readonly Outputs.ProviderHubMetadataResponseThirdPartyProviderAuthorization? ThirdPartyProviderAuthorization;

        [OutputConstructor]
        private ProviderRegistrationPropertiesResponseProviderHubMetadata(
            Outputs.ProviderHubMetadataResponseProviderAuthentication? providerAuthentication,

            ImmutableArray<Outputs.ResourceProviderAuthorizationResponse> providerAuthorizations,

            Outputs.ProviderHubMetadataResponseThirdPartyProviderAuthorization? thirdPartyProviderAuthorization)
        {
            ProviderAuthentication = providerAuthentication;
            ProviderAuthorizations = providerAuthorizations;
            ThirdPartyProviderAuthorization = thirdPartyProviderAuthorization;
        }
    }
}
