// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Compute.V20190301.Inputs
{

    /// <summary>
    /// Data used when creating a disk.
    /// </summary>
    public sealed class CreationDataArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// This enumerates the possible sources of a disk's creation.
        /// </summary>
        [Input("createOption", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.Compute.V20190301.DiskCreateOption> CreateOption { get; set; } = null!;

        /// <summary>
        /// Disk source information.
        /// </summary>
        [Input("imageReference")]
        public Input<Inputs.ImageDiskReferenceArgs>? ImageReference { get; set; }

        /// <summary>
        /// If createOption is Copy, this is the ARM id of the source snapshot or disk.
        /// </summary>
        [Input("sourceResourceId")]
        public Input<string>? SourceResourceId { get; set; }

        /// <summary>
        /// If createOption is Import, this is the URI of a blob to be imported into a managed disk.
        /// </summary>
        [Input("sourceUri")]
        public Input<string>? SourceUri { get; set; }

        /// <summary>
        /// If createOption is Import, the Azure Resource Manager identifier of the storage account containing the blob to import as a disk. Required only if the blob is in a different subscription
        /// </summary>
        [Input("storageAccountId")]
        public Input<string>? StorageAccountId { get; set; }

        /// <summary>
        /// If createOption is Upload, this is the size of the contents of the upload including the VHD footer. This value should be between 20972032 (20 MiB + 512 bytes for the VHD footer) and 35183298347520 bytes (32 TiB + 512 bytes for the VHD footer).
        /// </summary>
        [Input("uploadSizeBytes")]
        public Input<int>? UploadSizeBytes { get; set; }

        public CreationDataArgs()
        {
        }
    }
}
