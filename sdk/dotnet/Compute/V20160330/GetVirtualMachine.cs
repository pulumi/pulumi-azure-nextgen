// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.AzureNextGen.Compute.V20160330
{
    public static class GetVirtualMachine
    {
        public static Task<GetVirtualMachineResult> InvokeAsync(GetVirtualMachineArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetVirtualMachineResult>("azure-nextgen:compute/v20160330:getVirtualMachine", args ?? new GetVirtualMachineArgs(), options.WithVersion());
    }


    public sealed class GetVirtualMachineArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The expand expression to apply on the operation.
        /// </summary>
        [Input("expand")]
        public string? Expand { get; set; }

        /// <summary>
        /// The name of the resource group.
        /// </summary>
        [Input("resourceGroupName", required: true)]
        public string ResourceGroupName { get; set; } = null!;

        /// <summary>
        /// The name of the virtual machine.
        /// </summary>
        [Input("vmName", required: true)]
        public string VmName { get; set; } = null!;

        public GetVirtualMachineArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetVirtualMachineResult
    {
        /// <summary>
        /// Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Manage the availability of virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). &lt;br&gt;&lt;br&gt; For more information on Azure planned maintenance, see [Planned maintenance for virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-planned-maintenance?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) &lt;br&gt;&lt;br&gt; Currently, a VM can only be added to availability set at creation time. An existing VM cannot be added to an availability set.
        /// </summary>
        public readonly Outputs.SubResourceResponse? AvailabilitySet;
        /// <summary>
        /// Specifies the boot diagnostic settings state. &lt;br&gt;&lt;br&gt;Minimum api-version: 2015-06-15.
        /// </summary>
        public readonly Outputs.DiagnosticsProfileResponse? DiagnosticsProfile;
        /// <summary>
        /// Specifies the hardware settings for the virtual machine.
        /// </summary>
        public readonly Outputs.HardwareProfileResponse? HardwareProfile;
        /// <summary>
        /// Resource Id
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// The identity of the virtual machine, if configured.
        /// </summary>
        public readonly Outputs.VirtualMachineIdentityResponse? Identity;
        /// <summary>
        /// The virtual machine instance view.
        /// </summary>
        public readonly Outputs.VirtualMachineInstanceViewResponse InstanceView;
        /// <summary>
        /// Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. &lt;br&gt;&lt;br&gt; Possible values are: &lt;br&gt;&lt;br&gt; Windows_Client &lt;br&gt;&lt;br&gt; Windows_Server &lt;br&gt;&lt;br&gt; If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. &lt;br&gt;&lt;br&gt; For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) &lt;br&gt;&lt;br&gt; Minimum api-version: 2015-06-15
        /// </summary>
        public readonly string? LicenseType;
        /// <summary>
        /// Resource location
        /// </summary>
        public readonly string Location;
        /// <summary>
        /// Resource name
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Specifies the network interfaces of the virtual machine.
        /// </summary>
        public readonly Outputs.NetworkProfileResponse? NetworkProfile;
        /// <summary>
        /// Specifies the operating system settings for the virtual machine.
        /// </summary>
        public readonly Outputs.OSProfileResponse? OsProfile;
        /// <summary>
        /// Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started -&gt;**. Enter any required information and then click **Save**.
        /// </summary>
        public readonly Outputs.PlanResponse? Plan;
        /// <summary>
        /// The provisioning state, which only appears in the response.
        /// </summary>
        public readonly string ProvisioningState;
        /// <summary>
        /// The virtual machine child extension resources.
        /// </summary>
        public readonly ImmutableArray<Outputs.VirtualMachineExtensionResponse> Resources;
        /// <summary>
        /// Specifies the storage settings for the virtual machine disks.
        /// </summary>
        public readonly Outputs.StorageProfileResponse? StorageProfile;
        /// <summary>
        /// Resource tags
        /// </summary>
        public readonly ImmutableDictionary<string, string>? Tags;
        /// <summary>
        /// Resource type
        /// </summary>
        public readonly string Type;
        /// <summary>
        /// Specifies the VM unique ID which is a 128-bits identifier that is encoded and stored in all Azure IaaS VMs SMBIOS and can be read using platform BIOS commands.
        /// </summary>
        public readonly string VmId;

        [OutputConstructor]
        private GetVirtualMachineResult(
            Outputs.SubResourceResponse? availabilitySet,

            Outputs.DiagnosticsProfileResponse? diagnosticsProfile,

            Outputs.HardwareProfileResponse? hardwareProfile,

            string id,

            Outputs.VirtualMachineIdentityResponse? identity,

            Outputs.VirtualMachineInstanceViewResponse instanceView,

            string? licenseType,

            string location,

            string name,

            Outputs.NetworkProfileResponse? networkProfile,

            Outputs.OSProfileResponse? osProfile,

            Outputs.PlanResponse? plan,

            string provisioningState,

            ImmutableArray<Outputs.VirtualMachineExtensionResponse> resources,

            Outputs.StorageProfileResponse? storageProfile,

            ImmutableDictionary<string, string>? tags,

            string type,

            string vmId)
        {
            AvailabilitySet = availabilitySet;
            DiagnosticsProfile = diagnosticsProfile;
            HardwareProfile = hardwareProfile;
            Id = id;
            Identity = identity;
            InstanceView = instanceView;
            LicenseType = licenseType;
            Location = location;
            Name = name;
            NetworkProfile = networkProfile;
            OsProfile = osProfile;
            Plan = plan;
            ProvisioningState = provisioningState;
            Resources = resources;
            StorageProfile = storageProfile;
            Tags = tags;
            Type = type;
            VmId = vmId;
        }
    }
}
