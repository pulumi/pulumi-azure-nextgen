// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.EventGrid.V20200401Preview.Inputs
{

    /// <summary>
    /// Information about the service bus topic destination for an event subscription.
    /// </summary>
    public sealed class ServiceBusTopicEventSubscriptionDestinationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Type of the endpoint for the event subscription destination.
        /// Expected value is 'ServiceBusTopic'.
        /// </summary>
        [Input("endpointType", required: true)]
        public Input<string> EndpointType { get; set; } = null!;

        /// <summary>
        /// The Azure Resource Id that represents the endpoint of the Service Bus Topic destination of an event subscription.
        /// </summary>
        [Input("resourceId")]
        public Input<string>? ResourceId { get; set; }

        public ServiceBusTopicEventSubscriptionDestinationArgs()
        {
        }
    }
}
