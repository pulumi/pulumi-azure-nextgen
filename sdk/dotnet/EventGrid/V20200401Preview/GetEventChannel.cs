// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.EventGrid.V20200401Preview
{
    public static class GetEventChannel
    {
        public static Task<GetEventChannelResult> InvokeAsync(GetEventChannelArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetEventChannelResult>("azure-nextgen:eventgrid/v20200401preview:getEventChannel", args ?? new GetEventChannelArgs(), options.WithVersion());
    }


    public sealed class GetEventChannelArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the event channel.
        /// </summary>
        [Input("eventChannelName", required: true)]
        public string EventChannelName { get; set; } = null!;

        /// <summary>
        /// Name of the partner namespace.
        /// </summary>
        [Input("partnerNamespaceName", required: true)]
        public string PartnerNamespaceName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group within the user's subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetEventChannelArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetEventChannelResult
    {
        /// <summary>
        /// Represents the destination of an event channel.
        /// </summary>
        public readonly Outputs.EventChannelDestinationResponse? Destination;
        /// <summary>
        /// Expiration time of the event channel. If this timer expires while the corresponding partner topic is never activated,
        /// the event channel and corresponding partner topic are deleted.
        /// </summary>
        public readonly string? ExpirationTimeIfNotActivatedUtc;
        /// <summary>
        /// Information about the filter for the event channel.
        /// </summary>
        public readonly Outputs.EventChannelFilterResponse? Filter;
        /// <summary>
        /// Fully qualified identifier of the resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Friendly description about the topic. This can be set by the publisher/partner to show custom description for the customer partner topic.
        /// This will be helpful to remove any ambiguity of the origin of creation of the partner topic for the customer.
        /// </summary>
        public readonly string? PartnerTopicFriendlyDescription;
        /// <summary>
        /// The readiness state of the corresponding partner topic.
        /// </summary>
        public readonly string PartnerTopicReadinessState;
        /// <summary>
        /// Provisioning state of the event channel.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Source of the event channel. This represents a unique resource in the partner's resource model.
        /// </summary>
        public readonly Outputs.EventChannelSourceResponse? Source;
        /// <summary>
        /// Type of the resource
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetEventChannelResult(
            Outputs.EventChannelDestinationResponse? destination,

            string? expirationTimeIfNotActivatedUtc,

            Outputs.EventChannelFilterResponse? filter,

            string id,

            string name,

            string? partnerTopicFriendlyDescription,

            string partnerTopicReadinessState,

            string provisioningState,

            Outputs.EventChannelSourceResponse? source,

            string type)
        {
            Destination = destination;
            ExpirationTimeIfNotActivatedUtc = expirationTimeIfNotActivatedUtc;
            Filter = filter;
            Id = id;
            Name = name;
            PartnerTopicFriendlyDescription = partnerTopicFriendlyDescription;
            PartnerTopicReadinessState = partnerTopicReadinessState;
            ProvisioningState = provisioningState;
            Source = source;
            Type = type;
        }
    }
}
