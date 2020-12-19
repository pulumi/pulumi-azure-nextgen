// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DevTestLab.V20150521Preview
{
    /// <summary>
    /// A schedule.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:devtestlab/v20150521preview:ScheduleResource")]
    public partial class ScheduleResource : Pulumi.CustomResource
    {
        /// <summary>
        /// The daily recurrence of the schedule.
        /// </summary>
        [Output("dailyRecurrence")]
        public Output<Outputs.DayDetailsResponse?> DailyRecurrence { get; private set; } = null!;

        /// <summary>
        /// The hourly recurrence of the schedule.
        /// </summary>
        [Output("hourlyRecurrence")]
        public Output<Outputs.HourDetailsResponse?> HourlyRecurrence { get; private set; } = null!;

        /// <summary>
        /// The location of the resource.
        /// </summary>
        [Output("location")]
        public Output<string?> Location { get; private set; } = null!;

        /// <summary>
        /// The name of the resource.
        /// </summary>
        [Output("name")]
        public Output<string?> Name { get; private set; } = null!;

        /// <summary>
        /// The provisioning status of the resource.
        /// </summary>
        [Output("provisioningState")]
        public Output<string?> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// The status of the schedule.
        /// </summary>
        [Output("status")]
        public Output<string?> Status { get; private set; } = null!;

        /// <summary>
        /// The tags of the resource.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The task type of the schedule.
        /// </summary>
        [Output("taskType")]
        public Output<string?> TaskType { get; private set; } = null!;

        /// <summary>
        /// The time zone id.
        /// </summary>
        [Output("timeZoneId")]
        public Output<string?> TimeZoneId { get; private set; } = null!;

        /// <summary>
        /// The type of the resource.
        /// </summary>
        [Output("type")]
        public Output<string?> Type { get; private set; } = null!;

        /// <summary>
        /// The weekly recurrence of the schedule.
        /// </summary>
        [Output("weeklyRecurrence")]
        public Output<Outputs.WeekDetailsResponse?> WeeklyRecurrence { get; private set; } = null!;


        /// <summary>
        /// Create a ScheduleResource resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ScheduleResource(string name, ScheduleResourceArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:devtestlab/v20150521preview:ScheduleResource", name, args ?? new ScheduleResourceArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ScheduleResource(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:devtestlab/v20150521preview:ScheduleResource", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:devtestlab/latest:ScheduleResource"},
                    new Pulumi.Alias { Type = "azure-nextgen:devtestlab/v20160515:ScheduleResource"},
                    new Pulumi.Alias { Type = "azure-nextgen:devtestlab/v20180915:ScheduleResource"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ScheduleResource resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ScheduleResource Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new ScheduleResource(name, id, options);
        }
    }

    public sealed class ScheduleResourceArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The daily recurrence of the schedule.
        /// </summary>
        [Input("dailyRecurrence")]
        public Input<Inputs.DayDetailsArgs>? DailyRecurrence { get; set; }

        /// <summary>
        /// The hourly recurrence of the schedule.
        /// </summary>
        [Input("hourlyRecurrence")]
        public Input<Inputs.HourDetailsArgs>? HourlyRecurrence { get; set; }

        /// <summary>
        /// The identifier of the resource.
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// The name of the lab.
        /// </summary>
        [Input("labName", required: true)]
        public Input<string> LabName { get; set; } = null!;

        /// <summary>
        /// The location of the resource.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// The name of the resource.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// The provisioning status of the resource.
        /// </summary>
        [Input("provisioningState")]
        public Input<string>? ProvisioningState { get; set; }

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The status of the schedule.
        /// </summary>
        [Input("status")]
        public InputUnion<string, Pulumi.AzureNextGen.DevTestLab.V20150521Preview.EnableStatus>? Status { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// The tags of the resource.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// The task type of the schedule.
        /// </summary>
        [Input("taskType")]
        public InputUnion<string, Pulumi.AzureNextGen.DevTestLab.V20150521Preview.TaskType>? TaskType { get; set; }

        /// <summary>
        /// The time zone id.
        /// </summary>
        [Input("timeZoneId")]
        public Input<string>? TimeZoneId { get; set; }

        /// <summary>
        /// The type of the resource.
        /// </summary>
        [Input("type")]
        public Input<string>? Type { get; set; }

        /// <summary>
        /// The weekly recurrence of the schedule.
        /// </summary>
        [Input("weeklyRecurrence")]
        public Input<Inputs.WeekDetailsArgs>? WeeklyRecurrence { get; set; }

        public ScheduleResourceArgs()
        {
        }
    }
}
