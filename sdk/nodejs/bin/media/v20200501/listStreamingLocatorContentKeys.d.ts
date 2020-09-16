import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listStreamingLocatorContentKeys(args: ListStreamingLocatorContentKeysArgs, opts?: pulumi.InvokeOptions): Promise<ListStreamingLocatorContentKeysResult>;
export interface ListStreamingLocatorContentKeysArgs {
    /**
     * The Media Services account name.
     */
    readonly accountName: string;
    /**
     * The name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
    /**
     * The Streaming Locator name.
     */
    readonly streamingLocatorName: string;
}
/**
 * Class of response for listContentKeys action
 */
export interface ListStreamingLocatorContentKeysResult {
    /**
     * ContentKeys used by current Streaming Locator
     */
    readonly contentKeys?: outputs.media.v20200501.StreamingLocatorContentKeyResponse[];
}
