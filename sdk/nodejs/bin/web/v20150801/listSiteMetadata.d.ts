import * as pulumi from "@pulumi/pulumi";
export declare function listSiteMetadata(args: ListSiteMetadataArgs, opts?: pulumi.InvokeOptions): Promise<ListSiteMetadataResult>;
export interface ListSiteMetadataArgs {
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
export interface ListSiteMetadataResult {
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
