// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ApiManagement.V20200601Preview
{
    public static class GetOpenIdConnectProvider
    {
        public static Task<GetOpenIdConnectProviderResult> InvokeAsync(GetOpenIdConnectProviderArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetOpenIdConnectProviderResult>("azure-nextgen:apimanagement/v20200601preview:getOpenIdConnectProvider", args ?? new GetOpenIdConnectProviderArgs(), options.WithVersion());
    }


    public sealed class GetOpenIdConnectProviderArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Identifier of the OpenID Connect Provider.
        /// </summary>
        [Input("opid", required: true)]
        public string Opid { get; set; } = null!;

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

        public GetOpenIdConnectProviderArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetOpenIdConnectProviderResult
    {
        /// <summary>
        /// Client ID of developer console which is the client application.
        /// </summary>
        public readonly string ClientId;
        /// <summary>
        /// Client Secret of developer console which is the client application.
        /// </summary>
        public readonly string? ClientSecret;
        /// <summary>
        /// User-friendly description of OpenID Connect Provider.
        /// </summary>
        public readonly string? Description;
        /// <summary>
        /// User-friendly OpenID Connect Provider name.
        /// </summary>
        public readonly string DisplayName;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Metadata endpoint URI.
        /// </summary>
        public readonly string MetadataEndpoint;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Resource type for API Management resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetOpenIdConnectProviderResult(
            string clientId,

            string? clientSecret,

            string? description,

            string displayName,

            string id,

            string metadataEndpoint,

            string name,

            string type)
        {
            ClientId = clientId;
            ClientSecret = clientSecret;
            Description = description;
            DisplayName = displayName;
            Id = id;
            MetadataEndpoint = metadataEndpoint;
            Name = name;
            Type = type;
        }
    }
}
