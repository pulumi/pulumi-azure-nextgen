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
    public sealed class StorageBlobDeadLetterDestinationResponse
    {
        /// <summary>
        /// The name of the Storage blob container that is the destination of the deadletter events
        /// </summary>
        public readonly string? BlobContainerName;
        /// <summary>
        /// Type of the endpoint for the dead letter destination
        /// Expected value is 'StorageBlob'.
        /// </summary>
        public readonly string EndpointType;
        /// <summary>
        /// The Azure Resource ID of the storage account that is the destination of the deadletter events
        /// </summary>
        public readonly string? ResourceId;

        [OutputConstructor]
        private StorageBlobDeadLetterDestinationResponse(
            string? blobContainerName,

            string endpointType,

            string? resourceId)
        {
            BlobContainerName = blobContainerName;
            EndpointType = endpointType;
            ResourceId = resourceId;
        }
    }
}
