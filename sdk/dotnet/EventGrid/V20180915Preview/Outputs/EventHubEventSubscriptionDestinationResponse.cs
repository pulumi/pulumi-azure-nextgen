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
    public sealed class EventHubEventSubscriptionDestinationResponse
    {
        /// <summary>
        /// Type of the endpoint for the event subscription destination
        /// Expected value is 'EventHub'.
        /// </summary>
        public readonly string EndpointType;
        /// <summary>
        /// The Azure Resource Id that represents the endpoint of an Event Hub destination of an event subscription.
        /// </summary>
        public readonly string? ResourceId;

        [OutputConstructor]
        private EventHubEventSubscriptionDestinationResponse(
            string endpointType,

            string? resourceId)
        {
            EndpointType = endpointType;
            ResourceId = resourceId;
        }
    }
}
