// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ServiceBus.V20150801
{
    public static class GetSubscription
    {
        public static Task<GetSubscriptionResult> InvokeAsync(GetSubscriptionArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetSubscriptionResult>("azure-nextgen:servicebus/v20150801:getSubscription", args ?? new GetSubscriptionArgs(), options.WithVersion());
    }


    public sealed class GetSubscriptionArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The namespace name
        /// </summary>
        [Input("namespaceName", required: true)]
        public string NamespaceName { get; set; } = null!;

        /// <summary>
        /// Name of the Resource group within the Azure subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The subscription name.
        /// </summary>
        [Input("subscriptionName", required: true)]
        public string SubscriptionName { get; set; } = null!;

        /// <summary>
        /// The topic name.
        /// </summary>
        [Input("topicName", required: true)]
        public string TopicName { get; set; } = null!;

        public GetSubscriptionArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetSubscriptionResult
    {
        /// <summary>
        /// Last time there was a receive request to this subscription.
        /// </summary>
        public readonly string AccessedAt;
        /// <summary>
        /// TimeSpan idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes.
        /// </summary>
        public readonly string? AutoDeleteOnIdle;
        /// <summary>
        /// Message Count Details.
        /// </summary>
        public readonly Outputs.MessageCountDetailsResponse CountDetails;
        /// <summary>
        /// Exact time the message was created.
        /// </summary>
        public readonly string CreatedAt;
        /// <summary>
        /// Value that indicates whether a subscription has dead letter support on filter evaluation exceptions.
        /// </summary>
        public readonly bool? DeadLetteringOnFilterEvaluationExceptions;
        /// <summary>
        /// Value that indicates whether a subscription has dead letter support when a message expires.
        /// </summary>
        public readonly bool? DeadLetteringOnMessageExpiration;
        /// <summary>
        /// Default message time to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself.
        /// </summary>
        public readonly string? DefaultMessageTimeToLive;
        /// <summary>
        /// Value that indicates whether server-side batched operations are enabled.
        /// </summary>
        public readonly bool? EnableBatchedOperations;
        /// <summary>
        /// Entity availability status for the topic.
        /// </summary>
        public readonly string? EntityAvailabilityStatus;
        /// <summary>
        /// Resource Id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Value that indicates whether the entity description is read-only.
        /// </summary>
        public readonly bool? IsReadOnly;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// The lock duration time span for the subscription.
        /// </summary>
        public readonly string? LockDuration;
        /// <summary>
        /// Number of maximum deliveries.
        /// </summary>
        public readonly int? MaxDeliveryCount;
        /// <summary>
        /// Number of messages.
        /// </summary>
        public readonly int MessageCount;
        /// <summary>
        /// Resource name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Value indicating if a subscription supports the concept of sessions.
        /// </summary>
        public readonly bool? RequiresSession;
        /// <summary>
        /// Enumerates the possible values for the status of a messaging entity.
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
        private GetSubscriptionResult(
            string accessedAt,

            string? autoDeleteOnIdle,

            Outputs.MessageCountDetailsResponse countDetails,

            string createdAt,

            bool? deadLetteringOnFilterEvaluationExceptions,

            bool? deadLetteringOnMessageExpiration,

            string? defaultMessageTimeToLive,

            bool? enableBatchedOperations,

            string? entityAvailabilityStatus,

            string id,

            bool? isReadOnly,

            string? location,

            string? lockDuration,

            int? maxDeliveryCount,

            int messageCount,

            string name,

            bool? requiresSession,

            string? status,

            string type,

            string updatedAt)
        {
            AccessedAt = accessedAt;
            AutoDeleteOnIdle = autoDeleteOnIdle;
            CountDetails = countDetails;
            CreatedAt = createdAt;
            DeadLetteringOnFilterEvaluationExceptions = deadLetteringOnFilterEvaluationExceptions;
            DeadLetteringOnMessageExpiration = deadLetteringOnMessageExpiration;
            DefaultMessageTimeToLive = defaultMessageTimeToLive;
            EnableBatchedOperations = enableBatchedOperations;
            EntityAvailabilityStatus = entityAvailabilityStatus;
            Id = id;
            IsReadOnly = isReadOnly;
            Location = location;
            LockDuration = lockDuration;
            MaxDeliveryCount = maxDeliveryCount;
            MessageCount = messageCount;
            Name = name;
            RequiresSession = requiresSession;
            Status = status;
            Type = type;
            UpdatedAt = updatedAt;
        }
    }
}
