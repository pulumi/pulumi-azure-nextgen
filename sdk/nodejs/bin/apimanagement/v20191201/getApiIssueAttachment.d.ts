import * as pulumi from "@pulumi/pulumi";
export declare function getApiIssueAttachment(args: GetApiIssueAttachmentArgs, opts?: pulumi.InvokeOptions): Promise<GetApiIssueAttachmentResult>;
export interface GetApiIssueAttachmentArgs {
    /**
     * API identifier. Must be unique in the current API Management service instance.
     */
    readonly apiId: string;
    /**
     * Attachment identifier within an Issue. Must be unique in the current Issue.
     */
    readonly attachmentId: string;
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
 * Issue Attachment Contract details.
 */
export interface GetApiIssueAttachmentResult {
    /**
     * An HTTP link or Base64-encoded binary data.
     */
    readonly content: string;
    /**
     * Either 'link' if content is provided via an HTTP link or the MIME type of the Base64-encoded binary data provided in the 'content' property.
     */
    readonly contentFormat: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Filename by which the binary data will be saved.
     */
    readonly title: string;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
}
