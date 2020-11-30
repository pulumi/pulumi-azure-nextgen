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
    public sealed class DefaultRolloutSpecificationResponseHighTraffic
    {
        public readonly ImmutableArray<string> Regions;
        public readonly string? WaitDuration;

        [OutputConstructor]
        private DefaultRolloutSpecificationResponseHighTraffic(
            ImmutableArray<string> regions,

            string? waitDuration)
        {
            Regions = regions;
            WaitDuration = waitDuration;
        }
    }
}
