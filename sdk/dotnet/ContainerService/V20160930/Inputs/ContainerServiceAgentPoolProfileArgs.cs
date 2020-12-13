// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerService.V20160930.Inputs
{

    /// <summary>
    /// Profile for the container service agent pool.
    /// </summary>
    public sealed class ContainerServiceAgentPoolProfileArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Number of agents (VMs) to host docker containers. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1. 
        /// </summary>
        [Input("count", required: true)]
        public Input<int> Count { get; set; } = null!;

        /// <summary>
        /// DNS prefix to be used to create the FQDN for the agent pool.
        /// </summary>
        [Input("dnsPrefix", required: true)]
        public Input<string> DnsPrefix { get; set; } = null!;

        /// <summary>
        /// Unique name of the agent pool profile in the context of the subscription and resource group.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// Size of agent VMs.
        /// </summary>
        [Input("vmSize", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.ContainerService.V20160930.ContainerServiceVMSizeTypes> VmSize { get; set; } = null!;

        public ContainerServiceAgentPoolProfileArgs()
        {
        }
    }
}
