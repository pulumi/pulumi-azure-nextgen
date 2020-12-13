// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.EventHub.V20140901
{
    public static class GetEventHub
    {
        public static Task<GetEventHubResult> InvokeAsync(GetEventHubArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetEventHubResult>("azure-nextgen:eventhub/v20140901:getEventHub", args ?? new GetEventHubArgs(), options.WithVersion());
    }


    public sealed class GetEventHubArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The Event Hub name
        /// </summary>
        [Input("eventHubName", required: true)]
        public string EventHubName { get; set; } = null!;

        /// <summary>
        /// The Namespace name
        /// </summary>
        [Input("namespaceName", required: true)]
        public string NamespaceName { get; set; } = null!;

        /// <summary>
        /// Name of the resource group within the azure subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetEventHubArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetEventHubResult
    {
        /// <summary>
        /// Exact time the Event Hub was created.
        /// </summary>
        public readonly string CreatedAt;
        /// <summary>
        /// Resource Id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource location
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Number of days to retain the events for this Event Hub.
        /// </summary>
        public readonly int? MessageRetentionInDays;
        /// <summary>
        /// Resource name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Number of partitions created for the Event Hub.
        /// </summary>
        public readonly int? PartitionCount;
        /// <summary>
        /// Current number of shards on the Event Hub.
        /// </summary>
        public readonly ImmutableArray<string> PartitionIds;
        /// <summary>
        /// Enumerates the possible values for the status of the Event Hub.
        /// </summary>
        public readonly string? Status;
        /// <summary>
        /// Resource type
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The exact time the message was updated.
        /// </summary>
        public readonly string UpdatedAt;

        [OutputConstructor]
        private GetEventHubResult(
            string createdAt,

            string id,

            string? location,

            int? messageRetentionInDays,

            string name,

            int? partitionCount,

            ImmutableArray<string> partitionIds,

            string? status,

            string type,

            string updatedAt)
        {
            CreatedAt = createdAt;
            Id = id;
            Location = location;
            MessageRetentionInDays = messageRetentionInDays;
            Name = name;
            PartitionCount = partitionCount;
            PartitionIds = partitionIds;
            Status = status;
            Type = type;
            UpdatedAt = updatedAt;
        }
    }
}
