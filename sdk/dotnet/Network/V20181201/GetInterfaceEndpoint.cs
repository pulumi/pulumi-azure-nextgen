// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20181201
{
    public static class GetInterfaceEndpoint
    {
        public static Task<GetInterfaceEndpointResult> InvokeAsync(GetInterfaceEndpointArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetInterfaceEndpointResult>("azure-nextgen:network/v20181201:getInterfaceEndpoint", args ?? new GetInterfaceEndpointArgs(), options.WithVersion());
    }


    public sealed class GetInterfaceEndpointArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Expands referenced resources.
        /// </summary>
        [Input("expand")]
        public string? Expand { get; set; }

        /// <summary>
        /// The name of the interface endpoint.
        /// </summary>
        [Input("interfaceEndpointName", required: true)]
        public string InterfaceEndpointName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetInterfaceEndpointArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetInterfaceEndpointResult
    {
        /// <summary>
        /// A reference to the service being brought into the virtual network.
        /// </summary>
        public readonly Outputs.EndpointServiceResponse? EndpointService;
        /// <summary>
        /// Gets a unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string? Etag;
        /// <summary>
        /// A first-party service's FQDN that is mapped to the private IP allocated via this interface endpoint.
        /// </summary>
        public readonly string? Fqdn;
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
        /// Gets an array of references to the network interfaces created for this interface endpoint.
        /// </summary>
        public readonly ImmutableArray<Outputs.NetworkInterfaceResponse> NetworkInterfaces;
        /// <summary>
        /// A read-only property that identifies who created this interface endpoint.
        /// </summary>
        public readonly string Owner;
        /// <summary>
        /// The provisioning state of the interface endpoint. Possible values are: 'Updating', 'Deleting', and 'Failed'.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The ID of the subnet from which the private IP will be allocated.
        /// </summary>
        public readonly Outputs.SubnetResponse? Subnet;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetInterfaceEndpointResult(
            Outputs.EndpointServiceResponse? endpointService,

            string? etag,

            string? fqdn,

            string? id,

            string? location,

            string name,

            ImmutableArray<Outputs.NetworkInterfaceResponse> networkInterfaces,

            string owner,

            string provisioningState,

            Outputs.SubnetResponse? subnet,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            EndpointService = endpointService;
            Etag = etag;
            Fqdn = fqdn;
            Id = id;
            Location = location;
            Name = name;
            NetworkInterfaces = networkInterfaces;
            Owner = owner;
            ProvisioningState = provisioningState;
            Subnet = subnet;
            Tags = tags;
            Type = type;
        }
    }
}
