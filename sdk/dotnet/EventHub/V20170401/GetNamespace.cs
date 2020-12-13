// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.EventHub.V20170401
{
    public static class GetNamespace
    {
        public static Task<GetNamespaceResult> InvokeAsync(GetNamespaceArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetNamespaceResult>("azure-nextgen:eventhub/v20170401:getNamespace", args ?? new GetNamespaceArgs(), options.WithVersion());
    }


    public sealed class GetNamespaceArgs : Pulumi.InvokeArgs
    {
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

        public GetNamespaceArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetNamespaceResult
    {
        /// <summary>
        /// The time the Namespace was created.
        /// </summary>
        public readonly string CreatedAt;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Value that indicates whether AutoInflate is enabled for eventhub namespace.
        /// </summary>
        public readonly bool? IsAutoInflateEnabled;
        /// <summary>
        /// Value that indicates whether Kafka is enabled for eventhub namespace.
        /// </summary>
        public readonly bool? KafkaEnabled;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Upper limit of throughput units when AutoInflate is enabled, value should be within 0 to 20 throughput units. ( '0' if AutoInflateEnabled = true)
        /// </summary>
        public readonly int? MaximumThroughputUnits;
        /// <summary>
        /// Identifier for Azure Insights metrics.
        /// </summary>
        public readonly string MetricId;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Provisioning state of the Namespace.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Endpoint you can use to perform Service Bus operations.
        /// </summary>
        public readonly string ServiceBusEndpoint;
        /// <summary>
        /// Properties of sku resource
        /// </summary>
        public readonly Outputs.SkuResponse? Sku;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The time the Namespace was updated.
        /// </summary>
        public readonly string UpdatedAt;

        [OutputConstructor]
        private GetNamespaceResult(
            string createdAt,

            string id,

            bool? isAutoInflateEnabled,

            bool? kafkaEnabled,

            string? location,

            int? maximumThroughputUnits,

            string metricId,

            string name,

            string provisioningState,

            string serviceBusEndpoint,

            Outputs.SkuResponse? sku,

            ImmutableDictionary<string, string>? tags,

            string type,

            string updatedAt)
        {
            CreatedAt = createdAt;
            Id = id;
            IsAutoInflateEnabled = isAutoInflateEnabled;
            KafkaEnabled = kafkaEnabled;
            Location = location;
            MaximumThroughputUnits = maximumThroughputUnits;
            MetricId = metricId;
            Name = name;
            ProvisioningState = provisioningState;
            ServiceBusEndpoint = serviceBusEndpoint;
            Sku = sku;
            Tags = tags;
            Type = type;
            UpdatedAt = updatedAt;
        }
    }
}
