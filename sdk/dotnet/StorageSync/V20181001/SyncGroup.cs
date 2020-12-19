// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.StorageSync.V20181001
{
    /// <summary>
    /// Sync Group object.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:storagesync/v20181001:SyncGroup")]
    public partial class SyncGroup : Pulumi.CustomResource
    {
        /// <summary>
        /// The name of the resource
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Sync group status
        /// </summary>
        [Output("syncGroupStatus")]
        public Output<string> SyncGroupStatus { get; private set; } = null!;

        /// <summary>
        /// The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// Unique Id
        /// </summary>
        [Output("uniqueId")]
        public Output<string?> UniqueId { get; private set; } = null!;


        /// <summary>
        /// Create a SyncGroup resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public SyncGroup(string name, SyncGroupArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:storagesync/v20181001:SyncGroup", name, args ?? new SyncGroupArgs(), MakeResourceOptions(options, ""))
        {
        }

        private SyncGroup(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:storagesync/v20181001:SyncGroup", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:storagesync/latest:SyncGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:storagesync/v20170605preview:SyncGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:storagesync/v20180402:SyncGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:storagesync/v20180701:SyncGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:storagesync/v20190201:SyncGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:storagesync/v20190301:SyncGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:storagesync/v20190601:SyncGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:storagesync/v20191001:SyncGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:storagesync/v20200301:SyncGroup"},
                    new Pulumi.Alias { Type = "azure-nextgen:storagesync/v20200901:SyncGroup"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing SyncGroup resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static SyncGroup Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new SyncGroup(name, id, options);
        }
    }

    public sealed class SyncGroupArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// The name of the resource group. The name is case insensitive.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Name of Storage Sync Service resource.
        /// </summary>
        [Input("storageSyncServiceName", required: true)]
        public Input<string> StorageSyncServiceName { get; set; } = null!;

        /// <summary>
        /// Name of Sync Group resource.
        /// </summary>
        [Input("syncGroupName", required: true)]
        public Input<string> SyncGroupName { get; set; } = null!;

        public SyncGroupArgs()
        {
        }
    }
}
