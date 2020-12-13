// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.TimeSeriesInsights.Latest.Inputs
{

    /// <summary>
    /// The sku determines the type of environment, either Gen1 (S1 or S2) or Gen2 (L1). For Gen1 environments the sku determines the capacity of the environment, the ingress rate, and the billing rate.
    /// </summary>
    public sealed class SkuArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The capacity of the sku. For Gen1 environments, this value can be changed to support scale out of environments after they have been created.
        /// </summary>
        [Input("capacity", required: true)]
        public Input<int> Capacity { get; set; } = null!;

        /// <summary>
        /// The name of this SKU.
        /// </summary>
        [Input("name", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.TimeSeriesInsights.Latest.SkuName> Name { get; set; } = null!;

        public SkuArgs()
        {
        }
    }
}
