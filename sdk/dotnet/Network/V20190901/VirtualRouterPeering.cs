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
    /// Virtual Router Peering resource.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:network/v20190901:VirtualRouterPeering")]
    public partial class VirtualRouterPeering : Pulumi.CustomResource
    {
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        [Output("etag")]
        public Output<string> Etag { get; private set; } = null!;

        /// <summary>
        /// Name of the virtual router peering that is unique within a virtual router.
        /// </summary>
        [Output("name")]
        public Output<string?> Name { get; private set; } = null!;

        /// <summary>
        /// Peer ASN.
        /// </summary>
        [Output("peerAsn")]
        public Output<int?> PeerAsn { get; private set; } = null!;

        /// <summary>
        /// Peer IP.
        /// </summary>
        [Output("peerIp")]
        public Output<string?> PeerIp { get; private set; } = null!;

        /// <summary>
        /// The provisioning state of the resource.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Peering type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a VirtualRouterPeering resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public VirtualRouterPeering(string name, VirtualRouterPeeringArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/v20190901:VirtualRouterPeering", name, args ?? new VirtualRouterPeeringArgs(), MakeResourceOptions(options, ""))
        {
        }

        private VirtualRouterPeering(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/v20190901:VirtualRouterPeering", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:network/latest:VirtualRouterPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190701:VirtualRouterPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190801:VirtualRouterPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20191101:VirtualRouterPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20191201:VirtualRouterPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200301:VirtualRouterPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200401:VirtualRouterPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200501:VirtualRouterPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200601:VirtualRouterPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200701:VirtualRouterPeering"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing VirtualRouterPeering resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static VirtualRouterPeering Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new VirtualRouterPeering(name, id, options);
        }
    }

    public sealed class VirtualRouterPeeringArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Resource ID.
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// Name of the virtual router peering that is unique within a virtual router.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// Peer ASN.
        /// </summary>
        [Input("peerAsn")]
        public Input<int>? PeerAsn { get; set; }

        /// <summary>
        /// Peer IP.
        /// </summary>
        [Input("peerIp")]
        public Input<string>? PeerIp { get; set; }

        /// <summary>
        /// The name of the Virtual Router Peering.
        /// </summary>
        [Input("peeringName", required: true)]
        public Input<string> PeeringName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the Virtual Router.
        /// </summary>
        [Input("virtualRouterName", required: true)]
        public Input<string> VirtualRouterName { get; set; } = null!;

        public VirtualRouterPeeringArgs()
        {
        }
    }
}
