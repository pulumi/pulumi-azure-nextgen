// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20181001

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupVirtualMachineScaleSet(ctx *pulumi.Context, args *LookupVirtualMachineScaleSetArgs, opts ...pulumi.InvokeOption) (*LookupVirtualMachineScaleSetResult, error) {
	var rv LookupVirtualMachineScaleSetResult
	err := ctx.Invoke("azure-nextgen:compute/v20181001:getVirtualMachineScaleSet", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupVirtualMachineScaleSetArgs struct {
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the VM scale set.
	VmScaleSetName string `pulumi:"vmScaleSetName"`
}

// Describes a Virtual Machine Scale Set.
type LookupVirtualMachineScaleSetResult struct {
	// Policy for automatic repairs.
	AutomaticRepairsPolicy *AutomaticRepairsPolicyResponse `pulumi:"automaticRepairsPolicy"`
	// When Overprovision is enabled, extensions are launched only on the requested number of VMs which are finally kept. This property will hence ensure that the extensions do not run on the extra overprovisioned VMs.
	DoNotRunExtensionsOnOverprovisionedVMs *bool `pulumi:"doNotRunExtensionsOnOverprovisionedVMs"`
	// Resource Id
	Id string `pulumi:"id"`
	// The identity of the virtual machine scale set, if configured.
	Identity *VirtualMachineScaleSetIdentityResponse `pulumi:"identity"`
	// Resource location
	Location string `pulumi:"location"`
	// Resource name
	Name string `pulumi:"name"`
	// Specifies whether the Virtual Machine Scale Set should be overprovisioned.
	Overprovision *bool `pulumi:"overprovision"`
	// Specifies information about the marketplace image used to create the virtual machine. This element is only used for marketplace images. Before you can use a marketplace image from an API, you must enable the image for programmatic use.  In the Azure portal, find the marketplace image that you want to use and then click **Want to deploy programmatically, Get Started ->**. Enter any required information and then click **Save**.
	Plan *PlanResponse `pulumi:"plan"`
	// Fault Domain count for each placement group.
	PlatformFaultDomainCount *int `pulumi:"platformFaultDomainCount"`
	// The provisioning state, which only appears in the response.
	ProvisioningState string `pulumi:"provisioningState"`
	// Specifies information about the proximity placement group that the virtual machine scale set should be assigned to. <br><br>Minimum api-version: 2018-04-01.
	ProximityPlacementGroup *SubResourceResponse `pulumi:"proximityPlacementGroup"`
	// When true this limits the scale set to a single placement group, of max size 100 virtual machines.
	SinglePlacementGroup *bool `pulumi:"singlePlacementGroup"`
	// The virtual machine scale set sku.
	Sku *SkuResponse `pulumi:"sku"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type string `pulumi:"type"`
	// Specifies the ID which uniquely identifies a Virtual Machine Scale Set.
	UniqueId string `pulumi:"uniqueId"`
	// The upgrade policy.
	UpgradePolicy *UpgradePolicyResponse `pulumi:"upgradePolicy"`
	// The virtual machine profile.
	VirtualMachineProfile *VirtualMachineScaleSetVMProfileResponse `pulumi:"virtualMachineProfile"`
	// Whether to force strictly even Virtual Machine distribution cross x-zones in case there is zone outage.
	ZoneBalance *bool `pulumi:"zoneBalance"`
	// The virtual machine scale set zones. NOTE: Availability zones can only be set when you create the scale set.
	Zones []string `pulumi:"zones"`
}
