// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Solutions.V20200821Preview.Inputs
{

    /// <summary>
    /// Application definition artifact.
    /// </summary>
    public sealed class ApplicationDefinitionArtifactArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The managed application definition artifact name.
        /// </summary>
        [Input("name", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.Solutions.V20200821Preview.ApplicationDefinitionArtifactName> Name { get; set; } = null!;

        /// <summary>
        /// The managed application definition artifact type.
        /// </summary>
        [Input("type", required: true)]
        public Input<Pulumi.AzureNextGen.Solutions.V20200821Preview.ApplicationArtifactType> Type { get; set; } = null!;

        /// <summary>
        /// The managed application definition artifact blob uri.
        /// </summary>
        [Input("uri", required: true)]
        public Input<string> Uri { get; set; } = null!;

        public ApplicationDefinitionArtifactArgs()
        {
        }
    }
}
