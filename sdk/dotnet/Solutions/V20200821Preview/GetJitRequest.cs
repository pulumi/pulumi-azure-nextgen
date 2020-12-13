// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Solutions.V20200821Preview
{
    public static class GetJitRequest
    {
        public static Task<GetJitRequestResult> InvokeAsync(GetJitRequestArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetJitRequestResult>("azure-nextgen:solutions/v20200821preview:getJitRequest", args ?? new GetJitRequestArgs(), options.WithVersion());
    }


    public sealed class GetJitRequestArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the JIT request.
        /// </summary>
        [Input("jitRequestName", required: true)]
        public string JitRequestName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetJitRequestArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetJitRequestResult
    {
        /// <summary>
        /// The parent application id.
        /// </summary>
        public readonly string ApplicationResourceId;
        /// <summary>
        /// The client entity that created the JIT request.
        /// </summary>
        public readonly Outputs.ApplicationClientDetailsResponse CreatedBy;
        /// <summary>
        /// Resource ID
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The JIT authorization policies.
        /// </summary>
        public readonly ImmutableArray<Outputs.JitAuthorizationPoliciesResponse> JitAuthorizationPolicies;
        /// <summary>
        /// The JIT request state.
        /// </summary>
        public readonly string JitRequestState;
        /// <summary>
        /// The JIT request properties.
        /// </summary>
        public readonly Outputs.JitSchedulingPolicyResponse JitSchedulingPolicy;
        /// <summary>
        /// Resource location
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Resource name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The JIT request provisioning state.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The publisher tenant id.
        /// </summary>
        public readonly string PublisherTenantId;
        /// <summary>
        /// Resource tags
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// The client entity that last updated the JIT request.
        /// </summary>
        public readonly Outputs.ApplicationClientDetailsResponse UpdatedBy;

        [OutputConstructor]
        private GetJitRequestResult(
            string applicationResourceId,

            Outputs.ApplicationClientDetailsResponse createdBy,

            string id,

            ImmutableArray<Outputs.JitAuthorizationPoliciesResponse> jitAuthorizationPolicies,

            string jitRequestState,

            Outputs.JitSchedulingPolicyResponse jitSchedulingPolicy,

            string? location,

            string name,

            string provisioningState,

            string publisherTenantId,

            ImmutableDictionary<string, string>? tags,

            string type,

            Outputs.ApplicationClientDetailsResponse updatedBy)
        {
            ApplicationResourceId = applicationResourceId;
            CreatedBy = createdBy;
            Id = id;
            JitAuthorizationPolicies = jitAuthorizationPolicies;
            JitRequestState = jitRequestState;
            JitSchedulingPolicy = jitSchedulingPolicy;
            Location = location;
            Name = name;
            ProvisioningState = provisioningState;
            PublisherTenantId = publisherTenantId;
            Tags = tags;
            Type = type;
            UpdatedBy = updatedBy;
        }
    }
}
