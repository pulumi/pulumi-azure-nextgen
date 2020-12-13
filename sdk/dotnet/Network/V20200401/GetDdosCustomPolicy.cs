// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20200401
{
    public static class GetDdosCustomPolicy
    {
        public static Task<GetDdosCustomPolicyResult> InvokeAsync(GetDdosCustomPolicyArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetDdosCustomPolicyResult>("azure-nextgen:network/v20200401:getDdosCustomPolicy", args ?? new GetDdosCustomPolicyArgs(), options.WithVersion());
    }


    public sealed class GetDdosCustomPolicyArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the DDoS custom policy.
        /// </summary>
        [Input("ddosCustomPolicyName", required: true)]
        public string DdosCustomPolicyName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetDdosCustomPolicyArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetDdosCustomPolicyResult
    {
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The protocol-specific DDoS policy customization parameters.
        /// </summary>
        public readonly ImmutableArray<Outputs.ProtocolCustomSettingsFormatResponse> ProtocolCustomSettings;
        /// <summary>
        /// The provisioning state of the DDoS custom policy resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The list of public IPs associated with the DDoS custom policy resource. This list is read-only.
        /// </summary>
        public readonly ImmutableArray<Outputs.SubResourceResponse> PublicIPAddresses;
        /// <summary>
        /// The resource GUID property of the DDoS custom policy resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
        /// </summary>
        public readonly string ResourceGuid;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetDdosCustomPolicyResult(
            string etag,

            string? id,

            string? location,

            string name,

            ImmutableArray<Outputs.ProtocolCustomSettingsFormatResponse> protocolCustomSettings,

            string provisioningState,

            ImmutableArray<Outputs.SubResourceResponse> publicIPAddresses,

            string resourceGuid,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            Etag = etag;
            Id = id;
            Location = location;
            Name = name;
            ProtocolCustomSettings = protocolCustomSettings;
            ProvisioningState = provisioningState;
            PublicIPAddresses = publicIPAddresses;
            ResourceGuid = resourceGuid;
            Tags = tags;
            Type = type;
        }
    }
}
