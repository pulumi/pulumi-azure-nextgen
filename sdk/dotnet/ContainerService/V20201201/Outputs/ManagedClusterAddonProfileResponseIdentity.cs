// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerService.V20201201.Outputs
{

    [OutputType]
    public sealed class ManagedClusterAddonProfileResponseIdentity
    {
        /// <summary>
        /// The client id of the user assigned identity.
        /// </summary>
        public readonly string? ClientId;
        /// <summary>
        /// The object id of the user assigned identity.
        /// </summary>
        public readonly string? ObjectId;
        /// <summary>
        /// The resource id of the user assigned identity.
        /// </summary>
        public readonly string? ResourceId;

        [OutputConstructor]
        private ManagedClusterAddonProfileResponseIdentity(
            string? clientId,

            string? objectId,

            string? resourceId)
        {
            ClientId = clientId;
            ObjectId = objectId;
            ResourceId = resourceId;
        }
    }
}
