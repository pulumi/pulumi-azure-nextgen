import * as pulumi from "@pulumi/pulumi";
export declare function getWebAppSiteExtension(args: GetWebAppSiteExtensionArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppSiteExtensionResult>;
export interface GetWebAppSiteExtensionArgs {
    /**
     * Site name.
     */
    readonly name: string;
    /**
     * Name of the resource group to which the resource belongs.
     */
    readonly resourceGroupName: string;
    /**
     * Site extension name.
     */
    readonly siteExtensionId: string;
}
/**
 * Site Extension Information.
 */
export interface GetWebAppSiteExtensionResult {
    /**
     * List of authors.
     */
    readonly authors?: string[];
    /**
     * Site Extension comment.
     */
    readonly comment?: string;
    /**
     * Detailed description.
     */
    readonly description?: string;
    /**
     * Count of downloads.
     */
    readonly downloadCount?: number;
    /**
     * Site extension ID.
     */
    readonly extensionId?: string;
    /**
     * Site extension type.
     */
    readonly extensionType?: string;
    /**
     * Extension URL.
     */
    readonly extensionUrl?: string;
    /**
     * Feed URL.
     */
    readonly feedUrl?: string;
    /**
     * Icon URL.
     */
    readonly iconUrl?: string;
    /**
     * Installed timestamp.
     */
    readonly installedDateTime?: string;
    /**
     * Installer command line parameters.
     */
    readonly installerCommandLineParams?: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * License URL.
     */
    readonly licenseUrl?: string;
    /**
     * <code>true</code> if the local version is the latest version; <code>false</code> otherwise.
     */
    readonly localIsLatestVersion?: boolean;
    /**
     * Local path.
     */
    readonly localPath?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Project URL.
     */
    readonly projectUrl?: string;
    /**
     * Provisioning state.
     */
    readonly provisioningState?: string;
    /**
     * Published timestamp.
     */
    readonly publishedDateTime?: string;
    /**
     * Summary description.
     */
    readonly summary?: string;
    readonly title?: string;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * Version information.
     */
    readonly version?: string;
}
