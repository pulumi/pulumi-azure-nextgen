import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Describes a Virtual Machine Extension.
 */
export declare class VirtualMachineScaleSetVMExtension extends pulumi.CustomResource {
    /**
     * Get an existing VirtualMachineScaleSetVMExtension resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualMachineScaleSetVMExtension;
    /**
     * Returns true if the given object is an instance of VirtualMachineScaleSetVMExtension.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VirtualMachineScaleSetVMExtension;
    /**
     * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
     */
    readonly autoUpgradeMinorVersion: pulumi.Output<boolean | undefined>;
    /**
     * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available.
     */
    readonly enableAutomaticUpgrade: pulumi.Output<boolean | undefined>;
    /**
     * How the extension handler should be forced to update even if the extension configuration has not changed.
     */
    readonly forceUpdateTag: pulumi.Output<string | undefined>;
    /**
     * The virtual machine extension instance view.
     */
    readonly instanceView: pulumi.Output<outputs.compute.v20200601.VirtualMachineExtensionInstanceViewResponse | undefined>;
    /**
     * Resource location
     */
    readonly location: pulumi.Output<string>;
    /**
     * Resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
     */
    readonly protectedSettings: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * The provisioning state, which only appears in the response.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The name of the extension handler publisher.
     */
    readonly publisher: pulumi.Output<string | undefined>;
    /**
     * Json formatted public settings for the extension.
     */
    readonly settings: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * Resource tags
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Specifies the version of the script handler.
     */
    readonly typeHandlerVersion: pulumi.Output<string | undefined>;
    /**
     * Create a VirtualMachineScaleSetVMExtension resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualMachineScaleSetVMExtensionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a VirtualMachineScaleSetVMExtension resource.
 */
export interface VirtualMachineScaleSetVMExtensionArgs {
    /**
     * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
     */
    readonly autoUpgradeMinorVersion?: pulumi.Input<boolean>;
    /**
     * Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available.
     */
    readonly enableAutomaticUpgrade?: pulumi.Input<boolean>;
    /**
     * How the extension handler should be forced to update even if the extension configuration has not changed.
     */
    readonly forceUpdateTag?: pulumi.Input<string>;
    /**
     * The instance ID of the virtual machine.
     */
    readonly instanceId: pulumi.Input<string>;
    /**
     * The virtual machine extension instance view.
     */
    readonly instanceView?: pulumi.Input<inputs.compute.v20200601.VirtualMachineExtensionInstanceView>;
    /**
     * Resource location
     */
    readonly location: pulumi.Input<string>;
    /**
     * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
     */
    readonly protectedSettings?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * The name of the extension handler publisher.
     */
    readonly publisher?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * Json formatted public settings for the extension.
     */
    readonly settings?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * Resource tags
     */
    readonly tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Specifies the type of the extension; an example is "CustomScriptExtension".
     */
    readonly type?: pulumi.Input<string>;
    /**
     * Specifies the version of the script handler.
     */
    readonly typeHandlerVersion?: pulumi.Input<string>;
    /**
     * The name of the virtual machine extension.
     */
    readonly vmExtensionName: pulumi.Input<string>;
    /**
     * The name of the VM scale set.
     */
    readonly vmScaleSetName: pulumi.Input<string>;
}
