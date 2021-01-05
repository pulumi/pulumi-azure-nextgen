// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Cdn.Latest.Outputs
{

    [OutputType]
    public sealed class LoadBalancingSettingsParametersResponse
    {
        /// <summary>
        /// The additional latency in milliseconds for probes to fall into the lowest latency bucket
        /// </summary>
        public readonly int? AdditionalLatencyInMilliseconds;
        /// <summary>
        /// The number of samples to consider for load balancing decisions
        /// </summary>
        public readonly int? SampleSize;
        /// <summary>
        /// The number of samples within the sample period that must succeed
        /// </summary>
        public readonly int? SuccessfulSamplesRequired;

        [OutputConstructor]
        private LoadBalancingSettingsParametersResponse(
            int? additionalLatencyInMilliseconds,

            int? sampleSize,

            int? successfulSamplesRequired)
        {
            AdditionalLatencyInMilliseconds = additionalLatencyInMilliseconds;
            SampleSize = sampleSize;
            SuccessfulSamplesRequired = successfulSamplesRequired;
        }
    }
}