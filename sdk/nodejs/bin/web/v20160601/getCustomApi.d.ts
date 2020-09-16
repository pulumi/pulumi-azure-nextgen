import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getCustomApi(args: GetCustomApiArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomApiResult>;
export interface GetCustomApiArgs {
    /**
     * API name
     */
    readonly apiName: string;
    /**
     * The resource group
     */
    readonly resourceGroupName: string;
}
/**
 * A custom API
 */
export interface GetCustomApiResult {
    /**
     * Resource ETag
     */
    readonly etag?: string;
    /**
     * Resource location
     */
    readonly location?: string;
    /**
     * Resource name
     */
    readonly name: string;
    /**
     * Custom API properties
     */
    readonly properties: outputs.web.v20160601.CustomApiPropertiesDefinitionResponse;
    /**
     * Resource tags
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Resource type
     */
    readonly type: string;
}
