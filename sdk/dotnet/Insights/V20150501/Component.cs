// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Insights.V20150501
{
    /// <summary>
    /// An Application Insights component definition.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:insights/v20150501:Component")]
    public partial class Component : Pulumi.CustomResource
    {
        /// <summary>
        /// Application Insights Unique ID for your Application.
        /// </summary>
        [Output("appId")]
        public Output<string> AppId { get; private set; } = null!;

        /// <summary>
        /// The unique ID of your application. This field mirrors the 'Name' field and cannot be changed.
        /// </summary>
        [Output("applicationId")]
        public Output<string> ApplicationId { get; private set; } = null!;

        /// <summary>
        /// Type of application being monitored.
        /// </summary>
        [Output("applicationType")]
        public Output<string> ApplicationType { get; private set; } = null!;

        /// <summary>
        /// Application Insights component connection string.
        /// </summary>
        [Output("connectionString")]
        public Output<string> ConnectionString { get; private set; } = null!;

        /// <summary>
        /// Creation Date for the Application Insights component, in ISO 8601 format.
        /// </summary>
        [Output("creationDate")]
        public Output<string> CreationDate { get; private set; } = null!;

        /// <summary>
        /// Disable IP masking.
        /// </summary>
        [Output("disableIpMasking")]
        public Output<bool?> DisableIpMasking { get; private set; } = null!;

        /// <summary>
        /// Used by the Application Insights system to determine what kind of flow this component was created by. This is to be set to 'Bluefield' when creating/updating a component via the REST API.
        /// </summary>
        [Output("flowType")]
        public Output<string?> FlowType { get; private set; } = null!;

        /// <summary>
        /// The unique application ID created when a new application is added to HockeyApp, used for communications with HockeyApp.
        /// </summary>
        [Output("hockeyAppId")]
        public Output<string?> HockeyAppId { get; private set; } = null!;

        /// <summary>
        /// Token used to authenticate communications with between Application Insights and HockeyApp.
        /// </summary>
        [Output("hockeyAppToken")]
        public Output<string> HockeyAppToken { get; private set; } = null!;

        /// <summary>
        /// Purge data immediately after 30 days.
        /// </summary>
        [Output("immediatePurgeDataOn30Days")]
        public Output<bool?> ImmediatePurgeDataOn30Days { get; private set; } = null!;

        /// <summary>
        /// Indicates the flow of the ingestion.
        /// </summary>
        [Output("ingestionMode")]
        public Output<string?> IngestionMode { get; private set; } = null!;

        /// <summary>
        /// Application Insights Instrumentation key. A read-only value that applications can use to identify the destination for all telemetry sent to Azure Application Insights. This value will be supplied upon construction of each new Application Insights component.
        /// </summary>
        [Output("instrumentationKey")]
        public Output<string> InstrumentationKey { get; private set; } = null!;

        /// <summary>
        /// The kind of application that this component refers to, used to customize UI. This value is a freeform string, values should typically be one of the following: web, ios, other, store, java, phone.
        /// </summary>
        [Output("kind")]
        public Output<string> Kind { get; private set; } = null!;

        /// <summary>
        /// Resource location
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Azure resource name
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// List of linked private link scope resources.
        /// </summary>
        [Output("privateLinkScopedResources")]
        public Output<ImmutableArray<Outputs.PrivateLinkScopedResourceResponse>> PrivateLinkScopedResources { get; private set; } = null!;

        /// <summary>
        /// Current state of this component: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Describes what tool created this Application Insights component. Customers using this API should set this to the default 'rest'.
        /// </summary>
        [Output("requestSource")]
        public Output<string?> RequestSource { get; private set; } = null!;

        /// <summary>
        /// Retention period in days.
        /// </summary>
        [Output("retentionInDays")]
        public Output<int?> RetentionInDays { get; private set; } = null!;

        /// <summary>
        /// Percentage of the data produced by the application being monitored that is being sampled for Application Insights telemetry.
        /// </summary>
        [Output("samplingPercentage")]
        public Output<double?> SamplingPercentage { get; private set; } = null!;

        /// <summary>
        /// Resource tags
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Azure Tenant Id.
        /// </summary>
        [Output("tenantId")]
        public Output<string> TenantId { get; private set; } = null!;

        /// <summary>
        /// Azure resource type
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a Component resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Component(string name, ComponentArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:insights/v20150501:Component", name, args ?? new ComponentArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Component(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:insights/v20150501:Component", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:insights/latest:Component"},
                    new Pulumi.Alias { Type = "azure-nextgen:insights/v20180501preview:Component"},
                    new Pulumi.Alias { Type = "azure-nextgen:insights/v20200202preview:Component"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Component resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Component Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Component(name, id, options);
        }
    }

    public sealed class ComponentArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Type of application being monitored.
        /// </summary>
        [Input("applicationType", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.Insights.V20150501.ApplicationType> ApplicationType { get; set; } = null!;

        /// <summary>
        /// Disable IP masking.
        /// </summary>
        [Input("disableIpMasking")]
        public Input<bool>? DisableIpMasking { get; set; }

        /// <summary>
        /// Used by the Application Insights system to determine what kind of flow this component was created by. This is to be set to 'Bluefield' when creating/updating a component via the REST API.
        /// </summary>
        [Input("flowType")]
        public InputUnion<string, Pulumi.AzureNextGen.Insights.V20150501.FlowType>? FlowType { get; set; }

        /// <summary>
        /// The unique application ID created when a new application is added to HockeyApp, used for communications with HockeyApp.
        /// </summary>
        [Input("hockeyAppId")]
        public Input<string>? HockeyAppId { get; set; }

        /// <summary>
        /// Purge data immediately after 30 days.
        /// </summary>
        [Input("immediatePurgeDataOn30Days")]
        public Input<bool>? ImmediatePurgeDataOn30Days { get; set; }

        /// <summary>
        /// Indicates the flow of the ingestion.
        /// </summary>
        [Input("ingestionMode")]
        public InputUnion<string, Pulumi.AzureNextGen.Insights.V20150501.IngestionMode>? IngestionMode { get; set; }

        /// <summary>
        /// The kind of application that this component refers to, used to customize UI. This value is a freeform string, values should typically be one of the following: web, ios, other, store, java, phone.
        /// </summary>
        [Input("kind", required: true)]
        public Input<string> Kind { get; set; } = null!;

        /// <summary>
        /// Resource location
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// Describes what tool created this Application Insights component. Customers using this API should set this to the default 'rest'.
        /// </summary>
        [Input("requestSource")]
        public InputUnion<string, Pulumi.AzureNextGen.Insights.V20150501.RequestSource>? RequestSource { get; set; }

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the Application Insights component resource.
        /// </summary>
        [Input("resourceName", required: true)]
        public Input<string> ResourceName { get; set; } = null!;

        /// <summary>
        /// Retention period in days.
        /// </summary>
        [Input("retentionInDays")]
        public Input<int>? RetentionInDays { get; set; }

        /// <summary>
        /// Percentage of the data produced by the application being monitored that is being sampled for Application Insights telemetry.
        /// </summary>
        [Input("samplingPercentage")]
        public Input<double>? SamplingPercentage { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// Resource tags
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        public ComponentArgs()
        {
        }
    }
}
