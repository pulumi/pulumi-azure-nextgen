// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Resources.V20201001Preview.Outputs
{

    [OutputType]
    public sealed class TemplateSpecTemplateArtifactResponse
    {
        /// <summary>
        /// The kind of artifact.
        /// </summary>
        public readonly string Kind;
        /// <summary>
        /// A filesystem safe relative path of the artifact.
        /// </summary>
        public readonly string Path;
        /// <summary>
        /// The Azure Resource Manager template.
        /// </summary>
        public readonly object Template;

        [OutputConstructor]
        private TemplateSpecTemplateArtifactResponse(
            string kind,

            string path,

            object template)
        {
            Kind = kind;
            Path = path;
            Template = template;
        }
    }
}
