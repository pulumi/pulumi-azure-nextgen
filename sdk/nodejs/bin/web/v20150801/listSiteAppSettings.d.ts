import * as pulumi from "@pulumi/pulumi";
export declare function listSiteAppSettings(args: ListSiteAppSettingsArgs, opts?: pulumi.InvokeOptions): Promise<ListSiteAppSettingsResult>;
export interface ListSiteAppSettingsArgs {
    /**
     * Name of web app
     */
    readonly name: string;
    /**
     * Name of resource group
     */
    readonly resourceGroupName: string;
}
/**
 * String dictionary resource
 */
export interface ListSiteAppSettingsResult {
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
