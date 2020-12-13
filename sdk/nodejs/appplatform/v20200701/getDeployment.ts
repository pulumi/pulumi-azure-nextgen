// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getDeployment(args: GetDeploymentArgs, opts?: pulumi.InvokeOptions): Promise<GetDeploymentResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:appplatform/v20200701:getDeployment", {
        "appName": args.appName,
        "deploymentName": args.deploymentName,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

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
     * Fully qualified resource Id for the resource.
     */
    readonly id: string;
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
