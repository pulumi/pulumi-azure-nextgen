// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerService.V20200401.Inputs
{

    /// <summary>
    /// Profile for the container service agent pool.
    /// </summary>
    public sealed class ManagedClusterAgentPoolProfileArgs : Pulumi.ResourceArgs
    {
        [Input("availabilityZones")]
        private InputList<string>? _availabilityZones;

        /// <summary>
        /// Availability zones for nodes. Must use VirtualMachineScaleSets AgentPoolType.
        /// </summary>
        public InputList<string> AvailabilityZones
        {
            get => _availabilityZones ?? (_availabilityZones = new InputList<string>());
            set => _availabilityZones = value;
        }

        /// <summary>
        /// Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 100 (inclusive) for user pools and in the range of 1 to 100 (inclusive) for system pools. The default value is 1.
        /// </summary>
        [Input("count")]
        public Input<int>? Count { get; set; }

        /// <summary>
        /// Whether to enable auto-scaler
        /// </summary>
        [Input("enableAutoScaling")]
        public Input<bool>? EnableAutoScaling { get; set; }

        /// <summary>
        /// Enable public IP for nodes
        /// </summary>
        [Input("enableNodePublicIP")]
        public Input<bool>? EnableNodePublicIP { get; set; }

        /// <summary>
        /// Maximum number of nodes for auto-scaling
        /// </summary>
        [Input("maxCount")]
        public Input<int>? MaxCount { get; set; }

        /// <summary>
        /// Maximum number of pods that can run on a node.
        /// </summary>
        [Input("maxPods")]
        public Input<int>? MaxPods { get; set; }

        /// <summary>
        /// Minimum number of nodes for auto-scaling
        /// </summary>
        [Input("minCount")]
        public Input<int>? MinCount { get; set; }

        /// <summary>
        /// AgentPoolMode represents mode of an agent pool
        /// </summary>
        [Input("mode")]
        public InputUnion<string, Pulumi.AzureNextGen.ContainerService.V20200401.AgentPoolMode>? Mode { get; set; }

        /// <summary>
        /// Unique name of the agent pool profile in the context of the subscription and resource group.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// Version of node image
        /// </summary>
        [Input("nodeImageVersion")]
        public Input<string>? NodeImageVersion { get; set; }

        [Input("nodeLabels")]
        private InputMap<string>? _nodeLabels;

        /// <summary>
        /// Agent pool node labels to be persisted across all nodes in agent pool.
        /// </summary>
        public InputMap<string> NodeLabels
        {
            get => _nodeLabels ?? (_nodeLabels = new InputMap<string>());
            set => _nodeLabels = value;
        }

        [Input("nodeTaints")]
        private InputList<string>? _nodeTaints;

        /// <summary>
        /// Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
        /// </summary>
        public InputList<string> NodeTaints
        {
            get => _nodeTaints ?? (_nodeTaints = new InputList<string>());
            set => _nodeTaints = value;
        }

        /// <summary>
        /// Version of orchestrator specified when creating the managed cluster.
        /// </summary>
        [Input("orchestratorVersion")]
        public Input<string>? OrchestratorVersion { get; set; }

        /// <summary>
        /// OS Disk Size in GB to be used to specify the disk size for every machine in this master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
        /// </summary>
        [Input("osDiskSizeGB")]
        public Input<int>? OsDiskSizeGB { get; set; }

        /// <summary>
        /// OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
        /// </summary>
        [Input("osType")]
        public InputUnion<string, Pulumi.AzureNextGen.ContainerService.V20200401.OSType>? OsType { get; set; }

        /// <summary>
        /// ScaleSetEvictionPolicy to be used to specify eviction policy for Spot virtual machine scale set. Default to Delete.
        /// </summary>
        [Input("scaleSetEvictionPolicy")]
        public InputUnion<string, Pulumi.AzureNextGen.ContainerService.V20200401.ScaleSetEvictionPolicy>? ScaleSetEvictionPolicy { get; set; }

        /// <summary>
        /// ScaleSetPriority to be used to specify virtual machine scale set priority. Default to regular.
        /// </summary>
        [Input("scaleSetPriority")]
        public InputUnion<string, Pulumi.AzureNextGen.ContainerService.V20200401.ScaleSetPriority>? ScaleSetPriority { get; set; }

        /// <summary>
        /// SpotMaxPrice to be used to specify the maximum price you are willing to pay in US Dollars. Possible values are any decimal value greater than zero or -1 which indicates default price to be up-to on-demand.
        /// </summary>
        [Input("spotMaxPrice")]
        public Input<double>? SpotMaxPrice { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// Agent pool tags to be persisted on the agent pool virtual machine scale set.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// AgentPoolType represents types of an agent pool
        /// </summary>
        [Input("type")]
        public InputUnion<string, Pulumi.AzureNextGen.ContainerService.V20200401.AgentPoolType>? Type { get; set; }

        /// <summary>
        /// Settings for upgrading the agentpool
        /// </summary>
        [Input("upgradeSettings")]
        public Input<Inputs.AgentPoolUpgradeSettingsArgs>? UpgradeSettings { get; set; }

        /// <summary>
        /// Size of agent VMs.
        /// </summary>
        [Input("vmSize")]
        public InputUnion<string, Pulumi.AzureNextGen.ContainerService.V20200401.ContainerServiceVMSizeTypes>? VmSize { get; set; }

        /// <summary>
        /// VNet SubnetID specifies the VNet's subnet identifier.
        /// </summary>
        [Input("vnetSubnetID")]
        public Input<string>? VnetSubnetID { get; set; }

        public ManagedClusterAgentPoolProfileArgs()
        {
        }
    }
}
