// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.MixedReality.V20200501
{
    /// <summary>
    /// SpatialAnchorsAccount Response.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:mixedreality/v20200501:SpatialAnchorsAccount")]
    public partial class SpatialAnchorsAccount : Pulumi.CustomResource
    {
        /// <summary>
        /// Correspond domain name of certain Spatial Anchors Account
        /// </summary>
        [Output("accountDomain")]
        public Output<string> AccountDomain { get; private set; } = null!;

        /// <summary>
        /// unique id of certain account.
        /// </summary>
        [Output("accountId")]
        public Output<string> AccountId { get; private set; } = null!;

        /// <summary>
        /// The identity associated with this account
        /// </summary>
        [Output("identity")]
        public Output<Outputs.IdentityResponse?> Identity { get; private set; } = null!;

        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// The name of the resource
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Resource tags.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a SpatialAnchorsAccount resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public SpatialAnchorsAccount(string name, SpatialAnchorsAccountArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:mixedreality/v20200501:SpatialAnchorsAccount", name, args ?? new SpatialAnchorsAccountArgs(), MakeResourceOptions(options, ""))
        {
        }

        private SpatialAnchorsAccount(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:mixedreality/v20200501:SpatialAnchorsAccount", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:mixedreality/latest:SpatialAnchorsAccount"},
                    new Pulumi.Alias { Type = "azure-nextgen:mixedreality/v20190228preview:SpatialAnchorsAccount"},
                    new Pulumi.Alias { Type = "azure-nextgen:mixedreality/v20191202preview:SpatialAnchorsAccount"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing SpatialAnchorsAccount resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static SpatialAnchorsAccount Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new SpatialAnchorsAccount(name, id, options);
        }
    }

    public sealed class SpatialAnchorsAccountArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Name of an Mixed Reality Account.
        /// </summary>
        [Input("accountName", required: true)]
        public Input<string> AccountName { get; set; } = null!;

        /// <summary>
        /// The identity associated with this account
        /// </summary>
        [Input("identity")]
        public Input<Inputs.IdentityArgs>? Identity { get; set; }

        /// <summary>
        /// The geo-location where the resource lives
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// Name of an Azure resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

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

        public SpatialAnchorsAccountArgs()
        {
        }
    }
}
