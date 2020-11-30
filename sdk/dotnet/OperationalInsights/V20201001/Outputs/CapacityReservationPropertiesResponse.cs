// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.OperationalInsights.V20201001.Outputs
{

    [OutputType]
    public sealed class CapacityReservationPropertiesResponse
    {
        /// <summary>
        /// The last time Sku was updated.
        /// </summary>
        public readonly string LastSkuUpdate;
        /// <summary>
        /// Maximum CapacityReservation value in GB.
        /// </summary>
        public readonly int MaxCapacity;
        /// <summary>
        /// Minimum CapacityReservation value in GB.
        /// </summary>
        public readonly int MinCapacity;

        [OutputConstructor]
        private CapacityReservationPropertiesResponse(
            string lastSkuUpdate,

            int maxCapacity,

            int minCapacity)
        {
            LastSkuUpdate = lastSkuUpdate;
            MaxCapacity = maxCapacity;
            MinCapacity = minCapacity;
        }
    }
}
