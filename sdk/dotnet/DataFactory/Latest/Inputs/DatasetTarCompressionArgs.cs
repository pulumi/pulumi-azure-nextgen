// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataFactory.Latest.Inputs
{

    /// <summary>
    /// The Tar archive method used on a dataset.
    /// </summary>
    public sealed class DatasetTarCompressionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Type of dataset compression.
        /// Expected value is 'Tar'.
        /// </summary>
        [Input("type", required: true)]
        public Input<string> Type { get; set; } = null!;

        public DatasetTarCompressionArgs()
        {
        }
    }
}
