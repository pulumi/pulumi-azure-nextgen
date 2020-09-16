import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getDeploymentAtSubscriptionScope(args: GetDeploymentAtSubscriptionScopeArgs, opts?: pulumi.InvokeOptions): Promise<GetDeploymentAtSubscriptionScopeResult>;
export interface GetDeploymentAtSubscriptionScopeArgs {
    /**
     * The name of the deployment.
     */
    readonly deploymentName: string;
}
/**
 * Deployment information.
 */
export interface GetDeploymentAtSubscriptionScopeResult {
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
    readonly properties: outputs.resources.v20190501.DeploymentPropertiesExtendedResponse;
    /**
     * The type of the deployment.
     */
    readonly type: string;
}
