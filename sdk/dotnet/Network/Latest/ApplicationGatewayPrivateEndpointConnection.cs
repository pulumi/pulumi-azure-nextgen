// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.Latest
{
    /// <summary>
    /// Private Endpoint connection on an application gateway.
    /// Latest API Version: 2020-07-01.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:network/latest:ApplicationGatewayPrivateEndpointConnection")]
    public partial class ApplicationGatewayPrivateEndpointConnection : Pulumi.CustomResource
    {
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        [Output("etag")]
        public Output<string> Etag { get; private set; } = null!;

        /// <summary>
        /// The consumer link id.
        /// </summary>
        [Output("linkIdentifier")]
        public Output<string> LinkIdentifier { get; private set; } = null!;

        /// <summary>
        /// Name of the private endpoint connection on an application gateway.
        /// </summary>
        [Output("name")]
        public Output<string?> Name { get; private set; } = null!;

        /// <summary>
        /// The resource of private end point.
        /// </summary>
        [Output("privateEndpoint")]
        public Output<Outputs.PrivateEndpointResponse> PrivateEndpoint { get; private set; } = null!;

        /// <summary>
        /// A collection of information about the state of the connection between service consumer and provider.
        /// </summary>
        [Output("privateLinkServiceConnectionState")]
        public Output<Outputs.PrivateLinkServiceConnectionStateResponse?> PrivateLinkServiceConnectionState { get; private set; } = null!;

        /// <summary>
        /// The provisioning state of the application gateway private endpoint connection resource.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Type of the resource.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a ApplicationGatewayPrivateEndpointConnection resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ApplicationGatewayPrivateEndpointConnection(string name, ApplicationGatewayPrivateEndpointConnectionArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/latest:ApplicationGatewayPrivateEndpointConnection", name, args ?? new ApplicationGatewayPrivateEndpointConnectionArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ApplicationGatewayPrivateEndpointConnection(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/latest:ApplicationGatewayPrivateEndpointConnection", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200501:ApplicationGatewayPrivateEndpointConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200601:ApplicationGatewayPrivateEndpointConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200701:ApplicationGatewayPrivateEndpointConnection"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ApplicationGatewayPrivateEndpointConnection resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ApplicationGatewayPrivateEndpointConnection Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new ApplicationGatewayPrivateEndpointConnection(name, id, options);
        }
    }

    public sealed class ApplicationGatewayPrivateEndpointConnectionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the application gateway.
        /// </summary>
        [Input("applicationGatewayName", required: true)]
        public Input<string> ApplicationGatewayName { get; set; } = null!;

        /// <summary>
        /// The name of the application gateway private endpoint connection.
        /// </summary>
        [Input("connectionName", required: true)]
        public Input<string> ConnectionName { get; set; } = null!;

        /// <summary>
        /// Resource ID.
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// Name of the private endpoint connection on an application gateway.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// A collection of information about the state of the connection between service consumer and provider.
        /// </summary>
        [Input("privateLinkServiceConnectionState")]
        public Input<Inputs.PrivateLinkServiceConnectionStateArgs>? PrivateLinkServiceConnectionState { get; set; }

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        public ApplicationGatewayPrivateEndpointConnectionArgs()
        {
        }
    }
}
