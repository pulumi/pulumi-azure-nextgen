// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DevTestLab.V20160515
{
    /// <summary>
    /// A schedule.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:devtestlab/v20160515:Schedule")]
    public partial class Schedule : Pulumi.CustomResource
    {
        /// <summary>
        /// The creation date of the schedule.
        /// </summary>
        [Output("createdDate")]
        public Output<string> CreatedDate { get; private set; } = null!;

        /// <summary>
        /// If the schedule will occur once each day of the week, specify the daily recurrence.
        /// </summary>
        [Output("dailyRecurrence")]
        public Output<Outputs.DayDetailsResponse?> DailyRecurrence { get; private set; } = null!;

        /// <summary>
        /// If the schedule will occur multiple times a day, specify the hourly recurrence.
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
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Notification settings.
        /// </summary>
        [Output("notificationSettings")]
        public Output<Outputs.NotificationSettingsResponse?> NotificationSettings { get; private set; } = null!;

        /// <summary>
        /// The provisioning status of the resource.
        /// </summary>
        [Output("provisioningState")]
        public Output<string?> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// The status of the schedule (i.e. Enabled, Disabled)
        /// </summary>
        [Output("status")]
        public Output<string?> Status { get; private set; } = null!;

        /// <summary>
        /// The tags of the resource.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The resource ID to which the schedule belongs
        /// </summary>
        [Output("targetResourceId")]
        public Output<string?> TargetResourceId { get; private set; } = null!;

        /// <summary>
        /// The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart).
        /// </summary>
        [Output("taskType")]
        public Output<string?> TaskType { get; private set; } = null!;

        /// <summary>
        /// The time zone ID (e.g. Pacific Standard time).
        /// </summary>
        [Output("timeZoneId")]
        public Output<string?> TimeZoneId { get; private set; } = null!;

        /// <summary>
        /// The type of the resource.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// The unique immutable identifier of a resource (Guid).
        /// </summary>
        [Output("uniqueIdentifier")]
        public Output<string?> UniqueIdentifier { get; private set; } = null!;

        /// <summary>
        /// If the schedule will occur only some days of the week, specify the weekly recurrence.
        /// </summary>
        [Output("weeklyRecurrence")]
        public Output<Outputs.WeekDetailsResponse?> WeeklyRecurrence { get; private set; } = null!;


        /// <summary>
        /// Create a Schedule resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Schedule(string name, ScheduleArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:devtestlab/v20160515:Schedule", name, args ?? new ScheduleArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Schedule(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:devtestlab/v20160515:Schedule", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:devtestlab/latest:Schedule"},
                    new Pulumi.Alias { Type = "azure-nextgen:devtestlab/v20150521preview:Schedule"},
                    new Pulumi.Alias { Type = "azure-nextgen:devtestlab/v20180915:Schedule"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Schedule resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Schedule Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Schedule(name, id, options);
        }
    }

    public sealed class ScheduleArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// If the schedule will occur once each day of the week, specify the daily recurrence.
        /// </summary>
        [Input("dailyRecurrence")]
        public Input<Inputs.DayDetailsArgs>? DailyRecurrence { get; set; }

        /// <summary>
        /// If the schedule will occur multiple times a day, specify the hourly recurrence.
        /// </summary>
        [Input("hourlyRecurrence")]
        public Input<Inputs.HourDetailsArgs>? HourlyRecurrence { get; set; }

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
        /// The name of the schedule.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// Notification settings.
        /// </summary>
        [Input("notificationSettings")]
        public Input<Inputs.NotificationSettingsArgs>? NotificationSettings { get; set; }

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
        /// The status of the schedule (i.e. Enabled, Disabled)
        /// </summary>
        [Input("status")]
        public InputUnion<string, Pulumi.AzureNextGen.DevTestLab.V20160515.EnableStatus>? Status { get; set; }

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
        /// The resource ID to which the schedule belongs
        /// </summary>
        [Input("targetResourceId")]
        public Input<string>? TargetResourceId { get; set; }

        /// <summary>
        /// The task type of the schedule (e.g. LabVmsShutdownTask, LabVmAutoStart).
        /// </summary>
        [Input("taskType")]
        public Input<string>? TaskType { get; set; }

        /// <summary>
        /// The time zone ID (e.g. Pacific Standard time).
        /// </summary>
        [Input("timeZoneId")]
        public Input<string>? TimeZoneId { get; set; }

        /// <summary>
        /// The unique immutable identifier of a resource (Guid).
        /// </summary>
        [Input("uniqueIdentifier")]
        public Input<string>? UniqueIdentifier { get; set; }

        /// <summary>
        /// If the schedule will occur only some days of the week, specify the weekly recurrence.
        /// </summary>
        [Input("weeklyRecurrence")]
        public Input<Inputs.WeekDetailsArgs>? WeeklyRecurrence { get; set; }

        public ScheduleArgs()
        {
        }
    }
}
