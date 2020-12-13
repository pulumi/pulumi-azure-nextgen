// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20180101
{
    public static class GetRoute
    {
        public static Task<GetRouteResult> InvokeAsync(GetRouteArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetRouteResult>("azure-nextgen:network/v20180101:getRoute", args ?? new GetRouteArgs(), options.WithVersion());
    }


    public sealed class GetRouteArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the route.
        /// </summary>
        [Input("routeName", required: true)]
        public string RouteName { get; set; } = null!;

        /// <summary>
        /// The name of the route table.
        /// </summary>
        [Input("routeTableName", required: true)]
        public string RouteTableName { get; set; } = null!;

        public GetRouteArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetRouteResult
    {
        /// <summary>
        /// The destination CIDR to which the route applies.
        /// </summary>
        public readonly string? AddressPrefix;
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string? Etag;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// The name of the resource that is unique within a resource group. This name can be used to access the resource.
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance.
        /// </summary>
        public readonly string? NextHopIpAddress;
        /// <summary>
        /// The type of Azure hop the packet should be sent to. Possible values are: 'VirtualNetworkGateway', 'VnetLocal', 'Internet', 'VirtualAppliance', and 'None'
        /// </summary>
        public readonly string NextHopType;
        /// <summary>
        /// The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
        /// </summary>
        public readonly string? ProvisioningState;

        [OutputConstructor]
        private GetRouteResult(
            string? addressPrefix,

            string? etag,

            string? id,

            string? name,

            string? nextHopIpAddress,

            string nextHopType,

            string? provisioningState)
        {
            AddressPrefix = addressPrefix;
            Etag = etag;
            Id = id;
            Name = name;
            NextHopIpAddress = nextHopIpAddress;
            NextHopType = nextHopType;
            ProvisioningState = provisioningState;
        }
    }
}
