// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package latest

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Describes a Virtual Machine Scale Set.
type VirtualMachineScaleSet struct {
	pulumi.CustomResourceState

	// Specifies additional capabilities enabled or disabled on the Virtual Machines in the Virtual Machine Scale Set. For instance: whether the Virtual Machines have the capability to support attaching managed data disks with UltraSSD_LRS storage account type.
	AdditionalCapabilities AdditionalCapabilitiesResponsePtrOutput `pulumi:"additionalCapabilities"`
	// Policy for automatic repairs.
	AutomaticRepairsPolicy AutomaticRepairsPolicyResponsePtrOutput `pulumi:"automaticRepairsPolicy"`
	// When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs.
	DoNotRunExtensionsOnOverprovisionedVMs pulumi.BoolPtrOutput `pulumi:"doNotRunExtensionsOnOverprovisionedVMs"`
	// Specifies information about the dedicated host group that the virtual machine scale set resides in. <br><br>Minimum api-version: 2020-06-01.
	HostGroup SubResourceResponsePtrOutput `pulumi:"hostGroup"`
	// The identity of the virtual machine scale set, if configured.
	Identity VirtualMachineScaleSetIdentityResponsePtrOutput `pulumi:"identity"`
	// Resource location
	Location pulumi.StringOutput `pulumi:"location"`
	// Resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// Specifies whether the Virtual Machine Scale Set should be overprovisioned.
	Overprovision pulumi.BoolPtrOutput `pulumi:"overprovision"`
	// Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
	Plan PlanResponsePtrOutput `pulumi:"plan"`
	// Fault Domain count for each placement group.
	PlatformFaultDomainCount pulumi.IntPtrOutput `pulumi:"platformFaultDomainCount"`
	// The provisioning state, which only appears in the response.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// Specifies information about the proximity placement group that the virtual machine scale set should be assigned to. <br><br>Minimum api-version: 2018-04-01.
	ProximityPlacementGroup SubResourceResponsePtrOutput `pulumi:"proximityPlacementGroup"`
	// Specifies the scale-in policy that decides which virtual machines are chosen for removal when a Virtual Machine Scale Set is scaled-in.
	ScaleInPolicy ScaleInPolicyResponsePtrOutput `pulumi:"scaleInPolicy"`
	// When true this limits the scale set to a single placement group, of max size 100 virtual machines. NOTE: If singlePlacementGroup is true, it may be modified to false. However, if singlePlacementGroup is false, it may not be modified to true.
	SinglePlacementGroup pulumi.BoolPtrOutput `pulumi:"singlePlacementGroup"`
	// The virtual machine scale set sku.
	Sku SkuResponsePtrOutput `pulumi:"sku"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
	// Specifies the ID which uniquely identifies a Virtual Machine Scale Set.
	UniqueId pulumi.StringOutput `pulumi:"uniqueId"`
	// The upgrade policy.
	UpgradePolicy UpgradePolicyResponsePtrOutput `pulumi:"upgradePolicy"`
	// The virtual machine profile.
	VirtualMachineProfile VirtualMachineScaleSetVMProfileResponsePtrOutput `pulumi:"virtualMachineProfile"`
	// Whether to force strictly even Virtual Machine distribution cross x-zones in case there is zone outage.
	ZoneBalance pulumi.BoolPtrOutput `pulumi:"zoneBalance"`
	// The virtual machine scale set zones. NOTE: Availability zones can only be set when you create the scale set
	Zones pulumi.StringArrayOutput `pulumi:"zones"`
}

// NewVirtualMachineScaleSet registers a new resource with the given unique name, arguments, and options.
func NewVirtualMachineScaleSet(ctx *pulumi.Context,
	name string, args *VirtualMachineScaleSetArgs, opts ...pulumi.ResourceOption) (*VirtualMachineScaleSet, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
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
			Type: pulumi.String("azure-nextgen:compute/v20150615:VirtualMachineScaleSet"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20160330:VirtualMachineScaleSet"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20160430preview:VirtualMachineScaleSet"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20170330:VirtualMachineScaleSet"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20171201:VirtualMachineScaleSet"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20180401:VirtualMachineScaleSet"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20180601:VirtualMachineScaleSet"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20181001:VirtualMachineScaleSet"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20190301:VirtualMachineScaleSet"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20190701:VirtualMachineScaleSet"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20191201:VirtualMachineScaleSet"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20200601:VirtualMachineScaleSet"),
		},
	})
	opts = append(opts, aliases)
	var resource VirtualMachineScaleSet
	err := ctx.RegisterResource("azure-nextgen:compute/latest:VirtualMachineScaleSet", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetVirtualMachineScaleSet gets an existing VirtualMachineScaleSet resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetVirtualMachineScaleSet(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *VirtualMachineScaleSetState, opts ...pulumi.ResourceOption) (*VirtualMachineScaleSet, error) {
	var resource VirtualMachineScaleSet
	err := ctx.ReadResource("azure-nextgen:compute/latest:VirtualMachineScaleSet", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering VirtualMachineScaleSet resources.
type virtualMachineScaleSetState struct {
	// Specifies additional capabilities enabled or disabled on the Virtual Machines in the Virtual Machine Scale Set. For instance: whether the Virtual Machines have the capability to support attaching managed data disks with UltraSSD_LRS storage account type.
	AdditionalCapabilities *AdditionalCapabilitiesResponse `pulumi:"additionalCapabilities"`
	// Policy for automatic repairs.
	AutomaticRepairsPolicy *AutomaticRepairsPolicyResponse `pulumi:"automaticRepairsPolicy"`
	// When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs.
	DoNotRunExtensionsOnOverprovisionedVMs *bool `pulumi:"doNotRunExtensionsOnOverprovisionedVMs"`
	// Specifies information about the dedicated host group that the virtual machine scale set resides in. <br><br>Minimum api-version: 2020-06-01.
	HostGroup *SubResourceResponse `pulumi:"hostGroup"`
	// The identity of the virtual machine scale set, if configured.
	Identity *VirtualMachineScaleSetIdentityResponse `pulumi:"identity"`
	// Resource location
	Location *string `pulumi:"location"`
	// Resource name
	Name *string `pulumi:"name"`
	// Specifies whether the Virtual Machine Scale Set should be overprovisioned.
	Overprovision *bool `pulumi:"overprovision"`
	// Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
	Plan *PlanResponse `pulumi:"plan"`
	// Fault Domain count for each placement group.
	PlatformFaultDomainCount *int `pulumi:"platformFaultDomainCount"`
	// The provisioning state, which only appears in the response.
	ProvisioningState *string `pulumi:"provisioningState"`
	// Specifies information about the proximity placement group that the virtual machine scale set should be assigned to. <br><br>Minimum api-version: 2018-04-01.
	ProximityPlacementGroup *SubResourceResponse `pulumi:"proximityPlacementGroup"`
	// Specifies the scale-in policy that decides which virtual machines are chosen for removal when a Virtual Machine Scale Set is scaled-in.
	ScaleInPolicy *ScaleInPolicyResponse `pulumi:"scaleInPolicy"`
	// When true this limits the scale set to a single placement group, of max size 100 virtual machines. NOTE: If singlePlacementGroup is true, it may be modified to false. However, if singlePlacementGroup is false, it may not be modified to true.
	SinglePlacementGroup *bool `pulumi:"singlePlacementGroup"`
	// The virtual machine scale set sku.
	Sku *SkuResponse `pulumi:"sku"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type *string `pulumi:"type"`
	// Specifies the ID which uniquely identifies a Virtual Machine Scale Set.
	UniqueId *string `pulumi:"uniqueId"`
	// The upgrade policy.
	UpgradePolicy *UpgradePolicyResponse `pulumi:"upgradePolicy"`
	// The virtual machine profile.
	VirtualMachineProfile *VirtualMachineScaleSetVMProfileResponse `pulumi:"virtualMachineProfile"`
	// Whether to force strictly even Virtual Machine distribution cross x-zones in case there is zone outage.
	ZoneBalance *bool `pulumi:"zoneBalance"`
	// The virtual machine scale set zones. NOTE: Availability zones can only be set when you create the scale set
	Zones []string `pulumi:"zones"`
}

type VirtualMachineScaleSetState struct {
	// Specifies additional capabilities enabled or disabled on the Virtual Machines in the Virtual Machine Scale Set. For instance: whether the Virtual Machines have the capability to support attaching managed data disks with UltraSSD_LRS storage account type.
	AdditionalCapabilities AdditionalCapabilitiesResponsePtrInput
	// Policy for automatic repairs.
	AutomaticRepairsPolicy AutomaticRepairsPolicyResponsePtrInput
	// When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs.
	DoNotRunExtensionsOnOverprovisionedVMs pulumi.BoolPtrInput
	// Specifies information about the dedicated host group that the virtual machine scale set resides in. <br><br>Minimum api-version: 2020-06-01.
	HostGroup SubResourceResponsePtrInput
	// The identity of the virtual machine scale set, if configured.
	Identity VirtualMachineScaleSetIdentityResponsePtrInput
	// Resource location
	Location pulumi.StringPtrInput
	// Resource name
	Name pulumi.StringPtrInput
	// Specifies whether the Virtual Machine Scale Set should be overprovisioned.
	Overprovision pulumi.BoolPtrInput
	// Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
	Plan PlanResponsePtrInput
	// Fault Domain count for each placement group.
	PlatformFaultDomainCount pulumi.IntPtrInput
	// The provisioning state, which only appears in the response.
	ProvisioningState pulumi.StringPtrInput
	// Specifies information about the proximity placement group that the virtual machine scale set should be assigned to. <br><br>Minimum api-version: 2018-04-01.
	ProximityPlacementGroup SubResourceResponsePtrInput
	// Specifies the scale-in policy that decides which virtual machines are chosen for removal when a Virtual Machine Scale Set is scaled-in.
	ScaleInPolicy ScaleInPolicyResponsePtrInput
	// When true this limits the scale set to a single placement group, of max size 100 virtual machines. NOTE: If singlePlacementGroup is true, it may be modified to false. However, if singlePlacementGroup is false, it may not be modified to true.
	SinglePlacementGroup pulumi.BoolPtrInput
	// The virtual machine scale set sku.
	Sku SkuResponsePtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// Resource type
	Type pulumi.StringPtrInput
	// Specifies the ID which uniquely identifies a Virtual Machine Scale Set.
	UniqueId pulumi.StringPtrInput
	// The upgrade policy.
	UpgradePolicy UpgradePolicyResponsePtrInput
	// The virtual machine profile.
	VirtualMachineProfile VirtualMachineScaleSetVMProfileResponsePtrInput
	// Whether to force strictly even Virtual Machine distribution cross x-zones in case there is zone outage.
	ZoneBalance pulumi.BoolPtrInput
	// The virtual machine scale set zones. NOTE: Availability zones can only be set when you create the scale set
	Zones pulumi.StringArrayInput
}

func (VirtualMachineScaleSetState) ElementType() reflect.Type {
	return reflect.TypeOf((*virtualMachineScaleSetState)(nil)).Elem()
}

type virtualMachineScaleSetArgs struct {
	// Specifies additional capabilities enabled or disabled on the Virtual Machines in the Virtual Machine Scale Set. For instance: whether the Virtual Machines have the capability to support attaching managed data disks with UltraSSD_LRS storage account type.
	AdditionalCapabilities *AdditionalCapabilities `pulumi:"additionalCapabilities"`
	// Policy for automatic repairs.
	AutomaticRepairsPolicy *AutomaticRepairsPolicy `pulumi:"automaticRepairsPolicy"`
	// When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs.
	DoNotRunExtensionsOnOverprovisionedVMs *bool `pulumi:"doNotRunExtensionsOnOverprovisionedVMs"`
	// Specifies information about the dedicated host group that the virtual machine scale set resides in. <br><br>Minimum api-version: 2020-06-01.
	HostGroup *SubResource `pulumi:"hostGroup"`
	// The identity of the virtual machine scale set, if configured.
	Identity *VirtualMachineScaleSetIdentity `pulumi:"identity"`
	// Resource location
	Location string `pulumi:"location"`
	// Specifies whether the Virtual Machine Scale Set should be overprovisioned.
	Overprovision *bool `pulumi:"overprovision"`
	// Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
	Plan *Plan `pulumi:"plan"`
	// Fault Domain count for each placement group.
	PlatformFaultDomainCount *int `pulumi:"platformFaultDomainCount"`
	// Specifies information about the proximity placement group that the virtual machine scale set should be assigned to. <br><br>Minimum api-version: 2018-04-01.
	ProximityPlacementGroup *SubResource `pulumi:"proximityPlacementGroup"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Specifies the scale-in policy that decides which virtual machines are chosen for removal when a Virtual Machine Scale Set is scaled-in.
	ScaleInPolicy *ScaleInPolicy `pulumi:"scaleInPolicy"`
	// When true this limits the scale set to a single placement group, of max size 100 virtual machines. NOTE: If singlePlacementGroup is true, it may be modified to false. However, if singlePlacementGroup is false, it may not be modified to true.
	SinglePlacementGroup *bool `pulumi:"singlePlacementGroup"`
	// The virtual machine scale set sku.
	Sku *Sku `pulumi:"sku"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// The upgrade policy.
	UpgradePolicy *UpgradePolicy `pulumi:"upgradePolicy"`
	// The virtual machine profile.
	VirtualMachineProfile *VirtualMachineScaleSetVMProfile `pulumi:"virtualMachineProfile"`
	// The name of the VM scale set to create or update.
	VmScaleSetName string `pulumi:"vmScaleSetName"`
	// Whether to force strictly even Virtual Machine distribution cross x-zones in case there is zone outage.
	ZoneBalance *bool `pulumi:"zoneBalance"`
	// The virtual machine scale set zones. NOTE: Availability zones can only be set when you create the scale set
	Zones []string `pulumi:"zones"`
}

// The set of arguments for constructing a VirtualMachineScaleSet resource.
type VirtualMachineScaleSetArgs struct {
	// Specifies additional capabilities enabled or disabled on the Virtual Machines in the Virtual Machine Scale Set. For instance: whether the Virtual Machines have the capability to support attaching managed data disks with UltraSSD_LRS storage account type.
	AdditionalCapabilities AdditionalCapabilitiesPtrInput
	// Policy for automatic repairs.
	AutomaticRepairsPolicy AutomaticRepairsPolicyPtrInput
	// When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs.
	DoNotRunExtensionsOnOverprovisionedVMs pulumi.BoolPtrInput
	// Specifies information about the dedicated host group that the virtual machine scale set resides in. <br><br>Minimum api-version: 2020-06-01.
	HostGroup SubResourcePtrInput
	// The identity of the virtual machine scale set, if configured.
	Identity VirtualMachineScaleSetIdentityPtrInput
	// Resource location
	Location pulumi.StringInput
	// Specifies whether the Virtual Machine Scale Set should be overprovisioned.
	Overprovision pulumi.BoolPtrInput
	// Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
	Plan PlanPtrInput
	// Fault Domain count for each placement group.
	PlatformFaultDomainCount pulumi.IntPtrInput
	// Specifies information about the proximity placement group that the virtual machine scale set should be assigned to. <br><br>Minimum api-version: 2018-04-01.
	ProximityPlacementGroup SubResourcePtrInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// Specifies the scale-in policy that decides which virtual machines are chosen for removal when a Virtual Machine Scale Set is scaled-in.
	ScaleInPolicy ScaleInPolicyPtrInput
	// When true this limits the scale set to a single placement group, of max size 100 virtual machines. NOTE: If singlePlacementGroup is true, it may be modified to false. However, if singlePlacementGroup is false, it may not be modified to true.
	SinglePlacementGroup pulumi.BoolPtrInput
	// The virtual machine scale set sku.
	Sku SkuPtrInput
	// Resource tags
	Tags pulumi.StringMapInput
	// The upgrade policy.
	UpgradePolicy UpgradePolicyPtrInput
	// The virtual machine profile.
	VirtualMachineProfile VirtualMachineScaleSetVMProfilePtrInput
	// The name of the VM scale set to create or update.
	VmScaleSetName pulumi.StringInput
	// Whether to force strictly even Virtual Machine distribution cross x-zones in case there is zone outage.
	ZoneBalance pulumi.BoolPtrInput
	// The virtual machine scale set zones. NOTE: Availability zones can only be set when you create the scale set
	Zones pulumi.StringArrayInput
}

func (VirtualMachineScaleSetArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*virtualMachineScaleSetArgs)(nil)).Elem()
}

type VirtualMachineScaleSetInput interface {
	pulumi.Input

	ToVirtualMachineScaleSetOutput() VirtualMachineScaleSetOutput
	ToVirtualMachineScaleSetOutputWithContext(ctx context.Context) VirtualMachineScaleSetOutput
}

func (VirtualMachineScaleSet) ElementType() reflect.Type {
	return reflect.TypeOf((*VirtualMachineScaleSet)(nil)).Elem()
}

func (i VirtualMachineScaleSet) ToVirtualMachineScaleSetOutput() VirtualMachineScaleSetOutput {
	return i.ToVirtualMachineScaleSetOutputWithContext(context.Background())
}

func (i VirtualMachineScaleSet) ToVirtualMachineScaleSetOutputWithContext(ctx context.Context) VirtualMachineScaleSetOutput {
	return pulumi.ToOutputWithContext(ctx, i).(VirtualMachineScaleSetOutput)
}

type VirtualMachineScaleSetOutput struct {
	*pulumi.OutputState
}

func (VirtualMachineScaleSetOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*VirtualMachineScaleSetOutput)(nil)).Elem()
}

func (o VirtualMachineScaleSetOutput) ToVirtualMachineScaleSetOutput() VirtualMachineScaleSetOutput {
	return o
}

func (o VirtualMachineScaleSetOutput) ToVirtualMachineScaleSetOutputWithContext(ctx context.Context) VirtualMachineScaleSetOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(VirtualMachineScaleSetOutput{})
}
