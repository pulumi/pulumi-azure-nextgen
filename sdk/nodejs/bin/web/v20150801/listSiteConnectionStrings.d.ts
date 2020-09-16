import * as pulumi from "@pulumi/pulumi";
export declare function listSiteConnectionStrings(args: ListSiteConnectionStringsArgs, opts?: pulumi.InvokeOptions): Promise<ListSiteConnectionStringsResult>;
export interface ListSiteConnectionStringsArgs {
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
export interface ListSiteConnectionStringsResult {
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
