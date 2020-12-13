// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20181001

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupVirtualMachine(ctx *pulumi.Context, args *LookupVirtualMachineArgs, opts ...pulumi.InvokeOption) (*LookupVirtualMachineResult, error) {
	var rv LookupVirtualMachineResult
	err := ctx.Invoke("azure-nextgen:compute/v20181001:getVirtualMachine", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupVirtualMachineArgs struct {
	// The expand expression to apply on the operation.
	Expand *string `pulumi:"expand"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the virtual machine.
	VmName string `pulumi:"vmName"`
}

// Describes a Virtual Machine.
type LookupVirtualMachineResult struct {
	// Specifies additional capabilities enabled or disabled on the virtual machine.
	AdditionalCapabilities *AdditionalCapabilitiesResponse `pulumi:"additionalCapabilities"`
	// Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Manage the availability of virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> For more information on Azure planned maintenance, see [Planned maintenance for virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-planned-maintenance?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Currently, a VM can only be added to availability set at creation time. An existing VM cannot be added to an availability set.
	AvailabilitySet *SubResourceResponse `pulumi:"availabilitySet"`
	// Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
	DiagnosticsProfile *DiagnosticsProfileResponse `pulumi:"diagnosticsProfile"`
	// Specifies the hardware settings for the virtual machine.
	HardwareProfile *HardwareProfileResponse `pulumi:"hardwareProfile"`
	// Resource Id
	Id string `pulumi:"id"`
	// The identity of the virtual machine, if configured.
	Identity *VirtualMachineIdentityResponse `pulumi:"identity"`
	// The virtual machine instance view.
	InstanceView VirtualMachineInstanceViewResponse `pulumi:"instanceView"`
	// Specifies that the image or disk that is being used was licensed on-premises. This element is only used for images that contain the Windows Server operating system. <br><br> Possible values are: <br><br> Windows_Client <br><br> Windows_Server <br><br> If this element is included in a request for an update, the value must match the initial value. This value cannot be updated. <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-hybrid-use-benefit-licensing?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Minimum api-version: 2015-06-15
	LicenseType *string `pulumi:"licenseType"`
	// Resource location
	Location string `pulumi:"location"`
	// Resource name
	Name string `pulumi:"name"`
	// Specifies the network interfaces of the virtual machine.
	NetworkProfile *NetworkProfileResponse `pulumi:"networkProfile"`
	// Specifies the operating system settings for the virtual machine.
	OsProfile *OSProfileResponse `pulumi:"osProfile"`
	// Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
	Plan *PlanResponse `pulumi:"plan"`
	// The provisioning state, which only appears in the response.
	ProvisioningState string `pulumi:"provisioningState"`
	// Specifies information about the proximity placement group that the virtual machine should be assigned to. <br><br>Minimum api-version: 2018-04-01.
	ProximityPlacementGroup *SubResourceResponse `pulumi:"proximityPlacementGroup"`
	// The virtual machine child extension resources.
	Resources []VirtualMachineExtensionResponse `pulumi:"resources"`
	// Specifies the storage settings for the virtual machine disks.
	StorageProfile *StorageProfileResponse `pulumi:"storageProfile"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type string `pulumi:"type"`
	// Specifies the VM unique ID which is a 128-bits identifier that is encoded and stored in all Azure IaaS VMs SMBIOS and can be read using platform BIOS commands.
	VmId string `pulumi:"vmId"`
	// The virtual machine zones.
	Zones []string `pulumi:"zones"`
}
