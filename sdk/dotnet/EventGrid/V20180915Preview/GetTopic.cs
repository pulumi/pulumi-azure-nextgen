// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.EventGrid.V20180915Preview
{
    public static class GetTopic
    {
        public static Task<GetTopicResult> InvokeAsync(GetTopicArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetTopicResult>("azure-nextgen:eventgrid/v20180915preview:getTopic", args ?? new GetTopicArgs(), options.WithVersion());
    }


    public sealed class GetTopicArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the resource group within the user's subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Name of the topic
        /// </summary>
        [Input("topicName", required: true)]
        public string TopicName { get; set; } = null!;

        public GetTopicArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetTopicResult
    {
        /// <summary>
        /// Endpoint for the topic.
        /// </summary>
        public readonly string Endpoint;
        /// <summary>
        /// Fully qualified identifier of the resource
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// This determines the format that Event Grid should expect for incoming events published to the topic.
        /// </summary>
        public readonly string? InputSchema;
        /// <summary>
        /// This enables publishing using custom event schemas. An InputSchemaMapping can be specified to map various properties of a source schema to various required properties of the EventGridEvent schema.
        /// </summary>
        public readonly Outputs.JsonInputSchemaMappingResponse? InputSchemaMapping;
        /// <summary>
        /// Location of the resource
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Name of the resource
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Provisioning state of the topic.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Tags of the resource
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Type of the resource
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetTopicResult(
            string endpoint,

            string id,

            string? inputSchema,

            Outputs.JsonInputSchemaMappingResponse? inputSchemaMapping,

            string location,

            string name,

            string provisioningState,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            Endpoint = endpoint;
            Id = id;
            InputSchema = inputSchema;
            InputSchemaMapping = inputSchemaMapping;
            Location = location;
            Name = name;
            ProvisioningState = provisioningState;
            Tags = tags;
            Type = type;
        }
    }
}
