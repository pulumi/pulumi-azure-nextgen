// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DataBoxEdge.V20190701
{
    /// <summary>
    /// The bandwidth schedule details.
    /// </summary>
    public partial class BandwidthSchedule : Pulumi.CustomResource
    {
        /// <summary>
        /// The days of the week when this schedule is applicable.
        /// </summary>
        [Output("days")]
        public Output<ImmutableArray<string>> Days { get; private set; } = null!;

        /// <summary>
        /// The object name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The bandwidth rate in Mbps.
        /// </summary>
        [Output("rateInMbps")]
        public Output<int> RateInMbps { get; private set; } = null!;

        /// <summary>
        /// The start time of the schedule in UTC.
        /// </summary>
        [Output("start")]
        public Output<string> Start { get; private set; } = null!;

        /// <summary>
        /// The stop time of the schedule in UTC.
        /// </summary>
        [Output("stop")]
        public Output<string> Stop { get; private set; } = null!;

        /// <summary>
        /// The hierarchical type of the object.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a BandwidthSchedule resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public BandwidthSchedule(string name, BandwidthScheduleArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:databoxedge/v20190701:BandwidthSchedule", name, args ?? new BandwidthScheduleArgs(), MakeResourceOptions(options, ""))
        {
        }

        private BandwidthSchedule(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:databoxedge/v20190701:BandwidthSchedule", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:databoxedge/latest:BandwidthSchedule"},
                    new Pulumi.Alias { Type = "azure-nextgen:databoxedge/v20190301:BandwidthSchedule"},
                    new Pulumi.Alias { Type = "azure-nextgen:databoxedge/v20190801:BandwidthSchedule"},
                    new Pulumi.Alias { Type = "azure-nextgen:databoxedge/v20200501preview:BandwidthSchedule"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing BandwidthSchedule resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static BandwidthSchedule Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new BandwidthSchedule(name, id, options);
        }
    }

    public sealed class BandwidthScheduleArgs : Pulumi.ResourceArgs
    {
        [Input("days", required: true)]
        private InputList<Union<string, Pulumi.AzureNextGen.DataBoxEdge.V20190701.DayOfWeek>>? _days;

        /// <summary>
        /// The days of the week when this schedule is applicable.
        /// </summary>
        public InputList<Union<string, Pulumi.AzureNextGen.DataBoxEdge.V20190701.DayOfWeek>> Days
        {
            get => _days ?? (_days = new InputList<Union<string, Pulumi.AzureNextGen.DataBoxEdge.V20190701.DayOfWeek>>());
            set => _days = value;
        }

        /// <summary>
        /// The device name.
        /// </summary>
        [Input("deviceName", required: true)]
        public Input<string> DeviceName { get; set; } = null!;

        /// <summary>
        /// The bandwidth schedule name which needs to be added/updated.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// The bandwidth rate in Mbps.
        /// </summary>
        [Input("rateInMbps", required: true)]
        public Input<int> RateInMbps { get; set; } = null!;

        /// <summary>
        /// The resource group name.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The start time of the schedule in UTC.
        /// </summary>
        [Input("start", required: true)]
        public Input<string> Start { get; set; } = null!;

        /// <summary>
        /// The stop time of the schedule in UTC.
        /// </summary>
        [Input("stop", required: true)]
        public Input<string> Stop { get; set; } = null!;

        public BandwidthScheduleArgs()
        {
        }
    }
}
