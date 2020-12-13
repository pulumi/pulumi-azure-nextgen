// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.Latest
{
    public static class GetNetworkProfile
    {
        public static Task<GetNetworkProfileResult> InvokeAsync(GetNetworkProfileArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetNetworkProfileResult>("azure-nextgen:network/latest:getNetworkProfile", args ?? new GetNetworkProfileArgs(), options.WithVersion());
    }


    public sealed class GetNetworkProfileArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Expands referenced resources.
        /// </summary>
        [Input("expand")]
        public string? Expand { get; set; }

        /// <summary>
        /// The name of the public IP prefix.
        /// </summary>
        [Input("networkProfileName", required: true)]
        public string NetworkProfileName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetNetworkProfileArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetNetworkProfileResult
    {
        /// <summary>
        /// List of chid container network interface configurations.
        /// </summary>
        public readonly ImmutableArray<Outputs.ContainerNetworkInterfaceConfigurationResponse> ContainerNetworkInterfaceConfigurations;
        /// <summary>
        /// List of child container network interfaces.
        /// </summary>
        public readonly ImmutableArray<Outputs.ContainerNetworkInterfaceResponse> ContainerNetworkInterfaces;
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
        /// The provisioning state of the network profile resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The resource GUID property of the network profile resource.
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
        private GetNetworkProfileResult(
            ImmutableArray<Outputs.ContainerNetworkInterfaceConfigurationResponse> containerNetworkInterfaceConfigurations,

            ImmutableArray<Outputs.ContainerNetworkInterfaceResponse> containerNetworkInterfaces,

            string etag,

            string? id,

            string? location,

            string name,

            string provisioningState,

            string resourceGuid,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            ContainerNetworkInterfaceConfigurations = containerNetworkInterfaceConfigurations;
            ContainerNetworkInterfaces = containerNetworkInterfaces;
            Etag = etag;
            Id = id;
            Location = location;
            Name = name;
            ProvisioningState = provisioningState;
            ResourceGuid = resourceGuid;
            Tags = tags;
            Type = type;
        }
    }
}
