// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20181001

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// Describes a Virtual Machine Extension.
type VirtualMachineExtension struct {
	pulumi.CustomResourceState

	// Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
	AutoUpgradeMinorVersion pulumi.BoolPtrOutput `pulumi:"autoUpgradeMinorVersion"`
	// How the extension handler should be forced to update even if the extension configuration has not changed.
	ForceUpdateTag pulumi.StringPtrOutput `pulumi:"forceUpdateTag"`
	// The virtual machine extension instance view.
	InstanceView VirtualMachineExtensionInstanceViewResponsePtrOutput `pulumi:"instanceView"`
	// Resource location
	Location pulumi.StringOutput `pulumi:"location"`
	// Resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
	ProtectedSettings pulumi.AnyOutput `pulumi:"protectedSettings"`
	// The provisioning state, which only appears in the response.
	ProvisioningState pulumi.StringOutput `pulumi:"provisioningState"`
	// The name of the extension handler publisher.
	Publisher pulumi.StringPtrOutput `pulumi:"publisher"`
	// Json formatted public settings for the extension.
	Settings pulumi.AnyOutput `pulumi:"settings"`
	// Resource tags
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// Resource type
	Type pulumi.StringOutput `pulumi:"type"`
	// Specifies the version of the script handler.
	TypeHandlerVersion pulumi.StringPtrOutput `pulumi:"typeHandlerVersion"`
}

// NewVirtualMachineExtension registers a new resource with the given unique name, arguments, and options.
func NewVirtualMachineExtension(ctx *pulumi.Context,
	name string, args *VirtualMachineExtensionArgs, opts ...pulumi.ResourceOption) (*VirtualMachineExtension, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Location == nil {
		return nil, errors.New("invalid value for required argument 'Location'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.VmExtensionName == nil {
		return nil, errors.New("invalid value for required argument 'VmExtensionName'")
	}
	if args.VmName == nil {
		return nil, errors.New("invalid value for required argument 'VmName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:compute/latest:VirtualMachineExtension"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20150615:VirtualMachineExtension"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20160330:VirtualMachineExtension"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20160430preview:VirtualMachineExtension"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20170330:VirtualMachineExtension"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20171201:VirtualMachineExtension"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20180401:VirtualMachineExtension"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20180601:VirtualMachineExtension"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20190301:VirtualMachineExtension"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20190701:VirtualMachineExtension"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20191201:VirtualMachineExtension"),
		},
		{
			Type: pulumi.String("azure-nextgen:compute/v20200601:VirtualMachineExtension"),
		},
	})
	opts = append(opts, aliases)
	var resource VirtualMachineExtension
	err := ctx.RegisterResource("azure-nextgen:compute/v20181001:VirtualMachineExtension", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetVirtualMachineExtension gets an existing VirtualMachineExtension resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetVirtualMachineExtension(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *VirtualMachineExtensionState, opts ...pulumi.ResourceOption) (*VirtualMachineExtension, error) {
	var resource VirtualMachineExtension
	err := ctx.ReadResource("azure-nextgen:compute/v20181001:VirtualMachineExtension", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering VirtualMachineExtension resources.
type virtualMachineExtensionState struct {
	// Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
	AutoUpgradeMinorVersion *bool `pulumi:"autoUpgradeMinorVersion"`
	// How the extension handler should be forced to update even if the extension configuration has not changed.
	ForceUpdateTag *string `pulumi:"forceUpdateTag"`
	// The virtual machine extension instance view.
	InstanceView *VirtualMachineExtensionInstanceViewResponse `pulumi:"instanceView"`
	// Resource location
	Location *string `pulumi:"location"`
	// Resource name
	Name *string `pulumi:"name"`
	// The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
	ProtectedSettings interface{} `pulumi:"protectedSettings"`
	// The provisioning state, which only appears in the response.
	ProvisioningState *string `pulumi:"provisioningState"`
	// The name of the extension handler publisher.
	Publisher *string `pulumi:"publisher"`
	// Json formatted public settings for the extension.
	Settings interface{} `pulumi:"settings"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Resource type
	Type *string `pulumi:"type"`
	// Specifies the version of the script handler.
	TypeHandlerVersion *string `pulumi:"typeHandlerVersion"`
}

type VirtualMachineExtensionState struct {
	// Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
	AutoUpgradeMinorVersion pulumi.BoolPtrInput
	// How the extension handler should be forced to update even if the extension configuration has not changed.
	ForceUpdateTag pulumi.StringPtrInput
	// The virtual machine extension instance view.
	InstanceView VirtualMachineExtensionInstanceViewResponsePtrInput
	// Resource location
	Location pulumi.StringPtrInput
	// Resource name
	Name pulumi.StringPtrInput
	// The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
	ProtectedSettings pulumi.Input
	// The provisioning state, which only appears in the response.
	ProvisioningState pulumi.StringPtrInput
	// The name of the extension handler publisher.
	Publisher pulumi.StringPtrInput
	// Json formatted public settings for the extension.
	Settings pulumi.Input
	// Resource tags
	Tags pulumi.StringMapInput
	// Resource type
	Type pulumi.StringPtrInput
	// Specifies the version of the script handler.
	TypeHandlerVersion pulumi.StringPtrInput
}

func (VirtualMachineExtensionState) ElementType() reflect.Type {
	return reflect.TypeOf((*virtualMachineExtensionState)(nil)).Elem()
}

type virtualMachineExtensionArgs struct {
	// Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
	AutoUpgradeMinorVersion *bool `pulumi:"autoUpgradeMinorVersion"`
	// How the extension handler should be forced to update even if the extension configuration has not changed.
	ForceUpdateTag *string `pulumi:"forceUpdateTag"`
	// The virtual machine extension instance view.
	InstanceView *VirtualMachineExtensionInstanceView `pulumi:"instanceView"`
	// Resource location
	Location string `pulumi:"location"`
	// The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
	ProtectedSettings interface{} `pulumi:"protectedSettings"`
	// The name of the extension handler publisher.
	Publisher *string `pulumi:"publisher"`
	// The name of the resource group.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Json formatted public settings for the extension.
	Settings interface{} `pulumi:"settings"`
	// Resource tags
	Tags map[string]string `pulumi:"tags"`
	// Specifies the type of the extension; an example is "CustomScriptExtension".
	Type *string `pulumi:"type"`
	// Specifies the version of the script handler.
	TypeHandlerVersion *string `pulumi:"typeHandlerVersion"`
	// The name of the virtual machine extension.
	VmExtensionName string `pulumi:"vmExtensionName"`
	// The name of the virtual machine where the extension should be created or updated.
	VmName string `pulumi:"vmName"`
}

// The set of arguments for constructing a VirtualMachineExtension resource.
type VirtualMachineExtensionArgs struct {
	// Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
	AutoUpgradeMinorVersion pulumi.BoolPtrInput
	// How the extension handler should be forced to update even if the extension configuration has not changed.
	ForceUpdateTag pulumi.StringPtrInput
	// The virtual machine extension instance view.
	InstanceView VirtualMachineExtensionInstanceViewPtrInput
	// Resource location
	Location pulumi.StringInput
	// The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
	ProtectedSettings pulumi.Input
	// The name of the extension handler publisher.
	Publisher pulumi.StringPtrInput
	// The name of the resource group.
	ResourceGroupName pulumi.StringInput
	// Json formatted public settings for the extension.
	Settings pulumi.Input
	// Resource tags
	Tags pulumi.StringMapInput
	// Specifies the type of the extension; an example is "CustomScriptExtension".
	Type pulumi.StringPtrInput
	// Specifies the version of the script handler.
	TypeHandlerVersion pulumi.StringPtrInput
	// The name of the virtual machine extension.
	VmExtensionName pulumi.StringInput
	// The name of the virtual machine where the extension should be created or updated.
	VmName pulumi.StringInput
}

func (VirtualMachineExtensionArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*virtualMachineExtensionArgs)(nil)).Elem()
}

type VirtualMachineExtensionInput interface {
	pulumi.Input

	ToVirtualMachineExtensionOutput() VirtualMachineExtensionOutput
	ToVirtualMachineExtensionOutputWithContext(ctx context.Context) VirtualMachineExtensionOutput
}

func (*VirtualMachineExtension) ElementType() reflect.Type {
	return reflect.TypeOf((*VirtualMachineExtension)(nil))
}

func (i *VirtualMachineExtension) ToVirtualMachineExtensionOutput() VirtualMachineExtensionOutput {
	return i.ToVirtualMachineExtensionOutputWithContext(context.Background())
}

func (i *VirtualMachineExtension) ToVirtualMachineExtensionOutputWithContext(ctx context.Context) VirtualMachineExtensionOutput {
	return pulumi.ToOutputWithContext(ctx, i).(VirtualMachineExtensionOutput)
}

type VirtualMachineExtensionOutput struct {
	*pulumi.OutputState
}

func (VirtualMachineExtensionOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*VirtualMachineExtension)(nil))
}

func (o VirtualMachineExtensionOutput) ToVirtualMachineExtensionOutput() VirtualMachineExtensionOutput {
	return o
}

func (o VirtualMachineExtensionOutput) ToVirtualMachineExtensionOutputWithContext(ctx context.Context) VirtualMachineExtensionOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(VirtualMachineExtensionOutput{})
}
