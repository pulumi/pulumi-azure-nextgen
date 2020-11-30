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
    public sealed class QuarantinePolicyResponse
    {
        /// <summary>
        /// The value that indicates whether the policy is enabled or not.
        /// </summary>
        public readonly string? Status;

        [OutputConstructor]
        private QuarantinePolicyResponse(string? status)
        {
            Status = status;
        }
    }
}
