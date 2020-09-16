import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getConnection(args: GetConnectionArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectionResult>;
export interface GetConnectionArgs {
    /**
     * Connection name
     */
    readonly connectionName: string;
    /**
     * The resource group
     */
    readonly resourceGroupName: string;
}
/**
 * API connection
 */
export interface GetConnectionResult {
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
    readonly properties: outputs.web.v20160601.ApiConnectionDefinitionResponseProperties;
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
