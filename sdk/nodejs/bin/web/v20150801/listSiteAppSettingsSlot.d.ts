import * as pulumi from "@pulumi/pulumi";
export declare function listSiteAppSettingsSlot(args: ListSiteAppSettingsSlotArgs, opts?: pulumi.InvokeOptions): Promise<ListSiteAppSettingsSlotResult>;
export interface ListSiteAppSettingsSlotArgs {
    /**
     * Name of web app
     */
    readonly name: string;
    /**
     * Name of resource group
     */
    readonly resourceGroupName: string;
    /**
     * Name of web app slot. If not specified then will default to production slot.
     */
    readonly slot: string;
}
/**
 * String dictionary resource
 */
export interface ListSiteAppSettingsSlotResult {
    /**
     * Kind of resource
     */
    readonly kind?: string;
    /**
     * Resource Location
     */
    readonly location: string;
    /**
     * Resource Name
     */
    readonly name?: string;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type?: string;
}
