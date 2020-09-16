import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function listQueryKeyBySearchService(args: ListQueryKeyBySearchServiceArgs, opts?: pulumi.InvokeOptions): Promise<ListQueryKeyBySearchServiceResult>;
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
     * The query keys for the Azure Cognitive Search service.
     */
    readonly value: outputs.search.v20150819.QueryKeyResponse[];
}
