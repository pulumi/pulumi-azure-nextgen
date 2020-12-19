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
    /// IpConfigurations.
    /// Latest API Version: 2020-07-01.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:network/latest:VirtualHubIpConfiguration")]
    public partial class VirtualHubIpConfiguration : Pulumi.CustomResource
    {
        /// <summary>
        /// A unique read-only string that changes whenever the resource is updated.
        /// </summary>
        [Output("etag")]
        public Output<string> Etag { get; private set; } = null!;

        /// <summary>
        /// Name of the Ip Configuration.
        /// </summary>
        [Output("name")]
        public Output<string?> Name { get; private set; } = null!;

        /// <summary>
        /// The private IP address of the IP configuration.
        /// </summary>
        [Output("privateIPAddress")]
        public Output<string?> PrivateIPAddress { get; private set; } = null!;

        /// <summary>
        /// The private IP address allocation method.
        /// </summary>
        [Output("privateIPAllocationMethod")]
        public Output<string?> PrivateIPAllocationMethod { get; private set; } = null!;

        /// <summary>
        /// The provisioning state of the IP configuration resource.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// The reference to the public IP resource.
        /// </summary>
        [Output("publicIPAddress")]
        public Output<Outputs.PublicIPAddressResponse?> PublicIPAddress { get; private set; } = null!;

        /// <summary>
        /// The reference to the subnet resource.
        /// </summary>
        [Output("subnet")]
        public Output<Outputs.SubnetResponse?> Subnet { get; private set; } = null!;

        /// <summary>
        /// Ipconfiguration type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a VirtualHubIpConfiguration resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public VirtualHubIpConfiguration(string name, VirtualHubIpConfigurationArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/latest:VirtualHubIpConfiguration", name, args ?? new VirtualHubIpConfigurationArgs(), MakeResourceOptions(options, ""))
        {
        }

        private VirtualHubIpConfiguration(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:network/latest:VirtualHubIpConfiguration", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200501:VirtualHubIpConfiguration"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200601:VirtualHubIpConfiguration"},
                    new Pulumi.Alias { Type = "azure-nextgen:network/v20200701:VirtualHubIpConfiguration"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing VirtualHubIpConfiguration resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static VirtualHubIpConfiguration Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new VirtualHubIpConfiguration(name, id, options);
        }
    }

    public sealed class VirtualHubIpConfigurationArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Resource ID.
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// The name of the ipconfig.
        /// </summary>
        [Input("ipConfigName", required: true)]
        public Input<string> IpConfigName { get; set; } = null!;

        /// <summary>
        /// Name of the Ip Configuration.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The private IP address of the IP configuration.
        /// </summary>
        [Input("privateIPAddress")]
        public Input<string>? PrivateIPAddress { get; set; }

        /// <summary>
        /// The private IP address allocation method.
        /// </summary>
        [Input("privateIPAllocationMethod")]
        public InputUnion<string, Pulumi.AzureNextGen.Network.Latest.IPAllocationMethod>? PrivateIPAllocationMethod { get; set; }

        /// <summary>
        /// The reference to the public IP resource.
        /// </summary>
        [Input("publicIPAddress")]
        public Input<Inputs.PublicIPAddressArgs>? PublicIPAddress { get; set; }

        /// <summary>
        /// The resource group name of the VirtualHub.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The reference to the subnet resource.
        /// </summary>
        [Input("subnet")]
        public Input<Inputs.SubnetArgs>? Subnet { get; set; }

        /// <summary>
        /// The name of the VirtualHub.
        /// </summary>
        [Input("virtualHubName", required: true)]
        public Input<string> VirtualHubName { get; set; } = null!;

        public VirtualHubIpConfigurationArgs()
        {
        }
    }
}
