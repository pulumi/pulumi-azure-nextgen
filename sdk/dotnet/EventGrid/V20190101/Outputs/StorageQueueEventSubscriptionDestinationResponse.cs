// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.EventGrid.V20190101.Outputs
{

    [OutputType]
    public sealed class StorageQueueEventSubscriptionDestinationResponse
    {
        /// <summary>
        /// Type of the endpoint for the event subscription destination
        /// Expected value is 'StorageQueue'.
        /// </summary>
        public readonly string EndpointType;
        /// <summary>
        /// The name of the Storage queue under a storage account that is the destination of an event subscription.
        /// </summary>
        public readonly string? QueueName;
        /// <summary>
        /// The Azure Resource ID of the storage account that contains the queue that is the destination of an event subscription.
        /// </summary>
        public readonly string? ResourceId;

        [OutputConstructor]
        private StorageQueueEventSubscriptionDestinationResponse(
            string endpointType,

            string? queueName,

            string? resourceId)
        {
            EndpointType = endpointType;
            QueueName = queueName;
            ResourceId = resourceId;
        }
    }
}
