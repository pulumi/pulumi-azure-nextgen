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
    public sealed class SelfHostedIntegrationRuntimeResponse
    {
        /// <summary>
        /// Integration runtime description.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// Linked integration runtime type from data factory
        /// </summary>
        public readonly Union<Outputs.LinkedIntegrationRuntimeKeyAuthorizationResponse, Outputs.LinkedIntegrationRuntimeRbacAuthorizationResponse>? LinkedInfo;
        /// <summary>
        /// Type of integration runtime.
        /// Expected value is 'SelfHosted'.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private SelfHostedIntegrationRuntimeResponse(
            string? description,

            Union<Outputs.LinkedIntegrationRuntimeKeyAuthorizationResponse, Outputs.LinkedIntegrationRuntimeRbacAuthorizationResponse>? linkedInfo,

            string type)
        {
            Description = description;
            LinkedInfo = linkedInfo;
            Type = type;
        }
    }
}
