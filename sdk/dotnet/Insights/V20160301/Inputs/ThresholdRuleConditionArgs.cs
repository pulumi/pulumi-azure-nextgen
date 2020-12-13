// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Insights.V20160301.Inputs
{

    /// <summary>
    /// A rule condition based on a metric crossing a threshold.
    /// </summary>
    public sealed class ThresholdRuleConditionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// the resource from which the rule collects its data. For this type dataSource will always be of type RuleMetricDataSource.
        /// </summary>
        [Input("dataSource")]
        public InputUnion<Inputs.RuleManagementEventDataSourceArgs, Inputs.RuleMetricDataSourceArgs>? DataSource { get; set; }

        /// <summary>
        /// specifies the type of condition. This can be one of three types: ManagementEventRuleCondition (occurrences of management events), LocationThresholdRuleCondition (based on the number of failures of a web test), and ThresholdRuleCondition (based on the threshold of a metric).
        /// </summary>
        [Input("odataType", required: true)]
        public Input<string> OdataType { get; set; } = null!;

        /// <summary>
        /// the operator used to compare the data and the threshold.
        /// </summary>
        [Input("operator", required: true)]
        public Input<Pulumi.AzureNextGen.Insights.V20160301.ConditionOperator> Operator { get; set; } = null!;

        /// <summary>
        /// the threshold value that activates the alert.
        /// </summary>
        [Input("threshold", required: true)]
        public Input<double> Threshold { get; set; } = null!;

        /// <summary>
        /// the time aggregation operator. How the data that are collected should be combined over time. The default value is the PrimaryAggregationType of the Metric.
        /// </summary>
        [Input("timeAggregation")]
        public Input<Pulumi.AzureNextGen.Insights.V20160301.TimeAggregationOperator>? TimeAggregation { get; set; }

        /// <summary>
        /// the period of time (in ISO 8601 duration format) that is used to monitor alert activity based on the threshold. If specified then it must be between 5 minutes and 1 day.
        /// </summary>
        [Input("windowSize")]
        public Input<string>? WindowSize { get; set; }

        public ThresholdRuleConditionArgs()
        {
        }
    }
}
