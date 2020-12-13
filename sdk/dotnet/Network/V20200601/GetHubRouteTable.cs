// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20200601
{
    public static class GetHubRouteTable
    {
        public static Task<GetHubRouteTableResult> InvokeAsync(GetHubRouteTableArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetHubRouteTableResult>("azure-nextgen:network/v20200601:getHubRouteTable", args ?? new GetHubRouteTableArgs(), options.WithVersion());
    }


    public sealed class GetHubRouteTableArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The resource group name of the VirtualHub.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the RouteTable.
        /// </summary>
        [Input("routeTableName", required: true)]
        public string RouteTableName { get; set; } = null!;

        /// <summary>
        /// The name of the VirtualHub.
        /// </summary>
        [Input("virtualHubName", required: true)]
        public string VirtualHubName { get; set; } = null!;

        public GetHubRouteTableArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetHubRouteTableResult
    {
        /// <summary>
        /// List of all connections associated with this route table.
        /// </summary>
        public readonly ImmutableArray<string> AssociatedConnections;
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// List of labels associated with this route table.
        /// </summary>
        public readonly ImmutableArray<string> Labels;
        /// <summary>
        /// The name of the resource that is unique within a resource group. This name can be used to access the resource.
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// List of all connections that advertise to this route table.
        /// </summary>
        public readonly ImmutableArray<string> PropagatingConnections;
        /// <summary>
        /// The provisioning state of the RouteTable resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// List of all routes.
        /// </summary>
        public readonly ImmutableArray<Outputs.HubRouteResponse> Routes;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetHubRouteTableResult(
            ImmutableArray<string> associatedConnections,

            string etag,

            string? id,

            ImmutableArray<string> labels,

            string? name,

            ImmutableArray<string> propagatingConnections,

            string provisioningState,

            ImmutableArray<Outputs.HubRouteResponse> routes,

            string type)
        {
            AssociatedConnections = associatedConnections;
            Etag = etag;
            Id = id;
            Labels = labels;
            Name = name;
            PropagatingConnections = propagatingConnections;
            ProvisioningState = provisioningState;
            Routes = routes;
            Type = type;
        }
    }
}
