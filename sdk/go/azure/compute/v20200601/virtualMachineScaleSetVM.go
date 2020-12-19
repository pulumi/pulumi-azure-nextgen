// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200601

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Describes a virtual machine scale set virtual machine.
type VirtualMachineScaleSetVM struct {
	pulumi.CustomResourceState

	// Specifies additional capabilities enabled or disabled on the virtual machine in the scale set. For instance: whether the virtual machine has the capability to support attaching managed data disks with UltraSSD_LRS storage account type.
	AdditionalCapabilities AdditionalCapabilitiesResponsePtrOutput `pulumi:"additionalCapabilities"`
	// Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Manage the availability of virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> For more information on Azure planned maintenance, see [Planned maintenance for virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-planned-maintenance?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Currently, a VM can only be added to availability set at creation time. An existing VM cannot be added to an availability set.
	AvailabilitySet SubResourceResponsePtrOutput `pulumi:"availabilitySet"`
	// Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
	DiagnosticsProfile DiagnosticsProfileResponsePtrOutput `pulumi:"diagnosticsProfile"`
	// Specifies the hardware settings for the virtual machine.
	HardwareProfile HardwareProfileResponsePtrOutput `pulumi:"hardwareProfile"`
	// The virtual machine instance ID.
	InstanceId pulumi.StringOutput `pulumi:"instanceId"`
	// The virtual machine instance view.
	InstanceView VirtualMachineScaleSetVMInstanceViewResponseOutput `pulumi:"instanceView"`
	// Specifies whether the latest model has been applied to the virtual machine.
	LatestModelApplied pulumi.BoolOutput `pulumi:"latestModelApplied"`
	// Specifies that the image or disk that is being used was licensed on-premises. <br><br> Possible values for Windows Server operating system are: <br><br> Windows_Client <br><br> Windows_Server <br><br> Possible values for Linux Server operating system are: <br><br> RHEL_BYOS (for RHEL) <br><br> SLES_BYOS (for SUSE) <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/windows/hybrid-use-benefit-licensing) <br><br> [Azure Hybrid Use Benefit for Linux Server](https://docs.microsoft.com/azure/virtual-machines/linux/azure-hybrid-benefit-linux) <br><br> Minimum api-version: 2015-06-15
	LicenseType pulumi.StringPtrOutput `pulumi:"licenseType"`
	// Resource location
	Location pulumi.StringOutput `pulumi:"location"`
	// Specifies whether the model applied to the virtual machine is the model of the virtual machine scale set or the customized model for the virtual machine.
	ModelDefinitionApplied pulumi.StringOutput `pulumi:"modelDefinitionApplied"`
	// Resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// Specifies the network interfaces of the virtual machine.
	NetworkProfile NetworkProfileResponsePtrOutput `pulumi:"networkProfile"`
	// Specifies the network profile configuration of the virtual machine.
	NetworkProfileConfiguration VirtualMachineScaleSetVMNetworkProfileConfigurationResponsePtrOutput `pulumi:"networkProfileConfiguration"`
	// Specifies the operating system settings for the virtual machine.
	OsProfile OSProfileResponsePtrOutput `pulumi:"osProfile"`
	// Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
	Plan PlanResponsePtrOutput `pulumi:"plan"`
	// Specifies the protection policy of the virtual machine.
	ProtectionPolicy VirtualMachineScaleSetVMProtectionPolicyResponsePtrOutput `pulumi:"protectionPolicy"`
	// The provisioning state, which only appears in the response.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The virtual machine child extension resources.
	Resources VirtualMachineExtensionResponseArrayOutput `pulumi:"resources"`
	// Specifies the Security related profile settings for the virtual machine.
	SecurityProfile SecurityProfileResponsePtrOutput `pulumi:"securityProfile"`
	// The virtual machine SKU.
	Sku SkuResponseOutput `pulumi:"sku"`
	// Specifies the storage settings for the virtual machine disks.
	StorageProfile StorageProfileResponsePtrOutput `pulumi:"storageProfile"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
	// Azure VM unique ID.
	VmId pulumi.StringOutput `pulumi:"vmId"`
	// The virtual machine zones.
	Zones pulumi.StringArrayOutput `pulumi:"zones"`
}

// NewVirtualMachineScaleSetVM registers a new resource with the given unique name, arguments, and options.
func NewVirtualMachineScaleSetVM(ctx *pulumi.Context,
	name string, args *VirtualMachineScaleSetVMArgs, opts ...pulumi.ResourceOption) (*VirtualMachineScaleSetVM, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.InstanceId == nil {
		return nil, errors.New("invalid value for required argument 'InstanceId'")
	}
	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.VmScaleSetName == nil {
		return nil, errors.New("invalid value for required argument 'VmScaleSetName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:compute/latest:VirtualMachineScaleSetVM"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20171201:VirtualMachineScaleSetVM"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20180401:VirtualMachineScaleSetVM"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20180601:VirtualMachineScaleSetVM"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20181001:VirtualMachineScaleSetVM"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20190301:VirtualMachineScaleSetVM"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20190701:VirtualMachineScaleSetVM"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20191201:VirtualMachineScaleSetVM"),
		},
	})
	opts = append(opts, aliases)
	var resource VirtualMachineScaleSetVM
	err := ctx.RegisterResource("azure-nextgen:compute/v20200601:VirtualMachineScaleSetVM", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetVirtualMachineScaleSetVM gets an existing VirtualMachineScaleSetVM resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetVirtualMachineScaleSetVM(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *VirtualMachineScaleSetVMState, opts ...pulumi.ResourceOption) (*VirtualMachineScaleSetVM, error) {
	var resource VirtualMachineScaleSetVM
	err := ctx.ReadResource("azure-nextgen:compute/v20200601:VirtualMachineScaleSetVM", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering VirtualMachineScaleSetVM resources.
type virtualMachineScaleSetVMState struct {
	// Specifies additional capabilities enabled or disabled on the virtual machine in the scale set. For instance: whether the virtual machine has the capability to support attaching managed data disks with UltraSSD_LRS storage account type.
	AdditionalCapabilities *AdditionalCapabilitiesResponse `pulumi:"additionalCapabilities"`
	// Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Manage the availability of virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> For more information on Azure planned maintenance, see [Planned maintenance for virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-planned-maintenance?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Currently, a VM can only be added to availability set at creation time. An existing VM cannot be added to an availability set.
	AvailabilitySet *SubResourceResponse `pulumi:"availabilitySet"`
	// Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
	DiagnosticsProfile *DiagnosticsProfileResponse `pulumi:"diagnosticsProfile"`
	// Specifies the hardware settings for the virtual machine.
	HardwareProfile *HardwareProfileResponse `pulumi:"hardwareProfile"`
	// The virtual machine instance ID.
	InstanceId *string `pulumi:"instanceId"`
	// The virtual machine instance view.
	InstanceView *VirtualMachineScaleSetVMInstanceViewResponse `pulumi:"instanceView"`
	// Specifies whether the latest model has been applied to the virtual machine.
	LatestModelApplied *bool `pulumi:"latestModelApplied"`
	// Specifies that the image or disk that is being used was licensed on-premises. <br><br> Possible values for Windows Server operating system are: <br><br> Windows_Client <br><br> Windows_Server <br><br> Possible values for Linux Server operating system are: <br><br> RHEL_BYOS (for RHEL) <br><br> SLES_BYOS (for SUSE) <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/windows/hybrid-use-benefit-licensing) <br><br> [Azure Hybrid Use Benefit for Linux Server](https://docs.microsoft.com/azure/virtual-machines/linux/azure-hybrid-benefit-linux) <br><br> Minimum api-version: 2015-06-15
	LicenseType *string `pulumi:"licenseType"`
	// Resource location
	Location *string `pulumi:"location"`
	// Specifies whether the model applied to the virtual machine is the model of the virtual machine scale set or the customized model for the virtual machine.
	ModelDefinitionApplied *string `pulumi:"modelDefinitionApplied"`
	// Resource name
	Name *string `pulumi:"name"`
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
	ProvisioningState *string `pulumi:"provisioningState"`
	// The virtual machine child extension resources.
	Resources []VirtualMachineExtensionResponse `pulumi:"resources"`
	// Specifies the Security related profile settings for the virtual machine.
	SecurityProfile *SecurityProfileResponse `pulumi:"securityProfile"`
	// The virtual machine SKU.
	Sku *SkuResponse `pulumi:"sku"`
	// Specifies the storage settings for the virtual machine disks.
	StorageProfile *StorageProfileResponse `pulumi:"storageProfile"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type *string `pulumi:"type"`
	// Azure VM unique ID.
	VmId *string `pulumi:"vmId"`
	// The virtual machine zones.
	Zones []string `pulumi:"zones"`
}

type VirtualMachineScaleSetVMState struct {
	// Specifies additional capabilities enabled or disabled on the virtual machine in the scale set. For instance: whether the virtual machine has the capability to support attaching managed data disks with UltraSSD_LRS storage account type.
	AdditionalCapabilities AdditionalCapabilitiesResponsePtrInput
	// Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Manage the availability of virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> For more information on Azure planned maintenance, see [Planned maintenance for virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-planned-maintenance?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Currently, a VM can only be added to availability set at creation time. An existing VM cannot be added to an availability set.
	AvailabilitySet SubResourceResponsePtrInput
	// Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
	DiagnosticsProfile DiagnosticsProfileResponsePtrInput
	// Specifies the hardware settings for the virtual machine.
	HardwareProfile HardwareProfileResponsePtrInput
	// The virtual machine instance ID.
	InstanceId pulumi.StringPtrInput
	// The virtual machine instance view.
	InstanceView VirtualMachineScaleSetVMInstanceViewResponsePtrInput
	// Specifies whether the latest model has been applied to the virtual machine.
	LatestModelApplied pulumi.BoolPtrInput
	// Specifies that the image or disk that is being used was licensed on-premises. <br><br> Possible values for Windows Server operating system are: <br><br> Windows_Client <br><br> Windows_Server <br><br> Possible values for Linux Server operating system are: <br><br> RHEL_BYOS (for RHEL) <br><br> SLES_BYOS (for SUSE) <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/windows/hybrid-use-benefit-licensing) <br><br> [Azure Hybrid Use Benefit for Linux Server](https://docs.microsoft.com/azure/virtual-machines/linux/azure-hybrid-benefit-linux) <br><br> Minimum api-version: 2015-06-15
	LicenseType pulumi.StringPtrInput
	// Resource location
	Location pulumi.StringPtrInput
	// Specifies whether the model applied to the virtual machine is the model of the virtual machine scale set or the customized model for the virtual machine.
	ModelDefinitionApplied pulumi.StringPtrInput
	// Resource name
	Name pulumi.StringPtrInput
	// Specifies the network interfaces of the virtual machine.
	NetworkProfile NetworkProfileResponsePtrInput
	// Specifies the network profile configuration of the virtual machine.
	NetworkProfileConfiguration VirtualMachineScaleSetVMNetworkProfileConfigurationResponsePtrInput
	// Specifies the operating system settings for the virtual machine.
	OsProfile OSProfileResponsePtrInput
	// Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
	Plan PlanResponsePtrInput
	// Specifies the protection policy of the virtual machine.
	ProtectionPolicy VirtualMachineScaleSetVMProtectionPolicyResponsePtrInput
	// The provisioning state, which only appears in the response.
	ProvisioningState pulumi.StringPtrInput
	// The virtual machine child extension resources.
	Resources VirtualMachineExtensionResponseArrayInput
	// Specifies the Security related profile settings for the virtual machine.
	SecurityProfile SecurityProfileResponsePtrInput
	// The virtual machine SKU.
	Sku SkuResponsePtrInput
	// Specifies the storage settings for the virtual machine disks.
	StorageProfile StorageProfileResponsePtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Resource type
	Type pulumi.StringPtrInput
	// Azure VM unique ID.
	VmId pulumi.StringPtrInput
	// The virtual machine zones.
	Zones pulumi.StringArrayInput
}

func (VirtualMachineScaleSetVMState) ElementType() reflect.Type {
	return reflect.TypeOf((*virtualMachineScaleSetVMState)(nil)).Elem()
}

type virtualMachineScaleSetVMArgs struct {
	// Specifies additional capabilities enabled or disabled on the virtual machine in the scale set. For instance: whether the virtual machine has the capability to support attaching managed data disks with UltraSSD_LRS storage account type.
	AdditionalCapabilities *AdditionalCapabilities `pulumi:"additionalCapabilities"`
	// Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Manage the availability of virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> For more information on Azure planned maintenance, see [Planned maintenance for virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-planned-maintenance?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Currently, a VM can only be added to availability set at creation time. An existing VM cannot be added to an availability set.
	AvailabilitySet *SubResource `pulumi:"availabilitySet"`
	// Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
	DiagnosticsProfile *DiagnosticsProfile `pulumi:"diagnosticsProfile"`
	// Specifies the hardware settings for the virtual machine.
	HardwareProfile *HardwareProfile `pulumi:"hardwareProfile"`
	// The instance ID of the virtual machine.
	InstanceId string `pulumi:"instanceId"`
	// Specifies that the image or disk that is being used was licensed on-premises. <br><br> Possible values for Windows Server operating system are: <br><br> Windows_Client <br><br> Windows_Server <br><br> Possible values for Linux Server operating system are: <br><br> RHEL_BYOS (for RHEL) <br><br> SLES_BYOS (for SUSE) <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/windows/hybrid-use-benefit-licensing) <br><br> [Azure Hybrid Use Benefit for Linux Server](https://docs.microsoft.com/azure/virtual-machines/linux/azure-hybrid-benefit-linux) <br><br> Minimum api-version: 2015-06-15
	LicenseType *string `pulumi:"licenseType"`
	// Resource location
	Location string `pulumi:"location"`
	// Specifies the network interfaces of the virtual machine.
	NetworkProfile *NetworkProfile `pulumi:"networkProfile"`
	// Specifies the network profile configuration of the virtual machine.
	NetworkProfileConfiguration *VirtualMachineScaleSetVMNetworkProfileConfiguration `pulumi:"networkProfileConfiguration"`
	// Specifies the operating system settings for the virtual machine.
	OsProfile *OSProfile `pulumi:"osProfile"`
	// Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
	Plan *Plan `pulumi:"plan"`
	// Specifies the protection policy of the virtual machine.
	ProtectionPolicy *VirtualMachineScaleSetVMProtectionPolicy `pulumi:"protectionPolicy"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Specifies the Security related profile settings for the virtual machine.
	SecurityProfile *SecurityProfile `pulumi:"securityProfile"`
	// Specifies the storage settings for the virtual machine disks.
	StorageProfile *StorageProfile `pulumi:"storageProfile"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// The name of the VM scale set where the extension should be create or updated.
	VmScaleSetName string `pulumi:"vmScaleSetName"`
}

// The set of arguments for constructing a VirtualMachineScaleSetVM resource.
type VirtualMachineScaleSetVMArgs struct {
	// Specifies additional capabilities enabled or disabled on the virtual machine in the scale set. For instance: whether the virtual machine has the capability to support attaching managed data disks with UltraSSD_LRS storage account type.
	AdditionalCapabilities AdditionalCapabilitiesPtrInput
	// Specifies information about the availability set that the virtual machine should be assigned to. Virtual machines specified in the same availability set are allocated to different nodes to maximize availability. For more information about availability sets, see [Manage the availability of virtual machines](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-manage-availability?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json). <br><br> For more information on Azure planned maintenance, see [Planned maintenance for virtual machines in Azure](https://docs.microsoft.com/azure/virtual-machines/virtual-machines-windows-planned-maintenance?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json) <br><br> Currently, a VM can only be added to availability set at creation time. An existing VM cannot be added to an availability set.
	AvailabilitySet SubResourcePtrInput
	// Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
	DiagnosticsProfile DiagnosticsProfilePtrInput
	// Specifies the hardware settings for the virtual machine.
	HardwareProfile HardwareProfilePtrInput
	// The instance ID of the virtual machine.
	InstanceId pulumi.StringInput
	// Specifies that the image or disk that is being used was licensed on-premises. <br><br> Possible values for Windows Server operating system are: <br><br> Windows_Client <br><br> Windows_Server <br><br> Possible values for Linux Server operating system are: <br><br> RHEL_BYOS (for RHEL) <br><br> SLES_BYOS (for SUSE) <br><br> For more information, see [Azure Hybrid Use Benefit for Windows Server](https://docs.microsoft.com/azure/virtual-machines/windows/hybrid-use-benefit-licensing) <br><br> [Azure Hybrid Use Benefit for Linux Server](https://docs.microsoft.com/azure/virtual-machines/linux/azure-hybrid-benefit-linux) <br><br> Minimum api-version: 2015-06-15
	LicenseType pulumi.StringPtrInput
	// Resource location
	Location pulumi.StringInput
	// Specifies the network interfaces of the virtual machine.
	NetworkProfile NetworkProfilePtrInput
	// Specifies the network profile configuration of the virtual machine.
	NetworkProfileConfiguration VirtualMachineScaleSetVMNetworkProfileConfigurationPtrInput
	// Specifies the operating system settings for the virtual machine.
	OsProfile OSProfilePtrInput
	// Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
	Plan PlanPtrInput
	// Specifies the protection policy of the virtual machine.
	ProtectionPolicy VirtualMachineScaleSetVMProtectionPolicyPtrInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// Specifies the Security related profile settings for the virtual machine.
	SecurityProfile SecurityProfilePtrInput
	// Specifies the storage settings for the virtual machine disks.
	StorageProfile StorageProfilePtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// The name of the VM scale set where the extension should be create or updated.
	VmScaleSetName pulumi.StringInput
}

func (VirtualMachineScaleSetVMArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*virtualMachineScaleSetVMArgs)(nil)).Elem()
}

type VirtualMachineScaleSetVMInput interface {
	pulumi.Input

	ToVirtualMachineScaleSetVMOutput() VirtualMachineScaleSetVMOutput
	ToVirtualMachineScaleSetVMOutputWithContext(ctx context.Context) VirtualMachineScaleSetVMOutput
}

func (*VirtualMachineScaleSetVM) ElementType() reflect.Type {
	return reflect.TypeOf((*VirtualMachineScaleSetVM)(nil))
}

func (i *VirtualMachineScaleSetVM) ToVirtualMachineScaleSetVMOutput() VirtualMachineScaleSetVMOutput {
	return i.ToVirtualMachineScaleSetVMOutputWithContext(context.Background())
}

func (i *VirtualMachineScaleSetVM) ToVirtualMachineScaleSetVMOutputWithContext(ctx context.Context) VirtualMachineScaleSetVMOutput {
	return pulumi.ToOutputWithContext(ctx, i).(VirtualMachineScaleSetVMOutput)
}

type VirtualMachineScaleSetVMOutput struct {
	*pulumi.OutputState
}

func (VirtualMachineScaleSetVMOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*VirtualMachineScaleSetVM)(nil))
}

func (o VirtualMachineScaleSetVMOutput) ToVirtualMachineScaleSetVMOutput() VirtualMachineScaleSetVMOutput {
	return o
}

func (o VirtualMachineScaleSetVMOutput) ToVirtualMachineScaleSetVMOutputWithContext(ctx context.Context) VirtualMachineScaleSetVMOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(VirtualMachineScaleSetVMOutput{})
}
