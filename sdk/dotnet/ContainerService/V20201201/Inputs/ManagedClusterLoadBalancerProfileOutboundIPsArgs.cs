// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerService.V20201201.Inputs
{

    /// <summary>
    /// Desired outbound IP resources for the cluster load balancer.
    /// </summary>
    public sealed class ManagedClusterLoadBalancerProfileOutboundIPsArgs : Pulumi.ResourceArgs
    {
        [Input("publicIPs")]
        private InputList<Inputs.ResourceReferenceArgs>? _publicIPs;

        /// <summary>
        /// A list of public IP resources.
        /// </summary>
        public InputList<Inputs.ResourceReferenceArgs> PublicIPs
        {
            get => _publicIPs ?? (_publicIPs = new InputList<Inputs.ResourceReferenceArgs>());
            set => _publicIPs = value;
        }

        public ManagedClusterLoadBalancerProfileOutboundIPsArgs()
        {
        }
    }
}
