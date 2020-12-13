// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20181101
{
    public static class GetWebAppDiagnosticLogsConfiguration
    {
        public static Task<GetWebAppDiagnosticLogsConfigurationResult> InvokeAsync(GetWebAppDiagnosticLogsConfigurationArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetWebAppDiagnosticLogsConfigurationResult>("azure-nextgen:web/v20181101:getWebAppDiagnosticLogsConfiguration", args ?? new GetWebAppDiagnosticLogsConfigurationArgs(), options.WithVersion());
    }


    public sealed class GetWebAppDiagnosticLogsConfigurationArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Name of the app.
        /// </summary>
        [Input("name", required: true)]
        public string Name { get; set; } = null!;

        /// <summary>
        /// Name of the resource group to which the resource belongs.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetWebAppDiagnosticLogsConfigurationArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetWebAppDiagnosticLogsConfigurationResult
    {
        /// <summary>
        /// Application logs configuration.
        /// </summary>
        public readonly Outputs.ApplicationLogsConfigResponse? ApplicationLogs;
        /// <summary>
        /// Detailed error messages configuration.
        /// </summary>
        public readonly Outputs.EnabledConfigResponse? DetailedErrorMessages;
        /// <summary>
        /// Failed requests tracing configuration.
        /// </summary>
        public readonly Outputs.EnabledConfigResponse? FailedRequestsTracing;
        /// <summary>
        /// HTTP logs configuration.
        /// </summary>
        public readonly Outputs.HttpLogsConfigResponse? HttpLogs;
        /// <summary>
        /// Resource Id.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Kind of resource.
        /// </summary>
        public readonly string? Kind;
        /// <summary>
        /// Resource Name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetWebAppDiagnosticLogsConfigurationResult(
            Outputs.ApplicationLogsConfigResponse? applicationLogs,

            Outputs.EnabledConfigResponse? detailedErrorMessages,

            Outputs.EnabledConfigResponse? failedRequestsTracing,

            Outputs.HttpLogsConfigResponse? httpLogs,

            string id,

            string? kind,

            string name,

            string type)
        {
            ApplicationLogs = applicationLogs;
            DetailedErrorMessages = detailedErrorMessages;
            FailedRequestsTracing = failedRequestsTracing;
            HttpLogs = httpLogs;
            Id = id;
            Kind = kind;
            Name = name;
            Type = type;
        }
    }
}
