// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.EventGrid.V20180915Preview.Outputs
{

    [OutputType]
    public sealed class WebHookEventSubscriptionDestinationResponse
    {
        /// <summary>
        /// The base URL that represents the endpoint of the destination of an event subscription.
        /// </summary>
        public readonly string EndpointBaseUrl;
        /// <summary>
        /// Type of the endpoint for the event subscription destination
        /// Expected value is 'WebHook'.
        /// </summary>
        public readonly string EndpointType;
        /// <summary>
        /// The URL that represents the endpoint of the destination of an event subscription.
        /// </summary>
        public readonly string? EndpointUrl;

        [OutputConstructor]
        private WebHookEventSubscriptionDestinationResponse(
            string endpointBaseUrl,

            string endpointType,

            string? endpointUrl)
        {
            EndpointBaseUrl = endpointBaseUrl;
            EndpointType = endpointType;
            EndpointUrl = endpointUrl;
        }
    }
}
