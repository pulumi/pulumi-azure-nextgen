// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Compute.V20190301
{
    /// <summary>
    /// Describes a Virtual Machine.
    /// </summary>
    [AzureNextGenResourceType("azure-nextgen:compute/v20190301:VirtualMachine")]
    public partial class VirtualMachine : Pulumi.CustomResource
    {
        /// <summary>
        /// Specifies additional capabilities enabled or disabled on the virtual machine.
        /// </summary>
        [Output("additionalCapabilities")]
        public Output<Outputs.AdditionalCapabilitiesResponse?> AdditionalCapabilities { get; private set; } = null!;

        /// <summary>
        /// Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Manage the availability of virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). &lt;br&gt;&lt;br&gt; For more information on Azure planned maintenance, see [Planned maintenance for virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-planned-maintenance?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) &lt;br&gt;&lt;br&gt; Currently, a VM can only be added to availability set at creation time. An existing VM cannot be added to an availability set. &lt;br&gt;&lt;br&gt;This property cannot exist along with a non-null properties.virtualMachineScaleSet reference.
        /// </summary>
        [Output("availabilitySet")]
        public Output<Outputs.SubResourceResponse?> AvailabilitySet { get; private set; } = null!;

        /// <summary>
        /// Specifies the billing related details of a Azure Spot virtual machine. &lt;br&gt;&lt;br&gt;Minimum api-version: 2019-03-01.
        /// </summary>
        [Output("billingProfile")]
        public Output<Outputs.BillingProfileResponse?> BillingProfile { get; private set; } = null!;

        /// <summary>
        /// Specifies the boot diagnostic settings state. &lt;br&gt;&lt;br&gt;Minimum api-version: 2015-06-15.
        /// </summary>
        [Output("diagnosticsProfile")]
        public Output<Outputs.DiagnosticsProfileResponse?> DiagnosticsProfile { get; private set; } = null!;

        /// <summary>
        /// Specifies the eviction policy for the Azure Spot virtual machine. Only supported value is 'Deallocate'. &lt;br&gt;&lt;br&gt;Minimum api-version: 2019-03-01
        /// </summary>
        [Output("evictionPolicy")]
        public Output<string?> EvictionPolicy { get; private set; } = null!;

        /// <summary>
        /// Specifies the hardware settings for the virtual machine.
        /// </summary>
        [Output("hardwareProfile")]
        public Output<Outputs.HardwareProfileResponse?> HardwareProfile { get; private set; } = null!;

        /// <summary>
        /// Specifies information about the dedicated host that the virtual machine resides in. &lt;br&gt;&lt;br&gt;Minimum api-version: 2018-10-01.
        /// </summary>
        [Output("host")]
        public Output<Outputs.SubResourceResponse?> Host { get; private set; } = null!;

        /// <summary>
        /// The identity of the virtual machine, if configured.
        /// </summary>
        [Output("identity")]
        public Output<Outputs.VirtualMachineIdentityResponse?> Identity { get; private set; } = null!;

        /// <summary>
        /// The virtual machine instance view.
        /// </summary>
        [Output("instanceView")]
        public Output<Outputs.VirtualMachineInstanceViewResponse> InstanceView { get; private set; } = null!;

        /// <summary>
        /// Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. &lt;br&gt;&lt;br&gt; Possible values are: &lt;br&gt;&lt;br&gt; Windows_Client &lt;br&gt;&lt;br&gt; Windows_Server &lt;br&gt;&lt;br&gt; If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. &lt;br&gt;&lt;br&gt; For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) &lt;br&gt;&lt;br&gt; Minimum api-version: 2015-06-15
        /// </summary>
        [Output("licenseType")]
        public Output<string?> LicenseType { get; private set; } = null!;

        /// <summary>
        /// Resource location
        /// </summary>
        [Output("location")]
        public Output<string> Location { get; private set; } = null!;

        /// <summary>
        /// Resource name
        /// </summary>
        [Output("name")]
        public Output<string> Name { get; private set; } = null!;

        /// <summary>
        /// Specifies the network interfaces of the virtual machine.
        /// </summary>
        [Output("networkProfile")]
        public Output<Outputs.NetworkProfileResponse?> NetworkProfile { get; private set; } = null!;

        /// <summary>
        /// Specifies the operating system settings for the virtual machine.
        /// </summary>
        [Output("osProfile")]
        public Output<Outputs.OSProfileResponse?> OsProfile { get; private set; } = null!;

        /// <summary>
        /// Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started -&gt;**. Enter any required information and then click **Save**.
        /// </summary>
        [Output("plan")]
        public Output<Outputs.PlanResponse?> Plan { get; private set; } = null!;

        /// <summary>
        /// Specifies the priority for the virtual machine. &lt;br&gt;&lt;br&gt;Minimum api-version: 2019-03-01
        /// </summary>
        [Output("priority")]
        public Output<string?> Priority { get; private set; } = null!;

        /// <summary>
        /// The provisioning state, which only appears in the response.
        /// </summary>
        [Output("provisioningState")]
        public Output<string> ProvisioningState { get; private set; } = null!;

        /// <summary>
        /// Specifies information about the proximity placement group that the virtual machine should be assigned to. &lt;br&gt;&lt;br&gt;Minimum api-version: 2018-04-01.
        /// </summary>
        [Output("proximityPlacementGroup")]
        public Output<Outputs.SubResourceResponse?> ProximityPlacementGroup { get; private set; } = null!;

        /// <summary>
        /// The virtual machine child extension resources.
        /// </summary>
        [Output("resources")]
        public Output<ImmutableArray<Outputs.VirtualMachineExtensionResponse>> Resources { get; private set; } = null!;

        /// <summary>
        /// Specifies the storage settings for the virtual machine disks.
        /// </summary>
        [Output("storageProfile")]
        public Output<Outputs.StorageProfileResponse?> StorageProfile { get; private set; } = null!;

        /// <summary>
        /// Resource tags
        /// </summary>
        [Output("tags")]
        public Output<ImmutableDictionary<string, string>?> Tags { get; private set; } = null!;

        /// <summary>
        /// Resource type
        /// </summary>
        [Output("type")]
        public Output<string> Type { get; private set; } = null!;

        /// <summary>
        /// Specifies information about the virtual machine scale set that the virtual machine should be assigned to. Virtual machines specified in the same virtual machine scale set are allocated to different nodes to maximize availability. Currently, a VM can only be added to virtual machine scale set at creation time. An existing VM cannot be added to a virtual machine scale set. &lt;br&gt;&lt;br&gt;This property cannot exist along with a non-null properties.availabilitySet reference. &lt;br&gt;&lt;br&gt;Minimum api‐version: 2019‐03‐01
        /// </summary>
        [Output("virtualMachineScaleSet")]
        public Output<Outputs.SubResourceResponse?> VirtualMachineScaleSet { get; private set; } = null!;

        /// <summary>
        /// Specifies the VM unique ID which is a 128-bits identifier that is encoded and stored in all Azure IaaS VMs SMBIOS and can be read using platform BIOS commands.
        /// </summary>
        [Output("vmId")]
        public Output<string> VmId { get; private set; } = null!;

        /// <summary>
        /// The virtual machine zones.
        /// </summary>
        [Output("zones")]
        public Output<ImmutableArray<string>> Zones { get; private set; } = null!;


        /// <summary>
        /// Create a VirtualMachine resource with the given unique name, arguments, and options.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public VirtualMachine(string name, VirtualMachineArgs args, CustomResourceOptions? options = null)
            : base("azure-nextgen:compute/v20190301:VirtualMachine", name, args ?? new VirtualMachineArgs(), MakeResourceOptions(options, ""))
        {
        }

        private VirtualMachine(string name, Input<string> id, CustomResourceOptions? options = null)
            : base("azure-nextgen:compute/v20190301:VirtualMachine", name, null, MakeResourceOptions(options, id))
        {
        }

        private static CustomResourceOptions MakeResourceOptions(CustomResourceOptions? options, Input<string>? id)
        {
            var defaultOptions = new CustomResourceOptions
            {
                Version = Utilities.Version,
                Aliases =
                {
                    new Pulumi.Alias { Type = "azure-nextgen:compute/latest:VirtualMachine"},
                    new Pulumi.Alias { Type = "azure-nextgen:compute/v20150615:VirtualMachine"},
                    new Pulumi.Alias { Type = "azure-nextgen:compute/v20160330:VirtualMachine"},
                    new Pulumi.Alias { Type = "azure-nextgen:compute/v20160430preview:VirtualMachine"},
                    new Pulumi.Alias { Type = "azure-nextgen:compute/v20170330:VirtualMachine"},
                    new Pulumi.Alias { Type = "azure-nextgen:compute/v20171201:VirtualMachine"},
                    new Pulumi.Alias { Type = "azure-nextgen:compute/v20180401:VirtualMachine"},
                    new Pulumi.Alias { Type = "azure-nextgen:compute/v20180601:VirtualMachine"},
                    new Pulumi.Alias { Type = "azure-nextgen:compute/v20181001:VirtualMachine"},
                    new Pulumi.Alias { Type = "azure-nextgen:compute/v20190701:VirtualMachine"},
                    new Pulumi.Alias { Type = "azure-nextgen:compute/v20191201:VirtualMachine"},
                    new Pulumi.Alias { Type = "azure-nextgen:compute/v20200601:VirtualMachine"},
                },
            };
            var merged = CustomResourceOptions.Merge(defaultOptions, options);
            // Override the ID if one was specified for consistency with other language SDKs.
            merged.Id = id ?? merged.Id;
            return merged;
        }
        /// <summary>
        /// Get an existing VirtualMachine resource's state with the given name, ID, and optional extra
        /// properties used to qualify the lookup.
        /// </summary>
        ///
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static VirtualMachine Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new VirtualMachine(name, id, options);
        }
    }

    public sealed class VirtualMachineArgs : Pulumi.ResourceArgs
    {
        /// <summary>
        /// Specifies additional capabilities enabled or disabled on the virtual machine.
        /// </summary>
        [Input("additionalCapabilities")]
        public Input<Inputs.AdditionalCapabilitiesArgs>? AdditionalCapabilities { get; set; }

        /// <summary>
        /// Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Manage the availability of virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). &lt;br&gt;&lt;br&gt; For more information on Azure planned maintenance, see [Planned maintenance for virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-planned-maintenance?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) &lt;br&gt;&lt;br&gt; Currently, a VM can only be added to availability set at creation time. An existing VM cannot be added to an availability set. &lt;br&gt;&lt;br&gt;This property cannot exist along with a non-null properties.virtualMachineScaleSet reference.
        /// </summary>
        [Input("availabilitySet")]
        public Input<Inputs.SubResourceArgs>? AvailabilitySet { get; set; }

        /// <summary>
        /// Specifies the billing related details of a Azure Spot virtual machine. &lt;br&gt;&lt;br&gt;Minimum api-version: 2019-03-01.
        /// </summary>
        [Input("billingProfile")]
        public Input<Inputs.BillingProfileArgs>? BillingProfile { get; set; }

        /// <summary>
        /// Specifies the boot diagnostic settings state. &lt;br&gt;&lt;br&gt;Minimum api-version: 2015-06-15.
        /// </summary>
        [Input("diagnosticsProfile")]
        public Input<Inputs.DiagnosticsProfileArgs>? DiagnosticsProfile { get; set; }

        /// <summary>
        /// Specifies the eviction policy for the Azure Spot virtual machine. Only supported value is 'Deallocate'. &lt;br&gt;&lt;br&gt;Minimum api-version: 2019-03-01
        /// </summary>
        [Input("evictionPolicy")]
        public InputUnion<string, Pulumi.AzureNextGen.Compute.V20190301.VirtualMachineEvictionPolicyTypes>? EvictionPolicy { get; set; }

        /// <summary>
        /// Specifies the hardware settings for the virtual machine.
        /// </summary>
        [Input("hardwareProfile")]
        public Input<Inputs.HardwareProfileArgs>? HardwareProfile { get; set; }

        /// <summary>
        /// Specifies information about the dedicated host that the virtual machine resides in. &lt;br&gt;&lt;br&gt;Minimum api-version: 2018-10-01.
        /// </summary>
        [Input("host")]
        public Input<Inputs.SubResourceArgs>? Host { get; set; }

        /// <summary>
        /// The identity of the virtual machine, if configured.
        /// </summary>
        [Input("identity")]
        public Input<Inputs.VirtualMachineIdentityArgs>? Identity { get; set; }

        /// <summary>
        /// Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. &lt;br&gt;&lt;br&gt; Possible values are: &lt;br&gt;&lt;br&gt; Windows_Client &lt;br&gt;&lt;br&gt; Windows_Server &lt;br&gt;&lt;br&gt; If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. &lt;br&gt;&lt;br&gt; For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) &lt;br&gt;&lt;br&gt; Minimum api-version: 2015-06-15
        /// </summary>
        [Input("licenseType")]
        public Input<string>? LicenseType { get; set; }

        /// <summary>
        /// Resource location
        /// </summary>
        [Input("location", required: true)]
        public Input<string> Location { get; set; } = null!;

        /// <summary>
        /// Specifies the network interfaces of the virtual machine.
        /// </summary>
        [Input("networkProfile")]
        public Input<Inputs.NetworkProfileArgs>? NetworkProfile { get; set; }

        /// <summary>
        /// Specifies the operating system settings for the virtual machine.
        /// </summary>
        [Input("osProfile")]
        public Input<Inputs.OSProfileArgs>? OsProfile { get; set; }

        /// <summary>
        /// Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started -&gt;**. Enter any required information and then click **Save**.
        /// </summary>
        [Input("plan")]
        public Input<Inputs.PlanArgs>? Plan { get; set; }

        /// <summary>
        /// Specifies the priority for the virtual machine. &lt;br&gt;&lt;br&gt;Minimum api-version: 2019-03-01
        /// </summary>
        [Input("priority")]
        public InputUnion<string, Pulumi.AzureNextGen.Compute.V20190301.VirtualMachinePriorityTypes>? Priority { get; set; }

        /// <summary>
        /// Specifies information about the proximity placement group that the virtual machine should be assigned to. &lt;br&gt;&lt;br&gt;Minimum api-version: 2018-04-01.
        /// </summary>
        [Input("proximityPlacementGroup")]
        public Input<Inputs.SubResourceArgs>? ProximityPlacementGroup { get; set; }

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public Input<string> ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// Specifies the storage settings for the virtual machine disks.
        /// </summary>
        [Input("storageProfile")]
        public Input<Inputs.StorageProfileArgs>? StorageProfile { get; set; }

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// Resource tags
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        /// <summary>
        /// Specifies information about the virtual machine scale set that the virtual machine should be assigned to. Virtual machines specified in the same virtual machine scale set are allocated to different nodes to maximize availability. Currently, a VM can only be added to virtual machine scale set at creation time. An existing VM cannot be added to a virtual machine scale set. &lt;br&gt;&lt;br&gt;This property cannot exist along with a non-null properties.availabilitySet reference. &lt;br&gt;&lt;br&gt;Minimum api‐version: 2019‐03‐01
        /// </summary>
        [Input("virtualMachineScaleSet")]
        public Input<Inputs.SubResourceArgs>? VirtualMachineScaleSet { get; set; }

        /// <summary>
        /// The name of the virtual machine.
        /// </summary>
        [Input("vmName", required: true)]
        public Input<string> VmName { get; set; } = null!;

        [Input("zones")]
        private InputList<string>? _zones;

        /// <summary>
        /// The virtual machine zones.
        /// </summary>
        public InputList<string> Zones
        {
            get => _zones ?? (_zones = new InputList<string>());
            set => _zones = value;
        }

        public VirtualMachineArgs()
        {
        }
    }
}
