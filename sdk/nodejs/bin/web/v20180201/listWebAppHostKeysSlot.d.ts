import * as pulumi from "@pulumi/pulumi";
export declare function listWebAppHostKeysSlot(args: ListWebAppHostKeysSlotArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppHostKeysSlotResult>;
export interface ListWebAppHostKeysSlotArgs {
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
 * Functions host level keys.
 */
export interface ListWebAppHostKeysSlotResult {
    /**
     * Host level function keys.
     */
    readonly functionKeys?: {
        [key: string]: string;
    };
    /**
     * Secret key.
     */
    readonly masterKey?: string;
    /**
     * System keys.
     */
    readonly systemKeys?: {
        [key: string]: string;
    };
}
