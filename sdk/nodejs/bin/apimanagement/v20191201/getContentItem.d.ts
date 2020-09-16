import * as pulumi from "@pulumi/pulumi";
export declare function getContentItem(args: GetContentItemArgs, opts?: pulumi.InvokeOptions): Promise<GetContentItemResult>;
export interface GetContentItemArgs {
    /**
     * Content item identifier.
     */
    readonly contentItemId: string;
    /**
     * Content type identifier.
     */
    readonly contentTypeId: string;
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
 * Content type contract details.
 */
export interface GetContentItemResult {
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * Resource type for API Management resource.
     */
    readonly type: string;
}
