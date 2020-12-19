// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.V20170901Preview.Outputs
{

    [OutputType]
    public sealed class ExecutionActivityResponse
    {
        /// <summary>
        /// Activity depends on condition.
        /// </summary>
        public readonly ImmutableArray<Outputs.ActivityDependencyResponse> DependsOn;
        /// <summary>
        /// Activity description.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// Linked service reference.
        /// </summary>
        public readonly Outputs.LinkedServiceReferenceResponse? LinkedServiceName;
        /// <summary>
        /// Activity name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Activity policy.
        /// </summary>
        public readonly Outputs.ActivityPolicyResponse? Policy;
        /// <summary>
        /// Type of activity.
        /// Expected value is 'Execution'.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private ExecutionActivityResponse(
            ImmutableArray<Outputs.ActivityDependencyResponse> dependsOn,

            string? description,

            Outputs.LinkedServiceReferenceResponse? linkedServiceName,

            string name,

            Outputs.ActivityPolicyResponse? policy,

            string type)
        {
            DependsOn = dependsOn;
            Description = description;
            LinkedServiceName = linkedServiceName;
            Name = name;
            Policy = policy;
            Type = type;
        }
    }
}
