// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Insights.Latest
{
    public static class GetComponent
    {
        public static Task<GetComponentResult> InvokeAsync(GetComponentArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetComponentResult>("azure-nextgen:insights/latest:getComponent", args ?? new GetComponentArgs(), options.WithVersion());
    }


    public sealed class GetComponentArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the Application Insights component resource.
        /// </summary>
        [Input("resourceName", required: true)]
        public string ResourceName { get; set; } = null!;

        public GetComponentArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetComponentResult
    {
        /// <summary>
        /// Application Insights Unique ID for your Application.
        /// </summary>
        public readonly string AppId;
        /// <summary>
        /// The unique ID of your application. This field mirrors the 'Name' field and cannot be changed.
        /// </summary>
        public readonly string ApplicationId;
        /// <summary>
        /// Type of application being monitored.
        /// </summary>
        public readonly string ApplicationType;
        /// <summary>
        /// Application Insights component connection string.
        /// </summary>
        public readonly string ConnectionString;
        /// <summary>
        /// Creation Date for the Application Insights component, in ISO 8601 format.
        /// </summary>
        public readonly string CreationDate;
        /// <summary>
        /// Disable IP masking.
        /// </summary>
        public readonly bool? DisableIpMasking;
        /// <summary>
        /// Used by the Application Insights system to determine what kind of flow this component was created by. This is to be set to 'Bluefield' when creating/updating a component via the REST API.
        /// </summary>
        public readonly string? FlowType;
        /// <summary>
        /// The unique application ID created when a new application is added to HockeyApp, used for communications with HockeyApp.
        /// </summary>
        public readonly string? HockeyAppId;
        /// <summary>
        /// Token used to authenticate communications with between Application Insights and HockeyApp.
        /// </summary>
        public readonly string HockeyAppToken;
        /// <summary>
        /// Azure resource Id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Purge data immediately after 30 days.
        /// </summary>
        public readonly bool? ImmediatePurgeDataOn30Days;
        /// <summary>
        /// Indicates the flow of the ingestion.
        /// </summary>
        public readonly string? IngestionMode;
        /// <summary>
        /// Application Insights Instrumentation key. A read-only value that applications can use to identify the destination for all telemetry sent to Azure Application Insights. This value will be supplied upon construction of each new Application Insights component.
        /// </summary>
        public readonly string InstrumentationKey;
        /// <summary>
        /// The kind of application that this component refers to, used to customize UI. This value is a freeform string, values should typically be one of the following: web, ios, other, store, java, phone.
        /// </summary>
        public readonly string Kind;
        /// <summary>
        /// Resource location
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Azure resource name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// List of linked private link scope resources.
        /// </summary>
        public readonly ImmutableArray<Outputs.PrivateLinkScopedResourceResponse> PrivateLinkScopedResources;
        /// <summary>
        /// Current state of this component: whether or not is has been provisioned within the resource group it is defined. Users cannot change this value but are able to read from it. Values will include Succeeded, Deploying, Canceled, and Failed.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Describes what tool created this Application Insights component. Customers using this API should set this to the default 'rest'.
        /// </summary>
        public readonly string? RequestSource;
        /// <summary>
        /// Retention period in days.
        /// </summary>
        public readonly int? RetentionInDays;
        /// <summary>
        /// Percentage of the data produced by the application being monitored that is being sampled for Application Insights telemetry.
        /// </summary>
        public readonly double? SamplingPercentage;
        /// <summary>
        /// Resource tags
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Azure Tenant Id.
        /// </summary>
        public readonly string TenantId;
        /// <summary>
        /// Azure resource type
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetComponentResult(
            string appId,

            string applicationId,

            string applicationType,

            string connectionString,

            string creationDate,

            bool? disableIpMasking,

            string? flowType,

            string? hockeyAppId,

            string hockeyAppToken,

            string id,

            bool? immediatePurgeDataOn30Days,

            string? ingestionMode,

            string instrumentationKey,

            string kind,

            string location,

            string name,

            ImmutableArray<Outputs.PrivateLinkScopedResourceResponse> privateLinkScopedResources,

            string provisioningState,

            string? requestSource,

            int? retentionInDays,

            double? samplingPercentage,

            ImmutableDictionary<string, string>? tags,

            string tenantId,

            string type)
        {
            AppId = appId;
            ApplicationId = applicationId;
            ApplicationType = applicationType;
            ConnectionString = connectionString;
            CreationDate = creationDate;
            DisableIpMasking = disableIpMasking;
            FlowType = flowType;
            HockeyAppId = hockeyAppId;
            HockeyAppToken = hockeyAppToken;
            Id = id;
            ImmediatePurgeDataOn30Days = immediatePurgeDataOn30Days;
            IngestionMode = ingestionMode;
            InstrumentationKey = instrumentationKey;
            Kind = kind;
            Location = location;
            Name = name;
            PrivateLinkScopedResources = privateLinkScopedResources;
            ProvisioningState = provisioningState;
            RequestSource = requestSource;
            RetentionInDays = retentionInDays;
            SamplingPercentage = samplingPercentage;
            Tags = tags;
            TenantId = tenantId;
            Type = type;
        }
    }
}
