import * as pulumi from "@pulumi/pulumi";
export declare function listSitePublishingCredentials(args: ListSitePublishingCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListSitePublishingCredentialsResult>;
export interface ListSitePublishingCredentialsArgs {
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
 * Represents user credentials used for publishing activity
 */
export interface ListSitePublishingCredentialsResult {
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
     * Password used for publishing
     */
    readonly publishingPassword?: string;
    /**
     * Username used for publishing
     */
    readonly publishingUserName?: string;
    /**
     * Service Control Manager URI, including username and password
     */
    readonly scmUri?: string;
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
