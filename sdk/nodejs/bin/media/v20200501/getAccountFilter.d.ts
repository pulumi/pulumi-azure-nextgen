import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getAccountFilter(args: GetAccountFilterArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountFilterResult>;
export interface GetAccountFilterArgs {
    /**
     * The Media Services account name.
     */
    readonly accountName: string;
    /**
     * The Account Filter name
     */
    readonly filterName: string;
    /**
     * The name of the resource group within the Azure subscription.
     */
    readonly resourceGroupName: string;
}
/**
 * An Account Filter.
 */
export interface GetAccountFilterResult {
    /**
     * The first quality.
     */
    readonly firstQuality?: outputs.media.v20200501.FirstQualityResponse;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The presentation time range.
     */
    readonly presentationTimeRange?: outputs.media.v20200501.PresentationTimeRangeResponse;
    /**
     * The tracks selection conditions.
     */
    readonly tracks?: outputs.media.v20200501.FilterTrackSelectionResponse[];
    /**
     * The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.
     */
    readonly type: string;
}
