// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Cdn.V20200331
{
    /// <summary>
    /// Origin group comprising of origins is used for load balancing to origins when the content cannot be served from CDN.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:cdn/v20200331:OriginGroup")]
    public partial class OriginGroup : Pulumi.CustomResource
    {
        /// <summary>
        /// Health probe settings to the origin that is used to determine the health of the origin.
        /// </summary>
        [Output("healthProbeSettings")]
        public Output<Outputs.HealthProbeParametersResponse?> HealthProbeSettings { get; private set; } = null!;

        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The source of the content being delivered via CDN within given origin group.
        /// </summary>
        [Output("origins")]
        public Output<ImmutableArray<Outputs.ResourceReferenceResponse>> Origins { get; private set; } = null!;

        /// <summary>
        /// Provisioning status of the origin group.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Resource status of the origin group.
        /// </summary>
        [Output("resourceState")]
        public Output<string> ResourceState { get; private set; } = null!;

        /// <summary>
        /// The JSON object that contains the properties to determine origin health using real requests/responses. This property is currently not supported.
        /// </summary>
        [Output("responseBasedOriginErrorDetectionSettings")]
        public Output<Outputs.ResponseBasedOriginErrorDetectionParametersResponse?> ResponseBasedOriginErrorDetectionSettings { get; private set; } = null!;

        /// <summary>
        /// Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.
        /// </summary>
        [Output("trafficRestorationTimeToHealedOrNewEndpointsInMinutes")]
        public Output<int?> TrafficRestorationTimeToHealedOrNewEndpointsInMinutes { get; private set; } = null!;

        /// <summary>
        /// Resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a OriginGroup resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public OriginGroup(string name, OriginGroupArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:cdn/v20200331:OriginGroup", name, args ?? new OriginGroupArgs(), MakeResourceOptions(options, ""))
        {
        }

        private OriginGroup(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:cdn/v20200331:OriginGroup", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:cdn/latest:OriginGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:cdn/v20191231:OriginGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:cdn/v20200415:OriginGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:cdn/v20200901:OriginGroup"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing OriginGroup resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static OriginGroup Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new OriginGroup(name, id, options);
        }
    }

    public sealed class OriginGroupArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Name of the endpoint under the profile which is unique globally.
        /// </summary>
        [Input("endpointName", required: true)]
        public Input<string> EndpointName { get; set; } = null!;

        /// <summary>
        /// Health probe settings to the origin that is used to determine the health of the origin.
        /// </summary>
        [Input("healthProbeSettings")]
        public Input<Inputs.HealthProbeParametersArgs>? HealthProbeSettings { get; set; }

        /// <summary>
        /// Name of the origin group which is unique within the endpoint.
        /// </summary>
        [Input("originGroupName", required: true)]
        public Input<string> OriginGroupName { get; set; } = null!;

        [Input("origins", required: true)]
        private InputList<Inputs.ResourceReferenceArgs>? _origins;

        /// <summary>
        /// The source of the content being delivered via CDN within given origin group.
        /// </summary>
        public InputList<Inputs.ResourceReferenceArgs> Origins
        {
            get => _origins ?? (_origins = new InputList<Inputs.ResourceReferenceArgs>());
            set => _origins = value;
        }

        /// <summary>
        /// Name of the CDN profile which is unique within the resource group.
        /// </summary>
        [Input("profileName", required: true)]
        public Input<string> ProfileName { get; set; } = null!;

        /// <summary>
        /// Name of the Resource group within the Azure subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The JSON object that contains the properties to determine origin health using real requests/responses. This property is currently not supported.
        /// </summary>
        [Input("responseBasedOriginErrorDetectionSettings")]
        public Input<Inputs.ResponseBasedOriginErrorDetectionParametersArgs>? ResponseBasedOriginErrorDetectionSettings { get; set; }

        /// <summary>
        /// Time in minutes to shift the traffic to the endpoint gradually when an unhealthy endpoint comes healthy or a new endpoint is added. Default is 10 mins. This property is currently not supported.
        /// </summary>
        [Input("trafficRestorationTimeToHealedOrNewEndpointsInMinutes")]
        public Input<int>? TrafficRestorationTimeToHealedOrNewEndpointsInMinutes { get; set; }

        public OriginGroupArgs()
        {
        }
    }
}
