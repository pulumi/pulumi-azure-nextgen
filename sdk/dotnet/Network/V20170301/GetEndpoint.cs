// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20170301
{
    public static class GetEndpoint
    {
        public static Task<GetEndpointResult> InvokeAsync(GetEndpointArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetEndpointResult>("azure-nextgen:network/v20170301:getEndpoint", args ?? new GetEndpointArgs(), options.WithVersion());
    }


    public sealed class GetEndpointArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the Traffic Manager endpoint.
        /// </summary>
        [Input("endpointName", required: true)]
        public string EndpointName { get; set; } = null!;

        /// <summary>
        /// The type of the Traffic Manager endpoint.
        /// </summary>
        [Input("endpointType", required: true)]
        public string EndpointType { get; set; } = null!;

        /// <summary>
        /// The name of the Traffic Manager profile.
        /// </summary>
        [Input("profileName", required: true)]
        public string ProfileName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group containing the Traffic Manager endpoint.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        public GetEndpointArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetEndpointResult
    {
        /// <summary>
        /// Specifies the location of the external or nested endpoints when using the ‘Performance’ traffic routing method.
        /// </summary>
        public readonly string? EndpointLocation;
        /// <summary>
        /// Gets or sets the monitoring status of the endpoint.
        /// </summary>
        public readonly string? EndpointMonitorStatus;
        /// <summary>
        /// Gets or sets the status of the endpoint..  If the endpoint is Enabled, it is probed for endpoint health and is included in the traffic routing method.  Possible values are 'Enabled' and 'Disabled'.
        /// </summary>
        public readonly string? EndpointStatus;
        /// <summary>
        /// Gets or sets the list of countries/regions mapped to this endpoint when using the ‘Geographic’ traffic routing method. Please consult Traffic Manager Geographic documentation for a full list of accepted values.
        /// </summary>
        public readonly ImmutableArray<string> GeoMapping;
        /// <summary>
        /// Gets or sets the ID of the Traffic Manager endpoint.
        /// </summary>
        public readonly string? Id;
        /// <summary>
        /// Gets or sets the minimum number of endpoints that must be available in the child profile in order for the parent profile to be considered available. Only applicable to endpoint of type 'NestedEndpoints'.
        /// </summary>
        public readonly int? MinChildEndpoints;
        /// <summary>
        /// Gets or sets the name of the Traffic Manager endpoint.
        /// </summary>
        public readonly string? Name;
        /// <summary>
        /// Gets or sets the priority of this endpoint when using the ‘Priority’ traffic routing method. Possible values are from 1 to 1000, lower values represent higher priority. This is an optional parameter.  If specified, it must be specified on all endpoints, and no two endpoints can share the same priority value.
        /// </summary>
        public readonly int? Priority;
        /// <summary>
        /// Gets or sets the fully-qualified DNS name of the endpoint.  Traffic Manager returns this value in DNS responses to direct traffic to this endpoint.
        /// </summary>
        public readonly string? Target;
        /// <summary>
        /// Gets or sets the Azure Resource URI of the of the endpoint.  Not applicable to endpoints of type 'ExternalEndpoints'.
        /// </summary>
        public readonly string? TargetResourceId;
        /// <summary>
        /// Gets or sets the endpoint type of the Traffic Manager endpoint.
        /// </summary>
        public readonly string? Type;
        /// <summary>
        /// Gets or sets the weight of this endpoint when using the 'Weighted' traffic routing method. Possible values are from 1 to 1000.
        /// </summary>
        public readonly int? Weight;

        [OutputConstructor]
        private GetEndpointResult(
            string? endpointLocation,

            string? endpointMonitorStatus,

            string? endpointStatus,

            ImmutableArray<string> geoMapping,

            string? id,

            int? minChildEndpoints,

            string? name,

            int? priority,

            string? target,

            string? targetResourceId,

            string? type,

            int? weight)
        {
            EndpointLocation = endpointLocation;
            EndpointMonitorStatus = endpointMonitorStatus;
            EndpointStatus = endpointStatus;
            GeoMapping = geoMapping;
            Id = id;
            MinChildEndpoints = minChildEndpoints;
            Name = name;
            Priority = priority;
            Target = target;
            TargetResourceId = targetResourceId;
            Type = type;
            Weight = weight;
        }
    }
}
