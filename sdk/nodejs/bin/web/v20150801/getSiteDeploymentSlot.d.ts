import * as pulumi from "@pulumi/pulumi";
export declare function getSiteDeploymentSlot(args: GetSiteDeploymentSlotArgs, opts?: pulumi.InvokeOptions): Promise<GetSiteDeploymentSlotResult>;
export interface GetSiteDeploymentSlotArgs {
    /**
     * Id of the deployment
     */
    readonly id: string;
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
export interface GetSiteDeploymentSlotResult {
    /**
     * Active
     */
    readonly active?: boolean;
    /**
     * Author
     */
    readonly author?: string;
    /**
     * AuthorEmail
     */
    readonly authorEmail?: string;
    /**
     * Deployer
     */
    readonly deployer?: string;
    /**
     * Detail
     */
    readonly details?: string;
    /**
     * EndTime
     */
    readonly endTime?: string;
    /**
     * Kind of resource
     */
    readonly kind?: string;
    /**
     * Resource Location
     */
    readonly location: string;
    /**
     * Message
     */
    readonly message?: string;
    /**
     * Resource Name
     */
    readonly name?: string;
    /**
     * StartTime
     */
    readonly startTime?: string;
    /**
     * Status
     */
    readonly status?: number;
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
