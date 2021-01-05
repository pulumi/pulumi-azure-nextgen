// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.HealthBot.Latest.Inputs
{

    /// <summary>
    /// The resource model definition representing SKU
    /// </summary>
    public sealed class SkuArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the HealthBot SKU
        /// </summary>
        [Input("name", required: true)]
        public Input<Pulumi.AzureNextGen.HealthBot.Latest.SkuName> Name { get; set; } = null!;

        public SkuArgs()
        {
        }
    }
}
