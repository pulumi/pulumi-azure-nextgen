// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerRegistry.V20201101Preview.Outputs
{

    [OutputType]
    public sealed class TrustPolicyResponse
    {
        /// <summary>
        /// The value that indicates whether the policy is enabled or not.
        /// </summary>
        public readonly string? Status;
        /// <summary>
        /// The type of trust policy.
        /// </summary>
        public readonly string? Type;

        [OutputConstructor]
        private TrustPolicyResponse(
            string? status,

            string? type)
        {
            Status = status;
            Type = type;
        }
    }
}
