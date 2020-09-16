import * as pulumi from "@pulumi/pulumi";
export declare function getSiteDeployment(args: GetSiteDeploymentArgs, opts?: pulumi.InvokeOptions): Promise<GetSiteDeploymentResult>;
export interface GetSiteDeploymentArgs {
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
}
/**
 * Represents user credentials used for publishing activity
 */
export interface GetSiteDeploymentResult {
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
