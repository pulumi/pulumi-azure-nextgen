// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.EventGrid.Latest
{
    public static class GetPrivateEndpointConnection
    {
        public static Task<GetPrivateEndpointConnectionResult> InvokeAsync(GetPrivateEndpointConnectionArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetPrivateEndpointConnectionResult>("azure-nextgen:eventgrid/latest:getPrivateEndpointConnection", args ?? new GetPrivateEndpointConnectionArgs(), options.WithVersion());
    }


    public sealed class GetPrivateEndpointConnectionArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the parent resource (namely, either, the topic name or domain name).
        /// </summary>
        [Input("parentName", required: true)]
        public string ParentName { get; set; } = null!;

        /// <summary>
        /// The type of the parent resource. This can be either \'topics\' or \'domains\'.
        /// </summary>
        [Input("parentType", required: true)]
        public string ParentType { get; set; } = null!;

        /// <summary>
        /// The name of the private endpoint connection connection.
        /// </summary>
        [Input("privateEndpointConnectionName", required: true)]
        public string PrivateEndpointConnectionName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group within the user's subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetPrivateEndpointConnectionArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetPrivateEndpointConnectionResult
    {
        /// <summary>
        /// GroupIds from the private link service resource.
        /// </summary>
        public readonly ImmutableArray<string> GroupIds;
        /// <summary>
        /// Fully qualified identifier of the resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Name of the resource.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// The Private Endpoint resource for this Connection.
        /// </summary>
        public readonly Outputs.PrivateEndpointResponse? PrivateEndpoint;
        /// <summary>
        /// Details about the state of the connection.
        /// </summary>
        public readonly Outputs.ConnectionStateResponse? PrivateLinkServiceConnectionState;
        /// <summary>
        /// Provisioning state of the Private Endpoint Connection.
        /// </summary>
        public readonly string? ProvisioningState;
        /// <summary>
        /// Type of the resource.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetPrivateEndpointConnectionResult(
            ImmutableArray<string> groupIds,

            string id,

            string name,

            Outputs.PrivateEndpointResponse? privateEndpoint,

            Outputs.ConnectionStateResponse? privateLinkServiceConnectionState,

            string? provisioningState,

            string type)
        {
            GroupIds = groupIds;
            Id = id;
            Name = name;
            PrivateEndpoint = privateEndpoint;
            PrivateLinkServiceConnectionState = privateLinkServiceConnectionState;
            ProvisioningState = provisioningState;
            Type = type;
        }
    }
}
