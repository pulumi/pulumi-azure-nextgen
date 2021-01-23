// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Synapse.Latest.Outputs
{

    [OutputType]
    public sealed class PrivateLinkServiceConnectionStateResponse
    {
        /// <summary>
        /// The actions required for private link service connection.
        /// </summary>
        public readonly string ActionsRequired;
        /// <summary>
        /// The private link service connection description.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// The private link service connection status.
        /// </summary>
        public readonly string? Status;

        [OutputConstructor]
        private PrivateLinkServiceConnectionStateResponse(
            string actionsRequired,

            string? description,

            string? status)
        {
            ActionsRequired = actionsRequired;
            Description = description;
            Status = status;
        }
    }
}
