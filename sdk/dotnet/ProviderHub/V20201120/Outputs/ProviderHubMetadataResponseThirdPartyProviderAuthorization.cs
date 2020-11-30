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
    public sealed class ProviderHubMetadataResponseThirdPartyProviderAuthorization
    {
        public readonly ImmutableArray<Outputs.LightHouseAuthorizationResponse> Authorizations;
        public readonly string? ManagedByTenantId;

        [OutputConstructor]
        private ProviderHubMetadataResponseThirdPartyProviderAuthorization(
            ImmutableArray<Outputs.LightHouseAuthorizationResponse> authorizations,

            string? managedByTenantId)
        {
            Authorizations = authorizations;
            ManagedByTenantId = managedByTenantId;
        }
    }
}
