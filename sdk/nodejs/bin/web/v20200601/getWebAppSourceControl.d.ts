import * as pulumi from "@pulumi/pulumi";
export declare function getWebAppSourceControl(args: GetWebAppSourceControlArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppSourceControlResult>;
export interface GetWebAppSourceControlArgs {
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
 * Source control configuration for an app.
 */
export interface GetWebAppSourceControlResult {
    /**
     * Name of branch to use for deployment.
     */
    readonly branch?: string;
    /**
     * <code>true</code> to enable deployment rollback; otherwise, <code>false</code>.
     */
    readonly deploymentRollbackEnabled?: boolean;
    /**
     * <code>true</code> if this is deployed via GitHub action.
     */
    readonly isGitHubAction?: boolean;
    /**
     * <code>true</code> to limit to manual integration; <code>false</code> to enable continuous integration (which configures webhooks into online repos like GitHub).
     */
    readonly isManualIntegration?: boolean;
    /**
     * <code>true</code> for a Mercurial repository; <code>false</code> for a Git repository.
     */
    readonly isMercurial?: boolean;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Repository or source control URL.
     */
    readonly repoUrl?: string;
    /**
     * Resource type.
     */
    readonly type: string;
}
