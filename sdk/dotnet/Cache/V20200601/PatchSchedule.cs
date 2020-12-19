// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Cache.V20200601
{
    /// <summary>
    /// Response to put/get patch schedules for Redis cache.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:cache/v20200601:PatchSchedule")]
    public partial class PatchSchedule : Pulumi.CustomResource
    {
        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// List of patch schedules for a Redis cache.
        /// </summary>
        [Output("scheduleEntries")]
        public Output<ImmutableArray<Outputs.ScheduleEntryResponse>> ScheduleEntries { get; private set; } = null!;

        /// <summary>
        /// Resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a PatchSchedule resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public PatchSchedule(string name, PatchScheduleArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:cache/v20200601:PatchSchedule", name, args ?? new PatchScheduleArgs(), MakeResourceOptions(options, ""))
        {
        }

        private PatchSchedule(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:cache/v20200601:PatchSchedule", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:cache/latest:PatchSchedule"},
                    new Pulumi.Alias { Type = "azure-nextgen:cache/v20171001:PatchSchedule"},
                    new Pulumi.Alias { Type = "azure-nextgen:cache/v20180301:PatchSchedule"},
                    new Pulumi.Alias { Type = "azure-nextgen:cache/v20190701:PatchSchedule"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing PatchSchedule resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static PatchSchedule Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new PatchSchedule(name, id, options);
        }
    }

    public sealed class PatchScheduleArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Default string modeled as parameter for auto generation to work correctly.
        /// </summary>
        [Input("default", required: true)]
        public Input<string> Default { get; set; } = null!;

        /// <summary>
        /// The name of the Redis cache.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        [Input("scheduleEntries", required: true)]
        private InputList<Inputs.ScheduleEntryArgs>? _scheduleEntries;

        /// <summary>
        /// List of patch schedules for a Redis cache.
        /// </summary>
        public InputList<Inputs.ScheduleEntryArgs> ScheduleEntries
        {
            get => _scheduleEntries ?? (_scheduleEntries = new InputList<Inputs.ScheduleEntryArgs>());
            set => _scheduleEntries = value;
        }

        public PatchScheduleArgs()
        {
        }
    }
}
