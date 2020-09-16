import * as pulumi from "@pulumi/pulumi";
export declare function getApiIssueComment(args: GetApiIssueCommentArgs, opts?: pulumi.InvokeOptions): Promise<GetApiIssueCommentResult>;
export interface GetApiIssueCommentArgs {
    /**
     * API identifier. Must be unique in the current API Management service instance.
     */
    readonly apiId: string;
    /**
     * Comment identifier within an Issue. Must be unique in the current Issue.
     */
    readonly commentId: string;
    /**
     * Issue identifier. Must be unique in the current API Management service instance.
     */
    readonly issueId: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: string;
}
/**
 * Issue Comment Contract details.
 */
export interface GetApiIssueCommentResult {
    /**
     * Date and time when the comment was created.
     */
    readonly createdDate?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Comment text.
     */
    readonly text: string;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
    /**
     * A resource identifier for the user who left the comment.
     */
    readonly userId: string;
}
