// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.RecoveryServices.V20180710.Outputs
{

    [OutputType]
    public sealed class InMageRcmFabricSpecificDetailsResponse
    {
        /// <summary>
        /// The list of agent details.
        /// </summary>
        public readonly ImmutableArray<Outputs.AgentDetailsResponse> AgentDetails;
        /// <summary>
        /// The control plane Uri.
        /// </summary>
        public readonly string ControlPlaneUri;
        /// <summary>
        /// The data plane Uri.
        /// </summary>
        public readonly string DataPlaneUri;
        /// <summary>
        /// The list of DRAs.
        /// </summary>
        public readonly ImmutableArray<Outputs.DraDetailsResponse> Dras;
        /// <summary>
        /// Gets the class type. Overridden in derived classes.
        /// Expected value is 'InMageRcm'.
        /// </summary>
        public readonly string InstanceType;
        /// <summary>
        /// The ARM Id of the physical site.
        /// </summary>
        public readonly string PhysicalSiteId;
        /// <summary>
        /// The list of process servers.
        /// </summary>
        public readonly ImmutableArray<Outputs.ProcessServerDetailsResponse> ProcessServers;
        /// <summary>
        /// The list of push installers.
        /// </summary>
        public readonly ImmutableArray<Outputs.PushInstallerDetailsResponse> PushInstallers;
        /// <summary>
        /// The list of RCM proxies.
        /// </summary>
        public readonly ImmutableArray<Outputs.RcmProxyDetailsResponse> RcmProxies;
        /// <summary>
        /// The list of replication agents.
        /// </summary>
        public readonly ImmutableArray<Outputs.ReplicationAgentDetailsResponse> ReplicationAgents;
        /// <summary>
        /// The list of reprotect agents.
        /// </summary>
        public readonly ImmutableArray<Outputs.ReprotectAgentDetailsResponse> ReprotectAgents;
        /// <summary>
        /// The service container Id.
        /// </summary>
        public readonly string ServiceContainerId;
        /// <summary>
        /// The service endpoint.
        /// </summary>
        public readonly string ServiceEndpoint;
        /// <summary>
        /// The service resource Id.
        /// </summary>
        public readonly string ServiceResourceId;
        /// <summary>
        /// The ARM Id of the VMware site.
        /// </summary>
        public readonly string VmwareSiteId;

        [OutputConstructor]
        private InMageRcmFabricSpecificDetailsResponse(
            ImmutableArray<Outputs.AgentDetailsResponse> agentDetails,

            string controlPlaneUri,

            string dataPlaneUri,

            ImmutableArray<Outputs.DraDetailsResponse> dras,

            string instanceType,

            string physicalSiteId,

            ImmutableArray<Outputs.ProcessServerDetailsResponse> processServers,

            ImmutableArray<Outputs.PushInstallerDetailsResponse> pushInstallers,

            ImmutableArray<Outputs.RcmProxyDetailsResponse> rcmProxies,

            ImmutableArray<Outputs.ReplicationAgentDetailsResponse> replicationAgents,

            ImmutableArray<Outputs.ReprotectAgentDetailsResponse> reprotectAgents,

            string serviceContainerId,

            string serviceEndpoint,

            string serviceResourceId,

            string vmwareSiteId)
        {
            AgentDetails = agentDetails;
            ControlPlaneUri = controlPlaneUri;
            DataPlaneUri = dataPlaneUri;
            Dras = dras;
            InstanceType = instanceType;
            PhysicalSiteId = physicalSiteId;
            ProcessServers = processServers;
            PushInstallers = pushInstallers;
            RcmProxies = rcmProxies;
            ReplicationAgents = replicationAgents;
            ReprotectAgents = reprotectAgents;
            ServiceContainerId = serviceContainerId;
            ServiceEndpoint = serviceEndpoint;
            ServiceResourceId = serviceResourceId;
            VmwareSiteId = vmwareSiteId;
        }
    }
}
