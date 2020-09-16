import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getIotDpsResource(args: GetIotDpsResourceArgs, opts?: pulumi.InvokeOptions): Promise<GetIotDpsResourceResult>;
export interface GetIotDpsResourceArgs {
    /**
     * Name of the provisioning service to retrieve.
     */
    readonly provisioningServiceName: string;
    /**
     * Resource group name.
     */
    readonly resourceGroupName: string;
}
/**
 * The description of the provisioning service.
 */
export interface GetIotDpsResourceResult {
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
     * Service specific properties for a provisioning service
     */
    readonly properties: outputs.devices.v20171115.IotDpsPropertiesDescriptionResponse;
    /**
     * SKU info for a provisioning service.
     */
    readonly sku: outputs.devices.v20171115.IotDpsSkuInfoResponse;
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
