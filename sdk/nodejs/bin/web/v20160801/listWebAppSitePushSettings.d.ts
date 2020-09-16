import * as pulumi from "@pulumi/pulumi";
export declare function listWebAppSitePushSettings(args: ListWebAppSitePushSettingsArgs, opts?: pulumi.InvokeOptions): Promise<ListWebAppSitePushSettingsResult>;
export interface ListWebAppSitePushSettingsArgs {
    /**
     * Name of web app.
     */
    readonly name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
}
/**
 * Push settings for the App.
 */
export interface ListWebAppSitePushSettingsResult {
    /**
     * Gets or sets a JSON string containing a list of dynamic tags that will be evaluated from user claims in the push registration endpoint.
     */
    readonly dynamicTagsJson?: string;
    /**
     * Gets or sets a flag indicating whether the Push endpoint is enabled.
     */
    readonly isPushEnabled: boolean;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Gets or sets a JSON string containing a list of tags that are whitelisted for use by the push registration endpoint.
     */
    readonly tagWhitelistJson?: string;
    /**
     * Gets or sets a JSON string containing a list of tags that require user authentication to be used in the push registration endpoint.
     * Tags can consist of alphanumeric characters and the following:
     * '_', '@', '#', '.', ':', '-'.
     * Validation should be performed at the PushRequestHandler.
     */
    readonly tagsRequiringAuth?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
