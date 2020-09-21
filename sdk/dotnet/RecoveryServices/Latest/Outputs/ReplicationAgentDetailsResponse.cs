// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.Latest.Outputs
{

    [OutputType]
    public sealed class ReplicationAgentDetailsResponse
    {
        /// <summary>
        /// The health of the replication agent.
        /// </summary>
        public readonly string Health;
        /// <summary>
        /// The health errors.
        /// </summary>
        public readonly ImmutableArray<Outputs.HealthErrorResponse> HealthErrors;
        /// <summary>
        /// The replication agent Id.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The last heartbeat received from the replication agent.
        /// </summary>
        public readonly string LastHeartbeatUtc;
        /// <summary>
        /// The replication agent name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The replication agent version.
        /// </summary>
        public readonly string Version;

        [OutputConstructor]
        private ReplicationAgentDetailsResponse(
            string health,

            ImmutableArray<Outputs.HealthErrorResponse> healthErrors,

            string id,

            string lastHeartbeatUtc,

            string name,

            string version)
        {
            Health = health;
            HealthErrors = healthErrors;
            Id = id;
            LastHeartbeatUtc = lastHeartbeatUtc;
            Name = name;
            Version = version;
        }
    }
}