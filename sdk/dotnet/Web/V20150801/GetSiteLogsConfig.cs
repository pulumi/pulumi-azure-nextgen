// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20150801
{
    public static class GetSiteLogsConfig
    {
        public static Task<GetSiteLogsConfigResult> InvokeAsync(GetSiteLogsConfigArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetSiteLogsConfigResult>("azure-nextgen:web/v20150801:getSiteLogsConfig", args ?? new GetSiteLogsConfigArgs(), options.WithVersion());
    }


    public sealed class GetSiteLogsConfigArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of web app
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        /// <summary>
        /// Name of resource group
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetSiteLogsConfigArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetSiteLogsConfigResult
    {
        /// <summary>
        /// Application logs configuration
        /// </summary>
        public readonly Outputs.ApplicationLogsConfigResponse? ApplicationLogs;
        /// <summary>
        /// Detailed error messages configuration
        /// </summary>
        public readonly Outputs.EnabledConfigResponse? DetailedErrorMessages;
        /// <summary>
        /// Failed requests tracing configuration
        /// </summary>
        public readonly Outputs.EnabledConfigResponse? FailedRequestsTracing;
        /// <summary>
        /// Http logs configuration
        /// </summary>
        public readonly Outputs.HttpLogsConfigResponse? HttpLogs;
        /// <summary>
        /// Resource Id
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// Kind of resource
        /// </summary>
        public readonly string? Kind;
        /// <summary>
        /// Resource Location
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Resource Name
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// Resource tags
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type
        /// </summary>
        public readonly string? Type;

        [OutputConstructor]
        private GetSiteLogsConfigResult(
            Outputs.ApplicationLogsConfigResponse? applicationLogs,

            Outputs.EnabledConfigResponse? detailedErrorMessages,

            Outputs.EnabledConfigResponse? failedRequestsTracing,

            Outputs.HttpLogsConfigResponse? httpLogs,

            string? id,

            string? kind,

            string location,

            string? name,

            ImmutableDictionary<string, string>? tags,

            string? type)
        {
            ApplicationLogs = applicationLogs;
            DetailedErrorMessages = detailedErrorMessages;
            FailedRequestsTracing = failedRequestsTracing;
            HttpLogs = httpLogs;
            Id = id;
            Kind = kind;
            Location = location;
            Name = name;
            Tags = tags;
            Type = type;
        }
    }
}