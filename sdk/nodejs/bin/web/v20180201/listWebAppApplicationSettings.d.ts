import * as pulumi from "@pulumi/pulumi";
export declare function listWebAppApplicationSettings(args: ListWebAppApplicationSettingsArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppApplicationSettingsResult>;
export interface ListWebAppApplicationSettingsArgs {
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
 * String dictionary resource.
 */
export interface ListWebAppApplicationSettingsResult {
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
