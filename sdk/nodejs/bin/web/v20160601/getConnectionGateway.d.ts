import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getConnectionGateway(args: GetConnectionGatewayArgs, opts?: pulumi.InvokeOptions): Promise<GetConnectionGatewayResult>;
export interface GetConnectionGatewayArgs {
    /**
     * The connection gateway name
     */
    readonly connectionGatewayName: string;
    /**
     * The resource group
     */
    readonly resourceGroupName: string;
}
/**
 * The gateway definition
 */
export interface GetConnectionGatewayResult {
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
    readonly properties: outputs.web.v20160601.ConnectionGatewayDefinitionResponseProperties;
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
