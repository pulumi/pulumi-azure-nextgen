// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerService.Latest
{
    public static class GetContainerService
    {
        public static Task<GetContainerServiceResult> InvokeAsync(GetContainerServiceArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetContainerServiceResult>("azure-nextgen:containerservice/latest:getContainerService", args ?? new GetContainerServiceArgs(), options.WithVersion());
    }


    public sealed class GetContainerServiceArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the container service in the specified subscription and resource group.
        /// </summary>
        [Input("containerServiceName", required: true)]
        public string ContainerServiceName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetContainerServiceArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetContainerServiceResult
    {
        /// <summary>
        /// Properties of the agent pool.
        /// </summary>
        public readonly ImmutableArray<Outputs.ContainerServiceAgentPoolProfileResponse> AgentPoolProfiles;
        /// <summary>
        /// Properties for custom clusters.
        /// </summary>
        public readonly Outputs.ContainerServiceCustomProfileResponse? CustomProfile;
        /// <summary>
        /// Properties of the diagnostic agent.
        /// </summary>
        public readonly Outputs.ContainerServiceDiagnosticsProfileResponse? DiagnosticsProfile;
        /// <summary>
        /// Resource Id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Properties of Linux VMs.
        /// </summary>
        public readonly Outputs.ContainerServiceLinuxProfileResponse LinuxProfile;
        /// <summary>
        /// Resource location
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Properties of master agents.
        /// </summary>
        public readonly Outputs.ContainerServiceMasterProfileResponse MasterProfile;
        /// <summary>
        /// Resource name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Properties of the orchestrator.
        /// </summary>
        public readonly Outputs.ContainerServiceOrchestratorProfileResponse? OrchestratorProfile;
        /// <summary>
        /// the current deployment or provisioning state, which only appears in the response.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Properties for cluster service principals.
        /// </summary>
        public readonly Outputs.ContainerServiceServicePrincipalProfileResponse? ServicePrincipalProfile;
        /// <summary>
        /// Resource tags
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Properties of Windows VMs.
        /// </summary>
        public readonly Outputs.ContainerServiceWindowsProfileResponse? WindowsProfile;

        [OutputConstructor]
        private GetContainerServiceResult(
            ImmutableArray<Outputs.ContainerServiceAgentPoolProfileResponse> agentPoolProfiles,

            Outputs.ContainerServiceCustomProfileResponse? customProfile,

            Outputs.ContainerServiceDiagnosticsProfileResponse? diagnosticsProfile,

            string id,

            Outputs.ContainerServiceLinuxProfileResponse linuxProfile,

            string location,

            Outputs.ContainerServiceMasterProfileResponse masterProfile,

            string name,

            Outputs.ContainerServiceOrchestratorProfileResponse? orchestratorProfile,

            string provisioningState,

            Outputs.ContainerServiceServicePrincipalProfileResponse? servicePrincipalProfile,

            ImmutableDictionary<string, string>? tags,

            string type,

            Outputs.ContainerServiceWindowsProfileResponse? windowsProfile)
        {
            AgentPoolProfiles = agentPoolProfiles;
            CustomProfile = customProfile;
            DiagnosticsProfile = diagnosticsProfile;
            Id = id;
            LinuxProfile = linuxProfile;
            Location = location;
            MasterProfile = masterProfile;
            Name = name;
            OrchestratorProfile = orchestratorProfile;
            ProvisioningState = provisioningState;
            ServicePrincipalProfile = servicePrincipalProfile;
            Tags = tags;
            Type = type;
            WindowsProfile = windowsProfile;
        }
    }
}
