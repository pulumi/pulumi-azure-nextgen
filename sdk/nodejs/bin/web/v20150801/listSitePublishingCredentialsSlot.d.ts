import * as pulumi from "@pulumi/pulumi";
export declare function listSitePublishingCredentialsSlot(args: ListSitePublishingCredentialsSlotArgs, opts?: pulumi.InvokeOptions): Promise<ListSitePublishingCredentialsSlotResult>;
export interface ListSitePublishingCredentialsSlotArgs {
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
 * Represents user credentials used for publishing activity
 */
export interface ListSitePublishingCredentialsSlotResult {
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
