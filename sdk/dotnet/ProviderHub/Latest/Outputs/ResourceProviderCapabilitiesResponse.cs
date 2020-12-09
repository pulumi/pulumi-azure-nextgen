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
    public sealed class ResourceProviderCapabilitiesResponse
    {
        public readonly string Effect;
        public readonly string QuotaId;
        public readonly ImmutableArray<string> RequiredFeatures;

        [OutputConstructor]
        private ResourceProviderCapabilitiesResponse(
            string effect,

            string quotaId,

            ImmutableArray<string> requiredFeatures)
        {
            Effect = effect;
            QuotaId = quotaId;
            RequiredFeatures = requiredFeatures;
        }
    }
}