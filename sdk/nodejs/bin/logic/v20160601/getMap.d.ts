import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getMap(args: GetMapArgs, opts?: pulumi.InvokeOptions): Promise<GetMapResult>;
export interface GetMapArgs {
    /**
     * The integration account name.
     */
    readonly integrationAccountName: string;
    /**
     * The integration account map name.
     */
    readonly mapName: string;
    /**
     * The resource group name.
     */
    readonly resourceGroupName: string;
}
/**
 * The integration account map.
 */
export interface GetMapResult {
    /**
     * The changed time.
     */
    readonly changedTime: string;
    /**
     * The content.
     */
    readonly content?: string;
    /**
     * The content link.
     */
    readonly contentLink: outputs.logic.v20160601.ContentLinkResponse;
    /**
     * The content type.
     */
    readonly contentType?: string;
    /**
     * The created time.
     */
    readonly createdTime: string;
    /**
     * The resource location.
     */
    readonly location?: string;
    /**
     * The map type.
     */
    readonly mapType: string;
    /**
     * The metadata.
     */
    readonly metadata?: {
        [key: string]: any;
    };
    /**
     * Gets the resource name.
     */
    readonly name: string;
    /**
     * The parameters schema of integration account map.
     */
    readonly parametersSchema?: outputs.logic.v20160601.IntegrationAccountMapPropertiesResponseParametersSchema;
    /**
     * The resource tags.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Gets the resource type.
     */
    readonly type: string;
}
