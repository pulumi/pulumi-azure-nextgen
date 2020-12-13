// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Compute.V20171201.Inputs
{

    /// <summary>
    /// Describes a virtual machine scale set operating system disk.
    /// </summary>
    public sealed class VirtualMachineScaleSetOSDiskArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies the caching requirements. &lt;br&gt;&lt;br&gt; Possible values are: &lt;br&gt;&lt;br&gt; **None** &lt;br&gt;&lt;br&gt; **ReadOnly** &lt;br&gt;&lt;br&gt; **ReadWrite** &lt;br&gt;&lt;br&gt; Default: **None for Standard storage. ReadOnly for Premium storage**
        /// </summary>
        [Input("caching")]
        public Input<Pulumi.AzureNextGen.Compute.V20171201.CachingTypes>? Caching { get; set; }

        /// <summary>
        /// Specifies how the virtual machines in the scale set should be created.&lt;br&gt;&lt;br&gt; The only allowed value is: **FromImage** \u2013 This value is used when you are using an image to create the virtual machine. If you are using a platform image, you also use the imageReference element described above. If you are using a marketplace image, you  also use the plan element previously described.
        /// </summary>
        [Input("createOption", required: true)]
        public InputUnion<string, Pulumi.AzureNextGen.Compute.V20171201.DiskCreateOptionTypes> CreateOption { get; set; } = null!;

        /// <summary>
        /// Specifies information about the unmanaged user image to base the scale set on.
        /// </summary>
        [Input("image")]
        public Input<Inputs.VirtualHardDiskArgs>? Image { get; set; }

        /// <summary>
        /// The managed disk parameters.
        /// </summary>
        [Input("managedDisk")]
        public Input<Inputs.VirtualMachineScaleSetManagedDiskParametersArgs>? ManagedDisk { get; set; }

        /// <summary>
        /// The disk name.
        /// </summary>
        [Input("name")]
        public Input<string>? Name { get; set; }

        /// <summary>
        /// This property allows you to specify the type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. &lt;br&gt;&lt;br&gt; Possible values are: &lt;br&gt;&lt;br&gt; **Windows** &lt;br&gt;&lt;br&gt; **Linux**
        /// </summary>
        [Input("osType")]
        public Input<Pulumi.AzureNextGen.Compute.V20171201.OperatingSystemTypes>? OsType { get; set; }

        [Input("vhdContainers")]
        private InputList<string>? _vhdContainers;

        /// <summary>
        /// Specifies the container urls that are used to store operating system disks for the scale set.
        /// </summary>
        public InputList<string> VhdContainers
        {
            get => _vhdContainers ?? (_vhdContainers = new InputList<string>());
            set => _vhdContainers = value;
        }

        /// <summary>
        /// Specifies whether writeAccelerator should be enabled or disabled on the disk.
        /// </summary>
        [Input("writeAcceleratorEnabled")]
        public Input<bool>? WriteAcceleratorEnabled { get; set; }

        public VirtualMachineScaleSetOSDiskArgs()
        {
        }
    }
}
