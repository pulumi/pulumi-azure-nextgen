// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Insights.V20160301.Outputs
{

    [OutputType]
    public sealed class ManagementEventRuleConditionResponse
    {
        /// <summary>
        /// How the data that is collected should be combined over time and when the alert is activated. Note that for management event alerts aggregation is optional – if it is not provided then any event will cause the alert to activate.
        /// </summary>
        public readonly Outputs.ManagementEventAggregationConditionResponse? Aggregation;
        /// <summary>
        /// the resource from which the rule collects its data. For this type dataSource will always be of type RuleMetricDataSource.
        /// </summary>
        public readonly Union<Outputs.RuleManagementEventDataSourceResponse, Outputs.RuleMetricDataSourceResponse>? DataSource;
        /// <summary>
        /// specifies the type of condition. This can be one of three types: ManagementEventRuleCondition (occurrences of management events), LocationThresholdRuleCondition (based on the number of failures of a web test), and ThresholdRuleCondition (based on the threshold of a metric).
        /// Expected value is 'Microsoft.Azure.Management.Insights.Models.ManagementEventRuleCondition'.
        /// </summary>
        public readonly string OdataType;

        [OutputConstructor]
        private ManagementEventRuleConditionResponse(
            Outputs.ManagementEventAggregationConditionResponse? aggregation,

            Union<Outputs.RuleManagementEventDataSourceResponse, Outputs.RuleMetricDataSourceResponse>? dataSource,

            string odataType)
        {
            Aggregation = aggregation;
            DataSource = dataSource;
            OdataType = odataType;
        }
    }
}
