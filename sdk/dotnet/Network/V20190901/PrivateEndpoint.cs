// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Network.V20190901
{
    /// <summary>
    /// Private endpoint resource.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:network/v20190901:PrivateEndpoint")]
    public partial class PrivateEndpoint : Pulumi.CustomResource
    {
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        [Output("etag")]
        public Output<string> Etag { get; private set; } = null!;

        /// <summary>
        /// Resource location.
        /// </summary>
        [Output("location")]
        public Output<string?> Location { get; private set; } = null!;

        /// <summary>
        /// A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource.
        /// </summary>
        [Output("manualPrivateLinkServiceConnections")]
        public Output<ImmutableArray<Outputs.PrivateLinkServiceConnectionResponse>> ManualPrivateLinkServiceConnections { get; private set; } = null!;

        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// An array of references to the network interfaces created for this private endpoint.
        /// </summary>
        [Output("networkInterfaces")]
        public Output<ImmutableArray<Outputs.NetworkInterfaceResponse>> NetworkInterfaces { get; private set; } = null!;

        /// <summary>
        /// A grouping of information about the connection to the remote resource.
        /// </summary>
        [Output("privateLinkServiceConnections")]
        public Output<ImmutableArray<Outputs.PrivateLinkServiceConnectionResponse>> PrivateLinkServiceConnections { get; private set; } = null!;

        /// <summary>
        /// The provisioning state of the private endpoint resource.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// The ID of the subnet from which the private IP will be allocated.
        /// </summary>
        [Output("subnet")]
        public Output<Outputs.SubnetResponse?> Subnet { get; private set; } = null!;

        /// <summary>
        /// Resource tags.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a PrivateEndpoint resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public PrivateEndpoint(string name, PrivateEndpointArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/v20190901:PrivateEndpoint", name, args ?? new PrivateEndpointArgs(), MakeResourceOptions(options, ""))
        {
        }

        private PrivateEndpoint(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/v20190901:PrivateEndpoint", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:network/latest:PrivateEndpoint"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190401:PrivateEndpoint"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190601:PrivateEndpoint"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190701:PrivateEndpoint"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190801:PrivateEndpoint"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20191101:PrivateEndpoint"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20191201:PrivateEndpoint"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200301:PrivateEndpoint"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200401:PrivateEndpoint"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200501:PrivateEndpoint"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200601:PrivateEndpoint"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200701:PrivateEndpoint"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing PrivateEndpoint resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static PrivateEndpoint Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new PrivateEndpoint(name, id, options);
        }
    }

    public sealed class PrivateEndpointArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Resource ID.
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// Resource location.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        [Input("manualPrivateLinkServiceConnections")]
        private InputList<Inputs.PrivateLinkServiceConnectionArgs>? _manualPrivateLinkServiceConnections;

        /// <summary>
        /// A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource.
        /// </summary>
        public InputList<Inputs.PrivateLinkServiceConnectionArgs> ManualPrivateLinkServiceConnections
        {
            get => _manualPrivateLinkServiceConnections ?? (_manualPrivateLinkServiceConnections = new InputList<Inputs.PrivateLinkServiceConnectionArgs>());
            set => _manualPrivateLinkServiceConnections = value;
        }

        /// <summary>
        /// The name of the private endpoint.
        /// </summary>
        [Input("privateEndpointName", required: true)]
        public Input<string> PrivateEndpointName { get; set; } = null!;

        [Input("privateLinkServiceConnections")]
        private InputList<Inputs.PrivateLinkServiceConnectionArgs>? _privateLinkServiceConnections;

        /// <summary>
        /// A grouping of information about the connection to the remote resource.
        /// </summary>
        public InputList<Inputs.PrivateLinkServiceConnectionArgs> PrivateLinkServiceConnections
        {
            get => _privateLinkServiceConnections ?? (_privateLinkServiceConnections = new InputList<Inputs.PrivateLinkServiceConnectionArgs>());
            set => _privateLinkServiceConnections = value;
        }

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The ID of the subnet from which the private IP will be allocated.
        /// </summary>
        [Input("subnet")]
        public Input<Inputs.SubnetArgs>? Subnet { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// Resource tags.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        public PrivateEndpointArgs()
        {
        }
    }
}
