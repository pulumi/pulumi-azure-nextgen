import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getBookmark(args: GetBookmarkArgs, opts?: pulumi.InvokeOptions): Promise<GetBookmarkResult>;
export interface GetBookmarkArgs {
    /**
     * Bookmark ID
     */
    readonly bookmarkId: string;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the workspace.
     */
    readonly workspaceName: string;
}
/**
 * Represents a bookmark in Azure Security Insights.
 */
export interface GetBookmarkResult {
    /**
     * The time the bookmark was created
     */
    readonly created?: string;
    /**
     * Describes a user that created the bookmark
     */
    readonly createdBy?: outputs.operationalinsights.v20200101.UserInfoResponse;
    /**
     * The display name of the bookmark
     */
    readonly displayName: string;
    /**
     * Etag of the azure resource
     */
    readonly etag?: string;
    /**
     * Describes an incident that relates to bookmark
     */
    readonly incidentInfo?: outputs.operationalinsights.v20200101.IncidentInfoResponse;
    /**
     * List of labels relevant to this bookmark
     */
    readonly labels?: string[];
    /**
     * Azure resource name
     */
    readonly name: string;
    /**
     * The notes of the bookmark
     */
    readonly notes?: string;
    /**
     * The query of the bookmark.
     */
    readonly query: string;
    /**
     * The query result of the bookmark.
     */
    readonly queryResult?: string;
    /**
     * Azure resource type
     */
    readonly type: string;
    /**
     * The last time the bookmark was updated
     */
    readonly updated?: string;
    /**
     * Describes a user that updated the bookmark
     */
    readonly updatedBy?: outputs.operationalinsights.v20200101.UserInfoResponse;
}
