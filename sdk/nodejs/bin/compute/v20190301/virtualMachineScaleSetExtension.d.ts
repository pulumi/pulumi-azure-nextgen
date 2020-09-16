import * as pulumi from "@pulumi/pulumi";
/**
 * Describes a Virtual Machine Scale Set Extension.
 */
export declare class VirtualMachineScaleSetExtension extends pulumi.CustomResource {
    /**
     * Get an existing VirtualMachineScaleSetExtension resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): VirtualMachineScaleSetExtension;
    /**
     * Returns true if the given object is an instance of VirtualMachineScaleSetExtension.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VirtualMachineScaleSetExtension;
    /**
     * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
     */
    readonly autoUpgradeMinorVersion: pulumi.Output<boolean | undefined>;
    /**
     * If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed.
     */
    readonly forceUpdateTag: pulumi.Output<string | undefined>;
    /**
     * The name of the extension.
     */
    readonly name: pulumi.Output<string | undefined>;
    /**
     * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
     */
    readonly protectedSettings: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * Collection of extension names after which this extension needs to be provisioned.
     */
    readonly provisionAfterExtensions: pulumi.Output<string[] | undefined>;
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
     * Specifies the type of the extension; an example is "CustomScriptExtension".
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * Specifies the version of the script handler.
     */
    readonly typeHandlerVersion: pulumi.Output<string | undefined>;
    /**
     * Create a VirtualMachineScaleSetExtension resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualMachineScaleSetExtensionArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a VirtualMachineScaleSetExtension resource.
 */
export interface VirtualMachineScaleSetExtensionArgs {
    /**
     * Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true.
     */
    readonly autoUpgradeMinorVersion?: pulumi.Input<boolean>;
    /**
     * If a value is provided and is different from the previous value, the extension handler will be forced to update even if the extension configuration has not changed.
     */
    readonly forceUpdateTag?: pulumi.Input<string>;
    /**
     * The name of the extension.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all.
     */
    readonly protectedSettings?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * Collection of extension names after which this extension needs to be provisioned.
     */
    readonly provisionAfterExtensions?: pulumi.Input<pulumi.Input<string>[]>;
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
     * Specifies the type of the extension; an example is "CustomScriptExtension".
     */
    readonly type?: pulumi.Input<string>;
    /**
     * Specifies the version of the script handler.
     */
    readonly typeHandlerVersion?: pulumi.Input<string>;
    /**
     * The name of the VM scale set where the extension should be create or updated.
     */
    readonly vmScaleSetName: pulumi.Input<string>;
    /**
     * The name of the VM scale set extension.
     */
    readonly vmssExtensionName: pulumi.Input<string>;
}
