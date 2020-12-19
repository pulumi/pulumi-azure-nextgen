// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ServiceFabric.V20170701Preview.Outputs
{

    [OutputType]
    public sealed class UniformInt64RangePartitionSchemeDescriptionResponse
    {
        /// <summary>
        /// The number of partitions.
        /// </summary>
        public readonly int Count;
        /// <summary>
        /// String indicating the upper bound of the partition key range that
        /// should be split between the partition ‘Count’
        /// </summary>
        public readonly string HighKey;
        /// <summary>
        /// String indicating the lower bound of the partition key range that
        /// should be split between the partition ‘Count’
        /// </summary>
        public readonly string LowKey;
        /// <summary>
        /// Specifies how the service is partitioned.
        /// Expected value is 'UniformInt64Range'.
        /// </summary>
        public readonly string PartitionScheme;

        [OutputConstructor]
        private UniformInt64RangePartitionSchemeDescriptionResponse(
            int count,

            string highKey,

            string lowKey,

            string partitionScheme)
        {
            Count = count;
            HighKey = highKey;
            LowKey = lowKey;
            PartitionScheme = partitionScheme;
        }
    }
}
