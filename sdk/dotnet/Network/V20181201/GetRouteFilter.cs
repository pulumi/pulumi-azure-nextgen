// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20181201
{
    public static class GetRouteFilter
    {
        public static Task<GetRouteFilterResult> InvokeAsync(GetRouteFilterArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetRouteFilterResult>("azure-nextgen:network/v20181201:getRouteFilter", args ?? new GetRouteFilterArgs(), options.WithVersion());
    }


    public sealed class GetRouteFilterArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// Expands referenced express route bgp peering resources.
        /// </summary>
        [Input("expand")]
        public string? Expand { get; set; }

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the route filter.
        /// </summary>
        [Input("routeFilterName", required: true)]
        public string RouteFilterName { get; set; } = null!;

        public GetRouteFilterArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetRouteFilterResult
    {
        /// <summary>
        /// Gets a unique read-only string that changes whenever the resource is updated.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// Resource ID.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// Resource location.
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// A collection of references to express route circuit peerings.
        /// </summary>
        public readonly ImmutableArray<Outputs.ExpressRouteCircuitPeeringResponse> Peerings;
        /// <summary>
        /// The provisioning state of the resource. Possible values are: 'Updating', 'Deleting', 'Succeeded' and 'Failed'.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Collection of RouteFilterRules contained within a route filter.
        /// </summary>
        public readonly ImmutableArray<Outputs.RouteFilterRuleResponse> Rules;
        /// <summary>
        /// Resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetRouteFilterResult(
            string etag,

            string? id,

            string location,

            string name,

            ImmutableArray<Outputs.ExpressRouteCircuitPeeringResponse> peerings,

            string provisioningState,

            ImmutableArray<Outputs.RouteFilterRuleResponse> rules,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            Etag = etag;
            Id = id;
            Location = location;
            Name = name;
            Peerings = peerings;
            ProvisioningState = provisioningState;
            Rules = rules;
            Tags = tags;
            Type = type;
        }
    }
}
