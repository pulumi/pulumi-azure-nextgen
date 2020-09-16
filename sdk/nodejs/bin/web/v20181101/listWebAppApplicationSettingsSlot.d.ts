import * as pulumi from "@pulumi/pulumi";
export declare function listWebAppApplicationSettingsSlot(args: ListWebAppApplicationSettingsSlotArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppApplicationSettingsSlotResult>;
export interface ListWebAppApplicationSettingsSlotArgs {
    /**
     * Name of the app.
     */
    readonly name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get the application settings for the production slot.
     */
    readonly slot: string;
}
/**
 * String dictionary resource.
 */
export interface ListWebAppApplicationSettingsSlotResult {
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
