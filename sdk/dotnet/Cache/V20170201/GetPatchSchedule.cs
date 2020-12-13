// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Cache.V20170201
{
    public static class GetPatchSchedule
    {
        public static Task<GetPatchScheduleResult> InvokeAsync(GetPatchScheduleArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetPatchScheduleResult>("azure-nextgen:cache/v20170201:getPatchSchedule", args ?? new GetPatchScheduleArgs(), options.WithVersion());
    }


    public sealed class GetPatchScheduleArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the redis cache.
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetPatchScheduleArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetPatchScheduleResult
    {
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// List of patch schedules for a Redis cache.
        /// </summary>
        public readonly ImmutableArray<Outputs.ScheduleEntryResponse> ScheduleEntries;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetPatchScheduleResult(
            string id,

            string location,

            string name,

            ImmutableArray<Outputs.ScheduleEntryResponse> scheduleEntries,

            string type)
        {
            Id = id;
            Location = location;
            Name = name;
            ScheduleEntries = scheduleEntries;
            Type = type;
        }
    }
}
