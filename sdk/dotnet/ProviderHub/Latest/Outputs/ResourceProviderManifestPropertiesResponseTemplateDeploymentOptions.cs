// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ProviderHub.Latest.Outputs
{

    [OutputType]
    public sealed class ResourceProviderManifestPropertiesResponseTemplateDeploymentOptions
    {
        public readonly ImmutableArray<string> PreflightOptions;
        public readonly bool? PreflightSupported;

        [OutputConstructor]
        private ResourceProviderManifestPropertiesResponseTemplateDeploymentOptions(
            ImmutableArray<string> preflightOptions,

            bool? preflightSupported)
        {
            PreflightOptions = preflightOptions;
            PreflightSupported = preflightSupported;
        }
    }
}
