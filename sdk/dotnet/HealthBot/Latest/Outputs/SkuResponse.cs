// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.HealthBot.Latest.Outputs
{

    [OutputType]
    public sealed class SkuResponse
    {
        /// <summary>
        /// If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
        /// </summary>
        public readonly int? Capacity;
        /// <summary>
        /// If the service has different generations of hardware, for the same SKU, then that can be captured here.
        /// </summary>
        public readonly string? Family;
        /// <summary>
        /// The name of the HealthBot SKU
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. 
        /// </summary>
        public readonly string? Size;
        /// <summary>
        /// This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
        /// </summary>
        public readonly string? Tier;

        [OutputConstructor]
        private SkuResponse(
            int? capacity,

            string? family,

            string name,

            string? size,

            string? tier)
        {
            Capacity = capacity;
            Family = family;
            Name = name;
            Size = size;
            Tier = tier;
        }
    }
}
