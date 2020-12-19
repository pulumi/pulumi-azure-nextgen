// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ServiceFabric.V20170701Preview.Inputs
{

    /// <summary>
    /// Describes the named partition scheme of the service.
    /// </summary>
    public sealed class NamedPartitionSchemeDescriptionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The number of partitions.
        /// </summary>
        [Input("count", required: true)]
        public Input<int> Count { get; set; } = null!;

        [Input("names", required: true)]
        private InputList<string>? _names;

        /// <summary>
        /// Array of size specified by the ‘Count’ parameter, for the names of the partitions.
        /// </summary>
        public InputList<string> Names
        {
            get => _names ?? (_names = new InputList<string>());
            set => _names = value;
        }

        /// <summary>
        /// Specifies how the service is partitioned.
        /// Expected value is 'Named'.
        /// </summary>
        [Input("partitionScheme", required: true)]
        public Input<string> PartitionScheme { get; set; } = null!;

        public NamedPartitionSchemeDescriptionArgs()
        {
        }
    }
}
