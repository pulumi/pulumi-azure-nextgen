import * as pulumi from "@pulumi/pulumi";
export declare function listWebAppPublishingCredentials(args: ListWebAppPublishingCredentialsArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppPublishingCredentialsResult>;
export interface ListWebAppPublishingCredentialsArgs {
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
 * User credentials used for publishing activity.
 */
export interface ListWebAppPublishingCredentialsResult {
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Password used for publishing.
     */
    readonly publishingPassword?: string;
    /**
     * Password hash used for publishing.
     */
    readonly publishingPasswordHash?: string;
    /**
     * Password hash salt used for publishing.
     */
    readonly publishingPasswordHashSalt?: string;
    /**
     * Username used for publishing.
     */
    readonly publishingUserName: string;
    /**
     * Url of SCM site.
     */
    readonly scmUri?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
