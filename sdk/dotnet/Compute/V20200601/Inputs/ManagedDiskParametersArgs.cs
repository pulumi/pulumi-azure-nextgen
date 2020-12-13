// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Compute.V20200601.Inputs
{

    /// <summary>
    /// The parameters of a managed disk.
    /// </summary>
    public sealed class ManagedDiskParametersArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the customer managed disk encryption set resource id for the managed disk.
        /// </summary>
        [Input("diskEncryptionSet")]
        public Input<Inputs.DiskEncryptionSetParametersArgs>? DiskEncryptionSet { get; set; }

        /// <summary>
        /// Resource Id
        /// </summary>
        [Input("id")]
        public Input<string>? Id { get; set; }

        /// <summary>
        /// Specifies the storage account type for the managed disk. NOTE: UltraSSD_LRS can only be used with data disks, it cannot be used with OS Disk.
        /// </summary>
        [Input("storageAccountType")]
        public InputUnion<string, Pulumi.AzureNextGen.Compute.V20200601.StorageAccountTypes>? StorageAccountType { get; set; }

        public ManagedDiskParametersArgs()
        {
        }
    }
}
