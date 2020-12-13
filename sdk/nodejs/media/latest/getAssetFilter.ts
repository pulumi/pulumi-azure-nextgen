// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getAssetFilter(args: GetAssetFilterArgs, opts?: pulumi.InvokeOptions): Promise<GetAssetFilterResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:media/latest:getAssetFilter", {
        "accountName": args.accountName,
        "assetName": args.assetName,
        "filterName": args.filterName,
        "resourceGroupName": args.resourceGroupName,
    }, opts);
}

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
    readonly firstQuality?: outputs.media.latest.FirstQualityResponse;
    /**
     * Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
     */
    readonly id: string;
    /**
     * The name of the resource
     */
    readonly name: string;
    /**
     * The presentation time range.
     */
    readonly presentationTimeRange?: outputs.media.latest.PresentationTimeRangeResponse;
    /**
     * The tracks selection conditions.
     */
    readonly tracks?: outputs.media.latest.FilterTrackSelectionResponse[];
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    readonly type: string;
}
