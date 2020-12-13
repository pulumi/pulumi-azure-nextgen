// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ApiManagement.V20191201
{
    public static class GetLogger
    {
        public static Task<GetLoggerResult> InvokeAsync(GetLoggerArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetLoggerResult>("azure-nextgen:apimanagement/v20191201:getLogger", args ?? new GetLoggerArgs(), options.WithVersion());
    }


    public sealed class GetLoggerArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Logger identifier. Must be unique in the API Management service instance.
        /// </summary>
        [Input("loggerId", required: true)]
        public string LoggerId { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the API Management service.
        /// </summary>
        [Input("serviceName", required: true)]
        public string ServiceName { get; set; } = null!;

        public GetLoggerArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetLoggerResult
    {
        /// <summary>
        /// The name and SendRule connection string of the event hub for azureEventHub logger.
        /// Instrumentation key for applicationInsights logger.
        /// </summary>
        public readonly ImmutableDictionary<string, string> Credentials;
        /// <summary>
        /// Logger description.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Whether records are buffered in the logger before publishing. Default is assumed to be true.
        /// </summary>
        public readonly bool? IsBuffered;
        /// <summary>
        /// Logger type.
        /// </summary>
        public readonly string LoggerType;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Azure Resource Id of a log target (either Azure Event Hub resource or Azure Application Insights resource).
        /// </summary>
        public readonly string? ResourceId;
        /// <summary>
        /// Resource type for API Management resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetLoggerResult(
            ImmutableDictionary<string, string> credentials,

            string? description,

            string id,

            bool? isBuffered,

            string loggerType,

            string name,

            string? resourceId,

            string type)
        {
            Credentials = credentials;
            Description = description;
            Id = id;
            IsBuffered = isBuffered;
            LoggerType = loggerType;
            Name = name;
            ResourceId = resourceId;
            Type = type;
        }
    }
}
