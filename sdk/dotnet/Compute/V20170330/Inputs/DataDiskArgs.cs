// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Compute.V20170330.Inputs
{

    /// <summary>
    /// Describes a data disk.
    /// </summary>
    public sealed class DataDiskArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the caching requirements. &lt;br&gt;&lt;br&gt; Possible values are: &lt;br&gt;&lt;br&gt; **None** &lt;br&gt;&lt;br&gt; **ReadOnly** &lt;br&gt;&lt;br&gt; **ReadWrite** &lt;br&gt;&lt;br&gt; Default: **None for Standard storage. ReadOnly for Premium storage**
        /// </summary>
        [Input("caching")]
        public Input<Pulumi.AzureNextGen.Compute.V20170330.CachingTypes>? Caching { get; set; }

        /// <summary>
        /// Specifies how the virtual machine should be created.&lt;br&gt;&lt;br&gt; Possible values are:&lt;br&gt;&lt;br&gt; **Attach** \u2013 This value is used when you are using a specialized disk to create the virtual machine.&lt;br&gt;&lt;br&gt; **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
        /// </summary>
        [Input("createOption", required: true)]
        public Input<Pulumi.AzureNextGen.Compute.V20170330.DiskCreateOptionTypes> CreateOption { get; set; } = null!;

        /// <summary>
        /// Specifies the size of an empty data disk in gigabytes. This element can be used to overwrite the size of the disk in a virtual machine image. &lt;br&gt;&lt;br&gt; This value cannot be larger than 1023 GB
        /// </summary>
        [Input("diskSizeGB")]
        public Input<int>? DiskSizeGB { get; set; }

        /// <summary>
        /// The source user image virtual hard disk. The virtual hard disk will be copied before being attached to the virtual machine. If SourceImage is provided, the destination virtual hard drive must not exist.
        /// </summary>
        [Input("image")]
        public Input<Inputs.VirtualHardDiskArgs>? Image { get; set; }

        /// <summary>
        /// Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
        /// </summary>
        [Input("lun", required: true)]
        public Input<int> Lun { get; set; } = null!;

        /// <summary>
        /// The managed disk parameters.
        /// </summary>
        [Input("managedDisk")]
        public Input<Inputs.ManagedDiskParametersArgs>? ManagedDisk { get; set; }

        /// <summary>
        /// The disk name.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// The virtual hard disk.
        /// </summary>
        [Input("vhd")]
        public Input<Inputs.VirtualHardDiskArgs>? Vhd { get; set; }

        public DataDiskArgs()
        {
        }
    }
}
