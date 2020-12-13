// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerService.V20190801
{
    public static class GetManagedCluster
    {
        public static Task<GetManagedClusterResult> InvokeAsync(GetManagedClusterArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetManagedClusterResult>("azure-nextgen:containerservice/v20190801:getManagedCluster", args ?? new GetManagedClusterArgs(), options.WithVersion());
    }


    public sealed class GetManagedClusterArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the managed cluster resource.
        /// </summary>
        [Input("resourceName", required: true)]
        public string ResourceName { get; set; } = null!;

        public GetManagedClusterArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetManagedClusterResult
    {
        /// <summary>
        /// Profile of Azure Active Directory configuration.
        /// </summary>
        public readonly Outputs.ManagedClusterAADProfileResponse? AadProfile;
        /// <summary>
        /// Profile of managed cluster add-on.
        /// </summary>
        public readonly ImmutableDictionary<string, Outputs.ManagedClusterAddonProfileResponse>? AddonProfiles;
        /// <summary>
        /// Properties of the agent pool.
        /// </summary>
        public readonly ImmutableArray<Outputs.ManagedClusterAgentPoolProfileResponse> AgentPoolProfiles;
        /// <summary>
        /// Access profile for managed cluster API server.
        /// </summary>
        public readonly Outputs.ManagedClusterAPIServerAccessProfileResponse? ApiServerAccessProfile;
        /// <summary>
        /// DNS prefix specified when creating the managed cluster.
        /// </summary>
        public readonly string? DnsPrefix;
        /// <summary>
        /// (DEPRECATING) Whether to enable Kubernetes pod security policy (preview). This feature is set for removal on October 15th, 2020. Learn more at aka.ms/aks/azpodpolicy.
        /// </summary>
        public readonly bool? EnablePodSecurityPolicy;
        /// <summary>
        /// Whether to enable Kubernetes Role-Based Access Control.
        /// </summary>
        public readonly bool? EnableRBAC;
        /// <summary>
        /// FQDN for the master pool.
        /// </summary>
        public readonly string Fqdn;
        /// <summary>
        /// Resource Id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The identity of the managed cluster, if configured.
        /// </summary>
        public readonly Outputs.ManagedClusterIdentityResponse? Identity;
        /// <summary>
        /// Version of Kubernetes specified when creating the managed cluster.
        /// </summary>
        public readonly string? KubernetesVersion;
        /// <summary>
        /// Profile for Linux VMs in the container service cluster.
        /// </summary>
        public readonly Outputs.ContainerServiceLinuxProfileResponse? LinuxProfile;
        /// <summary>
        /// Resource location
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// The max number of agent pools for the managed cluster.
        /// </summary>
        public readonly int MaxAgentPools;
        /// <summary>
        /// Resource name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Profile of network configuration.
        /// </summary>
        public readonly Outputs.ContainerServiceNetworkProfileResponse? NetworkProfile;
        /// <summary>
        /// Name of the resource group containing agent pool nodes.
        /// </summary>
        public readonly string? NodeResourceGroup;
        /// <summary>
        /// The current deployment or provisioning state, which only appears in the response.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Information about a service principal identity for the cluster to use for manipulating Azure APIs.
        /// </summary>
        public readonly Outputs.ManagedClusterServicePrincipalProfileResponse? ServicePrincipalProfile;
        /// <summary>
        /// Resource tags
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Profile for Windows VMs in the container service cluster.
        /// </summary>
        public readonly Outputs.ManagedClusterWindowsProfileResponse? WindowsProfile;

        [OutputConstructor]
        private GetManagedClusterResult(
            Outputs.ManagedClusterAADProfileResponse? aadProfile,

            ImmutableDictionary<string, Outputs.ManagedClusterAddonProfileResponse>? addonProfiles,

            ImmutableArray<Outputs.ManagedClusterAgentPoolProfileResponse> agentPoolProfiles,

            Outputs.ManagedClusterAPIServerAccessProfileResponse? apiServerAccessProfile,

            string? dnsPrefix,

            bool? enablePodSecurityPolicy,

            bool? enableRBAC,

            string fqdn,

            string id,

            Outputs.ManagedClusterIdentityResponse? identity,

            string? kubernetesVersion,

            Outputs.ContainerServiceLinuxProfileResponse? linuxProfile,

            string location,

            int maxAgentPools,

            string name,

            Outputs.ContainerServiceNetworkProfileResponse? networkProfile,

            string? nodeResourceGroup,

            string provisioningState,

            Outputs.ManagedClusterServicePrincipalProfileResponse? servicePrincipalProfile,

            ImmutableDictionary<string, string>? tags,

            string type,

            Outputs.ManagedClusterWindowsProfileResponse? windowsProfile)
        {
            AadProfile = aadProfile;
            AddonProfiles = addonProfiles;
            AgentPoolProfiles = agentPoolProfiles;
            ApiServerAccessProfile = apiServerAccessProfile;
            DnsPrefix = dnsPrefix;
            EnablePodSecurityPolicy = enablePodSecurityPolicy;
            EnableRBAC = enableRBAC;
            Fqdn = fqdn;
            Id = id;
            Identity = identity;
            KubernetesVersion = kubernetesVersion;
            LinuxProfile = linuxProfile;
            Location = location;
            MaxAgentPools = maxAgentPools;
            Name = name;
            NetworkProfile = networkProfile;
            NodeResourceGroup = nodeResourceGroup;
            ProvisioningState = provisioningState;
            ServicePrincipalProfile = servicePrincipalProfile;
            Tags = tags;
            Type = type;
            WindowsProfile = windowsProfile;
        }
    }
}
