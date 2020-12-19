// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.EventGrid.V20200401Preview.Outputs
{

    [OutputType]
    public sealed class ServiceBusQueueEventSubscriptionDestinationResponse
    {
        /// <summary>
        /// Type of the endpoint for the event subscription destination.
        /// Expected value is 'ServiceBusQueue'.
        /// </summary>
        public readonly string EndpointType;
        /// <summary>
        /// The Azure Resource Id that represents the endpoint of the Service Bus destination of an event subscription.
        /// </summary>
        public readonly string? ResourceId;

        [OutputConstructor]
        private ServiceBusQueueEventSubscriptionDestinationResponse(
            string endpointType,

            string? resourceId)
        {
            EndpointType = endpointType;
            ResourceId = resourceId;
        }
    }
}
