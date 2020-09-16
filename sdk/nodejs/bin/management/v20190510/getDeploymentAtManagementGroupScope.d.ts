import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getDeploymentAtManagementGroupScope(args: GetDeploymentAtManagementGroupScopeArgs, opts?: pulumi.InvokeOptions): Promise<GetDeploymentAtManagementGroupScopeResult>;
export interface GetDeploymentAtManagementGroupScopeArgs {
    /**
     * The name of the deployment.
     */
    readonly deploymentName: string;
    /**
     * The management group ID.
     */
    readonly groupId: string;
}
/**
 * Deployment information.
 */
export interface GetDeploymentAtManagementGroupScopeResult {
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
    readonly properties: outputs.management.v20190510.DeploymentPropertiesExtendedResponse;
    /**
     * The type of the deployment.
     */
    readonly type: string;
}
