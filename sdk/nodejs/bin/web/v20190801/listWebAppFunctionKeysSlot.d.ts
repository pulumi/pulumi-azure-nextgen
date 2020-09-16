import * as pulumi from "@pulumi/pulumi";
export declare function listWebAppFunctionKeysSlot(args: ListWebAppFunctionKeysSlotArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppFunctionKeysSlotResult>;
export interface ListWebAppFunctionKeysSlotArgs {
    /**
     * Function name.
     */
    readonly functionName: string;
    /**
     * Site name.
     */
    readonly name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
    /**
     * Name of the deployment slot.
     */
    readonly slot: string;
}
/**
 * String dictionary resource.
 */
export interface ListWebAppFunctionKeysSlotResult {
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
