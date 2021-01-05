// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.AlertsManagement.Latest
{
    public static class GetSmartDetectorAlertRule
    {
        public static Task<GetSmartDetectorAlertRuleResult> InvokeAsync(GetSmartDetectorAlertRuleArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetSmartDetectorAlertRuleResult>("azure-nextgen:alertsmanagement/latest:getSmartDetectorAlertRule", args ?? new GetSmartDetectorAlertRuleArgs(), options.WithVersion());
    }


    public sealed class GetSmartDetectorAlertRuleArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the alert rule.
        /// </summary>
        [Input("alertRuleName", required: true)]
        public string AlertRuleName { get; set; } = null!;

        /// <summary>
        /// Indicates if Smart Detector should be expanded.
        /// </summary>
        [Input("expandDetector")]
        public bool? ExpandDetector { get; set; }

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetSmartDetectorAlertRuleArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetSmartDetectorAlertRuleResult
    {
        /// <summary>
        /// The alert rule actions.
        /// </summary>
        public readonly Outputs.ActionGroupsInformationResponse ActionGroups;
        /// <summary>
        /// The alert rule description.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// The alert rule's detector.
        /// </summary>
        public readonly Outputs.DetectorResponse Detector;
        /// <summary>
        /// The alert rule frequency in ISO8601 format. The time granularity must be in minutes and minimum value is 5 minutes.
        /// </summary>
        public readonly string Frequency;
        /// <summary>
        /// The resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The resource location.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// The resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The alert rule resources scope.
        /// </summary>
        public readonly ImmutableArray<string> Scope;
        /// <summary>
        /// The alert rule severity.
        /// </summary>
        public readonly string Severity;
        /// <summary>
        /// The alert rule state.
        /// </summary>
        public readonly string State;
        /// <summary>
        /// The resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// The alert rule throttling information.
        /// </summary>
        public readonly Outputs.ThrottlingInformationResponse? Throttling;
        /// <summary>
        /// The resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetSmartDetectorAlertRuleResult(
            Outputs.ActionGroupsInformationResponse actionGroups,

            string? description,

            Outputs.DetectorResponse detector,

            string frequency,

            string id,

            string? location,

            string name,

            ImmutableArray<string> scope,

            string severity,

            string state,

            ImmutableDictionary<string, string>? tags,

            Outputs.ThrottlingInformationResponse? throttling,

            string type)
        {
            ActionGroups = actionGroups;
            Description = description;
            Detector = detector;
            Frequency = frequency;
            Id = id;
            Location = location;
            Name = name;
            Scope = scope;
            Severity = severity;
            State = state;
            Tags = tags;
            Throttling = throttling;
            Type = type;
        }
    }
}
