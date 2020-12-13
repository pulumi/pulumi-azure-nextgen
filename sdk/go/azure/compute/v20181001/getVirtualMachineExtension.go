// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20181001

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupVirtualMachineExtension(ctx *pulumi.Context, args *LookupVirtualMachineExtensionArgs, opts ...pulumi.InvokeOption) (*LookupVirtualMachineExtensionResult, error) {
	var rv LookupVirtualMachineExtensionResult
	err := ctx.Invoke("azure-nextgen:compute/v20181001:getVirtualMachineExtension", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupVirtualMachineExtensionArgs struct {
	// The expand expression to apply on the operation.
	Expand *string `pulumi:"expand"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The name of the virtual machine extension.
	VmExtensionName string `pulumi:"vmExtensionName"`
	// The name of the virtual machine containing the extension.
	VmName string `pulumi:"vmName"`
}

// Describes a Virtual Machine Extension.
type LookupVirtualMachineExtensionResult struct {
	// Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
	AutoUpgradeMinorVersion *bool `pulumi:"autoUpgradeMinorVersion"`
	// How the extension handler should be forced to update even if the extension configuration has not changed.
	ForceUpdateTag *string `pulumi:"forceUpdateTag"`
	// Resource Id
	Id string `pulumi:"id"`
	// The virtual machine extension instance view.
	InstanceView *VirtualMachineExtensionInstanceViewResponse `pulumi:"instanceView"`
	// Resource location
	Location string `pulumi:"location"`
	// Resource name
	Name string `pulumi:"name"`
	// The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
	ProtectedSettings interface{} `pulumi:"protectedSettings"`
	// The provisioning state, which only appears in the response.
	ProvisioningState string `pulumi:"provisioningState"`
	// The name of the extension handler publisher.
	Publisher *string `pulumi:"publisher"`
	// Json formatted public settings for the extension.
	Settings interface{} `pulumi:"settings"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type string `pulumi:"type"`
	// Specifies the version of the script handler.
	TypeHandlerVersion *string `pulumi:"typeHandlerVersion"`
}
