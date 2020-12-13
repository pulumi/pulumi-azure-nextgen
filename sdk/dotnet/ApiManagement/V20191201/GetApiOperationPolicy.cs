// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ApiManagement.V20191201
{
    public static class GetApiOperationPolicy
    {
        public static Task<GetApiOperationPolicyResult> InvokeAsync(GetApiOperationPolicyArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetApiOperationPolicyResult>("azure-nextgen:apimanagement/v20191201:getApiOperationPolicy", args ?? new GetApiOperationPolicyArgs(), options.WithVersion());
    }


    public sealed class GetApiOperationPolicyArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
        /// </summary>
        [Input("apiId", required: true)]
        public string ApiId { get; set; } = null!;

        /// <summary>
        /// Policy Export Format.
        /// </summary>
        [Input("format")]
        public string? Format { get; set; }

        /// <summary>
        /// Operation identifier within an API. Must be unique in the current API Management service instance.
        /// </summary>
        [Input("operationId", required: true)]
        public string OperationId { get; set; } = null!;

        /// <summary>
        /// The identifier of the Policy.
        /// </summary>
        [Input("policyId", required: true)]
        public string PolicyId { get; set; } = null!;

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

        public GetApiOperationPolicyArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetApiOperationPolicyResult
    {
        /// <summary>
        /// Format of the policyContent.
        /// </summary>
        public readonly string? Format;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Resource type for API Management resource.
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Contents of the Policy as defined by the format.
        /// </summary>
        public readonly string Value;

        [OutputConstructor]
        private GetApiOperationPolicyResult(
            string? format,

            string id,

            string name,

            string type,

            string value)
        {
            Format = format;
            Id = id;
            Name = name;
            Type = type;
            Value = value;
        }
    }
}
