// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ApiManagement.V20191201Preview
{
    public static class GetGatewayHostnameConfiguration
    {
        public static Task<GetGatewayHostnameConfigurationResult> InvokeAsync(GetGatewayHostnameConfigurationArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetGatewayHostnameConfigurationResult>("azure-nextgen:apimanagement/v20191201preview:getGatewayHostnameConfiguration", args ?? new GetGatewayHostnameConfigurationArgs(), options.WithVersion());
    }


    public sealed class GetGatewayHostnameConfigurationArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Gateway entity identifier. Must be unique in the current API Management service instance. Must not have value 'managed'
        /// </summary>
        [Input("gatewayId", required: true)]
        public string GatewayId { get; set; } = null!;

        /// <summary>
        /// Gateway hostname configuration identifier. Must be unique in the scope of parent Gateway entity.
        /// </summary>
        [Input("hcId", required: true)]
        public string HcId { get; set; } = null!;

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

        public GetGatewayHostnameConfigurationArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetGatewayHostnameConfigurationResult
    {
        /// <summary>
        /// Identifier of Certificate entity that will be used for TLS connection establishment
        /// </summary>
        public readonly string? CertificateId;
        /// <summary>
        /// Hostname value. Supports valid domain name, partial or full wildcard
        /// </summary>
        public readonly string? Hostname;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Determines whether gateway requests client certificate
        /// </summary>
        public readonly bool? NegotiateClientCertificate;
        /// <summary>
        /// Resource type for API Management resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetGatewayHostnameConfigurationResult(
            string? certificateId,

            string? hostname,

            string id,

            string name,

            bool? negotiateClientCertificate,

            string type)
        {
            CertificateId = certificateId;
            Hostname = hostname;
            Id = id;
            Name = name;
            NegotiateClientCertificate = negotiateClientCertificate;
            Type = type;
        }
    }
}
