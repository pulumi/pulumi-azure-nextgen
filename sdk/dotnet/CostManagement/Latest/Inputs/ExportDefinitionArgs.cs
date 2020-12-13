// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.CostManagement.Latest.Inputs
{

    /// <summary>
    /// The definition of an export.
    /// </summary>
    public sealed class ExportDefinitionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The definition for data in the export.
        /// </summary>
        [Input("dataSet")]
        public Input<Inputs.ExportDatasetArgs>? DataSet { get; set; }

        /// <summary>
        /// Has time period for pulling data for the export.
        /// </summary>
        [Input("timePeriod")]
        public Input<Inputs.ExportTimePeriodArgs>? TimePeriod { get; set; }

        /// <summary>
        /// The time frame for pulling data for the export. If custom, then a specific time period must be provided.
        /// </summary>
        [Input("timeframe", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.CostManagement.Latest.TimeframeType> Timeframe { get; set; } = null!;

        /// <summary>
        /// The type of the export. Note that 'Usage' is equivalent to 'ActualCost' and is applicable to exports that do not yet provide data for charges or amortization for service reservations.
        /// </summary>
        [Input("type", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.CostManagement.Latest.ExportType> Type { get; set; } = null!;

        public ExportDefinitionArgs()
        {
        }
    }
}
