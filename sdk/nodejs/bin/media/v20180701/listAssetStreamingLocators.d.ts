import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listAssetStreamingLocators(args: ListAssetStreamingLocatorsArgs, opts?: pulumi.InvokeOptions): Promise<ListAssetStreamingLocatorsResult>;
export interface ListAssetStreamingLocatorsArgs {
    /**
     * The Media Services account name.
     */
    readonly accountName: string;
    /**
     * The Asset name.
     */
    readonly assetName: string;
    /**
     * The name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * The Streaming Locators associated with this Asset.
 */
export interface ListAssetStreamingLocatorsResult {
    /**
     * The list of Streaming Locators.
     */
    readonly streamingLocators: outputs.media.v20180701.AssetStreamingLocatorResponse[];
}
