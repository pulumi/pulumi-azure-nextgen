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
    public sealed class DefaultRolloutPropertiesResponseStatus
    {
        public readonly ImmutableArray<string> CompletedRegions;
        public readonly ImmutableDictionary<string, Outputs.ExtendedErrorInfoResponse>? FailedOrSkippedRegions;
        public readonly string? NextTrafficRegion;
        public readonly string? NextTrafficRegionScheduledTime;
        public readonly string? SubscriptionReregistrationResult;

        [OutputConstructor]
        private DefaultRolloutPropertiesResponseStatus(
            ImmutableArray<string> completedRegions,

            ImmutableDictionary<string, Outputs.ExtendedErrorInfoResponse>? failedOrSkippedRegions,

            string? nextTrafficRegion,

            string? nextTrafficRegionScheduledTime,

            string? subscriptionReregistrationResult)
        {
            CompletedRegions = completedRegions;
            FailedOrSkippedRegions = failedOrSkippedRegions;
            NextTrafficRegion = nextTrafficRegion;
            NextTrafficRegionScheduledTime = nextTrafficRegionScheduledTime;
            SubscriptionReregistrationResult = subscriptionReregistrationResult;
        }
    }
}
