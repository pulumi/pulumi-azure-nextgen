import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getBot(args: GetBotArgs, opts?: pulumi.InvokeOptions): Promise<GetBotResult>;
export interface GetBotArgs {
    /**
     * The name of the Bot resource group in the user subscription.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the Bot resource.
     */
    readonly resourceName: string;
}
/**
 * Bot resource definition
 */
export interface GetBotResult {
    /**
     * Entity Tag
     */
    readonly etag?: string;
    /**
     * Required. Gets or sets the Kind of the resource.
     */
    readonly kind?: string;
    /**
     * Specifies the location of the resource.
     */
    readonly location?: string;
    /**
     * Specifies the name of the resource.
     */
    readonly name: string;
    /**
     * The set of properties specific to bot resource
     */
    readonly properties: outputs.botservice.v20200602.BotPropertiesResponse;
    /**
     * Gets or sets the SKU of the resource.
     */
    readonly sku?: outputs.botservice.v20200602.SkuResponse;
    /**
     * Contains resource tags defined as key/value pairs.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Specifies the type of the resource.
     */
    readonly type: string;
}
