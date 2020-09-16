import * as pulumi from "@pulumi/pulumi";
export declare function listWebAppFunctionSecretsSlot(args: ListWebAppFunctionSecretsSlotArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppFunctionSecretsSlotResult>;
export interface ListWebAppFunctionSecretsSlotArgs {
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
 * Function secrets.
 */
export interface ListWebAppFunctionSecretsSlotResult {
    /**
     * Secret key.
     */
    readonly key?: string;
    /**
     * Trigger URL.
     */
    readonly triggerUrl?: string;
}
