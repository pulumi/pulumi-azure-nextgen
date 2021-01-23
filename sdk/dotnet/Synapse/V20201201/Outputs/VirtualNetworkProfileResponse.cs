// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Synapse.V20201201.Outputs
{

    [OutputType]
    public sealed class VirtualNetworkProfileResponse
    {
        /// <summary>
        /// Subnet ID used for computes in workspace
        /// </summary>
        public readonly string? ComputeSubnetId;

        [OutputConstructor]
        private VirtualNetworkProfileResponse(string? computeSubnetId)
        {
            ComputeSubnetId = computeSubnetId;
        }
    }
}
