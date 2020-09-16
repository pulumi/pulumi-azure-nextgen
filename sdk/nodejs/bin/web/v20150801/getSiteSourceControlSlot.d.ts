import * as pulumi from "@pulumi/pulumi";
export declare function getSiteSourceControlSlot(args: GetSiteSourceControlSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetSiteSourceControlSlotResult>;
export interface GetSiteSourceControlSlotArgs {
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
 * Describes the source control configuration for web app
 */
export interface GetSiteSourceControlSlotResult {
    /**
     * Name of branch to use for deployment
     */
    readonly branch?: string;
    /**
     * Whether to manual or continuous integration
     */
    readonly deploymentRollbackEnabled?: boolean;
    /**
     * Whether to manual or continuous integration
     */
    readonly isManualIntegration?: boolean;
    /**
     * Mercurial or Git repository type
     */
    readonly isMercurial?: boolean;
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
     * Repository or source control url
     */
    readonly repoUrl?: string;
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
