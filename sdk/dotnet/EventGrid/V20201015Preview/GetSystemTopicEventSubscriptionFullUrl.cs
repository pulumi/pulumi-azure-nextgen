// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.EventGrid.V20201015Preview
{
    public static class GetSystemTopicEventSubscriptionFullUrl
    {
        public static Task<GetSystemTopicEventSubscriptionFullUrlResult> InvokeAsync(GetSystemTopicEventSubscriptionFullUrlArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetSystemTopicEventSubscriptionFullUrlResult>("azure-nextgen:eventgrid/v20201015preview:getSystemTopicEventSubscriptionFullUrl", args ?? new GetSystemTopicEventSubscriptionFullUrlArgs(), options.WithVersion());
    }


    public sealed class GetSystemTopicEventSubscriptionFullUrlArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the event subscription to be created. Event subscription names must be between 3 and 100 characters in length and use alphanumeric letters only.
        /// </summary>
        [Input("eventSubscriptionName", required: true)]
        public string EventSubscriptionName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group within the user's subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Name of the system topic.
        /// </summary>
        [Input("systemTopicName", required: true)]
        public string SystemTopicName { get; set; } = null!;

        public GetSystemTopicEventSubscriptionFullUrlArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetSystemTopicEventSubscriptionFullUrlResult
    {
        /// <summary>
        /// The URL that represents the endpoint of the destination of an event subscription.
        /// </summary>
        public readonly string? EndpointUrl;

        [OutputConstructor]
        private GetSystemTopicEventSubscriptionFullUrlResult(string? endpointUrl)
        {
            EndpointUrl = endpointUrl;
        }
    }
}
