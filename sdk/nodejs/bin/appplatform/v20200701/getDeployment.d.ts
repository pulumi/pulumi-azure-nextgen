import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getDeployment(args: GetDeploymentArgs, opts?: pulumi.InvokeOptions): Promise<GetDeploymentResult>;
export interface GetDeploymentArgs {
    /**
     * The name of the App resource.
     */
    readonly appName: string;
    /**
     * The name of the Deployment resource.
     */
    readonly deploymentName: string;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the Service resource.
     */
    readonly serviceName: string;
}
/**
 * Deployment resource payload
 */
export interface GetDeploymentResult {
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Properties of the Deployment resource
     */
    readonly properties: outputs.appplatform.v20200701.DeploymentResourcePropertiesResponse;
    /**
     * Sku of the Deployment resource
     */
    readonly sku?: outputs.appplatform.v20200701.SkuResponse;
    /**
     * The type of the resource.
     */
    readonly type: string;
}
