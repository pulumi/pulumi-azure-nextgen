// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Sql.V20200801Preview
{
    /// <summary>
    /// An Azure SQL instance pool.
    /// </summary>
    public partial class InstancePool : Pulumi.CustomResource
    {
        /// <summary>
        /// The license type. Possible values are 'LicenseIncluded' (price for SQL license is included) and 'BasePrice' (without SQL license price).
        /// </summary>
        [Output("licenseType")]
        public Output<string> LicenseType { get; private set; } = null!;

        /// <summary>
        /// Resource location.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The name and tier of the SKU.
        /// </summary>
        [Output("sku")]
        public Output<Outputs.SkuResponse?> Sku { get; private set; } = null!;

        /// <summary>
        /// Resource ID of the subnet to place this instance pool in.
        /// </summary>
        [Output("subnetId")]
        public Output<string> SubnetId { get; private set; } = null!;

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
        /// Count of vCores belonging to this instance pool.
        /// </summary>
        [Output("vCores")]
        public Output<int> VCores { get; private set; } = null!;


        /// <summary>
        /// Create a InstancePool resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public InstancePool(string name, InstancePoolArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:sql/v20200801preview:InstancePool", name, args ?? new InstancePoolArgs(), MakeResourceOptions(options, ""))
        {
        }

        private InstancePool(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:sql/v20200801preview:InstancePool", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:sql/v20180601preview:InstancePool"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing InstancePool resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static InstancePool Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new InstancePool(name, id, options);
        }
    }

    public sealed class InstancePoolArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the instance pool to be created or updated.
        /// </summary>
        [Input("instancePoolName", required: true)]
        public Input<string> InstancePoolName { get; set; } = null!;

        /// <summary>
        /// The license type. Possible values are 'LicenseIncluded' (price for SQL license is included) and 'BasePrice' (without SQL license price).
        /// </summary>
        [Input("licenseType", required: true)]
        public Input<string> LicenseType { get; set; } = null!;

        /// <summary>
        /// Resource location.
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name and tier of the SKU.
        /// </summary>
        [Input("sku")]
        public Input<Inputs.SkuArgs>? Sku { get; set; }

        /// <summary>
        /// Resource ID of the subnet to place this instance pool in.
        /// </summary>
        [Input("subnetId", required: true)]
        public Input<string> SubnetId { get; set; } = null!;

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

        /// <summary>
        /// Count of vCores belonging to this instance pool.
        /// </summary>
        [Input("vCores", required: true)]
        public Input<int> VCores { get; set; } = null!;

        public InstancePoolArgs()
        {
        }
    }
}
