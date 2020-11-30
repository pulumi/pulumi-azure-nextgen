// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ProviderHub.V20201120.Outputs
{

    [OutputType]
    public sealed class DefaultRolloutSpecificationResponseCanary
    {
        public readonly ImmutableArray<string> Regions;
        public readonly ImmutableArray<string> SkipRegions;

        [OutputConstructor]
        private DefaultRolloutSpecificationResponseCanary(
            ImmutableArray<string> regions,

            ImmutableArray<string> skipRegions)
        {
            Regions = regions;
            SkipRegions = skipRegions;
        }
    }
}
