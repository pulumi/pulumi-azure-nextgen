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
    public sealed class LibraryRequirementsResponse
    {
        /// <summary>
        /// The library requirements.
        /// </summary>
        public readonly string? Content;
        /// <summary>
        /// The filename of the library requirements file.
        /// </summary>
        public readonly string? Filename;
        /// <summary>
        /// The last update time of the library requirements file.
        /// </summary>
        public readonly string Time;

        [OutputConstructor]
        private LibraryRequirementsResponse(
            string? content,

            string? filename,

            string time)
        {
            Content = content;
            Filename = filename;
            Time = time;
        }
    }
}
