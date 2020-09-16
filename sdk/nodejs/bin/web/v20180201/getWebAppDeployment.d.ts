import * as pulumi from "@pulumi/pulumi";
export declare function getWebAppDeployment(args: GetWebAppDeploymentArgs, opts?: pulumi.InvokeOptions): Promise<GetWebAppDeploymentResult>;
export interface GetWebAppDeploymentArgs {
    /**
     * Deployment ID.
     */
    readonly id: string;
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
export interface GetWebAppDeploymentResult {
    /**
     * True if deployment is currently active, false if completed and null if not started.
     */
    readonly active?: boolean;
    /**
     * Who authored the deployment.
     */
    readonly author?: string;
    /**
     * Author email.
     */
    readonly authorEmail?: string;
    /**
     * Who performed the deployment.
     */
    readonly deployer?: string;
    /**
     * Details on deployment.
     */
    readonly details?: string;
    /**
     * End time.
     */
    readonly endTime?: string;
    /**
     * Kind of resource.
     */
    readonly kind?: string;
    /**
     * Details about deployment status.
     */
    readonly message?: string;
    /**
     * Resource Name.
     */
    readonly name: string;
    /**
     * Start time.
     */
    readonly startTime?: string;
    /**
     * Deployment status.
     */
    readonly status?: number;
    /**
     * Resource type.
     */
    readonly type: string;
}
