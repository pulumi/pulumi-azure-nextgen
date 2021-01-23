// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Compute.V20200930
{
    public static class GetDiskAccessAPrivateEndpointConnection
    {
        public static Task<GetDiskAccessAPrivateEndpointConnectionResult> InvokeAsync(GetDiskAccessAPrivateEndpointConnectionArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetDiskAccessAPrivateEndpointConnectionResult>("azure-nextgen:compute/v20200930:getDiskAccessAPrivateEndpointConnection", args ?? new GetDiskAccessAPrivateEndpointConnectionArgs(), options.WithVersion());
    }


    public sealed class GetDiskAccessAPrivateEndpointConnectionArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the disk access resource that is being created. The name can't be changed after the disk encryption set is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The maximum name length is 80 characters.
        /// </summary>
        [Input("diskAccessName", required: true)]
        public string DiskAccessName { get; set; } = null!;

        /// <summary>
        /// The name of the private endpoint connection
        /// </summary>
        [Input("privateEndpointConnectionName", required: true)]
        public string PrivateEndpointConnectionName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetDiskAccessAPrivateEndpointConnectionArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetDiskAccessAPrivateEndpointConnectionResult
    {
        /// <summary>
        /// private endpoint connection Id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// private endpoint connection name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The resource of private end point.
        /// </summary>
        public readonly Outputs.PrivateEndpointResponse? PrivateEndpoint;
        /// <summary>
        /// A collection of information about the state of the connection between DiskAccess and Virtual Network.
        /// </summary>
        public readonly Outputs.PrivateLinkServiceConnectionStateResponse PrivateLinkServiceConnectionState;
        /// <summary>
        /// The provisioning state of the private endpoint connection resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// private endpoint connection type
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetDiskAccessAPrivateEndpointConnectionResult(
            string id,

            string name,

            Outputs.PrivateEndpointResponse? privateEndpoint,

            Outputs.PrivateLinkServiceConnectionStateResponse privateLinkServiceConnectionState,

            string provisioningState,

            string type)
        {
            Id = id;
            Name = name;
            PrivateEndpoint = privateEndpoint;
            PrivateLinkServiceConnectionState = privateLinkServiceConnectionState;
            ProvisioningState = provisioningState;
            Type = type;
        }
    }
}
