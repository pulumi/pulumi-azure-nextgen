// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.AVS.V20200320
{
    /// <summary>
    /// A private cloud resource
    /// </summary>
    public partial class PrivateCloud : Pulumi.CustomResource
    {
        /// <summary>
        /// An ExpressRoute Circuit
        /// </summary>
        [Output("circuit")]
        public Output<Outputs.CircuitResponse?> Circuit { get; private set; } = null!;

        /// <summary>
        /// The endpoints
        /// </summary>
        [Output("endpoints")]
        public Output<Outputs.EndpointsResponse> Endpoints { get; private set; } = null!;

        /// <summary>
        /// vCenter Single Sign On Identity Sources
        /// </summary>
        [Output("identitySources")]
        public Output<ImmutableArray<Outputs.IdentitySourceResponse>> IdentitySources { get; private set; } = null!;

        /// <summary>
        /// Connectivity to internet is enabled or disabled
        /// </summary>
        [Output("internet")]
        public Output<string?> Internet { get; private set; } = null!;

        /// <summary>
        /// Resource location
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// The default cluster used for management
        /// </summary>
        [Output("managementCluster")]
        public Output<Outputs.ManagementClusterResponse> ManagementCluster { get; private set; } = null!;

        /// <summary>
        /// Network used to access vCenter Server and NSX-T Manager
        /// </summary>
        [Output("managementNetwork")]
        public Output<string> ManagementNetwork { get; private set; } = null!;

        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The block of addresses should be unique across VNet in your subscription as well as on-premise. Make sure the CIDR format is conformed to (A.B.C.D/X) where A,B,C,D are between 0 and 255, and X is between 0 and 22
        /// </summary>
        [Output("networkBlock")]
        public Output<string> NetworkBlock { get; private set; } = null!;

        /// <summary>
        /// Thumbprint of the NSX-T Manager SSL certificate
        /// </summary>
        [Output("nsxtCertificateThumbprint")]
        public Output<string> NsxtCertificateThumbprint { get; private set; } = null!;

        /// <summary>
        /// Optionally, set the NSX-T Manager password when the private cloud is created
        /// </summary>
        [Output("nsxtPassword")]
        public Output<string?> NsxtPassword { get; private set; } = null!;

        /// <summary>
        /// Used for virtual machine cold migration, cloning, and snapshot migration
        /// </summary>
        [Output("provisioningNetwork")]
        public Output<string> ProvisioningNetwork { get; private set; } = null!;

        /// <summary>
        /// The provisioning state
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// The private cloud SKU
        /// </summary>
        [Output("sku")]
        public Output<Outputs.SkuResponse> Sku { get; private set; } = null!;

        /// <summary>
        /// Resource tags
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// Thumbprint of the vCenter Server SSL certificate
        /// </summary>
        [Output("vcenterCertificateThumbprint")]
        public Output<string> VcenterCertificateThumbprint { get; private set; } = null!;

        /// <summary>
        /// Optionally, set the vCenter admin password when the private cloud is created
        /// </summary>
        [Output("vcenterPassword")]
        public Output<string?> VcenterPassword { get; private set; } = null!;

        /// <summary>
        /// Used for live migration of virtual machines
        /// </summary>
        [Output("vmotionNetwork")]
        public Output<string> VmotionNetwork { get; private set; } = null!;


        /// <summary>
        /// Create a PrivateCloud resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public PrivateCloud(string name, PrivateCloudArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:avs/v20200320:PrivateCloud", name, args ?? new PrivateCloudArgs(), MakeResourceOptions(options, ""))
        {
        }

        private PrivateCloud(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:avs/v20200320:PrivateCloud", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:avs/latest:PrivateCloud"},
                    new Pulumi.Alias { Type = "azure-nextgen:avs/v20190809preview:PrivateCloud"},
                    new Pulumi.Alias { Type = "azure-nextgen:avs/v20200717preview:PrivateCloud"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing PrivateCloud resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static PrivateCloud Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new PrivateCloud(name, id, options);
        }
    }

    public sealed class PrivateCloudArgs : Pulumi.ResourceArgs
    {
        [Input("identitySources")]
        private InputList<Inputs.IdentitySourceArgs>? _identitySources;

        /// <summary>
        /// vCenter Single Sign On Identity Sources
        /// </summary>
        public InputList<Inputs.IdentitySourceArgs> IdentitySources
        {
            get => _identitySources ?? (_identitySources = new InputList<Inputs.IdentitySourceArgs>());
            set => _identitySources = value;
        }

        /// <summary>
        /// Connectivity to internet is enabled or disabled
        /// </summary>
        [Input("internet")]
        public InputUnion<string, Pulumi.AzureNextGen.AVS.V20200320.InternetEnum>? Internet { get; set; }

        /// <summary>
        /// Resource location
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// The default cluster used for management
        /// </summary>
        [Input("managementCluster", required: true)]
        public Input<Inputs.ManagementClusterArgs> ManagementCluster { get; set; } = null!;

        /// <summary>
        /// The block of addresses should be unique across VNet in your subscription as well as on-premise. Make sure the CIDR format is conformed to (A.B.C.D/X) where A,B,C,D are between 0 and 255, and X is between 0 and 22
        /// </summary>
        [Input("networkBlock", required: true)]
        public Input<string> NetworkBlock { get; set; } = null!;

        /// <summary>
        /// Optionally, set the NSX-T Manager password when the private cloud is created
        /// </summary>
        [Input("nsxtPassword")]
        public Input<string>? NsxtPassword { get; set; }

        /// <summary>
        /// Name of the private cloud
        /// </summary>
        [Input("privateCloudName", required: true)]
        public Input<string> PrivateCloudName { get; set; } = null!;

        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The private cloud SKU
        /// </summary>
        [Input("sku", required: true)]
        public Input<Inputs.SkuArgs> Sku { get; set; } = null!;

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
        /// Optionally, set the vCenter admin password when the private cloud is created
        /// </summary>
        [Input("vcenterPassword")]
        public Input<string>? VcenterPassword { get; set; }

        public PrivateCloudArgs()
        {
        }
    }
}
