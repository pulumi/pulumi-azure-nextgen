// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupVirtualMachineScaleSetVM(ctx *pulumi.Context, args *LookupVirtualMachineScaleSetVMArgs, opts ...pulumi.InvokeOption) (*LookupVirtualMachineScaleSetVMResult, error) {
	var rv LookupVirtualMachineScaleSetVMResult
	err := ctx.Invoke("azure-nextgen:compute/latest:getVirtualMachineScaleSetVM", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupVirtualMachineScaleSetVMArgs struct {
	// The expand expression to apply on the operation.
	Expand *string `pulumi:"expand"`
	// The instance ID of the virtual machine.
	InstanceId string `pulumi:"instanceId"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the VM scale set.
	VmScaleSetName string `pulumi:"vmScaleSetName"`
}

// Describes a virtual machine scale set virtual machine.
type LookupVirtualMachineScaleSetVMResult struct {
	// Specifies additional capabilities enabled or disabled on the virtual machine in the scale set. For instance: whether the virtual machine has the capability to support attaching managed data disks with UltraSSD_LRS storage account type.
	AdditionalCapabilities *AdditionalCapabilitiesResponse `pulumi:"additionalCapabilities"`
	// Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Manage the availability of virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> For more information on Azure planned maintenance, see [Planned maintenance for virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-planned-maintenance?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Currently, a VM can only be added to availability set at creation time. An existing VM cannot be added to an availability set.
	AvailabilitySet *SubResourceResponse `pulumi:"availabilitySet"`
	// Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
	DiagnosticsProfile *DiagnosticsProfileResponse `pulumi:"diagnosticsProfile"`
	// Specifies the hardware settings for the virtual machine.
	HardwareProfile *HardwareProfileResponse `pulumi:"hardwareProfile"`
	// Resource Id
	Id string `pulumi:"id"`
	// The virtual machine instance ID.
	InstanceId string `pulumi:"instanceId"`
	// The virtual machine instance view.
	InstanceView VirtualMachineScaleSetVMInstanceViewResponse `pulumi:"instanceView"`
	// Specifies whether the latest model has been applied to the virtual machine.
	LatestModelApplied bool `pulumi:"latestModelApplied"`
	// Specifies that the image or disk that is being used was licensed on-premises. <br><br> Possible values for Windows Server operating system are: <br><br> Windows_Client <br><br> Windows_Server <br><br> Possible values for Linux Server operating system are: <br><br> RHEL_BYOS (for RHEL) <br><br> SLES_BYOS (for SUSE) <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/windows/hybrid-use-benefit-licensing) <br><br> [Azure Hybrid Use Benefit for Linux Server](https://docs.microsoft.com/azure/virtual-machines/linux/azure-hybrid-benefit-linux) <br><br> Minimum api-version: 2015-06-15
	LicenseType *string `pulumi:"licenseType"`
	// Resource location
	Location string `pulumi:"location"`
	// Specifies whether the model applied to the virtual machine is the model of the virtual machine scale set or the customized model for the virtual machine.
	ModelDefinitionApplied string `pulumi:"modelDefinitionApplied"`
	// Resource name
	Name string `pulumi:"name"`
	// Specifies the network interfaces of the virtual machine.
	NetworkProfile *NetworkProfileResponse `pulumi:"networkProfile"`
	// Specifies the network profile configuration of the virtual machine.
	NetworkProfileConfiguration *VirtualMachineScaleSetVMNetworkProfileConfigurationResponse `pulumi:"networkProfileConfiguration"`
	// Specifies the operating system settings for the virtual machine.
	OsProfile *OSProfileResponse `pulumi:"osProfile"`
	// Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
	Plan *PlanResponse `pulumi:"plan"`
	// Specifies the protection policy of the virtual machine.
	ProtectionPolicy *VirtualMachineScaleSetVMProtectionPolicyResponse `pulumi:"protectionPolicy"`
	// The provisioning state, which only appears in the response.
	ProvisioningState string `pulumi:"provisioningState"`
	// The virtual machine child extension resources.
	Resources []VirtualMachineExtensionResponse `pulumi:"resources"`
	// Specifies the Security related profile settings for the virtual machine.
	SecurityProfile *SecurityProfileResponse `pulumi:"securityProfile"`
	// The virtual machine SKU.
	Sku SkuResponse `pulumi:"sku"`
	// Specifies the storage settings for the virtual machine disks.
	StorageProfile *StorageProfileResponse `pulumi:"storageProfile"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type string `pulumi:"type"`
	// Azure VM unique ID.
	VmId string `pulumi:"vmId"`
	// The virtual machine zones.
	Zones []string `pulumi:"zones"`
}
