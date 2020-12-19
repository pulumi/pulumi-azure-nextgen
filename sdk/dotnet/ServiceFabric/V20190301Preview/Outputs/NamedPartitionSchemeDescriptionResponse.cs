// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ServiceFabric.V20190301Preview.Outputs
{

    [OutputType]
    public sealed class NamedPartitionSchemeDescriptionResponse
    {
        /// <summary>
        /// The number of partitions.
        /// </summary>
        public readonly int Count;
        /// <summary>
        /// Array of size specified by the ‘Count’ parameter, for the names of the partitions.
        /// </summary>
        public readonly ImmutableArray<string> Names;
        /// <summary>
        /// Specifies how the service is partitioned.
        /// Expected value is 'Named'.
        /// </summary>
        public readonly string PartitionScheme;

        [OutputConstructor]
        private NamedPartitionSchemeDescriptionResponse(
            int count,

            ImmutableArray<string> names,

            string partitionScheme)
        {
            Count = count;
            Names = names;
            PartitionScheme = partitionScheme;
        }
    }
}
