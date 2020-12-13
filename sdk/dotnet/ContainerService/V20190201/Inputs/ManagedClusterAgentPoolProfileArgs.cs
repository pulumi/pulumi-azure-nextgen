// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerService.V20190201.Inputs
{

    /// <summary>
    /// Profile for the container service agent pool.
    /// </summary>
    public sealed class ManagedClusterAgentPoolProfileArgs : Pulumi.ResourceArgs
    {
        [Input("availabilityZones")]
        private InputList<string>? _availabilityZones;

        /// <summary>
        /// (PREVIEW) Availability zones for nodes. Must use VirtualMachineScaleSets AgentPoolType.
        /// </summary>
        public InputList<string> AvailabilityZones
        {
            get => _availabilityZones ?? (_availabilityZones = new InputList<string>());
            set => _availabilityZones = value;
        }

        /// <summary>
        /// Number of agents (VMs) to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1. 
        /// </summary>
        [Input("count", required: true)]
        public Input<int> Count { get; set; } = null!;

        /// <summary>
        /// Whether to enable auto-scaler
        /// </summary>
        [Input("enableAutoScaling")]
        public Input<bool>? EnableAutoScaling { get; set; }

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
        /// Unique name of the agent pool profile in the context of the subscription and resource group.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

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
        public InputUnion<string, Pulumi.AzureNextGen.ContainerService.V20190201.OSType>? OsType { get; set; }

        /// <summary>
        /// AgentPoolType represents types of an agent pool
        /// </summary>
        [Input("type")]
        public InputUnion<string, Pulumi.AzureNextGen.ContainerService.V20190201.AgentPoolType>? Type { get; set; }

        /// <summary>
        /// Size of agent VMs.
        /// </summary>
        [Input("vmSize", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.ContainerService.V20190201.ContainerServiceVMSizeTypes> VmSize { get; set; } = null!;

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
