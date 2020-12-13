// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ContainerRegistry.V20190601Preview.Inputs
{

    /// <summary>
    /// The platform properties against which the run has to happen.
    /// </summary>
    public sealed class PlatformPropertiesArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The OS architecture.
        /// </summary>
        [Input("architecture")]
        public InputUnion<string, Pulumi.AzureNextGen.ContainerRegistry.V20190601Preview.Architecture>? Architecture { get; set; }

        /// <summary>
        /// The operating system type required for the run.
        /// </summary>
        [Input("os", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.ContainerRegistry.V20190601Preview.OS> Os { get; set; } = null!;

        /// <summary>
        /// Variant of the CPU.
        /// </summary>
        [Input("variant")]
        public InputUnion<string, Pulumi.AzureNextGen.ContainerRegistry.V20190601Preview.Variant>? Variant { get; set; }

        public PlatformPropertiesArgs()
        {
        }
    }
}
