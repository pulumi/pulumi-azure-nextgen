import * as pulumi from "@pulumi/pulumi";
/**
 * Issue Attachment Contract details.
 */
export declare class ApiIssueAttachment extends pulumi.CustomResource {
    /**
     * Get an existing ApiIssueAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApiIssueAttachment;
    /**
     * Returns true if the given object is an instance of ApiIssueAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ApiIssueAttachment;
    /**
     * An HTTP link or Base64-encoded binary data.
     */
    readonly content: pulumi.Output<string>;
    /**
     * Either 'link' if content is provided via an HTTP link or the MIME type of the Base64-encoded binary data provided in the 'content' property.
     */
    readonly contentFormat: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Filename by which the binary data will be saved.
     */
    readonly title: pulumi.Output<string>;
    /**
     * Resource type for API Management resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a ApiIssueAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiIssueAttachmentArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a ApiIssueAttachment resource.
 */
export interface ApiIssueAttachmentArgs {
    /**
     * API identifier. Must be unique in the current API Management service instance.
     */
    readonly apiId: pulumi.Input<string>;
    /**
     * Attachment identifier within an Issue. Must be unique in the current Issue.
     */
    readonly attachmentId: pulumi.Input<string>;
    /**
     * An HTTP link or Base64-encoded binary data.
     */
    readonly content: pulumi.Input<string>;
    /**
     * Either 'link' if content is provided via an HTTP link or the MIME type of the Base64-encoded binary data provided in the 'content' property.
     */
    readonly contentFormat: pulumi.Input<string>;
    /**
     * Issue identifier. Must be unique in the current API Management service instance.
     */
    readonly issueId: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: pulumi.Input<string>;
    /**
     * Filename by which the binary data will be saved.
     */
    readonly title: pulumi.Input<string>;
}
