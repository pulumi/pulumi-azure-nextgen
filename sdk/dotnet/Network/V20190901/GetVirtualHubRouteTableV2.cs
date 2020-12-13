// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20190901
{
    public static class GetVirtualHubRouteTableV2
    {
        public static Task<GetVirtualHubRouteTableV2Result> InvokeAsync(GetVirtualHubRouteTableV2Args args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetVirtualHubRouteTableV2Result>("azure-nextgen:network/v20190901:getVirtualHubRouteTableV2", args ?? new GetVirtualHubRouteTableV2Args(), options.WithVersion());
    }


    public sealed class GetVirtualHubRouteTableV2Args : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The resource group name of the VirtualHubRouteTableV2.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the VirtualHubRouteTableV2.
        /// </summary>
        [Input("routeTableName", required: true)]
        public string RouteTableName { get; set; } = null!;

        /// <summary>
        /// The name of the VirtualHub.
        /// </summary>
        [Input("virtualHubName", required: true)]
        public string VirtualHubName { get; set; } = null!;

        public GetVirtualHubRouteTableV2Args()
        {
        }
    }


    [OutputType]
    public sealed class GetVirtualHubRouteTableV2Result
    {
        /// <summary>
        /// List of all connections attached to this route table v2.
        /// </summary>
        public readonly ImmutableArray<string> AttachedConnections;
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// The name of the resource that is unique within a resource group. This name can be used to access the resource.
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// The provisioning state of the virtual hub route table v2 resource.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// List of all routes.
        /// </summary>
        public readonly ImmutableArray<Outputs.VirtualHubRouteV2Response> Routes;

        [OutputConstructor]
        private GetVirtualHubRouteTableV2Result(
            ImmutableArray<string> attachedConnections,

            string etag,

            string? id,

            string? name,

            string provisioningState,

            ImmutableArray<Outputs.VirtualHubRouteV2Response> routes)
        {
            AttachedConnections = attachedConnections;
            Etag = etag;
            Id = id;
            Name = name;
            ProvisioningState = provisioningState;
            Routes = routes;
        }
    }
}
