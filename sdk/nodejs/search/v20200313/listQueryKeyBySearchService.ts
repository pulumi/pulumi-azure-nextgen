// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function listQueryKeyBySearchService(args: ListQueryKeyBySearchServiceArgs, opts?: pulumi.InvokeOptions): Promise<ListQueryKeyBySearchServiceResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:search/v20200313:listQueryKeyBySearchService", {
        "resourceGroupName": args.resourceGroupName,
        "searchServiceName": args.searchServiceName,
    }, opts);
}

export interface ListQueryKeyBySearchServiceArgs {
    /**
     * The name of the resource group within the current subscription. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the Azure Cognitive Search service associated with the specified resource group.
     */
    readonly searchServiceName: string;
}

/**
 * Response containing the query API keys for a given Azure Cognitive Search service.
 */
export interface ListQueryKeyBySearchServiceResult {
    /**
     * Request URL that can be used to query next page of query keys. Returned when the total number of requested query keys exceed maximum page size.
     */
    readonly nextLink: string;
    /**
     * The query keys for the Azure Cognitive Search service.
     */
    readonly value: outputs.search.v20200313.QueryKeyResponse[];
}
