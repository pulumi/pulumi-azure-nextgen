// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerService.V20201101
{
    /// <summary>
    /// Agent Pool.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:containerservice/v20201101:AgentPool")]
    public partial class AgentPool : Pulumi.CustomResource
    {
        /// <summary>
        /// Availability zones for nodes. Must use VirtualMachineScaleSets AgentPoolType.
        /// </summary>
        [Output("availabilityZones")]
        public Output<ImmutableArray<string>> AvailabilityZones { get; private set; } = null!;

        /// <summary>
        /// Number of agents (VMs) to host docker containers. Allowed values must be in the range of 0 to 100 (inclusive) for user pools and in the range of 1 to 100 (inclusive) for system pools. The default value is 1.
        /// </summary>
        [Output("count")]
        public Output<int?> Count { get; private set; } = null!;

        /// <summary>
        /// Whether to enable auto-scaler
        /// </summary>
        [Output("enableAutoScaling")]
        public Output<bool?> EnableAutoScaling { get; private set; } = null!;

        /// <summary>
        /// Enable public IP for nodes
        /// </summary>
        [Output("enableNodePublicIP")]
        public Output<bool?> EnableNodePublicIP { get; private set; } = null!;

        /// <summary>
        /// KubeletConfig specifies the configuration of kubelet on agent nodes.
        /// </summary>
        [Output("kubeletConfig")]
        public Output<Outputs.KubeletConfigResponse?> KubeletConfig { get; private set; } = null!;

        /// <summary>
        /// LinuxOSConfig specifies the OS configuration of linux agent nodes.
        /// </summary>
        [Output("linuxOSConfig")]
        public Output<Outputs.LinuxOSConfigResponse?> LinuxOSConfig { get; private set; } = null!;

        /// <summary>
        /// Maximum number of nodes for auto-scaling
        /// </summary>
        [Output("maxCount")]
        public Output<int?> MaxCount { get; private set; } = null!;

        /// <summary>
        /// Maximum number of pods that can run on a node.
        /// </summary>
        [Output("maxPods")]
        public Output<int?> MaxPods { get; private set; } = null!;

        /// <summary>
        /// Minimum number of nodes for auto-scaling
        /// </summary>
        [Output("minCount")]
        public Output<int?> MinCount { get; private set; } = null!;

        /// <summary>
        /// AgentPoolMode represents mode of an agent pool
        /// </summary>
        [Output("mode")]
        public Output<string?> Mode { get; private set; } = null!;

        /// <summary>
        /// The name of the resource that is unique within a resource group. This name can be used to access the resource.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Version of node image
        /// </summary>
        [Output("nodeImageVersion")]
        public Output<string> NodeImageVersion { get; private set; } = null!;

        /// <summary>
        /// Agent pool node labels to be persisted across all nodes in agent pool.
        /// </summary>
        [Output("nodeLabels")]
        public Output<ImmutableDictionary<string, string>?> NodeLabels { get; private set; } = null!;

        /// <summary>
        /// Taints added to new nodes during node pool create and scale. For example, key=value:NoSchedule.
        /// </summary>
        [Output("nodeTaints")]
        public Output<ImmutableArray<string>> NodeTaints { get; private set; } = null!;

        /// <summary>
        /// Version of orchestrator specified when creating the managed cluster.
        /// </summary>
        [Output("orchestratorVersion")]
        public Output<string?> OrchestratorVersion { get; private set; } = null!;

        /// <summary>
        /// OS Disk Size in GB to be used to specify the disk size for every machine in this master/agent pool. If you specify 0, it will apply the default osDisk size according to the vmSize specified.
        /// </summary>
        [Output("osDiskSizeGB")]
        public Output<int?> OsDiskSizeGB { get; private set; } = null!;

        /// <summary>
        /// OS disk type to be used for machines in a given agent pool. Allowed values are 'Ephemeral' and 'Managed'. Defaults to 'Managed'. May not be changed after creation.
        /// </summary>
        [Output("osDiskType")]
        public Output<string?> OsDiskType { get; private set; } = null!;

        /// <summary>
        /// OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
        /// </summary>
        [Output("osType")]
        public Output<string?> OsType { get; private set; } = null!;

        /// <summary>
        /// Pod SubnetID specifies the VNet's subnet identifier for pods.
        /// </summary>
        [Output("podSubnetID")]
        public Output<string?> PodSubnetID { get; private set; } = null!;

        /// <summary>
        /// Describes whether the Agent Pool is Running or Stopped
        /// </summary>
        [Output("powerState")]
        public Output<Outputs.PowerStateResponse> PowerState { get; private set; } = null!;

        /// <summary>
        /// The current deployment or provisioning state, which only appears in the response.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// The ID for Proximity Placement Group.
        /// </summary>
        [Output("proximityPlacementGroupID")]
        public Output<string?> ProximityPlacementGroupID { get; private set; } = null!;

        /// <summary>
        /// ScaleSetEvictionPolicy to be used to specify eviction policy for Spot virtual machine scale set. Default to Delete.
        /// </summary>
        [Output("scaleSetEvictionPolicy")]
        public Output<string?> ScaleSetEvictionPolicy { get; private set; } = null!;

        /// <summary>
        /// ScaleSetPriority to be used to specify virtual machine scale set priority. Default to regular.
        /// </summary>
        [Output("scaleSetPriority")]
        public Output<string?> ScaleSetPriority { get; private set; } = null!;

        /// <summary>
        /// SpotMaxPrice to be used to specify the maximum price you are willing to pay in US Dollars. Possible values are any decimal value greater than zero or -1 which indicates default price to be up-to on-demand.
        /// </summary>
        [Output("spotMaxPrice")]
        public Output<double?> SpotMaxPrice { get; private set; } = null!;

        /// <summary>
        /// Agent pool tags to be persisted on the agent pool virtual machine scale set.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// AgentPoolType represents types of an agent pool
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// Settings for upgrading the agentpool
        /// </summary>
        [Output("upgradeSettings")]
        public Output<Outputs.AgentPoolUpgradeSettingsResponse?> UpgradeSettings { get; private set; } = null!;

        /// <summary>
        /// Size of agent VMs.
        /// </summary>
        [Output("vmSize")]
        public Output<string?> VmSize { get; private set; } = null!;

        /// <summary>
        /// VNet SubnetID specifies the VNet's subnet identifier for nodes and maybe pods
        /// </summary>
        [Output("vnetSubnetID")]
        public Output<string?> VnetSubnetID { get; private set; } = null!;


        /// <summary>
        /// Create a AgentPool resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public AgentPool(string name, AgentPoolArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:containerservice/v20201101:AgentPool", name, args ?? new AgentPoolArgs(), MakeResourceOptions(options, ""))
        {
        }

        private AgentPool(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:containerservice/v20201101:AgentPool", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:containerservice/latest:AgentPool"},
                    new Pulumi.Alias { Type = "azure-nextgen:containerservice/v20190201:AgentPool"},
                    new Pulumi.Alias { Type = "azure-nextgen:containerservice/v20190401:AgentPool"},
                    new Pulumi.Alias { Type = "azure-nextgen:containerservice/v20190601:AgentPool"},
                    new Pulumi.Alias { Type = "azure-nextgen:containerservice/v20190801:AgentPool"},
                    new Pulumi.Alias { Type = "azure-nextgen:containerservice/v20191001:AgentPool"},
                    new Pulumi.Alias { Type = "azure-nextgen:containerservice/v20191101:AgentPool"},
                    new Pulumi.Alias { Type = "azure-nextgen:containerservice/v20200101:AgentPool"},
                    new Pulumi.Alias { Type = "azure-nextgen:containerservice/v20200201:AgentPool"},
                    new Pulumi.Alias { Type = "azure-nextgen:containerservice/v20200301:AgentPool"},
                    new Pulumi.Alias { Type = "azure-nextgen:containerservice/v20200401:AgentPool"},
                    new Pulumi.Alias { Type = "azure-nextgen:containerservice/v20200601:AgentPool"},
                    new Pulumi.Alias { Type = "azure-nextgen:containerservice/v20200701:AgentPool"},
                    new Pulumi.Alias { Type = "azure-nextgen:containerservice/v20200901:AgentPool"},
                    new Pulumi.Alias { Type = "azure-nextgen:containerservice/v20201201:AgentPool"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing AgentPool resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static AgentPool Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new AgentPool(name, id, options);
        }
    }

    public sealed class AgentPoolArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the agent pool.
        /// </summary>
        [Input("agentPoolName", required: true)]
        public Input<string> AgentPoolName { get; set; } = null!;

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
        /// KubeletConfig specifies the configuration of kubelet on agent nodes.
        /// </summary>
        [Input("kubeletConfig")]
        public Input<Inputs.KubeletConfigArgs>? KubeletConfig { get; set; }

        /// <summary>
        /// LinuxOSConfig specifies the OS configuration of linux agent nodes.
        /// </summary>
        [Input("linuxOSConfig")]
        public Input<Inputs.LinuxOSConfigArgs>? LinuxOSConfig { get; set; }

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
        public InputUnion<string, Pulumi.AzureNextGen.ContainerService.V20201101.AgentPoolMode>? Mode { get; set; }

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
        /// OS disk type to be used for machines in a given agent pool. Allowed values are 'Ephemeral' and 'Managed'. Defaults to 'Managed'. May not be changed after creation.
        /// </summary>
        [Input("osDiskType")]
        public InputUnion<string, Pulumi.AzureNextGen.ContainerService.V20201101.OSDiskType>? OsDiskType { get; set; }

        /// <summary>
        /// OsType to be used to specify os type. Choose from Linux and Windows. Default to Linux.
        /// </summary>
        [Input("osType")]
        public InputUnion<string, Pulumi.AzureNextGen.ContainerService.V20201101.OSType>? OsType { get; set; }

        /// <summary>
        /// Pod SubnetID specifies the VNet's subnet identifier for pods.
        /// </summary>
        [Input("podSubnetID")]
        public Input<string>? PodSubnetID { get; set; }

        /// <summary>
        /// The ID for Proximity Placement Group.
        /// </summary>
        [Input("proximityPlacementGroupID")]
        public Input<string>? ProximityPlacementGroupID { get; set; }

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the managed cluster resource.
        /// </summary>
        [Input("resourceName", required: true)]
        public Input<string> ResourceName { get; set; } = null!;

        /// <summary>
        /// ScaleSetEvictionPolicy to be used to specify eviction policy for Spot virtual machine scale set. Default to Delete.
        /// </summary>
        [Input("scaleSetEvictionPolicy")]
        public InputUnion<string, Pulumi.AzureNextGen.ContainerService.V20201101.ScaleSetEvictionPolicy>? ScaleSetEvictionPolicy { get; set; }

        /// <summary>
        /// ScaleSetPriority to be used to specify virtual machine scale set priority. Default to regular.
        /// </summary>
        [Input("scaleSetPriority")]
        public InputUnion<string, Pulumi.AzureNextGen.ContainerService.V20201101.ScaleSetPriority>? ScaleSetPriority { get; set; }

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
        public InputUnion<string, Pulumi.AzureNextGen.ContainerService.V20201101.AgentPoolType>? Type { get; set; }

        /// <summary>
        /// Settings for upgrading the agentpool
        /// </summary>
        [Input("upgradeSettings")]
        public Input<Inputs.AgentPoolUpgradeSettingsArgs>? UpgradeSettings { get; set; }

        /// <summary>
        /// Size of agent VMs.
        /// </summary>
        [Input("vmSize")]
        public InputUnion<string, Pulumi.AzureNextGen.ContainerService.V20201101.ContainerServiceVMSizeTypes>? VmSize { get; set; }

        /// <summary>
        /// VNet SubnetID specifies the VNet's subnet identifier for nodes and maybe pods
        /// </summary>
        [Input("vnetSubnetID")]
        public Input<string>? VnetSubnetID { get; set; }

        public AgentPoolArgs()
        {
        }
    }
}
