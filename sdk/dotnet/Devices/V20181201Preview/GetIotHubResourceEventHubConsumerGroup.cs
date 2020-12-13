// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Devices.V20181201Preview
{
    public static class GetIotHubResourceEventHubConsumerGroup
    {
        public static Task<GetIotHubResourceEventHubConsumerGroupResult> InvokeAsync(GetIotHubResourceEventHubConsumerGroupArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetIotHubResourceEventHubConsumerGroupResult>("azure-nextgen:devices/v20181201preview:getIotHubResourceEventHubConsumerGroup", args ?? new GetIotHubResourceEventHubConsumerGroupArgs(), options.WithVersion());
    }


    public sealed class GetIotHubResourceEventHubConsumerGroupArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the Event Hub-compatible endpoint in the IoT hub.
        /// </summary>
        [Input("eventHubEndpointName", required: true)]
        public string EventHubEndpointName { get; set; } = null!;

        /// <summary>
        /// The name of the consumer group to retrieve.
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        /// <summary>
        /// The name of the resource group that contains the IoT hub.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the IoT hub.
        /// </summary>
        [Input("resourceName", required: true)]
        public string ResourceName { get; set; } = null!;

        public GetIotHubResourceEventHubConsumerGroupArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetIotHubResourceEventHubConsumerGroupResult
    {
        /// <summary>
        /// The etag.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// The Event Hub-compatible consumer group identifier.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The Event Hub-compatible consumer group name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string> Properties;
        /// <summary>
        /// the resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetIotHubResourceEventHubConsumerGroupResult(
            string etag,

            string id,

            string name,

            ImmutableDictionary<string, string> properties,

            string type)
        {
            Etag = etag;
            Id = id;
            Name = name;
            Properties = properties;
            Type = type;
        }
    }
}
