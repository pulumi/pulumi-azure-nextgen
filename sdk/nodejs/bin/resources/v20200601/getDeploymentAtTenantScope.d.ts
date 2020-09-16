import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getDeploymentAtTenantScope(args: GetDeploymentAtTenantScopeArgs, opts?: pulumi.InvokeOptions): Promise<GetDeploymentAtTenantScopeResult>;
export interface GetDeploymentAtTenantScopeArgs {
    /**
     * The name of the deployment.
     */
    readonly deploymentName: string;
}
/**
 * Deployment information.
 */
export interface GetDeploymentAtTenantScopeResult {
    /**
     * the location of the deployment.
     */
    readonly location?: string;
    /**
     * The name of the deployment.
     */
    readonly name: string;
    /**
     * Deployment properties.
     */
    readonly properties: outputs.resources.v20200601.DeploymentPropertiesExtendedResponse;
    /**
     * Deployment tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of the deployment.
     */
    readonly type: string;
}
