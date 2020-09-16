import * as pulumi from "@pulumi/pulumi";
export declare function listWebAppSyncFunctionTriggersSlot(args: ListWebAppSyncFunctionTriggersSlotArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppSyncFunctionTriggersSlotResult>;
export interface ListWebAppSyncFunctionTriggersSlotArgs {
    /**
     * Name of the app.
     */
    readonly name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will restore a backup of the production slot.
     */
    readonly slot: string;
}
/**
 * Function secrets.
 */
export interface ListWebAppSyncFunctionTriggersSlotResult {
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
