// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Insights.Latest
{
    /// <summary>
    /// The Log Search Rule resource.
    /// Latest API Version: 2018-04-16.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:insights/latest:ScheduledQueryRule")]
    public partial class ScheduledQueryRule : Pulumi.CustomResource
    {
        /// <summary>
        /// Action needs to be taken on rule execution.
        /// </summary>
        [Output("action")]
        public Output<Union<Outputs.AlertingActionResponse, Outputs.LogToMetricActionResponse>> Action { get; private set; } = null!;

        /// <summary>
        /// The description of the Log Search rule.
        /// </summary>
        [Output("description")]
        public Output<string?> Description { get; private set; } = null!;

        /// <summary>
        /// The flag which indicates whether the Log Search rule is enabled. Value should be true or false
        /// </summary>
        [Output("enabled")]
        public Output<string?> Enabled { get; private set; } = null!;

        /// <summary>
        /// Last time the rule was updated in IS08601 format.
        /// </summary>
        [Output("lastUpdatedTime")]
        public Output<string> LastUpdatedTime { get; private set; } = null!;

        /// <summary>
        /// Resource location
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Azure resource name
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Provisioning state of the scheduled query rule
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Schedule (Frequency, Time Window) for rule. Required for action type - AlertingAction
        /// </summary>
        [Output("schedule")]
        public Output<Outputs.ScheduleResponse?> Schedule { get; private set; } = null!;

        /// <summary>
        /// Data Source against which rule will Query Data
        /// </summary>
        [Output("source")]
        public Output<Outputs.SourceResponse> Source { get; private set; } = null!;

        /// <summary>
        /// Resource tags
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Azure resource type
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a ScheduledQueryRule resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ScheduledQueryRule(string name, ScheduledQueryRuleArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:insights/latest:ScheduledQueryRule", name, args ?? new ScheduledQueryRuleArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ScheduledQueryRule(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:insights/latest:ScheduledQueryRule", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:insights/v20180416:ScheduledQueryRule"},
                    new Pulumi.Alias { Type = "azure-nextgen:insights/v20200501preview:ScheduledQueryRule"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ScheduledQueryRule resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ScheduledQueryRule Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new ScheduledQueryRule(name, id, options);
        }
    }

    public sealed class ScheduledQueryRuleArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Action needs to be taken on rule execution.
        /// </summary>
        [Input("action", required: true)]
        public InputUnion<Inputs.AlertingActionArgs, Inputs.LogToMetricActionArgs> Action { get; set; } = null!;

        /// <summary>
        /// The description of the Log Search rule.
        /// </summary>
        [Input("description")]
        public Input<string>? Description { get; set; }

        /// <summary>
        /// The flag which indicates whether the Log Search rule is enabled. Value should be true or false
        /// </summary>
        [Input("enabled")]
        public InputUnion<string, Pulumi.AzureNextGen.Insights.Latest.Enabled>? Enabled { get; set; }

        /// <summary>
        /// Resource location
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the rule.
        /// </summary>
        [Input("ruleName", required: true)]
        public Input<string> RuleName { get; set; } = null!;

        /// <summary>
        /// Schedule (Frequency, Time Window) for rule. Required for action type - AlertingAction
        /// </summary>
        [Input("schedule")]
        public Input<Inputs.ScheduleArgs>? Schedule { get; set; }

        /// <summary>
        /// Data Source against which rule will Query Data
        /// </summary>
        [Input("source", required: true)]
        public Input<Inputs.SourceArgs> Source { get; set; } = null!;

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// Resource tags
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        public ScheduledQueryRuleArgs()
        {
        }
    }
}
