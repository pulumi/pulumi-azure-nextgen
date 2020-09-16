import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listChannelWithKeys(args: ListChannelWithKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListChannelWithKeysResult>;
export interface ListChannelWithKeysArgs {
    /**
     * The name of the Channel resource.
     */
    readonly channelName: string;
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
 * Bot channel resource definition
 */
export interface ListChannelWithKeysResult {
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
     * The set of properties specific to bot channel resource
     */
    readonly properties: outputs.botservice.v20200602.ChannelResponse;
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
