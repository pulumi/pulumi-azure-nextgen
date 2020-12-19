// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Media.V20180601Preview
{
    /// <summary>
    /// A Media Services account.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:media/v20180601preview:MediaService")]
    public partial class MediaService : Pulumi.CustomResource
    {
        /// <summary>
        /// The Azure Region of the resource.
        /// </summary>
        [Output("location")]
        public Output<string?> Location { get; private set; } = null!;

        /// <summary>
        /// The Media Services account ID.
        /// </summary>
        [Output("mediaServiceId")]
        public Output<string> MediaServiceId { get; private set; } = null!;

        /// <summary>
        /// The name of the resource.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The storage accounts for this resource.
        /// </summary>
        [Output("storageAccounts")]
        public Output<ImmutableArray<Outputs.StorageAccountResponse>> StorageAccounts { get; private set; } = null!;

        /// <summary>
        /// Resource tags.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The type of the resource.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;


        /// <summary>
        /// Create a MediaService resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public MediaService(string name, MediaServiceArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:media/v20180601preview:MediaService", name, args ?? new MediaServiceArgs(), MakeResourceOptions(options, ""))
        {
        }

        private MediaService(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:media/v20180601preview:MediaService", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:media/latest:MediaService"},
                    new Pulumi.Alias { Type = "azure-nextgen:media/v20151001:MediaService"},
                    new Pulumi.Alias { Type = "azure-nextgen:media/v20180330preview:MediaService"},
                    new Pulumi.Alias { Type = "azure-nextgen:media/v20180701:MediaService"},
                    new Pulumi.Alias { Type = "azure-nextgen:media/v20200501:MediaService"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing MediaService resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static MediaService Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new MediaService(name, id, options);
        }
    }

    public sealed class MediaServiceArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The Media Services account name.
        /// </summary>
        [Input("accountName", required: true)]
        public Input<string> AccountName { get; set; } = null!;

        /// <summary>
        /// The Azure Region of the resource.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// The name of the resource group within the Azure subscription.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        [Input("storageAccounts")]
        private InputList<Inputs.StorageAccountArgs>? _storageAccounts;

        /// <summary>
        /// The storage accounts for this resource.
        /// </summary>
        public InputList<Inputs.StorageAccountArgs> StorageAccounts
        {
            get => _storageAccounts ?? (_storageAccounts = new InputList<Inputs.StorageAccountArgs>());
            set => _storageAccounts = value;
        }

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

        public MediaServiceArgs()
        {
        }
    }
}
