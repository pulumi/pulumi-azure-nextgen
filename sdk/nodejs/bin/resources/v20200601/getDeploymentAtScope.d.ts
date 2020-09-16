import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getDeploymentAtScope(args: GetDeploymentAtScopeArgs, opts?: pulumi.InvokeOptions): Promise<GetDeploymentAtScopeResult>;
export interface GetDeploymentAtScopeArgs {
    /**
     * The name of the deployment.
     */
    readonly deploymentName: string;
    /**
     * The resource scope.
     */
    readonly scope: string;
}
/**
 * Deployment information.
 */
export interface GetDeploymentAtScopeResult {
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
