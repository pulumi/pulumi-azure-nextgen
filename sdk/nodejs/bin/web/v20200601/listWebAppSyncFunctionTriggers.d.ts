import * as pulumi from "@pulumi/pulumi";
export declare function listWebAppSyncFunctionTriggers(args: ListWebAppSyncFunctionTriggersArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppSyncFunctionTriggersResult>;
export interface ListWebAppSyncFunctionTriggersArgs {
    /**
     * Name of the app.
     */
    readonly name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
}
/**
 * Function secrets.
 */
export interface ListWebAppSyncFunctionTriggersResult {
    /**
     * Secret key.
     */
    readonly key?: string;
    /**
     * Trigger URL.
     */
    readonly triggerUrl?: string;
}
