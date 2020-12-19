// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Media.V20180601Preview.Outputs
{

    [OutputType]
    public sealed class JobInputClipResponse
    {
        /// <summary>
        /// List of files. Required for JobInputHttp.
        /// </summary>
        public readonly ImmutableArray<string> Files;
        /// <summary>
        /// A label that is assigned to a JobInput, that is used to satisfy a reference used in the Transform. For example, a Transform can be authored so as to take an image file with the label 'xyz' and apply it as an overlay onto the input video before it is encoded. When submitting a Job, exactly one of the JobInputs should be the image file, and it should have the label 'xyz'.
        /// </summary>
        public readonly string? Label;
        /// <summary>
        /// The discriminator for derived types.
        /// Expected value is '#Microsoft.Media.JobInputClip'.
        /// </summary>
        public readonly string OdataType;

        [OutputConstructor]
        private JobInputClipResponse(
            ImmutableArray<string> files,

            string? label,

            string odataType)
        {
            Files = files;
            Label = label;
            OdataType = odataType;
        }
    }
}
