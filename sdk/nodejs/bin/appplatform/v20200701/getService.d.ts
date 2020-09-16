import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getService(args: GetServiceArgs, opts?: pulumi.InvokeOptions): Promise<GetServiceResult>;
export interface GetServiceArgs {
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
 * Service resource
 */
export interface GetServiceResult {
    /**
     * The GEO location of the resource.
     */
    readonly location?: string;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * Properties of the Service resource
     */
    readonly properties: outputs.appplatform.v20200701.ClusterResourcePropertiesResponse;
    /**
     * Sku of the Service resource
     */
    readonly sku?: outputs.appplatform.v20200701.SkuResponse;
    /**
     * Tags of the service which is a list of key value pairs that describe the resource.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The type of the resource.
     */
    readonly type: string;
}
