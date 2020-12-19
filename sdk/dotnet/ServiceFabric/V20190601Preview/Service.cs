// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.ServiceFabric.V20190601Preview
{
    /// <summary>
    /// The service resource.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:servicefabric/v20190601preview:Service")]
    public partial class Service : Pulumi.CustomResource
    {
        /// <summary>
        /// A list that describes the correlation of the service with other services.
        /// </summary>
        [Output("correlationScheme")]
        public Output<ImmutableArray<Outputs.ServiceCorrelationDescriptionResponse>> CorrelationScheme { get; private set; } = null!;

        /// <summary>
        /// Specifies the move cost for the service.
        /// </summary>
        [Output("defaultMoveCost")]
        public Output<string?> DefaultMoveCost { get; private set; } = null!;

        /// <summary>
        /// Azure resource etag.
        /// </summary>
        [Output("etag")]
        public Output<string> Etag { get; private set; } = null!;

        /// <summary>
        /// It will be deprecated in New API, resource location depends on the parent resource.
        /// </summary>
        [Output("location")]
        public Output<string?> Location { get; private set; } = null!;

        /// <summary>
        /// Azure resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Describes how the service is partitioned.
        /// </summary>
        [Output("partitionDescription")]
        public Output<Union<Outputs.NamedPartitionSchemeDescriptionResponse, Union<Outputs.SingletonPartitionSchemeDescriptionResponse, Outputs.UniformInt64RangePartitionSchemeDescriptionResponse>>?> PartitionDescription { get; private set; } = null!;

        /// <summary>
        /// The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
        /// </summary>
        [Output("placementConstraints")]
        public Output<string?> PlacementConstraints { get; private set; } = null!;

        /// <summary>
        /// The current deployment or provisioning state, which only appears in the response
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// The kind of service (Stateless or Stateful).
        /// </summary>
        [Output("serviceKind")]
        public Output<string> ServiceKind { get; private set; } = null!;

        /// <summary>
        /// The service load metrics is given as an array of ServiceLoadMetricDescription objects.
        /// </summary>
        [Output("serviceLoadMetrics")]
        public Output<ImmutableArray<Outputs.ServiceLoadMetricDescriptionResponse>> ServiceLoadMetrics { get; private set; } = null!;

        /// <summary>
        /// The activation Mode of the service package
        /// </summary>
        [Output("servicePackageActivationMode")]
        public Output<string?> ServicePackageActivationMode { get; private set; } = null!;

        /// <summary>
        /// A list that describes the correlation of the service with other services.
        /// </summary>
        [Output("servicePlacementPolicies")]
        public Output<ImmutableArray<Outputs.ServicePlacementPolicyDescriptionResponse>> ServicePlacementPolicies { get; private set; } = null!;

        /// <summary>
        /// The name of the service type
        /// </summary>
        [Output("serviceTypeName")]
        public Output<string?> ServiceTypeName { get; private set; } = null!;

        /// <summary>
        /// Azure resource tags.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Azure resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a Service resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Service(string name, ServiceArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:servicefabric/v20190601preview:Service", name, args ?? new ServiceArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Service(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:servicefabric/v20190601preview:Service", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:servicefabric/latest:Service"},
                    new Pulumi.Alias { Type = "azure-nextgen:servicefabric/v20170701preview:Service"},
                    new Pulumi.Alias { Type = "azure-nextgen:servicefabric/v20190301:Service"},
                    new Pulumi.Alias { Type = "azure-nextgen:servicefabric/v20190301preview:Service"},
                    new Pulumi.Alias { Type = "azure-nextgen:servicefabric/v20191101preview:Service"},
                    new Pulumi.Alias { Type = "azure-nextgen:servicefabric/v20200301:Service"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Service resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Service Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Service(name, id, options);
        }
    }

    public sealed class ServiceArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the application resource.
        /// </summary>
        [Input("applicationName", required: true)]
        public Input<string> ApplicationName { get; set; } = null!;

        /// <summary>
        /// The name of the cluster resource.
        /// </summary>
        [Input("clusterName", required: true)]
        public Input<string> ClusterName { get; set; } = null!;

        [Input("correlationScheme")]
        private InputList<Inputs.ServiceCorrelationDescriptionArgs>? _correlationScheme;

        /// <summary>
        /// A list that describes the correlation of the service with other services.
        /// </summary>
        public InputList<Inputs.ServiceCorrelationDescriptionArgs> CorrelationScheme
        {
            get => _correlationScheme ?? (_correlationScheme = new InputList<Inputs.ServiceCorrelationDescriptionArgs>());
            set => _correlationScheme = value;
        }

        /// <summary>
        /// Specifies the move cost for the service.
        /// </summary>
        [Input("defaultMoveCost")]
        public InputUnion<string, Pulumi.AzureNextGen.ServiceFabric.V20190601Preview.MoveCost>? DefaultMoveCost { get; set; }

        /// <summary>
        /// It will be deprecated in New API, resource location depends on the parent resource.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// Describes how the service is partitioned.
        /// </summary>
        [Input("partitionDescription")]
        public InputUnion<Inputs.NamedPartitionSchemeDescriptionArgs, InputUnion<Inputs.SingletonPartitionSchemeDescriptionArgs, Inputs.UniformInt64RangePartitionSchemeDescriptionArgs>>? PartitionDescription { get; set; }

        /// <summary>
        /// The placement constraints as a string. Placement constraints are boolean expressions on node properties and allow for restricting a service to particular nodes based on the service requirements. For example, to place a service on nodes where NodeType is blue specify the following: "NodeColor == blue)".
        /// </summary>
        [Input("placementConstraints")]
        public Input<string>? PlacementConstraints { get; set; }

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The kind of service (Stateless or Stateful).
        /// </summary>
        [Input("serviceKind", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.ServiceFabric.V20190601Preview.ServiceKind> ServiceKind { get; set; } = null!;

        [Input("serviceLoadMetrics")]
        private InputList<Inputs.ServiceLoadMetricDescriptionArgs>? _serviceLoadMetrics;

        /// <summary>
        /// The service load metrics is given as an array of ServiceLoadMetricDescription objects.
        /// </summary>
        public InputList<Inputs.ServiceLoadMetricDescriptionArgs> ServiceLoadMetrics
        {
            get => _serviceLoadMetrics ?? (_serviceLoadMetrics = new InputList<Inputs.ServiceLoadMetricDescriptionArgs>());
            set => _serviceLoadMetrics = value;
        }

        /// <summary>
        /// The name of the service resource in the format of {applicationName}~{serviceName}.
        /// </summary>
        [Input("serviceName", required: true)]
        public Input<string> ServiceName { get; set; } = null!;

        /// <summary>
        /// The activation Mode of the service package
        /// </summary>
        [Input("servicePackageActivationMode")]
        public InputUnion<string, Pulumi.AzureNextGen.ServiceFabric.V20190601Preview.ArmServicePackageActivationMode>? ServicePackageActivationMode { get; set; }

        [Input("servicePlacementPolicies")]
        private InputList<Inputs.ServicePlacementPolicyDescriptionArgs>? _servicePlacementPolicies;

        /// <summary>
        /// A list that describes the correlation of the service with other services.
        /// </summary>
        public InputList<Inputs.ServicePlacementPolicyDescriptionArgs> ServicePlacementPolicies
        {
            get => _servicePlacementPolicies ?? (_servicePlacementPolicies = new InputList<Inputs.ServicePlacementPolicyDescriptionArgs>());
            set => _servicePlacementPolicies = value;
        }

        /// <summary>
        /// The name of the service type
        /// </summary>
        [Input("serviceTypeName")]
        public Input<string>? ServiceTypeName { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// Azure resource tags.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        public ServiceArgs()
        {
        }
    }
}
