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
    public sealed class SsisProjectResponseResult
    {
        /// <summary>
        /// Metadata description.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// Environment reference in project
        /// </summary>
        public readonly ImmutableArray<Outputs.SsisEnvironmentReferenceResponseResult> EnvironmentRefs;
        /// <summary>
        /// Folder id which contains project.
        /// </summary>
        public readonly double? FolderId;
        /// <summary>
        /// Metadata id.
        /// </summary>
        public readonly double? Id;
        /// <summary>
        /// Metadata name.
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// Parameters in project
        /// </summary>
        public readonly ImmutableArray<Outputs.SsisParameterResponseResult> Parameters;
        /// <summary>
        /// Type of metadata.
        /// Expected value is 'Project'.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Project version.
        /// </summary>
        public readonly double? Version;

        [OutputConstructor]
        private SsisProjectResponseResult(
            string? description,

            ImmutableArray<Outputs.SsisEnvironmentReferenceResponseResult> environmentRefs,

            double? folderId,

            double? id,

            string? name,

            ImmutableArray<Outputs.SsisParameterResponseResult> parameters,

            string type,

            double? version)
        {
            Description = description;
            EnvironmentRefs = environmentRefs;
            FolderId = folderId;
            Id = id;
            Name = name;
            Parameters = parameters;
            Type = type;
            Version = version;
        }
    }
}
