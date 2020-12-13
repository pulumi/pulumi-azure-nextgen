// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerService.V20200901
{
    public static class GetAgentPool
    {
        public static Task<GetAgentPoolResult> InvokeAsync(GetAgentPoolArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetAgentPoolResult>("azure-nextgen:containerservice/v20200901:getAgentPool", args ?? new GetAgentPoolArgs(), options.WithVersion());
    }


    public sealed class GetAgentPoolArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the agent pool.
        /// </summary>
        [Input("agentPoolName", required: true)]
        public string AgentPoolName { get; set; } = null!;

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

        public GetAgentPoolArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetAgentPoolResult
    {
        /// <summary>
        /// Availability zones for nodes. Must use VirtualMachineScaleSets AgentPoolType.
        /// </summary>
        public readonly ImmutableArray<string> AvailabilityZones;
        /// <summary>
        /// Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 100 (inclusive) for user pools and in the range of 1 to 100 (inclusive) for system pools. The default value is 1.
        /// </summary>
        public readonly int? Count;
        /// <summary>
        /// Whether to enable auto-scaler
        /// </summary>
        public readonly bool? EnableAutoScaling;
        /// <summary>
        /// Enable public IP for nodes
        /// </summary>
        public readonly bool? EnableNodePublicIP;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Maximum number of nodes for auto-scaling
        /// </summary>
        public readonly int? MaxCount;
        /// <summary>
        /// Maximum number of pods that can run on a node.
        /// </summary>
        public readonly int? MaxPods;
        /// <summary>
        /// Minimum number of nodes for auto-scaling
        /// </summary>
        public readonly int? MinCount;
        /// <summary>
        /// AgentPoolMode represents mode of an agent pool
        /// </summary>
        public readonly string? Mode;
        /// <summary>
        /// The name of the resource that is unique within a resource group. This name can be used to access the resource.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Version of node image
        /// </summary>
        public readonly string NodeImageVersion;
        /// <summary>
        /// Agent pool node labels to be persisted across all nodes in agent pool.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? NodeLabels;
        /// <summary>
        /// Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
        /// </summary>
        public readonly ImmutableArray<string> NodeTaints;
        /// <summary>
        /// Version of orchestrator specified when creating the managed cluster.
        /// </summary>
        public readonly string? OrchestratorVersion;
        /// <summary>
        /// OS Disk Size in GB to be used to specify the disk size for every machine in this master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
        /// </summary>
        public readonly int? OsDiskSizeGB;
        /// <summary>
        /// OS disk type to be used for machines in a given agent pool. Allowed values are 'Ephemeral' and 'Managed'. Defaults to 'Managed'. May not be changed after creation.
        /// </summary>
        public readonly string? OsDiskType;
        /// <summary>
        /// OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
        /// </summary>
        public readonly string? OsType;
        /// <summary>
        /// Describes whether the Agent Pool is Running or Stopped
        /// </summary>
        public readonly Outputs.PowerStateResponse PowerState;
        /// <summary>
        /// The current deployment or provisioning state, which only appears in the response.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The ID for Proximity Placement Group.
        /// </summary>
        public readonly string? ProximityPlacementGroupID;
        /// <summary>
        /// ScaleSetEvictionPolicy to be used to specify eviction policy for Spot virtual machine scale set. Default to Delete.
        /// </summary>
        public readonly string? ScaleSetEvictionPolicy;
        /// <summary>
        /// ScaleSetPriority to be used to specify virtual machine scale set priority. Default to regular.
        /// </summary>
        public readonly string? ScaleSetPriority;
        /// <summary>
        /// SpotMaxPrice to be used to specify the maximum price you are willing to pay in US Dollars. Possible values are any decimal value greater than zero or -1 which indicates default price to be up-to on-demand.
        /// </summary>
        public readonly double? SpotMaxPrice;
        /// <summary>
        /// Agent pool tags to be persisted on the agent pool virtual machine scale set.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// AgentPoolType represents types of an agent pool
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Settings for upgrading the agentpool
        /// </summary>
        public readonly Outputs.AgentPoolUpgradeSettingsResponse? UpgradeSettings;
        /// <summary>
        /// Size of agent VMs.
        /// </summary>
        public readonly string? VmSize;
        /// <summary>
        /// VNet SubnetID specifies the VNet's subnet identifier.
        /// </summary>
        public readonly string? VnetSubnetID;

        [OutputConstructor]
        private GetAgentPoolResult(
            ImmutableArray<string> availabilityZones,

            int? count,

            bool? enableAutoScaling,

            bool? enableNodePublicIP,

            string id,

            int? maxCount,

            int? maxPods,

            int? minCount,

            string? mode,

            string name,

            string nodeImageVersion,

            ImmutableDictionary<string, string>? nodeLabels,

            ImmutableArray<string> nodeTaints,

            string? orchestratorVersion,

            int? osDiskSizeGB,

            string? osDiskType,

            string? osType,

            Outputs.PowerStateResponse powerState,

            string provisioningState,

            string? proximityPlacementGroupID,

            string? scaleSetEvictionPolicy,

            string? scaleSetPriority,

            double? spotMaxPrice,

            ImmutableDictionary<string, string>? tags,

            string type,

            Outputs.AgentPoolUpgradeSettingsResponse? upgradeSettings,

            string? vmSize,

            string? vnetSubnetID)
        {
            AvailabilityZones = availabilityZones;
            Count = count;
            EnableAutoScaling = enableAutoScaling;
            EnableNodePublicIP = enableNodePublicIP;
            Id = id;
            MaxCount = maxCount;
            MaxPods = maxPods;
            MinCount = minCount;
            Mode = mode;
            Name = name;
            NodeImageVersion = nodeImageVersion;
            NodeLabels = nodeLabels;
            NodeTaints = nodeTaints;
            OrchestratorVersion = orchestratorVersion;
            OsDiskSizeGB = osDiskSizeGB;
            OsDiskType = osDiskType;
            OsType = osType;
            PowerState = powerState;
            ProvisioningState = provisioningState;
            ProximityPlacementGroupID = proximityPlacementGroupID;
            ScaleSetEvictionPolicy = scaleSetEvictionPolicy;
            ScaleSetPriority = scaleSetPriority;
            SpotMaxPrice = spotMaxPrice;
            Tags = tags;
            Type = type;
            UpgradeSettings = upgradeSettings;
            VmSize = vmSize;
            VnetSubnetID = vnetSubnetID;
        }
    }
}
