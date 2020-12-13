// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ApiManagement.V20170301
{
    public static class GetApi
    {
        public static Task<GetApiResult> InvokeAsync(GetApiArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetApiResult>("azure-nextgen:apimanagement/v20170301:getApi", args ?? new GetApiArgs(), options.WithVersion());
    }


    public sealed class GetApiArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
        /// </summary>
        [Input("apiId", required: true)]
        public string ApiId { get; set; } = null!;

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

        public GetApiArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetApiResult
    {
        /// <summary>
        /// Describes the Revision of the Api. If no value is provided, default revision 1 is created
        /// </summary>
        public readonly string? ApiRevision;
        /// <summary>
        /// Type of API.
        /// </summary>
        public readonly string? ApiType;
        /// <summary>
        /// Indicates the Version identifier of the API if the API is versioned
        /// </summary>
        public readonly string? ApiVersion;
        /// <summary>
        /// Api Version Set Contract details.
        /// </summary>
        public readonly Outputs.ApiVersionSetContractResponse? ApiVersionSet;
        /// <summary>
        /// A resource identifier for the related ApiVersionSet.
        /// </summary>
        public readonly string? ApiVersionSetId;
        /// <summary>
        /// Collection of authentication settings included into this API.
        /// </summary>
        public readonly Outputs.AuthenticationSettingsContractResponse? AuthenticationSettings;
        /// <summary>
        /// Description of the API. May include HTML formatting tags.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// API name.
        /// </summary>
        public readonly string? DisplayName;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Indicates if API revision is current api revision.
        /// </summary>
        public readonly bool IsCurrent;
        /// <summary>
        /// Indicates if API revision is accessible via the gateway.
        /// </summary>
        public readonly bool IsOnline;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
        /// </summary>
        public readonly string Path;
        /// <summary>
        /// Describes on which protocols the operations in this API can be invoked.
        /// </summary>
        public readonly ImmutableArray<string> Protocols;
        /// <summary>
        /// Absolute URL of the backend service implementing this API.
        /// </summary>
        public readonly string? ServiceUrl;
        /// <summary>
        /// Protocols over which API is made available.
        /// </summary>
        public readonly Outputs.SubscriptionKeyParameterNamesContractResponse? SubscriptionKeyParameterNames;
        /// <summary>
        /// Resource type for API Management resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetApiResult(
            string? apiRevision,

            string? apiType,

            string? apiVersion,

            Outputs.ApiVersionSetContractResponse? apiVersionSet,

            string? apiVersionSetId,

            Outputs.AuthenticationSettingsContractResponse? authenticationSettings,

            string? description,

            string? displayName,

            string id,

            bool isCurrent,

            bool isOnline,

            string name,

            string path,

            ImmutableArray<string> protocols,

            string? serviceUrl,

            Outputs.SubscriptionKeyParameterNamesContractResponse? subscriptionKeyParameterNames,

            string type)
        {
            ApiRevision = apiRevision;
            ApiType = apiType;
            ApiVersion = apiVersion;
            ApiVersionSet = apiVersionSet;
            ApiVersionSetId = apiVersionSetId;
            AuthenticationSettings = authenticationSettings;
            Description = description;
            DisplayName = displayName;
            Id = id;
            IsCurrent = isCurrent;
            IsOnline = isOnline;
            Name = name;
            Path = path;
            Protocols = protocols;
            ServiceUrl = serviceUrl;
            SubscriptionKeyParameterNames = subscriptionKeyParameterNames;
            Type = type;
        }
    }
}
