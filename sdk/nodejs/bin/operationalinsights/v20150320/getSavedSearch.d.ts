import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getSavedSearch(args: GetSavedSearchArgs, opts?: pulumi.InvokeOptions): Promise<GetSavedSearchResult>;
export interface GetSavedSearchArgs {
    /**
     * The Resource Group name.
     */
    readonly resourceGroupName: string;
    /**
     * The id of the saved search.
     */
    readonly savedSearchId: string;
    /**
     * The Log Analytics Workspace name.
     */
    readonly workspaceName: string;
}
/**
 * Value object for saved search results.
 */
export interface GetSavedSearchResult {
    /**
     * The category of the saved search. This helps the user to find a saved search faster.
     */
    readonly category: string;
    /**
     * Saved search display name.
     */
    readonly displayName: string;
    /**
     * The ETag of the saved search.
     */
    readonly eTag?: string;
    /**
     * The name of the saved search.
     */
    readonly name: string;
    /**
     * The query expression for the saved search. Please see https://docs.microsoft.com/en-us/azure/log-analytics/log-analytics-search-reference for reference.
     */
    readonly query: string;
    /**
     * The tags attached to the saved search.
     */
    readonly tags?: outputs.operationalinsights.v20150320.TagResponse[];
    /**
     * The type of the saved search.
     */
    readonly type: string;
    /**
     * The version number of the query language. The current version is 2 and is the default.
     */
    readonly version?: number;
}
