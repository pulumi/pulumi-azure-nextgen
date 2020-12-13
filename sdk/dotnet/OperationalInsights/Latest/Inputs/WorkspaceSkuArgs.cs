// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.OperationalInsights.Latest.Inputs
{

    /// <summary>
    /// The SKU (tier) of a workspace.
    /// </summary>
    public sealed class WorkspaceSkuArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The capacity reservation level for this workspace, when CapacityReservation sku is selected.
        /// </summary>
        [Input("capacityReservationLevel")]
        public Input<int>? CapacityReservationLevel { get; set; }

        /// <summary>
        /// The name of the SKU.
        /// </summary>
        [Input("name", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.OperationalInsights.Latest.WorkspaceSkuNameEnum> Name { get; set; } = null!;

        public WorkspaceSkuArgs()
        {
        }
    }
}
