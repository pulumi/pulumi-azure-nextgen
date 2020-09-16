import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getVirtualMachineScaleSet(args: GetVirtualMachineScaleSetArgs, opts?: pulumi.InvokeOptions): Promise<GetVirtualMachineScaleSetResult>;
export interface GetVirtualMachineScaleSetArgs {
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the VM scale set.
     */
    readonly vmScaleSetName: string;
}
/**
 * Describes a Virtual Machine Scale Set.
 */
export interface GetVirtualMachineScaleSetResult {
    /**
     * The identity of the virtual machine scale set, if configured.
     */
    readonly identity?: outputs.compute.v20160330.VirtualMachineScaleSetIdentityResponse;
    /**
     * Resource location
     */
    readonly location: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Specifies whether the Virtual Machine Scale Set should be overprovisioned.
     */
    readonly overProvision?: boolean;
    /**
     * The provisioning state, which only appears in the response.
     */
    readonly provisioningState: string;
    /**
     * The virtual machine scale set sku.
     */
    readonly sku?: outputs.compute.v20160330.SkuResponse;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type: string;
    /**
     * The upgrade policy.
     */
    readonly upgradePolicy?: outputs.compute.v20160330.UpgradePolicyResponse;
    /**
     * The virtual machine profile.
     */
    readonly virtualMachineProfile?: outputs.compute.v20160330.VirtualMachineScaleSetVMProfileResponse;
}
