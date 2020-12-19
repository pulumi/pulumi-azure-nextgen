// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.HybridData.Latest
{
    /// <summary>
    /// The DataManager resource.
    /// Latest API Version: 2019-06-01.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:hybriddata/latest:DataManager")]
    public partial class DataManager : Pulumi.CustomResource
    {
        /// <summary>
        /// Etag of the Resource.
        /// </summary>
        [Output("etag")]
        public Output<string?> Etag { get; private set; } = null!;

        /// <summary>
        /// The location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East
        /// US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo
        /// region is specified on update the request will succeed.
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// The Resource Name.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The sku type.
        /// </summary>
        [Output("sku")]
        public Output<Outputs.SkuResponse?> Sku { get; private set; } = null!;

        /// <summary>
        /// The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource
        /// (across resource groups).
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The Resource type.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a DataManager resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public DataManager(string name, DataManagerArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:hybriddata/latest:DataManager", name, args ?? new DataManagerArgs(), MakeResourceOptions(options, ""))
        {
        }

        private DataManager(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:hybriddata/latest:DataManager", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:hybriddata/v20160601:DataManager"},
                    new Pulumi.Alias { Type = "azure-nextgen:hybriddata/v20190601:DataManager"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing DataManager resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static DataManager Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new DataManager(name, id, options);
        }
    }

    public sealed class DataManagerArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the DataManager Resource within the specified resource group. DataManager names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
        /// </summary>
        [Input("dataManagerName", required: true)]
        public Input<string> DataManagerName { get; set; } = null!;

        /// <summary>
        /// Etag of the Resource.
        /// </summary>
        [Input("etag")]
        public Input<string>? Etag { get; set; }

        /// <summary>
        /// The location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East
        /// US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo
        /// region is specified on update the request will succeed.
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// The Resource Group Name
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The sku type.
        /// </summary>
        [Input("sku")]
        public Input<Inputs.SkuArgs>? Sku { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource
        /// (across resource groups).
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        public DataManagerArgs()
        {
        }
    }
}
