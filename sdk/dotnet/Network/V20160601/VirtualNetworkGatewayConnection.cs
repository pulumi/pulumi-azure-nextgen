// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20160601
{
    /// <summary>
    /// A common class for general resource information
    /// </summary>
    public partial class VirtualNetworkGatewayConnection : Pulumi.CustomResource
    {
        /// <summary>
        /// The authorizationKey.
        /// </summary>
        [Output("authorizationKey")]
        public Output<string?> AuthorizationKey { get; private set; } = null!;

        /// <summary>
        /// Virtual network Gateway connection status
        /// </summary>
        [Output("connectionStatus")]
        public Output<string?> ConnectionStatus { get; private set; } = null!;

        /// <summary>
        /// Gateway connection type IPsec/Dedicated/VpnClient/Vnet2Vnet
        /// </summary>
        [Output("connectionType")]
        public Output<string?> ConnectionType { get; private set; } = null!;

        /// <summary>
        /// The Egress Bytes Transferred in this connection
        /// </summary>
        [Output("egressBytesTransferred")]
        public Output<int?> EgressBytesTransferred { get; private set; } = null!;

        /// <summary>
        /// EnableBgp Flag
        /// </summary>
        [Output("enableBgp")]
        public Output<bool?> EnableBgp { get; private set; } = null!;

        /// <summary>
        /// Gets a unique read-only string that changes whenever the resource is updated
        /// </summary>
        [Output("etag")]
        public Output<string?> Etag { get; private set; } = null!;

        /// <summary>
        /// The Ingress Bytes Transferred in this connection
        /// </summary>
        [Output("ingressBytesTransferred")]
        public Output<int?> IngressBytesTransferred { get; private set; } = null!;

        /// <summary>
        /// A common class for general resource information
        /// </summary>
        [Output("localNetworkGateway2")]
        public Output<Outputs.LocalNetworkGatewayResponse?> LocalNetworkGateway2 { get; private set; } = null!;

        /// <summary>
        /// Resource location
        /// </summary>
        [Output("location")]
        public Output<string?> Location { get; private set; } = null!;

        /// <summary>
        /// Resource name
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The reference to peerings resource.
        /// </summary>
        [Output("peer")]
        public Output<Outputs.SubResourceResponse?> Peer { get; private set; } = null!;

        /// <summary>
        /// Gets provisioning state of the VirtualNetworkGatewayConnection resource Updating/Deleting/Failed
        /// </summary>
        [Output("provisioningState")]
        public Output<string?> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Gets or sets resource guid property of the VirtualNetworkGatewayConnection resource
        /// </summary>
        [Output("resourceGuid")]
        public Output<string?> ResourceGuid { get; private set; } = null!;

        /// <summary>
        /// The Routing weight.
        /// </summary>
        [Output("routingWeight")]
        public Output<int?> RoutingWeight { get; private set; } = null!;

        /// <summary>
        /// The IPsec share key.
        /// </summary>
        [Output("sharedKey")]
        public Output<string?> SharedKey { get; private set; } = null!;

        /// <summary>
        /// Resource tags
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Resource type
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// A common class for general resource information
        /// </summary>
        [Output("virtualNetworkGateway1")]
        public Output<Outputs.VirtualNetworkGatewayResponse?> VirtualNetworkGateway1 { get; private set; } = null!;

        /// <summary>
        /// A common class for general resource information
        /// </summary>
        [Output("virtualNetworkGateway2")]
        public Output<Outputs.VirtualNetworkGatewayResponse?> VirtualNetworkGateway2 { get; private set; } = null!;


        /// <summary>
        /// Create a VirtualNetworkGatewayConnection resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public VirtualNetworkGatewayConnection(string name, VirtualNetworkGatewayConnectionArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/v20160601:VirtualNetworkGatewayConnection", name, args ?? new VirtualNetworkGatewayConnectionArgs(), MakeResourceOptions(options, ""))
        {
        }

        private VirtualNetworkGatewayConnection(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/v20160601:VirtualNetworkGatewayConnection", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:network/latest:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20150615:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20160330:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20160901:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20161201:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20170301:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20170601:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20170801:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20170901:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20171001:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20171101:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180101:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180201:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180401:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180601:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180701:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180801:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20181001:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20181101:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20181201:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190201:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190401:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190601:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190701:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190801:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190901:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20191101:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20191201:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200301:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200401:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200501:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200601:VirtualNetworkGatewayConnection"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200701:VirtualNetworkGatewayConnection"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing VirtualNetworkGatewayConnection resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static VirtualNetworkGatewayConnection Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new VirtualNetworkGatewayConnection(name, id, options);
        }
    }

    public sealed class VirtualNetworkGatewayConnectionArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The authorizationKey.
        /// </summary>
        [Input("authorizationKey")]
        public Input<string>? AuthorizationKey { get; set; }

        /// <summary>
        /// Virtual network Gateway connection status
        /// </summary>
        [Input("connectionStatus")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20160601.VirtualNetworkGatewayConnectionStatus>? ConnectionStatus { get; set; }

        /// <summary>
        /// Gateway connection type IPsec/Dedicated/VpnClient/Vnet2Vnet
        /// </summary>
        [Input("connectionType")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20160601.VirtualNetworkGatewayConnectionType>? ConnectionType { get; set; }

        /// <summary>
        /// The Egress Bytes Transferred in this connection
        /// </summary>
        [Input("egressBytesTransferred")]
        public Input<int>? EgressBytesTransferred { get; set; }

        /// <summary>
        /// EnableBgp Flag
        /// </summary>
        [Input("enableBgp")]
        public Input<bool>? EnableBgp { get; set; }

        /// <summary>
        /// Gets a unique read-only string that changes whenever the resource is updated
        /// </summary>
        [Input("etag")]
        public Input<string>? Etag { get; set; }

        /// <summary>
        /// Resource Id
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// The Ingress Bytes Transferred in this connection
        /// </summary>
        [Input("ingressBytesTransferred")]
        public Input<int>? IngressBytesTransferred { get; set; }

        /// <summary>
        /// A common class for general resource information
        /// </summary>
        [Input("localNetworkGateway2")]
        public Input<Inputs.LocalNetworkGatewayArgs>? LocalNetworkGateway2 { get; set; }

        /// <summary>
        /// Resource location
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// The reference to peerings resource.
        /// </summary>
        [Input("peer")]
        public Input<Inputs.SubResourceArgs>? Peer { get; set; }

        /// <summary>
        /// Gets provisioning state of the VirtualNetworkGatewayConnection resource Updating/Deleting/Failed
        /// </summary>
        [Input("provisioningState")]
        public Input<string>? ProvisioningState { get; set; }

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Gets or sets resource guid property of the VirtualNetworkGatewayConnection resource
        /// </summary>
        [Input("resourceGuid")]
        public Input<string>? ResourceGuid { get; set; }

        /// <summary>
        /// The Routing weight.
        /// </summary>
        [Input("routingWeight")]
        public Input<int>? RoutingWeight { get; set; }

        /// <summary>
        /// The IPsec share key.
        /// </summary>
        [Input("sharedKey")]
        public Input<string>? SharedKey { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// Resource tags
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// A common class for general resource information
        /// </summary>
        [Input("virtualNetworkGateway1")]
        public Input<Inputs.VirtualNetworkGatewayArgs>? VirtualNetworkGateway1 { get; set; }

        /// <summary>
        /// A common class for general resource information
        /// </summary>
        [Input("virtualNetworkGateway2")]
        public Input<Inputs.VirtualNetworkGatewayArgs>? VirtualNetworkGateway2 { get; set; }

        /// <summary>
        /// The name of the virtual network gateway connection.
        /// </summary>
        [Input("virtualNetworkGatewayConnectionName", required: true)]
        public Input<string> VirtualNetworkGatewayConnectionName { get; set; } = null!;

        public VirtualNetworkGatewayConnectionArgs()
        {
        }
    }
}
