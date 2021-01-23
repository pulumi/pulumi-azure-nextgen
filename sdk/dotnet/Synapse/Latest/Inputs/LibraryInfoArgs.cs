// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Synapse.Latest.Inputs
{

    /// <summary>
    /// Library/package information of a Big Data pool powered by Apache Spark
    /// </summary>
    public sealed class LibraryInfoArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Storage blob container name.
        /// </summary>
        [Input("containerName")]
        public Input<string>? ContainerName { get; set; }

        /// <summary>
        /// Name of the library.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Storage blob path of library.
        /// </summary>
        [Input("path")]
        public Input<string>? Path { get; set; }

        /// <summary>
        /// Type of the library.
        /// </summary>
        [Input("type")]
        public Input<string>? Type { get; set; }

        public LibraryInfoArgs()
        {
        }
    }
}
