// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerRegistry.V20190401.Outputs
{

    [OutputType]
    public sealed class EncodedTaskStepResponse
    {
        /// <summary>
        /// List of base image dependencies for a step.
        /// </summary>
        public readonly ImmutableArray<Outputs.BaseImageDependencyResponse> BaseImageDependencies;
        /// <summary>
        /// The token (git PAT or SAS token of storage account blob) associated with the context for a step.
        /// </summary>
        public readonly string? ContextAccessToken;
        /// <summary>
        /// The URL(absolute or relative) of the source context for the task step.
        /// </summary>
        public readonly string? ContextPath;
        /// <summary>
        /// Base64 encoded value of the template/definition file content.
        /// </summary>
        public readonly string EncodedTaskContent;
        /// <summary>
        /// Base64 encoded value of the parameters/values file content.
        /// </summary>
        public readonly string? EncodedValuesContent;
        /// <summary>
        /// The type of the step.
        /// Expected value is 'EncodedTask'.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The collection of overridable values that can be passed when running a task.
        /// </summary>
        public readonly ImmutableArray<Outputs.SetValueResponse> Values;

        [OutputConstructor]
        private EncodedTaskStepResponse(
            ImmutableArray<Outputs.BaseImageDependencyResponse> baseImageDependencies,

            string? contextAccessToken,

            string? contextPath,

            string encodedTaskContent,

            string? encodedValuesContent,

            string type,

            ImmutableArray<Outputs.SetValueResponse> values)
        {
            BaseImageDependencies = baseImageDependencies;
            ContextAccessToken = contextAccessToken;
            ContextPath = contextPath;
            EncodedTaskContent = encodedTaskContent;
            EncodedValuesContent = encodedValuesContent;
            Type = type;
            Values = values;
        }
    }
}
