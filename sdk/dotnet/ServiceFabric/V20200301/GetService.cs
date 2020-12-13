// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ServiceFabric.V20200301
{
    public static class GetService
    {
        public static Task<GetServiceResult> InvokeAsync(GetServiceArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetServiceResult>("azure-nextgen:servicefabric/v20200301:getService", args ?? new GetServiceArgs(), options.WithVersion());
    }


    public sealed class GetServiceArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The name of the application resource.
        /// </summary>
        [Input("applicationName", required: true)]
        public string ApplicationName { get; set; } = null!;

        /// <summary>
        /// The name of the cluster resource.
        /// </summary>
        [Input("clusterName", required: true)]
        public string ClusterName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the service resource in the format of {applicationName}~{serviceName}.
        /// </summary>
        [Input("serviceName", required: true)]
        public string ServiceName { get; set; } = null!;

        public GetServiceArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetServiceResult
    {
        /// <summary>
        /// A list that describes the correlation of the service with other services.
        /// </summary>
        public readonly ImmutableArray<Outputs.ServiceCorrelationDescriptionResponse> CorrelationScheme;
        /// <summary>
        /// Specifies the move cost for the service.
        /// </summary>
        public readonly string? DefaultMoveCost;
        /// <summary>
        /// Azure resource etag.
        /// </summary>
        public readonly string Etag;
        /// <summary>
        /// Azure resource identifier.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// It will be deprecated in New API, resource location depends on the parent resource.
        /// </summary>
        public readonly string? Location;
        /// <summary>
        /// Azure resource name.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Describes how the service is partitioned.
        /// </summary>
        public readonly Union<Outputs.NamedPartitionSchemeDescriptionResponse, Union<Outputs.SingletonPartitionSchemeDescriptionResponse, Outputs.UniformInt64RangePartitionSchemeDescriptionResponse>>? PartitionDescription;
        /// <summary>
        /// The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
        /// </summary>
        public readonly string? PlacementConstraints;
        /// <summary>
        /// The current deployment or provisioning state, which only appears in the response
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// Dns name used for the service. If this is specified, then the service can be accessed via its DNS name instead of service name.
        /// </summary>
        public readonly string? ServiceDnsName;
        /// <summary>
        /// The kind of service (Stateless or Stateful).
        /// </summary>
        public readonly string ServiceKind;
        /// <summary>
        /// The service load metrics is given as an array of ServiceLoadMetricDescription objects.
        /// </summary>
        public readonly ImmutableArray<Outputs.ServiceLoadMetricDescriptionResponse> ServiceLoadMetrics;
        /// <summary>
        /// The activation Mode of the service package
        /// </summary>
        public readonly string? ServicePackageActivationMode;
        /// <summary>
        /// A list that describes the correlation of the service with other services.
        /// </summary>
        public readonly ImmutableArray<Outputs.ServicePlacementPolicyDescriptionResponse> ServicePlacementPolicies;
        /// <summary>
        /// The name of the service type
        /// </summary>
        public readonly string? ServiceTypeName;
        /// <summary>
        /// Azure resource tags.
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Azure resource type.
        /// </summary>
        public readonly string Type;

        [OutputConstructor]
        private GetServiceResult(
            ImmutableArray<Outputs.ServiceCorrelationDescriptionResponse> correlationScheme,

            string? defaultMoveCost,

            string etag,

            string id,

            string? location,

            string name,

            Union<Outputs.NamedPartitionSchemeDescriptionResponse, Union<Outputs.SingletonPartitionSchemeDescriptionResponse, Outputs.UniformInt64RangePartitionSchemeDescriptionResponse>>? partitionDescription,

            string? placementConstraints,

            string provisioningState,

            string? serviceDnsName,

            string serviceKind,

            ImmutableArray<Outputs.ServiceLoadMetricDescriptionResponse> serviceLoadMetrics,

            string? servicePackageActivationMode,

            ImmutableArray<Outputs.ServicePlacementPolicyDescriptionResponse> servicePlacementPolicies,

            string? serviceTypeName,

            ImmutableDictionary<string, string>? tags,

            string type)
        {
            CorrelationScheme = correlationScheme;
            DefaultMoveCost = defaultMoveCost;
            Etag = etag;
            Id = id;
            Location = location;
            Name = name;
            PartitionDescription = partitionDescription;
            PlacementConstraints = placementConstraints;
            ProvisioningState = provisioningState;
            ServiceDnsName = serviceDnsName;
            ServiceKind = serviceKind;
            ServiceLoadMetrics = serviceLoadMetrics;
            ServicePackageActivationMode = servicePackageActivationMode;
            ServicePlacementPolicies = servicePlacementPolicies;
            ServiceTypeName = serviceTypeName;
            Tags = tags;
            Type = type;
        }
    }
}
