import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getIotHubResource(args: GetIotHubResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetIotHubResourceResult>;
export interface GetIotHubResourceArgs {
    /**
     * The name of the resource group that contains the IoT hub.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the IoT hub.
     */
    readonly resourceName: string;
}
/**
 * The description of the IoT hub.
 */
export interface GetIotHubResourceResult {
    /**
     * The Etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal ETag convention.
     */
    readonly etag?: string;
    /**
     * The resource location.
     */
    readonly location: string;
    /**
     * The resource name.
     */
    readonly name: string;
    /**
     * IotHub properties
     */
    readonly properties: outputs.devices.v20191104.IotHubPropertiesResponse;
    /**
     * IotHub SKU info
     */
    readonly sku: outputs.devices.v20191104.IotHubSkuInfoResponse;
    /**
     * The resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * The resource type.
     */
    readonly type: string;
}
