// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.DevTestLab.V20160515
{
    /// <summary>
    /// A Disk.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:devtestlab/v20160515:Disk")]
    public partial class Disk : Pulumi.CustomResource
    {
        /// <summary>
        /// The creation date of the disk.
        /// </summary>
        [Output("createdDate")]
        public Output<string> CreatedDate { get; private set; } = null!;

        /// <summary>
        /// When backed by a blob, the name of the VHD blob without extension.
        /// </summary>
        [Output("diskBlobName")]
        public Output<string?> DiskBlobName { get; private set; } = null!;

        /// <summary>
        /// The size of the disk in Gibibytes.
        /// </summary>
        [Output("diskSizeGiB")]
        public Output<int?> DiskSizeGiB { get; private set; } = null!;

        /// <summary>
        /// The storage type for the disk (i.e. Standard, Premium).
        /// </summary>
        [Output("diskType")]
        public Output<string?> DiskType { get; private set; } = null!;

        /// <summary>
        /// When backed by a blob, the URI of underlying blob.
        /// </summary>
        [Output("diskUri")]
        public Output<string?> DiskUri { get; private set; } = null!;

        /// <summary>
        /// The host caching policy of the disk (i.e. None, ReadOnly, ReadWrite).
        /// </summary>
        [Output("hostCaching")]
        public Output<string?> HostCaching { get; private set; } = null!;

        /// <summary>
        /// The resource ID of the VM to which this disk is leased.
        /// </summary>
        [Output("leasedByLabVmId")]
        public Output<string?> LeasedByLabVmId { get; private set; } = null!;

        /// <summary>
        /// The location of the resource.
        /// </summary>
        [Output("location")]
        public Output<string?> Location { get; private set; } = null!;

        /// <summary>
        /// When backed by managed disk, this is the ID of the compute disk resource.
        /// </summary>
        [Output("managedDiskId")]
        public Output<string?> ManagedDiskId { get; private set; } = null!;

        /// <summary>
        /// The name of the resource.
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// The provisioning status of the resource.
        /// </summary>
        [Output("provisioningState")]
        public Output<string?> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// The tags of the resource.
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// The type of the resource.
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// The unique immutable identifier of a resource (Guid).
        /// </summary>
        [Output("uniqueIdentifier")]
        public Output<string?> UniqueIdentifier { get; private set; } = null!;


        /// <summary>
        /// Create a Disk resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public Disk(string name, DiskArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:devtestlab/v20160515:Disk", name, args ?? new DiskArgs(), MakeResourceOptions(options, ""))
        {
        }

        private Disk(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:devtestlab/v20160515:Disk", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:devtestlab/latest:Disk"},
                    new Pulumi.Alias { Type = "azure-nextgen:devtestlab/v20180915:Disk"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing Disk resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static Disk Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new Disk(name, id, options);
        }
    }

    public sealed class DiskArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// When backed by a blob, the name of the VHD blob without extension.
        /// </summary>
        [Input("diskBlobName")]
        public Input<string>? DiskBlobName { get; set; }

        /// <summary>
        /// The size of the disk in Gibibytes.
        /// </summary>
        [Input("diskSizeGiB")]
        public Input<int>? DiskSizeGiB { get; set; }

        /// <summary>
        /// The storage type for the disk (i.e. Standard, Premium).
        /// </summary>
        [Input("diskType")]
        public InputUnion<string, Pulumi.AzureNextGen.DevTestLab.V20160515.StorageType>? DiskType { get; set; }

        /// <summary>
        /// When backed by a blob, the URI of underlying blob.
        /// </summary>
        [Input("diskUri")]
        public Input<string>? DiskUri { get; set; }

        /// <summary>
        /// The host caching policy of the disk (i.e. None, ReadOnly, ReadWrite).
        /// </summary>
        [Input("hostCaching")]
        public Input<string>? HostCaching { get; set; }

        /// <summary>
        /// The name of the lab.
        /// </summary>
        [Input("labName", required: true)]
        public Input<string> LabName { get; set; } = null!;

        /// <summary>
        /// The resource ID of the VM to which this disk is leased.
        /// </summary>
        [Input("leasedByLabVmId")]
        public Input<string>? LeasedByLabVmId { get; set; }

        /// <summary>
        /// The location of the resource.
        /// </summary>
        [Input("location")]
        public Input<string>? Location { get; set; }

        /// <summary>
        /// When backed by managed disk, this is the ID of the compute disk resource.
        /// </summary>
        [Input("managedDiskId")]
        public Input<string>? ManagedDiskId { get; set; }

        /// <summary>
        /// The name of the disk.
        /// </summary>
        [Input("name", required: true)]
        public Input<string> Name { get; set; } = null!;

        /// <summary>
        /// The provisioning status of the resource.
        /// </summary>
        [Input("provisioningState")]
        public Input<string>? ProvisioningState { get; set; }

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// The tags of the resource.
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// The unique immutable identifier of a resource (Guid).
        /// </summary>
        [Input("uniqueIdentifier")]
        public Input<string>? UniqueIdentifier { get; set; }

        /// <summary>
        /// The name of the user profile.
        /// </summary>
        [Input("userName", required: true)]
        public Input<string> UserName { get; set; } = null!;

        public DiskArgs()
        {
        }
    }
}
