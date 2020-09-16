import * as pulumi from "@pulumi/pulumi";
export declare function listManagerActivationKey(args: ListManagerActivationKeyArgs, opts?: pulumi.InvokeOptions): Promise<ListManagerActivationKeyResult>;
export interface ListManagerActivationKeyArgs {
    /**
     * The manager name
     */
    readonly managerName: string;
    /**
     * The resource group name
     */
    readonly resourceGroupName: string;
}
/**
 * The key.
 */
export interface ListManagerActivationKeyResult {
    /**
     * The activation key for the device.
     */
    readonly activationKey: string;
}
