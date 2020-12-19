// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20190801
{
    /// <summary>
    /// Configuration of App Service site logs.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:web/v20190801:WebAppDiagnosticLogsConfiguration")]
    public partial class WebAppDiagnosticLogsConfiguration : Pulumi.CustomResource
    {
        /// <summary>
        /// Application logs configuration.
        /// </summary>
        [Output("applicationLogs")]
        public Output<Outputs.ApplicationLogsConfigResponse?> ApplicationLogs { get; private set; } = null!;

        /// <summary>
        /// Detailed error messages configuration.
        /// </summary>
        [Output("detailedErrorMessages")]
        public Output<Outputs.EnabledConfigResponse?> DetailedErrorMessages { get; private set; } = null!;

        /// <summary>
        /// Failed requests tracing configuration.
        /// </summary>
        [Output("failedRequestsTracing")]
        public Output<Outputs.EnabledConfigResponse?> FailedRequestsTracing { get; private set; } = null!;

        /// <summary>
        /// HTTP logs configuration.
        /// </summary>
        [Output("httpLogs")]
        public Output<Outputs.HttpLogsConfigResponse?> HttpLogs { get; private set; } = null!;

        /// <summary>
        /// Kind of resource.
        /// </summary>
        [Output("kind")]
        public Output<string?> Kind { get; private set; } = null!;

        /// <summary>
        /// Resource Name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a WebAppDiagnosticLogsConfiguration resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public WebAppDiagnosticLogsConfiguration(string name, WebAppDiagnosticLogsConfigurationArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:web/v20190801:WebAppDiagnosticLogsConfiguration", name, args ?? new WebAppDiagnosticLogsConfigurationArgs(), MakeResourceOptions(options, ""))
        {
        }

        private WebAppDiagnosticLogsConfiguration(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:web/v20190801:WebAppDiagnosticLogsConfiguration", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:web/latest:WebAppDiagnosticLogsConfiguration"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20150801:WebAppDiagnosticLogsConfiguration"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20160801:WebAppDiagnosticLogsConfiguration"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20180201:WebAppDiagnosticLogsConfiguration"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20181101:WebAppDiagnosticLogsConfiguration"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20200601:WebAppDiagnosticLogsConfiguration"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20200901:WebAppDiagnosticLogsConfiguration"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing WebAppDiagnosticLogsConfiguration resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static WebAppDiagnosticLogsConfiguration Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new WebAppDiagnosticLogsConfiguration(name, id, options);
        }
    }

    public sealed class WebAppDiagnosticLogsConfigurationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Application logs configuration.
        /// </summary>
        [Input("applicationLogs")]
        public Input<Inputs.ApplicationLogsConfigArgs>? ApplicationLogs { get; set; }

        /// <summary>
        /// Detailed error messages configuration.
        /// </summary>
        [Input("detailedErrorMessages")]
        public Input<Inputs.EnabledConfigArgs>? DetailedErrorMessages { get; set; }

        /// <summary>
        /// Failed requests tracing configuration.
        /// </summary>
        [Input("failedRequestsTracing")]
        public Input<Inputs.EnabledConfigArgs>? FailedRequestsTracing { get; set; }

        /// <summary>
        /// HTTP logs configuration.
        /// </summary>
        [Input("httpLogs")]
        public Input<Inputs.HttpLogsConfigArgs>? HttpLogs { get; set; }

        /// <summary>
        /// Kind of resource.
        /// </summary>
        [Input("kind")]
        public Input<string>? Kind { get; set; }

        /// <summary>
        /// Name of the app.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// Name of the resource group to which the resource belongs.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        public WebAppDiagnosticLogsConfigurationArgs()
        {
        }
    }
}
