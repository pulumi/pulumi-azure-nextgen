// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.OperationalInsights.V20151101Preview
{
    public static class GetMachineGroup
    {
        public static Task<GetMachineGroupResult> InvokeAsync(GetMachineGroupArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetMachineGroupResult>("azure-nextgen:operationalinsights/v20151101preview:getMachineGroup", args ?? new GetMachineGroupArgs(), options.WithVersion());
    }


    public sealed class GetMachineGroupArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow
        /// </summary>
        [Input("endTime")]
        public string? EndTime { get; set; }

        /// <summary>
        /// Machine Group resource name.
        /// </summary>
        [Input("machineGroupName", required: true)]
        public string MachineGroupName { get; set; } = null!;

        /// <summary>
        /// Resource group name within the specified subscriptionId.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m
        /// </summary>
        [Input("startTime")]
        public string? StartTime { get; set; }

        /// <summary>
        /// OMS workspace containing the resources of interest.
        /// </summary>
        [Input("workspaceName", required: true)]
        public string WorkspaceName { get; set; } = null!;

        public GetMachineGroupArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetMachineGroupResult
    {
        /// <summary>
        /// Count of machines in this group. The value of count may be bigger than the number of machines in case of the group has been truncated due to exceeding the max number of machines a group can handle.
        /// </summary>
        public readonly int? Count;
        /// <summary>
        /// User defined name for the group
        /// </summary>
        public readonly string DisplayName;
        /// <summary>
        /// Resource ETAG.
        /// </summary>
        public readonly string? Etag;
        /// <summary>
        /// Type of the machine group
        /// </summary>
        public readonly string? GroupType;
        /// <summary>
        /// Resource identifier.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Additional resource type qualifier.
        /// </summary>
        public readonly string Kind;
        /// <summary>
        /// References of the machines in this group. The hints within each reference do not represent the current value of the corresponding fields. They are a snapshot created during the last time the machine group was updated.
        /// </summary>
        public readonly ImmutableArray<Outputs.MachineReferenceWithHintsResponse> Machines;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetMachineGroupResult(
            int? count,

            string displayName,

            string? etag,

            string? groupType,

            string id,

            string kind,

            ImmutableArray<Outputs.MachineReferenceWithHintsResponse> machines,

            string name,

            string type)
        {
            Count = count;
            DisplayName = displayName;
            Etag = etag;
            GroupType = groupType;
            Id = id;
            Kind = kind;
            Machines = machines;
            Name = name;
            Type = type;
        }
    }
}
