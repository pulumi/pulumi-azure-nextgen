import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getAssetFilter(args: GetAssetFilterArgs, opts?: pulumi.InvokeOptions): Promise<GetAssetFilterResult>;
export interface GetAssetFilterArgs {
    /**
     * The Media Services account name.
     */
    readonly accountName: string;
    /**
     * The Asset name.
     */
    readonly assetName: string;
    /**
     * The Asset Filter name
     */
    readonly filterName: string;
    /**
     * The name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * An Asset Filter.
 */
export interface GetAssetFilterResult {
    /**
     * The first quality.
     */
    readonly firstQuality?: outputs.media.v20180701.FirstQualityResponse;
    /**
     * The name of the resource.
     */
    readonly name: string;
    /**
     * The presentation time range.
     */
    readonly presentationTimeRange?: outputs.media.v20180701.PresentationTimeRangeResponse;
    /**
     * The tracks selection conditions.
     */
    readonly tracks?: outputs.media.v20180701.FilterTrackSelectionResponse[];
    /**
     * The type of the resource.
     */
    readonly type: string;
}
