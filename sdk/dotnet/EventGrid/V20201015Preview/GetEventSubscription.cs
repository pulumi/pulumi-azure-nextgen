// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.EventGrid.V20201015Preview
{
    public static class GetEventSubscription
    {
        public static Task<GetEventSubscriptionResult> InvokeAsync(GetEventSubscriptionArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetEventSubscriptionResult>("azure-nextgen:eventgrid/v20201015preview:getEventSubscription", args ?? new GetEventSubscriptionArgs(), options.WithVersion());
    }


    public sealed class GetEventSubscriptionArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the event subscription.
        /// </summary>
        [Input("eventSubscriptionName", required: true)]
        public string EventSubscriptionName { get; set; } = null!;

        /// <summary>
        /// The scope of the event subscription. The scope can be a subscription, or a resource group, or a top level resource belonging to a resource provider namespace, or an EventGrid topic. For example, use '/subscriptions/{subscriptionId}/' for a subscription, '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for a resource group, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}' for a resource, and '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}' for an EventGrid topic.
        /// </summary>
        [Input("scope", required: true)]
        public string Scope { get; set; } = null!;

        public GetEventSubscriptionArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetEventSubscriptionResult
    {
        /// <summary>
        /// The dead letter destination of the event subscription. Any event that cannot be delivered to its' destination is sent to the dead letter destination.
        /// Uses Azure Event Grid's identity to acquire the authentication tokens being used during delivery / dead-lettering.
        /// </summary>
        public readonly Outputs.StorageBlobDeadLetterDestinationResponse? DeadLetterDestination;
        /// <summary>
        /// The dead letter destination of the event subscription. Any event that cannot be delivered to its' destination is sent to the dead letter destination.
        /// Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering.
        /// </summary>
        public readonly Outputs.DeadLetterWithResourceIdentityResponse? DeadLetterWithResourceIdentity;
        /// <summary>
        /// Information about the destination where events have to be delivered for the event subscription.
        /// Uses the managed identity setup on the parent resource (namely, topic or domain) to acquire the authentication tokens being used during delivery / dead-lettering.
        /// </summary>
        public readonly Outputs.DeliveryWithResourceIdentityResponse? DeliveryWithResourceIdentity;
        /// <summary>
        /// Information about the destination where events have to be delivered for the event subscription.
        /// Uses Azure Event Grid's identity to acquire the authentication tokens being used during delivery / dead-lettering.
        /// </summary>
        public readonly object? Destination;
        /// <summary>
        /// The event delivery schema for the event subscription.
        /// </summary>
        public readonly string? EventDeliverySchema;
        /// <summary>
        /// Expiration time of the event subscription.
        /// </summary>
        public readonly string? ExpirationTimeUtc;
        /// <summary>
        /// Information about the filter for the event subscription.
        /// </summary>
        public readonly Outputs.EventSubscriptionFilterResponse? Filter;
        /// <summary>
        /// Fully qualified identifier of the resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// List of user defined labels.
        /// </summary>
        public readonly ImmutableArray<string> Labels;
        /// <summary>
        /// Name of the resource.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Provisioning state of the event subscription.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The retry policy for events. This can be used to configure maximum number of delivery attempts and time to live for events.
        /// </summary>
        public readonly Outputs.RetryPolicyResponse? RetryPolicy;
        /// <summary>
        /// The system metadata relating to this resource.
        /// </summary>
        public readonly Outputs.SystemDataResponse SystemData;
        /// <summary>
        /// Name of the topic of the event subscription.
        /// </summary>
        public readonly string Topic;
        /// <summary>
        /// Type of the resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetEventSubscriptionResult(
            Outputs.StorageBlobDeadLetterDestinationResponse? deadLetterDestination,

            Outputs.DeadLetterWithResourceIdentityResponse? deadLetterWithResourceIdentity,

            Outputs.DeliveryWithResourceIdentityResponse? deliveryWithResourceIdentity,

            object? destination,

            string? eventDeliverySchema,

            string? expirationTimeUtc,

            Outputs.EventSubscriptionFilterResponse? filter,

            string id,

            ImmutableArray<string> labels,

            string name,

            string provisioningState,

            Outputs.RetryPolicyResponse? retryPolicy,

            Outputs.SystemDataResponse systemData,

            string topic,

            string type)
        {
            DeadLetterDestination = deadLetterDestination;
            DeadLetterWithResourceIdentity = deadLetterWithResourceIdentity;
            DeliveryWithResourceIdentity = deliveryWithResourceIdentity;
            Destination = destination;
            EventDeliverySchema = eventDeliverySchema;
            ExpirationTimeUtc = expirationTimeUtc;
            Filter = filter;
            Id = id;
            Labels = labels;
            Name = name;
            ProvisioningState = provisioningState;
            RetryPolicy = retryPolicy;
            SystemData = systemData;
            Topic = topic;
            Type = type;
        }
    }
}
