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
     * Name of the deployment slot. If a slot is not specified, the API deletes a deployment for the production slot.
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
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Trigger URL.
     */
    readonly triggerUrl?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
