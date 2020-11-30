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
    public sealed class PipelineRunTargetPropertiesResponse
    {
        /// <summary>
        /// The name of the target.
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// The type of the target.
        /// </summary>
        public readonly string? Type;

        [OutputConstructor]
        private PipelineRunTargetPropertiesResponse(
            string? name,

            string? type)
        {
            Name = name;
            Type = type;
        }
    }
}
