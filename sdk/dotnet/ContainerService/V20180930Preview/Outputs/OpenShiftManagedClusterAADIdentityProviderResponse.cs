// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerService.V20180930Preview.Outputs
{

    [OutputType]
    public sealed class OpenShiftManagedClusterAADIdentityProviderResponse
    {
        /// <summary>
        /// The clientId password associated with the provider.
        /// </summary>
        public readonly string? ClientId;
        /// <summary>
        /// The groupId to be granted cluster admin role.
        /// </summary>
        public readonly string? CustomerAdminGroupId;
        /// <summary>
        /// The kind of the provider.
        /// Expected value is 'AADIdentityProvider'.
        /// </summary>
        public readonly string Kind;
        /// <summary>
        /// The secret password associated with the provider.
        /// </summary>
        public readonly string? Secret;
        /// <summary>
        /// The tenantId associated with the provider.
        /// </summary>
        public readonly string? TenantId;

        [OutputConstructor]
        private OpenShiftManagedClusterAADIdentityProviderResponse(
            string? clientId,

            string? customerAdminGroupId,

            string kind,

            string? secret,

            string? tenantId)
        {
            ClientId = clientId;
            CustomerAdminGroupId = customerAdminGroupId;
            Kind = kind;
            Secret = secret;
            TenantId = tenantId;
        }
    }
}
