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
    /// Peerings in a virtual network resource.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:network/v20190901:VirtualNetworkPeering")]
    public partial class VirtualNetworkPeering : Pulumi.CustomResource
    {
        /// <summary>
        /// Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network.
        /// </summary>
        [Output("allowForwardedTraffic")]
        public Output<bool?> AllowForwardedTraffic { get; private set; } = null!;

        /// <summary>
        /// If gateway links can be used in remote virtual networking to link to this virtual network.
        /// </summary>
        [Output("allowGatewayTransit")]
        public Output<bool?> AllowGatewayTransit { get; private set; } = null!;

        /// <summary>
        /// Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space.
        /// </summary>
        [Output("allowVirtualNetworkAccess")]
        public Output<bool?> AllowVirtualNetworkAccess { get; private set; } = null!;

        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        [Output("etag")]
        public Output<string> Etag { get; private set; } = null!;

        /// <summary>
        /// The name of the resource that is unique within a resource group. This name can be used to access the resource.
        /// </summary>
        [Output("name")]
        public Output<string?> Name { get; private set; } = null!;

        /// <summary>
        /// The status of the virtual network peering.
        /// </summary>
        [Output("peeringState")]
        public Output<string?> PeeringState { get; private set; } = null!;

        /// <summary>
        /// The provisioning state of the virtual network peering resource.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// The reference of the remote virtual network address space.
        /// </summary>
        [Output("remoteAddressSpace")]
        public Output<Outputs.AddressSpaceResponse?> RemoteAddressSpace { get; private set; } = null!;

        /// <summary>
        /// The reference of the remote virtual network. The remote virtual network can be in the same or different region (preview). See here to register for the preview and learn more (https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-create-peering).
        /// </summary>
        [Output("remoteVirtualNetwork")]
        public Output<Outputs.SubResourceResponse?> RemoteVirtualNetwork { get; private set; } = null!;

        /// <summary>
        /// If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.
        /// </summary>
        [Output("useRemoteGateways")]
        public Output<bool?> UseRemoteGateways { get; private set; } = null!;


        /// <summary>
        /// Create a VirtualNetworkPeering resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public VirtualNetworkPeering(string name, VirtualNetworkPeeringArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/v20190901:VirtualNetworkPeering", name, args ?? new VirtualNetworkPeeringArgs(), MakeResourceOptions(options, ""))
        {
        }

        private VirtualNetworkPeering(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/v20190901:VirtualNetworkPeering", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:network/latest:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20160601:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20160901:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20161201:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20170301:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20170601:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20170801:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20170901:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20171001:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20171101:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180101:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180201:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180401:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180601:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180701:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20180801:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20181001:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20181101:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20181201:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190201:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190401:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190601:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190701:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20190801:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20191101:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20191201:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200301:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200401:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200501:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200601:VirtualNetworkPeering"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200701:VirtualNetworkPeering"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing VirtualNetworkPeering resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static VirtualNetworkPeering Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new VirtualNetworkPeering(name, id, options);
        }
    }

    public sealed class VirtualNetworkPeeringArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network.
        /// </summary>
        [Input("allowForwardedTraffic")]
        public Input<bool>? AllowForwardedTraffic { get; set; }

        /// <summary>
        /// If gateway links can be used in remote virtual networking to link to this virtual network.
        /// </summary>
        [Input("allowGatewayTransit")]
        public Input<bool>? AllowGatewayTransit { get; set; }

        /// <summary>
        /// Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space.
        /// </summary>
        [Input("allowVirtualNetworkAccess")]
        public Input<bool>? AllowVirtualNetworkAccess { get; set; }

        /// <summary>
        /// Resource ID.
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// The name of the resource that is unique within a resource group. This name can be used to access the resource.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The status of the virtual network peering.
        /// </summary>
        [Input("peeringState")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.V20190901.VirtualNetworkPeeringState>? PeeringState { get; set; }

        /// <summary>
        /// The reference of the remote virtual network address space.
        /// </summary>
        [Input("remoteAddressSpace")]
        public Input<Inputs.AddressSpaceArgs>? RemoteAddressSpace { get; set; }

        /// <summary>
        /// The reference of the remote virtual network. The remote virtual network can be in the same or different region (preview). See here to register for the preview and learn more (https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-create-peering).
        /// </summary>
        [Input("remoteVirtualNetwork")]
        public Input<Inputs.SubResourceArgs>? RemoteVirtualNetwork { get; set; }

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway.
        /// </summary>
        [Input("useRemoteGateways")]
        public Input<bool>? UseRemoteGateways { get; set; }

        /// <summary>
        /// The name of the virtual network.
        /// </summary>
        [Input("virtualNetworkName", required: true)]
        public Input<string> VirtualNetworkName { get; set; } = null!;

        /// <summary>
        /// The name of the peering.
        /// </summary>
        [Input("virtualNetworkPeeringName", required: true)]
        public Input<string> VirtualNetworkPeeringName { get; set; } = null!;

        public VirtualNetworkPeeringArgs()
        {
        }
    }
}
