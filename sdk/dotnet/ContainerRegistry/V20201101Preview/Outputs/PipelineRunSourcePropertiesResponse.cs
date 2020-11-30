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
    public sealed class PipelineRunSourcePropertiesResponse
    {
        /// <summary>
        /// The name of the source.
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// The type of the source.
        /// </summary>
        public readonly string? Type;

        [OutputConstructor]
        private PipelineRunSourcePropertiesResponse(
            string? name,

            string? type)
        {
            Name = name;
            Type = type;
        }
    }
}
