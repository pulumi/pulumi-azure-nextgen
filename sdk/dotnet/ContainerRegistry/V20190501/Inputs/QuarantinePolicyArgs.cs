// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerRegistry.V20190501.Inputs
{

    /// <summary>
    /// The quarantine policy for a container registry.
    /// </summary>
    public sealed class QuarantinePolicyArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The value that indicates whether the policy is enabled or not.
        /// </summary>
        [Input("status")]
        public InputUnion<string, Pulumi.AzureNextGen.ContainerRegistry.V20190501.PolicyStatus>? Status { get; set; }

        public QuarantinePolicyArgs()
        {
        }
    }
}
