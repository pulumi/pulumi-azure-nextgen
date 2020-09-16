import * as pulumi from "@pulumi/pulumi";
export declare function listWebAppPublishingCredentialsSlot(args: ListWebAppPublishingCredentialsSlotArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppPublishingCredentialsSlotResult>;
export interface ListWebAppPublishingCredentialsSlotArgs {
    /**
     * Name of the app.
     */
    readonly name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
    /**
     * Name of the deployment slot. If a slot is not specified, the API will get the publishing credentials for the production slot.
     */
    readonly slot: string;
}
/**
 * User credentials used for publishing activity.
 */
export interface ListWebAppPublishingCredentialsSlotResult {
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
     * Resource type.
     */
    readonly type: string;
    /**
     * Username
     */
    readonly userName?: string;
}
