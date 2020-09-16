import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getApp(args: GetAppArgs, opts?: pulumi.InvokeOptions): Promise<GetAppResult>;
export interface GetAppArgs {
    /**
     * The name of the resource group that contains the IoT Central application.
     */
    readonly resourceGroupName: string;
    /**
     * The ARM resource name of the IoT Central application.
     */
    readonly resourceName: string;
}
/**
 * The IoT Central application.
 */
export interface GetAppResult {
    /**
     * The ID of the application.
     */
    readonly applicationId: string;
    /**
     * The display name of the application.
     */
    readonly displayName?: string;
    /**
     * The resource location.
     */
    readonly location: string;
    /**
     * The ARM resource name.
     */
    readonly name: string;
    /**
     * A valid instance SKU.
     */
    readonly sku: outputs.iotcentral.v20180901.AppSkuInfoResponse;
    /**
     * The subdomain of the application.
     */
    readonly subdomain?: string;
    /**
     * The resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The ID of the application template, which is a blueprint that defines the characteristics and behaviors of an application. Optional; if not specified, defaults to a blank blueprint and allows the application to be defined from scratch.
     */
    readonly template?: string;
    /**
     * The resource type.
     */
    readonly type: string;
}
