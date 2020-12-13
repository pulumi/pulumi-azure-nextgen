// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190701

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupVirtualMachineScaleSetExtension(ctx *pulumi.Context, args *LookupVirtualMachineScaleSetExtensionArgs, opts ...pulumi.InvokeOption) (*LookupVirtualMachineScaleSetExtensionResult, error) {
	var rv LookupVirtualMachineScaleSetExtensionResult
	err := ctx.Invoke("azure-nextgen:compute/v20190701:getVirtualMachineScaleSetExtension", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupVirtualMachineScaleSetExtensionArgs struct {
	// The expand expression to apply on the operation.
	Expand *string `pulumi:"expand"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the VM scale set containing the extension.
	VmScaleSetName string `pulumi:"vmScaleSetName"`
	// The name of the VM scale set extension.
	VmssExtensionName string `pulumi:"vmssExtensionName"`
}

// Describes a Virtual Machine Scale Set Extension.
type LookupVirtualMachineScaleSetExtensionResult struct {
	// Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
	AutoUpgradeMinorVersion *bool `pulumi:"autoUpgradeMinorVersion"`
	// If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed.
	ForceUpdateTag *string `pulumi:"forceUpdateTag"`
	// Resource Id
	Id string `pulumi:"id"`
	// The name of the extension.
	Name *string `pulumi:"name"`
	// The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
	ProtectedSettings interface{} `pulumi:"protectedSettings"`
	// Collection of extension names after which this extension needs to be provisioned.
	ProvisionAfterExtensions []string `pulumi:"provisionAfterExtensions"`
	// The provisioning state, which only appears in the response.
	ProvisioningState string `pulumi:"provisioningState"`
	// The name of the extension handler publisher.
	Publisher *string `pulumi:"publisher"`
	// Json formatted public settings for the extension.
	Settings interface{} `pulumi:"settings"`
	// Resource type
	Type string `pulumi:"type"`
	// Specifies the version of the script handler.
	TypeHandlerVersion *string `pulumi:"typeHandlerVersion"`
}
