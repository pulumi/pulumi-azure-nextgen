// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Sql.V20200202Preview
{
    /// <summary>
    /// An elastic pool.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:sql/v20200202preview:ElasticPool")]
    public partial class ElasticPool : Pulumi.CustomResource
    {
        /// <summary>
        /// The creation date of the elastic pool (ISO8601 format).
        /// </summary>
        [Output("creationDate")]
        public Output<string> CreationDate { get; private set; } = null!;

        /// <summary>
        /// Kind of elastic pool. This is metadata used for the Azure portal experience.
        /// </summary>
        [Output("kind")]
        public Output<string> Kind { get; private set; } = null!;

        /// <summary>
        /// The license type to apply for this elastic pool.
        /// </summary>
        [Output("licenseType")]
        public Output<string?> LicenseType { get; private set; } = null!;

        /// <summary>
        /// Resource location.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// The storage limit for the database elastic pool in bytes.
        /// </summary>
        [Output("maxSizeBytes")]
        public Output<int?> MaxSizeBytes { get; private set; } = null!;

        /// <summary>
        /// Resource name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The per database settings for the elastic pool.
        /// </summary>
        [Output("perDatabaseSettings")]
        public Output<Outputs.ElasticPoolPerDatabaseSettingsResponse?> PerDatabaseSettings { get; private set; } = null!;

        /// <summary>
        /// The elastic pool SKU.
        /// 
        /// The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or the following command:
        /// 
        /// ```azurecli
        /// az sql elastic-pool list-editions -l &lt;location&gt; -o table
        /// ````
        /// </summary>
        [Output("sku")]
        public Output<Outputs.SkuResponse?> Sku { get; private set; } = null!;

        /// <summary>
        /// The state of the elastic pool.
        /// </summary>
        [Output("state")]
        public Output<string> State { get; private set; } = null!;

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
        /// Whether or not this elastic pool is zone redundant, which means the replicas of this elastic pool will be spread across multiple availability zones.
        /// </summary>
        [Output("zoneRedundant")]
        public Output<bool?> ZoneRedundant { get; private set; } = null!;


        /// <summary>
        /// Create a ElasticPool resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public ElasticPool(string name, ElasticPoolArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:sql/v20200202preview:ElasticPool", name, args ?? new ElasticPoolArgs(), MakeResourceOptions(options, ""))
        {
        }

        private ElasticPool(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:sql/v20200202preview:ElasticPool", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:sql/latest:ElasticPool"},
                    new Pulumi.Alias { Type = "azure-nextgen:sql/v20140401:ElasticPool"},
                    new Pulumi.Alias { Type = "azure-nextgen:sql/v20171001preview:ElasticPool"},
                    new Pulumi.Alias { Type = "azure-nextgen:sql/v20200801preview:ElasticPool"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing ElasticPool resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static ElasticPool Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new ElasticPool(name, id, options);
        }
    }

    public sealed class ElasticPoolArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the elastic pool.
        /// </summary>
        [Input("elasticPoolName", required: true)]
        public Input<string> ElasticPoolName { get; set; } = null!;

        /// <summary>
        /// The license type to apply for this elastic pool.
        /// </summary>
        [Input("licenseType")]
        public InputUnion<string, Pulumi.AzureNextGen.Sql.V20200202Preview.ElasticPoolLicenseType>? LicenseType { get; set; }

        /// <summary>
        /// Resource location.
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// The storage limit for the database elastic pool in bytes.
        /// </summary>
        [Input("maxSizeBytes")]
        public Input<int>? MaxSizeBytes { get; set; }

        /// <summary>
        /// The per database settings for the elastic pool.
        /// </summary>
        [Input("perDatabaseSettings")]
        public Input<Inputs.ElasticPoolPerDatabaseSettingsArgs>? PerDatabaseSettings { get; set; }

        /// <summary>
        /// The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the server.
        /// </summary>
        [Input("serverName", required: true)]
        public Input<string> ServerName { get; set; } = null!;

        /// <summary>
        /// The elastic pool SKU.
        /// 
        /// The list of SKUs may vary by region and support offer. To determine the SKUs (including the SKU name, tier/edition, family, and capacity) that are available to your subscription in an Azure region, use the `Capabilities_ListByLocation` REST API or the following command:
        /// 
        /// ```azurecli
        /// az sql elastic-pool list-editions -l &lt;location&gt; -o table
        /// ````
        /// </summary>
        [Input("sku")]
        public Input<Inputs.SkuArgs>? Sku { get; set; }

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
        /// Whether or not this elastic pool is zone redundant, which means the replicas of this elastic pool will be spread across multiple availability zones.
        /// </summary>
        [Input("zoneRedundant")]
        public Input<bool>? ZoneRedundant { get; set; }

        public ElasticPoolArgs()
        {
        }
    }
}
