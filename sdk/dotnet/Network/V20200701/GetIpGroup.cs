// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20200701
{
    public static class GetIpGroup
    {
        public static Task<GetIpGroupResult> InvokeAsync(GetIpGroupArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetIpGroupResult>("azure-nextgen:network/v20200701:getIpGroup", args ?? new GetIpGroupArgs(), options.WithVersion());
    }


    public sealed class GetIpGroupArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Expands resourceIds (of Firewalls/Network Security Groups etc.) back referenced by the IpGroups resource.
        /// </summary>
        [Input("expand")]
        public string? Expand { get; set; }

        /// <summary>
        /// The name of the ipGroups.
        /// </summary>
        [Input("ipGroupsName", required: true)]
        public string IpGroupsName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetIpGroupArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetIpGroupResult
    {
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// List of references to Firewall Policies resources that this IpGroups is associated with.
        /// </summary>
        public readonly ImmutableArray<Outputs.SubResourceResponse> FirewallPolicies;
        /// <summary>
        /// List of references to Firewall resources that this IpGroups is associated with.
        /// </summary>
        public readonly ImmutableArray<Outputs.SubResourceResponse> Firewalls;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// IpAddresses/IpAddressPrefixes in the IpGroups resource.
        /// </summary>
        public readonly ImmutableArray<string> IpAddresses;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The provisioning state of the IpGroups resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetIpGroupResult(
            string etag,

            ImmutableArray<Outputs.SubResourceResponse> firewallPolicies,

            ImmutableArray<Outputs.SubResourceResponse> firewalls,

            string? id,

            ImmutableArray<string> ipAddresses,

            string? location,

            string name,

            string provisioningState,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            Etag = etag;
            FirewallPolicies = firewallPolicies;
            Firewalls = firewalls;
            Id = id;
            IpAddresses = ipAddresses;
            Location = location;
            Name = name;
            ProvisioningState = provisioningState;
            Tags = tags;
            Type = type;
        }
    }
}
