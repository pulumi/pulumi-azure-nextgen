// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../../types";
import * as utilities from "../../utilities";

export function getApiIssueComment(args: GetApiIssueCommentArgs, opts?: pulumi.InvokeOptions): Promise<GetApiIssueCommentResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("azure-nextgen:apimanagement/latest:getApiIssueComment", {
        "apiId": args.apiId,
        "commentId": args.commentId,
        "issueId": args.issueId,
        "resourceGroupName": args.resourceGroupName,
        "serviceName": args.serviceName,
    }, opts);
}

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
     * Resource ID.
     */
    readonly id: string;
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
