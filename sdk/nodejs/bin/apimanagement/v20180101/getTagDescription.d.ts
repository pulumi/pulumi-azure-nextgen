import * as pulumi from "@pulumi/pulumi";
export declare function getTagDescription(args: GetTagDescriptionArgs, opts?: pulumi.InvokeOptions): Promise<GetTagDescriptionResult>;
export interface GetTagDescriptionArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    readonly apiId: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: string;
    /**
     * Tag identifier. Must be unique in the current API Management service instance.
     */
    readonly tagId: string;
}
/**
 * Contract details.
 */
export interface GetTagDescriptionResult {
    /**
     * Description of the Tag.
     */
    readonly description?: string;
    /**
     * Tag name.
     */
    readonly displayName?: string;
    /**
     * Description of the external resources describing the tag.
     */
    readonly externalDocsDescription?: string;
    /**
     * Absolute URL of external resources describing the tag.
     */
    readonly externalDocsUrl?: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
}
