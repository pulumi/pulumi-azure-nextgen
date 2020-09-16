import * as pulumi from "@pulumi/pulumi";
export declare function listWebAppConnectionStringsSlot(args: ListWebAppConnectionStringsSlotArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppConnectionStringsSlotResult>;
export interface ListWebAppConnectionStringsSlotArgs {
    /**
     * Name of the app.
     */
    readonly name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get the connection settings for the production slot.
     */
    readonly slot: string;
}
/**
 * String dictionary resource.
 */
export interface ListWebAppConnectionStringsSlotResult {
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
