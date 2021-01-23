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
    public sealed class SsisFolderResponseResult
    {
        /// <summary>
        /// Metadata description.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// Metadata id.
        /// </summary>
        public readonly double? Id;
        /// <summary>
        /// Metadata name.
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// Type of metadata.
        /// Expected value is 'Folder'.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private SsisFolderResponseResult(
            string? description,

            double? id,

            string? name,

            string type)
        {
            Description = description;
            Id = id;
            Name = name;
            Type = type;
        }
    }
}
