// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Web.V20200901
{
    /// <summary>
    /// Virtual Network information contract.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:web/v20200901:WebAppVnetConnectionSlot")]
    public partial class WebAppVnetConnectionSlot : Pulumi.CustomResource
    {
        /// <summary>
        /// A certificate file (.cer) blob containing the public key of the private key used to authenticate a 
        /// Point-To-Site VPN connection.
        /// </summary>
        [Output("certBlob")]
        public Output<string?> CertBlob { get; private set; } = null!;

        /// <summary>
        /// The client certificate thumbprint.
        /// </summary>
        [Output("certThumbprint")]
        public Output<string> CertThumbprint { get; private set; } = null!;

        /// <summary>
        /// DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
        /// </summary>
        [Output("dnsServers")]
        public Output<string?> DnsServers { get; private set; } = null!;

        /// <summary>
        /// Flag that is used to denote if this is VNET injection
        /// </summary>
        [Output("isSwift")]
        public Output<bool?> IsSwift { get; private set; } = null!;

        /// <summary>
        /// Kind of resource.
        /// </summary>
        [Output("kind")]
        public Output<string?> Kind { get; private set; } = null!;

        /// <summary>
        /// Resource Name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// &lt;code&gt;true&lt;/code&gt; if a resync is required; otherwise, &lt;code&gt;false&lt;/code&gt;.
        /// </summary>
        [Output("resyncRequired")]
        public Output<bool> ResyncRequired { get; private set; } = null!;

        /// <summary>
        /// The routes that this Virtual Network connection uses.
        /// </summary>
        [Output("routes")]
        public Output<ImmutableArray<Outputs.VnetRouteResponse>> Routes { get; private set; } = null!;

        /// <summary>
        /// The system metadata relating to this resource.
        /// </summary>
        [Output("systemData")]
        public Output<Outputs.SystemDataResponse> SystemData { get; private set; } = null!;

        /// <summary>
        /// Resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// The Virtual Network's resource ID.
        /// </summary>
        [Output("vnetResourceId")]
        public Output<string?> VnetResourceId { get; private set; } = null!;


        /// <summary>
        /// Create a WebAppVnetConnectionSlot resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public WebAppVnetConnectionSlot(string name, WebAppVnetConnectionSlotArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:web/v20200901:WebAppVnetConnectionSlot", name, args ?? new WebAppVnetConnectionSlotArgs(), MakeResourceOptions(options, ""))
        {
        }

        private WebAppVnetConnectionSlot(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:web/v20200901:WebAppVnetConnectionSlot", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:web/latest:WebAppVnetConnectionSlot"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20150801:WebAppVnetConnectionSlot"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20160801:WebAppVnetConnectionSlot"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20180201:WebAppVnetConnectionSlot"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20181101:WebAppVnetConnectionSlot"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20190801:WebAppVnetConnectionSlot"},
                    new Pulumi.Alias { Type = "azure-nextgen:web/v20200601:WebAppVnetConnectionSlot"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing WebAppVnetConnectionSlot resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static WebAppVnetConnectionSlot Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new WebAppVnetConnectionSlot(name, id, options);
        }
    }

    public sealed class WebAppVnetConnectionSlotArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// A certificate file (.cer) blob containing the public key of the private key used to authenticate a 
        /// Point-To-Site VPN connection.
        /// </summary>
        [Input("certBlob")]
        public Input<string>? CertBlob { get; set; }

        /// <summary>
        /// DNS servers to be used by this Virtual Network. This should be a comma-separated list of IP addresses.
        /// </summary>
        [Input("dnsServers")]
        public Input<string>? DnsServers { get; set; }

        /// <summary>
        /// Flag that is used to denote if this is VNET injection
        /// </summary>
        [Input("isSwift")]
        public Input<bool>? IsSwift { get; set; }

        /// <summary>
        /// Kind of resource.
        /// </summary>
        [Input("kind")]
        public Input<string>? Kind { get; set; }

        /// <summary>
        /// Name of the app.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// Name of the resource group to which the resource belongs.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Name of the deployment slot. If a slot is not specified, the API will add or update connections for the production slot.
        /// </summary>
        [Input("slot", required: true)]
        public Input<string> Slot { get; set; } = null!;

        /// <summary>
        /// Name of an existing Virtual Network.
        /// </summary>
        [Input("vnetName", required: true)]
        public Input<string> VnetName { get; set; } = null!;

        /// <summary>
        /// The Virtual Network's resource ID.
        /// </summary>
        [Input("vnetResourceId")]
        public Input<string>? VnetResourceId { get; set; }

        public WebAppVnetConnectionSlotArgs()
        {
        }
    }
}
