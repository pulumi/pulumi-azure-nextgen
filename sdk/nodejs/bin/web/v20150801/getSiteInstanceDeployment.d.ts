import * as pulumi from "@pulumi/pulumi";
export declare function getSiteInstanceDeployment(args: GetSiteInstanceDeploymentArgs, opts?: pulumi.InvokeOptions): Promise<GetSiteInstanceDeploymentResult>;
export interface GetSiteInstanceDeploymentArgs {
    /**
     * Id of the deployment
     */
    readonly id: string;
    /**
     * Id of web app instance
     */
    readonly instanceId: string;
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
export interface GetSiteInstanceDeploymentResult {
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
