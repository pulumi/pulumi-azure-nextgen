// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.CostManagement.V20190101.Inputs
{

    /// <summary>
    /// The definition of data present in the query.
    /// </summary>
    public sealed class QueryDatasetArgs : Pulumi.ResourceArgs
    {
        [Input("aggregation")]
        private InputMap<Inputs.QueryAggregationArgs>? _aggregation;

        /// <summary>
        /// Dictionary of aggregation expression to use in the query. The key of each item in the dictionary is the alias for the aggregated column. Query can have up to 2 aggregation clauses.
        /// </summary>
        public InputMap<Inputs.QueryAggregationArgs> Aggregation
        {
            get => _aggregation ?? (_aggregation = new InputMap<Inputs.QueryAggregationArgs>());
            set => _aggregation = value;
        }

        /// <summary>
        /// Has configuration information for the data in the export. The configuration will be ignored if aggregation and grouping are provided.
        /// </summary>
        [Input("configuration")]
        public Input<Inputs.QueryDatasetConfigurationArgs>? Configuration { get; set; }

        /// <summary>
        /// Has filter expression to use in the query.
        /// </summary>
        [Input("filter")]
        public Input<Inputs.QueryFilterArgs>? Filter { get; set; }

        /// <summary>
        /// The granularity of rows in the query.
        /// </summary>
        [Input("granularity")]
        public InputUnion<string, Pulumi.AzureNextGen.CostManagement.V20190101.GranularityType>? Granularity { get; set; }

        [Input("grouping")]
        private InputList<Inputs.QueryGroupingArgs>? _grouping;

        /// <summary>
        /// Array of group by expression to use in the query. Query can have up to 2 group by clauses.
        /// </summary>
        public InputList<Inputs.QueryGroupingArgs> Grouping
        {
            get => _grouping ?? (_grouping = new InputList<Inputs.QueryGroupingArgs>());
            set => _grouping = value;
        }

        [Input("sorting")]
        private InputList<Inputs.QuerySortingConfigurationArgs>? _sorting;

        /// <summary>
        /// Array of sorting by columns in query.
        /// </summary>
        public InputList<Inputs.QuerySortingConfigurationArgs> Sorting
        {
            get => _sorting ?? (_sorting = new InputList<Inputs.QuerySortingConfigurationArgs>());
            set => _sorting = value;
        }

        public QueryDatasetArgs()
        {
        }
    }
}
