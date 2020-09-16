import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getDeploymentAtScope(args: GetDeploymentAtScopeArgs, opts?: pulumi.InvokeOptions): Promise<GetDeploymentAtScopeResult>;
export interface GetDeploymentAtScopeArgs {
    /**
     * The name of the deployment.
     */
    readonly deploymentName: string;
    /**
     * The scope of a deployment.
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
    readonly properties: outputs.resources.v20190801.DeploymentPropertiesExtendedResponse;
    /**
     * The type of the deployment.
     */
    readonly type: string;
}
